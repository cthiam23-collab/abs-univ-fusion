import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  Cpu,
  GraduationCap,
  Globe2,
  Languages,
  Mountain,
  Newspaper,
  Sprout,
} from "lucide-react"

export const metadata: Metadata = buildMetadata({
  title: "Studienangebot | ABS",
  description: "Das Studienangebot von ABS: fünf Licence-Abschlüsse (3 Jahre, 6 Semester, 180 Credits) in fünf Bereichen und ein Master-Katalog, dessen Studiengänge vor der Ausweisung als offene Zulassungen von der Leitung zu bestätigen sind.",
  path: "/academics/programs",
  locale: "de",
})

const filieres = [
  {
    title: "Betriebswirtschaft",
    intro:
      "Das Funktionieren von Organisationen verstehen, ihre Ergebnisse analysieren und zum Management, zur Finanzfunktion, zum Marketing, zum Personalwesen und zur Entwicklung der Geschäftstätigkeiten beitragen.",
    duration: "Licence (Bachelorabschluss) · 3 Jahre · 6 Semester · 180 Credits",
    image: "/images/campus/IMG-20250212-WA0003.jpg",
    link: "/programs/business-administration",
    icon: Briefcase,
    modules: [
      "Allgemeine und analytische Buchhaltung",
      "Unternehmensfinanzierung und Finanzanalyse",
      "Grundlegendes und digitales Marketing",
      "Unternehmertum und Businessplan",
    ],
  },
  {
    title: "Internationale Beziehungen und Internationale Angelegenheiten",
    intro:
      "Die internationalen Akteure, Institutionen und Machtverhältnisse analysieren – mit einem Verständnis der afrikanischen Realitäten und einer Offenheit für die globalen Dynamiken.",
    duration: "Licence (Bachelorabschluss) · 3 Jahre · 6 Semester · 180 Credits",
    image: "/images/documents/v3-image2.jpg",
    link: "/programs/international-relations",
    icon: Globe2,
    modules: [
      "Internationales Recht und Institutionen",
      "Diplomatie und Verhandlung",
      "Regionale Integration und afrikanische Zusammenarbeit",
      "Schrittweiser Spanischunterricht gemäß validiertem Curriculum",
    ],
  },
  {
    title: "Journalismus und Kommunikation",
    intro:
      "Informationen sammeln, prüfen, erstellen und verbreiten sowie die Kommunikation von Organisationen gestalten – unter Achtung der Ethik und des Informationsrechts.",
    duration: "Licence (Bachelorabschluss) · 3 Jahre · 6 Semester · 180 Credits",
    image: "/images/campus/IMG-20250212-WA0016.jpg",
    link: "/programs/journalism-communication",
    icon: Newspaper,
    modules: [
      "Journalistische Genres und Redaktion",
      "Faktenprüfung und Berufsethik",
      "Videoproduktion und Schnitt je nach Ausstattung",
      "Webjournalismus und soziale Netzwerke",
    ],
  },
  {
    title: "Informatik-Ingenieurwesen",
    intro:
      "An die Bedürfnisse von Organisationen angepasste digitale Lösungen entwerfen, entwickeln, testen und warten – unter Einbezug von Sicherheit, Softwarequalität und schrittweiser Heranführung an die KI.",
    duration: "Licence (Bachelorabschluss) · 3 Jahre · 6 Semester · 180 Credits",
    image: "/images/documents/v3-image3.jpg",
    link: "/programs/engineering/computer-science",
    icon: Cpu,
    modules: [
      "Algorithmik und Programmierung",
      "Webentwicklung und Datenbanken",
      "Betriebssysteme und Netzwerke",
      "Cybersicherheit und Datenschutz",
    ],
  },
  {
    title: "Geologie-, Bau- und Bergbauingenieurwesen",
    intro:
      "Das Verständnis von Gelände und Materialien, die Techniken des Bauingenieurwesens und die Kenntnisse des Bergbausektors verbinden – unter Einbezug von Sicherheit und Umwelt.",
    duration: "Licence (Bachelorabschluss) · 3 Jahre · 6 Semester · 180 Credits",
    image: "/images/campus/IMG-20250212-WA0009.jpg",
    link: "/programs/geological-civil-mining-engineering",
    icon: Mountain,
    modules: [
      "Allgemeine und strukturelle Geologie",
      "Topografie und Geländeaufnahmen",
      "Bodenmechanik und Materialkunde",
      "Bergbau, Sicherheit und Umwelt",
    ],
  },
]

