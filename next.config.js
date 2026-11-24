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
  async redirects() {
    return [
      // Apex -> www : www est l'hôte servi par un certificat valide et celui que
      // les moteurs indexent déjà. Sans cette règle, deux hôtes répondent le même
      // contenu et les canoniques désignent l'hôte refusé par les clients.
      {
        source: "/:path*",
        has: [{ type: "host", value: "abs-univ.com" }],
        destination: "https://www.abs-univ.com/:path*",
        permanent: true,
      },
      // Anciennes URL Joomla encore présentes dans les résultats Google : elles
      // répondaient 404 avec `noindex`, donc « sans contenu » dans la recherche.
      { source: "/en/formations/:path*", destination: "/en/programs", permanent: true },
      { source: "/fr/formations/:path*", destination: "/programs", permanent: true },
      { source: "/formations/:path*", destination: "/programs", permanent: true },
      {
        source: "/:locale(es|de|ar)/formations/:path*",
        destination: "/:locale/programs",
        permanent: true,
      },
    ]
  },
  // Enable standalone output for Docker deployments (Coolify, VPS, etc.)
  // This produces a minimal .next/standalone directory suitable for containerization.
  output: 'standalone',
}

module.exports = nextConfig
