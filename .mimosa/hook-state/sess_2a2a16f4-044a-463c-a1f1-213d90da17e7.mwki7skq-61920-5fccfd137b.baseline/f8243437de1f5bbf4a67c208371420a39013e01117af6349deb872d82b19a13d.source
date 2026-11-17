import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "التغذية الطلابية | ABS",
  description: "حلول التغذية لطلبة ABS — African Business School: الترتيبات تُبلَّغ من طرف الإدارة في بداية السنة.",
  path: "/student-life/dining",
  locale: "ar",
})

const diningOptions = [
  {
    name: "التغذية في الحرم الجامعي",
    description:
      "حلول تغذية متاحة للطلبة داخل الحرم، باحترام قواعد الحياة في المؤسسة.",
    image: "/images/campus/IMG-20250212-WA0025.jpg",
  },
  {
    name: "الصيغ والتوقيت",
    description:
      "تُبلَّغ الصيغ المطروحة وتوقيتات الخدمة من طرف الإدارة في بداية السنة.",
    image: "/images/campus/IMG-20250212-WA0025.jpg",
  },
  {
    name: "الحالات الخاصة",
    description:
      "لأي طلب خاص متعلّق بالغذاء، توجّهوا إلى الإدارة التي ستدرس الحلول الممكنة.",
    image: "/images/campus/IMG-20250212-WA0025.jpg",
  },
  {
    name: "التغذية على مقربة",
    description:
      "يقع الحرم بحمدلاي ACI 2000، باماكو، في حيّ يجد فيه الطلبة نقاط تغذية متنوعة.",
    image: "/images/campus/IMG-20250212-WA0025.jpg",
  },
]

export default function DiningPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">التغذية الطلابية</h1>

      <p className="text-xl mb-8">
        تحرص جامعة ABS على أن يمتلك طلبتها حلول تغذية ملائمة لقيودهم وجداولهم. تُبلَّغ الترتيبات الدقيقة (الأماكن،
        الصيغ، التعريفات) من طرف الإدارة.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 mb-12">
        {diningOptions.map((option, index) => (
          <Card key={index} className="overflow-hidden">
            <Image
              src={option.image || "/placeholder.svg"}
              alt={option.name}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <CardTitle>{option.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{option.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>معلومات عملية</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            <li>تتبع توقيتات التغذية تنظيم الدروس المبلَّغ عنه من طرف الإدارة</li>
            <li>تُحدَّد الصيغ وشروط الولوج في بداية السنة الأكاديمية</li>
            <li>لأي سؤال حول التغذية، تواصلوا مع الإدارة في +223 78 14 14 88 أو عبر البريد الإلكتروني abs.mail1290@gmail.com</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
