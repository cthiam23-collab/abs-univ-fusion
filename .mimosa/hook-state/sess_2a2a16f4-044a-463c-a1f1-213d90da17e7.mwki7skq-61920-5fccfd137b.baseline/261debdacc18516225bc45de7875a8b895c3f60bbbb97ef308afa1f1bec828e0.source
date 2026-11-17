import Image from "next/image"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "الإندماج الثقافي | ABS",
  description: "الانفتاح الثقافي والحياة الجمعوية في ABS — African Business School: حوار، ثقافات ومبادرات طلابية.",
  path: "/cultural-integration",
  locale: "ar",
})

export default function CulturalIntegrationPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">الإندماج الثقافي في ABS</h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card className="overflow-hidden">
          <Image
            src="/images/campus/IMG-20250212-WA0017.jpg"
            alt="لقاءات ثقافية بين الطلبة"
            width={400}
            height={300}
            className="w-full h-[200px] object-cover"
          />
          <CardHeader>
            <CardTitle>اللقاءات الثقافية</CardTitle>
            <CardDescription>
              لحظات تبادل تحتفي بغنى الثقافات الأفريقية وتنوعها.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="overflow-hidden">
          <Image
            src="/images/campus/IMG-20250212-WA0022.jpg"
            alt="الفعاليات الثقافية"
            width={400}
            height={300}
            className="w-full h-[200px] object-cover"
          />
          <CardHeader>
            <CardTitle>الفعاليات الثقافية</CardTitle>
            <CardDescription>
              مؤتمرات ومعارض واحتفالات تُقطِّع السنة عند برمجتها رسمياً.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="overflow-hidden">
          <Image
            src="/images/campus/IMG-20250212-WA0018.jpg"
            alt="التنوع الثقافي"
            width={400}
            height={300}
            className="w-full h-[200px] object-cover"
          />
          <CardHeader>
            <CardTitle>التنوع الثقافي</CardTitle>
            <CardDescription>
              طلبة قادمون من أُفق مختلف يتعلّمون التعرّف على بعضهم والعمل معاً.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      <div className="mt-12 prose prose-lg max-w-none">
        <h2 className="text-3xl font-semibold mb-6">التزامنا من أجل الإندماج الثقافي</h2>
        <p className="mb-4">
          في جامعة ABS — African Business School، نعتبر الانفتاح الثقافي بُعداً جوهرياً من التكوين: فهو يُعِدّ
          خريجين قادرين على التطوّر في محيطات متنوعة، في أفريقيا وخارجها. وتشجّع الحياة في الحرم الجامعي الحوار بين
          طلبة من مسارات وثقافات مختلفة، في الروح البانأفريقية التي تحيي المؤسسة.
        </p>
        <p className="mb-4">
          ويُعاش هذا الانفتاح أيضاً في التدريسات: ثنائية اللغة الفرنسية-الإنجليزية، والاستهلال التدريجي للإسبانية في
          العلاقات والشؤون الدولية، والمشاريع والتربصات المنصوص عليها في المخططات التربوية المعتمدة، كلها فرص لتوسيع
          المرجعيات الثقافية.
        </p>

        <div className="bg-blue-50 p-6 rounded-lg mt-8">
          <h3 className="text-2xl font-semibold mb-4">أنواع الأنشطة المطروحة على مدار السنة</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>لقاءات وأيام تبادل حول الثقافات الأفريقية</li>
            <li>مؤتمرات ومُداخلات مع ضيوف</li>
            <li>مبادرات ثقافية يحملها الطلبة</li>
            <li>أوقات استقبال وإندماج للطلبة الجدد</li>
          </ul>
          <p className="mt-4 text-sm">
            يُبلَّغ بالتقويم الدقيق لهذه الأنشطة من طرف الإدارة عند البرمجة الرسمية للفعاليات.
          </p>
        </div>
      </div>
    </div>
  )
}
