import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // ESLint isn't installed in this project — skip linting during build
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
