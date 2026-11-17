import { DetailPage } from "@/components/content/detail-page"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Campusbesuch | ABS",
  description: "Entdecken Sie den Campus der ABS in Hamdallaye ACI 2000, Bamako: Einrichtungen, Unterrichtsräume und Bereiche des Studentenlebens.",
  path: "/campus-tour",
  locale: "de",
})

export default function CampusTourPage() {
  return <DetailPage title="Campusbesuch" description="Lernen Sie die ABS-Universität in Bamako kennen: Ausbildungsbereiche, Studierendenservices und Gemeinschaftsleben, um sich Ihr Studium vorzustellen." highlights={["Das Zulassungsteam kennenlernen", "Räume und Bereiche des Studentenlebens entdecken", "Fragen zu Studiengängen und Campusleben stellen", "Ihren nächsten Schritt an der ABS-Universität vorbereiten"]} primaryHref="/contact" primaryLabel="Einen Besuch anfragen" />
}
