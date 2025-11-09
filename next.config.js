/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  i18n: {
    locales: ['fr', 'en', 'he'],
    defaultLocale: 'fr',
    localeDetection: false,
  },
}

module.exports = nextConfig
