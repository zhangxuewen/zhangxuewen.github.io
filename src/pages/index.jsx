/**
 * 首页
 */
import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Splash from '../components/Splash';
import Feature from '../components/Feature';
import Ecology from '../components/Ecology';
import Users from '../components/Users';
import Achievements from '../components/Achievements';




export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.tagline}`} description="">

      <Splash />
      <main>
        <Feature />
        <Ecology />
        <Achievements />
      </main>
    </Layout>
  );
}
