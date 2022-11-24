/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.simpleicons.org', 'i.pinimg.com'],
  },
};

module.exports = nextConfig;
