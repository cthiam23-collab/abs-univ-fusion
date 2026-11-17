import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Link from "next/link"
import {
  BadgeCheck,
  CalendarCheck,
  CheckCircle2,
  FileText,
  HandHeart,
  Handshake,
  HeartHandshake,
  Landmark,
  Mail,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
  Trophy,
  UserCheck,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { WHATSAPP_NUMBER, WHATSAPP_URL } from "@/lib/constants"

export const metadata: Metadata = buildMetadata({
  title: "المنح والتخفيضات | ABS",
  description: "اكتشف آليات المنح وتخفيضات الرسوم الدراسية في ABS — African Business School: معايير المنح وشروط الاستمرار وإجراءات الترشّح.",
  path: "/financial-aid",
  locale: "ar",
})

const CONTACT_EMAIL = "abs.mail1290@gmail.com"

const dispositifs = [
  {
    icon: Trophy,
    title: "منحة التميز",
    description:
      "مخصصة للمرشحين الحاصلين على نتائج أكاديمية متميزة.",
  },
  {
    icon: HandHeart,
    title: "نصف منحة",
    description:
      "تخفيض بنسبة 50% من الرسوم الدراسية، يُمنح وفق المعايير التي تحددها المديرية العامة.",
  },
  {
    icon: HeartHandshake,
    title: "منحة اجتماعية",
    description:
      "مخصصة للمرشحين الذين يثبتون وضعية اجتماعية أو مالية خاصة.",
  },
  {
    icon: Sparkles,
    title: "تخفيض استثنائي",
    description:
      "يُمنح في إطار حملات الانتداب أو الآليات المؤسسية الخاصة.",
  },
  {
    icon: Star,
    title: "منحة الجدارة",
    description:
      "مخصصة لمكافأة الأداء الأكاديمي والالتزام والسلوك المتميز للطلبة.",
  },
]

const criteresAttribution = [
  "النتائج المدرسية والجامعية للمرشح؛",
  "الجدارة والإمكانات الأكاديمية؛",
  "التحفيز والمشروع المهني؛",
  "الوضعية الاجتماعية أو المالية، متى كان ذلك ممكناً؛",
  "المشاركة في مسابقات المنح التي تنظمها ABS؛",
  "احترام الالتزامات الأكاديمية والإدارية والتأديبية.",
]

const conditionsMaintien = [
  "احترام النظام الداخلي لـ ABS؛",
  "الحضور المنتظم للحصص والأنشطة البيداغوجية؛",
  "احترام المواعيد والالتزامات الأكاديمية؛",
  "تحقيق نتائج مرضية؛",
  "المشاركة في الأنشطة المؤسسية الإلزامية؛",
  "احترام الالتزامات الواردة في اتفاقهم أو رسالة المنح.",
]

const procedureCandidature = [
  "تقديم ملف ترشّح؛",
  "تقديم الوثائق المبرِّبة المطلوبة؛",
  "المشاركة، عند الاقتضاء، في مسابقة الانتقاء؛",
  "الخضوع لتقييم الملف؛",
  "انتظار الإشعار الرسمي بقرار المديرية العامة.",
]

const validiteCampagne = [
  "عدد المنح المتاحة، عند الاقتضاء؛",
  "نسب التخفيض الممنوحة؛",
  "الفروع والمستويات المعنية؛",
  "تواريخ فتح وإغلاق الترشّح؛",
  "الوثائق المبرِّبة المطلوبة؛",
  "شروط الاستمرار والتجديد؛",
  "إمكانات أو منع التجميع مع تخفيضات أخرى.",
]

const dispositionsImportantes = [
  "طلب المنحة لا يضمن الحصول عليها.",
  "لا تُعتبر أي منحة أو تخفيض مضموناً قبل الإشعار الرسمي من المديرية العامة.",
  "المنح والتخفيضات غير قابلة للتجميع تلقائياً.",
  "المزايا الممنوحة شخصية وتخضع للشروط المحددة في قرار المنح.",
  "الرسوم الإضافية (فتح الملف، الزي، رحلة الدراسة ومناقشة البحث النهائي) لا تغطيها المنح تلقائياً، إلا بقرار صريح من المديرية العامة.",
]

export default function FinancialAidPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-4 border-cyan-400 text-cyan-300">
              السنة الأكاديمية 2026–2027
            </Badge>
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">المنح والتخفيضات</h1>
            <p className="text-lg text-slate-200">
              في إطار سياسته الرامية إلى الترويج للتميز الأكاديمي، وتكافؤ الفرص، وإتاحة الولوج إلى
              التعليم العالي، توفر ABS — African Business School مختلف آليات المنح
              والتخفيضات على الرسوم الدراسية.
            </p>
            <p className="mt-4 text-slate-300">
              تهدف هذه الآليات إلى تشجيع الجدارة، ودعم الطلبة المتحمسين، ومساعدة الأسر في تمويل
              الدراسات العليا.
            </p>
          </div>
        </div>
      </section>

      {/* 1. Dispositifs */}
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-3 text-3xl font-bold text-blue-900 md:text-4xl">
              آليات الدعم المالي
            </h2>
            <p className="text-lg text-slate-600">
              يمكن لـ ABS اقتراح عدة أشكال من المرافقة:
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {dispositifs.map((item) => (
              <Card key={item.title} className="h-full border-t-4 border-t-blue-700 shadow-md">
                <CardHeader>
                  <item.icon className="mb-2 h-9 w-9 text-blue-700" />
                  <CardTitle className="text-blue-900">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-3xl rounded-lg border border-blue-100 bg-blue-50 p-4 text-sm text-slate-700">
            يمكن لـ ABS منح منح دراسية، أو نصف منح، أو تخفيضات أخرى وفق معايير الانتقاء وقرارات
            المديرية العامة. ويخضع منح المنحة الدراسية لشروط أكاديمية وتأديبية وإدارية محددة في
            وثيقة التزام.
          </p>
        </div>
      </section>

      {/* 2-5. Critères, maintien, procédure, validité */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <Landmark className="h-6 w-6" /> معايير المنح
                </CardTitle>
                <CardDescription>
                  يمكن أن يؤخذ في الاعتبار عند منح منحة أو تخفيض العناصر التالية:
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {criteresAttribution.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <UserCheck className="h-6 w-6" /> شروط الحفاظ على المنحة
                </CardTitle>
                <CardDescription>
                  يلتزم المستفيدون من منحة أو نصف منحة بـ:
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {conditionsMaintien.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
                  عدم احترام هذه الالتزامات قد يؤدي إلى مراجعة أو تعليق أو سحب الميزة الممنوحة، وفق
                  الأحكام المطبقة.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <FileText className="h-6 w-6" /> إجراءات الترشّح
                </CardTitle>
                <CardDescription>يجب على المرشحين الراغبين في الاستفادة من منحة أن:</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3">
                  {procedureCandidature.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-700">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-700 text-xs font-bold text-white">
                        {index + 1}
                      </span>
                      {item}
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <CalendarCheck className="h-6 w-6" /> الصلاحية والشروط الخاصة
                </CardTitle>
                <CardDescription>
                  تخضع كل حملة منح لإعلان يوضح:
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {validiteCampagne.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 6. Dispositions importantes */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-blue-900">
              <ShieldCheck className="h-8 w-8 text-blue-700" /> أحكام مهمة
            </h2>
            <ul className="mb-10 space-y-3">
              {dispositionsImportantes.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4 text-slate-700"
                >
                  <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Notre engagement */}
            <div className="rounded-xl border border-blue-100 bg-blue-50 p-8 text-center">
              <Handshake className="mx-auto mb-4 h-10 w-10 text-blue-700" />
              <h3 className="mb-4 text-2xl font-bold text-blue-900">التزامنا</h3>
              <p className="mb-3 text-slate-700">
                في ABS، نؤمن بأن الإمكانات والجدارة والعزيمة يجب أن تفتح أبواب التعليم العالي.
              </p>
              <p className="text-slate-700">
                المنحة فرصة، ولكنها أيضاً التزام تجاه الذات، وتجاه المؤسسة، وتجاه المستقبل.
              </p>
              <p className="mt-6 text-lg font-semibold text-blue-900">
                التميز يُستحق، والفرص تُبنى، والمستقبل يُحضَّر.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">مستقبلك يبدأ من هنا</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-200">
            هل ترغب في الترشّح لمنحة أو معرفة المزيد عن الآليات الجارية؟ اتصل بإدارتنا للحصول على
            المعلومات الرسمية والنصائح اللازمة لملفك.
          </p>
          <div className="mb-8 flex flex-col items-center justify-center gap-4 text-sm text-slate-200 sm:flex-row">
            <span className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 text-cyan-400" /> واتساب : {WHATSAPP_NUMBER}
            </span>
            <span className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-cyan-400" /> {CONTACT_EMAIL}
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-cyan-400" /> باماكو – حمدلاي ACI 2000
            </span>
          </div>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-cyan-400 font-semibold text-slate-950 hover:bg-cyan-300">
              <a href={WHATSAPP_URL}>انضم إلى مجتمع ABS</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white font-semibold text-white hover:bg-white hover:text-blue-900"
            >
              <Link href="/admissions">اكتشف القبول والتسجيل</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white font-semibold text-white hover:bg-white hover:text-blue-900"
            >
              <Link href="/contact">اتصل بنا</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
