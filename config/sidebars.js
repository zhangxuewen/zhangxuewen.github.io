/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const getDocsFromDir = require('../scripts/getDocsFromDir');

module.exports = {
      knowledge: [
        'knowledge/about',
        {
            type: 'category',
            label: '稳定性',
            collapsed: false,
            items: getDocsFromDir('knowledge/stability'),
          },
          {
            type: 'category',
            label: '软件架构',
            collapsed: false,
            items: getDocsFromDir('knowledge/architecture'),
          },
          {
            type: 'category',
            label: '中间件',
            collapsed: false,
            items: getDocsFromDir('knowledge/middleware'),
          },
          {
            type: 'category',
            label: '大数据',
            collapsed: false,
            items: getDocsFromDir('knowledge/bigdata'),
          },
      ],
      manage: [
        'manage/about',
      ],
      opensource: [
        'opensource/about',
        {
            type: 'category',
            label: 'springboot',
            collapsed: false,
            items: getDocsFromDir('opensource/springboot'),
          },
          {
            type: 'category',
            label: 'sofastack',
            collapsed: false,
            items: getDocsFromDir('opensource/sofastack'),
          },
          {
            type: 'category',
            label: 'apache pulsar',
            collapsed: false,
            items: getDocsFromDir('opensource/pulsar'),
          },
          {
            type: 'category',
            label: 'apache doris',
            collapsed: false,
            items: getDocsFromDir('opensource/doris'),
          },
          {
            type: 'category',
            label: 'apache polaris',
            collapsed: false,
            items: getDocsFromDir('opensource/polaris'),
          },
          {
            type: 'category',
            label: 'apache flink',
            collapsed: false,
            items: getDocsFromDir('opensource/flink'),
          },

      ],
      technotes: [
        'technotes/about',
        {
            type: 'category',
            label: '并发技术',
            collapsed: false,
            items: getDocsFromDir('technotes/concurrency'),
          },
          {
            type: 'category',
            label: '分布式技术',
            collapsed: false,
            items: getDocsFromDir('technotes/distributed'),
          },
          {
            type: 'category',
            label: '数据库技术',
            collapsed: false,
            items: getDocsFromDir('technotes/database'),
          },
          {
            type: 'category',
            label: '前端技术',
            collapsed: false,
            items: getDocsFromDir('technotes/frontend'),
          },
          {
            type: 'category',
            label: '数据结构与算法',
            collapsed: false,
            items: getDocsFromDir('technotes/algorithms'),
          },
          {
            type: 'category',
            label: '微服务技术',
            collapsed: false,
            items: getDocsFromDir('technotes/microservice'),
          },
      ],
};