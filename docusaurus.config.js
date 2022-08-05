// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Wakanda Labs',
  tagline: 'Wakanda Metaverse',
  url: 'https://www.wakanda-labs.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  
  organizationName: 'wakandalabs',
  projectName: 'wakanda-labs.com',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/wakandalabs/wakanda-labs.com/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/wakandalabs/wakanda-labs.com/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/global.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Wakanda Labs',
        logo: {
          alt: 'Wakanda Labs Logo',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/wakandaplus', label: 'Wakanda+', position: 'left'},
          {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: 'Developers',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/wakandalabs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Wakanda+',
            items: [],
          },
          {
            title: 'Developers',
            items: [
              {
                label: 'Docs',
                to: '/docs',
              },
            ],
          },
          {
            title: 'About us',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/wakandalabs/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discord.com/invite/hzvXbjtzgj',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Wakanda Labs. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      googleAnalytics: {
        trackingId: 'G-YFB5D0EF68',
      }
    }),
};

module.exports = config;
