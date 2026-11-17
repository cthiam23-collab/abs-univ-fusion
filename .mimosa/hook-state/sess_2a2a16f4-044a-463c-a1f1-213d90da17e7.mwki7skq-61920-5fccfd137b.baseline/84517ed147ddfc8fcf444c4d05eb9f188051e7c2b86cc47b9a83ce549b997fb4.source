import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CustomTabs, CustomTabsContent, CustomTabsList, CustomTabsTrigger } from "@/components/ui/custom-tabs"
import Image from "next/image"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Alojamiento estudiantil | ABS",
  description: "Información de alojamiento para los estudiantes de ABS — African Business School.",
  path: "/student-life/housing",
  locale: "es",
})

const housingOptions = [
  {
    name: "Búsqueda de un alojamiento",
    description:
      "La administración orienta a los estudiantes en su búsqueda de alojamiento en Bamako, según las disponibilidades y su situación.",
    amenities: ["Consejos para la búsqueda", "Referencias sobre los barrios cercanos al campus", "Información según las disponibilidades"],
    image: "/images/campus/IMG-20250212-WA0006.jpg",
    category: "alojamiento",
  },
  {
    name: "Instalación de los nuevos estudiantes",
    description:
      "Los estudiantes que llegan de otras regiones o del extranjero son acompañados en sus primeras gestiones de instalación.",
    amenities: ["Acogida por la administración", "Orientación sobre las gestiones prácticas", "Puesta en contacto según las necesidades"],
    image: "/images/campus/IMG-20250212-WA0012.jpg",
    category: "alojamiento",
  },
  {
    name: "Vida cotidiana en Bamako",
    description:
      "El campus está situado en Hamdallaye ACI 2000, un barrio accesible que facilita el día a día de los estudiantes: transportes, comercios y servicios.",
    amenities: ["Acceso al campus", "Comercios y servicios de proximidad", "Transportes según los ejes de la ciudad"],
    image: "/images/campus/IMG-20250212-WA0007.jpg",
    category: "vida-cotidiana",
  },
  {
    name: "Cuestiones prácticas",
    description:
      "Contratos de arrendamiento, presupuesto de alquiler, seguridad: la administración aporta referencias generales y orienta hacia los interlocutores adecuados.",
    amenities: ["Referencias generales sobre el alquiler", "Orientación hacia los interlocutores competentes", "Acompañamiento según las situaciones"],
    image: "/images/campus/IMG-20250212-WA0009.jpg",
    category: "vida-cotidiana",
  },
]

export default function HousingPage() {
  const categories = ["Todo", "Alojamiento", "Vida cotidiana"]

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Alojamiento estudiantil</h1>
      <p className="text-xl mb-4 text-center">
        Información y acompañamiento para alojarse en Bamako durante sus estudios en la Universidad ABS
      </p>
      <p className="text-md mb-12 text-center text-muted-foreground">
        Las modalidades detalladas y las disponibilidades son comunicadas por la administración: contáctela para
        conocer las opciones posibles.
      </p>

      <CustomTabs defaultValue="Todo" className="w-full">
        <CustomTabsList className="flex justify-center mb-8">
          {categories.map((category) => (
            <CustomTabsTrigger key={category} value={category} className="px-4 py-2">
              {category}
            </CustomTabsTrigger>
          ))}
        </CustomTabsList>
        {categories.map((category) => (
          <CustomTabsContent key={category} value={category}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {housingOptions
                .filter((option) => category === "Todo" || option.category === (category === "Alojamiento" ? "alojamiento" : "vida-cotidiana"))
                .map((option, index) => (
                  <Card key={index} className="hover:shadow-lg transition-duration-300">
                    <Image
                      src={option.image || "/placeholder.svg"}
                      alt={option.name}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <CardHeader>
                      <CardTitle>{option.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">{option.description}</p>
                      <h4 className="font-semibold mb-2">Puntos a tener en cuenta:</h4>
                      <ul className="list-disc list-inside">
                        {option.amenities.map((amenity, index) => (
                          <li key={index}>{amenity}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </CustomTabsContent>
        ))}
      </CustomTabs>
    </div>
  )
}
