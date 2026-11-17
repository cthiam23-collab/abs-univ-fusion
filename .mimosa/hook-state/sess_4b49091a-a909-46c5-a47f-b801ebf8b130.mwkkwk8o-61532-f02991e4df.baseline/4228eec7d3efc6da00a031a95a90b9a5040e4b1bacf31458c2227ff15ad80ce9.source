import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Calendar, Clock, Users } from "lucide-react"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "استشارة التوجّه | ABS",
  description: "استشارة وتوجّه مهني فردي لطلبة ABS — African Business School، بالانسجام مع قطب التكوين.",
  path: "/career-services/counseling",
  locale: "ar",
})

export default function CareerCounselingPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">استشارة التوجّه المهني</h1>
      <p className="text-xl mb-8">
        استفيدوا من مرافقة شخصية في بلورة مشروعكم المهني، بالانسجام مع قطب تكوينكم.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="mr-2" />
              لقاءات فردية
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              لقاء مع فريق المرافقة لمناقشة مشروعكم وبناء خطة عمل ملائمة لأهدافكم.
            </p>
            <Button>طلب لقاء</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="mr-2" />
              ورشات جماعية
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              ورشات جماعية لاستكشاف المهن والتبادل مع زملائكم والتحضير لإدماجكم المهني.
            </p>
            <Button>اطّلعوا على الورشات</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="mr-2" />
              أسئلة سريعة
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              للسؤال العابر حول توجّهكم أو سيرتكم الذاتية، تواصلوا مع الإدارة التي ستخبركم بالأوقات المتاحة.
            </p>
            <Button>تواصلوا معنا</Button>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-3xl font-bold mb-4">فريق المرافقة لدينا</h2>
      <p className="mb-8">
        يرافق الفريق المكلف بالتوجّه والإدماج المهني طلبة كل قطب من أقطاب التكوين. ويُعرَض أعضاؤه على الطلبة خلال
        جلسات المرافقة.
      </p>

      {/* إضافة نماذج المستشارين هنا */}

      <h2 className="text-3xl font-bold mb-4">الوسائل</h2>
      <p className="mb-8">حضّروا جلسة توجّهكم باستكشاف وسائلنا.</p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>تقييم الكفايات</CardTitle>
          </CardHeader>
          <CardContent>
            <p>تحديد نقاط قوتكم واهتماماتكم لتوجيه مشروعكم.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>أدلة حسب القطاع</CardTitle>
          </CardHeader>
          <CardContent>
            <p>اكتشاف القطاعات المتصلة بتكوينكم وآفاق التوظيف الممكنة.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>التحضير للمقابلات</CardTitle>
          </CardHeader>
          <CardContent>
            <p>نصائح لمواجهة مقابلات التربص أو التوظيف بثقة.</p>
          </CardContent>
        </Card>
      </div>

      <Link href="/career-services">
        <Button variant="outline">العودة إلى الخدمات المهنية</Button>
      </Link>
    </div>
  )
}
