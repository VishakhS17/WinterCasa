/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
    unoptimized: false,
  },
  experimental: {
    optimizePackageImports: ['framer-motion', 'swiper'],
  },
}

module.exports = nextConfig