const masters = [
  {
    title: "Master in Betriebswirtschaft",
    description:
      "Management, Strategie, Governance und Steuerung von Organisationen vertiefen.",
  },
  {
    title: "Master in Bankwesen und Finanzingenieurwesen",
    description:
      "Kompetenzen in Finanzanalyse, Finanzierung, Bankwesen, Risikomanagement und Investitionsentscheidungen entwickeln.",
  },
  {
    title: "Master in Internationalen Beziehungen und Diplomatie",
    description:
      "Die Analyse der internationalen Beziehungen, die Verhandlung, die Institutionen und die diplomatischen Herausforderungen vertiefen.",
  },
  {
    title: "Master in Nachhaltiger Entwicklung und Gesellschaftlicher Verantwortung der Unternehmen (CSR)",
    description:
      "Nachhaltigkeitsansätze, die Verantwortung der Organisationen, die Governance und die Wirkungsmessung untersuchen.",
  },
  {
    title: "Master in Audit und Controlling",
    description:
      "Kompetenzen in Kontrolle, Audit, Performancedsteuerung, Risikomanagement und Reporting entwickeln.",
  },
  {
    title: "Master in Digitalem Marketing",
    description:
      "Digitale Strategie, digitale Kommunikation, Performancedanalyse und Kundenbeziehung vertiefen.",
  },
  {
    title: "Master in Künstlicher Intelligenz, Netzwerken und Telekommunikation",
    description:
      "Intelligente Systeme, digitale Infrastrukturen und Netzwerke erforschen – je nach tatsächlich gewählter Spezialisierung.",
  },
  {
    title: "Master in Internationalem Management",
    description:
      "Strategie, interkulturelles Management, internationale Entwicklung und Steuerung grenzüberschreitender Aktivitäten vertiefen.",
  },
  {
    title: "Master in Projektmanagement",
    description:
      "Fachleute ausbilden, die Projekte konzipieren, planen, finanzieren, durchführen, verfolgen und evaluieren können.",
  },
  {
    title: "Master in Qualität, Hygiene, Sicherheit und Umwelt (QHSE)",
    description:
      "Integrierte Managementsysteme für Qualität, Hygiene, Arbeitsschutz und Umwelt konzipieren, einführen und steuern.",
  },
]

const steps = [
  {
    n: "1",
    title: "Erstkontakt",
    text: "Mit dem Team von ABS über den angestrebten Studiengang, die gesuchten Profile und die verfügbaren Plätze sprechen.",
  },
  {
    n: "2",
    title: "Einreichung des Dossiers",
    text: "Ihr Bewerbungsdossier mit den von der Verwaltung angeforderten Unterlagen zusammenstellen (Dossier: 15 000 FCFA).",
  },
  {
    n: "3",
    title: "Prüfung des Dossiers",
    text: "Das Dossier wird gemäß den geltenden offiziellen Zulassungsbedingungen von ABS geprüft.",
  },
  {
    n: "4",
    title: "Einschreibung",
    text: "Bestätigung der Modalitäten — Kalender, Gebühren und Studiengang — und anschließender Abschluss der Einschreibung.",
  },
]

