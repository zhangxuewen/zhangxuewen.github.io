import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', '497'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '428'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'f10'),
    exact: true
  },
  {
    path: '/blog/tags/技术',
    component: ComponentCreator('/blog/tags/技术', '890'),
    exact: true
  },
  {
    path: '/blog/tags/agile',
    component: ComponentCreator('/blog/tags/agile', '6b1'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', 'e67'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'fca'),
    exact: true
  },
  {
    path: '/blog/world',
    component: ComponentCreator('/blog/world', '664'),
    exact: true
  },
  {
    path: '/component',
    component: ComponentCreator('/component', '261')
  },
  {
    path: '/contentweekly',
    component: ComponentCreator('/contentweekly', '575'),
    exact: true
  },
  {
    path: '/contentweekly/archive',
    component: ComponentCreator('/contentweekly/archive', '3b8'),
    exact: true
  },
  {
    path: '/contentweekly/tags',
    component: ComponentCreator('/contentweekly/tags', 'f3c'),
    exact: true
  },
  {
    path: '/contentweekly/tags/agile-1',
    component: ComponentCreator('/contentweekly/tags/agile-1', 'adf'),
    exact: true
  },
  {
    path: '/contentweekly/tags/hello-1',
    component: ComponentCreator('/contentweekly/tags/hello-1', 'e38'),
    exact: true
  },
  {
    path: '/contentweekly/welcome',
    component: ComponentCreator('/contentweekly/welcome', 'f4d'),
    exact: true
  },
  {
    path: '/docs/guide/advance',
    component: ComponentCreator('/docs/guide/advance', 'fd5')
  },
  {
    path: '/docs/guide/advance/antd',
    component: ComponentCreator('/docs/guide/advance/antd', '28f'),
    exact: true
  },
  {
    path: '/docs/guide/advance/fusion',
    component: ComponentCreator('/docs/guide/advance/fusion', '713'),
    exact: true
  },
  {
    path: '/docs/guide/basic/api',
    component: ComponentCreator('/docs/guide/basic/api', '6dd'),
    exact: true
  },
  {
    path: '/docs/guide/develop/plugin-build',
    component: ComponentCreator('/docs/guide/develop/plugin-build', '3fe'),
    exact: true
  },
  {
    path: '/docs/guide/develop/plugin-dev',
    component: ComponentCreator('/docs/guide/develop/plugin-dev', '6e5'),
    exact: true
  },
  {
    path: '/docs/guide/develop/plugin-list',
    component: ComponentCreator('/docs/guide/develop/plugin-list', '6ac'),
    exact: true
  },
  {
    path: '/docs/guide/develop/plugin-runtime',
    component: ComponentCreator('/docs/guide/develop/plugin-runtime', '437'),
    exact: true
  },
  {
    path: '/docs/icestark',
    component: ComponentCreator('/docs/icestark', 'a8d')
  },
  {
    path: '/docs/materials',
    component: ComponentCreator('/docs/materials', '28e')
  },
  {
    path: '/search',
    component: ComponentCreator('/search', 'b1c'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '3b8'),
    routes: [
      {
        path: '/docs/knowledge/about',
        component: ComponentCreator('/docs/knowledge/about', '30a'),
        exact: true,
        sidebar: "knowledge"
      },
      {
        path: '/docs/knowledge/architecture/about',
        component: ComponentCreator('/docs/knowledge/architecture/about', '54d'),
        exact: true,
        sidebar: "knowledge"
      },
      {
        path: '/docs/knowledge/bigdata/about',
        component: ComponentCreator('/docs/knowledge/bigdata/about', 'cb1'),
        exact: true,
        sidebar: "knowledge"
      },
      {
        path: '/docs/knowledge/middleware/about',
        component: ComponentCreator('/docs/knowledge/middleware/about', '4bb'),
        exact: true,
        sidebar: "knowledge"
      },
      {
        path: '/docs/knowledge/stability/about',
        component: ComponentCreator('/docs/knowledge/stability/about', 'dc5'),
        exact: true,
        sidebar: "knowledge"
      },
      {
        path: '/docs/manage/about',
        component: ComponentCreator('/docs/manage/about', '778'),
        exact: true,
        sidebar: "manage"
      },
      {
        path: '/docs/manage/communicate/about',
        component: ComponentCreator('/docs/manage/communicate/about', '353'),
        exact: true
      },
      {
        path: '/docs/manage/thinking/about',
        component: ComponentCreator('/docs/manage/thinking/about', '7cb'),
        exact: true
      },
      {
        path: '/docs/opensource/about',
        component: ComponentCreator('/docs/opensource/about', 'cf4'),
        exact: true,
        sidebar: "opensource"
      },
      {
        path: '/docs/opensource/doris/about',
        component: ComponentCreator('/docs/opensource/doris/about', '49a'),
        exact: true,
        sidebar: "opensource"
      },
      {
        path: '/docs/opensource/flink/about',
        component: ComponentCreator('/docs/opensource/flink/about', '0b1'),
        exact: true,
        sidebar: "opensource"
      },
      {
        path: '/docs/opensource/polaris/about',
        component: ComponentCreator('/docs/opensource/polaris/about', 'c66'),
        exact: true,
        sidebar: "opensource"
      },
      {
        path: '/docs/opensource/pulsar/about',
        component: ComponentCreator('/docs/opensource/pulsar/about', '742'),
        exact: true,
        sidebar: "opensource"
      },
      {
        path: '/docs/opensource/sofastack/about',
        component: ComponentCreator('/docs/opensource/sofastack/about', 'b76'),
        exact: true,
        sidebar: "opensource"
      },
      {
        path: '/docs/opensource/springboot/about',
        component: ComponentCreator('/docs/opensource/springboot/about', '8c4'),
        exact: true,
        sidebar: "opensource"
      },
      {
        path: '/docs/technotes/about',
        component: ComponentCreator('/docs/technotes/about', 'dee'),
        exact: true,
        sidebar: "technotes"
      },
      {
        path: '/docs/technotes/algorithms/about',
        component: ComponentCreator('/docs/technotes/algorithms/about', '7be'),
        exact: true,
        sidebar: "technotes"
      },
      {
        path: '/docs/technotes/concurrency/about',
        component: ComponentCreator('/docs/technotes/concurrency/about', '5ba'),
        exact: true,
        sidebar: "technotes"
      },
      {
        path: '/docs/technotes/database/about',
        component: ComponentCreator('/docs/technotes/database/about', '0c4'),
        exact: true,
        sidebar: "technotes"
      },
      {
        path: '/docs/technotes/distributed/about',
        component: ComponentCreator('/docs/technotes/distributed/about', '642'),
        exact: true,
        sidebar: "technotes"
      },
      {
        path: '/docs/technotes/frontend/about',
        component: ComponentCreator('/docs/technotes/frontend/about', '92b'),
        exact: true,
        sidebar: "technotes"
      },
      {
        path: '/docs/technotes/microservice/about',
        component: ComponentCreator('/docs/technotes/microservice/about', 'e01'),
        exact: true,
        sidebar: "technotes"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'cdd'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
