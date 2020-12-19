module.exports = {
    siteMetadata: {
        title: 'app',
        // siteUrl: `https://www.gatsbyjs.com`,
        // description: `Blazing fast modern site generator for React`,
    },
    plugins: [
        'gatsby-plugin-styled-components',
        // {
        //   resolve: "gatsby-plugin-google-analytics",
        //   options: {
        //     trackingId: "",
        //   },
        // },
        'gatsby-plugin-image',
        'gatsby-plugin-react-helmet',
        // "gatsby-plugin-sitemap",
        'gatsby-plugin-offline',
        // {
        //   resolve: "gatsby-plugin-manifest",
        //   options: {
        //     name: `MEW-app`,
        //     short_name: `MEW-app`,
        //     start_url: `/`,
        //     background_color: `#f7f0eb`,
        //     theme_color: `#a2466c`,
        //     display: `standalone`,
        //   },
        // },
        // "gatsby-plugin-mdx",
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        // {
        //   resolve: "gatsby-source-filesystem",
        //   options: {
        //     name: "images",
        //     path: "./src/images/",
        //   },
        //   __key: "images",
        // },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: './src/pages/',
            },
            __key: 'pages',
        },
        'gatsby-plugin-typescript',
    ],
}
