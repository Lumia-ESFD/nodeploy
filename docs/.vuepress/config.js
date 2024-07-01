module.exports = {
  title: '瓜农的文档',
  description: '曾经是码农，现在是瓜农',
  theme: 'reco',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { 
                text: '过程文档', 
                items: [
                    { text: '如何种瓜', link: 'https://github.com/' },
                    { text: '如何码砖', link: 'https://juejin.cn/' }
                ]
            }
        ],
		sidebar: [
            {
                title: '欢迎学习',
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    { title: "学前必读", path: "/" }
                ]
            },
            {
              title: "基础学习",
              path: '/handbook/ConditionalTypes',
              collapsable: false, // 不折叠
              children: [
                { title: "准备种瓜", path: "/handbook/ConditionalTypes" },
                { title: "翻地技巧", path: "/handbook/Generics" }
              ],
            }
          ]
    }
}
