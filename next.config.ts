import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    ppr: "incremental",
  },
  devIndicators: {
    position: 'bottom-left',
  },
};

export default nextConfig;
