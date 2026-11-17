import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Lightbulb, Recycle, Rocket } from "lucide-react"

export const metadata: Metadata = buildMetadata({
  title: "الابتكار والمشاريع وريادة الأعمال | ABS",
  description: "في ABS، يُتعلم الابتكار وريادة الأعمال بالفعل: مشاريع طلابية، ومقاربة ريادية، والتزام مستدام في خدمة القارة.",
  path: "/innovation",
  locale: "ar",
})

const volets = [
  {
    icon: Lightbulb,
    title: "من الفكرة إلى المشروع",
    text: "تمكّن ريادة الأعمال والابتكار الطلبة من تعلم ملاحظة حاجة، وصياغة حل، ودراسة جدواه، وعرض مشروع. وقد تتعلق الأعمال بالشركات أو الخدمات أو التقنيات أو التحديات الاجتماعية والبيئية للقارة.",
  },
  {
    icon: Rocket,
    title: "ABS Startup Lab",
    text: "تعرض ABS آليتها في مرافقة الريادة تحت اسم «ABS Startup Lab». وتوضح الصفحة ما يُعرض فعلاً: ورشات، وإرشاد، ومرافقة مشاريع، والولوج إلى موارد أو ربط بالشبكات. ولا يُعلن أي تمويل تلقائي ولا أي نتيجة غير موثقة.",
  },
  {
    icon: Recycle,
    title: "التزام مستدام",
    text: "ترغب ABS في تنمية الوعي بقضايا التنمية المستدامة والاقتصاد المسؤول والابتكار المفيد. وتحدد المشاريع المعروضة حالة تقدمها وأهدافها وشركاءها المؤكدين والنتائج المقاسة فعلاً.",
  },
]

export default function InnovationPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-blue-950 py-20 text-white">
        <Image
          src="/images/documents/v3-image2.jpg"
          alt="طلبة ABS يعملون معاً في مشروع"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/85 to-blue-900/60" />
        <div className="container relative mx-auto px-6">
          <p className="font-semibold uppercase tracking-[0.25em] text-cyan-300">الابتكار وريادة الأعمال</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            تحويل الأفكار إلى مشاريع مفيدة
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-100">
            ملاحظة حاجة، وصياغة حل، ودراسة الجدوى، وعرض مشروع: منهج يُتعلم بالفعل، في خدمة الشركات
            والتقنيات وتحديات القارة.
          </p>
        </div>
      </section>

      {/* Les trois volets */}
      <section className="container mx-auto px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-slate-900">ثلاثة أجزاء وصرامة واحدة في الواقعية</h2>
          <p className="mt-3 leading-7 text-slate-600">
            المشاريع المعروضة تقابل أنشطة مؤطَّرة فعلاً. ما يُعرض يوصف كما يعمل؛ وما هو في مرحلة
            الإعداد يُقدَّم على هذا الأساس.
          </p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {volets.map(({ icon: Icon, title, text }) => (
            <Card key={title} className="border-slate-200 transition-shadow hover:shadow-lg">
              <CardContent className="p-7">
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-cyan-50">
                  <Icon className="size-6 text-cyan-700" />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-slate-900">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Encadrement et critères */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="font-semibold uppercase tracking-[0.2em] text-blue-700">إطار العمل</p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900">
                مشاريع مدعومة بالتدريس والميدان
              </h2>
              <p className="mt-5 leading-7 text-slate-600">
                مشاريع نهاية الوحدة، ودراسات الحالة، والمشاريع الموجَّهة، والانغماس المهني، والتدريبات
                تشكل المجالات الرئيسية لممارسة المنهج الريادي في ABS. وتُشرح أهدافها ومعايير تقييمها
                ومواعيدها في بداية كل وحدة تعليمية، وفقاً للتصاميم الرسمية لكل برنامج تكويني.
              </p>
              <p className="mt-4 leading-7 text-slate-600">
                يمكن للطلبة الراغبين في تطوير مشروع نحو إنشاء نشاط أن يستفيدوا من المرافقة التي توفرها
                المؤسسة: وتُبلَّغ شكليات الولوج العملية والمسؤولون والخدمات المتاحة فعلاً من طرف
                الإدارة.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button asChild className="bg-blue-700 hover:bg-blue-800">
                  <Link href="/academics/programs">
                    اكتشف برامجنا التكوينية <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-blue-700 bg-transparent text-blue-700 hover:bg-blue-50 hover:text-blue-800"
                >
                  <Link href="/contact">اقترح مشروعاً أو شراكة</Link>
                </Button>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
              <Image
                src="/images/documents/v3-image1.png"
                alt="طلبة ABS في الحرم الجامعي"
                width={800}
                height={560}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-950 py-14 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">فكرة، ومشروع، وطموح؟</h2>
          <p className="mx-auto mt-3 max-w-2xl text-blue-100">
            تبادلوا الحوار مع فريق ABS لاكتشاف المرافقة المعروضة فعلاً ومسالك التعاون مع الشركات
            والمؤسسات.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-cyan-400 text-slate-950 hover:bg-cyan-300">
              <Link href="/contact">الاتصال بفريق ABS</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/international/partnerships">الشركات والشركاء</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
