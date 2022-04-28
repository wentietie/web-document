const {defaultTheme} = require("vuepress");
module.exports = {
    base: '/',
    lang: 'zh-CN',
    title: 'wenatie',
    description: '我的个人博客',
    theme: defaultTheme({
        navbar: [
            {text: '首页', link: '/' },
            {text: '你不知道的JavaScript', link: '/JavaScript/' }
        ],
    }),
}