import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import {
  Globe2,
  Handshake,
  Leaf,
  Lightbulb,
  Quote,
  Recycle,
  ShieldCheck,
  Sprout,
  Target,
  Users,
  HeartHandshake,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = buildMetadata({
  title: "Unsere Werte | ABS — African Business School",
  description: "Die Werte von ABS: Anspruch, Verantwortung, Offenheit, Innovation, afrikanisches Engagement und Teamgeist – im Dienst einer strengen und engagierten Ausbildung für Afrika.",
  path: "/about/values",
  locale: "de",
})

// Les six valeurs officielles de ABS (source : V3 §4.4 — définitions verbatim).
const values = [
  {
    id: "exigence",
    name: "Anspruch",
    icon: Target,
    definition: "Sich der Arbeit, der Strenge und der Weiterentwicklung verschreiben.",
  },
  {
    id: "responsabilite",
    name: "Verantwortung",
    icon: ShieldCheck,
    definition: "Mit Integrität, Respekt und Bewusstsein für die Folgen handeln.",
  },
  {
    id: "ouverture",
    name: "Offenheit",
    icon: Globe2,
    definition: "Lernen, über Kulturen, Disziplinen und Generationen hinweg im Dialog zu sein.",
  },
  {
    id: "innovation",
    name: "Innovation",
    icon: Lightbulb,
    definition: "Nützliche Ideen und Methoden erproben, ohne die realen Bedürfnisse aus den Augen zu verlieren.",
  },
  {
    id: "engagement-africain",
    name: "Afrikanisches Engagement",
    icon: Handshake,
    definition: "Die Talente, Ressourcen und Initiativen des Kontinents aufwerten.",
  },
  {
    id: "esprit-equipe",
    name: "Teamgeist",
    icon: Users,
    definition: "Mit anderen gemeinsam bauen, zuhören und zu einem gemeinsamen Ziel beitragen.",
  },
]

// Dimensions humaines de la formation (source : brochure institutionnelle CM1, §7).
const humanQualities = [
  "Disziplin",
  "Respekt",
  "Strenge",
  "Solidarität",
  "Intellektuelle Neugier",
  "Verantwortungsbewusstsein",
]

// Responsabilité sociétale et développement durable (source : brochure institutionnelle CM1, §5).
const rseCommitments = [
  {
    icon: Leaf,
    title: "Eine Exzellenz mit Sinn",
    description:
      "ABS beabsichtigt, die gesellschaftliche Verantwortung von Unternehmen (CSR) und die nachhaltige Entwicklung in ihre Vision von Ausbildung und Professionalisierung zu integrieren, um die Studierenden für die wirtschaftlichen, sozialen, ökologischen und ethischen Folgen von Entscheidungen zu sensibilisieren.",
  },
  {
    icon: Recycle,
    title: "Grüne Universität",
    description:
      "Als eine der Idee der grünen Universität verbundene Institution möchte ABS Initiativen zur Reduzierung und Verwertung von Abfällen, zur Kreislaufwirtschaft, zur Umweltbildung und zu studentischen Projekten mit sozialer Wirkung fördern.",
  },
  {
    icon: Sprout,
    title: "Eine verantwortungsvolle Leistung",
    description:
      "Ein Leistungsbegriff, der wirtschaftliche Ergebnisse, Respekt gegenüber den Menschen, verantwortungsvollen Umgang mit Ressourcen, Transparenz und Beitrag zum Gemeinwohl verbindet.",
  },
  {
    icon: HeartHandshake,
    title: "Alle Bereiche sind betroffen",
    description:
      "Nachhaltiges Ressourcenmanagement im Ingenieurwesen, Ethik der künstlichen Intelligenz und digitale Mäßigung in der Informatik, Governance in den internationalen Beziehungen, verantwortungsvolle Information im Journalismus, verantwortungsvolle Managementpraktiken in der Betriebswirtschaft.",
  },
]

export default function ValuesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-blue-950 text-white">
        <Image
          src="/images/documents/v3-image1.png"
          alt="Studierende von ABS auf dem UniversitätsCampus"
          fill
          priority
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/80 to-blue-900/40" />
        <div className="container relative py-20 md:py-28">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Über uns · Unsere Werte
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
            Sechs Werte, die unser Handeln leiten
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-200">
            Jenseits von Diplomen und Fachkompetenzen misst ABS der menschlichen Dimension der Ausbildung große
            Bedeutung bei: kompetente, integre und verantwortungsbewusste Frauen und Männer ausbilden, die im
            Dienst des Gemeininteresses arbeiten können.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/about/mission">Unsere Mission entdecken</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Les 6 valeurs : cartes */}
      <section className="container py-16 md:py-20">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-blue-900 md:text-4xl">Unsere sechs Werte</h2>
          <p className="mt-4 text-lg text-slate-600">
            Diese Werte sind kein Slogan: Sie prägen die Pädagogik, das Campusleben und die Art, wie ABS den Erfolg
            seiner Studierenden begreift.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => {
            const Icon = value.icon
            return (
              <Card key={value.id} className="group border border-slate-200 transition-shadow hover:shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-50 text-blue-700 transition-colors group-hover:bg-blue-700 group-hover:text-white">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-2xl font-bold text-blue-900">{value.name}</h3>
                  <p className="mt-3 leading-relaxed text-slate-600">{value.definition}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Tabs : chaque valeur en détail */}
        <div className="mt-14 rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-10">
          <h3 className="text-center text-2xl font-bold text-blue-900">Jeder Wert im Detail</h3>
          <p className="mt-2 text-center text-slate-600">
            Wählen Sie einen Wert aus, um zu lesen, was er an ABS konkret bedeutet.
          </p>
          <Tabs defaultValue="exigence" className="mt-8">
            <TabsList className="mx-auto flex-wrap">
              {values.map((value) => (
                <TabsTrigger key={value.id} value={value.id}>
                  {value.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {values.map((value) => {
              const Icon = value.icon
              return (
                <TabsContent key={value.id} value={value.id}>
                  <div className="mx-auto max-w-3xl rounded-xl border border-slate-200 bg-white p-6 md:p-8">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-700 text-white">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <h4 className="text-xl font-bold text-blue-900">{value.name}</h4>
                    </div>
                    <p className="mt-4 text-lg font-medium text-slate-800">{value.definition}</p>
                    <p className="mt-4 border-l-4 border-cyan-400 pl-4 text-sm italic text-slate-500">
                      Dieser Wert ist Teil der Mission von ABS: das Fachwissen, die praktischen Kompetenzen, die
                      intellektuelle Selbstständigkeit und die menschlichen Qualitäten der Lernenden zu entwickeln.
                    </p>
                  </div>
                </TabsContent>
              )
            })}
          </Tabs>
        </div>
      </section>

      {/* Former des compétences, cultiver des valeurs, révéler des leaders (CM1 §7) */}
      <section className="bg-blue-900 py-16 text-white md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Kompetenzen ausbilden, Werte pflegen, Führungspersönlichkeiten entfalten
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-200">
              Der Aufbau eines stärkeren Afrika erfordert kompetente, aber ebenso integre, verantwortungsbewusste,
              kreative Frauen und Männer, die im Dienst des Gemeininteresses arbeiten können.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-white/15 bg-blue-950/60 p-8 md:p-10">
            <ul className="flex flex-wrap gap-2">
              {humanQualities.map((quality) => (
                <li
                  key={quality}
                  className="rounded-full border border-cyan-400/30 bg-blue-900/60 px-4 py-1.5 text-sm font-medium text-cyan-100"
                >
                  {quality}
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-xl border border-cyan-400/30 bg-blue-900/60 p-5">
              <h3 className="font-bold text-cyan-400">Unser Führungsverständnis</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Führung wird verstanden als die Fähigkeit, Initiativen zu ergreifen, Energien zu bündeln, Projekte
                zu leiten und sich positiv in sein Umfeld einzubringen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RSE et développement durable (CM1 §5) */}
      <section className="container py-16 md:py-20">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-blue-900 md:text-4xl">
            Gesellschaftliche Verantwortung und nachhaltige Entwicklung
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Für den Erfolg ausbilden, um zu transformieren unternehmen und für künftige Generationen handeln: Die
            Entwicklung Afrikas kann nicht vom Schutz der Umwelt, von der sozialen Verantwortung und von guter
            Governance getrennt werden.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {rseCommitments.map((item) => {
            const Icon = item.icon
            return (
              <Card key={item.title} className="border border-slate-200 transition-shadow hover:shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-50 text-blue-700">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-blue-900">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-slate-600">{item.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
        <p className="mx-auto mt-10 max-w-3xl rounded-xl border border-cyan-200 bg-cyan-50 p-5 text-center leading-relaxed text-slate-600">
          Dieses Vorgehen kann im Rahmen der Ziele für nachhaltige Entwicklung der Vereinten Nationen verortet
          werden. An ABS erschöpft sich Exzellenz nicht im individuellen Erfolg: Sie entfaltet ihre volle Bedeutung
          auch in dem Wert, den man für die Gesellschaft schafft.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-blue-950 py-16 text-center text-white">
        <div className="container">
          <Quote className="mx-auto h-10 w-10 text-cyan-400" aria-hidden="true" />
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">Erleben Sie diese Werte, lesen Sie sie nicht nur</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-200">
            Treten Sie einer Universität bei, in der akademischer Anspruch, berufliche Praxis und afrikanisches
            Engagement gemeinsam voranschreiten.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-cyan-400 text-blue-950 hover:bg-cyan-300">
              <Link href="/admissions">Zulassung</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/contact">Kontaktieren Sie uns</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
