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
  title: "الأسئلة الشائعة | ABS",
  description: "إجابات عن الأسئلة المتكررة حول ABS — African Business School: الموقع، التكوين، القبول، الرسوم، المنح، اللغات، التدريبات وجهات الاتصال الرسمية بباماكو.",
  path: "/faq",
  locale: "ar",
})

// Questions et réponses — document V3, §12 (11 paires)
const faqs = [
  {
    question: "أين تقع ABS؟",
    answer:
      "تقع ABS — African Business School في حمدلاي ACI 2000، Rue 338, Porte 06، بباماكو، في مالي.",
  },
  {
    question: "كيف أعرف البرامج التكوينية المفتوحة هذا العام؟",
    answer:
      "اطلعوا على كتالوغ العودة الدراسية أو اتصلوا بالإدارة. ويجب أن تكون المسارات المعروضة هي المفتوحة فعلاً للعام الأكاديمي المعني.",
  },
  {
    question: "كيف أترشّح؟",
    answer:
      "اتصلوا بالإدارة للتحقق من شروط الالتحاق والقائمة الرسمية للوثائق وشكليات تقديم الملف.",
  },
  {
    question: "ما هي الرسوم الدراسية؟",
    answer:
      "تختلف الرسوم حسب البرنامج والعام الأكاديمي. اطلعوا على الجدول الرسمي المؤرَّخ أو اطلبوا تأكيداً من الإدارة قبل أي دفع.",
  },
  {
    question: "هل تقدم ABS منحاً دراسية؟",
    answer:
      "إمكانات المنح أو التخفيضات، عندما تكون متوفرة، تُعلن مع معاييرها ومدة صلاحيتها. ولا تُضمن إلا بعد قرار رسمي.",
  },
  {
    question: "هل تتضمن الحصص تطبيقاً عملياً؟",
    answer:
      "تهدف المنهجية البيداغوجية إلى الجمع بين المعارف والتطبيقات والمشاريع والحالات العملية وفق البرامج التكوينية. والتشكيلات الدقيقة واردة في التصميم البيداغوجي لكل مسار.",
  },
  {
    question: "هل تُدرَّس اللغة الإنجليزية؟",
    answer:
      "الإنجليزية منصوص عليها بوصفها كفاءة عرضية في التوجيه البيداغوجي لـ ABS. ويجب تأكيد الأحجام الساعية والتشكيلات لكل فصل دراسي في التصميم الرسمي.",
  },
  {
    question: "هل تُعرض اللغة الإسبانية؟",
    answer:
      "تُنظَّر الإسبانية بوصفها لغة مكملة لتخصص العلاقات والأعمال الدولية. ويجب تأكيد تنظيمها الدقيق من طرف الإدارة.",
  },
  {
    question: "هل التدريبات مضمونة؟",
    answer:
      "تعتمد التدريبات والانغماس المهني على متطلبات التكوين والتشكيلات المحددة وإمكانات الاستقبال. ويجب ألا تعِد ABS بوضم تلقائي.",
  },
  {
    question: "كيف أحصل على شهادة أو وثيقة إدارية؟",
    answer:
      "وجّهوا طلبكم إلى الإدارة عبر القنوات الرسمية مع توضيح الوثيقة المطلوبة والمعلومات الضرورية لمعالجتها.",
  },
  {
    question: "كيف أتواصل مع ABS؟",
    answer:
      "اتصلوا بالرقم +223 78 14 14 88، أو راسلوا abs.mail1290@gmail.com، أو استخدموا استمارة الاتصال في الموقع.",
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
            الأسئلة الشائعة
          </Badge>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            الأسئلة الشائعة
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-blue-100">
            إجابات عن الأسئلة الأكثر تكراراً حول ABS — African Business School: الموقع،
            التكوين، القبول، الرسوم، اللغات، التدريبات وجهات الاتصال.
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
            <h2 className="mb-2 text-lg font-bold text-blue-900">لم تجدوا إجابتكم؟</h2>
            <p className="mb-4 text-sm text-slate-600">
              اطلعوا على صفحة الاتصال للمعطيات الرسمية أو استخدموا استمارة «ليتم الاتصال بك»:
              سيجيبكم الفريق الإداري في أقرب الآجال.
            </p>
            <Link href="/contact">
              <Button className="bg-blue-700 text-white hover:bg-blue-900">
                الاتصال بـ ABS
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
