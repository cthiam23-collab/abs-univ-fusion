import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import type { LucideIcon } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { dynamicMasters, masterIcons } from "@/lib/masters-data"
import { localizedMasterFields } from "@/lib/masters-data-i18n"
import {
  Briefcase,
  Megaphone,
  Network,
  ClipboardList,
  ShieldCheck,
  GraduationCap,
  CalendarClock,
  CreditCard,
  Info,
  Mail,
  Phone,
} from "lucide-react"

export const metadata: Metadata = buildMetadata({
  title: "الماجستير | ABS",
  description: "دليل برامج الماجستير في African Business School (ABS) بباماكو: 16 مساراً مع صفحة مخصصة (سنتان، 4 فصول دراسية، 120 وحدة)، وفق نظام LMD، وبأتعاب إرشادية وشروط فتح يؤكدها المديرية.",
  path: "/programs/masters",
  locale: "ar",
})

type MasterAxis = {
  title: string
  description: string
  icon: LucideIcon
  href?: string
  highlighted?: boolean
}

// Parcours avec page statique dédiée sous app/programs/masters/<slug>/.
const staticMasters: MasterAxis[] = [
  {
    title: "ماجستير إدارة الأعمال",
    description:
      "التعمّق في الإدارة والاستراتيجية والحوكمة وقيادة المؤسسات.",
    icon: Briefcase,
    href: "/programs/masters/mba",
    highlighted: true,
  },
  {
    title: "ماجستير الإدارة الدولية",
    description:
      "التعمّق في الاستراتيجية والإدارة بين الثقافات والتطوير الدولي وقيادة الأنشطة العابرة للحدود.",
    icon: Network,
    href: "/programs/masters/international-business",
    highlighted: true,
  },
  {
    title: "ماجستير إدارة المشاريع",
    description:
      "تكوين مهنيين قادرين على تصميم المشاريع وتخطيطها وتمويلها وتنفيذها ومتابعتها وتقييمها، وتنمية مهارات التخطيط الاستراتيجي والإدارة الميزانية وتعبئة الموارد والمتابعة والتقييم وإدارة المخاطر وقيادة الفرق.",
    icon: ClipboardList,
    href: "/programs/masters/project-management",
    highlighted: true,
  },
]

// Axes de formation encore sans fiche dédiée — ouverture à confirmer par la Direction.
const unconfirmedAxes: MasterAxis[] = [
  {
    title: "ماجستير التسويق الرقمي",
    description:
      "التعمّق في الاستراتيجية الرقمية والتواصل الرقمي وتحليل الأداء وعلاقة الزبون.",
    icon: Megaphone,
  },
  {
    title: "ماجستير الجودة والنظافة والسلامة والبيئة (QHSE)",
    description:
      "تكوين متخصصين قادرين على تصميم أنظمة إدارة متكاملة للجودة والنظافة والسلامة المهنية والبيئة ونشرها وقيادتها، وتنمية مهارات الوقاية من المخاطر المهنية والامتثال التنظيمي والتدقيق والتحسين المستمر والإدارة البيئية.",
    icon: ShieldCheck,
  },
]

// Catalogue complet : 3 pages statiques + 13 pages dynamiques issues de
// lib/masters-data.ts + les axes restants à confirmer par la Direction.
const catalogue: MasterAxis[] = [
  ...staticMasters,
  ...dynamicMasters.map(
    (master): MasterAxis => ({
      title: localizedMasterFields(master, "ar").title,
      description: localizedMasterFields(master, "ar").tagline,
      icon: masterIcons[master.slug as keyof typeof masterIcons],
      href: `/ar/programs/masters/${master.slug}`,
    }),
  ),
  ...unconfirmedAxes,
]

