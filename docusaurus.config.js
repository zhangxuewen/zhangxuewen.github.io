
const navbar = require('./config/navbar');
const footer = require('./config/footer');

const config = {
  title: '打卡机',
  tagline: '打卡构建自己的知识体系',
  url: 'https://51hpz.cn',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'zhangxuewen',
  projectName: 'zhangxuewen.github.io',
  deploymentBranch:'public',
  themeConfig: {
    announcementBar: {
      id: 'announcementBar',
      content: '<a href="/docs/guide/upgrade">给生活留下印记</a>',
      isCloseable: true,
    },
    navbar,
    footer,
    algolia: {
      apiKey: 'e019b7d51c61cf4ecd39398f71093afc',
      indexName: '51hpz',
      appId:'NIWOCWU1XK'
    }
    
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./config/sidebars.js'),
          editUrl:'https://github.com/ice-lab/site/edit/master/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/ice-lab/site/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-QZ0FEKY38G',
        }
      },
    ],
  ],
  plugins: [
    require.resolve("./plugins/redirect.js")   
  ]
};
config.plugins.push([
    require.resolve("@docusaurus/plugin-content-blog"),
    {
      id:'contentweekly',
      path: 'contentweekly',
      routeBasePath:'contentweekly',
    },
]);
if (process.env.USE_LOCAL_SEARCH) {
  // 内部站点无法使用 algolia
  delete config.themeConfig.algolia;
  config.plugins.push([
    require.resolve("@easyops-cn/docusaurus-search-local"),
    {
      hashed: true,
      editUrl: 'https://github.com/ice-lab/data/edit/master/',
    },
  ]);
}

module.exports = config;