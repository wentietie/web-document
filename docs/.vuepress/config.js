const {defaultTheme} = require("vuepress");
module.exports = {
    base: '/',
    lang: 'zh-CN',
    title: 'wenatie',
    description: '我的个人博客',
    theme: defaultTheme({
        navbar: [
            {text: '首页', link: '/' },
            {
                text: '前端基础',
                children: [
                    {
                        text: 'ES6入门',
                        link: '/JavaScript/es6/es6-1.md'
                    },
                    {
                        text: '你不知道的Javascript',
                        link: '/JavaScript/youdontknowjs/part1.md'
                    },

                ],
            }
        ],
        sidebar: {
            '/JavaScript/es6/': [
                {
                    text: 'ES6入门',
                    children: [
                        '/JavaScript/es6/es6-1.md',
                        '/JavaScript/es6/es6-2.md',
                        '/JavaScript/es6/es6-3.md',
                        '/JavaScript/es6/es6-4.md',
                        '/JavaScript/es6/es6-5.md',
                        '/JavaScript/es6/es6-6.md',
                        '/JavaScript/es6/es6-7.md',
                    ],
                },

            ],
            '/JavaScript/youdontknowjs/': [
                {
                    text: '你不知道的JavaScript',
                    children: ['/JavaScript/youdontknowjs/part1.md'],
                },
            ]
        }
    }),
}