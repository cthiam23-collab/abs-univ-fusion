import { CtaDestination } from "@/components/content/cta-destination"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Contacto deportes | ABS",
  description: "Contactar al equipo de actividades deportivas de ABS — African Business School.",
  path: "/student-life/athletics/contact",
  locale: "es",
})
export default function Page() { return <CtaDestination title="Contactar al equipo de actividades deportivas" description="Escriba al equipo de vida estudiantil de la Universidad ABS para cualquier pregunta sobre las actividades deportivas y el bienestar en el campus de Bamako." primaryHref="/contact" /> }