export default function MastersProgramsPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mb-10">
        <Badge variant="outline" className="mb-4">
          <GraduationCap className="size-4 mr-1" /> دورة الماجستير — نظام LMD
        </Badge>
        <h1 className="text-4xl font-bold text-primary mb-4">الماجستير</h1>
        <p className="text-xl text-muted-foreground mb-4">
          يندرج الماجستير في ABS ضمن دينامية تعميق المعارف والتخصيص وتنمية المهارات المتقدمة. ومن خلال دراسة حالات
          معقّدة ومشاريع مهنية وأبحاث تطبيقية، يُعِدّ الطالب لتصميم الحلول وقيادة المشاريع وتحمّل المسؤوليات داخل
          المؤسسات.
        </p>
        <div className="flex items-start gap-2 rounded-lg border border-cyan-200 bg-cyan-50 p-4 text-sm text-blue-900">
          <Info className="mt-0.5 size-4 shrink-0" />
          <p>
            مسارات الماجستير المدرجة أدناه هي مسارات تكوين تنتظر تأكيد المديرية قبل إعلانها كقبول مفتوح. ويؤكد
            المديرية الفعلي لفتح كل مسار مع كل عودة دراسية.
          </p>
        </div>
      </div>

      {/* Parcours mis en avant */}
      <h2 className="text-2xl font-bold text-primary mb-4">مسارات ذات صفحة تفصيلية</h2>
      <div className="grid gap-6 md:grid-cols-3 mb-12">
        {catalogue
          .filter((m) => m.highlighted)
          .map((master) => (
            <Card key={master.title} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-start gap-2">
                  <master.icon className="mt-1 size-5 shrink-0" />
                  {master.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4 flex-1">
                <p className="text-muted-foreground text-sm flex-1">{master.description}</p>
                <Link href={master.href!}>
                  <Button variant="secondary" className="w-full">
                    اكتشف المسار
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
      </div>

      {/* Catalogue complet : 3 pages statiques + 13 pages dédiées + axes à confirmer */}
      <h2 className="text-2xl font-bold text-primary mb-2">دليل مسارات الماجستير</h2>
      <p className="text-muted-foreground mb-6 max-w-3xl">
        ستة عشر مسار ماجستير موثّقة في المرجعية الأكاديمية لـ ABS، ولكل منها صفحة تفصيلية (الأهداف، البنية
        التكوينية، الكفايات المستهدفة، الفرص المهنية، شروط الولوج). ولكل مسار، يؤكد المديرية الفعلي لفتح القبول مع
        كل عودة دراسية.
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
        {catalogue.map((master) => (
          <Card key={master.title} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-lg text-primary flex items-start gap-2">
                <master.icon className="mt-1 size-5 shrink-0" />
                {master.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 flex-1">
              <CardDescription className="flex-1">{master.description}</CardDescription>
              {master.href ? (
                <Link href={master.href}>
                  <Button variant="secondary" size="sm" className="w-full">
                    اطّلع على صفحة المسار
                  </Button>
                </Link>
              ) : (
                <p className="text-xs text-muted-foreground italic">
                  مسار قيد التأكيد — اتصل بالإدارة.
                </p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Cadre commun des études */}
      <h2 className="text-2xl font-bold text-primary mb-4">الإطار المشترك لدراسات الماجستير</h2>
      <div className="grid gap-6 md:grid-cols-3 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg text-primary flex items-center gap-2">
              <CalendarClock className="size-5" /> المدة والبنية
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            <p>سنتان، 4 فصول دراسية، 120 وحدة، وفق الإطار البيداغوجي LMD.</p>
            <p className="mt-2">اللغة الإنجليزية معزّزة في كل فصل دراسي، ضمن تدرّج ثنائي اللغة فرنسي–إنجليزي.</p>
            <Link href="/academics/pedagogy" className="text-primary underline underline-offset-4 mt-2 inline-block">
              اطّلع على النظام البيداغوجي واللغوي
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg text-primary flex items-center gap-2">
              <CreditCard className="size-5" /> الأتعاب السنوية الإرشادية
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            <p className="font-semibold text-foreground">1 500 000 فرنك FCFA / سنة (M1، M2) — إرشادي</p>
            <p className="mt-2">
              رسم الملف: 15 000 فرنك FCFA. رسم مناقشة الماجستير: 150 000 فرنك FCFA (المبالغ تؤكد للعام الدراسي
              2026–2027).
            </p>
            <p className="mt-2">
              يُشترط تأكيد كتابي للرسوم من الإدارة مع كل عودة دراسية.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg text-primary flex items-center gap-2">
              <GraduationCap className="size-5" /> شروط الولوج
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            <p>
              الولوج إلى الماجستير الأول (M1): الإجازة (ليسانس) أو شهادة معترف بمعادلتها في مجال ذي صلة، مع دراسة
              الملف الأكاديمي.
            </p>
            <p className="mt-2">
              الولوج إلى الماجستير الثاني (M2): الماجستير الأول أو شهادة معادلة، حسب المسار المختار واجتياز
              المتطلبات السابقة.
            </p>
            <p className="mt-2">
              إيداع ملف الترشّح لا يعني القبول الآلي؛ والقرار يعود لمديرية الدراسات.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Appel à l'action */}
      <Card className="bg-secondary">
        <CardContent className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 py-8">
          <div>
            <h2 className="text-2xl font-bold text-primary mb-2">هل يهمّك الماجستير في ABS؟</h2>
            <p className="text-muted-foreground max-w-xl">
              اتصل بفريق ABS للتأكد من أن المسار المرغوب مفتوح فعلاً للعودة الدراسية المعنية، وللاطلاع على شروط
              القبول والوثائق المطلوبة والتقويم.
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
            <Link href="/apply">
              <Button size="lg" variant="outline">
                قدّم ترشّحك
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
