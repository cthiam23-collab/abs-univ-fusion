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
  Camera,
  CheckCircle2,
  ClipboardList,
  GraduationCap,
  Mail,
  MapPin,
  Megaphone,
  Mic,
  Newspaper,
  Phone,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react"
import { WHATSAPP_NUMBER, WHATSAPP_URL } from "@/lib/constants"

export const metadata: Metadata = buildMetadata({
  title: "Licence in Journalismus-Kommunikation | ABS",
  description:
    "Licence in Journalismus-Kommunikation in Bamako: Recherche und Überprüfung von Informationen, Redaktion, audiovisuelle Produktion, Webjournalismus, institutionelle Kommunikation und Medienethik. 3 Jahre, 6 Semester, 180 Credits. Orientierende Jahresgebühr 1 250 000 FCFA (schriftliche Bestätigung für 2026–2027 erforderlich).",
  path: "/programs/journalism-communication",
  locale: "de",
})

const competences = [
  {
    code: "JC01",
    competence: "Informationen sammeln und überprüfen",
    resultat: "Quellen abgleichen und eine Information dokumentieren.",
  },
  {
    code: "JC02",
    competence: "Für unterschiedliche Formate schreiben",
    resultat: "Einen klaren, strukturierten und publikumsgerechten Text erstellen.",
  },
  {
    code: "JC03",
    competence: "Ein Interview vorbereiten",
    resultat: "Fragen ausarbeiten, das Gespräch führen und getreu wiedergeben.",
  },
  {
    code: "JC04",
    competence: "Multimedia-Inhalte erstellen",
    resultat: "Einen Foto-, Audio-, Video- oder Webinhalt gemäß den verfügbaren Mitteln erstellen.",
  },
  {
    code: "JC05",
    competence: "Eine Kommunikation ausarbeiten",
    resultat: "Ein Publikum, eine Botschaft, Trägermedien und Indikatoren definieren.",
  },
  {
    code: "JC06",
    competence: "Berufsethik anwenden",
    resultat: "Überprüfung, Privatsphäre, Bildrechte und Deontologie respektieren.",
  },
]

const enseignements = [
  "Techniken des schriftlichen und mündlichen Ausdrucks",
  "Journalistische Gattungen und Redaktion",
  "Recherchemethodik und Faktenprüfung",
  "Medienrecht und Deontologie",
  "Institutionelle Kommunikation und Pressearbeit",
  "Kommunikationsstrategie und Medienmarketing",
  "Fotografie und Tonaufnahme",
  "Videoproduktion und Schnitt je nach Ausstattung",
  "Webjournalismus und soziale Netzwerke",
  "Kampagnengestaltung und Reichweitenmessung",
  "Businessenglisch in jedem Semester",
  "Redaktionelle Projekte, Persönlichkeitsentwicklung und Praktikum",
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
    value: "1 250 000 FCFA/Jahr (mitgeteilter Tarif, schriftliche Bestätigung für 2026–2027 erforderlich)",
  },
  {
    label: "Mitgeteilte Nebengebühren",
    value:
      "Dossier: 15 000 FCFA; Licence-Verteidigung: 80 000 FCFA — Beträge für 2026–2027 zu bestätigen",
  },
  { label: "Kontakt", value: "+223 78 14 14 88 — abs.mail1290@gmail.com" },
]

const axes = [
  {
    icon: Newspaper,
    titre: "Journalismus",
    texte:
      "Informationen recherchieren, überprüfen, analysieren und verbreiten; Reportage, Interview und digitaler Journalismus.",
  },
  {
    icon: Megaphone,
    titre: "Kommunikation der Organisationen",
    texte:
      "Kommunikationsstrategien entwickeln, die auf Ziele und Zielgruppen abgestimmt sind: institutionell, Pressearbeit, digital.",
  },
  {
    icon: Camera,
    titre: "Inhaltserstellung",
    texte:
      "Multimediaproduktionen, redaktionelle Projekte und praktische Szenarien; Faktenprüfung, redaktionelle Verantwortung und Kampf gegen Desinformation.",
  },
  {
    icon: Mic,
    titre: "Strahlkraft afrikanischer Stimmen",
    texte:
      "Die Realitäten des Kontinents treffend erzählen, seine Erfolge hervorheben, seine Herausforderungen beleuchten und zu seinem Strahlkraft beitragen.",
  },
]

