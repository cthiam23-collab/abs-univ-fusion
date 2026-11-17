import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  BookMarked,
  Building2,
  Calculator,
  FileText,
  GraduationCap,
  Landmark,
  Megaphone,
  Scale,
  ShieldCheck,
  Sparkles,
  Target,
  UserCog,
} from "lucide-react"

export const metadata: Metadata = buildMetadata({
  title: "القيادة والحوكمة | ABS",
  description: "حوكمة African Business School SARL: المديرة القانونية، رئيس الجامعة، مدير الدراسات، أمين السجلات والخدمات، في إطار الخطة الاستراتيجية ABS 2035.",
  path: "/about/governance",
  locale: "ar",
})

// Missions stratégiques de la Gérante statutaire (source : fiche de fonction ABS/GOUV/FP-001, sélection).
const ceoMissions = [
  {
    icon: Target,
    title: "القيادة والاستراتيجية المؤسسية",
    points: [
      "تحديد رؤية ABS وتوجهاته الاستراتيجية",
      "إعداد الخطة الاستراتيجية ABS 2035 وقيادتها",
      "إرساء ABS كمؤسسة قارية أفريقية مرجعية",
      "ضمان الاتساق بين الطموحات الاستراتيجية والموارد المتاحة",
    ],
  },
  {
    icon: Scale,
    title: "التمثيل القانوني والحوكمة",
    points: [
      "ضمان التسيير التنفيذي للشركة وتمثيلها قانونياً أمام الغير",
      "التوقيع على العقود والاتفاقيات الداخلة في صلاحياتها، في إطار قانون OHADA الموحد للشركات التجارية والجماعات ذات المصلحة الاقتصادية (AUSCGIE) والنظام الأساسي",
      "المراقبة المنتظمة للإجراءات القانونية والإدارية والمؤسسية",
    ],
  },
  {
    icon: GraduationCap,
    title: "التطور الأكاديمي والجودة",
    points: [
      "تحديد التوجهات العامة للتطور الأكاديمي، بالتنسيق مع رئاسة الجامعة",
      "الإشراف على تطور العرض التكويني ودعم التحسين المستمر للجودة البيداغوجية",
      "تشجيع الشراكات الأكاديمية والعلمية",
    ],
  },
  {
    icon: Calculator,
    title: "القيادة المالية والاقتصادية",
    points: [
      "الإشراف على إعداد الموازنة السنوية ومتابعة الوضعية النقدية",
      "فحص الحيثيات المالية والتقارير المحاسبية",
      "ضمان التحكم في النفقات وفصل صلاحيات الإذن والدفع والقيود والرقابة",
    ],
  },
  {
    icon: Building2,
    title: "الشراكات وريادة الأعمال والابتكار",
    points: [
      "تطوير الشراكات الاستراتيجية والعلاقات مع الشركات",
      "دعم Career & Corporate Relations Center وتطوير ABS Startup Lab",
      "تنمية العلاقات مع الشبكات القارية الأفريقية والدولية",
    ],
  },
  {
    icon: Sparkles,
    title: "التحول الرقمي والتنمية المستدامة",
    points: [
      "الإشراف على التحول الرقمي والرقمنة الإجرائية الإدارية",
      "تشجيع الاستخدام المسؤول للذكاء الاصطناعي",
      "تطوير مشاريع الجامعة الخضراء ودعم المبادرات المساهمة في أهداف التنمية المستدامة",
    ],
  },
]

// Chaîne de gouvernance (rattachements issus des fiches de poste).
const governanceChain = [
  {
    icon: Landmark,
    title: "المديرة العامة",
    subtitle: "المديرة القانونية — Managing Director & CEO",
    description:
      "السلطة التنفيذية الأولى للشركة. تضمن التسيير العام والتمثيل القانوني والقيادة الاستراتيجية والتسيير العملي، وتشرف على مجموع المديريات والأقسام والخدمات.",
    rattachement: "قمة السلسلة: معيّنة وفق النظام الأساسي وقرارات الشركاء",
  },
  {
    icon: GraduationCap,
    title: "رئيس الجامعة",
    subtitle: "السلطة الأكاديمية الأولى",
    description:
      "يضمن جودة المؤسسة وملاءمة وأدائها الأكاديمي، ويحدد التوجهات الأكاديمية الكبرى بما يتسق مع الخطة الاستراتيجية ABS 2035، ويشرف على مدير الدراسات ومسؤولي الفروع.",
    rattachement: "الرابط الهرمي: المديرة العامة",
  },
  {
    icon: BookMarked,
    title: "مدير الدراسات",
    subtitle: "التنظيم البيداغوجي",
    description:
      "المسؤول العملي عن تنظيم وتنسيق ومتابعة الأنشطة البيداغوجية. يضمن تنفيذ التوجهات الأكاديمية التي يحددها رئيس الجامعة، والحلقة العملية مع مسؤولي الفروع وأعضاء هيئة التدريس والسلك الطلابي.",
    rattachement: "الرابط الهرمي: رئيس الجامعة · الرابط المؤسسي: المديرية العامة",
  },
  {
    icon: UserCog,
    title: "أمين السجلات (Registrar)",
    subtitle: "الإدارة الأكاديمية والسلك الطلابي",
    description:
      "المسؤول عن الإدارة الأكاديمية والتسيير المركزي للسلك الطلابي. ضامن للتتبع الإداري للمسار الدراسي لكل طالب، من الترشح والقبول إلى الحصول على الشهادة.",
    rattachement: "الرابط الهرمي: المديرية العامة · الرابط الوظيفي: رئاسة الجامعة",
  },
  {
    icon: Megaphone,
    title: "مسؤول التسويق والاتصال",
    subtitle: "الصورة والظهور والانتداب",
    description:
      "يصمم وينفذ استراتيجية التسويق والاتصال للمؤسسة، ويطور ظهورها ويقود حملات انتداب الطلبة.",
    rattachement: "الرابط الهرمي: المديرية العامة",
  },
  {
    icon: Calculator,
    title: "المحاسبة والخزينة والخدمات الإدارية",
    subtitle: "التسيير الإداري والمالي",
    description:
      "يضمن المحاسب محاسبة موثوقة ومنتظمة وفق المرجعية المطبقة في مالي (SYSCOHADA المنقح)؛ ويكفل أمين الخزينة تسييراً مؤمّناً وقابلاً للتتبع للمقبوضات والمصروفات المصرح بها.",
    rattachement: "الرابط الهرمي: المديرية العامة",
  },
]

