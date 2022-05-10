const {defaultTheme} = require("vuepress");
module.exports = {
    base: '/',
    lang: 'zh-CN',
    title: 'wenatie',
    port: '8081',
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
            },
            {
                text: '前端框架',
                children: [
                    {
                        text: 'vue2',
                        link: '/formwork/vue/vueyuanli.md'
                    },
                ],
            },
            // {
            //     text: '工具学习',
            //     children: [
            //         {
            //             text: 'GIT',
            //             link: '/gongjushu/git/git.md'
            //         },
            //         {
            //             text: 'WebPack',
            //             link: '/gongjushu/webpack/wp-1.md'
            //         },
            //     ],
            // },
            {
                text: '随笔笔记',
                link: '/notes/xmlhttprequest'
            },
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
                        '/JavaScript/es6/es6-8.md',
                    ],
                },

            ],
            '/JavaScript/youdontknowjs/': [
                {
                    text: '你不知道的JavaScript',
                    children: ['/JavaScript/youdontknowjs/part1.md'],
                },
            ],
            '/formwork/vue/': [
                {
                    text: 'VUE2',
                    children: [
                        '/formwork/vue/vueyuanli',
                        '/formwork/vue/smzqhs.md',
                        '/formwork/vue/vue-slsx.md',
                        '/formwork/vue/fzzj.md',
                        '/formwork/vue/ysbd.md',
                    ],
                },
            ],
            '/notes/': [
                {
                    text: '随笔',
                    children: [
                        {
                            text: 'XMLHttpRequest',
                            link: '/notes/xmlhttprequest.md',
                        },
                        '/notes/hwdj.md',
                        '/notes/node.md'
                    ],
                },
            ],
            '/gongjushu/': [
                {
                    text: '工具学习',
                    children: [
                        {
                            text: 'git',
                            link: '/gongjushu/git/git.md',
                        },
                        {
                            text: 'Webpack',
                            children:[
                                '/gongjushu/webpack/wp-1.md'
                            ]
                        }
                    ],
                },
            ]
        }
    }),
}
