import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.base44.com",
        pathname: "/images/**",
      },
    ],
  },
  eslint: {
    // ESLint isn't installed in this project — skip linting during build
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
