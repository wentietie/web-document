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
        "link": "/JavaScript/",
        "type": "primary"
      }
    ],
    "features": [
      {
        "title": "你不知道的JavaScript上",
        "details": "手打笔记。"
      },
      {
        "title": "你不知道的JavaScript中",
        "details": "手打笔记。"
      },
      {
        "title": "你不知道的JavaScript下",
        "details": "手打笔记。"
      }
    ],
    "footer": "MIT Licensed | by vuePress | 个人学习笔记"
  },
  "excerpt": "",
  "headers": [],
  "git": {},
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
