import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  images: {
    // Blog images are served from the Sanity CDN and optimised by Next.js.
    remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io", pathname: "/images/**" }],
  },
};

export default nextConfig;
