import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("G:/项目/博客/web-document/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("G:/项目/博客/web-document/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
