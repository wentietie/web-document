import {defineUserConfig, defaultTheme} from 'vuepress'

export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  title: 'wenatie',
  port: '8081',
  description: '我的个人博客',
  theme: defaultTheme({
    navbar: [
      {text: '首页', link: '/'},
      {
        text: '小唐学习笔记',
        children: [
          {
            text: 'docker',
            link: '/tang/docker/readme.md'
          },
          {
            text: 'gitlab',
            link: '/tang/gitlab/gitlab-error.md'
          },
          // {
          //     text: 'java基础',
          //     link: '/tang/java/java基础知识.md'
          // },
          {
            text: 'k8s',
            link: '/tang/k8s/学习资料/command.md'
          },
          {
            text: 'mysql',
            link: '/tang/mysql/MySQL学习之基础篇.md'
          },
          {
            text: 'Prometheus',
            link: '/tang/Prometheus/1.md'
          },
          {
            text: 'Python',
            link: '/tang/Python/1.md'
          },
          {
            text: 'Vue',
            link: '/tang/Vue/1.md'
          },
          {
            text: '服务器',
            link: '/tang/server/part1.md'
          },
          {
            text: '微服务',
            link: '/tang/mservice/2.md'
          }
        ]
      },
      {
        text: '前端基础',
        children: [
          // {
          //     text: 'JS高级程序设计',
          //     link: '/JavaScript/es6/es6-1.md'
          // },
          {
            text: 'ES6入门',
            link: '/JavaScript/es6/es6-1.md'
          },
          {
            text: '你不知道的Javascript',
            link: '/JavaScript/youdontknowjs/part1.md'
          },
          {
            text: '设计模式',
            link: '/JavaScript/design/'
          },
        ],
      },
      {
        text: '框架',
        children: [
          {
            text: 'vue2',
            link: '/formwork/vue/vueyuanli.md'
          },
          {
            text: 'vue3',
            link: '/formwork/vue3/reactive/part1.md'
          },
          {
            text: 'spring5',
            link: '/formwork/spring5/part1.md'
          },
        ],
      },
      {
        text: '计算机基础',
        children: [
          // {
          //     text: 'C语言入门',
          //     link: '/end/c/c-study/part1.md'
          // },
          {
            text: '数据结构（严蔚敏）',
            link: '/end/c/data-contruction/part1.md'
          },
        ],
      },
      {
        text: '随笔笔记',
        children: [
          {
            text: 'JS相关',
            link: '/notes/JS/hwdj'
          },
          {
            text: 'CSS相关',
            link: '/notes/CSS/css-selector'
          },
          {
            text: '浏览器相关',
            link: '/notes/browser/xmlhttprequest'
          },
          {
            text: 'node相关',
            link: '/notes/node/node.md'
          },
        ]
      },
    ],
    sidebar: {
      '/tang/docker/': [
        {
          text: 'docker',
          children: [
            '/tang/docker/readme.md',
            '/tang/docker/Docker.md'
          ]
        }
      ],
      // '/tang/java/': [
      //     {
      //         text: 'java基础',
      //         children: [
      //             '/tang/java/java基础知识.md',
      //         ]
      //     }
      // ],
      '/tang/mysql/': [
        {
          text: 'mysql',
          children: [
            '/tang/mysql/MySQL学习之基础篇.md',
          ]
        }
      ],
      '/tang/Prometheus/': [
        {
          text: 'Prometheus',
          children: [
            '/tang/Prometheus/1.md',
            '/tang/Prometheus/2.md',
          ]
        }
      ],
      '/tang/Python/': [
        {
          text: 'Python',
          children: [
            '/tang/Python/1.md',
            '/tang/Python/command.md'
          ]
        }
      ],
      '/tang/mservice/': [
        {
          text: '微服务学习',
          children: [
            '/tang/mservice/2.md',
            '/tang/mservice/1.md'
          ]
        }
      ],
      '/tang/Vue/': [
        {
          text: 'Vue',
          children: [
            '/tang/Vue/1.md',
            '/tang/Vue/2.md',
            '/tang/Vue/3.md',
          ]
        }
      ],
      '/tang/server/': [
        {
          text: '服务器',
          children: [
            '/tang/server/part1.md',
            '/tang/server/part2.md',
            '/tang/server/part2.md',
            '/tang/server/part4.md',
            '/tang/server/part5.md',
            '/tang/server/part6.md',
            '/tang/server/part7.md',
          ]
        }
      ],

      '/tang/k8s/': [
        {
          text: 'k8s',
          children: [
            {
              text: '学习资料',
              children: [
                '/tang/k8s/学习资料/command.md',
                '/tang/k8s/学习资料/blog.md',
                '/tang/k8s/学习资料/ftp.md',
                '/tang/k8s/学习资料/auto.md',
              ]
            },
            {
              text: '错误集锦',
              children: [
                '/tang/k8s/错误集锦/6443_connect-refused.md',
                '/tang/k8s/错误集锦/1.md',
                '/tang/k8s/错误集锦/2.md',
                '/tang/k8s/错误集锦/3.md',
                '/tang/k8s/错误集锦/4.md',
              ]
            }
          ]
        }
      ],
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
            '/JavaScript/es6/es6-9.md',
            '/JavaScript/es6/es6-10.md',
            '/JavaScript/es6/es6-11.md',
            '/JavaScript/es6/es6-12.md',
            '/JavaScript/es6/es6-13.md',
            '/JavaScript/es6/es6-14.md',
            '/JavaScript/es6/es6-15.md',
            '/JavaScript/es6/es6-16.md',
            '/JavaScript/es6/es6-17.md',
            '/JavaScript/es6/es6-18.md',
          ],
        },

      ],
      '/JavaScript/youdontknowjs/': [
        {
          text: '你不知道的JavaScript',
          children: [
            '/JavaScript/youdontknowjs/part1.md',
            '/JavaScript/youdontknowjs/part2.md',
          ],
        },
      ],
      '/JavaScript/design/': [
        {
          text: '设计模式',
          children: [
            '/JavaScript/design/readme.md',
            '/JavaScript/design/part1.md'
          ],
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
      '/formwork/vue3/': [
        {
          text: 'VUE3 入门',
          children: [
            '/formwork/vue3/reactive/part1.md',
            '/formwork/vue3/reactive/part2.md',
            '/formwork/vue3/reactive/part3.md',
            '/formwork/vue3/reactive/part9.md',
            '/formwork/vue3/reactive/part10.md',
            '/formwork/vue3/reactive/part11.md',
            '/formwork/vue3/reactive/part12.md',
          ],
        },
      ],
      '/formwork/spring5/': [
        {
          text: 'spring5 入门',
          children: [
            '/formwork/spring5/part1.md',
            '/formwork/spring5/part2.md',
          ],
        },
      ],
      '/formwork/spring6/': [
        {
          text: 'spring6 入门',
          children: [
            '/formwork/spring6/part1.md',
            '/formwork/spring6/part2.md',
          ],
        },
      ],
      '/notes/JS': [
        {
          text: 'JS随笔',
          children: [
            '/notes/JS/hwdj.md',
            '/notes/JS/modules.md',
            '/notes/JS/pro-compile.md',
            '/notes/JS/buding.md',
            '/notes/JS/usually-functions.md',
          ],
        },
      ],
      '/notes/node': [
        {
          text: 'node随笔',
          children: [
            '/notes/node/node.md',
            '/notes/node/linuxinstallnode.md',
          ],
        },
      ],
      '/notes/CSS': [
        {
          text: 'CSS随笔',
          children: [
            '/notes/CSS/css-selector.md',
            '/notes/CSS/flex.md',
            '/notes/CSS/CSSchangyong.md',
          ],
        },
      ],
      '/notes/browser': [
        {
          text: '浏览器随笔',
          children: [
            '/notes/browser/xmlhttprequest.md',
            '/notes/browser/kuayu.md',
            '/notes/browser/route.md',
            '/notes/browser/layout.md',
            '/notes/browser/storage.md',
            '/notes/browser/refresh.md',
          ],
        },
      ],
      '/end/c/data-contruction/': [
        '/end/c/data-contruction/part1.md',
        '/end/c/data-contruction/part2.md'
      ],
      '/end/c/c-study/': [
        '/end/c/c-study/part1.md',
        '/end/c/c-study/part2.md',
        '/end/c/c-study/part3.md',
        '/end/c/c-study/part4.md',
      ]
    }
  }),
})
