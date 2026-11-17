import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Briefcase,
  Calculator,
  CheckCircle2,
  ClipboardList,
  Factory,
  GraduationCap,
  LineChart,
  Mail,
  MapPin,
  Phone,
  SearchCheck,
  Sprout,
  Target,
  Truck,
  UserCog,
  Users,
} from "lucide-react"
import { WHATSAPP_NUMBER, WHATSAPP_URL } from "@/lib/constants"

export const metadata: Metadata = buildMetadata({
  title: "Licence in Betriebswirtschaft | ABS",
  description:
    "Licence in Betriebswirtschaft in Bamako: Management, Rechnungswesen, Finanzen, Marketing, Personalwesen und Unternehmertum. 3 Jahre, 6 Semester, 180 Credits. Orientierende Jahresgebühr 1 025 000 FCFA (schriftliche Bestätigung für 2026–2027 erforderlich).",
  path: "/programs/business-administration",
  locale: "de",
})

const competences = [
  {
    code: "AA01",
    competence: "Das wirtschaftliche und organisatorische Umfeld analysieren",
    resultat: "Eine strukturierte Analyse des Kontexts einer Organisation erstellen.",
  },
  {
    code: "AA02",
    competence: "Finanzielle Ressourcen verwalten",
    resultat: "Ein Budget erstellen, Kennzahlen interpretieren und Abweichungen erklären.",
  },
  {
    code: "AA03",
    competence: "Eine Marketingmaßnahme konzipieren",
    resultat: "Eine Zielgruppe, ein Wertversprechen und einen Aktionsplan definieren.",
  },
  {
    code: "AA04",
    competence: "Personalressourcen organisieren",
    resultat: "Zur Planung, Personalauswahl und Entwicklung der Teams beitragen.",
  },
  {
    code: "AA05",
    competence: "Ein Projekt steuern",
    resultat: "Aufgaben planen, Ergebnisse verfolgen und eine Bilanz präsentieren.",
  },
  {
    code: "AA06",
    competence: "Professionell kommunizieren",
    resultat:
      "Einen Bericht verfassen und eine Empfehlung auf Französisch und Englisch vertreten.",
  },
]

const enseignements = [
  "Allgemeine Volkswirtschaftslehre und Betriebswirtschaftslehre",
  "Finanzbuchhaltung und Kostenrechnung",
  "Finanzmathematik und Statistik",
  "Unternehmensfinanzen und Finanzanalyse",
  "Grundlagen des Marketing und digitales Marketing",
  "Management und Strategie",
  "Personalmanagement",
  "Wirtschaftsrecht und Steuerrecht gemäß Studienplan",
  "Unternehmertum und Businessplan",
  "Audit, Controlling und Kennzahlen-Dashboards",
  "Businessenglisch in jedem Semester",
  "Persönlichkeitsentwicklung, Projekte und Praxisimmersion",
]

const options = [
  {
    icon: LineChart,
    titre: "Finanzengineering",
    texte: "Finanzanalyse, Budgetmanagement, Unternehmensfinanzierung und Risikomanagement.",
  },
  {
    icon: Calculator,
    titre: "Rechnungswesen und Finanzen",
    texte: "Finanzbuchhaltung und Kostenrechnung, Steuerwesen, Controlling und finanzielle Steuerung.",
  },
  {
    icon: SearchCheck,
    titre: "Audit",
    texte: "Interne Kontrolle, Risikoanalyse, Bewertung von Verfahren und Leistungsverbesserung.",
  },
  {
    icon: Target,
    titre: "Marketing und Kommunikation",
    texte: "Marktforschung, Vertriebsstrategie, digitales Marketing und Markenaufbau.",
  },
  {
    icon: Truck,
    titre: "Transport und Logistik",
    texte: "Beschaffung, Flussmanagement, Transport, Distribution und Optimierung der Lieferkette.",
  },
  {
    icon: Sprout,
    titre: "Agrobusiness",
    texte: "Management landwirtschaftlicher und lebensmittelverarbeitender Betriebe, Wertschöpfung der Erzeugnisse und Wertschöpfungsketten.",
  },
  {
    icon: UserCog,
    titre: "Personalmanagement",
    texte: "Personalrekrutierung, Kompetenzentwicklung, Personalverwaltung und Teamführung.",
  },
  {
    icon: Factory,
    titre: "Unternehmertum",
    texte: "Unternehmensgründung, Erstellung von Businessplänen, Innovation, Finanzierung und Geschäftsentwicklung.",
  },
]

