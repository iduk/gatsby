module.exports = {
  siteMetadata: {
    title: `letsGetit`,
    description: `페이지 소개, 테스트페이지`,
    author: `iduk`,
    siteUrl: `https://letsby.gatsbyjs.io`,
    // nav
    menuLinks: [
      {
        name: `About`,
        url: `/about`,
      },
      {
        name: `Reference`,
        url: `/reference`,
      },
      {
        name: `Blog`,
        url: `/blog`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/posts-md`,
      },
    },
    `gatsby-transformer-remark`,
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
        icon: `src/assets/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require('postcss-import'),
          require('postcss-preset-env')({
            stage: 0,
          }),
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          modules: {
            localIdentName: '[local]__[hash:base64:5]',
            exportLocalsConvention: 'camelCaseOnly',
          },
        },
      },
    },
    // {
    //   resolve: 'gatsby-plugin-minify-classnames',
    //   options: {
    //     /* gatsby-plugin-minify-classnames options here */
    //   },
    // },
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
