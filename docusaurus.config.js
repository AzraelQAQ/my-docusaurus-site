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
            items: [{
                to: '/love/Intro',    // ./love/Intro.md
                label: 'Love',
                position: 'left',
                activeBaseRegex: `/love/`,
            },{
                to: '/work/Intro',    // ./work/Intro.md
                label: 'Work',
                position: 'left',
                activeBaseRegex: `/work/`,
            }, {
                to: '/docs/Intro',    // ./docs/Intro.md
                label: 'Docs',
                position: 'left',
                activeBaseRegex: `/docs/`,
            }, 

            { to: '/blog', label: 'Blog', position: 'left', },
            { type: 'search', position: 'right', },
            
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
                    label: 'Love',
                    to: '/love/intro',
                }, {
                    label: 'Work',
                    to: '/work/intro',
                }, {
                    label: 'Docs',
                    to: '/docs/intro',
                },
                ],
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
                id: 'work',
                path: 'work',
                routeBasePath: 'work',
                sidebarPath: require.resolve('./sidebars.js'),
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'love',
                path: 'love',
                routeBasePath: 'love',
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