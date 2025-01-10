import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  output: 'export',
  images: {
    unoptimized: true, // Disable Image Optimization API
  },
};

export default nextConfig;
