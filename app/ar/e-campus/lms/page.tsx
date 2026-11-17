import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "منصة LMS | ABS",
  description: "منصة التعلّم الإلكتروني لجامعة ABS — African Business School: الدعامات، الواجبات، النقاشات وتتبّع التقدّم.",
  path: "/e-campus/lms",
  locale: "ar",
})

export default function LMSPage() {
  const lmsFeatures = [
    {
      title: "دعامات الدروس",
      description: "الاطلاع على محاضر الدروس والقراءات والوسائل المتعددة التي ينشرها الأساتذة",
      image:
        "/images/campus/IMG-20250212-WA0016.jpg",
    },
    {
      title: "الواجبات والتقييمات",
      description: "تسليم أعمالكم واجتياز التقييمات الإلكترونية المنصوص عليها من أساتذتكم",
      image: "/images/campus/IMG-20250212-WA0022.jpg",
    },
    {
      title: "فضاءات النقاش",
      description: "التبادل مع زملائكم وأساتذتكم حول المقررات",
      image: "/images/campus/IMG-20250212-WA0022.jpg",
    },
    {
      title: "تتبّع النتائج",
      description: "الاطلاع على نقاطكم وتتبّع تقدّمكم الأكاديمي",
      image: "/images/campus/IMG-20250212-WA0022.jpg",
    },
  ]

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">منصة التعلّم الإلكتروني (LMS)</h1>

      <p className="text-xl mb-8">
        منصة التعلّم الإلكتروني لجامعة ABS هي مركزكم الأساسي لكل ما يتعلّق بمقرراتكم: الاطلاع على الدعامات، تسليم
        أعمالكم، المشاركة في النقاشات وتتبّع تقدّمكم، من حيث كنتم.
      </p>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">الميزات</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {lmsFeatures.map((feature, index) => (
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
        <h2 className="text-3xl font-semibold mb-6">الانطلاقة</h2>
        <Card>
          <CardContent className="pt-6">
            <ol className="list-decimal pl-6 space-y-2">
              <li>سجّلوا الدخول إلى المنصة بمعرّفاتكم الممنوحة من جامعة ABS</li>
              <li>تجدوا في لوحة التحكم جميع مقرراتكم المسجَّلة</li>
              <li>افتحوا مقرراً للوصول إلى دعاماته وأعماله ونقاشاته</li>
              <li>اطّلعوا على التقويم للمواعيد والآجال المهمة</li>
              <li>اضبطوا إشعاراتكم لمواصلة الاطلاع على أنشطة مقرراتكم</li>
            </ol>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-6">المساعدة</h2>
        <p className="mb-4">
          هل تواجهون صعوبة مع المنصة؟ تواصلوا مع الإدارة: سوف يوجّهكم الفريق نحو المساعدة المناسبة ويبلّغكم بترتيبات
          الدخول.
        </p>
        <Link href="/e-campus/lms/support">
          <Button size="lg">الحصول على مساعدة</Button>
        </Link>
      </section>
    </div>
  )
}
