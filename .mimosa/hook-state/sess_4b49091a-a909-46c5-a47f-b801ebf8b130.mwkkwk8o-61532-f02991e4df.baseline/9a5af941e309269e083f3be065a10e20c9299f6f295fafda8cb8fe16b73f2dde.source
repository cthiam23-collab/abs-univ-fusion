import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  Cpu,
  GraduationCap,
  Globe2,
  Languages,
  Mountain,
  Newspaper,
  Sprout,
} from "lucide-react"

export const metadata: Metadata = buildMetadata({
  title: "العرض التكويني | ABS",
  description: "العرض التكويني لـ ABS: خمس شهادات إجازة (ليسانس) (3 سنوات، 6 فصول دراسية، 180 رصيداً) موزعة على خمسة قطاعات وكتالوغ ماجستير تؤكده المديرية قبل إعلانها admissions مفتوحة.",
  path: "/academics/programs",
  locale: "ar",
})

const filieres = [
  {
    title: "إدارة الأعمال",
    intro:
      "فهم طريقة عمل المنظمات، وتحليل نتائجها، والمساهمة في التسيير والمالية والتسويق والموارد البشرية وتطوير الأنشطة.",
    duration: "الإجازة (ليسانس) · 3 سنوات · 6 فصول دراسية · 180 رصيداً",
    image: "/images/campus/IMG-20250212-WA0003.jpg",
    link: "/programs/business-administration",
    icon: Briefcase,
    modules: [
      "المحاسبة العامة والتحليلية",
      "مالية المؤسسات والتحليل المالي",
      "التسويق الأساسي والرقمي",
      "ريادة الأعمال وخطة العمل",
    ],
  },
  {
    title: "العلاقات والأعمال الدولية",
    intro:
      "تحليل الفاعلين والمؤسسات الدولية وموازين القوى، مع فهم واقعيات أفريقيا وانفتاح على الديناميات العالمية.",
    duration: "الإجازة (ليسانس) · 3 سنوات · 6 فصول دراسية · 180 رصيداً",
    image: "/images/documents/v3-image2.jpg",
    link: "/programs/international-relations",
    icon: Globe2,
    modules: [
      "القانون الدولي والمؤسسات",
      "الدبلوماسية والتفاوض",
      "التكامل الإقليمي والتعاون الأفريقي",
      "الإسبانية التدريجية وفق التصميم المعتمد",
    ],
  },
  {
    title: "الصحافة والاتصال",
    intro:
      "جمع المعلومات والتحقق منها وإنتاجها ونشرها، وتصميم اتصال المنظمات، مع احترام أخلاقيات المهنة وقانون المعلومات.",
    duration: "الإجازة (ليسانس) · 3 سنوات · 6 فصول دراسية · 180 رصيداً",
    image: "/images/campus/IMG-20250212-WA0016.jpg",
    link: "/programs/journalism-communication",
    icon: Newspaper,
    modules: [
      "أنواع الصحافة والتحرير",
      "التحقق من الأخبار وأخلاقيات المهنة",
      "الإنتاج المرئي والمونتاج وفق التجهيزات",
      "الصحافة الرقمية وشبكات التواصل الاجتماعي",
    ],
  },
  {
    title: "هندسة المعلوماتية",
    intro:
      "تصميم وتطوير واختبار وصيانة الحلول الرقمية الملائمة لاحتياجات المنظمات، مع إدماج الأمن وجودة البرمجيات والتهيئة التدريجية للذكاء الاصطناعي.",
    duration: "الإجازة (ليسانس) · 3 سنوات · 6 فصول دراسية · 180 رصيداً",
    image: "/images/documents/v3-image3.jpg",
    link: "/programs/engineering/computer-science",
    icon: Cpu,
    modules: [
      "الخوارزميات والبرمجة",
      "تطوير الويب وقواعد البيانات",
      "أنظمة التشغيل والشبكات",
      "الأمن السيبراني وحماية البيانات",
    ],
  },
  {
    title: "هندسة الجيولوجيا والهندسة المدنية والتعدين",
    intro:
      "الجمع بين فهم الأرض والمواد، وتقنيات الهندسة المدنية، ومعارف القطاع المعدني، مع إدماج السلامة والبيئة.",
    duration: "الإجازة (ليسانس) · 3 سنوات · 6 فصول دراسية · 180 رصيداً",
    image: "/images/campus/IMG-20250212-WA0009.jpg",
    link: "/programs/geological-civil-mining-engineering",
    icon: Mountain,
    modules: [
      "الجيولوجيا العامة والتركيبية",
      "التصوير الطبوغرافي والمسوحات الميدانية",
      "ميكانيك التربة والمواد",
      "الاستغلال المعدني والسلامة والبيئة",
    ],
  },
]

