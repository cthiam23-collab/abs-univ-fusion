import { DetailPage } from "@/components/content/detail-page"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Employeurs : recrutez nos talents | ABS",
  description: "Entreprises et institutions : recrutez les étudiants et diplômés de ABS — African Business School.",
  path: "/employers/recruit",
})

export default function EmployerRecruitPage() {
  return <DetailPage title="Recruter les talents de l'ABS" description="Entreprises et institutions : faites connaissance avec les étudiants et les diplômés d'ABS — African Business School à Bamako, formés dans nos cinq pôles d'enseignement." highlights={["Des profils formés en administration des affaires, informatique, génie, relations internationales et communication", "Stages et recrutements à la sortie, selon les maquettes de formation", "Rencontres avec les étudiants lors des événements carrière", "Un interlocuteur dédié via l'administration"]} primaryHref="/contact" primaryLabel="Contacter l'établissement" />
}
