import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Link from "next/link"
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  CheckCircle2,
  FileText,
  FolderOpen,
  GraduationCap,
  Landmark,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Search,
  ShieldCheck,
  UserCheck,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { WHATSAPP_NUMBER, WHATSAPP_URL } from "@/lib/constants"

export const metadata: Metadata = buildMetadata({
  title: "القبول والتسجيل | ABS",
  description: "اطلع على مراحل الترشّح واحصل على شروط الالتحاق والوثائق والرسوم الرسمية لدى ABS — African Business School.",
  path: "/admissions",
  locale: "ar",
})

const CONTACT_EMAIL = "abs.mail1290@gmail.com"

const steps = [
  {
    title: "الاطلاع على البرامج التكوينية المفتوحة",
    text: "الاطلاع على العرض التكويني لـ ABS وتحديد البرنامج المرغوب (الإجازة (ليسانس) أو الماجستير)، مع التحقق من أن المسار مفتوح فعلاً للقبول في العودة الدراسية المعنية.",
  },
  {
    title: "الاستفسار عن شروط القبول",
    text: "الاتصال بمصلحة السلك الطلابي والقبول للتحقق من شروط الالتحاق والمؤهلات الأكاديمية المسبقة ورسوم التكوين والقائمة الرسمية للوثائق الواجب تقديمها.",
  },
  {
    title: "إعداد ملف الترشّح وتقديمه",
    text: "جمع الوثائق المطلوبة وتقديم ملف الترشّح لدى إدارة ABS، وفقاً للشكليات والمواعيد المعلَنة.",
  },
  {
    title: "دراسة الملف ومتابعته",
    text: "تقوم الإدارة بالتحقق من الوثائق ودراسة الملف الأكاديمي. ويظل المرشح متاحاً لتقديم أي وثيقة إضافية أو أي معلومة ضرورية لدراسة طلبه.",
  },
  {
    title: "تلقّي قرار القبول وإنهاء التسجيل",
    text: "بعد إشعار قرار القبول، يقوم المرشح المقبول بالشكليات الإدارية والمالية: دفع الرسوم المطلوبة، واعتماد التسجيل، واستلام الوثائق الإدارية المقابلة.",
  },
  {
    title: "التحضير للعودة الدراسية والانضمام إلى مجتمع ABS",
    text: "بعد تأكيد التسجيل، يتلقى الطالب الجديد المعلومات المتعلقة بالعودة الدراسية، وبجدول الحصص، والتنظيم البيداغوجي، والنظام الداخلي، والزي المدرسي، وأنشطة الاندماج.",
  },
]

const stepIcons = [Search, Phone, FolderOpen, FileText, BadgeCheck, GraduationCap]

const piecesL1 = [
  "نسخة من وثيقة الهوية أو جواز سفر ساري المفعول؛",
  "نسخة من شهادة البكالوريا أو شهادة معترف بها بمعادلتها؛",
  "شهادة النجاح في البكالوريا، عند الاقتضاء؛",
  "كشوف نقاط البكالوريا؛",
  "صورتان شخصيتان حديثتان؛",
  "مقتطف من شهادة الميلاد؛",
  "استمارة الترشّح الرسمية معبأة بشكل صحيح؛",
  "أي وثيقة إضافية تطلبها الإدارة.",
]

const piecesL2L3 = [
  "نسخة من وثيقة الهوية أو جواز السفر؛",
  "نسخة من شهادة البكالوريا؛",
  "الشهادات الجامعية أو شهادات النجاح المتحصَّل عليها؛",
  "كشوف النقاط للسنوات الجامعية السابقة؛",
  "شهادات اعتماد الفصول الدراسية، عند الاقتضاء؛",
  "صورتان شخصيتان حديثتان؛",
  "سيرة ذاتية؛",
  "استمارة الترشّح الرسمية؛",
  "أي وثيقة إضافية ضرورية لدراسة الملف واعتماد المكتسبات الأكاديمية.",
]

const piecesM1 = [
  "نسخة من وثيقة الهوية أو جواز السفر؛",
  "نسخة من شهادة الإجازة (ليسانس) أو شهادة معترف بها بمعادلتها؛",
  "شهادة النجاح، عند الاقتضاء؛",
  "كشوف نقاط السنوات الثلاث للإجازة (ليسانس) (السنة الأولى والثانية والثالثة)؛",
  "سيرة ذاتية محدّثة؛",
  "رسالة تحفيزية تعرض المشروع الأكاديمي والمهني؛",
  "صورتان شخصيتان حديثتان؛",
  "استمارة الترشّح الرسمية معبأة بشكل صحيح؛",
  "أي وثيقة إضافية مطلوبة حسب التخصص المختار.",
]