const masters = [
  {
    title: "ماجستير إدارة الأعمال",
    description:
      "التعمق في الإدارة والاستراتيجية والحوكمة وقيادة المنظمات.",
  },
  {
    title: "ماجستير البنوك والهندسة المالية",
    description:
      "تنمية كفاءات في التحليل المالي والتمويل والبنوك وإدارة المخاطر وقرارات الاستثمار.",
  },
  {
    title: "ماجستير العلاقات الدولية والدبلوماسية",
    description:
      "التعمق في تحليل العلاقات الدولية والتفاوض والمؤسسات والقضايا الدبلوماسية.",
  },
  {
    title: "ماجستير التنمية المستدامة والمسؤولية المجتمعية للمؤسسات (RSE)",
    description:
      "دراسة مقاربات الاستدامة ومسؤولية المنظمات والحوكمة وقياس الآثار.",
  },
  {
    title: "ماجستير المراجعة ومراقبة التسيير",
    description:
      "تنمية كفاءات في الرقابة والمراجعة وقيادة الأداء وإدارة المخاطر وإعداد التقارير.",
  },
  {
    title: "ماجستير التسويق الرقمي",
    description:
      "التعمق في الاستراتيجية الرقمية والاتصال الرقمي وتحليل الأداء وعلاقات العملاء.",
  },
  {
    title: "ماجستير الذكاء الاصطناعي والشبكات والاتصالات",
    description:
      "استكشاف الأنظمة الذكية والبنية التحتية الرقمية والشبكات، حسب التخصص المعتمد فعلاً.",
  },
  {
    title: "ماجستير الإدارة الدولية",
    description:
      "التعمق في الاستراتيجية والتسيير بين الثقافات والتطوير الدولي وقيادة الأنشطة عبر الحدود.",
  },
  {
    title: "ماجستير تسيير المشاريع",
    description:
      "تكوين مهنيين قادرين على تصميم المشاريع وتخطيطها وتمويلها وتنفيذها ومتابعتها وتقييمها.",
  },
  {
    title: "ماجستير الجودة والنظافة والسلامة والبيئة (QHSE)",
    description:
      "تصميم ونشر وقيادة نظم تسيير متكاملة للجودة والنظافة والصحة والسلامة في العمل والبيئة.",
  },
]

const steps = [
  {
    n: "1",
    title: "التواصل الأولي",
    text: "تحدث مع فريق ABS حول الفرع المنشود، والملفات المطلوبة، والأماكن المتاحة.",
  },
  {
    n: "2",
    title: "تقديم الملف",
    text: "أعدّ ملف ترشّحك مع الوثائق التي تطلبها الإدارة (رسم الملف: 15 000 FCFA).",
  },
  {
    n: "3",
    title: "دراسة الملف",
    text: "يُفحص الملف وفقاً لشروط القبول الرسمية السارية في ABS.",
  },
  {
    n: "4",
    title: "التسجيل",
    text: "تأكيد التشكيلات — الجدول والرسوم والمسار — ثم إنهاء التسجيل.",
  },
]

