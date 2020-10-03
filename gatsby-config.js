require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Wojciech Sala — `,
    description: `My personal portfolio website, check out and feel free to contact me.`,
    keywords: `Wojciech, Sala, Wojciech Sala, Wojtek, portfolio, Warsaw, Frontend`,
    author: `Wojciech Sala`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-scroll-reveal`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: [`en`, `pl`],
        defaultLanguage: `pl`,
        redirect: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: "src/assets/favicon.png",
      },
    },
    {
      resolve: "gatsby-source-mongodb",
      options: {
        dbName: "portfolio",
        collection: "projects",
        server: {
          address: process.env.GATSBY_DB_ADDRESS,
          port: 27017,
        },
        auth: {
          user: process.env.GATSBY_DB_USERNAME,
          password: process.env.GATSBY_DB_PASSWORD,
        },
        extraParams: {
          replicaSet: "projects-shard-0",
          ssl: true,
          authSource: "admin",
          retryWrites: true,
        },
      },
    },
  ],
}
