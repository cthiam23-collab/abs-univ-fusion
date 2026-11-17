"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, CheckCircle2, GraduationCap, Newspaper, Users } from "lucide-react"

const logoUrl = "/images/abs-logo.png"
const heroUrl = "/images/campus/IMG-20250212-WA0021.jpg"
const directorUrl = "/images/documents/dg-seance-travail.jpg"

const domains = [
  {
    title: "إدارة الأعمال",
    description: "الإدارة، المالية، التسويق، التنظيم، ريادة الأعمال وقيادة الأنشطة.",
    href: "/programs/business-administration",
  },
  {
    title: "هندسة المعلوماتية",
    description: "التطوير البرمجي، الأنظمة الرقمية، البيانات والتهيئة التدريجية لقضايا الذكاء الاصطناعي.",
    href: "/programs/engineering/computer-science",
  },
  {
    title: "هندسة الجيولوجيا والهندسة المدنية والتعدين",
    description: "فهم الموارد والمواد والمنشآت والمشاريع التقنية، مع الاهتمام بالسلامة والبيئة.",
    href: "/programs/geological-civil-mining-engineering",
  },
  {
    title: "العلاقات والأعمال الدولية",
    description: "تحليل القضايا الدولية، الدبلوماسية، التعاون، المؤسسات والتواصل بين الثقافات.",
    href: "/programs/international-relations",
  },
  {
    title: "الصحافة والاتصال",
    description: "المعلومات، التحرير، الاتصال، إنتاج المحتوى ووسائل الإعلام الرقمية.",
    href: "/programs/journalism-communication",
  },
]

