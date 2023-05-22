import type { GatsbyConfig } from "gatsby"

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const config: GatsbyConfig = {
  siteMetadata: {
    title: `MEW App`,
    siteUrl: `https://www.musiceveryweek.org`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-less`,
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
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
  ],
}

export default config
