import { DetailPage } from "@/components/content/detail-page"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Campusplan | ABS",
  description: "Lageplan des Campus der ABS — African Business School, Hamdallaye ACI 2000, Rue 338, Porte 06, Bamako, Mali.",
  path: "/campus/map",
  locale: "de",
})

export default function CampusMapPage() {
  return <DetailPage title="Campusplan" description="Finden Sie die Unterrichtsräume, Studierendenservices und Arbeitsbereiche auf dem Campus der ABS-Universität in Hamdallaye ACI 2000, Bamako." highlights={["Unterrichtsräume der fünf Ausbildungsbereiche", "Services und Empfangspunkte für Studierende", "Bibliothek und Arbeitsbereiche", "Ein Campus, der sich im Alltag leicht erschließen lässt"]} primaryHref="/contact" primaryLabel="Die Verwaltung kontaktieren" />
}
