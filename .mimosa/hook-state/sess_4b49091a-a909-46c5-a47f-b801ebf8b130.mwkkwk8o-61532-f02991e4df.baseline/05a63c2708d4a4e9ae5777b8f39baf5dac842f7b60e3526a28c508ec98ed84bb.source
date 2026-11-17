import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ClipboardList,
  Info,
  Table2,
  Target,
  Lightbulb,
  DoorOpen,
  MessageCircle,
  Mail,
  Phone,
} from "lucide-react"
import { WHATSAPP_URL } from "@/lib/constants"

export const metadata: Metadata = buildMetadata({
  title: "ماجستير إدارة المشاريع | ABS",
  description: "ماجستير إدارة المشاريع في ABS بباماكو: تصميم المشاريع وتخطيطها وتمويلها وتنفيذها ومتابعتها وتقييمها. سنتان، 4 فصول دراسية، 120 وحدة. يؤكد المديرية فتح البرنامج مع كل عودة دراسية.",
  path: "/programs/masters/project-management",
  locale: "ar",
})

const infos = [
  ["الشهادة", "الماجستير — سنتان، 4 فصول دراسية، 120 وحدة (نظام LMD)"],
  ["المكان", "باماكو — حمدلاي ACI 2000"],
  ["اللغات", "الفرنسية / الإنجليزية (الإنجليزية في كل فصل دراسي)"],
  [
    "الأتعاب السنوية الإرشادية",
    "1 500 000 فرنك FCFA / سنة (M1، M2) — يشترط تأكيد كتابي للعام 2026–2027",
  ],
  ["رسم الملف", "15 000 فرنك FCFA"],
  [
    "رسم المناقشة",
    "150 000 فرنك FCFA للماجستير — المبلغ يؤكد للعام الدراسي 2026–2027",
  ],
]

export default function ProjectManagementPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mb-10">
        <Badge variant="outline" className="mb-4">
          <ClipboardList className="size-4 mr-1" /> الماجستير — مسار تكويني
        </Badge>
        <h1 className="text-4xl font-bold text-primary mb-4">ماجستير إدارة المشاريع</h1>
        <p className="text-xl text-muted-foreground mb-4">
          تكوين مهنيين قادرين على تصميم المشاريع وتخطيطها وتمويلها وتنفيذها ومتابعتها وتقييمها، في خدمة المؤسسات
          والممولين والمبادرات العامة والخاصة على حد سواء.
        </p>
        <div className="flex items-start gap-2 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
          <Info className="mt-0.5 size-4 shrink-0" />
          <p>
            يندرج هذا المسار ضمن مسارات تكوين تنتظر تأكيد المديرية قبل إعلانها كقبول مفتوح: البنية التكوينية
            والمتطلبات السابقة وضوابط القبول والفتح كلها تنتظر المصادقة. اتصل بالإدارة للتأكد من وضع المسار بالنسبة
            للعودة الدراسية المعنية.
          </p>
        </div>
      </div>

      {/* Informations clés */}
      <Card className="mb-10">
        <CardHeader>
          <CardTitle className="text-xl text-primary flex items-center gap-2">
            <Table2 className="size-5" /> المعلومات الأساسية
          </CardTitle>
        </CardHeader>
        <CardContent>
          <table className="w-full text-sm">
            <tbody>
              {infos.map(([label, value]) => (
                <tr key={label} className="border-b last:border-0">
                  <td className="py-2 pr-4 font-medium text-foreground align-top whitespace-nowrap w-56">
                    {label}
                  </td>
                  <td className="py-2 text-muted-foreground">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2 mb-10">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-primary flex items-center gap-2">
              <Target className="size-5" /> الأهداف
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <p>
              تكوين مهنيين قادرين على تصميم المشاريع وتخطيطها وتمويلها وتنفيذها ومتابعتها وتقييمها.
            </p>
            <p>
              الإعداد لقيادة المشاريع بكامل مراحلها، من تحديد الاحتياجات إلى غاية تقييم النتائج، بما يتوافق مع
              دينامية التعميق والتخصيص في دورة الماجستير بـ ABS.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-primary flex items-center gap-2">
              <Lightbulb className="size-5" /> الكفايات المطوَّرة
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>التخطيط الاستراتيجي</li>
              <li>الإدارة الميزانية</li>
              <li>تعبئة الموارد</li>
              <li>المتابعة والتقييم</li>
              <li>إدارة المخاطر</li>
              <li>قيادة الفرق</li>
            </ul>
            <p className="text-xs text-muted-foreground italic mt-3">
              الكفايات مستمدة من المرجعية الموثّقة للمسار؛ ولا تزال البنية التكوينية التفصيلية تنتظر المصادقة.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 mb-10">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-primary flex items-center gap-2">
              <DoorOpen className="size-5" /> شروط الولوج
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <p>
              <span className="font-medium text-foreground">الولوج إلى الماجستير الأول (M1):</span> الإجازة (ليسانس)
              أو شهادة معترف بمعادلتها في مجال ذي صلة، مع دراسة الملف الأكاديمي (كشوف الدرجات لسنوات الإجازة
              الثلاث، رسالة الدافع، السيرة الذاتية).
            </p>
            <p>
              <span className="font-medium text-foreground">الولوج إلى الماجستير الثاني (M2):</span> الماجستير الأول
              أو شهادة معادلة في المجال، حسب اجتياز المتطلبات السابقة والمسار الأكاديمي.
            </p>
            <p>
              إيداع ملف الترشّح لا يعني القبول الآلي؛ وتخضع كل ترشيح لدراسة الملف وقرار مديرية الدراسات.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-primary flex items-center gap-2">
              <ClipboardList className="size-5" /> الفرص المهنية الإرشادية
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <p>
              على سبيل الإشارة، يمكن لهذا الماجستير أن يُعِدّ لتحمّل مسؤوليات في قيادة المشاريع داخل الشركات
              والمنظمات غير الحكومية والمشاريع والبرامج والإدارات، حسب المسار وخبرة كل خريج.
            </p>
            <p className="text-xs italic">
              الفرص المهنية آفاق متوقعة وليست ضمانات للتوظيف.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Appel à l'action */}
      <Card className="bg-secondary">
        <CardContent className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 py-8">
          <div>
            <h2 className="text-2xl font-bold text-primary mb-2">
              هل ترغب في الترشّح لهذا الماجستير؟
            </h2>
            <p className="text-muted-foreground max-w-xl">
              اتصل بفريق ABS للتأكد من شروط القبول والوثائق المطلوبة والتقويم والأماكن المتاحة.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 text-sm text-muted-foreground mt-3">
              <span className="flex items-center gap-2">
                <Phone className="size-4" /> +223 78 14 14 88
              </span>
              <span className="flex items-center gap-2">
                <Mail className="size-4" /> abs.mail1290@gmail.com
              </span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link href="/contact">
              <Button size="lg">اطلب معلومات</Button>
            </Link>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline">
                <MessageCircle className="size-4 mr-2" /> WhatsApp
              </Button>
            </a>
            <Link href="/apply">
              <Button size="lg" variant="secondary">
                قدّم ترشّحك
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
