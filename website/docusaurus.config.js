import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Baileys API',
  tagline: 'Build WhatsApp Apps with REST API',
  favicon: 'img/favicon.ico',

  url: 'https://baileys-api.xbot.my',
  baseUrl: '/',

  organizationName: 'xbot-my',
  projectName: 'baileys-api',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  onBrokenAnchors: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: '../docs',
          routeBasePath: 'docs',
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/xbot-my/baileys-api/edit/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'Baileys API',
          src: 'img/logo.svg',
          srcDark: 'img/logo.svg',
          href: '/',
        },
        items: [
          { to: '/', label: 'Home', position: 'left' },
          { to: '/docs/baileys-api/intro', label: 'Docs', position: 'left' },
          {
            href: 'https://github.com/xbot-my/baileys-api',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Projects',
            items: [
              { label: 'baileys-api', to: '/docs/baileys-api/intro' },
              { label: 'laravel-baileys-api', to: '/docs/laravel/intro' },
              { label: 'baileys-api-manager', to: '/docs/manager/intro' },
            ],
          },
          {
            title: 'Community',
            items: [
              { label: 'GitHub', href: 'https://github.com/xbot-my' },
              { label: 'xbot.my', href: 'https://xbot.my' },
            ],
          },
          {
            title: 'More',
            items: [
              { label: 'Changelog', to: '/docs/baileys-api/changelog' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} xbot.my. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.oneDark,
        additionalLanguages: ['bash', 'python', 'javascript', 'typescript', 'json'],
      },
    }),
};

export default config;
