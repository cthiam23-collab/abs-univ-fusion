import type { Metadata } from "next"
import Link from "next/link"
import { buildMetadata } from "@/lib/seo"
import { FaqJsonLd } from "@/components/seo-jsonld"
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
  title: "Foire aux questions | ABS",
  description:
    "Réponses aux questions fréquentes sur ABS — African Business School : localisation, formations, admissions, frais, bourses, langues, stages et contacts officiels à Bamako.",
  path: "/faq",
})

// Questions et réponses — document V3, §12 (11 paires)
const faqs = [
  {
    question: "Où se trouve ABS ?",
    answer:
      "ABS — African Business School est située à Hamdallaye ACI 2000, Rue 338, Porte 06, à Bamako, au Mali.",
  },
  {
    question: "Comment connaître les formations ouvertes cette année ?",
    answer:
      "Consultez le catalogue de la rentrée ou contactez l'administration. Les parcours affichés doivent être ceux effectivement ouverts pour l'année académique concernée.",
  },
  {
    question: "Comment candidater ?",
    answer:
      "Contactez l'administration afin de vérifier les conditions d'accès, la liste officielle des pièces et les modalités de dépôt du dossier.",
  },
  {
    question: "Quels sont les frais de scolarité ?",
    answer:
      "Les frais varient selon le programme et l'année académique. Consultez le barème officiel daté ou demandez confirmation à l'administration avant tout paiement.",
  },
  {
    question: "ABS propose-t-elle des bourses ?",
    answer:
      "Les possibilités de bourses ou de réduction, lorsqu'elles existent, sont annoncées avec leurs critères et leur période de validité. Elles ne sont acquises qu'après décision officielle.",
  },
  {
    question: "Les cours comprennent-ils de la pratique ?",
    answer:
      "L'approche pédagogique vise à associer les connaissances à des applications, projets et mises en situation selon les formations. Les modalités exactes figurent dans la maquette de chaque parcours.",
  },
  {
    question: "L'anglais est-il enseigné ?",
    answer:
      "L'anglais est prévu comme compétence transversale dans l'orientation pédagogique de ABS. Les volumes et modalités par semestre doivent être confirmés dans la maquette officielle.",
  },
  {
    question: "L'espagnol est-il proposé ?",
    answer:
      "L'espagnol est envisagé comme langue complémentaire pour Relations et Affaires Internationales. Son organisation exacte doit être confirmée par l'administration.",
  },
  {
    question: "Les stages sont-ils garantis ?",
    answer:
      "Les stages et immersions dépendent des exigences de la formation, des modalités définies et des possibilités d'accueil. ABS ne doit pas promettre un placement automatique.",
  },
  {
    question: "Comment obtenir une attestation ou un document administratif ?",
    answer:
      "Adressez votre demande à l'administration par les canaux officiels et indiquez clairement le document demandé ainsi que les informations nécessaires à son traitement.",
  },
  {
    question: "Comment contacter ABS ?",
    answer:
      "Appelez le +223 78 14 14 88, écrivez à abs.mail1290@gmail.com ou utilisez le formulaire de contact du site.",
  },
]

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Données structurées FAQPage — document V3, §12 */}
      <FaqJsonLd items={faqs} />
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 py-20 text-white">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 border border-cyan-400/40 bg-cyan-400/10 text-cyan-400">
            <MessageCircleQuestion className="mr-1 h-3.5 w-3.5" />
            FAQ
          </Badge>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Foire aux questions
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-blue-100">
            Les réponses aux questions les plus fréquemment posées sur ABS — African Business School: localisation, formations, admissions, frais, langues, stages et contacts.
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
            <h2 className="mb-2 text-lg font-bold text-blue-900">Vous n&apos;avez pas trouvé votre réponse ?</h2>
            <p className="mb-4 text-sm text-slate-600">
              Consultez la page Contact pour les coordonnées officielles ou utilisez le formulaire
              « Être recontacté » : l&apos;équipe administrative vous répondra dans les meilleurs
              délais.
            </p>
            <Link href="/contact">
              <Button className="bg-blue-700 text-white hover:bg-blue-900">
                Contacter ABS
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
