export const themeData = {
  "navbar": [
    {
      "text": "首页",
      "link": "/"
    },
    {
      "text": "前端基础",
      "children": [
        {
          "text": "JS高级程序设计",
          "link": "/JavaScript/es6/es6-1.md"
        },
        {
          "text": "ES6入门",
          "link": "/JavaScript/es6/es6-1.md"
        },
        {
          "text": "你不知道的Javascript",
          "link": "/JavaScript/youdontknowjs/part1.md"
        },
        {
          "text": "设计模式",
          "link": "/JavaScript/design/"
        }
      ]
    },
    {
      "text": "前端框架",
      "children": [
        {
          "text": "vue2",
          "link": "/formwork/vue/vueyuanli.md"
        }
      ]
    },
    {
      "text": "计算机基础",
      "children": [
        {
          "text": "数据结构（严蔚敏）",
          "link": "/end/c/data-contruction/part1.md"
        }
      ]
    },
    {
      "text": "随笔笔记",
      "children": [
        {
          "text": "JS相关",
          "link": "/notes/JS/hwdj"
        },
        {
          "text": "CSS相关",
          "link": "/notes/CSS/css-selector"
        },
        {
          "text": "浏览器相关",
          "link": "/notes/browser/xmlhttprequest"
        },
        {
          "text": "node相关",
          "link": "/notes/node/node.md"
        }
      ]
    }
  ],
  "sidebar": {
    "/JavaScript/es6/": [
      {
        "text": "ES6入门",
        "children": [
          "/JavaScript/es6/es6-1.md",
          "/JavaScript/es6/es6-2.md",
          "/JavaScript/es6/es6-3.md",
          "/JavaScript/es6/es6-4.md",
          "/JavaScript/es6/es6-5.md",
          "/JavaScript/es6/es6-6.md",
          "/JavaScript/es6/es6-7.md",
          "/JavaScript/es6/es6-8.md",
          "/JavaScript/es6/es6-9.md",
          "/JavaScript/es6/es6-10.md",
          "/JavaScript/es6/es6-11.md",
          "/JavaScript/es6/es6-12.md",
          "/JavaScript/es6/es6-13.md",
          "/JavaScript/es6/es6-14.md",
          "/JavaScript/es6/es6-15.md",
          "/JavaScript/es6/es6-16.md",
          "/JavaScript/es6/es6-17.md",
          "/JavaScript/es6/es6-18.md"
        ]
      }
    ],
    "/JavaScript/youdontknowjs/": [
      {
        "text": "你不知道的JavaScript",
        "children": [
          "/JavaScript/youdontknowjs/part1.md",
          "/JavaScript/youdontknowjs/part2.md"
        ]
      }
    ],
    "/JavaScript/design/": [
      {
        "text": "设计模式",
        "children": [
          "/JavaScript/design/readme.md"
        ]
      }
    ],
    "/formwork/vue/": [
      {
        "text": "VUE2",
        "children": [
          "/formwork/vue/vueyuanli",
          "/formwork/vue/smzqhs.md",
          "/formwork/vue/vue-slsx.md",
          "/formwork/vue/fzzj.md",
          "/formwork/vue/ysbd.md"
        ]
      }
    ],
    "/notes/JS": [
      {
        "text": "JS随笔",
        "children": [
          "/notes/JS/hwdj.md",
          "/notes/JS/modules.md",
          "/notes/JS/pro-compile.md",
          "/notes/JS/buding.md"
        ]
      }
    ],
    "/notes/node": [
      {
        "text": "node随笔",
        "children": [
          "/notes/node/node.md",
          "/notes/node/linuxinstallnode.md"
        ]
      }
    ],
    "/notes/CSS": [
      {
        "text": "CSS随笔",
        "children": [
          "/notes/CSS/css-selector.md",
          "/notes/CSS/flex.md",
          "/notes/CSS/CSSchangyong.md"
        ]
      }
    ],
    "/notes/browser": [
      {
        "text": "浏览器随笔",
        "children": [
          "/notes/browser/xmlhttprequest.md",
          "/notes/browser/kuayu.md",
          "/notes/browser/route.md",
          "/notes/browser/layout.md"
        ]
      }
    ],
    "/end/c/data-contruction/": [
      "/end/c/data-contruction/part1.md",
      "/end/c/data-contruction/part2.md"
    ],
    "/end/c/c-study/": [
      "/end/c/c-study/part1.md",
      "/end/c/c-study/part2.md",
      "/end/c/c-study/part3.md",
      "/end/c/c-study/part4.md"
    ]
  },
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "logo": null,
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
