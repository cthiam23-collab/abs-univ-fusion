import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Globe2,
  Info,
  Table2,
  Target,
  Lightbulb,
  DoorOpen,
  MessageCircle,
  Mail,
  Phone,
} from "lucide-react"
import { WHATSAPP_URL } from "@/lib/constants"

export const metadata: Metadata = buildMetadata({
  title: "Máster en Management Internacional | ABS",
  description: "Máster en Management Internacional de ABS en Bamako: estrategia, gestión intercultural, desarrollo internacional y dirección de actividades transfronterizas. 2 años, 4 semestres, 120 créditos.",
  path: "/programs/masters/international-business",
  locale: "es",
})

const infos = [
  ["Diploma", "Máster — 2 años, 4 semestres, 120 créditos (marco LMD)"],
  ["Lugar", "Bamako — Hamdallaye ACI 2000"],
  ["Idiomas", "Francés / inglés (inglés en cada semestre)"],
  [
    "Tarifa anual indicativa",
    "1 500 000 FCFA / año (M1, M2) — confirmación escrita 2026–2027 requerida",
  ],
  ["Gastos de expediente", "15 000 FCFA"],
  [
    "Gastos de defensa",
    "150 000 FCFA para el Máster — importe por confirmar para 2026–2027",
  ],
]

export default function InternationalBusinessPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mb-10">
        <Badge variant="outline" className="mb-4">
          <Globe2 className="size-4 mr-1" /> Máster — eje de formación
        </Badge>
        <h1 className="text-4xl font-bold text-primary mb-4">Máster en Management Internacional</h1>
        <p className="text-xl text-muted-foreground mb-4">
          Formar directivos capaces de profundizar la estrategia, la gestión intercultural, el desarrollo
          internacional y la dirección de actividades transfronterizas, en un entorno económico regional e
          internacional en evolución.
        </p>
        <div className="flex items-start gap-2 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
          <Info className="mt-0.5 size-4 shrink-0" />
          <p>
            Este itinerario corresponde a un eje de formación por confirmar por la Dirección antes de mostrarse como
            admisión abierta: el plan de estudios, los requisitos previos, las modalidades de admisión y la apertura
            están por validar. Contacte con la administración para verificar la situación del itinerario para el
            inicio de curso correspondiente.
          </p>
        </div>
      </div>

      {/* Información clave */}
      <Card className="mb-10">
        <CardHeader>
          <CardTitle className="text-xl text-primary flex items-center gap-2">
            <Table2 className="size-5" /> Información clave
          </CardTitle>
        </CardHeader>
        <CardContent>
          <table className="w-full text-sm">
            <tbody>
              {infos.map(([label, value]) => (
                <tr key={label} className="border-b last:border-0">
                  <td className="py-2 pr-4 font-medium text-foreground align-top whitespace-nowrap w-56">
                    {label}
                  </td>
                  <td className="py-2 text-muted-foreground">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2 mb-10">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-primary flex items-center gap-2">
              <Target className="size-5" /> Objetivos
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <p>
              Profundizar la estrategia aplicada a las actividades realizadas más allá de las fronteras nacionales.
            </p>
            <p>
              Desarrollar la gestión intercultural y la capacidad de dirigir el desarrollo internacional de una
              organización, conforme a la dinámica de profundización y especialización del ciclo de Máster de ABS.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-primary flex items-center gap-2">
              <Lightbulb className="size-5" /> Competencias desarrolladas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Estrategia y management internacional</li>
              <li>Gestión intercultural</li>
              <li>Desarrollo internacional de las actividades</li>
              <li>Dirección de actividades transfronterizas</li>
            </ul>
            <p className="text-xs text-muted-foreground italic mt-3">
              Competencias derivadas estrictamente de la ficha de presentación del eje; el plan de estudios detallado
              y los referenciales de competencias siguen pendientes de validación.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 mb-10">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-primary flex items-center gap-2">
              <DoorOpen className="size-5" /> Condiciones de acceso
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <p>
              <span className="font-medium text-foreground">Acceso al Máster 1:</span> Licencia (grado) o diploma
              reconocido como equivalente en un ámbito pertinente, con examen del expediente académico (certificados
              de los tres años de la Licencia, carta de motivación, currículum vitae).
            </p>
            <p>
              <span className="font-medium text-foreground">Acceso al Máster 2:</span> Máster 1 o diploma equivalente
              en el ámbito, según la validación de los requisitos previos y del recorrido académico.
            </p>
            <p>
              La presentación de un expediente no equivale a una admisión automática; toda candidatura se somete al
              estudio del expediente y a la decisión de la Dirección de Estudios.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-primary flex items-center gap-2">
              <Globe2 className="size-5" /> Salidas profesionales indicativas
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <p>
              A título indicativo, este Máster puede preparar para responsabilidades vinculadas al desarrollo
              internacional y a la dirección de actividades transfronterizas en empresas, instituciones y
              organizaciones que operan a escala regional o internacional, según el itinerario y la experiencia de
              cada titulado.
            </p>
            <p className="text-xs italic">
              Las salidas profesionales son perspectivas, no garantías de empleo.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Llamada a la acción */}
      <Card className="bg-secondary">
        <CardContent className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 py-8">
          <div>
            <h2 className="text-2xl font-bold text-primary mb-2">
              ¿Desea candidatarse a este Máster?
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Contacte con el equipo de ABS para verificar las condiciones de admisión, los documentos a aportar, el
              calendario y las plazas disponibles.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 text-sm text-muted-foreground mt-3">
              <span className="flex items-center gap-2">
                <Phone className="size-4" /> +223 78 14 14 88
              </span>
              <span className="flex items-center gap-2">
                <Mail className="size-4" /> abs.mail1290@gmail.com
              </span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link href="/contact">
              <Button size="lg">Solicitar información</Button>
            </Link>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline">
                <MessageCircle className="size-4 mr-2" /> WhatsApp
              </Button>
            </a>
            <Link href="/apply">
              <Button size="lg" variant="secondary">
                Candidatarse
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
