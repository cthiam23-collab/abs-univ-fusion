import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Calendar, Clock, Users, FileText } from "lucide-react"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "ورشات السيرة الذاتية | ABS",
  description: "ورشات كتابة السيرة الذاتية ورسائل التحفيز لطلبة ABS — African Business School، مبرمَجة حسب تقويم السنة.",
  path: "/career-services/resume-workshop",
  locale: "ar",
})

export default function ResumeWorkshopPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">ورشات السيرة الذاتية ورسالة التحفيز</h1>
      <p className="text-xl mb-8">
        تعلّموا بناء سيرة ذاتية ورسالة تحفيز واضحتين ومهنييتين تُبرزان مساركم.
      </p>

      <h2 className="text-3xl font-bold mb-4">محاور الورشات</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>أساسيات السيرة الذاتية الجيدة</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2">
              <Calendar className="inline mr-2" />
              مبرمَجة حسب تقويم السنة
            </p>
            <p className="mb-2">
              <Clock className="inline mr-2" />
              المدة تُبلَّغ عند التسجيل
            </p>
            <p className="mb-2">
              <Users className="inline mr-2" />
              أماكن محدودة في كل جلسة
            </p>
            <p className="mb-4">فهم بنية سيرة ذاتية فعّالة وتكييفها مع كل ترشّح.</p>
            <Button>التسجيل</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>تقنيات متقدّمة</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2">
              <Calendar className="inline mr-2" />
              مبرمَجة حسب تقويم السنة
            </p>
            <p className="mb-2">
              <Clock className="inline mr-2" />
              المدة تُبلَّغ عند التسجيل
            </p>
            <p className="mb-2">
              <Users className="inline mr-2" />
              أماكن محدودة في كل جلسة
            </p>
            <p className="mb-4">
              تطوير سيرتكم الذاتية باستراتيجيات عرض وإبراز لإنجازاتكم.
            </p>
            <Button>التسجيل</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>رسالة التحفيز</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2">
              <Calendar className="inline mr-2" />
              مبرمَجة حسب تقويم السنة
            </p>
            <p className="mb-2">
              <Clock className="inline mr-2" />
              المدة تُبلَّغ عند التسجيل
            </p>
            <p className="mb-2">
              <Users className="inline mr-2" />
              أماكن محدودة في كل جلسة
            </p>
            <p className="mb-4">كتابة رسالة تحفيز منسجمة مع سيرتكم الذاتية والمنصب المستهدف.</p>
            <Button>التسجيل</Button>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-3xl font-bold mb-4">الدعامات والوسائل</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="mr-2" />
              نماذج سير ذاتية
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">تُشارك أمثلة عن بنية السيرة الذاتية خلال الورشات ومن طرف الإدارة.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="mr-2" />
              صيغ فعلية فعّالة
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">قائمة صيغ دينامية لوصف تجاربكم بدقة.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="mr-2" />
              أمثلة رسائل
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">أمثلة لرسائل تحفيز لأنواع مختلفة من الترشّحات.</p>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-3xl font-bold mb-4">المراجعة الشخصية</h2>
      <p className="mb-8">
        قدّموا سيرتكم الذاتية إلى فريق المرافقة لتلقّي ملاحظات ملائمة لوضعيتكم. تواصلوا مع الإدارة لمعرفة الترتيبات
        والأوقات المتاحة.
      </p>
      <Button>طلب مراجعة</Button>

      <div className="mt-12">
        <Link href="/career-services">
          <Button variant="outline">العودة إلى الخدمات المهنية</Button>
        </Link>
      </div>
    </div>
  )
}
