import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "منتدى المهن السنوي | ABS",
  description: "منتدى المهن السنوي لجامعة ABS — African Business School: لقاءات بين الطلبة والشركات والمهنيين.",
  path: "/events/annual-career-fair",
  locale: "ar",
})

export default function AnnualCareerFairPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">منتدى المهن السنوي</h1>
      <p className="text-xl mb-8 text-muted-foreground">
        موعد بين الطلبة والشركات تنظّمه جامعة ABS — African Business School. تُعلن تواريخ وترتيبات كل دورة عند
        البرمجة الرسمية للفعالية.
      </p>

      <Image
        src="/images/campus/IMG-20250212-WA0022.jpg"
        alt="منتدى المهن السنوي"
        width={800}
        height={400}
        className="w-full h-64 object-cover rounded-lg mb-8"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>لمن؟</CardTitle>
          </CardHeader>
          <CardContent>
            <p>طلبة جامعة ABS، في الإجازة (ليسانس) والماجستير على السواء، في جميع أقطاب التكوين.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>أين؟</CardTitle>
          </CardHeader>
          <CardContent>
            <p>في حرم جامعة ABS، حمدلاي ACI 2000، باماكو.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>كيف تشاركون؟</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              تُبلَّغ ترتيبات التسجيل من طرف الإدارة مع اقتراب الفعالية، عبر القنوات الرسمية للمؤسسة.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="prose max-w-none">
        <h2>تقديم الفعالية</h2>
        <p>
          يمنح منتدى المهن السنوي لجامعة ABS الطلبة فرصة اللقاء بشركات ومهنيين من قطاعات مختلفة. سواء كنتم تبحثون عن
          تربص أو تجربة مهنية أولى أو مجرد معالم عن المهن، هذه الفعالية مصمَّمة لمساعدتكم في مساركم.
        </p>

        <h2>ما يمكن أن تتضمّنه الفعالية</h2>
        <ul>
          <li>لقاءات بشركات ومهنيين حسب الدورات</li>
          <li>تبادلات حول المهن المتصلة بالأقطاب الخمسة للتكوين</li>
          <li>نصائح لإعداد الملف والمقابلة</li>
          <li>آفاق تربصات، بالانسجام مع المخططات التربوية المعتمدة</li>
        </ul>

        <h2>التحضير الجيد</h2>
        <ol>
          <li>حدّثوا سيرتكم الذاتية وحضّروا عدة نماذج منها</li>
          <li>اطّلعوا مسبقاً على القطاعات والشركات الحاضرة</li>
          <li>حضّروا تقديماً موجزاً لمساركم وأهدافكم</li>
          <li>احضروا بمظهر مهني</li>
        </ol>

        <h2>معلومات عملية</h2>
        <p>
          يُبلَّغ بتاريخ وبرنامج مفصَّل وقائمة مشاركي كل دورة من طرف الإدارة عند البرمجة الرسمية للفعالية. تواصلوا مع
          الإدارة لأي سؤال أو لاقتراح مشاركة شركتكم.
        </p>
      </div>
    </div>
  )
}
