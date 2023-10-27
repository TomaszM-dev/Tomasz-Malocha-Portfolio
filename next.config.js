/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  future: { webpack5: true },
};

module.exports = nextConfig;
