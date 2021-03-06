module.exports = {
  base: "/Blogs/", // 部署到 github 相关配置（即仓库名字）
  title: "Chanyocai's Blog",
  description: "Front-end development engineer notes",
  port: 8080, // 启动端口号
  head: [
    [
      "link", // 设置标签页图标 favicon.ico，注意图片放在 public 文件夹下
      { rel: "icon", href: "avatar.png" },
    ],
    [
      'meta', // 移动端优化
      { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }
    ]
  ],
  // 语言配置
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
    }
  },
  // 第三方主题插件
  theme: "reco",
  type: 'blog',
  themeConfig: {
    // 博客配置
    noFoundPageByTencent: false, // 关闭公益
    nav: [
      { text: 'Home', link: '/', icon: 'reco-home' },
      { text: 'Blog', link: '/blog/', icon: 'reco-blog' },
      { text: 'GuiHub', link: 'https://github.com/chanyoucai', icon: 'reco-github' },
    ],
    sidebar: {
      "/blog/": [
        {
          title: "Vue",
          collapsable: true,
          children: [{ title: "Vue跨域解决方案", path: "/blog/" }]
        },
        // {
        //   title: "CSS",
        //   collapsable: true,
        //   children: [
        //     { title: "Basics", path: "/web/basics/css/" },
        //     { title: "C3", path: "/web/basics/css/High" }
        //   ]
        // },
        // {
        //   title: "JavaScript",
        //   collapsable: true,
        //   children: [{ title: "Basics", path: "/web/basics/js/" }]
        // },
        // {
        //   title: "JQuery",
        //   collapsable: true,
        //   children: [
        //     { title: "Basics", path: "/web/basics/jq/" },
        //     { title: "Bootstrap", path: "/web/basics/jq/Bootstrap" }
        //   ]
        // },
        // {
        //   title: "MarkDown",
        //   collapsable: true,
        //   children: [{ title: "Basics", path: "/web/basics/markdown/" }]
        // },
        // {
        //   title: "Git",
        //   collapsable: true,
        //   children: [{ title: "Basics", path: "/web/basics/git/" }]
        // }
      ],
    }
  },
  markdown: {
    lineNumbers: true
  },
};
