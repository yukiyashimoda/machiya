/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.microcms-assets.io'], // 修正点
  },
  env: {
    NEXT_PUBLIC_SERVICE_DOMAIN: process.env.NEXT_PUBLIC_SERVICE_DOMAIN,
    NEXT_PUBLIC_API_KEY: process.env.NEXT_PUBLIC_API_KEY,
  },
};

export default nextConfig;