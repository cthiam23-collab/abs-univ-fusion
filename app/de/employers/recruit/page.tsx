import { DetailPage } from "@/components/content/detail-page"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Arbeitgeber: Gewinnen Sie unsere Talente | ABS",
  description: "Unternehmen und Institutionen: Gewinnen Sie die Studierenden und Absolventen der ABS — African Business School für sich.",
  path: "/employers/recruit",
  locale: "de",
})

export default function EmployerRecruitPage() {
  return <DetailPage title="Talente der ABS gewinnen" description="Unternehmen und Institutionen: Lernen Sie die Studierenden und Absolventen der ABS — African Business School in Bamako kennen, ausgebildet in unseren fünf Ausbildungsbereichen." highlights={["Profile aus Betriebswirtschaft, Informatik, Ingenieurwesen, internationalen Beziehungen und Kommunikation", "Praktika und Einstellungen zum Abschluss, gemäß den Studienplänen", "Begegnungen mit Studierenden bei den Karriereveranstaltungen", "Eine feste Ansprechperson über die Verwaltung"]} primaryHref="/contact" primaryLabel="Die Einrichtung kontaktieren" />
}
