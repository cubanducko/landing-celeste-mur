/** @type {import('next').NextConfig} */

const withNextIntl = require('next-intl/plugin')(
  // This is the default (also the `src` folder is supported out of the box)
  './i18n.config.ts',
)

const nextImageConfig = {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'images.ctfassets.net',
      port: '',
    },
    {
      protocol: 'https',
      hostname: 'downloads.ctfassets.net',
      port: '',
    },
  ],
}

module.exports = withNextIntl({
  images: nextImageConfig,
})
