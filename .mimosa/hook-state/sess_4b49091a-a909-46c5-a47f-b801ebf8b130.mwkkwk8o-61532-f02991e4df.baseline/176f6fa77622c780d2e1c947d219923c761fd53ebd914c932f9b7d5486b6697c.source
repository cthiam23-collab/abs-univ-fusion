import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import {
  Users,
  Dumbbell,
  CalendarDays,
  HeartHandshake,
  GraduationCap,
  ArrowRight,
  MapPin,
  Vote,
  Leaf,
  Briefcase,
} from "lucide-react"

export const metadata: Metadata = buildMetadata({
  title: "Studierendenleben | ABS",
  description:
    "Studierendenleben an der ABS — African Business School in Bamako: Community, Veranstaltungen, Clubs und Begleitung — von der gewählten Studierendenvertretung bis zum Sport, der in jeden Studiengang integriert ist.",
  path: "/student-life",
  locale: "de",
})

const stats = [
  { value: "5+", label: "Clubs & Studierendenvereinigungen", icon: Users },
  { value: "10+", label: "Veranstaltungen pro Jahr", icon: CalendarDays },
  { value: "80%", label: "Praxisanteil in den Studiengängen", icon: GraduationCap },
  { value: "1", label: "Studierendenregierung: die BAGE", icon: Vote },
]

const vieAssociative = [
  {
    title: "Die BAGE, Ihre Stimme",
    description:
      "Die Generalversammlung der Studierenden ist die Studierendenregierung der Universität ABS, jedes Jahr demokratisch gewählt. Sie vertritt Ihre Interessen gegenüber der Verwaltung und gestaltet das Campusleben.",
    image: "/images/campus/IMG-20250212-WA0003.jpg",
    link: "/student-life/organizations",
  },
  {
    title: "Themenclubs",
    description:
      "Unternehmertum, Kultur, Medien, Umwelt, Digitalisierung: Treten Sie einem bestehenden Club bei oder gründen Sie Ihren eigenen — mit Unterstützung der BAGE und der Verwaltung.",
    image: "/images/gallery/IMG-20250216-WA0066.jpg",
    link: "/campus-life/organizations",
  },
  {
    title: "Bürgerliches Engagement",
    description:
      "Mentoring für Gymnasiasten, ehrenamtliches Engagement, Recyclingkampagnen auf dem Campus: Verantwortung und Offenheit gehören zu den Werten, die wir täglich leben.",
    image: "/images/gallery/IMG-20250216-WA0015.jpg",
    link: "/student-life/extracurricular-activities",
  },
]

const sportBienEtre = [
  {
    title: "Sport in den Studiengängen integriert",
    description:
      "Sport gehört zum Stundenplan aller Studierenden: Fußball, Basketball, Leichtathletik und Fitness. Denn körperliches Wohlbefinden trägt zum akademischen Erfolg bei.",
    image: "/images/campus/IMG-20250212-WA0006.jpg",
    link: "/student-life/athletics",
  },
  {
    title: "Turniere zwischen den Jahrgängen",
    description:
      "Die großen Sporttermine des Jahres verbinden die Jahrgänge: Fußballmeisterschaft, Basketballturniere und Leichtathletiktage auf dem Campus in Hamdallaye.",
    image: "/images/gallery/IMG-20250216-WA0067.jpg",
    link: "/campus-life/recreation",
  },
  {
    title: "Seelisches Wohlbefinden",
    description:
      "Zuhören, Begleitung und Prävention: Unser Unterstützungsteam achtet auf die Balance zwischen Studierendenleben, Intensität der Studiengänge und Privatleben.",
    image: "/images/gallery/IMG-20250216-WA0070.jpg",
    link: "/student-life/support",
  },
]

const evenements = [
  {
    title: "Tage der offenen Tür",
    description: "Bringen Sie der Universität ABS Ihren Angehörigen nahe und treffen Sie die Lehrteams.",
    image: "/images/campus/IMG-20250212-WA0009.jpg",
    link: "/student-life/events",
  },
  {
    title: "Woche des Unternehmertums",
    description: "Workshops, Pitches und Begegnungen mit malischen und panafrikanischen Unternehmern.",
    image: "/images/gallery/IMG-20250216-WA0030.jpg",
    link: "/student-life/events",
  },
  {
    title: "Jährlicher ABS-Gala",
    description: "Der große Treffpunkt der Community: Preisverleihung, Kultur und Feier.",
    image: "/images/gallery/IMG-20250216-WA0034.jpg",
    link: "/student-life/events",
  },
]

