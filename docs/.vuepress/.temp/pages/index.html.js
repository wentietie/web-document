export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {
    "home": true,
    "heroImage": null,
    "actions": [
      {
        "text": "开始学习",
        "link": "/JavaScript/es6/es6-1.md",
        "type": "primary"
      }
    ],
    "features": [
      {
        "title": "前端基础",
        "details": "你不知道的JavaScript手打笔记。"
      },
      {
        "title": "前端框架",
        "details": "vue学习笔记、深入浅出vue。"
      },
      {
        "title": "个人随笔",
        "details": "日常随笔。"
      }
    ],
    "footer": "MIT Licensed | by vuePress | 个人学习笔记"
  },
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1651563024000,
    "contributors": [
      {
        "name": "文铁铁",
        "email": "1179131421@qq.com",
        "commits": 3
      }
    ]
  },
  "filePathRelative": "README.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
