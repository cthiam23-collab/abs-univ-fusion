import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowRight, BookOpen, Briefcase, Globe2, Languages, Laptop, Target, Users } from "lucide-react"

export const metadata: Metadata = buildMetadata({
  title: "Pädagogischer Ansatz | ABS",
  description: "Entdecken Sie den pädagogischen Ansatz von ABS: Projekte, Praxis, überfachliche Kompetenzen, Sprachen und Professionalisierung.",
  path: "/academics/pedagogy",
  locale: "de",
})

const approches = [
  {
    icon: Target,
    title: "Lernen durch Verstehen und Praktizieren",
    text: "Die Pädagogik von ABS zielt darauf ab, das Grundlagenwissen mit konkreten Situationen zu verknüpfen. Je nach Studiengang und verfügbaren Ressourcen können die Lernprozesse auf Fallstudien, Übungen, angeleitete Arbeiten, Projekte, Präsentationen, Besichtigungen und berufliche Immersionen gestützt werden. Das Ziel ist, die Studierenden in Analyse, Methode, Kommunikation und in der Fähigkeit zu fördern, eine begründete Arbeit zu erstellen.",
  },
  {
    icon: Briefcase,
    title: "Projekte als roter Faden",
    text: "Projekte ermöglichen es den Studierenden, mehrere Kompetenzen rund um ein Problem oder ein Ergebnis einzusetzen: Studie, Dossier, Prototyp, Aktionsplan, Präsentation oder Bericht. Ziele, Bewertungskriterien und Fristen werden zu Beginn jedes Moduls erläutert.",
  },
  {
    icon: Globe2,
    title: "Sprachen und internationale Offenheit",
    text: "Englisch ist als eine überfachliche Kompetenz konzipiert, die in den Studiengängen schrittweise entwickelt wird. Es verbindet Verständnis, Ausdruck, Berufsvokabular und praxisnahe Übungen. Für Internationale Beziehungen und Internationale Angelegenheiten ist Spanisch als Ergänzungssprache vorgesehen – vorbehaltlich der Validierung der Stundenkontingente und der pädagogischen Modalitäten. Jede Ankündigung einer TOEIC-, IELTS- oder anderen Zertifizierung ist auf die tatsächlich verfügbaren und genehmigten Programme beschränkt.",
  },
  {
    icon: Laptop,
    title: "Digitale Kompetenzen und künstliche Intelligenz",
    text: "Digitale Kompetenzen nehmen in den Berufen einen wachsenden Stellenwert ein. ABS fördert einen maßvollen Einsatz digitaler Werkzeuge und eine schrittweise Heranführung an die künstliche Intelligenz – unter Berücksichtigung des Niveaus der Studierenden, der Bedürfnisse der Studiengänge, des Datenschutzes, des kritischen Denkens und der akademischen Integrität.",
  },
  {
    icon: Users,
    title: "Persönlichkeitsentwicklung und Professionalisierung",
    text: "Die Ausbildung umfasst auch Dimensionen, die für das Berufsleben wesentlich sind: Auftrittskompetenz, Zeitmanagement, Teamarbeit, Organisation, Umgangsformen, Meeting-Leitung, Stressbewältigung und Vorbereitung auf den Berufseinstieg. Die genauen Aktivitäten hängen vom akademischen Kalender ab und werden angekündigt, sobald sie bestätigt sind.",
  },
  {
    icon: BookOpen,
    title: "Praktika und Immersionen",
    text: "Praktika, Besichtigungen und Immersionen sind Gelegenheiten, die Berufe und Arbeitsumgebungen besser zu verstehen. Ihr Kalender, ihre Modalitäten und ihr verpflichtender oder optionaler Charakter sind im offiziellen Curriculum jeder Ausbildung präzisiert.",
  },
]

const dispositifLinguistique = [
  {
    niveau: "Licence 1",
    contenu:
      "Festigung der grammatischen und lexikalischen Grundlagen, mündliches und schriftliches Verständnis, allgemeine Ausdrucksfähigkeit und Erwerb des akademischen Vokabulars.",
  },
  {
    niveau: "Licence 2",
    contenu:
      "Entwicklung der beruflichen Kommunikation, von mündlichen Präsentationen, des schriftlichen Ausdrucks und des je nach Studiengang spezialisierten Vokabulars.",
  },
  {
    niveau: "Licence 3",
    contenu:
      "Einsatz des Englischen in Projekten, Fallstudien, Referaten, Berichten und bestimmten Verteidigungen.",
  },
  {
    niveau: "Master 1 und Master 2",
    contenu:
      "Vertiefung des beruflichen und akademischen Englisch, Analyse von Fachdokumenten, Präsentation von Forschungsarbeiten, Verhandlung und Kommunikation in einem internationalen Umfeld.",
  },
]

