/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: false,
  images:{
    domains: ["images.unsplash.com"]
  }
}

module.exports = nextConfig
