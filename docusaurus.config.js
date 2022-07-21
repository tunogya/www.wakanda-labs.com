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

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'wakandalabs', // Usually your GitHub org/user name.
  projectName: 'wakanda-labs.com', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/wakandalabs/wakanda-labs.com/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/wakandalabs/wakanda-labs.com/tree/main/packages/create-docusaurus/templates/shared/',
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
          {to: '/community', label: 'Community', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/wakandalabs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
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
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.com/invite/hzvXbjtzgj',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/wakandalabs',
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
                label: 'Join us',
                to: '/join-us',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Wakanda Labs, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