const soutenances = [
  "Verteidigungen auf Französisch für Projekte und akademische Arbeiten;",
  "Präsentationen oder Verteidigungen auf Englisch, je nach Sprachniveau und Studiengang;",
  "Zweisprachige Verteidigungen, mit einer Präsentation in einer Sprache und einer Fragerunde in der anderen;",
  "Zusammenfassungen (Executive Summaries), Abstracts oder Präsentationsunterlagen auf Englisch;",
  "Simulationen von Meetings, Verhandlungen, Konferenzen und Berufsinterviews auf Französisch und Englisch.",
]

const anglaisParSpecialite = [
  { domaine: "Ingenieurwesen (Geologie-, Bau- und Bergbauingenieurwesen)", angle: "Wissenschaftliches und technisches Englisch" },
  { domaine: "Betriebswirtschaft", angle: "Business-Englisch" },
  { domaine: "Internationale Beziehungen und internationale Angelegenheiten", angle: "Diplomatisches Englisch" },
  { domaine: "Journalismus und Kommunikation", angle: "Medienenglisch" },
  { domaine: "Informatik-Ingenieurwesen", angle: "Auf digitale Technologien angewandtes Englisch" },
]

export default function PedagogyPage() {
  return (
    <div>
      {/* Hero */}
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
          <p className="font-semibold uppercase tracking-[0.25em] text-cyan-300">Pädagogik</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Lernen durch Verstehen und Praktizieren
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-100">
            Grundlagenwissen mit konkreten Situationen verknüpfen: Fallstudien, Projekte, Präsentationen,
            Immersionen und berufliche Praxisübungen – mit einer Referenzrichtung von{" "}
            <strong className="text-cyan-300">40&nbsp;% Theorie und 60&nbsp;% Praxis</strong>.
          </p>
        </div>
      </section>

      {/* Les six dimensions de l'approche pédagogique */}
      <section className="container mx-auto px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-slate-900">Unser pädagogischer Ansatz</h2>
          <p className="mt-3 leading-7 text-slate-600">
            Eine Referenzrichtung von 40&nbsp;% theoretischen Anteilen und 60&nbsp;% Praxis, Projekte, angeleitete
            Arbeiten, Geländearbeit, Praktika und Immersionen – vorbehaltlich des genehmigten Curriculums jeder
            Ausbildung.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {approches.map(({ icon: Icon, title, text }) => (
            <Card key={title} className="border-slate-200 transition-shadow hover:shadow-lg">
              <CardContent className="p-7">
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-cyan-50">
                  <Icon className="size-6 text-cyan-700" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Le bilinguisme français-anglais */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <p className="flex items-center gap-2 font-semibold uppercase tracking-[0.2em] text-blue-700">
                <Languages className="size-5" /> Die Zweisprachigkeit
              </p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900">
                Die Zweisprachigkeit Französisch-Englisch, eine strategische Säule der Ausbildung
              </h2>
              <p className="mt-5 leading-7 text-slate-600">
                An der ABS — African Business School bildet die Beherrschung des Französischen und des
                Englischen eine Grundachse des akademischen und beruflichen Werdegangs jedes Studierenden. In einem
                afrikanischen Umfeld, das durch sprachliche Vielfalt und die Intensivierung der internationalen
                Austausbeziehungen geprägt ist, hat ABS die Ambition, Absolventinnen und Absolventen auszubilden,
                die in beiden Sprachen kommunizieren, verhandeln, ihre Ideen präsentieren und ihre Verantwortung
                wahrnehmen können.
              </p>
              <p className="mt-4 leading-7 text-slate-600">
                Das Erlernen des Englischen beschränkt sich nicht auf die dafür vorgesehenen Unterrichtsstunden:
                Es ist als eine Kompetenz konzipiert, die schrittweise in den Lehrveranstaltungen, Projekten,
                Forschungsarbeiten, mündlichen Präsentationen, Immersionsaktivitäten und Evaluationen zum Einsatz
                kommt.
              </p>
              <p className="mt-4 leading-7 text-slate-600">
                Die sprachlichen Inhalte sind an die Spezialitäten angepasst — wissenschaftliches und technisches
                Englisch im Ingenieurwesen, Business-Englisch in der Betriebswirtschaft, diplomatisches Englisch in
                den internationalen Beziehungen, Medienenglisch im Journalismus und in der Kommunikation sowie auf
                digitale Technologien angewandtes Englisch im Informatik-Ingenieurwesen.
              </p>
            </div>
            <Card className="border-slate-200 shadow-sm">
              <CardContent className="p-7">
                <h3 className="text-lg font-semibold text-slate-900">
                  Eine strukturierte Progression vom Licence zum Master
                </h3>
                <Accordion type="single" collapsible className="mt-4">
                  {dispositifLinguistique.map((item, index) => (
                    <AccordionItem key={item.niveau} value={`niveau-${index}`}>
                      <AccordionTrigger className="text-sm font-semibold text-slate-800">{item.niveau}</AccordionTrigger>
                      <AccordionContent className="text-sm leading-7 text-slate-600">{item.contenu}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                <p className="mt-4 text-sm leading-6 text-slate-500">
                  Diese Progression ermöglicht es jedem Studierenden, messbare sprachliche Kompetenzen zu
                  entwickeln und sich je nach Niveau und Studiengang auf internationale Zertifizierungen wie den
                  TOEIC oder das IELTS vorzubereiten.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Soutenances + anglais par spécialité */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Verteidigungen auf Französisch und Englisch</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Verteidigungen sind ein wichtiges Instrument der Professionalisierung und der Bewertung der
              Kommunikationskompetenzen. An ABS sind sie als Gelegenheiten konzipiert, eine Argumentation zu
              strukturieren, Ergebnisse zu präsentieren, die Fragen einer Jury zu beantworten und die eigenen
              Vorschläge vor einem Publikum zu verteidigen. Die Bewertungsmodalitäten können vorsehen:
            </p>
            <ul className="mt-5 space-y-3">
              {soutenances.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-7 text-slate-700">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-600" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-7 text-slate-500">
              Die genauen Modalitäten werden in den pädagogischen Curricula und den Prüfungsordnungen definiert.
              Die Progression ist an das Studienlevel angepasst, damit der sprachliche Anspruch ein
              Lernziel darstellt und kein ungerechtfertigtes Hindernis für die Bewertung des Fachwissens ist.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Englisch, angepasst an jede Spezialität</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Um die Zweisprachigkeit konkret lebendig zu machen, fördert ABS die schrittweise Verwendung des
              Französischen und des Englischen in den pädagogischen Aktivitäten aller Studiengänge:
              Dokumentellektüre, zweisprachige Referate, internationale Fallstudien,
              Literaturrecherchen, Debatten und berufliche Simulationen.
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-sm">
                <thead className="bg-slate-50 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                  <tr>
                    <th className="px-5 py-3">Bereich</th>
                    <th className="px-5 py-3">Englisch</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {anglaisParSpecialite.map((row) => (
                    <tr key={row.domaine}>
                      <td className="px-5 py-3 font-medium text-slate-800">{row.domaine}</td>
                      <td className="px-5 py-3 text-slate-600">{row.angle}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Immersions et développement personnel */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl">
              <Image
                src="/images/documents/v3-image2.jpg"
                alt="Studierende von ABS, die gemeinsam an einem Projekt arbeiten"
                width={800}
                height={560}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Immersionen, Projekte und Persönlichkeitsentwicklung
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                Immersionen und pädagogische Ausflüge ergänzen das Lernen, indem sie die Studierenden mit den
                Realitäten von Unternehmen, Institutionen, Laboratorien, Baustellen, Medien, internationalen
                Organisationen und anderen Berufsfeldern konfrontieren. Sofern die Bedingungen es erlauben,
                integrieren diese Aktivitäten Übungen auf Englisch: Präsentation einer Organisation, Gespräch mit
                einem Fachmann, Informationssammlung, mündliche Wiedergabe oder Abfassung eines zweisprachigen
                Berichts.
              </p>
              <p className="mt-4 leading-7 text-slate-600">
                Das pädagogische Modell von ABS verbindet die Beherrschung des Wissens mit der Entwicklung der
                Persönlichkeit, des Verantwortungsbewusstseins und der Eigeninitiative. Workshops zu Führung,
                öffentlichem Auftreten, Verhandlung, Unternehmertum, Berufsethik, Projektmanagement und
                Bürgerlichkeit finden auf Französisch und schrittweise auch auf Englisch statt.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button asChild className="bg-blue-700 hover:bg-blue-800">
                  <Link href="/academics/programs">
                    Unsere Studiengänge entdecken <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-blue-700 bg-transparent text-blue-700 hover:bg-blue-50 hover:text-blue-800"
                >
                  <Link href="/admissions">Meine Bewerbung vorbereiten</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="bg-blue-950 py-14 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Ein kohärentes Ganzes im Dienst des Erfolgs</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-blue-100">
            An ABS bilden die Zweisprachigkeit Französisch-Englisch, die angewandten Projekte, die Verteidigungen,
            die Immersionen, die pädagogischen Ausflüge und die Persönlichkeitsentwicklung ein kohärentes Ganzes im
            Dienst des akademischen Erfolgs und der Beschäftigungsfähigkeit. Absolventinnen und Absolventen
            ausbilden, die in ihrer Spezialität kompetent sind, auf Französisch und Englisch arbeiten können, ihre
            Ideen mit Selbstsicherheit verteidigen und eine panafrikanische Entwicklungsvision vertreten.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-cyan-400 text-slate-950 hover:bg-cyan-300">
              <Link href="/apply">Jetzt bewerben</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white">
              <Link href="/contact">Mit dem ABS-Team sprechen</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
