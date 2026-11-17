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
  CheckCircle2,
  ClipboardList,
  GraduationCap,
  HardHat,
  Layers,
  Mail,
  MapPin,
  Mountain,
  Phone,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react"
import { WHATSAPP_NUMBER, WHATSAPP_URL } from "@/lib/constants"

export const metadata: Metadata = buildMetadata({
  title: "Licence in Geologie, Bauingenieur- und Bergbauwesen | ABS",
  description:
    "Licence in Geologie, Bauingenieur- und Bergbauwesen in Bamako: Geologie, Topographie, Werkstoffe, Bauingenieurwesen, mineralische Ressourcen, Sicherheit und Umwelt. 3 Jahre, 6 Semester, 180 Credits. Orientierende Jahresgebühr 1 350 000 FCFA (schriftliche Bestätigung für 2026–2027 erforderlich).",
  path: "/programs/geological-civil-mining-engineering",
  locale: "de",
})

const competences = [
  {
    code: "GCM01",
    competence: "Gelände beobachten und beschreiben",
    resultat: "Beobachtungen erfassen und Werkstoffe charakterisieren.",
  },
  {
    code: "GCM02",
    competence: "Kartieren und Vermessen",
    resultat: "Aufnahmedaten organisieren und eine lesbare Darstellung erstellen.",
  },
  {
    code: "GCM03",
    competence: "Werkstoffe und Bauwerke verstehen",
    resultat: "Die wichtigsten Eigenschaften und Belastungen erklären.",
  },
  {
    code: "GCM04",
    competence: "Zu technischen Studien beitragen",
    resultat: "Pläne lesen und niveauangemessene Berechnungsmethoden anwenden.",
  },
  {
    code: "GCM05",
    competence: "Sicherheit und Umwelt einbeziehen",
    resultat: "Risiken erkennen und Präventionsmaßnahmen vorschlagen.",
  },
  {
    code: "GCM06",
    competence: "Ergebnisse kommunizieren",
    resultat: "Ein Protokoll verfassen und technische Daten präsentieren.",
  },
]

const enseignements = [
  "Angewandte Mathematik und Physik",
  "Allgemeine Chemie und Werkstoffe",
  "Allgemeine und Strukturgeologie",
  "Mineralogie, Petrographie und geologische Kartierung",
  "Topographie und Geländeaufnahmen",
  "Bodenmechanik und Baustoffe",
  "Hydrologie und Geotechnik gemäß Studienplan",
  "Technisches Zeichnen und Konstruktionssoftware",
  "GIS: QGIS und Kartierungswerkzeuge gemäß Ressourcen",
  "Einführung in die Fachsoftware: AutoCAD Civil 3D, Surpac je nach Verfügbarkeit",
  "Bergbau, Sicherheit und Umwelt",
  "Wissenschaftliches Englisch, Projekte und Geländeexkursionen",
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
    value: "1 350 000 FCFA/Jahr (mitgeteilter Tarif, schriftliche Bestätigung für 2026–2027 erforderlich)",
  },
  {
    label: "Mitgeteilte Nebengebühren",
    value: "Dossier: 15 000 FCFA; Licence-Verteidigung: 80 000 FCFA — Beträge für 2026–2027 zu bestätigen",
  },
  { label: "Kontakt", value: "+223 78 14 14 88 — abs.mail1290@gmail.com" },
]

export default function GeologicalCivilMiningEngineeringPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 bg-cyan-400/20 text-cyan-300 border border-cyan-400/40 hover:bg-cyan-400/20">
            Bereich 1 — Geologie, Bauingenieur- und Bergbauwesen
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Licence in Geologie, Bauingenieur- und Bergbauwesen
          </h1>
          <p className="text-lg md:text-xl italic text-cyan-200 mb-6">
            Ressourcen erschließen. Infrastrukturen bauen. Das afrikanische Potenzial nachhaltig
            nutzen.
          </p>
          <p className="max-w-3xl text-slate-200 leading-relaxed">
            Verständnis von Gelände und Werkstoffen, bautechnische Verfahren und Kenntnisse des
            Bergbausektors verbinden, um Fachkräfte auszubilden, die auf Sicherheit, Qualität der
            Bauwerke und verantwortungsvollen Umgang mit natürlichen Ressourcen achten. Afrika
            verfügt über ein erhebliches geologisches und bergbauliches Erbe und einen großen
            Bedarf an Infrastruktur: Diese Ausbildung zielt auf die wissenschaftlichen und
            technischen Kompetenzen ab, die diese Entwicklungsprojekte begleiten können.
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
                      Höherqualifizierte Techniker und Berufseinsteiger ausbilden, die an der
                      Untersuchung von Gelände, an der Vorbereitung von Projekten und an der
                      Begleitung geologischer, baulicher und bergbaulicher Aktivitäten mitwirken
                      können.
                    </p>
                    <div>
                      <p className="font-semibold text-blue-800 mb-2">Allgemeine Ziele</p>
                      <ul className="space-y-1.5">
                        <li>
                          Die naturwissenschaftlichen Grundlagen beherrschen, die für die Untersuchung
                          von Boden und Werkstoffen erforderlich sind.
                        </li>
                        <li>
                          Die Methoden von Aufnahme, Kartierung, Entwurf und Bauwerksbegleitung
                          verstehen.
                        </li>
                        <li>Sicherheits-, Umwelt- und Qualitätsregeln einbeziehen.</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-blue-800 mb-2">Spezifische Ziele</p>
                      <ul className="space-y-1.5">
                        <li>
                          Geologische Formationen beschreiben und Geländedaten interpretieren.
                        </li>
                        <li>Aufnahmen durchführen und Grundkarten oder Grundpläne erstellen.</li>
                        <li>
                          Zur Vorbereitung und Begleitung von Bau- oder Bergbauarbeiten beitragen.
                        </li>
                        <li>
                          Spezialsoftware nutzen, sofern sie verfügbar und Gegenstand des Unterrichts
                          ist.
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
                        Zugang zum Licence: naturwissenschaftliches Baccalauréat oder gleichwertiger
                        Abschluss empfohlen, vorbehaltlich der offiziellen Zulassungsbedingungen.
                        Zugang zum Master: einschlägige Licence in Geologie, Bauingenieurwesen,
                        Bergbau oder einem verwandten Bereich, akademisches Dossier und tatsächlich
                        eröffneter Studienverlauf.
                      </p>
                      <p className="mt-3 text-sm text-slate-500">
                        Vor der Veröffentlichung zu bestätigen: fachlicher Umfang, tatsächlich
                        zugängliche Software und Ausstattung, Geländeexkursionen und etwaige
                        berufliche Anforderungen.
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
                        Schriftliche Kontrollarbeiten, Praktikumsprotokolle, Karten/Pläne,
                        Fallstudien, Geländebewertungen, Prüfungen, Projekt und Praktikum.
                        Validierung gemäß den genehmigten institutionellen Regeln.
                      </p>
                      <p className="mt-3">
                        Angestrebter pädagogischer Ansatz: etwa 40 % theoretische Anteile und 60 %
                        Praxis, Projekte, Übungen, Geländepraktika, Praktika und Immersionen,
                        vorbehaltlich des genehmigten Studienplans. Die Geländeexkursionen folgen
                        Sicherheitsvorschriften und Schutzausrüstungen, die im Studienplan definiert
                        sind.
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
                        <TableHead className="w-24">Code</TableHead>
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
                    Veröffentlichung als endgültige Daten geprüft und harmonisiert werden. Die
                    Master-Studienpläne des Bereichs Geologie, Bauingenieur- und Bergbauwesen müssen
                    vor der Eröffnung der Einschreibungen validiert werden.
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
                      Software wie QGIS, AutoCAD Civil 3D und Surpac kann je nach pädagogischen
                      Zielen und verfügbarer Ausstattung eingesetzt werden.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-blue-900">Drei miteinander verbundene Säulen</CardTitle>
                    <CardDescription>
                      Eine Ausbildung an der Schnittstelle von Geowissenschaften, Ingenieurwesen der
                      Bauwerke und mineralischen Ressourcen.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex gap-3">
                      <Mountain className="h-5 w-5 text-cyan-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-slate-800">Geologischer Zweig</p>
                        <p className="text-sm text-slate-600">
                          Gelände beobachten und charakterisieren, geologische und geotechnische
                          Daten interpretieren, kartieren.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <HardHat className="h-5 w-5 text-cyan-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-slate-800">Zweig Bauingenieurwesen</p>
                        <p className="text-sm text-slate-600">
                          Werkstoffe, Bodenmechanik, Entwurf und Begleitung von Bauwerken, Pläne und
                          Grundberechnungen.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Layers className="h-5 w-5 text-cyan-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-slate-800">Zweig Bergbau</p>
                        <p className="text-sm text-slate-600">
                          Erkundung und Gewinnung mineralischer Ressourcen, Sicherheit, Umwelt und
                          Rekultivierung von Standorten.
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-slate-500 border-t border-slate-200 pt-4">
                      Besondere Aufmerksamkeit gilt der Sicherheit, dem verantwortungsvollen Umgang
                      mit Ressourcen, der Verringerung der Umweltbelastungen und der Berücksichtigung
                      der Bedürfnisse der Gemeinschaften.
                    </p>
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
                      Feldbuch, geologische Kartierung, Analyse eines Werkstoffs, geotechnische
                      Fallstudie oder Mini-Projekt zur Baustellenbegleitung. Präsentation der
                      Ergebnisse und technischer Bericht.
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
                      Betreute Geländeexkursionen, Besuche von Baustellen, geologischen Standorten und
                      Bergbauunternehmen, sofern Vereinbarungen und Sicherheit es zulassen;
                      berufsbezogenes Praktikum mit Betreuer und Bericht.
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
              src="/images/campus/IMG-20250212-WA0009.jpg"
              alt="Studierende des Bereichs Geologie, Bauingenieur- und Bergbauwesen auf dem ABS-Campus"
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
              Dozierende für Geologie, Topographie, Werkstoffe und Bauingenieurwesen;
              Messinstrumente, persönliche Schutzausrüstungen, kartographische Ressourcen und
              Software je nach Lizenzen und Verfügbarkeit. Auf kein Labor oder keine konkrete
              Partnerschaft wird ohne Prüfung verwiesen.
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
            Orientierende Perspektiven, vorbehaltlich der Kompetenzen, Befähigungen und Anforderungen
            des Arbeitgebers — die Berufsaussichten sind Perspektiven, keine Beschäftigungsgarantien:
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Geologie-Assistent",
              "Geländetechniker",
              "Topographie-Assistent",
              "Werkstofftechniker",
              "Baustellen-Assistent",
              "Assistent für geotechnische oder bergbauliche Studien",
            ].map((d) => (
              <Badge key={d} variant="secondary" className="text-sm px-3 py-1">
                {d}
              </Badge>
            ))}
          </div>
          <p className="mt-4 text-sm text-slate-500 max-w-3xl">
            Betroffene Sektoren (orientierend): Ingenieurbüros, Bauunternehmen, Bergbaugesellschaften,
            Laboratorien, Kartierungsorganisationen, technische Dienste sowie Umwelt- und
            Geotechnik-Strukturen.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Möchten Sie mehr über den Studiengang Geologie, Bauingenieur- und Bergbauwesen erfahren?
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
