module.exports = {
    siteMetadata: {
        title: 'MEW App',
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
        'gatsby-plugin-image',
        'gatsby-plugin-offline',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: `mew-app`,
                short_name: `mew-app`,
                start_url: `/`,
                background_color: `#63625E`,
                theme_color: `#E092A2`,
                display: `standalone`,
                icon: 'src/assets/mewlogo.png',
            },
        },
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: './src/pages/',
            },
            __key: 'pages',
        },
        'gatsby-plugin-typescript',
        `gatsby-plugin-less`,
    ],
}
