import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  rewrites: async () => {
    return [
      {
        source: "/blog/:path*",
        destination: "https://blog-builder-demo.vercel.app/en/blog/:path*",
      },
    ];
  },
};

export default nextConfig;
