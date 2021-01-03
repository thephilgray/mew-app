module.exports = {
    siteMetadata: {
        title: 'MEW 2021',
        // siteUrl: ``,
        // description: ``,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-emotion`,
            options: {
                // Accepts the following options, all of which are defined by `@emotion/babel-plugin` plugin.
                // The values for each key in this example are the defaults the plugin uses.
                sourceMap: true,
                autoLabel: 'dev-only',
                labelFormat: `[local]`,
                cssPropOptimization: true,
            },
        },
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
        //     name: `mew-app`,
        //     short_name: `mew-app`,
        //     start_url: `/`,
        //     background_color: `#f7f0eb`,
        //     theme_color: `#a2466c`,
        //     display: `standalone`,
        //   },
        // },
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
