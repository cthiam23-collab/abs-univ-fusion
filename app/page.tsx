import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import HomeView from "@/components/home-page-view"

/**
 * L'accueil était un composant client : il héritait du titre du layout mais
 * n'avait ni canonique, ni description propre, ni Open Graph dédié. La vue est
 * donc rendue depuis un composant client, et la page reste un composant serveur
 * pour pouvoir exporter ses métadonnées.
 */
export const metadata: Metadata = buildMetadata({
  title: "ABS | African Business School à Bamako — Licence et Master",
  description:
    "African Business School (ABS) à Bamako, Mali : Licence et Master en management, ingénierie informatique, génie civil et minier, relations internationales et communication.",
  path: "/",
})

export default function HomePage() {
  return <HomeView />
}
