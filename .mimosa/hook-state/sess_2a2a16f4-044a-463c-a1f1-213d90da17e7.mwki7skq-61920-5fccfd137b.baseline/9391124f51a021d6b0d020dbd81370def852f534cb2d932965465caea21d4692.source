import Image from "next/image"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Integración cultural | ABS",
  description: "Apertura cultural y vida asociativa en ABS — African Business School: diálogos, culturas e iniciativas estudiantiles.",
  path: "/cultural-integration",
  locale: "es",
})

export default function CulturalIntegrationPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">La integración cultural en la ABS</h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card className="overflow-hidden">
          <Image
            src="/images/campus/IMG-20250212-WA0017.jpg"
            alt="Encuentros culturales entre estudiantes"
            width={400}
            height={300}
            className="w-full h-[200px] object-cover"
          />
          <CardHeader>
            <CardTitle>Encuentros culturales</CardTitle>
            <CardDescription>
              Momentos de intercambio que celebran la riqueza y la diversidad de las culturas africanas.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="overflow-hidden">
          <Image
            src="/images/campus/IMG-20250212-WA0022.jpg"
            alt="Eventos culturales"
            width={400}
            height={300}
            className="w-full h-[200px] object-cover"
          />
          <CardHeader>
            <CardTitle>Eventos culturales</CardTitle>
            <CardDescription>
              Conferencias, exposiciones y celebraciones jalonan el año cuando están oficialmente programados.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="overflow-hidden">
          <Image
            src="/images/campus/IMG-20250212-WA0018.jpg"
            alt="Diversidad cultural"
            width={400}
            height={300}
            className="w-full h-[200px] object-cover"
          />
          <CardHeader>
            <CardTitle>Diversidad cultural</CardTitle>
            <CardDescription>
              Estudiantes de horizontes diferentes aprenden a conocerse y a trabajar juntos.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      <div className="mt-12 prose prose-lg max-w-none">
        <h2 className="text-3xl font-semibold mb-6">Nuestro compromiso con la integración cultural</h2>
        <p className="mb-4">
          En ABS — African Business School, consideramos la apertura cultural una dimensión esencial de la
          formación: prepara a graduados capaces de desarrollarse en entornos variados, en África y más allá. La vida en
          el campus fomenta el diálogo entre estudiantes de trayectorias y culturas diferentes, en el espíritu
          panafricanista que anima al establecimiento.
        </p>
        <p className="mb-4">
          Esta apertura también se vive en las enseñanzas: el bilingüismo francés-inglés, la iniciación progresiva al
          español en relaciones y negocios internacionales, y los proyectos y prácticas previstos en las maquetas de
          formación constituyen otras tantas ocasiones de ampliar sus referentes culturales.
        </p>

        <div className="bg-blue-50 p-6 rounded-lg mt-8">
          <h3 className="text-2xl font-semibold mb-4">Tipos de actividades propuestas a lo largo del año</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Encuentros y jornadas de intercambio en torno a las culturas africanas</li>
            <li>Conferencias e intervenciones con invitados</li>
            <li>Iniciativas culturales impulsadas por los estudiantes</li>
            <li>Momentos de acogida e integración de los nuevos estudiantes</li>
          </ul>
          <p className="mt-4 text-sm">
            El calendario preciso de estas actividades es comunicado por la administración cuando los eventos están
            oficialmente programados.
          </p>
        </div>
      </div>
    </div>
  )
}
