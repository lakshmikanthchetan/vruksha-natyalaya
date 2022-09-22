/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['loremflickr.com'], // To serve images from different domain
  },
};

module.exports = nextConfig;
