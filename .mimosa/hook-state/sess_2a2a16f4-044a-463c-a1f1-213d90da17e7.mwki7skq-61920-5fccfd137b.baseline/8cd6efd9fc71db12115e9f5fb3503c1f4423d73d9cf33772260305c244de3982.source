import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Image from "next/image"
import Link from "next/link"
import {
  Handshake,
  Users,
  Building,
  BriefcaseBusiness,
  Mic,
  ArrowLeftRight,
  ShieldCheck,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = buildMetadata({
  title: "الشركات والشركاء | ABS",
  description: "شركات ومؤسسات ومنظمات: ابنوا مع ABS علاقات مفيدة — تدخلات مهنيين، زيارات، مشاريع تطبيقية، تدريبات ومؤتمرات بباماكو.",
  path: "/international/partnerships",
  locale: "ar",
})

// Formes de collaboration — document V3, §11.1
const collaborations = [
  {
    icon: Users,
    title: "تدخلات المهنيين",
    description:
      "يتقدم مهنيون لمشاركة خبرتهم وتوضيح واقعيات المهن للطلبة.",
  },
  {
    icon: Building,
    title: "الزيارات",
    description:
      "التعرف على الشركات والمؤسسات لربط التدريس بالميدان.",
  },
  {
    icon: BriefcaseBusiness,
    title: "المشاريع التطبيقية",
    description:
      "أعمال ينفذها الطلبة حول إشكالات حقيقية تقترحها المنظمات.",
  },
  {
    icon: Handshake,
    title: "التدريبات",
    description:
      "انغماس في الشركات يتيح تطبيق الكفاءات المكتسبة في التكوين.",
  },
  {
    icon: Mic,
    title: "المؤتمرات",
    description:
      "لقاءات ومؤتمرات يشار في إدارتها فاعلون من العالم الاقتصادي والمؤسسي.",
  },
  {
    icon: ArrowLeftRight,
    title: "تبادل الكفاءات",
    description:
      "تعاونات قائمة على تقاسم الخبرة، وفق الاتفاقيات المبرمة.",
  },
]

export default function PartnershipsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 py-20 text-white">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 border border-cyan-400/40 bg-cyan-400/10 text-cyan-400">
            <Handshake className="mr-1 h-3.5 w-3.5" />
            الشركات والشركاء
          </Badge>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            بناء علاقات مفيدة
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-blue-100">
            ترغب ABS في تطوير علاقاتها مع الشركات والمؤسسات والمنظمات المهنية وفاعلي التنمية من أجل
            تقريب البرامج التكوينية من واقعيات الميدان.
          </p>
        </div>
      </section>

      {/* Formes de collaboration — document V3, §11.1 */}
      <section className="container mx-auto py-16">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-bold text-blue-900">تعاونات في خدمة التكوين</h2>
            <p className="mb-8 text-slate-600">
              يمكن أن تتخذ هذه العلاقات أشكالاً مختلفة، وفق الاتفاقيات المبرمة بين ABS وشركائها.
            </p>
            <div className="grid gap-5 sm:grid-cols-2">
              {collaborations.map((item) => (
                <Card key={item.title} className="border-slate-200">
                  <CardContent className="pt-6">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-700/10">
                      <item.icon className="h-5 w-5 text-blue-700" />
                    </div>
                    <h3 className="mb-1 font-bold text-blue-900">{item.title}</h3>
                    <p className="text-sm text-slate-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-md">
              <Image
                src="/images/documents/v3-image3.jpg"
                alt="قيادة ABS في جلسة عمل مع مسؤولين رسميين"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-3 text-sm text-slate-500">
              حياة الحرم الجامعي: طلبة في تواصل دائم مع الواقعيات المهنية.
            </p>
          </div>
        </div>
      </section>

      {/* Proposer une collaboration — document V3, §11.2 */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto">
          <Card className="mx-auto max-w-3xl border-slate-200 shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-900">اقترح تعاوناً</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-slate-600">
                هل تمثلون شركة أو مؤسسة أو منظمة وترغبون في تبادل الحوار مع ABS؟ قدّموا مؤسستكم
                ومجال نشاطكم وشكل التعاون المتصور. وستدرس الفريق مقترحكم ويعود إليكم وفق الإمكانات
                وأولويات المؤسسة.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-blue-700 text-white hover:bg-blue-900">
                  اقترح شراكة
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Règle de publication — document V3, §11.3 */}
      <section className="container mx-auto py-12">
        <div className="mx-auto flex max-w-3xl items-start gap-4 rounded-xl border border-amber-200 bg-amber-50 p-6">
          <ShieldCheck className="mt-0.5 h-6 w-6 shrink-0 text-amber-600" />
          <div>
            <h2 className="mb-1 font-bold text-amber-900">ملاحظة حول نشر الشركاء</h2>
            <p className="text-sm text-amber-800">
              لا تُعرض على هذه الصفحة إلا الشراكات التي منحت موافقتها والتي يمكن توثيق علاقتها
              بـ ABS. ولا يُستخدم أي شعار أو اسم أو إشارة «شريك رسمي» دون تفويض ودون اتفاق قابل
              للتحقق.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
