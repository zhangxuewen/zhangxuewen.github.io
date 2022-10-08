export default {
  "title": "打卡机",
  "tagline": "打卡构建自己的知识体系",
  "url": "https://51hpz.cn",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "throw",
  "favicon": "img/favicon.ico",
  "organizationName": "zhangxuewen",
  "projectName": "zhangxuewen",
  "themeConfig": {
    "announcementBar": {
      "id": "announcementBar",
      "content": "<a href=\"/docs/guide/upgrade\">给生活留下印记</a>",
      "isCloseable": true
    },
    "navbar": {
      "title": "打卡机",
      "logo": {
        "alt": "技术机",
        "src": "img/logo.png"
      },
      "items": [
        {
          "type": "search",
          "position": "right"
        },
        {
          "to": "/blog",
          "position": "right",
          "label": "博客🔥"
        },
        {
          "label": "知识体系🔥",
          "position": "right",
          "items": [
            {
              "label": "笔记",
              "to": "/docs/technotes/about"
            },
            {
              "label": "知识库",
              "to": "/docs/knowledge/about"
            },
            {
              "label": "开源学习",
              "to": "/docs/opensource/about"
            }
          ]
        },
        {
          "label": "更多资源",
          "position": "right",
          "items": [
            {
              "to": "/docs/manage/about",
              "label": "技术管理"
            },
            {
              "to": "/docs/manage/thinking/about",
              "label": "思维模型"
            },
            {
              "label": "沟通技巧",
              "to": "/docs/manage/communicate/about"
            }
          ]
        },
        {
          "href": "https://github.com/zhangxuewen",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "专题",
          "items": [
            {
              "label": "Martech",
              "href": "https://www.yuque.com/softbox1"
            },
            {
              "label": "JAMStack",
              "href": "https://www.yuque.com/softbox2"
            },
            {
              "label": "XaaS",
              "href": "https://www.yuque.com/softbox3"
            },
            {
              "label": "Serverless",
              "href": "https://www.yuque.com/xaas"
            }
          ]
        },
        {
          "title": "社区",
          "items": [
            {
              "label": "yuque",
              "href": "https://www.yuque.com/explore/headlines"
            },
            {
              "label": "infoQ",
              "href": "https://www.infoq.cn/"
            },
            {
              "label": "daily.dev",
              "href": "https://app.daily.dev/"
            },
            {
              "label": "开发者头条",
              "href": "https://toutiao.io/"
            }
          ]
        },
        {
          "title": "周刊",
          "items": [
            {
              "label": "前端周刊",
              "href": "https://www.yuque.com/mdh/weekly/fwr19s"
            },
            {
              "label": "产品周刊",
              "href": "https://www.yuque.com/xftx/cpjlzk/aq5ho7"
            },
            {
              "label": "测试周刊",
              "href": "https://www.yuque.com/bxiaofan/testingweekly/umgrbs"
            },
            {
              "label": "体验周刊",
              "href": "https://www.yuque.com/ftium4/gs2tgp/ygbtoi"
            }
          ]
        }
      ],
      "copyright": "Copyright ©2022 打卡机. Built with Docusaurus."
    },
    "algolia": {
      "apiKey": "e019b7d51c61cf4ecd39398f71093afc",
      "indexName": "51hpz",
      "contextualSearch": false,
      "appId": "BH4D9OD16A",
      "searchParameters": {}
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "prism": {
      "additionalLanguages": []
    },
    "hideableSidebar": false
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/Users/zhangxuewen/zhangxuewen.github.io/config/sidebars.js",
          "editUrl": "https://github.com/ice-lab/site/edit/master/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/ice-lab/site/edit/master/"
        },
        "theme": {
          "customCss": "/Users/zhangxuewen/zhangxuewen.github.io/src/css/custom.css"
        },
        "gtag": {
          "trackingID": "G-QZ0FEKY38G"
        }
      }
    ]
  ],
  "plugins": [
    "/Users/zhangxuewen/zhangxuewen.github.io/plugins/redirect.js",
    [
      "/Users/zhangxuewen/zhangxuewen.github.io/node_modules/_@docusaurus_plugin-content-blog@2.0.0-beta.5@@docusaurus/plugin-content-blog/lib/index.js",
      {
        "id": "contentweekly",
        "path": "contentweekly",
        "routeBasePath": "contentweekly"
      }
    ]
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};