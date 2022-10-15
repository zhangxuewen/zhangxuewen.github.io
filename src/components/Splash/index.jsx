import React from 'react';
import Button from '../Button';
import styles from './splash.module.css';
import splash from '../../../static/img/splash.png';
import useBaseUrl from '@docusaurus/useBaseUrl';
function Splash() {
  return (
    <header>
      <div className={styles.splash}>
        <div className={styles['title-container']}>
          <h1 className={styles.title}>欢迎打卡</h1>
          <p className={styles.subtitle}>
            记录自己在工作、生活中的所思，所想，所得，希望用技术解决业务痛点，以数据驱动产品增长。分享最有价值的信息,让我们一起成长，一起进步💁👌🎍😍
          </p>
       
         
        </div>
        <div className={styles['img-container']}>
          <img className={styles['splash-img']}  width="600" height="400" src="https://haochenqi.com/zh-cn/img/programming.svg" />
        </div>
      </div>
      <div className={styles.con} >
          <a href='https://www.yuque.com/54iter/it' style={{textDecoration:'none'}}  target="_blank" >
            <div className={styles.condiv}>
                <div className={styles.text}>
                  <h3 className={styles.boxtitle}>专注</h3>
                  <p className={styles.boxdescription}>做技术必须要专注，技术知识需要即有深度也要有广度，这样才能用最合适的技术解决业务的问题</p>
                  <div style={{ flex: 1 }}></div>
                  <p>{'技术知识库 >'}</p>
                </div>  
            </div>
          </a>
          <a href='https://www.yuque.com/54iter/business' style={{textDecoration:'none'}}  target="_blank">
             <div className={styles.condiv}>
                <div className={styles.text}>
                  <h3 className={styles.boxtitle}>专业</h3>
                  <p className={styles.boxdescription}>解决业务的问题需要有专业的行业知识，理论联系实践，业务和技术相结合，才能更好的构建最好的服务</p>
                  <div style={{ flex: 1 }}></div>
                  <p>{'业务知识库 >'}</p>
                </div>  
             </div> 
          </a>
          <a href='https://www.yuque.com/54iter/product' style={{textDecoration:'none'}}  target="_blank">     
             <div className={styles.condiv}>              
                <div className={styles.text}>
                  <h3 className={styles.boxtitle}>精益</h3>
                  <p className={styles.boxdescription}>精益的产品开发，消除浪费和最大化价值交付，才能更好的满足用户的需求，解决用户的痛点</p>
                  <div style={{ flex: 1 }}></div>
                  <p>{'产品知识库 >'}</p>
                </div>
            </div>
          </a>
          <a href='https://www.yuque.com/54iter/data' style={{textDecoration:'none'}}  target="_blank">        
             <div className={styles.condiv}>
                <div className={styles.text}>
                  <h3 className={styles.boxtitle}>洞察</h3>
                  <p className={styles.boxdescription}>洞察业务数据，结合业务场景，梳理出影响业务结果的因素和作用链路，致力于数据驱动产品成长和增长</p>
                  <div style={{ flex: 1 }}></div>
                  <p>{'数据知识库 >'}</p>
                </div>
            </div>
          </a>
      </div>
    </header>
  );
}

export default Splash;
