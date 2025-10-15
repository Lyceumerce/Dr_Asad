/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'skillicons.dev',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
