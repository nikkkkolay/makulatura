import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [new URL(process.env.API as string).hostname],
  },
};

export default nextConfig;
