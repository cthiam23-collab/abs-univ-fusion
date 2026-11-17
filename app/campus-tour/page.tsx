import { DetailPage } from "@/components/content/detail-page"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Visite du campus | ABS",
  description: "Découvrez le campus de ABS à Hamdallaye ACI 2000, Bamako : installations, salles de cours et espaces de vie étudiante.",
  path: "/campus-tour",
})

export default function CampusTourPage() {
  return <DetailPage title="Visite du campus" description="Venez découvrir l'ABS à Bamako : espaces de formation, services aux étudiants et vie communautaire, pour vous projeter dans vos études." highlights={["Rencontrer l'équipe des admissions", "Découvrir les salles et les espaces de vie étudiante", "Poser vos questions sur les formations et la vie au campus", "Préparer votre prochaine étape à l'ABS"]} primaryHref="/contact" primaryLabel="Demander une visite" />
}
