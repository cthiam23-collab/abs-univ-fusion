import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Calendar, MapPin } from "lucide-react"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "الفعاليات المهنية | ABS",
  description: "لقاءات ومؤتمرات وفعاليات مهنية تنظمها ABS — African Business School، تُعلن عند البرمجة الرسمية.",
  path: "/career-services/events",
  locale: "ar",
})

export default function CareerEventsPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">الفعاليات المهنية</h1>
      <p className="text-xl mb-8">
        لقاءات مع مهنيين ومؤتمرات حسب القطاع ولحظات تبادل للتحضير لإدماجكم المهني. تُعلن المواعيد عند البرمجة الرسمية
        للفعاليات.
      </p>

      <h2 className="text-3xl font-bold mb-4">أنواع الفعاليات المطروحة</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>منتدى المهن السنوي</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2">
              <MapPin className="inline mr-2" />
              حرم جامعة ABS، باماكو
            </p>
            <p className="mb-4">
              وقت للقاء بين الطلبة وشركات من قطاعات مختلفة، في خدمة الإدماج المهني.
            </p>
            <Link href="/events/annual-career-fair">
              <Button>اعرف المزيد</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>مؤتمرات حسب القطاع</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2">
              <Calendar className="inline mr-2" />
              على مدار السنة
            </p>
            <p className="mb-4">
              مُداخلات لمهنيين متصلين بالأقطاب الخمسة للتكوين، في الموقع أو عن بعد حسب الدورات.
            </p>
            <Button>التسجيل</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>لقاءات وشبكة علاقات</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2">
              <MapPin className="inline mr-2" />
              في الحرم الجامعي
            </p>
            <p className="mb-4">
              لحظات تبادل مع مهنيين وخريجين لتطوير شبكتكم.
            </p>
            <Button>التسجيل</Button>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-3xl font-bold mb-4">ورشات مطروحة أصلاً للطلبة</h2>
      <p className="mb-8">
        على مدار السنة، ترافق ورشات عملية تحضيركم للحياة المهنية.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>ورشة السيرة الذاتية ورسالة التحفيز</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">بناء سيرة ذاتية ورسالة تحفيز واضحتين ومقنعتين.</p>
            <Link href="/career-services/resume-workshop">
              <Button variant="outline">اطّلعوا على ورشات السيرة الذاتية</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>التحضير للمقابلات</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">التدرّب على تقديم مساركم والرد بثقة.</p>
            <Link href="/career-services/counseling">
              <Button variant="outline">اطّلعوا على استشارة التوجّه</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>لقاءات مع الخريجين</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">الاستماع إلى مسارات مهنية ملهمة وطرح أسئلتكم.</p>
            <Button variant="outline">تواصلوا معنا</Button>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-3xl font-bold mb-4">المشاركة أو التدخّل</h2>
      <p className="mb-8">
        هل تودّون احتضان فعالية، التدخّل كمهنيين أو اقتراح محور؟ تواصلوا مع الإدارة: سنكون سعداء بالتبادل معكم.
      </p>
      <Link href="/contact">
        <Button>تواصلوا معنا</Button>
      </Link>

      <div className="mt-12">
        <Link href="/career-services">
          <Button variant="outline">العودة إلى الخدمات المهنية</Button>
        </Link>
      </div>
    </div>
  )
}
