import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.andrubailey.com" }],
        destination: "https://andrubailey.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
