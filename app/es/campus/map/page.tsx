import { DetailPage } from "@/components/content/detail-page"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Plano del campus | ABS",
  description: "Plano de acceso al campus de ABS — African Business School, Hamdallaye ACI 2000, Rue 338, Porte 06, Bamako, Mali.",
  path: "/campus/map",
  locale: "es",
})

export default function CampusMapPage() {
  return <DetailPage title="Plano del campus" description="Ubique las aulas, los servicios a los estudiantes y los espacios de trabajo en el campus de la Universidad ABS en Hamdallaye ACI 2000, Bamako." highlights={["Aulas de los cinco polos de formación", "Servicios y puntos de acogida para los estudiantes", "Biblioteca y espacios de trabajo", "Un campus fácil de recorrer en el día a día"]} primaryHref="/contact" primaryLabel="Contactar a la administración" />
}
