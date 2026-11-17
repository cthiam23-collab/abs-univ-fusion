import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Globe2,
  Handshake,
  Lightbulb,
  Quote,
  Target,
  Users,
} from "lucide-react"

export const metadata: Metadata = buildMetadata({
  title: "الرسالة والرؤية | ABS — African Business School",
  description: "رؤية ورسالة ABS: المساهمة في بروز أفريقيا تتكوّن وتبتكر وتشتغل، عبر تطوير المعارف والكفاءات العملية والصفات الإنسانية للمتعلمين.",
  path: "/about/mission",
  locale: "ar",
})

// Les cinq axes de la mission (source : V3 §4.3, textes officiels).
const missionAxes = [
  {
    icon: BookOpen,
    title: "النقل",
    text: "نقل معارف منظمة وملائمة.",
  },
  {
    icon: Target,
    title: "التطوير",
    text: "تطوير التحليل وحل المشكلات والقدرة على التواصل.",
  },
  {
    icon: Lightbulb,
    title: "التشجيع",
    text: "تشجيع المشاريع والمبادرة وروح الفريق وثقافة النتيجة.",
  },
  {
    icon: Globe2,
    title: "التعزيز",
    text: "تعزيز الانفتاح اللغوي والرقمي وبين الثقافات.",
  },
  {
    icon: Handshake,
    title: "الترسيخ",
    text: "ترسيخ الأخلاقيات والمسؤولية والمساهمة في التنمية.",
  },
]

// Articulation excellence académique ↔ pratique professionnelle (source : brochure institutionnelle CM1, §2).
const professionnalisation = [
  "دراسات الحالة، الأعمال التطبيقية، المشاريع، المحاكاة المهنية والأبحاث التطبيقية",
  "توجيه مرجعي قدره 40% نظري و60% تطبيقي",
  "كفاءات عرضية: اللغة الإنجليزية، الثقافة الرقمية، القيادة، الأخلاقيات المهنية والتطوير الشخصي",
  "انفتاح على الشركات والمؤسسات والقضايا الدولية",
]

export default function MissionPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-blue-950 py-20 text-white">
        <Image
          src="/images/documents/v3-image1.png"
          alt="طلبة ABS في الحرم الجامعي"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/85 to-blue-900/60" />
        <div className="container relative mx-auto px-6">
          <p className="font-semibold uppercase tracking-[0.25em] text-cyan-300">سبب وجودنا</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            رسالة ورؤية ABS — African Business School
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-100">
            تكوين الكفاءات، وتنمية العقول، والكشف عن الكنّات، وإعداد نساء ورجال ليصبحوا فاعلي تحول
            لأفريقيا وللعالم.
          </p>
        </div>
      </section>

      {/* Vision (V3 §4.2 — texte officiel) */}
      <section className="container mx-auto px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-semibold uppercase tracking-[0.2em] text-blue-700">رؤيتنا</p>
          <blockquote className="mt-5 border-l-4 border-cyan-400 pl-6 text-left text-2xl font-semibold leading-9 text-slate-900 md:text-3xl md:leading-10">
            « المساهمة في بروز أفريقيا تتكوّن وتبتكر وتشتغل وتشارك مساهمة كاملة في بناء معارف
            وحلول الغد. »
          </blockquote>
          <p className="mt-6 leading-7 text-slate-600">
            تستند هذه الرؤية إلى ربط أساسي بين التميز الأكاديمي، والاحتراف، والابتكار، والانفتاح
            الدولي، والمسؤولية المجتمعية، والتجذير الأفريقي.
          </p>
        </div>
      </section>

      {/* Mission (V3 §4.3 — texte officiel) */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-semibold uppercase tracking-[0.2em] text-blue-700">رسالتنا</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">خمسة محاور وطموح واحد</h2>
            <p className="mt-4 leading-7 text-slate-600">
              اقتراح مسارات للتعليم العالي تنمّي المعارف التخصصية والكفاءات العملية والاستقلالية
              الفكرية والصفات الإنسانية اللازمة للتطور الأكاديمي والمهني للمتعلمين.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {missionAxes.map(({ icon: Icon, title, text }) => (
              <Card key={title} className="border-slate-200 transition-shadow hover:shadow-lg">
                <CardContent className="p-7">
                  <span className="inline-flex size-12 items-center justify-center rounded-xl bg-cyan-50">
                    <Icon className="size-6 text-cyan-700" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-slate-900">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Excellence académique ↔ pratique professionnelle (CM1 §2) */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="font-semibold uppercase tracking-[0.2em] text-blue-700">على أرض الواقع</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              الجمع بين الصرامة الأكاديمية والتطبيق المهني
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              نريد الجمع بين الصرامة الأكاديمية والتطبيق المهني، وتنمية الكفاءات مع الازدهار
              الشخصي، والمعرفة مع القدرة على الفعل. طموحنا هو إعداد نساء ورجال قادرين على التفكير
              بصرامة، والاشتغال بجرأة، واتخاذ القرارات ببرؤية ثاقبة، وممارسة مسؤولياتهم بنزاهة.
            </p>
            <ul className="mt-7 space-y-4">
              {professionnalisation.map((item) => (
                <li key={item} className="flex gap-3 text-sm font-medium text-slate-700">
                  <CheckCircle2 className="size-5 shrink-0 text-cyan-600" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="bg-blue-700 hover:bg-blue-800">
                <Link href="/about/values">
                  اكتشف قيمنا <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-blue-700 bg-transparent text-blue-700 hover:bg-blue-50 hover:text-blue-800"
              >
                <Link href="/about/governance">القيادة والحوكمة</Link>
              </Button>
            </div>
          </div>

          {/* Mot de la Directrice Générale (brochure institutionnelle CM1) */}
          <div className="relative overflow-hidden rounded-3xl bg-blue-950 p-8 text-white shadow-xl">
            <Quote className="size-10 text-cyan-300" aria-hidden="true" />
            <div className="mt-5 flex items-start gap-5">
              <Image
                src="/images/documents/dg-seance-travail.jpg"
                alt="سخنة مريم تيام، المديرة العامة لـ ABS"
                width={96}
                height={96}
                className="h-24 w-24 shrink-0 rounded-2xl border-2 border-white/20 object-cover"
              />
              <blockquote className="text-xl leading-9">
                « التكوين بصرامة، والكشف عن المواهب، وإعداد بناة أفريقيا الغد. »
              </blockquote>
            </div>
            <p className="mt-6 font-semibold">سخنة مريم تيام</p>
            <p className="text-sm text-slate-300">المديرة العامة، ABS — African Business School</p>
            <div className="mt-6">
              <Button
                asChild
                variant="outline"
                className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                <Link href="/about/history">مسارنا</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-950 py-14 text-white">
        <div className="container mx-auto px-6 text-center">
          <Users className="mx-auto size-10 text-cyan-300" aria-hidden="true" />
          <h2 className="mt-4 text-3xl font-bold">هل أنت مستعد لكتابة فصلك الخاص؟</h2>
          <p className="mx-auto mt-3 max-w-2xl text-blue-100">
            انضم إلى مؤسسة تقدّر التميز والابتكار والالتزام.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-cyan-400 text-slate-950 hover:bg-cyan-300">
              <Link href="/apply">ترشّح الآن</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/contact">تحدث إلى فريق ABS</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
