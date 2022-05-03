import { Vuepress } from '@vuepress/client'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-e8a378fe","/JavaScript/es6/es6.html",{"title":"let 和 const 命令"},["/JavaScript/es6/es6","/JavaScript/es6/es6.md"]],
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
