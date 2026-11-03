/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  async redirects() {
    return [
      '/about',
      '/pricing',
      '/docs',
      '/docs/:path*',
      '/ai-examples',
      '/ai-examples/:path*',
      '/auth',
      '/auth/:path*',
    ].map((source) => ({
      source,
      destination: '/',
      permanent: true,
    }));
  },
};

module.exports = nextConfig;
