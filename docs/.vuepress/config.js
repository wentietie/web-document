import {defineUserConfig} from 'vuepress'
import {defaultTheme} from '@vuepress/theme-default'
import {viteBundler} from '@vuepress/bundler-vite'
import {registerComponentsPlugin} from '@vuepress/plugin-register-components'
import {searchPlugin} from '@vuepress/plugin-search'
import {resolve} from 'path'


// import {path}

export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  title: 'wenatie',
  port: '8081',
  description: '我的个人博客',
  bundler: viteBundler(),
  // ======================配置插件====================================
  plugins: [
    searchPlugin({}),
    registerComponentsPlugin({
      // 配置项
      componentsDir: resolve(__dirname, './components')
    })
  ],
  // ======================配置插件 End=================================
  theme: defaultTheme({
    navbar: [
      {text: '首页', link: '/'},
      {
        text: '前端工具',
        children: [
          {
            text: 'JSON工具',
            link: '/static/utils/jsonutil.md'
          }
        ]
      },
      {
        text: 'AI',
        children: [
          {
            text: '大模型入门',
            link: '/static/ai/llm/llm-study/part1.md'
          },
          {
            text: 'chatGLM大模型实践',
            link: '/static/ai/llm/chatglm/part1.md'
          },
        ]
      },
      {
        text: '小唐学习笔记',
        children: [
          {
            text: 'gitlab',
            link: '/static/tang/gitlab/gitlab-error.md'
          },
          {
            text: 'java',
            link: '/static/tang/java2/00_前言.md'
          },
          {
            text: 'mysql',
            link: '/static/tang/mysql/01_MySQL概述.md'
          },
          {
            text: 'docker',
            link: '/static/tang/docker/Docker.md'
          },
          {
            text: 'k8s',
            link: '/static/tang/k8s/学习资料/command.md'
          },
          {
            text: 'Elasticsearch',
            link: '/static/tang/Elasticsearch/01_Elasticsearch概述.md'
          },
          {
            text: 'Prometheus',
            link: '/static/tang/Prometheus/1.md'
          },
          {
            text: 'Python',
            link: '/static/tang/Python/1.md'
          },
          {
            text: 'Vue',
            link: '/static/tang/Vue/1.md'
          },
          {
            text: '服务器环境安装',
            link: '/static/tang/server/CentOS7root账号免密登录.md'
          },
          {
            text: '微服务',
            link: '/static/tang/mservice/2.md'
          },
          {
            text: '项目上线',
            link: '/static/tang/项目上线/记一次小程序接口的发布.md'
          },
          {
            text: '物联网项目',
            link: '/static/tang/IoTPlatform/jetlinks项目初体验.md'
          }
        ]
      },
      {
        text: '前端基础',
        children: [
          {
            text: 'JS基础',
            link: '/static/JavaScript/basic/part1.md'
          },
          // {
          //     text: 'JS高级程序设计',
          //     link: '/static/JavaScript/es6/es6-1.md'
          // },
          {
            text: 'ES6入门',
            link: '/static/JavaScript/es6/es6-1.md'
          },
          {
            text: '你不知道的Javascript',
            link: '/static/JavaScript/youdontknowjs/part1.md'
          },
          {
            text: '设计模式',
            link: '/static/JavaScript/design/'
          },
          {
            text: 'typescript',
            link: '/static/JavaScript/typescript/ts-basic.md'
          },
        ],
      },
      {
        text: '框架',
        children: [
          {
            text: 'vue2',
            link: '/static/formwork/vue/vueyuanli.md'
          },
          {
            text: 'vue3',
            link: '/static/formwork/vue3/reactive/part1.md'
          },
          {
            text: 'spring5',
            link: '/static/formwork/spring5/part1.md'
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
            link: '/static/notes/JS/hwdj'
          },
          {
            text: 'CSS相关',
            link: '/static/notes/CSS/css-selector'
          },
          {
            text: '浏览器相关',
            link: '/static/notes/browser/xmlhttprequest'
          },
          {
            text: 'node相关',
            link: '/static/notes/node/node.md'
          },
        ]
      },
    ],
    sidebar: {
      '/static/utils': [
        {
          text: '工具',
          children: [
            {
              text: 'JSON比对工具',
              link: '/static/utils/jsonutil.md'
            }
          ]
        }
      ],
      '/static/ai/llm/llm-study': [
        {
          text: '大模型入门',
          children: [
            '/static/ai/llm/llm-study/part1.md'
          ]
        }
      ],
      '/static/tang/gitlab/': [
        {
          text: 'git',
          children: [
            '/static/tang/gitlab/gitlab-error.md',
            '/static/tang/gitlab/gitlab-commands.md'
          ]
        }
      ],
      '/static/tang/docker/': [
        {
          text: 'docker',
          children: [
            '/static/tang/docker/docker搭建私有镜像仓库.md',
            '/static/tang/docker/Docker.md'
          ]
        }
      ],
      '/static/tang/Elasticsearch/': [
        {
          text: 'Elasticsearch',
          children: [
            '/static/tang/Elasticsearch/01_Elasticsearch概述.md',
            '/static/tang/Elasticsearch/02_Elasticsearch相关工具的安装与使用.md',
            '/static/tang/Elasticsearch/03_Elasticsearch核心概念.md',
            '/static/tang/Elasticsearch/04_Elasticsearch基本操作.md',
            '/static/tang/Elasticsearch/05_Elasticsearch DSL高级查询.md',
            '/static/tang/Elasticsearch/06_Elasticsearch进阶查询.md',
            '/static/tang/Elasticsearch/07_Java API 操作 Elasticsearch.md',
            '/static/tang/Elasticsearch/08_Spring Data Elasticsearch.md',
            '/static/tang/Elasticsearch/09_Linux 安装 Elasticsearch.md',
            '/static/tang/Elasticsearch/10_CAP定理.md',
            '/static/tang/Elasticsearch/11_Elasticsearch集群.md',
            '/static/tang/Elasticsearch/12_Elasticsearch分片控制与原理.md',
            '/static/tang/Elasticsearch/13_Elasticsearch的优化建议.md',
          ]
        }
      ],
      '/static/tang/java2/': [
        {
          text: 'java基础查漏补缺',
          children: [
            '/static/tang/java2/00_前言.md',
            '/static/tang/java2/01_Java语言概述.md',
            '/static/tang/java2/02_Java基本语法.md',
            '/static/tang/java2/03_Java数组.md',
            '/static/tang/java2/04_面向对象编程（上）.md',
            '/static/tang/java2/05_面向对象编程（中）.md',
            '/static/tang/java2/06_面向对象编程（下）.md',
            '/static/tang/java2/07_异常处理.md',
            '/static/tang/java2/08_多线程.md',
            '/static/tang/java2/09_Java常用类.md',
            '/static/tang/java2/10_枚举&注解.md',
            '/static/tang/java2/11_Java集合.md',
            '/static/tang/java2/12_Java泛型.md',
            '/static/tang/java2/13_IO流.md',
            '/static/tang/java2/14_网络编程.md',
            '/static/tang/java2/15_Java反射机制.md',
            '/static/tang/java2/16_Java8新特性.md',
            '/static/tang/java2/17_Java9&10&11新特性.md',
            '/static/tang/java2/18_JUC并发编程.md',
            '/static/tang/java2/19_设计模式.md',
            '/static/tang/java2/20_排序算法.md',
            '/static/tang/java2/99_面试题.md',
          ]
        }
      ],
      '/static/tang/mysql/': [
        {
          text: 'mysql基础查漏补缺',
          children: [
            '/static/tang/mysql/01_MySQL概述.md',
            '/static/tang/mysql/02_关系型数据库与非关系型数据库.md',
            '/static/tang/mysql/03_关系型数据库设计原则.md',
            '/static/tang/mysql/04_MySQL的登录.md',
            '/static/tang/mysql/05_MySQL一些常用命令.md',
            '/static/tang/mysql/06_MySQL图形化管理工具.md',
            '/static/tang/mysql/07_运算符.md',
            '/static/tang/mysql/08_MySQL函数.md',
            '/static/tang/mysql/09_子查询.md',
            '/static/tang/mysql/10_管理数据库和数据库表.md',
            '/static/tang/mysql/11_数据的增删改.md',
            '/static/tang/mysql/12_MySQL中的数据类型.md',
            '/static/tang/mysql/13_约束.md',
            '/static/tang/mysql/14_视图.md',
            '/static/tang/mysql/15_存储过程与存储函数.md',
            '/static/tang/mysql/16_变量、流程控制与游标.md',
            '/static/tang/mysql/17_触发器.md',
            '/static/tang/mysql/18_MySQL8.0新特性.md',
            '/static/tang/mysql/19_表及其数据.md',
            '/static/tang/mysql/99_MySQL常见问题的解决.md',
          ]
        }
      ],
      '/static/tang/Prometheus/': [
        {
          text: 'Prometheus',
          children: [
            '/static/tang/Prometheus/1.md',
            '/static/tang/Prometheus/2.md',
          ]
        }
      ],
      '/static/tang/Python/': [
        {
          text: 'Python',
          children: [
            '/static/tang/Python/1.md',
            '/static/tang/Python/command.md'
          ]
        }
      ],
      '/static/tang/mservice/': [
        {
          text: '微服务学习',
          children: [
            '/static/tang/mservice/2.md',
            '/static/tang/mservice/1.md'
          ]
        }
      ],
      '/static/tang/Vue/': [
        {
          text: 'Vue',
          children: [
            '/static/tang/Vue/1.md',
            '/static/tang/Vue/2.md',
            '/static/tang/Vue/3.md',
          ]
        }
      ],
      '/static/tang/server/': [
        {
          text: '服务器环境安装',
          children: [
            '/static/tang/server/CentOS7root账号免密登录.md',
            '/static/tang/server/CentOS7安装GitLab.md',
            '/static/tang/server/CentOS7安装jdk1.8.md',
            '/static/tang/server/CentOs7安装jenkins.md',
            '/static/tang/server/CentOS7安装mysql5.7(使用yum源安装).md',
            '/static/tang/server/CentOS7安装redis.md',
            '/static/tang/server/CentOS7平滑升级nginx.md',
            '/static/tang/server/借助阿里云服务器使用frp做内网穿透.md',
          ]
        }
      ],
      '/static/tang/k8s/': [
        {
          text: 'k8s',
          children: [
            {
              text: '学习资料',
              children: [
                '/static/tang/k8s/学习资料/command.md',
                '/static/tang/k8s/学习资料/blog.md',
                '/static/tang/k8s/学习资料/ftp.md',
                '/static/tang/k8s/学习资料/auto.md',
              ]
            },
            {
              text: '错误集锦',
              children: [
                '/static/tang/k8s/错误集锦/6443_connect-refused.md',
                '/static/tang/k8s/错误集锦/1.md',
                '/static/tang/k8s/错误集锦/2.md',
                '/static/tang/k8s/错误集锦/3.md',
                '/static/tang/k8s/错误集锦/4.md',
              ]
            }
          ]
        }
      ],
      '/static/tang/项目上线/': [
        {
          text: '项目上线',
          children: [
            '/static/tang/项目上线/记一次小程序接口的发布.md',
          ]
        }
      ],
      '/static/tang/IoTPlatform/': [
        {
          text: '物联网项目',
          children: [
            '/static/tang/IoTPlatform/jetlinks项目初体验.md'
          ]
        }
      ],
      '/static/JavaScript/es6/': [
        {
          text: 'ES6入门',
          children: [
            '/static/JavaScript/es6/es6-1.md',
            '/static/JavaScript/es6/es6-2.md',
            '/static/JavaScript/es6/es6-3.md',
            '/static/JavaScript/es6/es6-4.md',
            '/static/JavaScript/es6/es6-5.md',
            '/static/JavaScript/es6/es6-6.md',
            '/static/JavaScript/es6/es6-7.md',
            '/static/JavaScript/es6/es6-8.md',
            '/static/JavaScript/es6/es6-9.md',
            '/static/JavaScript/es6/es6-10.md',
            '/static/JavaScript/es6/es6-11.md',
            '/static/JavaScript/es6/es6-12.md',
            '/static/JavaScript/es6/es6-13.md',
            '/static/JavaScript/es6/es6-14.md',
            '/static/JavaScript/es6/es6-15.md',
            '/static/JavaScript/es6/es6-16.md',
            '/static/JavaScript/es6/es6-17.md',
            '/static/JavaScript/es6/es6-18.md',
          ],
        },

      ],
      '/static/JavaScript/youdontknowjs/': [
        {
          text: '你不知道的JavaScript',
          children: [
            '/static/JavaScript/youdontknowjs/part1.md',
            '/static/JavaScript/youdontknowjs/part2.md',
          ],
        },
      ],
      '/static/JavaScript/design/': [
        {
          text: '设计模式',
          children: [
            '/static/JavaScript/design/readme.md',
            '/static/JavaScript/design/part1.md',
            '/static/JavaScript/design/part2.md',
            '/static/JavaScript/design/part3.md',
            '/static/JavaScript/design/part4.md',
            '/static/JavaScript/design/part5.md',
          ],
        },
      ],
      '/static/JavaScript/typescript/': [
        {
          text: 'typescript 基础',
          children: [
            '/static/JavaScript/typescript/ts-basic.md',
          ],
        },
      ],
      '/static/formwork/vue/': [
        {
          text: 'VUE2',
          children: [
            '/static/formwork/vue/vueyuanli',
            '/static/formwork/vue/smzqhs.md',
            '/static/formwork/vue/vue-slsx.md',
            '/static/formwork/vue/fzzj.md',
            '/static/formwork/vue/ysbd.md',
          ],
        },
      ],
      '/static/formwork/vue3/': [
        {
          text: 'VUE3 入门',
          children: [
            '/static/formwork/vue3/reactive/part1.md',
            '/static/formwork/vue3/reactive/part2.md',
            '/static/formwork/vue3/reactive/part3.md',
            '/static/formwork/vue3/reactive/part9.md',
            '/static/formwork/vue3/reactive/part10.md',
            '/static/formwork/vue3/reactive/part11.md',
            '/static/formwork/vue3/reactive/part12.md',
          ],
        },
      ],
      '/static/formwork/spring5/': [
        {
          text: 'spring5 入门',
          children: [
            '/static/formwork/spring5/part1.md',
            '/static/formwork/spring5/part2.md',
          ],
        },
      ],
      '/static/formwork/spring6/': [
        {
          text: 'spring6 入门',
          children: [
            '/static/formwork/spring6/part1.md',
            '/static/formwork/spring6/part2.md',
          ],
        },
      ],
      '/static/notes/JS': [
        {
          text: 'JS随笔',
          children: [
            '/static/notes/JS/hwdj.md',
            '/static/notes/JS/modules.md',
            '/static/notes/JS/pro-compile.md',
            '/static/notes/JS/buding.md',
            '/static/notes/JS/usually-functions.md',
            '/static/notes/JS/webpack-optimize.md',
            '/static/notes/JS/vue-webpack-optimize.md',
          ],
        },
      ],
      '/static/notes/node': [
        {
          text: 'node随笔',
          children: [
            '/static/notes/node/node.md',
            '/static/notes/node/linuxinstallnode.md',
          ],
        },
      ],
      '/static/notes/CSS': [
        {
          text: 'CSS随笔',
          children: [
            '/static/notes/CSS/css-selector.md',
            '/static/notes/CSS/flex.md',
            '/static/notes/CSS/CSSchangyong.md',
            '/static/notes/CSS/autoheight.md',
            '/static/notes/CSS/longlist.md',
          ],
        },
      ],
      '/static/notes/browser': [
        {
          text: '浏览器随笔',
          children: [
            '/static/notes/browser/xmlhttprequest.md',
            '/static/notes/browser/kuayu.md',
            '/static/notes/browser/route.md',
            '/static/notes/browser/layout.md',
            '/static/notes/browser/storage.md',
            '/static/notes/browser/refresh.md',
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
