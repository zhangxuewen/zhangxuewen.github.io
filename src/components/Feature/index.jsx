import React from 'react';
import styles from './feature.module.css';
import AreaWrapper from '../AreaWrapper';

const data = [
  {
    title: '并发编程',
    decs: '研究java在并发编程领域的知识点，介绍一些并发编程的常用框架和实战经验',
    url: '/docs/technotes/concurrency/about',
  },
  {
    title: '分布式技术',
    decs: '学习分布式的原理，思考分布式技术在各种场景下应用实践',
    url: '/docs/technotes/distributed/about',
  },
  {
    title: '数据库技术',
    decs: '学习数据库的原理，关注HATP数据库的发展趋势，分享数据库的使用实践',
    url: '/docs/technotes/database/about',
  },
  {
    title: '大前端技术',
    decs: '学习前端及客户端的开发实践，梳理全栈技术人员的技术要点',
    url: '/docs/technotes/frontend/about',
  },
  {
    title: '微服务技术',
    decs: '介绍微服务的前世与今生，总结微服务技术的优势和缺点',
    url: '/docs/technotes/microservice/about',
  },
  {
    title: '数据结构与算法',
    decs: '整体数据结构和算法的知识点，梳理在不同场景下数据结算和算法的应用',
    url: '/docs/technotes/algorithms/about',
  }
];

function Feature() {
  return (
    <AreaWrapper
      title={'技术笔记'}
      decs={'好记性不如灿笔头'}
      contentStyle={styles.container}
      isBlock
    >
      {data.map((item, index) => (
        <a key={index} className={styles.card} href={item.url}>
          <div className={styles.content}>
            <h3>{item.title}</h3>
            <span>{item.decs}</span>
            <div style={{ flex: 1 }}></div>
            <p>{'详情 >'}</p>
          </div>
        </a>
      ))}
    </AreaWrapper>
  );
}

export default Feature;
