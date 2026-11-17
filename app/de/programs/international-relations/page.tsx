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
  Globe2,
  GraduationCap,
  Landmark,
  Languages,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react"
import { WHATSAPP_NUMBER, WHATSAPP_URL } from "@/lib/constants"

export const metadata: Metadata = buildMetadata({
  title: "Licence in Internationale Beziehungen | ABS",
  description:
    "Licence in Internationalen Beziehungen in Bamako: Geopolitik, Völkerrecht, Diplomatie, Kooperation, Weltwirtschaft und interkulturelle Kommunikation. Französisch und Englisch jedes Semester, schrittweises Spanisch. 3 Jahre, 6 Semester, 180 Credits. Orientierende Jahresgebühr 1 250 000 FCFA (schriftliche Bestätigung für 2026–2027 erforderlich).",
  path: "/programs/international-relations",
  locale: "de",
})

const competences = [
  {
    code: "RAI01",
    competence: "Einen internationalen Kontext analysieren",
    resultat: "Akteure, Interessen und Herausforderungen einer Situation darstellen.",
  },
  {
    code: "RAI02",
    competence: "Informationen recherchieren und überprüfen",
    resultat: "Quellen vergleichen und Fakten von Meinungen unterscheiden.",
  },
  {
    code: "RAI03",
    competence: "Vermerke und Synthesen verfassen",
    resultat: "Einen strukturierten, belegten und begründeten Vermerk erstellen.",
  },
  {
    code: "RAI04",
    competence: "Die Institutionen verstehen",
    resultat: "Die Rolle der Organisationen und Kooperationsrahmen beschreiben.",
  },
  {
    code: "RAI05",
    competence: "Im interkulturellen Kontext kommunizieren",
    resultat: "Eine Botschaft an ein bestimmtes Publikum und einen bestimmten Kontext anpassen.",
  },
  {
    code: "RAI06",
    competence: "Sprachen einsetzen",
    resultat: "Eine Analyse auf Französisch und Englisch präsentieren; im Spanischen Fortschritte machen.",
  },
]

const enseignements = [
  "Einführung in die internationalen Beziehungen",
  "Zeitgeschichte und Geopolitik",
  "Völkerrecht und Institutionen",
  "Diplomatie und Verhandlung",
  "Internationale politische Ökonomie",
  "Regionale Integration und afrikanische Kooperation",
  "Recherchemethodik und Quellenanalyse",
  "Institutionelle Kommunikation und Verfassen von Vermerken",
  "Englisch in jedem Semester",
  "Schrittweises Spanisch in jeder im validierten Studienplan vorgesehenen Etappe",
  "Persönlichkeitsentwicklung, Simulationen und Projekte",
  "Immersionen und institutionelle Besuche gemäß Vereinbarungen",
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
  {
    label: "Abschluss",
    value: "Licence (Bachelorabschluss) — 3 Jahre, 6 Semester, 180 Credits gemäß dem geltenden Rahmen",
  },
  { label: "Ort", value: "Bamako, Mali — Hamdallaye ACI 2000" },
  {
    label: "Sprachen",
    value:
      "Französisch und Englisch in jedem Semester; schrittweises Spanisch für diesen Studiengang (Umfänge und Niveaus zu validieren)",
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
    icon: Globe2,
    titre: "Geopolitik und strategische Analyse",
    texte:
      "Analyse der Wechselwirkungen zwischen Staaten, internationalen Organisationen, regionalen Institutionen, Unternehmen und Akteuren der Zivilgesellschaft.",
  },
  {
    icon: Landmark,
    titre: "Afrikanische Integration und Kooperation",
    texte:
      "Afrikanische Union, ECOWAS und regionale Organisationen; afrikanische Realitäten, regionale Dynamiken und strategische Herausforderungen des Sahel.",
  },
  {
    icon: Languages,
    titre: "Sprachen und interkulturelle Kommunikation",
    texte:
      "Englisch in jedem Semester und schrittweises Spanisch: Recherche, Verfassen, Verhandlung und Kommunikation in komplexen Umgebungen.",
  },
]

