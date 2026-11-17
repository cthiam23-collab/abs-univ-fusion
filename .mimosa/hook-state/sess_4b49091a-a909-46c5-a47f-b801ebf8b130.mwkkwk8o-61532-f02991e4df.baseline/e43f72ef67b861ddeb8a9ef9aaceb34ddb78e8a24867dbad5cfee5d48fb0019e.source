import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CustomTabs, CustomTabsContent, CustomTabsList, CustomTabsTrigger } from "@/components/ui/custom-tabs"
import Image from "next/image"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Organizaciones estudiantiles | ABS",
  description: "Organizaciones y asociaciones estudiantiles de ABS — African Business School.",
  path: "/student-life/organizations",
  locale: "es",
})

const organizations = [
  {
    name: "Iniciativas académicas",
    description:
      "Grupos de trabajo, repasos en equipo y ayuda mutua entre estudiantes en torno a las enseñanzas de los cinco polos de formación.",
    image: "/images/campus/IMG-20250212-WA0013.jpg",
    category: "academico",
  },
  {
    name: "Debates y expresión oral",
    description:
      "Ejercicios de debate y de expresión oral, útiles para la formación profesional y la confianza en sí mismo.",
    image: "/images/campus/IMG-20250212-WA0014.jpg",
    category: "academico",
  },
  {
    name: "Intercambios culturales",
    description:
      "Encuentros y actividades que celebran la diversidad de las culturas africanas y favorecen la integración de todos.",
    image:
      "/images/campus/IMG-20250212-WA0015.jpg",
    category: "cultural",
  },
  {
    name: "Espíritu emprendedor",
    description:
      "Intercambios en torno al emprendimiento y a los proyectos, en coherencia con la formación en administración de empresas.",
    image: "/images/campus/IMG-20250212-WA0017.jpg",
    category: "profesional",
  },
  {
    name: "Compromiso y ciudadanía",
    description:
      "Iniciativas de sensibilización y de compromiso ciudadano impulsadas por los estudiantes al servicio de su entorno.",
    image: "/images/campus/IMG-20250212-WA0019.jpg",
    category: "compromiso",
  },
  {
    name: "Creatividad artística",
    description:
      "Espacios de expresión artística y cultural para los estudiantes que desean compartir sus talentos.",
    image: "/images/campus/IMG-20250212-WA0018.jpg",
    category: "cultural",
  },
]

export default function StudentOrganizationsPage() {
  const categories = ["Todo", "Académico", "Cultural", "Profesional", "Compromiso"]
  const categoryKeys: Record<string, string> = {
    "Académico": "academico",
    "Cultural": "cultural",
    "Profesional": "profesional",
    "Compromiso": "compromiso",
  }

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Organizaciones estudiantiles</h1>
      <p className="text-xl mb-4 text-center">
        La vida asociativa de la Universidad ABS se construye con los estudiantes y evoluciona cada año según sus
        iniciativas
      </p>
      <p className="text-md mb-12 text-center text-muted-foreground">
        La lista siguiente presenta tipos de iniciativas. Para conocer las organizaciones actualmente activas o
        proponer la creación de un club, contacte a la administración.
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
              {organizations
                .filter((org) => category === "Todo" || org.category === categoryKeys[category])
                .map((org, index) => (
                  <Card key={index} className="hover:shadow-lg transition-duration-300">
                    <Image
                      src={org.image || "/placeholder.svg"}
                      alt={org.name}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <CardHeader>
                      <CardTitle>{org.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{org.description}</p>
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
