/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
    API_KEY: process.env.API_KEY,
  },
  images: {
    domains: ["image.tmdb.org"],
  },
};

module.exports = nextConfig;
