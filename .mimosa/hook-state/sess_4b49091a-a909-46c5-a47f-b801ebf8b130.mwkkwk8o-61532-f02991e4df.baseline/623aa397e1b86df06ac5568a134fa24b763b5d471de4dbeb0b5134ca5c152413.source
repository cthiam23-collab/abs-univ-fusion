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
  title: "Frequently asked questions | ABS",
  description: "Answers to frequently asked questions about ABS — African Business School: location, programmes, admissions, fees, scholarships, languages, internships and official contacts in Bamako.",
  path: "/faq",
  locale: "en",
})

// Questions and answers — document V3, §12 (11 pairs)
const faqs = [
  {
    question: "Where is ABS located?",
    answer:
      "ABS — African Business School is located at Hamdallaye ACI 2000, Rue 338, Porte 06, in Bamako, Mali.",
  },
  {
    question: "How can I find out which programmes are open this year?",
    answer:
      "Consult the intake catalogue or contact the administration. The pathways displayed must be those actually open for the relevant academic year.",
  },
  {
    question: "How do I apply?",
    answer:
      "Contact the administration to verify the entry requirements, the official list of documents and the arrangements for submitting your application file.",
  },
  {
    question: "What are the tuition fees?",
    answer:
      "Fees vary depending on the programme and the academic year. Consult the dated official fee schedule or ask the administration for confirmation before making any payment.",
  },
  {
    question: "Does ABS offer scholarships?",
    answer:
      "Scholarship or reduction opportunities, where they exist, are announced with their criteria and period of validity. They are only granted after an official decision.",
  },
  {
    question: "Do the courses include practical work?",
    answer:
      "The educational approach aims to combine knowledge with applications, projects and hands-on scenarios depending on the programme. The exact arrangements are set out in the curriculum of each pathway.",
  },
  {
    question: "Is English taught?",
    answer:
      "English is planned as a transversal skill in ABS's educational orientation. Volumes and arrangements per semester must be confirmed in the official curriculum.",
  },
  {
    question: "Is Spanish offered?",
    answer:
      "Spanish is considered as a complementary language for International Relations and Affairs. Its exact organisation must be confirmed by the administration.",
  },
  {
    question: "Are internships guaranteed?",
    answer:
      "Internships and immersions depend on the requirements of the programme, the arrangements defined and the host opportunities available. ABS must not promise automatic placement.",
  },
  {
    question: "How can I obtain a certificate or an administrative document?",
    answer:
      "Send your request to the administration through the official channels, clearly stating the document requested and the information needed to process it.",
  },
  {
    question: "How can I contact ABS?",
    answer:
      "Call +223 78 14 14 88, write to abs.mail1290@gmail.com or use the contact form on the website.",
  },
]

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 py-20 text-white">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 border border-cyan-400/40 bg-cyan-400/10 text-cyan-400">
            <MessageCircleQuestion className="mr-1 h-3.5 w-3.5" />
            FAQ
          </Badge>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Frequently asked questions
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-blue-100">
            Answers to the questions most frequently asked about ABS — African Business School: location, programmes, admissions, fees, languages, internships and contacts.
          </p>
        </div>
      </section>

      <FaqJsonLd items={faqs} />

      {/* Questions / answers — document V3, §12 */}
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
            <h2 className="mb-2 text-lg font-bold text-blue-900">Haven't found your answer?</h2>
            <p className="mb-4 text-sm text-slate-600">
              See the Contact page for the official contact details or use the "Get a callback"
              form: the administrative team will reply as soon as possible.
            </p>
            <Link href="/contact">
              <Button className="bg-blue-700 text-white hover:bg-blue-900">
                Contact ABS
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
