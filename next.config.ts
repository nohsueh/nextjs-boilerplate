import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  rewrites: async () => {
    return [
      {
        source: "/blog",
        destination: "https://blog-builder-demo.vercel.app/blog",
      },
      {
        source: "/blog/:path*",
        destination: "https://blog-builder-demo.vercel.app/blog/:path*",
      },
    ];
  },
};

export default nextConfig;
