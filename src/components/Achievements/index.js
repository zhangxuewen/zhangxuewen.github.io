import React from "react";
import clsx from "clsx";
import styles from "./Achievements.module.css";

const FeatureList = [
  {
    title: "Spring Boot",
    image: "http://static-aliyun-doc.oss-cn-hangzhou.aliyuncs.com/assets/img/zh-CN/3127716951/p22240.png",
    earned: "由Pivotal团队提供的全新框架，其设计目的是用来简化新Spring应用的初始搭建以及开发过程",
    link: "/docs/opensource/springboot/about",
  },
  {
    title: "SOFAStack",
    image: "https://www.sofastack.tech/img/home/cd-microservice-system.png",
    earned: "一套用于快速构建金融级云原生架构的中间件，也是在金融场景里锤炼出来的最佳实践",
    link: "/docs/opensource/sofastack/about",
  },
  {
    title: "Apache Pulsar",
    image: "",
    earned: "一个分布式的消息发布/订阅传递平台，具有非常灵活地消息模型和一个直观的客户端API",
    link: "/docs/opensource/plusar/about",
  },
  {
    title: "Apache Doris",
    image: "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/mnz20ae3s23vv3e9ltmi.png",
    earned: "百度开源的简单易用、高性能和统一的分析数据库",
    link: "/docs/opensource/doris/about",
  },
  {
    title: "Polaris Mesh",
    image: "https://polarismesh.cn/img/topo-graph.6ba5fd56.png",
    earned: "一个支持多语言、多框架的云原生服务发现和治理中心",
    link: "/docs/opensource/polaris/about",
  },
  {
    title: "Apache Flink",
    image: "https://flink.apache.org/img/flink-home-graphic.png",
    earned: "一个集合众多具有竞争力特性于一身的第三代流处理引擎",
    link: "/docs/opensource/flink/about",
  },
];

function Feature({ image, title, earned,link }) {
  return (
  
    <div className={clsx("col col--4")}>
      <a  href={link}  key={title}>
      <div className="text--center">
        <img src={image} className={styles.featureSvg} alt={title}   />
      </div>
      <div className="text--center padding-horiz--md">
        <h3> {title} </h3>
        <p> {earned} </p>
      </div>
      </a>
    </div>
  
  );
}

export default function Achievements() {
  return (
    <section className={styles.features}>
      <h2>开源学习</h2>
      <p>关注开源，提升技能，造轮子，也是一种创造</p>
      <div className="container" >
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}