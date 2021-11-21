---
title: java启动性能优化
urlname: ogd5iu
date: '2021-09-24 14:14:08 +0800'
tags: []
categories: []
---

JIT 的 Profile 神器 JITWatch
[https://mp.weixin.qq.com/s/1r2NtTgsI63G_ICJMx6XxQ](https://mp.weixin.qq.com/s/1r2NtTgsI63G_ICJMx6XxQ)
​

作者：kelthuzadx
链接：https://www.zhihu.com/question/478887438/answer/2054092011
来源：知乎
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

AOT 编译即 jaotc，可以将 Java 代码编成二进制，然后虚拟机直接用这些二进制，而不是在运行时花费时间用 JIT 编译。JDK10 还尝试使用 AOT 背后的 Graal 代替 HotSpot VM 原有的 C2 JIT 编译器。但是它们两个的探索不算成功，首先用的不多，成功实践不多，关于这点可以问问自己有没有听过或者实际用过 jaotc 或者 Graal JIT。
其次 Graal 主要是 Oracle Labs 那边做开发，他们有一个[仓库](https://link.zhihu.com/?target=https%3A//github.com/oracle/graal)，相当于它们是 JDK 里面的 Graal 和 AOT 的上游，但是它们在 JDK 中的测试挂了没人修，也不太活跃，对 JDK 的代码演进会照成一定的困扰（小道消息可能还有派系斗争。。），基于总总原因，OpenJDK 社区决定在 JDK17 中移除它们，由 Oracle Labs 在独立的仓库中维护。所以，**OpenJDK 社区确实已经彻底放弃基于 Graal 的 AOT 了，**但是彻底放弃 AOT 这个技术本身也不一定，没准哪天就有个基于 C2 的 AOT 呢：P.
是不是听起来感觉还有救？反正还有 Oracle Labs 仓库的继续维护，不慌。
相关用户还是要慌一下，因为 Oracle Labs 也在它们的主线上[移除了 AOT](https://link.zhihu.com/?target=https%3A//github.com/oracle/graal/commit/2850e2ea3d47f0ac81a740f4ac48bf0e27135a11)，我们未来可能要永远告别 jaotc 了。至于 Graal 短时间内肯定还是有的，因为它是 GraalVM 安身立命的基础。
但是对于函数计算、Serverless 甚至更广阔的应用场景，快速启动、内存低占用这些仍然是刚需，我们仍然需要解决。
---- 探索 1
很多应用启动性能 Profiling 显示 JVM 启动慢的主要原因是类的**加载-链接-初始化**这一套，它们占据了启动的绝大部分时间，JVM 本身的启动是非常快的（-Xlog:startuptime)。对于类的三部曲，一个解决方案是[AppCDS](https://link.zhihu.com/?target=http%3A//openjdk.java.net/jeps/310)技术，OpenJDK 对它做了很多工作，阿里 JDK 也对快速启动和 AppCDS 做了大量改造（[所以，亲，看机会吗？](https://zhuanlan.zhihu.com/p/392773209)）
回到技术本身。JVM 之所以要加载-链接-初始化一个类，目的是让用户写的一个类 Foo，在虚拟机里面能有个数据结构（即 InstanceKlass）对应，这样虚拟机就可以通过它知道 Foo 实现了哪些接口，父类是谁等等。那么只要 Foo 类的字节码没有变过，我们跑多次应用，最终 JVM 里面的 InstanceKlass 就可以是一样的。这就是 AppCDS 的洞察，它可以让应用先 模拟 跑一次，把 JVM 里面已经走过加载-链接-初始化流程的 InstanceKlass 都存放到 App.jsa 文件里面，第二次 实际 运行时直接使用读 App.jsa，拿到已经准备就绪的 InstanceKlass 直接用，省去了加载-链接的开销。
---- 探索 2
注意 AppCDS 不能跳过初始化这个过程，这个过程需要另一项依赖 AppCDS 和 G1 的技术，即 Pre-initialization 提前初始化来部分解决。Pre-initialization 是比较前沿的技术，也处于探索期间，最新的工作可以使这个技术适用于非 G1 的垃圾回收器。
OpenJDK 还针对 AppCDS 做了非常多的工作，比如 DynamicAppCDS、AppCDS for Lambda/Proxy Classes，就不展开了。
----探索 3
除了 VM 上面做功夫之外，Linux CRIU 技术也不容忽视。CRIU 的介绍我就贴一点官网的：CRIU 可以冻结运行中的容器或者某个单独的应用，然后把它的状态保存到磁盘上， 然后下次运行时读取磁盘的数据恢复执行。**理想情况下，**应用程序是无感知的，它不知道被暂停过。
OpenJDK 也在积极探索，前一段时间 Azul 的一位开发者（为 macOS M1 提供 JDK 的那个男人）提议成立[CRaC 项目](https://link.zhihu.com/?target=https%3A//mail.openjdk.java.net/pipermail/discuss/2021-July/005862.html)（JDK 中需要花费大量努力的方向或者技术探索都会创建一个项目，而不是在主线，比如 ZGC，VectorAPI，Valhalla），这个技术旨在探索如何让 CRIU 和 JVM 更好的协作。该项目目前还在广泛讨(che)论(pi)，参与者至少包括 RedHat，Amazon，Azul。对于开发者，等就完事了。
----探索 4
再补充一点。
OpenJDK 还有一个[Leyden 项目](https://link.zhihu.com/?target=https%3A//mail.openjdk.java.net/pipermail/announce/2020-May/000289.html)，探索 static-image 技术，目标也是为了解决上面我们提到的 Java 启动慢、内存高占用等问题。
那么 static-image 又是啥呢？假如有个 void foo()方法，用传统的 AOT 如 jatoc，会把 foo 编译成二进制，而 static-image 会把 foo 编译成二进制，**同时**再带上语言运行时（比如 GC、线程模型等），最终得到一个“**闭合的二进制世界**”。static-image 其实就是更广义的 AOT。
所以不要悲观，OpenJDK 和 GraalVM 虽然都废弃了传统的 AOT 编译，但是两者都**不约而同**的探索 static-image 技术，OpenJDK 这边是 Leyden，GraalVM 那边是[SubstrateVM](https://www.zhihu.com/question/274042223/answer/1270829173)。不过我得吐槽一下。。Leyden 雷声大雨点小，截至目前(2021.8.12)还没有实际的动静，GraalVM 那边的 SubstrateVM 倒是做的风生水起。
