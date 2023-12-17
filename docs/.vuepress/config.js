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
            text: 'gitlab',
            link: '/tang/gitlab/gitlab-error.md'
          },
          {
            text: 'java',
            link: '/tang/java2/00_前言.md'
          },
          {
            text: 'mysql',
            link: '/tang/mysql/01_MySQL概述.md'
          },
          {
            text: 'docker',
            link: '/tang/docker/readme.md'
          },
          {
            text: 'k8s',
            link: '/tang/k8s/学习资料/command.md'
          },
          {
            text: 'Elasticsearch',
            link: '/tang/Elasticsearch/01_Elasticsearch概述.md'
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
            text: '服务器环境安装',
            link: '/tang/server/CentOS7root账号免密登录.md'
          },
          {
            text: '微服务',
            link: '/tang/mservice/2.md'
          },
          {
            text: '项目上线',
            link: '/tang/项目上线/记一次小程序接口的发布.md'
          },
          {
            text: '物联网项目',
            link: '/tang/IoTPlatform/jetlinks项目初体验.md'
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
      '/tang/gitlab/': [
        {
          text: 'git',
          children: [
            '/tang/gitlab/gitlab-error.md',
            '/tang/gitlab/gitlab-commands.md'
          ]
        }
      ],
      '/tang/docker/': [
        {
          text: 'docker',
          children: [
            '/tang/docker/readme.md',
            '/tang/docker/Docker.md'
          ]
        }
      ],
      '/tang/Elasticsearch/': [
        {
          text: 'Elasticsearch',
          children: [
            '/tang/Elasticsearch/01_Elasticsearch概述.md',
            '/tang/Elasticsearch/02_Elasticsearch相关工具的安装与使用.md',
            '/tang/Elasticsearch/03_Elasticsearch核心概念.md',
            '/tang/Elasticsearch/04_Elasticsearch基本操作.md',
            '/tang/Elasticsearch/05_Elasticsearch DSL高级查询.md',
            '/tang/Elasticsearch/06_Elasticsearch进阶查询.md',
            '/tang/Elasticsearch/07_Java API 操作 Elasticsearch.md',
            '/tang/Elasticsearch/08_Spring Data Elasticsearch.md',
            '/tang/Elasticsearch/09_Linux 安装 Elasticsearch.md',
            '/tang/Elasticsearch/10_CAP定理.md',
            '/tang/Elasticsearch/11_Elasticsearch集群.md',
            '/tang/Elasticsearch/12_Elasticsearch分片控制与原理.md',
            '/tang/Elasticsearch/13_Elasticsearch的优化建议.md',
          ]
        }
      ],
      '/tang/java2/': [
          {
            text: 'java基础查漏补缺',
            children: [
              '/tang/java2/00_前言.md',
              '/tang/java2/01_Java语言概述.md',
              '/tang/java2/02_Java基本语法.md',
              '/tang/java2/03_Java数组.md',
              '/tang/java2/04_面向对象编程（上）.md',
              '/tang/java2/05_面向对象编程（中）.md',
              '/tang/java2/06_面向对象编程（下）.md',
              '/tang/java2/07_异常处理.md',
              '/tang/java2/08_多线程.md',
              '/tang/java2/09_Java常用类.md',
              '/tang/java2/10_枚举&注解.md',
              '/tang/java2/11_Java集合.md',
              '/tang/java2/12_Java泛型.md',
              '/tang/java2/13_IO流.md',
              '/tang/java2/14_网络编程.md',
              '/tang/java2/15_Java反射机制.md',
              '/tang/java2/16_Java8新特性.md',
              '/tang/java2/17_Java9&10&11新特性.md',
              '/tang/java2/18_JUC并发编程.md',
              '/tang/java2/19_设计模式.md',
              '/tang/java2/20_排序算法.md',
              '/tang/java2/99_面试题.md',
            ]
          }
      ],
      '/tang/mysql/': [
        {
          text: 'mysql基础查漏补缺',
          children: [
            '/tang/mysql/01_MySQL概述.md',
            '/tang/mysql/02_关系型数据库与非关系型数据库.md',
            '/tang/mysql/03_关系型数据库设计原则.md',
            '/tang/mysql/04_MySQL的登录.md',
            '/tang/mysql/05_MySQL一些常用命令.md',
            '/tang/mysql/06_MySQL图形化管理工具.md',
            '/tang/mysql/07_运算符.md',
            '/tang/mysql/08_MySQL函数.md',
            '/tang/mysql/09_子查询.md',
            '/tang/mysql/10_管理数据库和数据库表.md',
            '/tang/mysql/11_数据的增删改.md',
            '/tang/mysql/12_MySQL中的数据类型.md',
            '/tang/mysql/13_约束.md',
            '/tang/mysql/14_视图.md',
            '/tang/mysql/15_存储过程与存储函数.md',
            '/tang/mysql/16_变量、流程控制与游标.md',
            '/tang/mysql/17_触发器.md',
            '/tang/mysql/18_MySQL8.0新特性.md',
            '/tang/mysql/19_表及其数据.md',
            '/tang/mysql/99_MySQL常见问题的解决.md',
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
          text: '服务器环境安装',
          children: [
            '/tang/server/CentOS7root账号免密登录.md',
            '/tang/server/CentOS7安装GitLab.md',
            '/tang/server/CentOS7安装jdk1.8.md',
            '/tang/server/CentOs7安装jenkins.md',
            '/tang/server/CentOS7安装mysql5.7(使用yum源安装).md',
            '/tang/server/CentOS7安装redis.md',
            '/tang/server/CentOS7平滑升级nginx.md',
            '/tang/server/借助阿里云服务器使用frp做内网穿透.md',
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
      '/tang/项目上线/': [
        {
          text: '项目上线',
          children: [
            '/tang/项目上线/记一次小程序接口的发布.md',
          ]
        }
      ],
      '/tang/IoTPlatform/': [
        {
          text: '物联网项目',
          children: [
            '/tang/IoTPlatform/jetlinks项目初体验.md'
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
