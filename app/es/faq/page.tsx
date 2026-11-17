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
  title: "Preguntas frecuentes | ABS",
  description: "Respuestas a las preguntas frecuentes sobre la ABS — African Business School : localización, formaciones, admisiones, tasas, becas, idiomas, prácticas y contactos oficiales en Bamako.",
  path: "/faq",
  locale: "es",
})

// Preguntas y respuestas — documento V3, §12 (11 pares)
const faqs = [
  {
    question: "¿Dónde se encuentra ABS?",
    answer:
      "La ABS — African Business School está situada en Hamdallaye ACI 2000, Rue 338, Porte 06, en Bamako, en Mali.",
  },
  {
    question: "¿Cómo conocer las formaciones abiertas este año?",
    answer:
      "Consulte el catálogo del curso académico o contacte con la administración. Los itinerarios expuestos deben ser los efectivamente abiertos para el curso académico correspondiente.",
  },
  {
    question: "¿Cómo candidatarse?",
    answer:
      "Contacte con la administración a fin de verificar las condiciones de acceso, la lista oficial de los documentos y las modalidades de presentación del expediente.",
  },
  {
    question: "¿Cuáles son las tasas de matrícula?",
    answer:
      "Las tasas varían según el programa y el curso académico. Consulte el baremo oficial datado o solicite la confirmación a la administración antes de cualquier pago.",
  },
  {
    question: "¿ABS propone becas?",
    answer:
      "Las posibilidades de becas o de reducción, cuando existen, se anuncian con sus criterios y su periodo de validez. Solo se adquieren tras una decisión oficial.",
  },
  {
    question: "¿Las clases incluyen práctica?",
    answer:
      "El enfoque pedagógico busca asociar los conocimientos con aplicaciones, proyectos y simulaciones prácticas según las formaciones. Las modalidades exactas figuran en el plan de cada itinerario.",
  },
  {
    question: "¿Se enseña inglés?",
    answer:
      "El inglés está previsto como competencia transversal en la orientación pedagógica de ABS. Los volúmenes y las modalidades por semestre deben confirmarse en el plan oficial.",
  },
  {
    question: "¿Se propone español?",
    answer:
      "El español está previsto como lengua complementaria para Relaciones y Asuntos Internacionales. Su organización exacta debe ser confirmada por la administración.",
  },
  {
    question: "¿Las prácticas están garantizadas?",
    answer:
      "Las prácticas y las inmersiones dependen de las exigencias de la formación, de las modalidades definidas y de las posibilidades de acogida. ABS no debe prometer una colocación automática.",
  },
  {
    question: "¿Cómo obtener un certificado o un documento administrativo?",
    answer:
      "Dirija su solicitud a la administración por los canales oficiales e indique claramente el documento solicitado así como las informaciones necesarias para su tramitación.",
  },
  {
    question: "¿Cómo contactar con ABS?",
    answer:
      "Llame al +223 78 14 14 88, escriba a abs.mail1290@gmail.com o utilice el formulario de contacto del sitio.",
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
            Preguntas frecuentes
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-blue-100">
            Las respuestas a las preguntas más frecuentes sobre la ABS — African Business School: localización, formaciones, admisiones, tasas, idiomas, prácticas y contactos.
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
            <h2 className="mb-2 text-lg font-bold text-blue-900">¿No ha encontrado su respuesta?</h2>
            <p className="mb-4 text-sm text-slate-600">
              Consulte la página de Contacto para las coordenadas oficiales o utilice el formulario
              « Que la contacten » : el equipo administrativo le responderá en el menor plazo
              posible.
            </p>
            <Link href="/contact">
              <Button className="bg-blue-700 text-white hover:bg-blue-900">
                Contactar con ABS
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
