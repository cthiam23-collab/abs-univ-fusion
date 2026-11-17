import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import type { LucideIcon } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { dynamicMasters, masterIcons } from "@/lib/masters-data"
import { localizedMasterFields } from "@/lib/masters-data-i18n"
import {
  Briefcase,
  Megaphone,
  Network,
  ClipboardList,
  ShieldCheck,
  GraduationCap,
  CalendarClock,
  CreditCard,
  Info,
  Mail,
  Phone,
} from "lucide-react"

export const metadata: Metadata = buildMetadata({
  title: "Másters | ABS",
  description: "Catálogo de los Másters de African Business School (ABS) en Bamako: 16 itinerarios con ficha dedicada (2 años, 4 semestres, 120 créditos), marco LMD, tarifas indicativas y condiciones de apertura confirmadas por la Dirección.",
  path: "/programs/masters",
  locale: "es",
})

type MasterAxis = {
  title: string
  description: string
  icon: LucideIcon
  href?: string
  highlighted?: boolean
}

// Itinerarios con página estática dedicada bajo app/programs/masters/<slug>/.
const staticMasters: MasterAxis[] = [
  {
    title: "Máster en Administración de Empresas",
    description:
      "Profundizar la gestión, la estrategia, la gobernanza y la dirección de las organizaciones.",
    icon: Briefcase,
    href: "/programs/masters/mba",
    highlighted: true,
  },
  {
    title: "Máster en Management Internacional",
    description:
      "Profundizar la estrategia, la gestión intercultural, el desarrollo internacional y la dirección de actividades transfronterizas.",
    icon: Network,
    href: "/programs/masters/international-business",
    highlighted: true,
  },
  {
    title: "Máster en Gestión de Proyectos",
    description:
      "Formar profesionales capaces de concebir, planificar, financiar, ejecutar, seguir y evaluar proyectos. Desarrollar competencias en planificación estratégica, gestión presupuestaria, movilización de recursos, seguimiento y evaluación, gestión de riesgos y dirección de equipos.",
    icon: ClipboardList,
    href: "/programs/masters/project-management",
    highlighted: true,
  },
]

// Ejes de formación que aún no cuentan con ficha dedicada — apertura por confirmar con la Dirección.
const unconfirmedAxes: MasterAxis[] = [
  {
    title: "Máster en Marketing Digital",
    description:
      "Profundizar la estrategia digital, la comunicación digital, el análisis del rendimiento y la relación con el cliente.",
    icon: Megaphone,
  },
  {
    title: "Máster en Calidad, Higiene, Seguridad y Medio Ambiente (QHSE)",
    description:
      "Formar especialistas capaces de concebir, desplegar y dirigir sistemas de gestión integrados de la calidad, la higiene, la salud y seguridad en el trabajo y el medio ambiente. Desarrollar competencias en prevención de riesgos laborales, cumplimiento normativo, auditoría QHSE, mejora continua y gestión ambiental.",
    icon: ShieldCheck,
  },
]

// Catálogo completo: 3 páginas estáticas + 13 páginas dinámicas de
// lib/masters-data.ts + los ejes restantes por confirmar con la Dirección.
const catalogue: MasterAxis[] = [
  ...staticMasters,
  ...dynamicMasters.map(
    (master): MasterAxis => ({
      title: localizedMasterFields(master, "es").title,
      description: localizedMasterFields(master, "es").tagline,
      icon: masterIcons[master.slug as keyof typeof masterIcons],
      href: `/es/programs/masters/${master.slug}`,
    }),
  ),
  ...unconfirmedAxes,
]

