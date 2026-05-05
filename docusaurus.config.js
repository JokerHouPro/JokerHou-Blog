module.exports = {
  title: '签梦云（济南）信息科技有限公司',
  tagline: '连接工业，智造未来',
  url: 'https://qianmengyun.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: '签梦云',
  projectName: 'qianmengyun-official',
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false
    },
    navbar: {
      title: '签梦云',
      logo: {
        alt: '签梦云 Logo',
        src: 'img/logo.svg'
      },
      items: [
        { to: '/', activeBasePath: '/', label: '首页', position: 'left' },
        { to: 'docs/products', label: '产品与服务', position: 'left' },
        { to: 'docs/solutions', label: '解决方案', position: 'left' },
        { to: 'blog', label: '新闻中心', position: 'left' },
        { to: 'docs/about', label: '关于我们', position: 'left' },
        { href: 'tel:+86-531-88888888', label: '联系我们', position: 'right', className: 'navbar-contact-btn' }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        { title: '产品与服务', items: [
          { label: '工业互联网平台', to: 'docs/products' },
          { label: '智能解决方案', to: 'docs/solutions' }
        ] },
        { title: '关于我们', items: [
          { label: '公司简介', to: 'docs/about' }
        ] },
        { title: '联系方式', items: [
          { label: '电话：0531-88888888', href: 'tel:+86-531-88888888' },
          { label: '邮箱：contact@qianmengyun.com', href: 'mailto:contact@qianmengyun.com' }
        ] }
      ],
      copyright: '© 2024 签梦云（济南）信息科技有限公司. 版权所有.'
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: { sidebarPath: require.resolve('./sidebars.js') },
        blog: { showReadingTime: true, path: './blog', routeBasePath: '/blog' },
        theme: { customCss: require.resolve('./src/css/custom.css') }
      }
    ]
  ]
};
