if (process.env.ENVIROMENT !== 'production') {
  require('dotenv').config()
}

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  host: process.env.CONTENTFUL_HOST,
}

module.exports = {
  siteMetadata: {
    title: 'Landing Celeste Mur',
    siteUrl: 'https://celestemur.gatsbyjs.io/',
  },
  plugins: [
    `gatsby-alias-imports`,
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
    'gatsby-plugin-nprogress',
    `gatsby-plugin-layout`,
    'gatsby-plugin-emotion',
    'gatsby-plugin-webpack-bundle-analyser-v2',
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: [`en`, `es`],
        // language file path
        defaultLanguage: `es`,
        // option to redirect to `/ko` when connecting `/`
        redirect: true,
      },
    },
    `gatsby-plugin-preload-fonts`,
    {
      resolve: 'gatsby-plugin-preconnect',
      options: {
        domains: ['https://fonts.gstatic.com'],
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        omitGoogleFont: true,
        pathToConfigModule: `src/design-system/typography/index`,
      },
    },
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-robots-txt',
    `gatsby-plugin-sitemap`,
  ],
}