export default function JournalismCommunicationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 bg-cyan-400/20 text-cyan-300 border border-cyan-400/40 hover:bg-cyan-400/20">
            Bereich 4 — Journalismus und Kommunikation
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Licence in Journalismus-Kommunikation
          </h1>
          <p className="text-lg md:text-xl italic text-cyan-200 mb-6">
            Mit Sorgfalt informieren. Mit Wirkung kommunizieren. Afrikanische Stimmen hörbar machen
            und strahlen lassen.
          </p>
          <p className="max-w-3xl text-slate-200 leading-relaxed">
            Die Kompetenzen entwickeln, die für das Sammeln, Überprüfen, Erstellen und Verbreiten
            von Informationen sowie für die Kommunikation von Organisationen erforderlich sind — in
            einer Umgebung, die vom Digitalen, vom Bild und von den neuen Mediennutzungsformen
            geprägt ist.
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
                      Profile ausbilden, die zuverlässige, klare und für verschiedene Medien
                      geeignete Inhalte erstellen können — unter Wahrung der Ethik und der
                      Verantwortlichkeiten der Kommunikation.
                    </p>
                    <div>
                      <p className="font-semibold text-blue-800 mb-2">Allgemeine Ziele</p>
                      <ul className="space-y-1.5">
                        <li>
                          Die Grundlagen des journalistischen Schreibens und der Kommunikation
                          beherrschen.
                        </li>
                        <li>Sich in die Audio-, Video-, Foto- und digitale Produktion einarbeiten.</li>
                        <li>
                          Ethik, Informationsrecht und Kommunikationsstrategie verstehen.
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-blue-800 mb-2">Spezifische Ziele</p>
                      <ul className="space-y-1.5">
                        <li>Einen Artikel, ein Kommuniqué oder ein Pressedossier verfassen.</li>
                        <li>Ein Interview vorbereiten und Informationen überprüfen.</li>
                        <li>Einen audiovisuellen Inhalt in einem passenden Format realisieren.</li>
                        <li>
                          Eine Kommunikationsmaßnahme konzipieren und ihre Ergebnisse bewerten.
                        </li>
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
                        Zugang zum Licence: Baccalauréat oder gleichwertiger Abschluss, gemäß den
                        offiziellen Bedingungen von ABS. Neugier, schriftliche Ausdrucksfähigkeit,
                        Interesse an aktuellen Ereignissen und Teamfähigkeit empfohlen. Master:
                        einschlägige Licence oder gleichwertiger Abschluss, gemäß eröffnetem
                        Studienverlauf.
                      </p>
                      <p className="mt-3 text-sm text-slate-500">
                        Vor der Veröffentlichung zu bestätigen: Produktionsausstattung, Studio,
                        Software und Modalitäten der Projektumsetzung. Ein eigenständiger Master wird
                        in diesem Studiengang nicht ausgewiesen, ohne formellen Studienplan und
                        formellen Eröffnungsbeschluss.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-blue-900">
                        <ShieldCheck className="h-5 w-5 text-cyan-500" /> Methoden und Bewertung
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-slate-700">
                      <p>
                        Artikel, Dossiers, audiovisuelle Produktionen, Praktika, Prüfungen,
                        Portfolio, redaktionelles Projekt und Praktikumsbericht. Die praktischen
                        Bewertungen werden von transparenten Kriterien begleitet.
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
                  <CardTitle className="text-blue-900">
                    Angestrebte Kompetenzen und Lernergebnisse
                  </CardTitle>
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
                    <p className="mt-4 text-sm text-slate-500 border-t border-slate-200 pt-4">
                      Jedes Syllabus präzisiert die erwarteten Formate, die verfügbaren Werkzeuge,
                      die redaktionellen Kriterien, die Regeln der Bildrechte und die
                      Bewertungsmodalitäten. Die Produktionen müssen den ethischen Rahmen
                      einhalten.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-blue-900">Schwerpunkte der Ausbildung</CardTitle>
                    <CardDescription>
                      Vom Journalismus der Überprüfung bis zur Kommunikationsstrategie.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {axes.map((a) => (
                      <div key={a.titre} className="flex gap-3">
                        <a.icon className="h-5 w-5 text-cyan-500 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-slate-800">{a.titre}</p>
                          <p className="text-sm text-slate-600">{a.texte}</p>
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
                      Schulzeitung, Podcast, Reportage, Interview, Mini-Dokumentarfilm,
                      institutionelle Kampagne oder redaktionelle Strategie. Abgaben: Drehbuch,
                      Endinhalt, Prüfblatt und Präsentation.
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
                      Besuche von Medien und Kommunikationsabteilungen, betreute Reportageübungen,
                      Teilnahme an Veranstaltungen und Praktikum in einer Redaktion, einer Agentur
                      oder einem Kommunikationsdienst, wenn möglich.
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
              src="/images/campus/IMG-20250212-WA0016.jpg"
              alt="Studierende des Bereichs Journalismus und Kommunikation auf dem ABS-Campus"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Den Studierenden zur Verfügung gestellte Mittel
            </h2>
            <p className="text-slate-700 mb-4">
              Dozierende für Journalismus, Kommunikation und Medien; Rechner, Anbindung,
              Fotoapparat/Kamera, Mikrophone und verfügbare Software. Auf kein Studio und kein
              Material wird verwiesen, ohne dass ein physisches Inventar bestätigt wurde.
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
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Berufsaussichten und berufliche Perspektiven
          </h2>
          <p className="max-w-3xl text-slate-700 mb-6">
            Orientierende Perspektiven, je nach Portfolio und Erfahrung jedes Absolventen — die
            Berufsaussichten sind Perspektiven, keine Beschäftigungsgarantien:
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Kommunikationsassistent",
              "Junior-Redakteur",
              "Journalist-Einsteiger",
              "Community Manager",
              "Assistent für Pressearbeit",
              "Inhaltsersteller",
              "Junior-Kommunikationsbeauftragter",
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
            Möchten Sie mehr über den Studiengang Journalismus-Kommunikation erfahren?
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
