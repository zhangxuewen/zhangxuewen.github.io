import React from 'react';
import styles from './ecology.module.css';
import AreaWrapper from '../AreaWrapper';

const data = [
  {
    title: '稳定性知识库',
    decs: '稳定性是一个软件的基础保证，同时它也是一项目需要持续建设的软件工程',
    image: '/img/solution_03.png',
    link: '/docs/knowledge/stability/about',
  },
  {
    title: '软件架构知识库',
    decs: '如果数据结算和算法是一个软件是血和肉，那么软件架构就是一个软件的骨架，好的骨架，可以让你的软件跑的更稳更快',
    image: '/img/solution_01.png',
    link: '/docs/knowledge/architecture/about',
  },
  {
    title: '中间件知识库',
    decs: '中间件位于各类应用/服务与操作系统/数据库系统以及其他系统软件之间，主要解决分布式环境下数据传输、访问、系统构建等问题',
    image: '/img/solution_02.png',
    link: '/docs/knowledge/middleware/about',
  },
  {
    title: '大数据知识库',
    decs: '指来自不同源头的结构化和非结构化数据，并且普通的数据处理软件已不足以处理的大而复杂的数据集',
    image: '/img/solution_04.png',
    link: '/docs/knowledge/bigdata/about',
  },
];

function Ecology() {
  return (
    <AreaWrapper title={'知识库'} decs={'沉淀知识技能，打造技术体系'} contentStyle={styles.container}>
      {data.map((item, index) => (
        <a key={index} className={styles.card} href={item.link} >
          <img src={item.image}></img>
          <div className={styles.content}>
            <h3>{item.title}</h3>
            <div>
              <span>{item.decs}</span>
            </div>
          </div>
        </a>
      ))}
    </AreaWrapper>
  );
}

export default Ecology;
