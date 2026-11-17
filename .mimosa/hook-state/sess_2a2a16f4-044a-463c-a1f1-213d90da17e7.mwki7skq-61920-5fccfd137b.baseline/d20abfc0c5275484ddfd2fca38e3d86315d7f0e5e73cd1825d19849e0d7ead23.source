import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Award,
  Compass,
  Globe2,
  Landmark,
  Network,
  Newspaper,
  Briefcase,
  ShieldCheck,
  Users,
} from "lucide-react"

export const metadata: Metadata = buildMetadata({
  title: "Über uns | ABS — African Business School",
  description: "Wer sind wir? ABS — African Business School, eine private, panafrikanische und multidisziplinäre Hochschule mit Sitz in Hamdallaye ACI 2000, Bamako, seit 2016.",
  path: "/about",
  locale: "de",
})

// Les cinq grands domaines disciplinaires (source : V3 §4.1 et présentation institutionnelle).
const domains = [
  {
    icon: Landmark,
    title: "Wissenschaften und Ingenieurwesen",
    description: "Geologie, Geotechnik, Bauingenieurwesen.",
    href: "/programs/geological-civil-mining-engineering",
  },
  {
    icon: Network,
    title: "Digitaltechnik und Technologien",
    description:
      "Softwareentwicklung, Systeme, Daten, Netzwerke, Cybersicherheit und schrittweise Heranführung an die künstliche Intelligenz.",
    href: "/programs/engineering/computer-science",
  },
  {
    icon: Globe2,
    title: "Sozial- und internationale Wissenschaften",
    description:
      "Internationale Beziehungen, Diplomatie, Zusammenarbeit, Institutionen, geopolitische Fragestellungen und interkulturelle Kommunikation.",
    href: "/programs/international-relations",
  },
  {
    icon: Newspaper,
    title: "Information, Medien und Kommunikation",
    description:
      "Journalismus, Redaktion, Content-Produktion, institutionelle Kommunikation und digitale Medien.",
    href: "/programs/journalism-communication",
  },
  {
    icon: Briefcase,
    title: "Wirtschaftswissenschaften",
    description:
      "Betriebswirtschaft, Finanzen, Marketing, Personalwesen, Audit, Controlling, Logistik und Unternehmertum, je nach offiziell festgelegten Schwerpunkten.",
    href: "/programs/business-administration",
  },
]

const aboutLinks = [
  {
    icon: Compass,
    title: "Unsere Mission und unsere Vision",
    description:
      "Kompetenzen ausbilden, die die Transformationen ihres Umfelds verstehen und darauf nützliche Antworten geben können.",
    href: "/about/mission",
  },
  {
    icon: Award,
    title: "Unsere Werte",
    description:
      "Anspruch, Verantwortung, Offenheit, Innovation, afrikanisches Engagement und Teamgeist.",
    href: "/about/values",
  },
  {
    icon: Users,
    title: "Leitung und Governance",
    description:
      "Die institutionelle Organisation von ABS: Generaldirektion, Rektorat, Studienleitung und Dienste.",
    href: "/about/governance",
  },
]

