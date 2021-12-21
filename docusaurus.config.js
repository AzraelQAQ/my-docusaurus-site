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
        defaultLocale: "zh-Hans",
        locales: ["zh-Hans"]
    },
    themeConfig: {
        navbar: {
            hideOnScroll: true,
            title: '远方',
            logo: {
                alt: 'My Site Logo',
                src: 'img/Avatar.jpg',
            },
            items: [
                {
                    to: '/Love/Intro',    // ./Love/Intro.md
                    label: 'Love',
                    position: 'left',
                    activeBaseRegex: `/Love/`,
                },
                {
                    to: '/Work/Intro',    // ./Work/Intro.md
                    label: 'Work',
                    position: 'left',
                    activeBaseRegex: `/Work/`,
                }, {
                    to: '/docs/Intro',    // ./docs/Intro.md
                    label: 'Docs',
                    position: 'left',
                    activeBaseRegex: `/docs/`,
                },
                { to: '/blog', label: 'Blog', position: 'left' },
                {
                    href: 'https://github.com/AzraelQAQ/my-docusaurus-site',
                    label: 'GitHub',
                    position: 'right',
                },
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
                },],
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
    plugins: [
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'Work',
                path: 'Work',
                routeBasePath: 'Work',
                sidebarPath: require.resolve('./sidebars.js'),
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'Love',
                path: 'Love',
                routeBasePath: 'Love',
                sidebarPath: require.resolve('./sidebars.js'),
            },
        ],
    ],
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    routeBasePath: 'docs',
                    path: 'docs',
                    sidebarPath: require.resolve('./sidebars.js'),
                    lastVersion: 'current',
                    onlyIncludeVersions: ['current'],
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