const soutien = [
  {
    title: "Coaching & Beschäftigungsfähigkeit",
    description:
      "Jede Studierende und jeder Studierende erhält eine individuelle Betreuung: Berufsprojekt, Vorbereitung auf Gespräche, Praktika und Vernetzung mit Partnerunternehmen.",
    image: "/images/campus/IMG-20250212-WA0012.jpg",
    link: "/student-resources",
  },
  {
    title: "Gesundheit & Dienste",
    description: "Gesundheitsorientierung, Verwaltungsdienste und Alltagsunterstützung für ein sorgenfreies Studium.",
    image: "/images/gallery/IMG-20250216-WA0060.jpg",
    link: "/student-resources/health-services",
  },
  {
    title: "Akademische Unterstützung",
    description:
      "Tutoring zwischen den Jahrgängen, Zugang zur Bibliothek und zur E-Campus-Plattform: Niemand bleibt allein mit den Anforderungen der Ausbildung.",
    image: "/images/gallery/IMG-20250216-WA0072.jpg",
    link: "/library",
  },
]

function FeatureGrid({ items }: { items: { title: string; description: string; image: string; link: string }[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Card key={item.title} className="overflow-hidden border-slate-200 pt-0 gap-0 hover:shadow-lg transition-shadow">
          <Image
            src={item.image}
            alt={item.title}
            width={600}
            height={400}
            className="h-48 w-full object-cover"
          />
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-blue-900 mb-2">{item.title}</h3>
            <p className="text-sm text-slate-600 mb-4">{item.description}</p>
            <Link href={item.link} className="inline-flex items-center gap-1 text-sm font-semibold text-blue-700 hover:text-cyan-400">
              Entdecken <ArrowRight className="h-4 w-4" />
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default function StudentLifePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] flex items-center">
        <Image
          src="/images/campus/african-business-school-campus.jpg"
          alt="Campus der Universität ABS in Bamako"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/85 to-blue-950/60" />
        <div className="container mx-auto relative z-10 px-4">
          <Badge className="mb-4 bg-cyan-400 text-blue-950 hover:bg-cyan-400">Studierendenleben</Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white max-w-3xl leading-tight mb-4">
            Ihr Studierendenleben an der Universität ABS in Bamako
          </h1>
          <p className="text-lg text-cyan-50 max-w-2xl mb-8">
            Im Herzen von Hamdallaye ACI 2000 bietet die Universität ABS weit mehr als eine exzellente
            Ausbildung: einen lebendigen Campus, eine gewählte Studierendenregierung, Sport in jedem
            Studiengang und eine engagierte Community.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="bg-cyan-400 text-blue-950 hover:bg-cyan-50 font-semibold">
              <Link href="/student-life/events">Veranstaltungen ansehen</Link>
            </Button>
            <Button asChild variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-blue-900">
              <Link href="/campus-life">Den Campus erkunden</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Statistiken */}
      <section className="bg-blue-950 py-10">
        <div className="container mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="h-8 w-8 text-cyan-400 mx-auto mb-2" />
              <div className="text-3xl font-extrabold text-white">{stat.value}</div>
              <div className="text-sm text-slate-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Tabs */}
      <section className="container mx-auto py-16 px-4">
        <Tabs defaultValue="associatif" className="w-full">
          <TabsList className="flex flex-wrap justify-center mb-10">
            <TabsTrigger value="associatif">Vereinsleben</TabsTrigger>
            <TabsTrigger value="sport">Sport & Wohlbefinden</TabsTrigger>
            <TabsTrigger value="evenements">Veranstaltungen</TabsTrigger>
            <TabsTrigger value="soutien">Unterstützung & Dienste</TabsTrigger>
          </TabsList>

          <TabsContent value="associatif">
            <div className="max-w-3xl mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-3">Sich einbringen, mitentscheiden, aufbauen</h2>
              <p className="text-slate-600">
                An der Universität ABS sind Studierende keine Zuschauer: Sie sind Akteure. Vereinigungen,
                Themenclubs und Solidarprojekte prägen das Jahr und fördern Kreativität, Verantwortung und
                Teamgeist.
              </p>
            </div>
            <FeatureGrid items={vieAssociative} />
          </TabsContent>

          <TabsContent value="sport">
            <div className="max-w-3xl mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-3">Ein gesunder Körper für einen leistungsstarken Geist</h2>
              <p className="text-slate-600">
                Sport und körperliche Aktivitäten sind in die Studiengänge aller unserer Bachelors und Master
                integriert. Wettkampf, Freizeit oder Fitness: Jede und jeder findet seinen Platz und stärkt
                den Teamgeist.
              </p>
            </div>
            <FeatureGrid items={sportBienEtre} />
          </TabsContent>

          <TabsContent value="evenements">
            <div className="max-w-3xl mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-3">Ein Jahr voller Treffpunkte</h2>
              <p className="text-slate-600">
                Vom Semesterbeginn bis zur jährlichen Gala programmieren die BAGE und die Teams der
                Universität mehr als 10 Veranstaltungen pro Jahr: Kultur, Unternehmertum, Sport und Öffnung
                gegenüber Afrika.
              </p>
            </div>
            <FeatureGrid items={evenements} />
            <div className="text-center mt-8">
              <Button asChild className="bg-blue-700 hover:bg-blue-900">
                <Link href="/student-life/events">
                  Vollständiger Veranstaltungskalender <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="soutien">
            <div className="max-w-3xl mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-3">Gemeinsam erfolgreich</h2>
              <p className="text-slate-600">
                Karrierecoaching, Gesundheit, Tutoring: Unsere Dienste begleiten jede Studierende und jeden
                Studierenden vom Semesterbeginn bis zum Berufseinstieg.
              </p>
            </div>
            <FeatureGrid items={soutien} />
          </TabsContent>
        </Tabs>
      </section>

      {/* Studierendengagement — BAGE */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4 grid gap-10 lg:grid-cols-2 items-center">
          <div className="relative h-80 rounded-xl overflow-hidden">
            <Image
              src="/images/campus/IMG-20250212-WA0015.jpg"
              alt="Die BAGE-Studierenden versammelt auf dem ABS-Campus"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <Badge className="mb-3 bg-cyan-50 text-blue-700 border border-cyan-400">
              <Vote className="h-4 w-4 mr-1" /> Studierendengagement
            </Badge>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Die BAGE: eine gewählte Studierendenregierung</h2>
            <p className="text-slate-600 mb-4">
              Die Generalversammlung der Studierenden (BAGE) wird jedes Jahr demokratisch gewählt. Ihr Vorstand
              sitzt im Herzen des Studierendenlebens: Er trägt Ihre Ideen, verhandelt Verbesserungen des
              Campus und entwickelt den Veranstaltungskalender gemeinsam mit der Generaldirektion.
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Die Studierenden gegenüber der Verwaltung vertreten",
                "Die Clubs und Vereinigungen des Campus beleben",
                "Die großen Veranstaltungen des Jahres organisieren",
                "Die CSR-Projekte tragen: Mentoring, Ehrenamt, Recycling",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-slate-700">
                  <HeartHandshake className="h-5 w-5 text-cyan-400 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Button asChild className="bg-blue-700 hover:bg-blue-900">
              <Link href="/student-life/organizations">
                Einer Vereinigung beitreten <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Beschäftigungsfähigkeit */}
      <section className="container mx-auto py-16 px-4">
        <div className="grid gap-10 lg:grid-cols-3">
          {[
            {
              icon: Briefcase,
              title: "Coaching & Praktika",
              text: "Individuelle Begleitung zum Beruf: Lebenslauf, Interview-Simulation und Praktika bei Partnerunternehmen ab dem Bachelor.",
            },
            {
              icon: Users,
              title: "Berufsnetzwerk",
              text: "Berufsforen, Begegnungen mit Ehemaligen — und malische sowie panafrikanische Unternehmen, die direkt auf dem Campus rekrutieren.",
            },
            {
              icon: Leaf,
              title: "Verantwortung & CSR",
              text: "Mentoring für Jugendliche, Ehrenamt und Recycling: Unsere Studierenden engagieren sich für eine nachhaltige Entwicklung Malis und Afrikas.",
            },
          ].map((item) => (
            <div key={item.title} className="border-l-4 border-cyan-400 bg-cyan-50 p-6 rounded-r-xl">
              <item.icon className="h-8 w-8 text-blue-700 mb-3" />
              <h3 className="text-lg font-bold text-blue-900 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA-Leiste */}
      <section className="bg-blue-950 py-14">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">Bereit, das ABS-Erlebnis zu leben?</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            Treten Sie einer Universität bei, in der exzellente Ausbildung, Praxis und Campusleben gemeinsam
            voranschschreiten — im Herzen von Bamako.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-cyan-400 text-blue-950 hover:bg-cyan-50 font-semibold">
              <Link href="/apply">Jetzt bewerben</Link>
            </Button>
            <Button asChild variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-blue-950">
              <Link href="/campus-life/housing">Wohnen & Campusleben</Link>
            </Button>
          </div>
          <p className="mt-8 flex items-center justify-center gap-2 text-sm text-slate-400">
            <MapPin className="h-4 w-4 text-cyan-400" /> Hamdallaye ACI 2000, Bamako — Mali
          </p>
        </div>
      </section>
    </div>
  )
}