// Services supervisés par la Direction Générale (fiche de fonction de la Gérante statutaire, §7).
const supervisedFunctions = [
  { icon: GraduationCap, name: "رئاسة الجامعة", domain: "التوجيه الأكاديمي والعلمي" },
  { icon: BookMarked, name: "مديرية الدراسات", domain: "التنظيم البيداغوجي" },
  { icon: UserCog, name: "أمين السجلات", domain: "الإدارة الأكاديمية" },
  { icon: Calculator, name: "المحاسبة والمالية", domain: "التسيير المحاسبي والمالي" },
  { icon: Building2, name: "الخزينة", domain: "المقبوضات والمصروفات المصرح بها" },
  { icon: Megaphone, name: "التسويق والاتصال", domain: "الصورة والظهور والانتداب" },
  { icon: Building2, name: "Career & Corporate Relations Center", domain: "العلاقات مع الشركات والإدماج المهني" },
  { icon: Sparkles, name: "ABS Startup Lab", domain: "الابتكار وريادة الأعمال" },
]

export default function GovernancePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-blue-950 py-20 text-white">
        <Image
          src="/images/documents/v3-image3.jpg"
          alt="قيادة ABS في جلسة عمل مع مسؤولين رسميين"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/85 to-blue-900/60" />
        <div className="container relative mx-auto px-6">
          <p className="font-semibold uppercase tracking-[0.25em] text-cyan-300">من نحن · الحوكمة</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            القيادة والحوكمة
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-blue-100">
            تضمن المديرية العامة التوجيه المؤسسي وتطوير ABS. وتُمارس المسؤوليات الأكاديمية
            والإدارية والبيداغوجية وفقاً للتنظيم الداخلي والإجراءات السارية.
          </p>
        </div>
      </section>

      {/* Cadre juridique */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="font-semibold uppercase tracking-[0.2em] text-blue-700">الإطار القانوني</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              شركة ذات مسؤولية محدودة تخضع لقانون OHADA
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              ABS — African Business School SARL شركة ذات مسؤولية محدودة، مقرها الاجتماعي في
              باماكو بمالي. تمارس المديرة القانونية مهامها وفقاً للنظام الأساسي للشركة، وللقانون
              الموحد لقانون OHADA المتعلق بالشركات التجارية والجماعة ذات المصلحة الاقتصادية
              (AUSCGIE)، والأحكام المطبقة في مالي، والقرارات المتخذة بانتظام من الشركاء.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              وفقاً للمادة 323 وما يليها من قانون AUSCGIE، تُدار الشركة ذات المسؤولية المحدودة من
              واحد أو عدة مديرين من الأشخاص الطبيعيين، معينين في النظام الأساسي أو بموجب وثيقة لاحقة.
              تضمن المديرة القانونية التمثيل القانوني للشركة وتمارس صلاحيات التسيير والتمثيل المنصوص
              عليها في النصوص المطبقة؛ وتظل الصلاحيات المحفوظة صراحةً للشركاء بموجب القانون أو النظام
              الأساسي من اختصاصهم.
            </p>
          </div>
          <Card className="border-slate-200">
            <CardHeader>
              <FileText className="h-9 w-9 text-blue-700" aria-hidden="true" />
              <CardTitle className="text-xl text-slate-900">إبراز المهام والوظيفة</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              {[
                ["التسمية القانونية", "المديرة القانونية"],
                ["اللقب التنفيذي والمؤسسي", "Managing Director & Chief Executive Officer"],
                ["المؤسسة", "ABS — African Business School SARL"],
                ["الشكل القانوني", "شركة ذات مسؤولية محدودة (SARL)"],
                ["الموقع الهرمي", "السلطة التنفيذية الأولى للشركة"],
                ["المقر الاجتماعي", "باماكو، مالي"],
              ].map(([label, value]) => (
                <div key={label} className="flex flex-col gap-0.5 border-b border-slate-100 pb-3 last:border-0 last:pb-0">
                  <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">{label}</span>
                  <span className="font-medium text-slate-800">{value}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Finalité et ambition : la Gérante statutaire */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-semibold uppercase tracking-[0.2em] text-blue-700">غاية الوظيفة</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              المديرة القانونية، ضامنة الاتساق المؤسسي
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              تضمن المديرة القانونية التسيير العام والتمثيل القانوني والقيادة الاستراتيجية والتسيير
              العملي لـ ABS — African Business School SARL. وتضمن الاتساق بين رؤية المؤسسة
              والتزاماتها التنظيمية ومواردها وطموحاتها التنموية ونتائجها. وتقود هذا الطموح في إطار
              الخطة الاستراتيجية ABS 2035 الهادفة إلى إرساء ABS كمؤسسة معترف بها لتميزها الأكاديمي
              والمهني، وجودة برامجها التكوينية وملاءمتها، وابتكارها البيداغوجي والتكنولوجي، واحتراف
              خريجيها.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ceoMissions.map(({ icon: Icon, title, points }) => (
              <Card key={title} className="border-slate-200 transition-shadow hover:shadow-lg">
                <CardHeader>
                  <span className="mb-2 inline-flex size-12 items-center justify-center rounded-xl bg-cyan-50">
                    <Icon className="size-6 text-cyan-700" aria-hidden="true" />
                  </span>
                  <CardTitle className="text-lg text-slate-900">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-slate-600">
                        <ShieldCheck className="mt-0.5 size-4 shrink-0 text-blue-700" aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Chaîne de gouvernance */}
      <section className="container mx-auto px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-semibold uppercase tracking-[0.2em] text-blue-700">التنظيم</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">سلسلة الحوكمة</h2>
          <p className="mt-4 leading-7 text-slate-600">
            الروابط الهرمية والوظيفية محددة في الهيكل التنظيمي المعتمد لـ ABS. وتُعرض الوظائف
            أدناه بناءً على البطاقات الرسمية للمناصب والوظائف؛ ولا تُعرض الوظائف وحدها، بينما تُنشر
            أسماء المسؤولين وسيرهم وصورهم بموافقتهم على النشر.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-4xl">
          <ol className="relative space-y-8 border-l-2 border-blue-200 pl-8">
            {governanceChain.map(({ icon: Icon, title, subtitle, description, rattachement }) => (
              <li key={title} className="relative">
                <span
                  className="absolute -left-[2.85rem] flex size-9 items-center justify-center rounded-full bg-blue-700 text-white ring-4 ring-white"
                  aria-hidden="true"
                >
                  <Icon className="size-4" />
                </span>
                <Card className="border-slate-200 transition-shadow hover:shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-blue-900">{title}</h3>
                    <p className="text-sm font-medium text-cyan-700">{subtitle}</p>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
                    <p className="mt-3 text-xs font-medium uppercase tracking-wide text-slate-400">{rattachement}</p>
                  </CardContent>
                </Card>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Services supervisés */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-slate-900">الوظائف والخدمات الخاضعة للإشراف</h2>
            <p className="mt-3 leading-7 text-slate-600">
              تضمن المديرة القانونية الإشراف العام على الوظائف والخدمات التالية.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {supervisedFunctions.map((service) => {
              const Icon = service.icon
              return (
                <Card key={service.name} className="border-slate-200 text-center transition-shadow hover:shadow-lg">
                  <CardContent className="flex flex-col items-center p-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-50 text-blue-700">
                      <Icon className="h-7 w-7" aria-hidden="true" />
                    </div>
                    <h3 className="mt-4 font-bold text-blue-900">{service.name}</h3>
                    <p className="mt-1 text-sm text-slate-600">{service.domain}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
          <p className="mx-auto mt-10 max-w-3xl rounded-xl border border-cyan-200 bg-cyan-50 p-5 text-center text-sm leading-6 text-slate-600">
            إشارة مؤسسية: تُنقل المعلومات المتعلقة بالتراخيص والاعتمادات والتقديرات أو الاعتراف
            حصراً بناءً على الوثائق الرسمية السارية. ولأي توضيح إضافي، يرجى الاتصال بإدارة ABS.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-950 py-14 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">معرفة المزيد</h2>
          <p className="mx-auto mt-3 max-w-2xl text-blue-100">
            اكتشف هوية المؤسسة ورسالتها وقيمنا، إضافة إلى الفريق والحوكمة الأكاديمية.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-cyan-400 text-slate-950 hover:bg-cyan-300">
              <Link href="/about/faculty-staff">
                الفريق والحوكمة الأكاديمية <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/about">من نحن؟</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
