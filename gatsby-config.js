/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
var _data = require("./data/data.js")

module.exports = {
  siteMetadata: _data,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`, 
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/data/content/`,
      },
    },
    `gatsby-transformer-remark`
  ]
}
