const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: '远方',
    tagline: 'Believe in yourself',
    url: 'https://your-docusaurus-test-site.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/Avatar.jpg',
    organizationName: 'facebook', // Usually your GitHub org/user name.
    projectName: 'docusaurus', // Usually your repo name.
    i18n: {
        defaultLocale:'zh-Hans',
        locales: ['zh-Hans','en-US','fr']
    },
    themeConfig: {
        navbar: {
            title: '诺言',
            logo: {
                alt: 'My Site Logo',
                src: 'img/Avatar.jpg',
            },
            items: [
                {type: 'love',docId: 'intro',position: 'left',label: 'love',},
                {type: 'doc',docId: 'intro',position: 'left',label: 'Tutorial',},
                {to: '/blog', label: 'Blog', position: 'left',},
                {type: 'localeDropdown',position:'right',},
                {href: 'https://github.com/AzraelQAQ/my-docusaurus-site',label: 'GitHub',position: 'right',},
            ],
        },
        footer: {
            style: 'dark',
            links: [{
                    title: 'Docs',
                    items: [{
                        label: 'Tutorial',
                        to: '/docs/intro',
                    }, {
                        label: '还没想好放什么就放一个百度吧',
                        to: 'https://www.baidu.com',
                    }, {
                        label: '这里就放一个仇老师我什么时候可以去找你玩呀',
                        to: 'https://www.dianping.com/haerbin',
                    }, ],
                },
                {
                    title: 'Community',
                    items: [{
                            label: 'Stack Overflow',
                            href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                        },
                        {
                            label: 'Discord',
                            href: 'https://discordapp.com/invite/docusaurus',
                        },
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/docusaurus',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [{
                            label: 'Blog',
                            to: '/blog',
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/AzraelQAQ/my-docusaurus-site',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/AzraelQAQ/my-docusaurus-site/tree/master/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl: 'https://github.com/AzraelQAQ/my-docusaurus-site/tree/master/blog',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};