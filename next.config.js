// /** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/u/**',
      },
      {
        protocol: 'http',
        hostname: '192.168.1.100',
        port: '3333',
        pathname: '/uploads/**',
      },
    ],
  },
}