export default function AcademicProgramsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative h-[55vh] flex items-center justify-center text-white">
        <Image
          src="/images/campus/IMG-20250212-WA0022.jpg"
          alt="طلبة ABS في الحرم الجامعي"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/80 to-blue-900/60" />
        <div className="relative z-10 text-center max-w-4xl px-4">
          <span className="inline-block mb-4 rounded-full bg-cyan-400/20 border border-cyan-400/40 px-4 py-1 text-sm font-medium text-cyan-300">
            الإجازة (ليسانس): 3 سنوات · 6 فصول دراسية · 180 رصيداً
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            العرض التكويني لـ ABS
          </h1>
          <p className="text-lg md:text-xl mb-8 text-slate-200">
            خمس شهادات إجازة (ليسانس) موزعة على خمسة قطاعات — العلوم والهندسة، الرقمنة، العلوم
            الاجتماعية والدولية، المعلومات والاتصال، علوم التسيير — وكتالوغ ماجستير تؤكد المديرية
            مساراته قبل إعلانها كقبولات مفتوحة.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="#formations">
              <Button
                size="lg"
                className="bg-cyan-400 text-slate-950 hover:bg-cyan-300 font-semibold px-8 py-3 text-lg"
              >
                استكشف البرامج التكوينية <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/admissions">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-3 text-lg"
              >
                شروط القبول
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Programs tabs */}
      <section id="formations" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900">
            برامجنا التكوينية
          </h2>
          <p className="text-center text-slate-600 mt-4 max-w-3xl mx-auto mb-12">
            تشكل البطاقات أدناه الأساس التحريري لكتالوغ الموقع. قبل أي تسجيل، تؤكد الإدارة لكل عودة
            دراسية المسارات المفتوحة فعلاً، والتسميات الرسمية للشهادات، وشروط الالتحاق والرسوم.
          </p>

          <Tabs defaultValue="licences" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-10 h-12">
              <TabsTrigger value="licences" className="text-base md:text-lg">
                الإجازة (ليسانس) (5)
              </TabsTrigger>
              <TabsTrigger value="masters" className="text-base md:text-lg">
                الماجستير (10)
              </TabsTrigger>
            </TabsList>

            {/* Licences */}
            <TabsContent value="licences">
              <div className="space-y-10">
                {filieres.map((f, i) => (
                  <Card
                    key={f.title}
                    className={`overflow-hidden border-slate-200 shadow-sm hover:shadow-xl transition-shadow ${
                      i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                    } md:flex`}
                  >
                    <div className="relative md:w-2/5 h-56 md:h-auto">
                      <Image
                        src={f.image}
                        alt={f.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 40vw"
                      />
                      <span className="absolute top-4 left-4 rounded-full bg-blue-900/90 text-white text-xs font-semibold px-3 py-1">
                        {f.duration}
                      </span>
                    </div>
                    <div className="md:w-3/5">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-2xl text-blue-900">
                          <f.icon className="h-6 w-6 text-cyan-500" />
                          {f.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-600 mb-5">{f.intro}</p>
                        <div className="mb-5">
                          <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide mb-2">
                            تدريس رئيسية
                          </p>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-sm text-slate-700">
                            {f.modules.map((m) => (
                              <li key={m} className="flex items-start gap-2">
                                <BookOpen className="h-4 w-4 mt-0.5 text-cyan-500 shrink-0" />
                                {m}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <p className="text-sm text-slate-500 mb-5">
                          اللغات: الفرنسية والإنجليزية في كل فصل دراسي (تطور ثنائي اللغة،{" "}
                          <Link href="/academics/pedagogy" className="text-blue-700 underline">
                            انظر صفحة البيداغوجيا
                          </Link>
                          ).
                        </p>
                        <Link href={f.link}>
                          <Button className="bg-blue-700 hover:bg-blue-900 text-white">
                            اكتشف الفرع <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Masters */}
            <TabsContent value="masters">
              <div className="rounded-lg border border-amber-300 bg-amber-50 p-5 mb-8 text-sm text-amber-900">
                مسارات الماجستير المدرجة أدناه تقابل محاور تكوين تؤكدها المديرية قبل إعلانها كقبولات
                مفتوحة (الماجستير: سنتان، 4 فصول دراسية، 120 رصيداً، للمسارات المفتوحة والمعتمدة
                فعلاً فقط).
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
                {masters.map((m) => (
                  <Link key={m.title} href="/programs/masters" className="group">
                    <div className="h-full rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-lg hover:border-cyan-300 transition-all">
                      <h3 className="font-semibold text-blue-900 leading-snug mb-2">{m.title}</h3>
                      <p className="text-sm text-slate-600">{m.description}</p>
                      <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-blue-700 group-hover:text-cyan-600">
                        الاطلاع على كتالوغ الماجستير <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Cadre pédagogique */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "إطار الإجازة (ليسانس)",
                text: "3 سنوات، 6 فصول دراسية، 180 رصيداً وفق الإطار البيداغوجي للعمل. وتوزيع وحدات التدريس مفصّل في التصميم الفصلي لكل فرع.",
              },
              {
                icon: GraduationCap,
                title: "مقاربة 40% / 60%",
                text: "حوالي 40% مدخلات نظرية و60% تطبيقات ومشاريع وأعمال موجهة وميدان وتدريبات وانغماس مهني، مع مراعاة التصميم المعتمد.",
              },
              {
                icon: Languages,
                title: "لغات العمل",
                text: "الإنجليزية في كل فصل دراسي مع تطور ثنائي اللغة فرنسي–إنجليزي؛ وفي العلاقات والأعمال الدولية، إسبانية تدريجية وفق الآلية المعتمدة.",
              },
            ].map((f) => (
              <div key={f.title} className="rounded-xl bg-white border border-slate-200 p-6 shadow-sm">
                <f.icon className="h-8 w-8 text-cyan-500 mb-4" />
                <h3 className="text-lg font-semibold text-blue-900 mb-2">{f.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comment candidater */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-4">
            كيف الترشّح؟
          </h2>
          <p className="text-center text-slate-600 max-w-2xl mx-auto mb-12">
            مسار قبول بسيط، تحدده الإدارة تشكيلاته النهائية لكل عودة دراسية.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.n} className="relative rounded-xl bg-slate-50 border border-slate-200 p-6">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-900 text-white font-bold mb-4">
                  {s.n}
                </span>
                <h3 className="font-semibold text-blue-900 mb-2">{s.title}</h3>
                <p className="text-sm text-slate-600">{s.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/apply">
              <Button size="lg" className="bg-blue-700 hover:bg-blue-900 text-white px-8 py-3 text-lg">
                تقديم ملف ترشّحي <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">هل أنت مستعد لبناء مشروعك الدراسي؟</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-slate-200">
            استكشف كتالوغ المواد، أو اطّلع على الفروع بالتفصيل، أو اتصل بفريق القبول للتحقق من
            الشروط والوثائق المطلوبة والأماكن المتاحة.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/academics/course-catalog">
              <Button
                size="lg"
                className="bg-cyan-400 text-slate-950 hover:bg-cyan-300 font-semibold px-8 py-3 text-lg"
              >
                كتالوغ المواد
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-3 text-lg"
              >
                اتصل بنا
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
