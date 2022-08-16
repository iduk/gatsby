module.exports = {
  siteMetadata: {
    title: `letsGetit`,
    description: `hahaha`,
    author: `@iduk`,
    siteUrl: `https://letsby.gatsbyjs.io`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `letsby blog`,
        short_name: `letsby`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/static/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require('sass'),
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`postcss-preset-env`)({ stage: 0 })],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      content: ['src/**/!(*.d).{ts,js,jsx,tsx,md,mdx}'],
      options: {
        printRejected: true,
        purgeCSSOptions: {
          // https://purgecss.com/configuration.html#options
          // safelist: ['safelist'], // Don't remove this selector
        },
      },
    },
  ],
}
