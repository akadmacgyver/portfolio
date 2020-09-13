/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Wojciech Sala — Portfolio`,
    description: `My personal portfolio website, check out and feel free to contact me.`,
    keywords: `Wojciech, Sala, Wojciech Sala, Wojtek, portfolio, Warsaw, Frontend`,
    author: `Wojciech Sala`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: [`en`, `pl`],
        defaultLanguage: `pl`,
        redirect: false,
      },
    },
  ],
}
