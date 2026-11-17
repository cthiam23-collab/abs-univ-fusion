import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CustomTabs, CustomTabsContent, CustomTabsList, CustomTabsTrigger } from "@/components/ui/custom-tabs"
import Image from "next/image"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "المنظمات الطلابية | ABS",
  description: "منظمات وجمعيات طلبة ABS — African Business School: أنواع مبادرات تتطوّر كل سنة حسب اهتمامات الطلبة.",
  path: "/student-life/organizations",
  locale: "ar",
})

const organizations = [
  {
    name: "مبادرات أكاديمية",
    description:
      "مجموعات عمل، مراجعة جماعية وتعاون بين الطلبة حول تدريسات الأقطاب الخمسة للتكوين.",
    image: "/images/campus/IMG-20250212-WA0013.jpg",
    category: "academique",
  },
  {
    name: "المناظرات والتعبير الشفهي",
    description:
      "تمارين مناظرة وتعبير شفهي، مفيدة للتكوين المهني والثقة بالنفس.",
    image: "/images/campus/IMG-20250212-WA0014.jpg",
    category: "academique",
  },
  {
    name: "التبادلات الثقافية",
    description:
      "لقاءات وأنشطة تحتفي بتنوع الثقافات الأفريقية وتعزّز إندماج الجميع.",
    image:
      "/images/campus/IMG-20250212-WA0015.jpg",
    category: "culturel",
  },
  {
    name: "روح المقاولة",
    description:
      "تبادلات حول ريادة الأعمال والمشاريع، بالانسجام مع تكوين إدارة الأعمال.",
    image: "/images/campus/IMG-20250212-WA0017.jpg",
    category: "professionnel",
  },
  {
    name: "الالتزام والمواطنة",
    description:
      "مبادرات تحسيسية والتزام مواطني يحملها الطلبة في خدمة محيطهم.",
    image: "/images/campus/IMG-20250212-WA0019.jpg",
    category: "engagement",
  },
  {
    name: "الإبداع الفني",
    description:
      "فضاءات للتعبير الفني والثقافي للطلبة الراغبين في مشاركة مواهبهم.",
    image: "/images/campus/IMG-20250212-WA0018.jpg",
    category: "culturel",
  },
]

export default function StudentOrganizationsPage() {
  const categories = ["الكل", "أكاديمي", "ثقافي", "مهني", "التزام"]
  const categoryKeys: Record<string, string> = {
    "أكاديمي": "academique",
    "ثقافي": "culturel",
    "مهني": "professionnel",
    "التزام": "engagement",
  }

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">المنظمات الطلابية</h1>
      <p className="text-xl mb-4 text-center">
        تُبنى الحياة الجمعوية لجامعة ABS مع الطلبة وتتطوّر كل سنة حسب مبادراتهم
      </p>
      <p className="text-md mb-12 text-center text-muted-foreground">
        تعرض القائمة أدناه أنواعاً من المبادرات. لمعرفة المنظمات النشطة حالياً أو اقتراح إنشاء نادٍ، تواصلوا مع
        الإدارة.
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
              {organizations
                .filter((org) => category === "الكل" || org.category === categoryKeys[category])
                .map((org, index) => (
                  <Card key={index} className="hover:shadow-lg transition-duration-300">
                    <Image
                      src={org.image || "/placeholder.svg"}
                      alt={org.name}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <CardHeader>
                      <CardTitle>{org.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{org.description}</p>
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
