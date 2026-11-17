import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import { FaqJsonLd } from "@/components/seo-jsonld"
import Link from "next/link"
import { MessageCircleQuestion, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata: Metadata = buildMetadata({
  title: "Häufig gestellte Fragen | ABS",
  description: "Antworten auf häufige Fragen zur ABS — African Business School: Standort, Studiengänge, Zulassung, Gebühren, Stipendien, Sprachen, Praktika und offizielle Kontakte in Bamako.",
  path: "/faq",
  locale: "de",
})

// Questions et réponses — document V3, §12 (11 paires)
const faqs = [
  {
    question: "Wo befindet sich ABS?",
    answer:
      "Die ABS — African Business School befindet sich in Hamdallaye ACI 2000, Rue 338, Porte 06, in Bamako, Mali.",
  },
  {
    question: "Wie erfahre ich, welche Studiengänge dieses Jahr geöffnet sind?",
    answer:
      "Sehen Sie sich den Katalog des Studienjahres an oder kontaktieren Sie die Verwaltung. Die ausgewiesenen Studiengänge müssen diejenigen sein, die für das betreffende akademische Jahr tatsächlich geöffnet sind.",
  },
  {
    question: "Wie kann man sich bewerben?",
    answer:
      "Kontaktieren Sie die Verwaltung, um die Zugangsbedingungen, die offizielle Liste der Unterlagen und die Modalitäten der Dossiereinreichung zu prüfen.",
  },
  {
    question: "Wie hoch sind die Studiengebühren?",
    answer:
      "Die Gebühren variieren je nach Studiengang und akademischem Jahr. Sehen Sie sich den datierten offiziellen Tarif an oder fordern Sie vor jeder Zahlung eine Bestätigung von der Verwaltung an.",
  },
  {
    question: "Bietet ABS Stipendien an?",
    answer:
      "Möglichkeiten von Stipendien oder Ermäßigungen werden, sofern sie existieren, mit ihren Kriterien und ihrer Gültigkeitsdauer angekündigt. Gesichert sind sie erst nach einer offiziellen Entscheidung.",
  },
  {
    question: "Enthalten die Kurse Praxisanteile?",
    answer:
      "Der pädagogische Ansatz zielt darauf ab, das Wissen je nach Studiengang mit Anwendungen, Projekten und Praxisübungen zu verbinden. Die genauen Modalitäten sind im Curriculum jedes Studiengangs festgelegt.",
  },
  {
    question: "Wird Englisch unterrichtet?",
    answer:
      "Englisch ist als überfachliche Kompetenz in der pädagogischen Ausrichtung von ABS vorgesehen. Die Stundenumfänge und Modalitäten pro Semester sind im offiziellen Curriculum zu bestätigen.",
  },
  {
    question: "Wird Spanisch angeboten?",
    answer:
      "Spanisch ist als Ergänzungssprache für Internationale Beziehungen und Internationale Angelegenheiten vorgesehen. Seine genaue Organisation muss von der Verwaltung bestätigt werden.",
  },
  {
    question: "Sind Praktika garantiert?",
    answer:
      "Praktika und Immersionen hängen von den Anforderungen der Ausbildung, den definierten Modalitäten und den Aufnahmemöglichkeiten ab. ABS darf keine automatische Vermittlung versprechen.",
  },
  {
    question: "Wie erhält man eine Bescheinigung oder ein Verwaltungsdokument?",
    answer:
      "Richten Sie Ihren Antrag über die offiziellen Kanäle an die Verwaltung und geben Sie dabei klar das gewünschte Dokument sowie die für dessen Bearbeitung notwendigen Informationen an.",
  },
  {
    question: "Wie kann man ABS kontaktieren?",
    answer:
      "Rufen Sie die +223 78 14 14 88 an, schreiben Sie an abs.mail1290@gmail.com oder nutzen Sie das Kontaktformular der Website.",
  },
]

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <FaqJsonLd items={faqs} />

      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 py-20 text-white">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 border border-cyan-400/40 bg-cyan-400/10 text-cyan-400">
            <MessageCircleQuestion className="mr-1 h-3.5 w-3.5" />
            FAQ
          </Badge>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Häufig gestellte Fragen
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-blue-100">
            Die Antworten auf die am häufigsten gestellten Fragen zur ABS — African Business School: Standort, Studiengänge, Zulassung, Gebühren, Sprachen, Praktika und Kontakte.
          </p>
        </div>
      </section>

      {/* Questions / réponses — document V3, §12 */}
      <section className="container mx-auto py-16">
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`question-${index + 1}`}>
                <AccordionTrigger className="text-left font-semibold text-blue-900 hover:text-blue-700 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6 text-center">
            <h2 className="mb-2 text-lg font-bold text-blue-900">Ihre Antwort war nicht dabei?</h2>
            <p className="mb-4 text-sm text-slate-600">
              Sehen Sie sich die Kontaktseite für die offiziellen Kontaktdaten an oder nutzen Sie das Formular
              „Rückkontakt wünschen“: Das Verwaltungsteam antwortet Ihnen schnellstmöglich.
            </p>
            <Link href="/contact">
              <Button className="bg-blue-700 text-white hover:bg-blue-900">
                ABS kontaktieren
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
