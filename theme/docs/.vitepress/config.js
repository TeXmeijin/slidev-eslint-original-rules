module.exports = {
    title: "Slidev Theme Geist",
    description: "The Vercel theme for Slidev",
    themeConfig: {
        repo: "nico-bachner/slidev-theme-geist",
        editLinks: true,
        lastUpdated: "Last Updated",
        nav: [
            {
                text: "Demo",
                link: "https://slidev-theme-geist-demo.vercel.app",
            },
            {
                text: "Contributing",
                link: "https://github.com/nico-bachner/slidev-theme-geist/blob/main/CONTRIBUTING.md",
            },
            {
                text: "Changelog",
                link: "https://github.com/nico-bachner/slidev-theme-geist/blob/main/CHANGELOG.md",
            },
        ],
        sidebar: [
            {
                text: "Introduction",
                children: [
                    { text: "Getting Started", link: "/getting-started" },
                ],
            },
            {
                text: "Inbuilts",
                children: [
                    {
                        text: "Default Configuration",
                        link: "/inbuilts/default-configuration",
                    },
                    { text: "Components", link: "/inbuilts/components" },
                    { text: "Layouts", link: "/inbuilts/layouts" },
                ],
            },
        ],
    },
};
