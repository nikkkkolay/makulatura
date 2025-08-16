import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: new URL(process.env.API!).hostname,
        port: "1337",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
