import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './hero.module.css';


function Hero() {
	return (
    <header className={styles.rdshero}>
      <div className="container">
        <div className="row">

          <div className="col col--12">
            <div className="row">
              <div className="col col--8">
                <h1 className="hero-title">The Home of<br /> Redis Developers</h1>

                <h2 className="hero-subtitle">
                    dkfksdfkalsdfa
                </h2>
              </div>
              <div className="col col--4">
                fdsfsdf
              </div>
            </div>
            <div className="boxes">
              <div className="box box-create">
               
                <span className="icon">
                 
                </span>
                <div className="text">
                  <h3 className="title">Create</h3>
                  <p className="description">Create a new database using cloud, Docker or from source</p>
                  <span className="more">Create a database </span>
                </div>
                <a href={useBaseUrl('/create/redis-stack')} className="link">Read More</a>
              </div>

              <div className="box box-develop">
               
                <span className="icon">
                  
                </span>
                <div className="text">
                  <h3 className="title">Develop</h3>
                  <p className="description">Develop your application using your favorite language</p>
                  <span className="more">Code your application </span>
                </div>
                <a href={useBaseUrl('/develop/')} className="link">Read More</a>
              </div>

              <div className="box box-explore">
                
                <span className="icon">
                  
                </span>
                <div className="text">
                  <h3 className="title">Explore</h3>
                  <p className="description">Insert,update and explore your database using RedisInsight </p>
                  <span className="more">Explore your data</span>
                </div>
                <a href={useBaseUrl('/explore/')} className="link">Read More</a>
              </div>

              <div className="box box-operate">
                
                <span className="icon">
                 
                </span>
                <div className="text">
                  <h3 className="title">Operate</h3>
                  <p className="description">Provision Redis and accelerate app deployment using DevOps </p>
                  <span className="more">Operate your database</span>
                </div>
                <a href={useBaseUrl('/operate/')} className="link">Read More</a>
              </div>


            </div>
          </div>
        </div>
      </div>
    </header>
	);
}
 
export default Hero;