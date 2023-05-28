/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/stances',
        destination: '/',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig
