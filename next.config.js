/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*', // Proxy para o Next.js
        destination: 'https://api-a3-asgz.onrender.com/:path*', // Alvo
      },
    ];
  },
};

module.exports = nextConfig;
