import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Image from "next/image"
import Link from "next/link"
import {
  Users,
  CalendarDays,
  Megaphone,
  Images,
  Quote,
  Leaf,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = buildMetadata({
  title: "Studentenleben | ABS",
  description: "Das Studentenleben an der ABS — African Business School: eine Gemeinschaft, die gemeinsam lernt, Veranstaltungen und Begegnungen, Botschafter, Galerie und Stimmen in Bamako.",
  path: "/campus-life",
  locale: "de",
})

// Vie étudiante — document V3, §8
const sections = [
  {
    icon: CalendarDays,
    title: "Veranstaltungen und Begegnungen",
    description:
      "Konferenzen, Orientierungstage, Begegnungen mit Fachleuten, Besichtigungen und Sensibilisierungsaktivitäten können den Werdegang der Studierenden bereichern. Jede Ankündigung präzisiert die Bezeichnung, das Datum, den Ort, die Teilnahmebedingungen und den zuständigen Kontakt.",
  },
  {
    icon: Megaphone,
    title: "Botschafter von ABS",
    description:
      "Die Botschafter von ABS tragen dazu bei, das Leben der Einrichtung bekannt zu machen, ihre Erfahrung zu teilen und Personen zu orientieren, die mehr erfahren möchten. Ihre Rolle beruht auf einer authentischen, respektvollen und überprüfbaren Kommunikation.",
  },
  {
    icon: Images,
    title: "Foto- und Videogalerie",
    description:
      "Die Galerie würdigt Lehrveranstaltungen, Projekte, Veranstaltungen und Momente des Campuslebens. Die veröffentlichten Fotos und Videos sind datiert, mit Bildunterschriften versehen und von den notwendigen Genehmigungen begleitet – ohne persönliche Informationen oder sensible Daten.",
  },
  {
    icon: Quote,
    title: "Stimmen",
    description:
      "Stimmen von Studierenden, Ehemaligen, Eltern oder Fachleuten sind authentisch, von ihren Verfassern gegengelesen und mit deren Einverständnis veröffentlicht. Sie werden nicht als statistischer Beleg für Erfolg oder Berufseinstieg dargestellt.",
  },
]

export default function CampusLifePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero — document V3, §8.1 */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 py-20 text-white">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 border border-cyan-400/40 bg-cyan-400/10 text-cyan-400">
            <Users className="mr-1 h-3.5 w-3.5" />
            Studentenleben · Bamako
          </Badge>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Eine Gemeinschaft, die gemeinsam lernt
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-blue-100">
            Das Studentenleben entsteht durch Beteiligung, Neugier und gegenseitigen Respekt.
            ABS fördert Initiativen, die die Ausdrucksfähigkeit, das Verantwortungsbewusstsein, die gegenseitige
            Hilfe und die Offenheit gegenüber der Gesellschaft stärken.
          </p>
        </div>
      </section>

      {/* Image + citation — document V3, §3.6 */}
      <section className="container mx-auto -mt-10 px-4 pb-4">
        <div className="grid items-center gap-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg lg:grid-cols-2 lg:p-8">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl">
            <Image
              src="/images/documents/v3-image1.png"
              alt="Studierende von ABS auf dem UniversitätsCampus"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-bold text-blue-900">
              Das Leben an ABS außerhalb der Lehrveranstaltungen
            </h2>
            <blockquote className="border-l-4 border-cyan-400 pl-4 text-slate-600">
              „Das Leben an ABS gestaltet sich auch außerhalb der Lehrveranstaltungen: Konferenzen, Begegnungen,
              Besichtigungen, Projekte, Veranstaltungen und studentische Initiativen tragen zur geistigen Offenheit
              und zur Professionalisierung bei.“
            </blockquote>
            <p className="mt-4 text-sm text-slate-500">
              Die auf der Website vorgestellten Aktivitäten entsprechen durchgeführten oder offiziell geplanten
              Veranstaltungen.
            </p>
          </div>
        </div>
      </section>

      {/* Volets de la vie étudiante — document V3, §8.2 à §8.5 */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-blue-900">Was das Campusleben ausmacht</h2>
          <p className="mt-3 text-slate-600">
            Veranstaltungen, Botschafter, Galerie und Stimmen: die verschiedenen Facetten der
            Studierenden-Erfahrung an ABS.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {sections.map((section) => (
            <Card key={section.title} className="border-slate-200">
              <CardContent className="pt-6">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-blue-700/10">
                  <section.icon className="h-5 w-5 text-blue-700" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-blue-900">{section.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{section.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Engagement durable — document CM1, §5 */}
      <section className="bg-blue-950 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-400/10">
              <Leaf className="h-6 w-6 text-cyan-400" />
            </div>
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">Nachhaltiges Engagement</h2>
            <p className="text-blue-100">
              ABS beabsichtigt, die gesellschaftliche Verantwortung und die nachhaltige Entwicklung in seine Vision
              der Ausbildung zu integrieren: die Studierenden für die wirtschaftlichen, sozialen, ökologischen und
              ethischen Folgen von Entscheidungen sensibilisieren und Initiativen zur Reduzierung und Verwertung
              von Abfällen, zur Kreislaufwirtschaft, zur Umweltbildung und zu studentischen Projekten mit sozialer
              Wirkung fördern.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-md">
          <h2 className="mb-3 text-2xl font-bold text-blue-900">
            Lust, der ABS-Gemeinschaft beizutreten?
          </h2>
          <p className="mx-auto mb-6 max-w-xl text-slate-600">
            Entdecken Sie die Studiengänge, erkunden Sie die Zulassung oder kontaktieren Sie das Team bei
            Fragen zum Leben an ABS.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/admissions">
              <Button size="lg" className="bg-blue-700 text-white hover:bg-blue-900">
                Bewerben
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-blue-700 text-blue-700 hover:bg-blue-50"
              >
                Kontaktieren Sie uns
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