const piecesM2 = [
  "نسخة من وثيقة الهوية أو جواز السفر؛",
  "نسخة من شهادة الماجستير السنة الأولى أو شهادة معادلة؛",
  "كشوف نقاط المسار الجامعي السابق؛",
  "شهادة اعتماد السنة الأولى من الماجستير، عند الاقتضاء؛",
  "سيرة ذاتية محدّثة؛",
  "رسالة تحفيزية؛",
  "صورتان شخصيتان حديثتان؛",
  "استمارة الترشّح الرسمية؛",
  "أي وثيقة إضافية ضرورية لدراسة الملف.",
]

const dispositionsAdministratives = [
  "قد تُطالب نسخ مطابقة للأصل بالنسبة لبعض الوثائق.",
  "قد تستلزم الشهادات الأجنبية ترجمة رسمية وشهادة معادلة أو اعتراف.",
  "تخضع عمليات القبول في السنة الثانية والثالثة من الإجازة (ليسانس) والسنة الثانية من الماجستير لدراسة المسار الأكاديمي واعتماد المؤهلات المسبقة.",
  "يمكن دراسة إجراء التحقق من الخبرات المكتسبة (VAE)، متى كان ممكناً ومصرحاً به، وفقاً للأحكام التنظيمية السارية.",
]

const fraisNonInclus = [
  "الزي الإلزامي؛",
  "رحلة الدراسة والانغماس الميداني؛",
  "رسوم مناقشة البحث النهائي، عند الاقتضاء.",
]

const modalitesPaiement = [
  "شروط الدفع؛",
  "جدول تواريخ الاستحقاق؛",
  "تسهيلات الدفع التي قد تُمنح؛",
  "الشروط الخاصة المطبقة على المستفيدين من المنح الدراسية.",
]

const dispositionsFrais = [
  "رسم فتح الملف محدد بـ 15 000 FCFA.",
  "يجب أن يُرفق كل دفع بوصل أو إثبات رسمي للدفع.",
  "تُبلَّغ شروط الإلغاء واسترداد المبالغ من طرف الإدارة.",
  "الرسوم الإضافية غير مشمولة في التعريفات السنوية للرسوم الدراسية.",
]

const protectionDonnees = [
  "اتصل بالإدارة قبل أي إرسال لوثائق شخصية.",
  "قدّم ملفاتك حصراً عبر القنوات الرسمية التي تعلنها ABS.",
  "تجنب إرسال الوثائق الحساسة إلى أرقام أو عناوين غير موثقة.",
  "تحرص ABS على سرية المعلومات المبلغة في إطار إجراءات الترشّح والتسجيل.",
]

