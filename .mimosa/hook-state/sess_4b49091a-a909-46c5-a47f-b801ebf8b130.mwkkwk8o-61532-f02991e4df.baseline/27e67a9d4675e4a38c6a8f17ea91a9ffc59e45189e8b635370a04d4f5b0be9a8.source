import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "الاستشارة الأكاديمية | ABS",
  description: "الاستشارة والتتبّع الأكاديمي لطلبة ABS — African Business School ضمن الأقطاب الخمسة للتكوين.",
  path: "/student-resources/academic-advising",
  locale: "ar",
})

export default function AcademicAdvisingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">التتبّع والاستشارة الأكاديمية</h1>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>ما هي الاستشارة الأكاديمية؟</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            الاستشارة الأكاديمية علاقة مرافقة بين الطالب والفريق التربوي. هدفها مساعدة الطالب على بناء مسار دراسي
            منسجم مع اهتماماته وقدراته ومشروعه المهني، ضمن الأقطاب الخمسة للتكوين في جامعة ABS.
          </p>
        </CardContent>
      </Card>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>خدماتنا</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            <li>مساعدة على تنظيم الدراسات وتتبّع التقويم الأكاديمي</li>
            <li>التوجيه في اختيار المسارات داخل كل قطب من أقطاب التكوين</li>
            <li>تتبّع التقدّم الأكاديمي على مدار الفصول الدراسية</li>
            <li>التحضير للتربصات والمشاريع المنصوص عليها في المخططات التربوية المعتمدة</li>
            <li>استكشاف إمكانات مواصلة الدراسات، من الإجازة (ليسانس) (3 سنوات، 180 رصيداً) إلى الماجستير (سنتان، 120 رصيداً)</li>
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>اللقاء بمستشاركم</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            يرافق فريق التتبّع الأكاديمي الطلبة على مدار مسارهم. لتحديد موعد مع مستشار، تواصلوا مع الإدارة التي
            ستخبركم بالترتيبات والأوقات المتاحة.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