const parcours = [
  {
    cycle: "Licence 1",
    organisation: "Semester 1 und 2: Grundlagen, Arbeitsmethoden und erste Anwendungen",
    statut: "Allgemeiner Rahmen von 30 Credits pro Semester; siehe die beigefügten detaillierten Studienpläne",
  },
  {
    cycle: "Licence 2",
    organisation: "Semester 3 und 4: Vertiefung, Praxis und Projekte",
    statut: "Module, Stundenumfänge und Credits gemäß dem Studienplan des Studiengangs",
  },
  {
    cycle: "Licence 3",
    organisation: "Semester 5 und 6: schrittweise Spezialisierung, Projekt, Praktikum und Abschlussarbeit gemäß Studienplan",
    statut: "Akademische Validierung gemäß der genehmigten Ordnung",
  },
]

const info = [
  { label: "Abschluss", value: "Licence (Bachelorabschluss) — 3 Jahre, 6 Semester, 180 Credits gemäß dem geltenden Rahmen" },
  { label: "Ort", value: "Bamako, Mali — Hamdallaye ACI 2000" },
  {
    label: "Sprachen",
    value: "Französisch und Englisch in jedem Semester (zweisprachiger Fortschritt, siehe die Seite Pädagogik)",
  },
  {
    label: "Orientierende Jahresgebühr",
    value: "1 025 000 FCFA/Jahr (mitgeteilter Tarif, schriftliche Bestätigung für 2026–2027 erforderlich)",
  },
  {
    label: "Mitgeteilte Nebengebühren",
    value: "Dossier: 15 000 FCFA; Licence-Verteidigung: 80 000 FCFA — Beträge für 2026–2027 zu bestätigen",
  },
  { label: "Kontakt", value: "+223 78 14 14 88 — abs.mail1290@gmail.com" },
]

export default function BusinessAdministrationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 bg-cyan-400/20 text-cyan-300 border border-cyan-400/40 hover:bg-cyan-400/20">
            Bereich 5 — Betriebswirtschaft
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Licence in Betriebswirtschaft
          </h1>
          <p className="text-lg md:text-xl italic text-cyan-200 mb-6">
            Mit Methode führen. Mit Mut unternehmen. Dauerhaften Wert schaffen.
          </p>
          <p className="max-w-3xl text-slate-200 leading-relaxed">
            Ausbildung von Fachleuten, die die Funktionsweise von Organisationen verstehen, deren
            Ergebnisse analysieren und zum Management, zu Finanzen, Marketing, Personalwesen und zur
            Geschäftsentwicklung beitragen können. Die Ausbildung entspricht den Bedürfnissen von
            Unternehmen, Verwaltungen, Vereinen und Gründungsvorhaben.
          </p>
        </div>
      </section>

      {/* Info bar */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {info.map((i) => (
              <div key={i.label} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wide text-blue-700 mb-1">
                  {i.label}
                </p>
                <p className="text-sm text-slate-700">{i.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="finalite">
            <TabsList className="flex flex-wrap justify-center w-full mb-8">
              <TabsTrigger value="finalite" className="text-sm">
                Zielsetzung und Ziele
              </TabsTrigger>
              <TabsTrigger value="competences" className="text-sm">
                Angestrebte Kompetenzen
              </TabsTrigger>
              <TabsTrigger value="parcours" className="text-sm">
                Aufbau des Studienverlaufs
              </TabsTrigger>
              <TabsTrigger value="enseignements" className="text-sm">
                Lehrinhalte
              </TabsTrigger>
              <TabsTrigger value="projets" className="text-sm">
                Projekte und Praktika
              </TabsTrigger>
            </TabsList>

            {/* Finalité */}
            <TabsContent value="finalite">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-900">
                      <Target className="h-5 w-5 text-cyan-500" /> Zielsetzung
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-5 text-slate-700">
                    <p className="font-medium">
                      Die Fähigkeit zu verantwortungsvollem, analytischem und operativem Management
                      entwickeln.
                    </p>
                    <div>
                      <p className="font-semibold text-blue-800 mb-2">Allgemeine Ziele</p>
                      <ul className="space-y-1.5">
                        <li>Die Grundlagen des Managements und der Wirtschaft beherrschen.</li>
                        <li>
                          Finanzanalyse, professionelle Kommunikation und Entscheidungsfindung
                          entwickeln.
                        </li>
                        <li>
                          Projekte führen, im Team arbeiten sowie Ethik und Nachhaltigkeit
                          einbeziehen.
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-blue-800 mb-2">Spezifische Ziele</p>
                      <ul className="space-y-1.5">
                        <li>Ein Budget aufstellen und Finanzberichte lesen.</li>
                        <li>Ein Marketingkonzept ausarbeiten und einen Markt analysieren.</li>
                        <li>
                          Zur Personalauswahl, Organisation und Leistungskontrolle beitragen.
                        </li>
                        <li>Datenbasiert begründete Empfehlungen präsentieren.</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
                <div className="space-y-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-blue-900">
                        <GraduationCap className="h-5 w-5 text-cyan-500" /> Zugangsvoraussetzungen
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-slate-700">
                      <p>
                        Zugang zum Licence: Baccalauréat oder gleichwertiger Abschluss, vorbehaltlich
                        der offiziellen Zulassungsbedingungen von ABS. Zugang zum Master: Licence oder
                        gleichwertiger Abschluss in einem einschlägigen Bereich, akademisches Dossier
                        und Bedingungen des gewählten Studienverlaufs.
                      </p>
                      <p className="mt-3 text-sm text-slate-500">
                        Die tatsächlich eröffneten Studienverläufe, die offiziellen Bezeichnungen und
                        die Gebühren werden von der Direktion für jedes Studienjahr bestätigt.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-blue-900">
                        <Briefcase className="h-5 w-5 text-cyan-500" /> Methoden und Bewertung
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-slate-700">
                      <p>
                        Kontinuierliche Bewertung, Hausarbeiten, Fallstudien, Referate,
                        Gruppenarbeiten, Semesterprüfungen, Projekte und Praktikum. Die genauen
                        Gewichtungen ergeben sich aus der validierten Ordnung und dem Studienplan.
                      </p>
                      <p className="mt-3">
                        Angestrebter pädagogischer Ansatz: etwa 40 % theoretische Anteile und 60 %
                        Praxis, Projekte, Übungen, Geländepraktika, Praktika und Immersionen,
                        vorbehaltlich des genehmigten Studienplans.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Compétences */}
            <TabsContent value="competences">
              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-900">Angestrebte Kompetenzen und Lernergebnisse</CardTitle>
                  <CardDescription>
                    Jede Kompetenz ist mit einem erwarteten Lernergebnis am Ende der Ausbildung
                    verknüpft.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-20">Code</TableHead>
                        <TableHead>Angestrebte Kompetenz</TableHead>
                        <TableHead>Erwartetes Lernergebnis</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {competences.map((c) => (
                        <TableRow key={c.code}>
                          <TableCell>
                            <Badge variant="secondary" className="font-semibold text-blue-800">
                              {c.code}
                            </Badge>
                          </TableCell>
                          <TableCell className="font-medium">{c.competence}</TableCell>
                          <TableCell className="text-slate-600">{c.resultat}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Parcours */}
            <TabsContent value="parcours">
              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-900">Aufbau des Licence-Studiums</CardTitle>
                  <CardDescription>
                    Licence: 3 Jahre, 6 Semester, 180 Credits gemäß dem pädagogischen Referenzrahmen.
                    Die detaillierte Verteilung der Lehrmodule ist im validierten Semesterstudienplan
                    des Studiengangs festgelegt.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-24">Zyklus</TableHead>
                        <TableHead>Organisation</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {parcours.map((p) => (
                        <TableRow key={p.cycle}>
                          <TableCell className="font-semibold text-blue-800">{p.cycle}</TableCell>
                          <TableCell>{p.organisation}</TableCell>
                          <TableCell className="text-slate-600">{p.statut}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  <p className="mt-4 text-sm text-slate-500">
                    Die vollständigen Semesterpläne (Lehrmodule, Fächer, Umfänge CM/TD/TP/TPE und
                    Credits) befinden sich im beigefügten pädagogischen Band und müssen vor der
                    Veröffentlichung als endgültige Daten geprüft und harmonisiert werden.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Enseignements */}
            <TabsContent value="enseignements">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-900">
                      <BookOpen className="h-5 w-5 text-cyan-500" /> Wichtigste Lehrinhalte
                    </CardTitle>
                    <CardDescription>Öffentlich dargestellte Liste gemäß dem validierten Studienplan</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {enseignements.map((e) => (
                        <li key={e} className="flex items-start gap-2 text-slate-700">
                          <CheckCircle2 className="h-4 w-4 mt-1 text-cyan-500 shrink-0" />
                          {e}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-blue-900">Spezialisierungsbereiche des Bereichs</CardTitle>
                    <CardDescription>
                      Vorgesehene Optionen im Bereich Betriebswirtschaft. Zu bestätigen: die
                      tatsächlich eröffneten Optionen für jedes Studienjahr.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {options.map((o) => (
                      <div key={o.titre} className="flex gap-3">
                        <o.icon className="h-5 w-5 text-cyan-500 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-slate-800">{o.titre}</p>
                          <p className="text-sm text-slate-600">{o.texte}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Projets et stages */}
            <TabsContent value="projets">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-900">
                      <ClipboardList className="h-5 w-5 text-cyan-500" /> Abschlussprojekte der Module
                      und Verteidigungen
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-slate-700">
                    <p>
                      Unternehmensfallstudie, Planbudget, vereinfachtes Audit, Marketingkonzept oder
                      Businessplan. Mündliche Präsentation und schriftlicher Bericht;
                      Abschlussverteidigung des Licence gemäß der genehmigten Ordnung.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-900">
                      <Users className="h-5 w-5 text-cyan-500" /> Immersionen, pädagogische Ausflüge und
                      Praktika
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-slate-700">
                    <p>
                      Besuche von Unternehmen und Organisationen, Fallstudien, betreute Projekte und
                      Praktikum im Berufsleben gemäß dem validierten Kalender. Das Praktikum umfasst
                      einen Bericht, eine Bewertung durch den Betreuer und eine
                      Präsentation/Verteidigung gemäß den Regeln von ABS.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Image + moyens */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/campus/IMG-20250212-WA0003.jpg"
              alt="Studierende im Unterricht Betriebswirtschaft"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Den Studierenden zur Verfügung gestellte Mittel</h2>
            <p className="text-slate-700 mb-4">
              Dozierende für Management, Rechnungswesen, Finanzen, Marketing und Personalwesen;
              Unterrichtsraum, Bibliothek und digitale Ressourcen, Tabellenkalkulation und
              Präsentationswerkzeuge. Spezialsoftware und namentlich genannte Partnerschaften werden
              erst nach Prüfung ihrer Verfügbarkeit angekündigt.
            </p>
            <p className="text-sm text-slate-500">
              Verfolgung und kontinuierliche Verbesserung: Ergebnisse je Lehrmodul und Semester,
              Bewertung der Lehre durch die Studierenden, Begleitung von Projekten und Praktika,
              jährliche Erfassung der Rückmeldungen von Absolventen und Arbeitgebern, sofern Daten
              vorliegen, periodische Überarbeitung der Studienpläne und Inhalte.
            </p>
          </div>
        </div>
      </section>

      {/* Débouchés */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Berufsaussichten und berufliche Perspektiven</h2>
          <p className="max-w-3xl text-slate-700 mb-6">
            Orientierende Perspektiven, je nach Erfahrung und Spezialisierung jedes Absolventen —
            die Berufsaussichten sind Perspektiven, keine Beschäftigungsgarantien:
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Managementassistent",
              "Buchhaltungs- oder Finanzassistent",
              "Kundenbetreuer",
              "HR-Assistent",
              "Marketingassistent",
              "Junior-Projektmanager",
              "Unternehmer oder Unterstützung eines KMU",
            ].map((d) => (
              <Badge key={d} variant="secondary" className="text-sm px-3 py-1">
                {d}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Möchten Sie mehr über den Studiengang Betriebswirtschaft erfahren?
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto text-slate-200">
            Kontaktieren Sie das Team von ABS, um die Zulassungsbedingungen, die vorzulegenden
            Unterlagen, den Kalender und die verfügbaren Plätze zu prüfen.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-cyan-400 text-slate-950 hover:bg-cyan-300 font-semibold">
                Informationen anfordern
              </Button>
            </Link>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 font-semibold"
              >
                <Phone className="mr-2 h-4 w-4" /> ABS auf WhatsApp kontaktieren
              </Button>
            </a>
            <Link href="/apply">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 font-semibold"
              >
                Jetzt bewerben
              </Button>
            </Link>
          </div>
          <p className="mt-8 text-sm text-slate-300 flex flex-col sm:flex-row items-center justify-center gap-4">
            <span className="inline-flex items-center gap-1">
              <Phone className="h-4 w-4" /> {WHATSAPP_NUMBER}
            </span>
            <span className="inline-flex items-center gap-1">
              <Mail className="h-4 w-4" /> abs.mail1290@gmail.com
            </span>
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-4 w-4" /> Hamdallaye ACI 2000, Bamako, Mali
            </span>
          </p>
        </div>
      </section>
    </div>
  )
}
