import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Image from "next/image"
import Link from "next/link"
import {
  Users,
  CalendarDays,
  Megaphone,
  Images,
  Quote,
  Leaf,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = buildMetadata({
  title: "الحياة الطلابية | ABS",
  description: "الحياة الطلابية في ABS — African Business School: مجتمع يتعلم معاً، فعاليات ولقاءات، سفراء، معرض صور وشهادات بباماكو.",
  path: "/campus-life",
  locale: "ar",
})

// Vie étudiante — document V3, §8
const sections = [
  {
    icon: CalendarDays,
    title: "الفعاليات واللقاءات",
    description:
      "المؤتمرات وأيام التوجيه واللقاءات مع المهنيين والزيارات وأنشطة التوعية قد تُثري مسار الطلبة. ويحدد كل إعلان العنوان والتاريخ والمكان وشروط المشاركة وجهة الاتصال المسؤولة.",
  },
  {
    icon: Megaphone,
    title: "سفراء ABS",
    description:
      "يسهم سفراء ABS في التعريف بحياة المؤسسة، ومشاركة تجربتهم، وتوجيه الراغبين في معرفة المزيد. ويستند دورهم إلى تواصل أصيل ومحترم وقابل للتحقق.",
  },
  {
    icon: Images,
    title: "معرض الصور والفيديوهات",
    description:
      "يُبرز المعرض الحصص والمشاريع والفعاليات ولحظات الحياة في الحرم الجامعي. الصور والفيديوهات المنشورة مؤرَّخة ومُعلَّقة ومرفقة بالتفويضات اللازمة، دون معلومات شخصية أو بيانات حساسة.",
  },
  {
    icon: Quote,
    title: "الشهادات",
    description:
      "شهادات الطلبة والخريجين والآباء أو المهنيين أصيلة، أعاد مؤلفوها قراءتها، ونُشرت بموافقتهم. ولا تُقدَّم بوصفها دليلاً إحصائياً على النجاح أو الإدماج.",
  },
]

export default function CampusLifePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero — document V3, §8.1 */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 py-20 text-white">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 border border-cyan-400/40 bg-cyan-400/10 text-cyan-400">
            <Users className="mr-1 h-3.5 w-3.5" />
            الحياة الطلابية · باماكو
          </Badge>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            مجتمع يتعلم معاً
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-blue-100">
            تُبنى الحياة الطلابية بالمشاركة والفضول والاحترام المتبادل. وتشجع ABS المبادرات التي
            تعزز التعبير وحس المسؤولية والتعاضد والانفتاح على المجتمع.
          </p>
        </div>
      </section>

      {/* Image + citation — document V3, §3.6 */}
      <section className="container mx-auto -mt-10 px-4 pb-4">
        <div className="grid items-center gap-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg lg:grid-cols-2 lg:p-8">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl">
            <Image
              src="/images/documents/v3-image1.png"
              alt="طلبة ABS في الحرم الجامعي"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-bold text-blue-900">
              الحياة في ABS خارج أوقات الدروس
            </h2>
            <blockquote className="border-l-4 border-cyan-400 pl-4 text-slate-600">
              « تُبنى الحياة في ABS أيضاً خارج أوقات الدروس: المؤتمرات واللقاءات والزيارات
              والمشاريع والفعاليات والمبادرات الطلابية تسهم في توسيع الآفاق والاحتراف. »
            </blockquote>
            <p className="mt-4 text-sm text-slate-500">
              الأنشطة المعروضة في الموقع تقابل فعاليات منجزة أو مبرمجة رسمياً.
            </p>
          </div>
        </div>
      </section>

      {/* Volets de la vie étudiante — document V3, §8.2 à §8.5 */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-blue-900">ما تصنع حياة الحرم الجامعي</h2>
          <p className="mt-3 text-slate-600">
            الفعاليات والسفراء والمعرض والشهادات: مختلف أوجه التجربة الطلابية في ABS.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {sections.map((section) => (
            <Card key={section.title} className="border-slate-200">
              <CardContent className="pt-6">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-blue-700/10">
                  <section.icon className="h-5 w-5 text-blue-700" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-blue-900">{section.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{section.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Engagement durable — document CM1, §5 */}
      <section className="bg-blue-950 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-400/10">
              <Leaf className="h-6 w-6 text-cyan-400" />
            </div>
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">التزام مستدام</h2>
            <p className="text-blue-100">
              تعزم ABS إدماج المسؤولية المجتمعية والتنمية المستدامة في رؤيتها للتكوين: تنمية وعي
              الطلبة بالعواقب الاقتصادية والاجتماعية والبيئية والأخلاقية للقرارات، وتشجيع المبادرات
              الهادفة إلى تقليص النفايات وتثمينها، والاقتصاد الدائري، والتوعية البيئية، والمشاريع
              الطلابية ذات الأثر الاجتماعي.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-md">
          <h2 className="mb-3 text-2xl font-bold text-blue-900">
            هل ترغب في الانضمام إلى مجتمع ABS؟
          </h2>
          <p className="mx-auto mb-6 max-w-xl text-slate-600">
            اكتشف البرامج التكوينية، أو استعرض القبول والتسجيل، أو اتصل بالفريق لأي سؤال حول الحياة
            في ABS.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/admissions">
              <Button size="lg" className="bg-blue-700 text-white hover:bg-blue-900">
                ترشّح
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-blue-700 text-blue-700 hover:bg-blue-50"
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
