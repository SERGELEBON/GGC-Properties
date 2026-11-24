import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  images: {
    // Local assets are pre-sized (max 1344px); skip the on-demand optimizer
    // which stalls on large upscale requests in this environment.
    unoptimized: true,
  },
};

export default nextConfig;
