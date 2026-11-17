import { DetailPage } from "@/components/content/detail-page"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Visite de la bibliothèque | ABS",
  description: "Planifier une visite de la bibliothèque de ABS — African Business School.",
  path: "/resources/library/visit",
})

export default function LibraryVisitPage() {
  return (
    <DetailPage
      title="Visiter la bibliothèque ABS"
      description="La bibliothèque accompagne les étudiants, enseignants et chercheurs avec des espaces de travail, des ressources documentaires et un service d’orientation adapté aux parcours de l’African Business School (ABS)."
      highlights={[
        "Accueil et orientation documentaire pour les étudiants",
        "Accès aux ouvrages, supports de cours et documents de recherche",
        "Espaces de lecture et de travail pour les travaux individuels ou en groupe",
        "Inscription des membres et suivi des prêts et retours",
      ]}
      primaryHref="/contact/library"
      primaryLabel="Contacter la bibliothèque"
    />
  )
}
