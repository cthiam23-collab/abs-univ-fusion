import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CustomTabs, CustomTabsContent, CustomTabsList, CustomTabsTrigger } from "@/components/ui/custom-tabs"
import Image from "next/image"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "السكن الطلابي | ABS",
  description: "معلومات السكن والمرافقة لطلبة ABS — African Business School بباماكو، حسب التوفرات المبلَّغة من الإدارة.",
  path: "/student-life/housing",
  locale: "ar",
})

const housingOptions = [
  {
    name: "البحث عن سكن",
    description:
      "توجّه الإدارة الطلبة في بحثهم عن سكن بباماكو، حسب التوفرات ووضعيتهم.",
    amenities: ["نصائح للبحث", "معالم عن الأحياء القريبة من الحرم الجامعي", "معلومات حسب التوفرات"],
    image: "/images/campus/IMG-20250212-WA0006.jpg",
    category: "logement",
  },
  {
    name: "استقرار الطلبة الجدد",
    description:
      "الطلبة القادمون من مناطق أخرى أو من الخارج مرافَقون في أولى إجراءات استقرارهم.",
    amenities: ["استقبال من الإدارة", "توجيه حول الإجراءات العملية", "تواصُل حسب الحاجات"],
    image: "/images/campus/IMG-20250212-WA0012.jpg",
    category: "logement",
  },
  {
    name: "الحياة اليومية في باماكو",
    description:
      "يقع الحرم بحمدلاي ACI 2000، حيّ سهل الوصول ييسّر يوميات الطلبة: النقل، المحلات التجارية والخدمات.",
    amenities: ["الولوج إلى الحرم", "محلات وخدمات قريبة", "النقل حسب محاور المدينة"],
    image: "/images/campus/IMG-20250212-WA0007.jpg",
    category: "vie-quotidienne",
  },
  {
    name: "أسئلة عملية",
    description:
      "العقود، ميزانية الكراء، الأمن: تقدّم الإدارة معالم عامة وتوجّه نحو المُحاور المناسبين.",
    amenities: ["معالم عامة حول الكراء", "التوجيه نحو الجهات المختصة", "مرافقة حسب الحالات"],
    image: "/images/campus/IMG-20250212-WA0009.jpg",
    category: "vie-quotidienne",
  },
]

export default function HousingPage() {
  const categories = ["الكل", "السكن", "الحياة اليومية"]

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">السكن الطلابي</h1>
      <p className="text-xl mb-4 text-center">
        معلومات ومرافقة للسكن في باماكو خلال دراستكم في جامعة ABS
      </p>
      <p className="text-md mb-12 text-center text-muted-foreground">
        تُبلَّغ الترتيبات المفصَّلة والتوفرات من طرف الإدارة: تواصلوا معها لمعرفة الخيارات الممكنة.
      </p>

      <CustomTabs defaultValue="الكل" className="w-full">
        <CustomTabsList className="flex justify-center mb-8">
          {categories.map((category) => (
            <CustomTabsTrigger key={category} value={category} className="px-4 py-2">
              {category}
            </CustomTabsTrigger>
          ))}
        </CustomTabsList>
        {categories.map((category) => (
          <CustomTabsContent key={category} value={category}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {housingOptions
                .filter((option) => category === "الكل" || option.category === (category === "السكن" ? "logement" : "vie-quotidienne"))
                .map((option, index) => (
                  <Card key={index} className="hover:shadow-lg transition-duration-300">
                    <Image
                      src={option.image || "/placeholder.svg"}
                      alt={option.name}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <CardHeader>
                      <CardTitle>{option.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">{option.description}</p>
                      <h4 className="font-semibold mb-2">نقاط الانتباه:</h4>
                      <ul className="list-disc list-inside">
                        {option.amenities.map((amenity, index) => (
                          <li key={index}>{amenity}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </CustomTabsContent>
        ))}
      </CustomTabs>
    </div>
  )
}
