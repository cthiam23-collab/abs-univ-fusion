import { DetailPage } from "@/components/content/detail-page"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Plan du campus | ABS",
  description: "Plan d'accès du campus de ABS — African Business School, Hamdallaye ACI 2000, Rue 338, Porte 06, Bamako, Mali.",
  path: "/campus/map",
})

export default function CampusMapPage() {
  return <DetailPage title="Plan du campus" description="Repérez les salles de cours, les services aux étudiants et les espaces de travail sur le campus de l'ABS à Hamdallaye ACI 2000, Bamako." highlights={["Salles de cours des cinq pôles de formation", "Services et points d'accueil pour les étudiants", "Bibliothèque et espaces de travail", "Un campus facile à parcourir au quotidien"]} primaryHref="/contact" primaryLabel="Contacter l'administration" />
}
