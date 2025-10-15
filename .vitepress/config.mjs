import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "JavaScript 教程",
  description: "A VitePress Site",
  themeConfig: {
    logo:'/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { 
        text: '介绍', 
        items:[ 
          { text: '1.1 导论', link: '/1 入门篇/1.1 导论' }, 
          { text: '1.2 历史', link: '/1 入门篇/1.2 历史' },
          { text: '1.3 基本语法', link: '/1 入门篇/1.3 基本语法' }
        ] 
      },
      { 
        text: '数据类型', 
        items:[
          { text: '2.1 数据类型', link: '/2 数据类型/2 数据类型' }
        ]
      },
      { 
        text: '运算符', 
        items:[
          { text: '3.1 运算符', link: '/3 运算符/3 运算符' }
        ]
      }
    ],

    sidebar: [
      {
        text: '1 入门篇',
        collapsed: true, 
        items: [
          { text: '1.1 导论', link: '/1 入门篇/1.1 导论' },
          { text: '1.2 历史', link: '/1 入门篇/1.2 历史' },
          { text: '1.3 基本语法', link: '/1 入门篇/1.3 基本语法' }
        ]
      },
      {
        text: '2 数据类型',
        collapsed: true,
        items: [
          { text: '2 数据类型', link: '/2 数据类型/2 数据类型' }
        ]
      },
      {
        text: '3 运算符',
        collapsed: true,
        items: [
          { text: '3 运算符', link: '/3 运算符/3 运算符' }
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Ritaa-Jiang' }
    ],

    footer:{
      copyright:"Copyright @ 2025-present Rita"
    }
  }
})
