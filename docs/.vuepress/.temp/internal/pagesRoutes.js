import { Vuepress } from '@vuepress/client'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-605b0f1b","/gongjushu/git.html",{"title":"pro git 中文版"},["/gongjushu/git","/gongjushu/git.md"]],
  ["v-9b8495bc","/notes/xmlhttprequest.html",{"title":"XMLHttpRequest,fetch和axios"},["/notes/xmlhttprequest","/notes/xmlhttprequest.md"]],
  ["v-7ae3cb46","/JavaScript/es6/es6-1.html",{"title":"let 和 const 命令"},["/JavaScript/es6/es6-1","/JavaScript/es6/es6-1.md"]],
  ["v-777a1a08","/JavaScript/es6/es6-2.html",{"title":"变量的解构赋值"},["/JavaScript/es6/es6-2","/JavaScript/es6/es6-2.md"]],
  ["v-741068ca","/JavaScript/es6/es6-3.html",{"title":"字符串的扩展"},["/JavaScript/es6/es6-3","/JavaScript/es6/es6-3.md"]],
  ["v-70a6b78c","/JavaScript/es6/es6-4.html",{"title":"字符串的新增方法"},["/JavaScript/es6/es6-4","/JavaScript/es6/es6-4.md"]],
  ["v-6d3d064e","/JavaScript/es6/es6-5.html",{"title":"正则的扩展"},["/JavaScript/es6/es6-5","/JavaScript/es6/es6-5.md"]],
  ["v-69d35510","/JavaScript/es6/es6-6.html",{"title":"数值的扩展"},["/JavaScript/es6/es6-6","/JavaScript/es6/es6-6.md"]],
  ["v-6669a3d2","/JavaScript/es6/es6-7.html",{"title":"函数的扩展"},["/JavaScript/es6/es6-7","/JavaScript/es6/es6-7.md"]],
  ["v-62fff294","/JavaScript/es6/es6-8.html",{"title":"数组的扩展"},["/JavaScript/es6/es6-8","/JavaScript/es6/es6-8.md"]],
  ["v-1a9e51a2","/JavaScript/youdontknowjs/part1.html",{"title":"第一部分 作用域和闭包"},["/JavaScript/youdontknowjs/part1","/JavaScript/youdontknowjs/part1.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: '404',
      path: '/:catchAll(.*)',
      component: Vuepress,
    }
  ]
)
