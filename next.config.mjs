import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Tree-shake large icon/UI packages to reduce bundle size
  experimental: {
    optimizePackageImports: [
      "react-icons",
      "@heroicons/react",
      "framer-motion",
    ],
  },
};

if (process.env.NODE_ENV === "development") {
  // await setupDevPlatform();
}

export default nextConfig;
