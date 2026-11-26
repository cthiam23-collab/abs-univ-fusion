import type { MetadataRoute } from "next"

/**
 * Servi sur /manifest.webmanifest. Les icônes sont celles déjà présentes dans
 * public/ : sans ce fichier, ni /manifest.webmanifest ni /icon.png ne répondaient
 * (404), et le navigateur n'affichait aucun favicon.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ABS — African Business School à Bamako",
    short_name: "ABS",
    description:
      "African Business School à Bamako : formations, pédagogie, admissions et informations pratiques.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#163A70",
    lang: "fr",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/icon-light-32x32.png", sizes: "32x32", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
      // The maskable file carries 20 % padding (abs-branding/build.py), so it is
      // declared "maskable" alone: advertised as "any" too, the same padded file
      // would render at 80 % in a slot that expects no padding.
      {
        src: "/icon-512-maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  }
}
