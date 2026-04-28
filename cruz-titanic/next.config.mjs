/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export so the site can be dropped onto any static host
  // (Netlify Drop, GitHub Pages, S3, etc.) — no Node server required.
  output: "export",
  reactStrictMode: true,
  poweredByHeader: false,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error", "warn"] } : false,
  },
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizePackageImports: ["framer-motion", "@react-three/drei"],
  },
};

export default nextConfig;
