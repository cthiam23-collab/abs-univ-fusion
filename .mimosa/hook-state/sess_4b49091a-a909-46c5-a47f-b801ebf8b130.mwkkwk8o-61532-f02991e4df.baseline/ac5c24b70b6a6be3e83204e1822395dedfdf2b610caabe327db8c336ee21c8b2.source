import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Restauración estudiantil | ABS",
  description: "Restauración para los estudiantes de ABS — African Business School.",
  path: "/student-life/dining",
  locale: "es",
})

const diningOptions = [
  {
    name: "Restauración en el campus",
    description:
      "Soluciones de restauración accesibles para los estudiantes en el campus, respetando las normas de convivencia del establecimiento.",
    image: "/images/campus/IMG-20250212-WA0025.jpg",
  },
  {
    name: "Fórmulas y horarios",
    description:
      "Las fórmulas propuestas y los horarios de servicio son comunicados por la administración al inicio del año.",
    image: "/images/campus/IMG-20250212-WA0025.jpg",
  },
  {
    name: "Necesidades particulares",
    description:
      "Para cualquier solicitud particular relacionada con la alimentación, diríjase a la administración, que estudiará las soluciones posibles.",
    image: "/images/campus/IMG-20250212-WA0025.jpg",
  },
  {
    name: "Restauración en las proximidades",
    description:
      "El campus está situado en Hamdallaye ACI 2000, Bamako, en un barrio donde los estudiantes encuentran puntos de restauración variados.",
    image: "/images/campus/IMG-20250212-WA0025.jpg",
  },
]

export default function DiningPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Restauración estudiantil</h1>

      <p className="text-xl mb-8">
        La Universidad ABS vela por que sus estudiantes dispongan de soluciones de restauración adaptadas a sus
        restricciones y a su horario. Las modalidades precisas (lugares, fórmulas, tarifas) son comunicadas por la
        administración.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 mb-12">
        {diningOptions.map((option, index) => (
          <Card key={index} className="overflow-hidden">
            <Image
              src={option.image || "/placeholder.svg"}
              alt={option.name}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <CardTitle>{option.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{option.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Información práctica</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            <li>Los horarios de restauración siguen la organización de las clases comunicada por la administración</li>
            <li>Las fórmulas y condiciones de acceso se precisan al inicio del año académico</li>
            <li>Para cualquier pregunta sobre la restauración, contacte a la administración al +223 78 14 14 88 o por correo electrónico a abs.mail1290@gmail.com</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
