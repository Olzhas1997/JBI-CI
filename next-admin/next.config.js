/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    API_URL: process.env.API_URL
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8083',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'xn--90agcayt.xn--80ahefirqxn.xn--p1ai',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'macroserver.ru',
        port: '',
        pathname: '/**'
      },
    ],
  }
}

module.exports = nextConfig
