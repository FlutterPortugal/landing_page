module.exports = {
  siteMetadata: {
    title: `Flutter Portugal`,
    description: `Flutter Portugal is a Community dedicated to learn, discuss and spread everything about Flutter`,
    author: `@__caraujo__`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typescript`,
      options: {

      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `fluter-portugal`,
        short_name: `fluterpt`,
        start_url: `/`,
        background_color: `#54C5F8`,
        theme_color: `#015398`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `open sans\:300,400,400i,700`
        ],
        display: 'swap'
      }
    },
  ],
}
