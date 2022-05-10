export const data = {
  "key": "v-678f06f6",
  "path": "/notes/JS/pro-compile.html",
  "title": "JS 预编译",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "js运行三步曲",
      "slug": "js运行三步曲",
      "children": []
    },
    {
      "level": 2,
      "title": "全局预编译过程",
      "slug": "全局预编译过程",
      "children": []
    },
    {
      "level": 2,
      "title": "函数预编译过程",
      "slug": "函数预编译过程",
      "children": []
    }
  ],
  "git": {
    "updatedTime": null,
    "contributors": []
  },
  "filePathRelative": "notes/JS/pro-compile.md"
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
