import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "الفصول الافتراضية | ABS",
  description: "الفصول الافتراضية وأدوات التكوين عن بعد في ABS — African Business School: دروس مباشرة، عمل تعاوني وحصص مسجَّلة.",
  path: "/e-campus/virtual-classrooms",
  locale: "ar",
})

export default function VirtualClassroomsPage() {
  const features = [
    {
      title: "دروس مباشرة",
      description: "متابعة تدريسات في الوقت الحقيقي وطرح أسئلتكم أثناء الحصة",
      image:
        "/images/campus/IMG-20250212-WA0016.jpg",
    },
    {
      title: "العمل التعاوني",
      description: "تقدّم مشاريعكم الجماعية بفضل أدوات التعاون عن بعد",
      image: "/images/campus/IMG-20250212-WA0022.jpg",
    },
    {
      title: "حصص مسجَّلة",
      description: "إعادة مشاهدة التسجيلات المتاحة للمراجعة وفق إيقاعكم",
      image: "/images/campus/IMG-20250212-WA0022.jpg",
    },
    {
      title: "التبادل مع الأساتذة",
      description: "الاستفادة من أوقات تبادل فردي مع أساتذتكم حسب الترتيبات المحدَّدة",
      image: "/images/campus/IMG-20250212-WA0022.jpg",
    },
  ]

  const tips = [
    "احرصوا على توفر اتصال إنترنت مستقر",
    "استعملوا سماعة رأس للحصول على جودة صوتية أفضل",
    "اختاروا مكاناً هادئاً لمتابعة الدروس",
    "شاركوا بفعالية في التبادلات",
    "خذوا استراحات منتظمة لتجنّب إجهاد العين",
  ]

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">الفصول الافتراضية</h1>

      <p className="text-xl mb-8">
        تتيح الفصول الافتراضية متابعة تدريسات تفاعلية عن بعد، بالمواكبة مع برامج الأقطاب الخمسة للتكوين في جامعة ABS.
        سجّلوا الدخول وتبادلوا مع أساتذتكم وزملائكم، من حيث كنتم.
      </p>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">النقاط الرئيسية</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="overflow-hidden">
              <Image
                src={feature.image || "/placeholder.svg"}
                alt={feature.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">كيف تجري الأمور</h2>
        <Card>
          <CardContent className="pt-6">
            <ol className="list-decimal pl-6 space-y-2">
              <li>سجّلوا الدخول إلى البوابة الإلكترونية لجامعة ABS</li>
              <li>اطّلعوا على جدول فصولكم الافتراضية، المبلَّغ عنه من طرف الإدارة</li>
              <li>انقروا على رابط الحصة المبرمَجة في جدولكم</li>
              <li>انضمّوا إلى مؤتمر الفيديو بمعرّفاتكم في ABS</li>
              <li>شاركوا في الدرس، اطرحوا أسئلتكم وتبادلوا مع زملائكم</li>
            </ol>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">نصائح لمتابعة الدروس عن بعد بنجاح</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tips.map((tip, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <p>{tip}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-6">المساعدة التقنية</h2>
        <p className="mb-4">
          هل يوجد مشكل تقني مع الفصول الافتراضية؟ تواصلوا مع الإدارة لتوجيهكم نحو الدعم المناسب.
        </p>
        <Link href="/e-campus/support">
          <Button size="lg">الحصول على مساعدة تقنية</Button>
        </Link>
      </section>
    </div>
  )
}
