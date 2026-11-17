import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Heart, Globe } from "lucide-react"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "دعم الطلبة | ABS",
  description: "خدمات الدعم والمرافقة لطلبة ABS — African Business School: تتبّع أكاديمي، إصغاء وطلبة دوليون.",
  path: "/student-life/support",
  locale: "ar",
})

export default function StudentSupportPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold text-primary mb-8">دعم الطلبة</h1>

      <p className="text-xl text-muted-foreground mb-8">
        تحرص جامعة ABS على مرافقة كل طالب على مدار مساره، من أجل نجاحه الأكاديمي كما من أجل عافيته الشخصية.
      </p>

      <div className="grid gap-6 md:grid-cols-3 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center">
              <BookOpen className="mr-2 h-6 w-6" />
              المرافقة الأكاديمية
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-muted-foreground">
              <li>تتبّع تربوي للطلبة</li>
              <li>مساعدة على تنظيم العمل</li>
              <li>دعم في التحضير للأعمال والمشاريع المنصوص عليها في المخططات التربوية المعتمدة</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center">
              <Heart className="mr-2 h-6 w-6" />
              الإصغاء والعافية
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-muted-foreground">
              <li>فريق يُصغي إلى الطلبة</li>
              <li>دعم عند الصعوبات الشخصية أو الأكاديمية</li>
              <li>توجيه نحو المُحاور المناسبين عند الحاجة</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center">
              <Globe className="mr-2 h-6 w-6" />
              الطلبة الدوليون
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-muted-foreground">
              <li>استقبال وإندماج الطلبة القادمين من الخارج</li>
              <li>معالم عملية للحياة في باماكو</li>
              <li>دعم لغوي في إطار ثنائية اللغة الفرنسية-الإنجليزية</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <p className="text-muted-foreground">
        فريقنا رهن إشارتكم على مدار مساركم. لا تترددوا في التواصل مع الإدارة إن احتجتم مساعدة: كل طلب سيُعالَج
        باهتمام.
      </p>
    </div>
  )
}
