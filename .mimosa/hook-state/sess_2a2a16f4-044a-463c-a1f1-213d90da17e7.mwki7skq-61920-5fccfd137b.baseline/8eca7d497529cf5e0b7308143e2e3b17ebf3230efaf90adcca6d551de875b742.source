import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Image from "next/image"
import Link from "next/link"
import {
  Handshake,
  Users,
  Building,
  BriefcaseBusiness,
  Mic,
  ArrowLeftRight,
  ShieldCheck,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = buildMetadata({
  title: "Unternehmen und Partner | ABS",
  description: "Unternehmen, Institutionen und Organisationen: Knüpfen Sie mit ABS nützliche Verbindungen — Auftritte von Fachleuten, Besichtigungen, angewandte Projekte, Praktika und Konferenzen in Bamako.",
  path: "/international/partnerships",
  locale: "de",
})

// Formes de collaboration — document V3, §11.1
const collaborations = [
  {
    icon: Users,
    title: "Auftritte von Fachleuten",
    description:
      "Fachleute kommen, um ihre Erfahrung zu teilen und die Studierenden über die Realitäten der Berufe aufzuklären.",
  },
  {
    icon: Building,
    title: "Besichtigungen",
    description:
      "Entdeckungen von Unternehmen und Institutionen, um die Lehrveranstaltungen mit der Praxis zu verknüpfen.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Angewandte Projekte",
    description:
      "Von den Studierenden durchgeführte Arbeiten zu realen Problemstellungen, die von den Organisationen vorgeschlagen werden.",
  },
  {
    icon: Handshake,
    title: "Praktika",
    description:
      "Immersionen in Unternehmen, die es ermöglichen, die in der Ausbildung erworbenen Kompetenzen in die Praxis umzusetzen.",
  },
  {
    icon: Mic,
    title: "Konferenzen",
    description:
      "Begegnungen und Konferenzen mit Akteuren der Wirtschaft und der institutionellen Welt.",
  },
  {
    icon: ArrowLeftRight,
    title: "Kompetenzaustausch",
    description:
      "Zusammenarbeiten auf der Grundlage eines Wissensaustauschs, gemäß den geschlossenen Vereinbarungen.",
  },
]

export default function PartnershipsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 py-20 text-white">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 border border-cyan-400/40 bg-cyan-400/10 text-cyan-400">
            <Handshake className="mr-1 h-3.5 w-3.5" />
            Unternehmen und Partner
          </Badge>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Nützliche Verbindungen knüpfen
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-blue-100">
            ABS möchte Beziehungen zu Unternehmen, Institutionen, Berufsorganisationen und Entwicklungsakteuren
            aufbauen, um die Ausbildungen an die Realitäten des Geländes anzunähern.
          </p>
        </div>
      </section>

      {/* Formes de collaboration — document V3, §11.1 */}
      <section className="container mx-auto py-16">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-bold text-blue-900">Zusammenarbeiten im Dienst der Ausbildung</h2>
            <p className="mb-8 text-slate-600">
              Diese Beziehungen können unterschiedliche Formen annehmen, je nach den zwischen ABS und seinen
              Partnern geschlossenen Vereinbarungen.
            </p>
            <div className="grid gap-5 sm:grid-cols-2">
              {collaborations.map((item) => (
                <Card key={item.title} className="border-slate-200">
                  <CardContent className="pt-6">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-700/10">
                      <item.icon className="h-5 w-5 text-blue-700" />
                    </div>
                    <h3 className="mb-1 font-bold text-blue-900">{item.title}</h3>
                    <p className="text-sm text-slate-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-md">
              <Image
                src="/images/documents/v3-image3.jpg"
                alt="Die Leitung von ABS in einer Arbeitssitzung mit offiziellen Vertretern"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-3 text-sm text-slate-500">
              Das Campusleben: Studierende in ständigem Kontakt mit den beruflichen Realitäten.
            </p>
          </div>
        </div>
      </section>

      {/* Proposer une collaboration — document V3, §11.2 */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto">
          <Card className="mx-auto max-w-3xl border-slate-200 shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-900">Eine Zusammenarbeit vorschlagen</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-slate-600">
                Sie vertreten ein Unternehmen, eine Institution oder eine Organisation und möchten sich mit ABS
                austauschen? Stellen Sie Ihre Struktur, Ihr Tätigkeitsfeld und die angestrebte Form der
                Zusammenarbeit vor. Das Team wird Ihren Vorschlag prüfen und sich entsprechend den Möglichkeiten
                und Prioritäten der Institution wieder an Sie wenden.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-blue-700 text-white hover:bg-blue-900">
                  Eine Partnerschaft vorschlagen
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Règle de publication — document V3, §11.3 */}
      <section className="container mx-auto py-12">
        <div className="mx-auto flex max-w-3xl items-start gap-4 rounded-xl border border-amber-200 bg-amber-50 p-6">
          <ShieldCheck className="mt-0.5 h-6 w-6 shrink-0 text-amber-600" />
          <div>
            <h2 className="mb-1 font-bold text-amber-900">Hinweis zur Veröffentlichung der Partner</h2>
            <p className="text-sm text-amber-800">
              Auf dieser Seite werden nur Partner ausgewiesen, die ihr Einverständnis gegeben haben und deren
              Beziehung zu ABS belegt werden kann. Kein Logo, kein Name und keine Angabe „offizieller Partner“
              wird ohne Autorisierung und ohne überprüfbare Vereinbarung verwendet.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
