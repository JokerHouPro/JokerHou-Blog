module.exports = {
  title: 'JokerHou',
  tagline: '创意、技术与设计的交汇点',
  url: 'https://jokerhou.site',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'jokerhou',
  projectName: 'jokerhou-blog',
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'JokerHou',
      logo: {
        alt: 'JokerHou Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/',
          activeBasePath: '/',
          label: '首页',
          position: 'left',
        },
        {to: 'blog', label: '博客', position: 'left'},
        {
          href: 'https://github.com/jokerhou',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '探索',
          items: [
            {
              label: '博客',
              to: '/',
            },
          ],
        },
        {
          title: '社交',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/jokerhou',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/jokerhou',
            },
          ],
        },
        {
          title: '关于',
          items: [
            {
              label: '关于我',
              to: '/',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} JokerHou. 用心设计，用爱创造。`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        blog: {
          showReadingTime: true,
          path: "./blog",
          routeBasePath: "/"
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
