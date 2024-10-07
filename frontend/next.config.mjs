/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_WORDPRESS_API_URL: process.env.NEXT_PUBLIC_WORDPRESS_API_URL,
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/home',
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8086',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'wp-api.maryahayne.com',
        port: '',
      },
    ],
  },
  crossOrigin: 'anonymous',
};

export default nextConfig;
