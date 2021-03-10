if (process.env.ENVIROMENT !== 'production') {
  require('dotenv').config()
}

const contentfulConfig = {
  spaceId: process.env.SPACE_ID,
  accessToken: process.env.ACCESS_TOKEN,
}

module.exports = {
  siteMetadata: {
    title: 'Landing Celeste Mur',
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
    {
      resolve: `gatsby-plugin-typography`,
      options: {
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
  ],
}
