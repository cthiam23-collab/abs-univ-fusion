/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // TODO: corriger les erreurs de types puis repasser à false.
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    unoptimized: true,
  },
  // Enable standalone output for Docker deployments (Coolify, VPS, etc.)
  // This produces a minimal .next/standalone directory suitable for containerization.
  output: 'standalone',
}

module.exports = nextConfig
