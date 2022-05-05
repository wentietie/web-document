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
          "text": "ES6入门",
          "link": "/JavaScript/es6/es6-1.md"
        },
        {
          "text": "你不知道的Javascript",
          "link": "/JavaScript/youdontknowjs/part1.md"
        }
      ]
    },
    {
      "text": "工具学习",
      "children": [
        {
          "text": "GIT",
          "link": "/gongjushu/git.md"
        }
      ]
    },
    {
      "text": "随笔笔记",
      "link": "/notes/xmlhttprequest"
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
          "/JavaScript/es6/es6-8.md"
        ]
      }
    ],
    "/JavaScript/youdontknowjs/": [
      {
        "text": "你不知道的JavaScript",
        "children": [
          "/JavaScript/youdontknowjs/part1.md"
        ]
      }
    ],
    "/notes/": [
      {
        "text": "随笔",
        "children": [
          {
            "text": "XMLHttpRequest",
            "link": "/notes/xmlhttprequest.md"
          }
        ]
      }
    ],
    "/gongjushu/": [
      {
        "text": "工具学习",
        "children": [
          {
            "text": "git",
            "link": "/gongjushu/git.md"
          }
        ]
      }
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
