import { DetailPage } from "@/components/content/detail-page"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Apoyo psicológico | ABS",
  description: "Apoyo y escucha para los estudiantes de ABS — African Business School.",
  path: "/student-resources/counseling",
  locale: "es",
})

export default function CounselingPage() {
  return <DetailPage title="Apoyo y escucha para los estudiantes" description="La Universidad ABS acompaña a sus estudiantes en Bamako en su trayectoria: un equipo a la escucha para las cuestiones personales tanto como académicas." highlights={["Una acogida confidencial", "Un acompañamiento académico y personal", "Un equipo disponible y atento", "Una orientación hacia los interlocutores adecuados si es necesario"]} primaryHref="/contact" primaryLabel="Contactar al apoyo estudiantil" />
}
