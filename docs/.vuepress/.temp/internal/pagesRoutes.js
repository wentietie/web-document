import { Vuepress } from '@vuepress/client'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-530baa8b","/formwork/vue/fzzj.html",{"title":"父子组件"},["/formwork/vue/fzzj","/formwork/vue/fzzj.md"]],
  ["v-6e30119a","/formwork/vue/smzqhs.html",{"title":"生命周期函数"},["/formwork/vue/smzqhs","/formwork/vue/smzqhs.md"]],
  ["v-023ff66c","/formwork/vue/vue-slsx.html",{"title":"vue实例属性"},["/formwork/vue/vue-slsx","/formwork/vue/vue-slsx.md"]],
  ["v-79ee5b57","/formwork/vue/vueyuanli.html",{"title":"VUE2原理分析"},["/formwork/vue/vueyuanli","/formwork/vue/vueyuanli.md"]],
  ["v-7d250bb3","/formwork/vue/ysbd.html",{"title":"样式绑定"},["/formwork/vue/ysbd","/formwork/vue/ysbd.md"]],
  ["v-7ef002b8","/gongjushu/git/git.html",{"title":"pro git 中文版"},["/gongjushu/git/git","/gongjushu/git/git.md"]],
  ["v-2218f774","/gongjushu/webpack/wp-1.html",{"title":"webpack"},["/gongjushu/webpack/wp-1","/gongjushu/webpack/wp-1.md"]],
  ["v-7ae3cb46","/JavaScript/es6/es6-1.html",{"title":"let 和 const 命令"},["/JavaScript/es6/es6-1","/JavaScript/es6/es6-1.md"]],
  ["v-777a1a08","/JavaScript/es6/es6-2.html",{"title":"变量的解构赋值"},["/JavaScript/es6/es6-2","/JavaScript/es6/es6-2.md"]],
  ["v-741068ca","/JavaScript/es6/es6-3.html",{"title":"字符串的扩展"},["/JavaScript/es6/es6-3","/JavaScript/es6/es6-3.md"]],
  ["v-70a6b78c","/JavaScript/es6/es6-4.html",{"title":"字符串的新增方法"},["/JavaScript/es6/es6-4","/JavaScript/es6/es6-4.md"]],
  ["v-6d3d064e","/JavaScript/es6/es6-5.html",{"title":"正则的扩展"},["/JavaScript/es6/es6-5","/JavaScript/es6/es6-5.md"]],
  ["v-69d35510","/JavaScript/es6/es6-6.html",{"title":"数值的扩展"},["/JavaScript/es6/es6-6","/JavaScript/es6/es6-6.md"]],
  ["v-6669a3d2","/JavaScript/es6/es6-7.html",{"title":"函数的扩展"},["/JavaScript/es6/es6-7","/JavaScript/es6/es6-7.md"]],
  ["v-62fff294","/JavaScript/es6/es6-8.html",{"title":"数组的扩展"},["/JavaScript/es6/es6-8","/JavaScript/es6/es6-8.md"]],
  ["v-1a9e51a2","/JavaScript/youdontknowjs/part1.html",{"title":"第一部分 作用域和闭包"},["/JavaScript/youdontknowjs/part1","/JavaScript/youdontknowjs/part1.md"]],
  ["v-40a58318","/notes/browser/kuayu.html",{"title":"跨域"},["/notes/browser/kuayu","/notes/browser/kuayu.md"]],
  ["v-0ddf8b7e","/notes/browser/route.html",{"title":"路由"},["/notes/browser/route","/notes/browser/route.md"]],
  ["v-235ba28a","/notes/browser/xmlhttprequest.html",{"title":"XMLHttpRequest,fetch和axios"},["/notes/browser/xmlhttprequest","/notes/browser/xmlhttprequest.md"]],
  ["v-90e9c506","/notes/CSS/css-selector.html",{"title":"css 权重"},["/notes/CSS/css-selector","/notes/CSS/css-selector.md"]],
  ["v-93f2c626","/notes/CSS/flex.html",{"title":"弹性盒子模型"},["/notes/CSS/flex","/notes/CSS/flex.md"]],
  ["v-3879be25","/notes/JS/hwdj.html",{"title":"宏任务、微任务、队列和计划"},["/notes/JS/hwdj","/notes/JS/hwdj.md"]],
  ["v-fb798fde","/notes/JS/modules.html",{"title":"Commonjs、CMD、ESM和AMD"},["/notes/JS/modules","/notes/JS/modules.md"]],
  ["v-6a82b618","/notes/JS/node.html",{"title":"node相关"},["/notes/JS/node","/notes/JS/node.md"]],
  ["v-678f06f6","/notes/JS/pro-compile.html",{"title":"JS 预编译"},["/notes/JS/pro-compile","/notes/JS/pro-compile.md"]],
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
