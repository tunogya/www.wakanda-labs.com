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
        googleAnalytics: {
          trackingID: "G-YFB5D0EF68",
          anonymizeIP: false,
        },
        sitemap: {
          changefreq: 'daily',
          filename: "sitemap.xml",
        }
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
            {
              type: 'doc',
              docId: 'index',
              position: 'left',
              label: 'API',
            },
            {to: '/blog', label: 'Blog', position: 'left'},
            {to: '/wizardingpay', label: 'Wizarding Pay', position: 'left'},
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
              title: 'API',
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
          copyright: `Copyright © ${new Date().getFullYear()} Wakanda Labs.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
};

module.exports = config;