export default function AboutPage() {
  return (
    <div>
      {/* Hero : Qui sommes-nous */}
      <section className="relative overflow-hidden bg-blue-950 py-20 text-white">
        <Image
          src="/images/documents/v3-image1.png"
          alt="Studierende von ABS auf dem UniversitätsCampus"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/85 to-blue-900/60" />
        <div className="container relative mx-auto px-6">
          <p className="font-semibold uppercase tracking-[0.25em] text-cyan-300">Wer sind wir?</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Eine multidisziplinäre Institution: Wissenschaften, Ingenieurwesen, Digitaltechnik, Sozial- und
            internationale Wissenschaften, Kommunikation und Management
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-blue-100">
            ABS — African Business School ist eine private Hochschuleinrichtung mit Sitz in
            Bamako, Mali. Seit 2016 verfolgt ABS eine panafrikanische Ambition: einen Beitrag zur Ausbildung von
            Kompetenzen zu leisten, die die Transformationen ihres Umfelds verstehen und darauf nützliche
            Antworten geben können.
          </p>
        </div>
      </section>

      {/* Présentation institutionnelle */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="mx-auto w-full max-w-md overflow-hidden rounded-3xl bg-white p-8 shadow-xl">
            <Image
              src="/images/abs-logo.png"
              alt="Offizielles Logo der ABS — African Business School"
              width={480}
              height={294}
              className="h-auto w-full object-contain"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Die Identität von ABS</h2>
            <p className="mt-5 leading-7 text-slate-600">
              2016 gegründet und in Hamdallaye ACI 2000 in Bamako angesiedelt, verfolgt die Institution eine
              Ambition: einen Beitrag zur Ausbildung von Kompetenzen zu leisten, die den Bedürfnissen der
              Organisationen, Unternehmen und afrikanischen Gesellschaften gerecht werden und zugleich die
              internationalen Dynamiken verstehen.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              ABS entwickelt eine panafrikanische Identität und eine auf Professionalisierung ausgerichtete
              Herangehensweise. Sie möchte das Studium zu einem Raum machen, in dem akademisches Wissen auf die
              Realitäten des Geländes trifft, in dem Studierende lernen zu analysieren, vorzuschlagen,
              zusammenzuarbeiten und verantwortungsbewusst zu handeln.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              Ihre Identität ist multidisziplinär. Neben den Wirtschaftswissenschaften entwickelt ABS Bereiche in
              den Wissenschaften und im Ingenieurwesen, in der Digitaltechnik, in den internationalen Beziehungen
              sowie im Journalismus und in der Kommunikation.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              Das Wort „Business“ in der Bezeichnung African Business School bedeutet nicht, dass ABS
              ausschließlich eine Handelshochschule ist. Es drückt eine ausbildungsbezogene Ambition aus, die auf
              Handeln, Problemlösung, Organisation, Innovation und Wertschöpfung ausgerichtet ist.
            </p>
          </div>
        </div>
      </section>

      {/* Les cinq grands domaines de formation */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-slate-900">Unsere fünf großen Studienbereiche</h2>
            <p className="mt-3 leading-7 text-slate-600">
              Die Vielfalt dieser Bereiche ermöglicht es ABS, die Herausforderungen der Gegenwart aus mehreren
              Blickwinkeln anzugehen: Territorien und Ressourcen verstehen, technische Lösungen entwerfen,
              digitale Werkzeuge beherrschen, die Beziehungen zwischen Gesellschaften und Institutionen analysieren,
              verlässliche Informationen erstellen, wirkungsvoll kommunizieren und Organisationen verantwortungsvoll
              steuern.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {domains.map(({ icon: Icon, title, description, href }) => (
              <Link key={title} href={href} className="group">
                <Card className="h-full border-slate-200 transition-shadow group-hover:shadow-lg">
                  <CardHeader>
                    <span className="mb-2 inline-flex size-12 items-center justify-center rounded-xl bg-cyan-50">
                      <Icon className="size-6 text-cyan-700" aria-hidden="true" />
                    </span>
                    <CardTitle className="text-lg text-slate-900">{title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-6 text-slate-600">{description}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-700">
                      Diesen Studiengang erkunden
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Approche pédagogique */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="font-semibold uppercase tracking-[0.2em] text-blue-700">Unser Ansatz</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Akademisches Wissen und konkrete Anwendungen einander annähern
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              ABS möchte akademisches Wissen und konkrete Anwendungen einander annähern, Strenge, internationale
              Offenheit, Verantwortung und Engagement im Dienst der afrikanischen Entwicklung fördern. Ihr
              pädagogischer Ansatz privilegiert die Verzahnung zwischen theoretischen Grundlagen und ihrer
              konkreten Anwendung – gemäß einer Referenzrichtung von 40 % Theorie und 60 % Praxis.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Fallstudien, Praktika, Projekte und berufliche Simulationen",
                "Überfachliche Kompetenzen: Englisch, digitale Kultur, Führung, berufliche Ethik",
                "Eine Ausbildung, die offen ist für Unternehmen, Institutionen und internationale Herausforderungen",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm font-medium text-slate-700">
                  <ShieldCheck className="mt-0.5 size-5 shrink-0 text-cyan-600" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 rounded-xl border border-cyan-200 bg-cyan-50 p-4 text-sm leading-6 text-slate-600">
              Die auf der Website ausgewiesenen Studiengänge und Spezialisierungen sind diejenigen, die für das
              jeweilige Studienjahr bestätigt sind. Informationen zu Genehmigungen, Zulassungen, Anerkennungen
              oder Akkreditierungen werden ausschließlich auf der Grundlage der geltenden offiziellen Dokumente
              mitgeteilt; für weitere Auskünfte wenden Sie sich bitte an die Verwaltung von ABS.
            </p>
          </div>

          {/* Liens vers les pages institutionnelles */}
          <div className="space-y-4">
            {aboutLinks.map(({ icon: Icon, title, description, href }) => (
              <Link key={href} href={href} className="group block">
                <Card className="border-slate-200 transition-shadow group-hover:shadow-lg">
                  <CardContent className="flex items-start gap-4 p-6">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                      <Icon className="size-5 text-blue-700" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-semibold text-slate-900">{title}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{description}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
            <Button asChild className="w-full bg-blue-700 hover:bg-blue-800">
              <Link href="/about/history">
                Unseren Werdegang entdecken <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-950 py-14 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Treten Sie der ABS-Gemeinschaft bei</h2>
          <p className="mx-auto mt-3 max-w-2xl text-blue-100">
            Entdecken Sie unsere Studiengänge, lernen Sie unsere Teams kennen und starten Sie Ihre Einschreibung.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-cyan-400 text-slate-950 hover:bg-cyan-300">
              <Link href="/academics/programs">Studiengänge erkunden</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/contact">Die Verwaltung kontaktieren</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
