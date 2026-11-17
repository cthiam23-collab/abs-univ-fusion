import type React from "react"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"

// La page catalogue est un composant client ("use client") : elle ne peut pas
// exporter de métadonnées. Elles sont donc définies dans ce layout de segment.
export const metadata: Metadata = buildMetadata({
  title: "Catalogue des cours | ABS",
  description:
    "Consultez le catalogue des cours de ABS : parcours Licence et Master par filière, progression semestre par semestre et blocs d'enseignement de chaque programme.",
  path: "/academics/course-catalog",
})

export default function CourseCatalogLayout({ children }: { children: React.ReactNode }) {
  return children
}