export default function MastersProgramsPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mb-10">
        <Badge variant="outline" className="mb-4">
          <GraduationCap className="size-4 mr-1" /> Ciclo de Máster — LMD
        </Badge>
        <h1 className="text-4xl font-bold text-primary mb-4">Másters</h1>
        <p className="text-xl text-muted-foreground mb-4">
          El Máster de ABS se inscribe en una dinámica de profundización de los conocimientos, de
          especialización y de desarrollo de competencias avanzadas. A través de estudios de casos complejos, de
          proyectos profesionales y de trabajos de investigación aplicada, prepara para concebir soluciones, dirigir
          proyectos y asumir responsabilidades dentro de las organizaciones.
        </p>
        <div className="flex items-start gap-2 rounded-lg border border-cyan-200 bg-cyan-50 p-4 text-sm text-blue-900">
          <Info className="mt-0.5 size-4 shrink-0" />
          <p>
            Los itinerarios de Máster enumerados a continuación corresponden a ejes de formación por confirmar por la
            Dirección antes de mostrarse como admisiones abiertas. La apertura efectiva de cada itinerario se confirma
            con la Dirección para cada inicio del curso académico.
          </p>
        </div>
      </div>

      {/* Itinerarios destacados */}
      <h2 className="text-2xl font-bold text-primary mb-4">Itinerarios con página detallada</h2>
      <div className="grid gap-6 md:grid-cols-3 mb-12">
        {catalogue
          .filter((m) => m.highlighted)
          .map((master) => (
            <Card key={master.title} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-start gap-2">
                  <master.icon className="mt-1 size-5 shrink-0" />
                  {master.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4 flex-1">
                <p className="text-muted-foreground text-sm flex-1">{master.description}</p>
                <Link href={master.href!}>
                  <Button variant="secondary" className="w-full">
                    Descubrir el itinerario
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
      </div>

      {/* Catálogo completo: 3 páginas estáticas + 13 páginas dedicadas + ejes por confirmar */}
      <h2 className="text-2xl font-bold text-primary mb-2">Catálogo de los itinerarios de Máster</h2>
      <p className="text-muted-foreground mb-6 max-w-3xl">
        Dieciséis itinerarios de Máster están documentados en el referencial académico de ABS y cada uno cuenta con
        una ficha detallada (objetivos, plan de estudios, competencias previstas, salidas profesionales, condiciones
        de acceso). Para cada itinerario, la apertura efectiva de las admisiones se confirma con la Dirección para
        cada inicio de curso.
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
        {catalogue.map((master) => (
          <Card key={master.title} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-lg text-primary flex items-start gap-2">
                <master.icon className="mt-1 size-5 shrink-0" />
                {master.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 flex-1">
              <CardDescription className="flex-1">{master.description}</CardDescription>
              {master.href ? (
                <Link href={master.href}>
                  <Button variant="secondary" size="sm" className="w-full">
                    Ver la ficha del itinerario
                  </Button>
                </Link>
              ) : (
                <p className="text-xs text-muted-foreground italic">
                  Itinerario en proceso de confirmación — contacte con la administración.
                </p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Marco común de los estudios */}
      <h2 className="text-2xl font-bold text-primary mb-4">Marco común de los estudios de Máster</h2>
      <div className="grid gap-6 md:grid-cols-3 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg text-primary flex items-center gap-2">
              <CalendarClock className="size-5" /> Duración y estructura
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            <p>2 años, 4 semestres, 120 créditos, según el marco pedagógico LMD.</p>
            <p className="mt-2">Inglés reforzado en cada semestre, dentro de una progresión bilingüe francés–inglés.</p>
            <Link href="/academics/pedagogy" className="text-primary underline underline-offset-4 mt-2 inline-block">
              Ver el dispositivo pedagógico y lingüístico
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg text-primary flex items-center gap-2">
              <CreditCard className="size-5" /> Tarifa anual indicativa
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            <p className="font-semibold text-foreground">1 500 000 FCFA / año (M1, M2) — indicativo</p>
            <p className="mt-2">
              Gastos de expediente: 15 000 FCFA. Gastos de defensa de Máster: 150 000 FCFA (importes por confirmar para
              2026–2027).
            </p>
            <p className="mt-2">
              Se requiere una confirmación escrita de los gastos por parte de la administración para cada inicio de
              curso.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg text-primary flex items-center gap-2">
              <GraduationCap className="size-5" /> Condiciones de acceso
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            <p>
              Acceso al Máster 1: Licencia (grado) o diploma reconocido como equivalente en un ámbito pertinente, con
              examen del expediente académico.
            </p>
            <p className="mt-2">
              Acceso al Máster 2: Máster 1 o diploma equivalente, según el itinerario elegido y la validación de los
              requisitos previos.
            </p>
            <p className="mt-2">
              La presentación de un expediente no equivale a una admisión automática; la decisión corresponde a la
              Dirección de Estudios.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Llamada a la acción */}
      <Card className="bg-secondary">
        <CardContent className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 py-8">
          <div>
            <h2 className="text-2xl font-bold text-primary mb-2">¿Interesado en un Máster en ABS?</h2>
            <p className="text-muted-foreground max-w-xl">
              Contacte con el equipo de ABS para verificar que el itinerario deseado está efectivamente abierto para
              el inicio de curso correspondiente, así como las condiciones de admisión, los documentos a aportar y el
              calendario.
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
            <Link href="/apply">
              <Button size="lg" variant="outline">
                Candidatarse
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