function PiecesList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3 text-slate-700">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function AdmissionsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-4 border-cyan-400 text-cyan-300">
              السنة الأكاديمية 2026–2027
            </Badge>
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
              اجعل من طموحك مشروعاً ملموساً
            </h1>
            <p className="text-lg text-slate-200">
              يبدأ القبول في ABS بمعلومة صحيحة. يستطيع فريقنا توجيهك نحو المسارات المعروضة، وشرح
              شروط الالتحاق، وتوضيح الإجراءات الواجب القيام بها. وتظل المعايير النهائية معتمدة على
              المستوى الدراسي والمسار المختار والقواعد السارية للسنة الأكاديمية المعنية.
            </p>
          </div>
        </div>
      </section>

      {/* 6.2 Étapes */}
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-3 text-3xl font-bold text-blue-900 md:text-4xl">إجراءات الترشّح في 6 مراحل</h2>
            <p className="text-lg text-slate-600">
              تجري إجراءات الترشّح إلى ABS — African Business School على ست مراحل.
            </p>
          </div>

          <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => {
              const StepIcon = stepIcons[index]
              return (
                <li key={step.title}>
                  <Card className="h-full border-t-4 border-t-blue-700 shadow-md">
                    <CardHeader>
                      <div className="mb-2 flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 text-lg font-bold text-white">
                          {index + 1}
                        </span>
                        <StepIcon className="h-7 w-7 text-blue-700" />
                      </div>
                      <CardTitle className="text-lg text-blue-900">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600">{step.text}</p>
                    </CardContent>
                  </Card>
                </li>
              )
            })}
          </ol>

          <div className="mx-auto mt-12 max-w-3xl rounded-xl border border-blue-100 bg-blue-50 p-6 text-center">
            <h3 className="mb-2 text-xl font-bold text-blue-900">مرحباً بكم في ABS</h3>
            <p className="text-slate-700">
              التزامنا: مرافقة كل مرشح طوال مساره، من أول اتصال إلى اندماجه الفعلي في المجتمع
              الجامعي ABS.
            </p>
          </div>
        </div>
      </section>

      {/* 6.3 Pièces à fournir */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="mb-3 text-3xl font-bold text-blue-900 md:text-4xl">الوثائق الواجب تقديمها</h2>
            <p className="text-lg text-slate-600">
              يختلف ملف الترشّح إلى ABS — African Business School حسب دورة التكوين المطلوبة.
              وتشكل الوثائق أدناه قائمة استرشادية، تؤكدها الإدارة.
            </p>
          </div>

          <Tabs defaultValue="l1" className="mx-auto max-w-4xl">
            <TabsList className="mb-6 grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="l1">الإجازة (ليسانس) L1</TabsTrigger>
              <TabsTrigger value="l2l3">الإجازة (ليسانس) L2 / L3</TabsTrigger>
              <TabsTrigger value="m1">الماجستير M1</TabsTrigger>
              <TabsTrigger value="m2">الماجستير M2</TabsTrigger>
            </TabsList>

            <TabsContent value="l1">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-900">
                    <GraduationCap className="h-6 w-6" /> الترشّح للإجازة (ليسانس) (L1)
                  </CardTitle>
                  <CardDescription>يجب على المرشح تقديم:</CardDescription>
                </CardHeader>
                <CardContent>
                  <PiecesList items={piecesL1} />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="l2l3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-900">
                    <GraduationCap className="h-6 w-6" /> الترشّح للإجازة (ليسانس) (L2 أو L3)
                  </CardTitle>
                  <CardDescription>يجب على المرشح تقديم:</CardDescription>
                </CardHeader>
                <CardContent>
                  <PiecesList items={piecesL2L3} />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="m1">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-900">
                    <UserCheck className="h-6 w-6" /> الترشّح للماجستير (M1)
                  </CardTitle>
                  <CardDescription>يجب على المرشح تقديم:</CardDescription>
                </CardHeader>
                <CardContent>
                  <PiecesList items={piecesM1} />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="m2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-900">
                    <UserCheck className="h-6 w-6" /> الترشّح للماجستير (M2)
                  </CardTitle>
                  <CardDescription>يجب على المرشح تقديم:</CardDescription>
                </CardHeader>
                <CardContent>
                  <PiecesList items={piecesM2} />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Dispositions administratives particulières */}
          <div className="mx-auto mt-10 grid max-w-4xl gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <FolderOpen className="h-6 w-6" /> أحكام إدارية خاصة
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {dispositionsAdministratives.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <div className="flex items-start gap-4 rounded-xl border border-amber-300 bg-amber-50 p-6">
              <AlertTriangle className="mt-0.5 h-6 w-6 shrink-0 text-amber-600" />
              <div>
                <p className="font-semibold text-amber-900">مهم</p>
                <p className="text-amber-900">
                  تقديم الملف لا يعني القبول التلقائي. وتخضع كل عملية ترشّح للتحقق من الوثائق، ودراسة
                  الملف الأكاديمي، وقرار مديرية الدراسات أو السلطة المختصة في ABS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6.4 Frais de formation */}
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="mb-3 text-3xl font-bold text-blue-900 md:text-4xl">رسوم التكوين</h2>
            <p className="text-lg text-slate-600">
              تطبق ABS — African Business School سياسة تعريفية شفافة، توضح الرسوم الدراسية
              والرسوم الإضافية المرتبطة بالتكوين. وللعام الأكاديمي 2026–2027، التعريفات السنوية
              محددة كما يلي:
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <Table>
              <TableCaption>الجدول الرسمي لرسوم التكوين — العام الأكاديمي 2026–2027.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>البيان</TableHead>
                  <TableHead className="text-right">المبلغ السنوي</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">الإجازة (ليسانس) (L1، L2، L3)</TableCell>
                  <TableCell className="text-right font-semibold">1 025 000 FCFA</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">الماجستير (M1، M2)</TableCell>
                  <TableCell className="text-right font-semibold">1 500 000 FCFA</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">رسم فتح الملف</TableCell>
                  <TableCell className="text-right font-semibold">15 000 FCFA</TableCell>
                </TableRow>
              </TableBody>
            </Table>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-900">
                    <Landmark className="h-6 w-6" /> رسوم غير مشمولة في الرسوم الدراسية
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="mb-4 space-y-2">
                    {fraisNonInclus.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-slate-700">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-slate-500">
                    تُبلَّغ هذه الرسوم من طرف الإدارة على حدة حسب البرنامج والمستوى الدراسي.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-900">
                    <CalendarCheck className="h-6 w-6" /> شروط الدفع
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-3 text-slate-700">
                    الرسوم الدراسية قابلة للدفع وفق تواريخ الاستحقاق والشروط التي تحددها المديرية
                    العامة لـ ABS. ويتلقى المرشحون المقبولون المعلومات المتعلقة بـ:
                  </p>
                  <ul className="space-y-2">
                    {modalitesPaiement.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-slate-700">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <ShieldCheck className="h-6 w-6" /> أحكام إدارية
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {dispositionsFrais.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <p className="mt-6 rounded-lg border border-blue-100 bg-blue-50 p-4 text-sm text-slate-700">
              يمكن لـ ABS منح منح دراسية، أو نصف منح، أو تخفيضات أخرى وفق معايير الانتقاء وقرارات
              المديرية العامة. ويخضع منح المنحة الدراسية لشروط أكاديمية وتأديبية وإدارية محددة في
              وثيقة التزام.{" "}
              <Link href="/financial-aid" className="font-semibold text-blue-700 hover:underline">
                اكتشف المنح والتخفيضات
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* 6.6 Contact */}
      <section className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">مستقبلك يبدأ من هنا</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-200">
              هل ترغب في الانضمام إلى ABS — African Business School في الإجازة (ليسانس) أو
              الماجستير؟ فريقنا الإداري ومصلحة السلك الطلابي والقبول تحت تصرفك لمرافقتك وتوجيهك في
              كل مرحلة من مراحل ترشّحك. لا تؤجل التحضير لمستقبلك.
            </p>
            <div className="grid gap-4 text-left sm:grid-cols-3">
              <a
                href={WHATSAPP_URL}
                className="rounded-xl border border-white/15 bg-white/5 p-5 transition hover:bg-white/10"
              >
                <MessageCircle className="mb-2 h-6 w-6 text-cyan-400" />
                <p className="font-semibold">واتساب</p>
                <p className="text-sm text-slate-200">{WHATSAPP_NUMBER}</p>
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="rounded-xl border border-white/15 bg-white/5 p-5 transition hover:bg-white/10"
              >
                <Mail className="mb-2 h-6 w-6 text-cyan-400" />
                <p className="font-semibold">البريد الإلكتروني</p>
                <p className="text-sm text-slate-200">{CONTACT_EMAIL}</p>
              </a>
              <div className="rounded-xl border border-white/15 bg-white/5 p-5">
                <MapPin className="mb-2 h-6 w-6 text-cyan-400" />
                <p className="font-semibold">الدورات المعروضة</p>
                <p className="text-sm text-slate-200">الإجازة (ليسانس) والماجستير</p>
                <p className="text-sm text-slate-200">باماكو – حمدلاي ACI 2000، مالي</p>
              </div>
            </div>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-cyan-400 font-semibold text-slate-950 hover:bg-cyan-300">
                <a href={WHATSAPP_URL}>
                  انضم إلى مجتمع ABS <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white font-semibold text-white hover:bg-white hover:text-blue-900"
              >
                <Link href="/apply">تقديم ملف ترشّح</Link>
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

            <div className="mx-auto mt-12 max-w-3xl rounded-xl border border-white/15 bg-white/5 p-6 text-left">
              <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold">
                <ShieldCheck className="h-5 w-5 text-cyan-400" /> حماية بياناتك الشخصية
              </h3>
              <p className="mb-3 text-sm text-slate-300">
                لضمان سرية معلوماتك وأمنها:
              </p>
              <ul className="space-y-2 text-sm text-slate-200">
                {protectionDonnees.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
