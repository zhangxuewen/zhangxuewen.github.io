module.exports = {
  title: '打卡生活',
  logo: {
    alt: '技术生活',
    src: 'img/logo.png',
  },
  items: [
    {
      type: 'search',
      position: 'right',
    },
    {
      to: '/blog',
      position: 'right',
      label: '博客🔥',
    },
    {
      label: '知识体系🔥',
      position: 'right',
      items: [
        {
          label: '笔记',
          to: '/docs/technotes/about',
        },
        {
          label: '知识库',
          to: '/docs/knowledge/about',
        },
        {
          label: '开源学习',
          to: '/docs/opensource/about',
        },
      ],
    },
    {
      label: '更多资源',
      position: 'right',
      items: [
        {
          to: '/docs/manage/about',
          label: '技术管理',
        },
        {
          to: '/docs/manage/thinking/about',
          label: '思维模型',
        },
        {
          label: '沟通技巧',
          to: '/docs/manage/communicate/about',
        }
      ],
    },
    {
      href: 'https://github.com/zhangxuewen',
      label: 'GitHub',
      position: 'right',
    }
  ],
};