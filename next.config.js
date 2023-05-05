const {i18n} = require("./next-i18next.config");

const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [],
        rehypePlugins: [],
    },
})

const authCookie = {
    type: 'cookie',
    key: 'next-auth.session-token',
    value: '^[0-9a-f-]{36}$',
}

/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects() {
      return [
        {
          source: '/profile/:path*',
          missing: [authCookie],
          permanent: false,
          destination: '/sign-in',
        },
      ]
    },
    i18n,
    pageExtensions: ['ts', 'tsx', 'jsx', 'md', 'mdx', 'html'],
    webpack: (config) => {
        config.experiments = {
            ...config.experiments,
            ...{
                topLevelAwait: true
            }
        }
        return config
    },
    serverRuntimeConfig: {
        mongoURI: process.env.MONGO_URI,
        mongoDB: process.env.MONGO_DB,
        nextAuthURL: process.env.NEXTAUTH_URL,
        nextAuthSecret: process.env.NEXTAUTH_SECRET,
        googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID,
        googleId: process.env.GOOGLE_ID,
        googleSecret: process.env.GOOGLE_SECRET,
    }
}

module.exports = withMDX(nextConfig)
