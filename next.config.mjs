/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
    async redirects() {
    return [
      {
        source: '/',
        destination: '/login',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
