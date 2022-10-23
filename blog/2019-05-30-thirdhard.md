---
slug: thirdhard
title: 开发的三大难
author: zhangxuewen
author_title: Full Stack Developer
author_url: https://github.com/zhangxuewen
author_image_url: https://avatars.githubusercontent.com/u/1623160?v=4
tags: [架构]
---


程序员一般遇到这三种项目都会脑袋痛，改造，重构，迁移。因为它们都属于改动大，又很容易出问题的项目，但是对业务的价值又很阐述（主要是针对业务驱动型的公司，对于技术驱动型的公司比较好解释）。下面我结合一条小路详细给大家解释一下这三种技术难点

### 改造
首先来说改造，它的动作一般小于重构，就像一条路，可以通过小的改造。让路更好走  ，
改造想到的是业务功能的改造 ，需求不乱积到服务上，需要重新梳理 进行改造，
重构是更大的手术，在京东  进行soa的重构 ，在支付宝进行发现平台的重构 ，在阅文进行会员的重构等 
迁移一般是原来的东西不能用了：数据库上云迁移   ，从tars平台迁移到trps平台

### 重构
在马丁·福勒的《重构：改善既有代码的设计》中，所谓重构（refactoring）是这样一个过程：在不改变代码外在行为的前提下，对代码做出修改，以改进程序的内部结构。重构是一种经千
微服务重构 
语言重构
设计模式重构

### 迁移
当路已经破到不能改造的时候，就只能重修了 ，迁移面临的是不得不，因为路前面不能走了，需要迁移到另一条路上，但是依赖要到同一目标。
数据库迁移 
资产迁移
服务迁移




https://www.infoq.cn/article/cebfobzp21aqv4eaydeq
https://github.com/phodal/migration
https://gcp.infoq.cn/article.html?id=30c9ff79-c7ca-45c8-83c7-091a1f8b9922
https://mp.weixin.qq.com/s?__biz=MzI4MTY5NTk4Ng==&mid=2247489605&idx=1&sn=a590ce07d51761999c3e278bbbe40e2a&chksm=eba41bd8dcd392ce622a83addcfeac5502caa086071cc719377a53793436964ce57d903885fa&scene=27#wechat_redirect