export default function InternationalRelationsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 bg-cyan-400/20 text-cyan-300 border border-cyan-400/40 hover:bg-cyan-400/20">
            Bereich 3 — Internationale Beziehungen
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Licence in Internationalen Beziehungen
          </h1>
          <p className="text-lg md:text-xl italic text-cyan-200 mb-6">
            Die Welt verstehen. Machtverhältnisse analysieren. Die Ambitionen Afrikas vertreten.
          </p>
          <p className="max-w-3xl text-slate-200 leading-relaxed">
            Den Studierenden Instrumente zur Analyse der internationalen Beziehungen, der
            Institutionen, der Diplomatie, der Kooperation und der geopolitischen Herausforderungen
            vermitteln, mit einem Verständnis der afrikanischen Realitäten und einer Offenheit für
            die globalen Dynamiken. Besondere Aufmerksamkeit gilt den regionalen Dynamiken, den
            Beziehungen zwischen den Ländern des Kontinents und den strategischen
            Herausforderungen des Sahel.
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
                      Profile ausbilden, die internationale Herausforderungen analysieren, Dossiers
                      vorbereiten und zu Aktivitäten der Kooperation, der Kommunikation und der
                      institutionellen Beziehungen beitragen können.
                    </p>
                    <div>
                      <p className="font-semibold text-blue-800 mb-2">Allgemeine Ziele</p>
                      <ul className="space-y-1.5">
                        <li>Internationale Akteure, Institutionen und Machtverhältnisse verstehen.</li>
                        <li>
                          Dokumentenrecherche, politische Analyse und Verfassen von Vermerken
                          entwickeln.
                        </li>
                        <li>Sprachliche und interkulturelle Kompetenzen stärken.</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-blue-800 mb-2">Spezifische Ziele</p>
                      <ul className="space-y-1.5">
                        <li>
                          Ein internationales Ereignis unter Unterscheidung von Fakten, Quellen und
                          Interpretationen analysieren.
                        </li>
                        <li>Eine Synthese oder ein Länderdossier verfassen.</li>
                        <li>Eine Präsentation oder eine Verhandlungssimulation vorbereiten.</li>
                        <li>
                          Auf Französisch und Englisch kommunizieren und gemäß dem validierten
                          Rahmen im Spanischen Fortschritte machen.
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
                        offiziellen Bedingungen von ABS. Interesse an aktuellen Ereignissen, Lesen,
                        Analyse und Sprachen empfohlen. Master: einschlägige Licence oder
                        gleichwertiger Abschluss, gemäß dem tatsächlich eröffneten Studienverlauf.
                      </p>
                      <p className="mt-3 text-sm text-slate-500">
                        Vorgesehener sprachlicher Rahmen: Französisch und Englisch, mit schrittweisem
                        Spanisch für diesen Studiengang. Umfänge, Niveaus und Bewertungsmodalitäten
                        sind zu validieren.
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
                        Aufsätze, Synthesevermerke, Referate, Forschungsdossiers, Simulationen,
                        Prüfungen und Praktikumsbericht. Die Kriterien der Quellenqualität und der
                        Argumentation sind explizit.
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
                    Veröffentlichung als endgültige Daten geprüft und harmonisiert werden. Der
                    Aufbau des Spanischen — Umfänge, Credits und Bewertungen — ist im Studienplan zu
                    präzisieren.
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
                    <CardTitle className="text-blue-900">Schwerpunkte der Ausbildung</CardTitle>
                    <CardDescription>
                      Eine Lesart der internationalen Beziehungen, verwurzelt in den afrikanischen
                      Realitäten.
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
                    <p className="text-sm text-slate-500 border-t border-slate-200 pt-4">
                      Diplomatische oder internationale Partnerschaften werden nur ausgewiesen, wenn
                      sie formalisiert sind. Die Sprachkurse präzisieren die angestrebten Niveaus und
                      die Stunden pro Semester.
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
                      Länderdossier, Vermerk zu einer öffentlichen Politik, Krisenanalyse,
                      diplomatische Simulation, Studierendenkonferenz oder Studie zur regionalen
                      Kooperation. Dokumentierter Bericht und mündliche Präsentation.
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
                      Institutionelle Besuche und Begegnungen, Konferenzen, Simulationen, Projekte
                      mit Vereinen oder Kooperationsstrukturen, sobald Vereinbarungen geschlossen
                      sind; Praktikum gemäß Vereinbarung.
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
              src="/images/documents/v3-image2.jpg"
              alt="Studierende von ABS arbeiten gemeinsam an einem Projekt"
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
              Dozierende für internationale Beziehungen, Recht, Wirtschaft und Sprachen; Zugang zu
              einer Bibliothek und digitalen Ressourcen, Presse und institutionellen Quellen.
              Diplomatische oder internationale Partnerschaften werden nur ausgewiesen, wenn sie
              formalisiert sind.
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
            Orientierende Perspektiven, vorbehaltlich der Erfahrung und der Einstellungsbedingungen
            jedes Arbeitgebers — die Berufsaussichten sind Perspektiven, keine
            Beschäftigungsgarantien:
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Assistent für Kooperationsprojekte",
              "Junior-Lagebeobachter",
              "Assistent für institutionelle Beziehungen",
              "Redakteur/Analyst-Einsteiger",
              "Unterstützung von NGOs und Programmen",
            ].map((d) => (
              <Badge key={d} variant="secondary" className="text-sm px-3 py-1">
                {d}
              </Badge>
            ))}
          </div>
          <p className="mt-4 text-sm text-slate-500 max-w-3xl">
            Betroffene Sektoren (orientierend): Verwaltungen, Kooperationsdienste, regionale oder
            internationale Organisationen, NGOs, Entwicklungsprojekte, institutionelle Beziehungen,
            Analysebüros und diplomatische Unterstützungsfunktionen, gemäß den Verfahren und
            Kriterien der jeweiligen Arbeitgeber.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Möchten Sie mehr über den Studiengang Internationale Beziehungen erfahren?
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
