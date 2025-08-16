import type { NextConfig } from "next";

const apiUrl = process.env.API || "http://localhost:1337";

const nextConfig: NextConfig = {
  images: {
    domains: [new URL(apiUrl).hostname],
  },
};

export default nextConfig;

console.log("API =", process.env.API);
