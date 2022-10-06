import React from 'react';
import styles from './users.module.css';
import AreaWrapper from '../AreaWrapper';

const data = [
  {
    name: 'tars框架',
    image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ftm-image.tianyancha.com%2Ftm%2F8fe69127076d6f6b463ce78c27c93d2a.jpg&refer=http%3A%2F%2Ftm-image.tianyancha.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654254931&t=1c6f70f82383c4e27e1a2987c5a11f44',
    href:'https://tarscloud.org/',
  },
  {
    name: 'kafka',
    image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fupload-images.jianshu.io%2Fupload_images%2F5220087-90a153b8b5a87a10.jpg&refer=http%3A%2F%2Fupload-images.jianshu.io&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654254973&t=17ae10e30c8e087eb10f167ba46ceabc',
    href:'https://kafka.apache.org/',
  },

  {
    name: 'tidb',
    image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fstatic001.infoq.cn%2Fresource%2Fimage%2F38%2Fa8%2F38b79ef01d63950ebb70072a36d521a8.png&refer=http%3A%2F%2Fstatic001.infoq.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654255089&t=1818f3bb62ba0e3ec0aaa129a29b94fc',
    href:'https://pingcap.com/zh/',
   
  },
  {
    name: 'react',
    image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ffile.boxuegu.com%2F07be134def9b44618f3cee0f97077169.png&refer=http%3A%2F%2Ffile.boxuegu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654256202&t=2d6e91772f63087939605907badd5dd3',
    href:'https://reactjs.org/',
   
  },
  {
    name: 'springboot',
    image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.zhimg.com%2Fv2-f2505a9bb4cd82d8f2f0d7b91243f9e0_1200x500.jpg&refer=http%3A%2F%2Fpic1.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654254882&t=40ba46f41eb543397a2adc2847eb6bdd',
    href:'https://spring.io/',
   
  },
  {
    name: 'flink',
    image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcdn.bianchengquan.com%2Fb73ce398c39f506af761d2277d853a92%2Fblog%2F60077f0eda647.jpeg&refer=http%3A%2F%2Fcdn.bianchengquan.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654255252&t=87d3cbb6050327098d5342e5e3975342',
    href:'https://flink.apache.org/',
   
  }
];

function Users() {
  return (
    <AreaWrapper
      title={'开源项目'}
      decs={'关注开源，提升技能，造轮子，也是一种创造'}
      contentStyle={styles.content}
      style={{
        minHeight: 'auto',
      }}
      isBlock
    >
      {data.map((item, index) => (
        <div key={index} className={styles.logo}>
          <a href={item.href} style={{textDecoration:'none'}}>
           <img alt={item.name} src={item.image} className={item.fill && styles.fill}></img>
          </a>
        </div>
      ))}
    </AreaWrapper>
  );
}

export default Users;
