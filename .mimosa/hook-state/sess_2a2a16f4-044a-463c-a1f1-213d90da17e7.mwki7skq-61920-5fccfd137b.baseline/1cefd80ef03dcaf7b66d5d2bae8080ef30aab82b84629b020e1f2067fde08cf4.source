import { DetailPage } from "@/components/content/detail-page"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Visita al campus | ABS",
  description: "Descubra el campus de ABS en Hamdallaye ACI 2000, Bamako: instalaciones, aulas y espacios de vida estudiantil.",
  path: "/campus-tour",
  locale: "es",
})

export default function CampusTourPage() {
  return <DetailPage title="Visita al campus" description="Venga a descubrir la Universidad ABS en Bamako: espacios de formación, servicios a los estudiantes y vida comunitaria, para proyectarse en sus estudios." highlights={["Reunirse con el equipo de admisiones", "Descubrir las aulas y los espacios de vida estudiantil", "Plantear sus preguntas sobre las formaciones y la vida en el campus", "Preparar su próximo paso en la Universidad ABS"]} primaryHref="/contact" primaryLabel="Solicitar una visita" />
}