const whyAbs = [
  "طموح قاري أفريقي: التعلّم انطلاقاً من واقع القارة والحوار مع العالم.",
  "بيداغوجيا موجهة نحو العمل: دراسات الحالة والمشاريع والعروض والمحاكاة وفق التوجيهات التعليمية.",
  "كفاءات عرضية: التواصل، اللغة الإنجليزية، الأدوات الرقمية، التطوير الشخصي والعمل الجماعي.",
  "ثقافة المسؤولية: الأخلاقية، الاحترافية، الاحترام ومراعاة قضايا التنمية المستدامة.",
  "بيئة إنسانية: علاقة قريبة تعزز التوجيه والإصغاء والانخراط.",
]

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const testimonials = [
    ["التكوين بصرامة، والكشف عن المواهب، وإعداد بناة أفريقيا الغد.", "سخنة مريم تيام", "المديرة العامة"],
    ["في ABS، نتعلم تحويل الأفكار إلى مشاريع مفيدة لمجتمعنا.", "عائشة ديارا", "طالبة في الإدارة"],
    ["المنهج العملي يجهزنا لنصبح قادة مسؤولين وفاعلين على أرض الواقع.", "مامادو تراوري", "خريج ABS"],
  ]

  return (
    <main id="top" className="overflow-hidden">
      {/* Bandeau principal — V3 §3.1 */}
      <section className="relative min-h-[620px] bg-slate-950 text-white">
        <img src={heroUrl} alt="حرم ABS — African Business School في باماكو" className="absolute inset-0 h-full w-full object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-blue-950/55" />
        <div className="container relative mx-auto flex min-h-[620px] items-center px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur">
              <img src={logoUrl} alt="شعار ABS" className="size-8 rounded-md object-contain" />
              <span>باماكو – العالم.</span>
            </div>
            <p className="mb-4 font-semibold uppercase tracking-[0.28em] text-cyan-300">بوابتكم إلى العالم</p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">ABS — African Business School</h1>
            <p className="mt-4 text-xl font-medium text-cyan-200 sm:text-2xl">الطموح الأفريقي، والآفاق الدولية.</p>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200">في باماكو، تحمل ABS رؤية للتعليم العالي تجمع بين المعارف والكفاءات العملية والانفتاح الدولي والمسؤولية. طموحنا: مرافقة الطلبة في بناء مشروعهم الأكاديمي والمهني، مع اهتمام خاص بواقعيات أفريقيا وتحولات العالم.</p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Button asChild size="lg" className="bg-cyan-400 text-slate-950 hover:bg-cyan-300"><Link href="/academics/programs">اكتشف برامجنا التكوينية <ArrowRight className="ml-2 size-4" /></Link></Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 bg-white/5 bg-transparent text-white hover:bg-white/15"><Link href="/apply">جهّز ملف ترشحك</Link></Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 bg-white/5 bg-transparent text-white hover:bg-white/15"><Link href="/contact">تواصل مع ABS</Link></Button>
            </div>
          </div>
        </div>
      </section>

      {/* Bloc de présentation — V3 §3.2 */}
      <section className="border-b bg-white py-20"><div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-semibold uppercase tracking-[0.2em] text-blue-700">تقديم</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">تعلّم، تدرّب، ابنِ مستقبلك</h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">اختيار برنامج تكويني هو اختيار اتجاه. في ABS، نريد مساعدة كل طالب على فهم قضايا مجاله، وتطوير مناهج عمل متينة، وتحويل مكتسباته تدريجياً إلى كفاءات قابلة للتعبئة. صُممت التدريس لتجعل الأساسيات ودراسات الحالة والمشاريع والتعرف على العالم المهني في حوار متبادل، وفق التشكيلات المحددة لكل برنامج تكويني.</p>
        </div>
      </div></section>

      {/* Bloc « Pourquoi ABS ? » — V3 §3.3 */}
      <section className="bg-slate-50 py-20"><div className="container mx-auto px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-center">
          <div><p className="font-semibold uppercase tracking-[0.2em] text-blue-700">لماذا ABS؟</p><h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">جامعة أفريقية موجهة نحو العمل.</h2><p className="mt-5 leading-7 text-slate-600">تكوين يتسم بالصرامة، متجذر في الواقعيات الأفريقية ومنفتح على الكفاءات والمهن والقضايا الدولية.</p><ul className="mt-7 space-y-4">{whyAbs.map(item => <li key={item} className="flex gap-3 text-sm font-medium text-slate-700"><CheckCircle2 className="size-5 shrink-0 text-cyan-600" />{item}</li>)}</ul><Button asChild variant="outline" className="mt-8"><Link href="/about/mission">رؤيتنا وقيمنا <ArrowRight className="ml-2 size-4" /></Link></Button></div>
          <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl"><img src={directorUrl} alt="سخنة مريم تيام، المديرة العامة لـ ABS — African Business School" className="h-[420px] w-full object-cover object-top" /><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 to-transparent p-7 pt-24 text-white"><p className="font-semibold">سخنة مريم تيام</p><p className="text-sm text-slate-200">المديرة العامة</p></div></div>
        </div>
      </div></section>

      {/* Nos domaines de formation — V3 §3.4 */}
      <section className="bg-white py-20"><div className="container mx-auto px-6 lg:px-8"><div className="flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><p className="font-semibold uppercase tracking-[0.2em] text-blue-700">مجالاتنا التكوينية</p><h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">خمسة مجالات، وصرامة واحدة.</h2></div><Link href="/academics/programs" className="inline-flex items-center font-semibold text-blue-700 hover:text-blue-900">الاطلاع على جميع البرامج التكوينية <ArrowRight className="ml-2 size-4" /></Link></div><p className="mt-5 max-w-3xl leading-7 text-slate-600">تطوّر ABS مسارات في مجالات الإدارة والهندسة والرقمنة والعلاقات الدولية والاتصال. تُعرض قائمة المسارات المفتوحة فعلياً لكل عودة دراسية ويحدّثها الإدارة.</p><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{domains.map(domain => <Card key={domain.title} className="border-slate-200 transition-shadow hover:shadow-lg"><CardHeader><div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-700"><GraduationCap className="size-4" />الإجازة (ليسانس) · الماجستير</div><CardTitle className="text-xl">{domain.title}</CardTitle></CardHeader><CardContent><p className="leading-7 text-slate-600">{domain.description}</p><Button asChild variant="link" className="mt-3 h-auto px-0 text-blue-700"><Link href={domain.href}>معرفة المزيد <ArrowRight className="ml-2 size-4" /></Link></Button></CardContent></Card>)}</div></div></section>

      {/* Bloc Admissions — V3 §3.5 */}
      <section className="bg-blue-950 py-20 text-white"><div className="container mx-auto px-6 text-center lg:px-8"><GraduationCap className="mx-auto size-10 text-cyan-300" /><h2 className="mt-5 text-4xl font-bold">مشروعك يبدأ من هنا</h2><p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-blue-100">هل ترغب في الانضمام إلى ABS؟ اكتشف البرامج التكوينية المعروضة، وتحقق من شروط الالتحاق، واتصل بالفريق لتوجيهك نحو المراحل المناسبة لحالتك. الشروط والوثائق والتواريخ والرسوم المطبقة هي تلك التي تعلنها الإدارة رسمياً للسنة الأكاديمية المعنية.</p><div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row"><Button asChild size="lg" className="bg-cyan-400 text-slate-950 hover:bg-cyan-300"><Link href="/admissions">فهم عمليات القبول</Link></Button><Button asChild size="lg" variant="outline" className="border-white/40 bg-transparent text-white hover:bg-white/10"><Link href="/contact">الاتصال بالإدارة</Link></Button></div></div></section>

      {/* Vie de campus et actualités — V3 §3.6 */}
      <section className="bg-slate-50 py-20"><div className="container mx-auto px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <p className="font-semibold uppercase tracking-[0.2em] text-blue-700">حياة الحرم الجامعي والمستجدات</p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">تُبنى الحياة في ABS أيضاً خارج أوقات الدروس.</h2>
            <p className="mt-5 leading-7 text-slate-600">المؤتمرات واللقاءات والزيارات والمشاريع والفعاليات والمبادرات الطلابية تسهم في توسيع الآفاق والاحتراف. تعرض مستجدات الموقع الأنشطة المنجزة فعلياً أو المبرمجة رسمياً فقط.</p>
            <Button asChild variant="outline" className="mt-8"><Link href="/about/news">الاطلاع على المستجدات <Newspaper className="ml-2 size-4" /></Link></Button>
          </div>
          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <Newspaper className="size-8 text-blue-700" />
            <h3 className="mt-4 text-xl font-semibold text-slate-950">متابعة حياة المؤسسة</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">تجد الفعاليات والمشاريع الطلابية ومبادرات مجتمع ABS في قسم المستجدات.</p>
          </div>
        </div>
      </div></section>

      {/* Témoignages */}
      <section className="bg-white py-20"><div className="container mx-auto px-6 lg:px-8"><div className="mx-auto max-w-3xl text-center"><Users className="mx-auto size-8 text-blue-700" /><h2 className="mt-4 text-3xl font-bold text-slate-950">مجتمع ABS في كلمات قليلة</h2><blockquote className="mt-8 text-xl leading-9 text-slate-700">“{testimonials[activeTestimonial][0]}”</blockquote><p className="mt-5 font-semibold text-slate-950">{testimonials[activeTestimonial][1]}</p><p className="text-sm text-slate-500">{testimonials[activeTestimonial][2]}</p><div className="mt-7 flex justify-center gap-2">{testimonials.map((_, index) => <button key={index} aria-label={`عرض الشهادة رقم ${index + 1}`} onClick={() => setActiveTestimonial(index)} className={`h-2 rounded-full transition-all ${activeTestimonial === index ? "w-8 bg-blue-700" : "w-2 bg-slate-300"}`} />)}</div></div></div></section>

      {/* Appel final — V3 §3.7 */}
      <section className="bg-slate-950 py-20 text-white"><div className="container mx-auto px-6 text-center lg:px-8"><h2 className="text-4xl font-bold">طموحك يستحق مشروعاً متيناً.</h2><p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">تواصل مع ABS لاكتشاف المسارات المتاحة والحصول على معلومات موثوقة حول توجيهك.</p><div className="mt-8"><Button asChild size="lg" className="bg-cyan-400 text-slate-950 hover:bg-cyan-300"><Link href="/contact">تحدث إلى فريق ABS <ArrowRight className="ml-2 size-4" /></Link></Button></div></div></section>
    </main>
  )
}