export default function AcademicProgramsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative h-[55vh] flex items-center justify-center text-white">
        <Image
          src="/images/campus/IMG-20250212-WA0022.jpg"
          alt="Studierende von ABS auf dem Campus"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/80 to-blue-900/60" />
        <div className="relative z-10 text-center max-w-4xl px-4">
          <span className="inline-block mb-4 rounded-full bg-cyan-400/20 border border-cyan-400/40 px-4 py-1 text-sm font-medium text-cyan-300">
            Licence: 3 Jahre · 6 Semester · 180 Credits
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Das Studienangebot von ABS
          </h1>
          <p className="text-lg md:text-xl mb-8 text-slate-200">
            Fünf Licence-Abschlüsse in fünf Bereichen — Wissenschaften und Ingenieurwesen, Digitaltechnik,
            Sozial- und internationale Wissenschaften, Information und Kommunikation, Wirtschaftswissenschaften —
            und ein Master-Katalog, dessen Studiengänge vor der Ausweisung als offene Zulassungen von der Leitung
            zu bestätigen sind.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="#formations">
              <Button
                size="lg"
                className="bg-cyan-400 text-slate-950 hover:bg-cyan-300 font-semibold px-8 py-3 text-lg"
              >
                Studiengänge erkunden <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/admissions">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-3 text-lg"
              >
                Zulassungsbedingungen
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Programs tabs */}
      <section id="formations" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900">
            Unsere Studiengänge
          </h2>
          <p className="text-center text-slate-600 mt-4 max-w-3xl mx-auto mb-12">
            Die nachstehenden Übersichten bilden die redaktionelle Grundlage des Webkatalogs. Vor jeder
            Einschreibung bestätigt die Verwaltung für jedes Studienjahr die tatsächlich geöffneten Studiengänge,
            die offiziellen Diplombezeichnungen, die Zugangsbedingungen und die Gebühren.
          </p>

          <Tabs defaultValue="licences" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-10 h-12">
              <TabsTrigger value="licences" className="text-base md:text-lg">
                Licence-Abschlüsse (5)
              </TabsTrigger>
              <TabsTrigger value="masters" className="text-base md:text-lg">
                Master-Studiengänge (10)
              </TabsTrigger>
            </TabsList>

            {/* Licences */}
            <TabsContent value="licences">
              <div className="space-y-10">
                {filieres.map((f, i) => (
                  <Card
                    key={f.title}
                    className={`overflow-hidden border-slate-200 shadow-sm hover:shadow-xl transition-shadow ${
                      i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                    } md:flex`}
                  >
                    <div className="relative md:w-2/5 h-56 md:h-auto">
                      <Image
                        src={f.image}
                        alt={f.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 40vw"
                      />
                      <span className="absolute top-4 left-4 rounded-full bg-blue-900/90 text-white text-xs font-semibold px-3 py-1">
                        {f.duration}
                      </span>
                    </div>
                    <div className="md:w-3/5">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-2xl text-blue-900">
                          <f.icon className="h-6 w-6 text-cyan-500" />
                          {f.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-600 mb-5">{f.intro}</p>
                        <div className="mb-5">
                          <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide mb-2">
                            Schwerpunktmodule
                          </p>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-sm text-slate-700">
                            {f.modules.map((m) => (
                              <li key={m} className="flex items-start gap-2">
                                <BookOpen className="h-4 w-4 mt-0.5 text-cyan-500 shrink-0" />
                                {m}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <p className="text-sm text-slate-500 mb-5">
                          Sprachen: Französisch und Englisch in jedem Semester (zweisprachige Progression,{" "}
                          <Link href="/academics/pedagogy" className="text-blue-700 underline">
                            siehe Seite Pädagogik
                          </Link>
                          ).
                        </p>
                        <Link href={f.link}>
                          <Button className="bg-blue-700 hover:bg-blue-900 text-white">
                            Studiengang entdecken <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Masters */}
            <TabsContent value="masters">
              <div className="rounded-lg border border-amber-300 bg-amber-50 p-5 mb-8 text-sm text-amber-900">
                Die nachstehend aufgeführten Master-Studiengänge entsprechen Ausbildungsschwerpunkten, die vor der
                Ausweisung als offene Zulassungen von der Leitung zu bestätigen sind (Master: 2 Jahre, 4 Semester,
                120 Credits, ausschließlich für tatsächlich geöffnete und validierte Studiengänge).
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
                {masters.map((m) => (
                  <Link key={m.title} href="/programs/masters" className="group">
                    <div className="h-full rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-lg hover:border-cyan-300 transition-all">
                      <h3 className="font-semibold text-blue-900 leading-snug mb-2">{m.title}</h3>
                      <p className="text-sm text-slate-600">{m.description}</p>
                      <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-blue-700 group-hover:text-cyan-600">
                        Den Master-Katalog ansehen <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Cadre pédagogique */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Licence-Rahmen",
                text: "3 Jahre, 6 Semester, 180 Credits gemäß dem pädagogischen Arbeitsrahmen. Die Verteilung der Lehrmodule ist im Semestercurriculum jedes Studiengangs detailliert dargestellt.",
              },
              {
                icon: GraduationCap,
                title: "Ansatz 40 % / 60 %",
                text: "Etwa 40 % theoretische Anteile und 60 % Praxis, Projekte, Übungen, Geländearbeit, Praktika und Praxisimmersionen – vorbehaltlich des genehmigten Curriculums.",
              },
              {
                icon: Languages,
                title: "Arbeitssprachen",
                text: "Englisch in jedem Semester mit einer zweisprachigen Progression Französisch–Englisch; in Internationalen Beziehungen und Internationalen Angelegenheiten ein schrittweiser Spanischunterricht gemäß dem validierten Programm.",
              },
            ].map((f) => (
              <div key={f.title} className="rounded-xl bg-white border border-slate-200 p-6 shadow-sm">
                <f.icon className="h-8 w-8 text-cyan-500 mb-4" />
                <h3 className="text-lg font-semibold text-blue-900 mb-2">{f.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comment candidater */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-4">
            Wie kann man sich bewerben?
          </h2>
          <p className="text-center text-slate-600 max-w-2xl mx-auto mb-12">
            Ein einfaches Zulassungsverfahren, dessen endgültige Modalitäten von der Verwaltung für jedes
            Studienjahr präzisiert werden.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.n} className="relative rounded-xl bg-slate-50 border border-slate-200 p-6">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-900 text-white font-bold mb-4">
                  {s.n}
                </span>
                <h3 className="font-semibold text-blue-900 mb-2">{s.title}</h3>
                <p className="text-sm text-slate-600">{s.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/apply">
              <Button size="lg" className="bg-blue-700 hover:bg-blue-900 text-white px-8 py-3 text-lg">
                Meine Bewerbung einreichen <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Bereit, Ihr Studienprojekt aufzubauen?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-slate-200">
            Erkunden Sie den Kurskatalog, sehen Sie sich die Studiengänge im Detail an oder kontaktieren Sie das
            Zulassungsteam, um die Bedingungen, die vorzulegenden Unterlagen und die verfügbaren Plätze zu prüfen.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/academics/course-catalog">
              <Button
                size="lg"
                className="bg-cyan-400 text-slate-950 hover:bg-cyan-300 font-semibold px-8 py-3 text-lg"
              >
                Kurskatalog
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-3 text-lg"
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
