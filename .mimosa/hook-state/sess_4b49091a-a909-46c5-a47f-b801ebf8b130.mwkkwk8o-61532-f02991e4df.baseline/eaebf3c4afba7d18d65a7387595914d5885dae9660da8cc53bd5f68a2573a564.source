import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "الفعاليات | ABS",
  description: "مؤتمرات وأيام توجّه وفعاليات ABS — African Business School بباماكو: تُعلن المواعيد عند البرمجة الرسمية.",
  path: "/events",
  locale: "ar",
})

const events = [
  {
    title: "منتدى المهن السنوي",
    category: "career",
    description:
      "وقت للقاء بين الطلبة والمهنيين لاستكشاف آفاق التوظيف في قطاعات مختلفة.",
    image:
      "/images/campus/IMG-20250212-WA0022.jpg",
    link: "/events/annual-career-fair",
  },
  {
    title: "أيام التوجّه",
    category: "career",
    description:
      "أيام مخصَّصة لاكتشاف المهن ومسارات التكوين في الأقطاب الخمسة لـ ABS.",
    image:
      "/images/campus/IMG-20250212-WA0017.jpg",
    link: "",
  },
  {
    title: "المؤتمرات واللقاءات المهنية",
    category: "academic",
    description:
      "مُداخلات لضيوف وتبادلات مع مهنيين لإغناء التدريسات.",
    image: "/images/campus/IMG-20250212-WA0021.jpg",
    link: "",
  },
  {
    title: "الأنشطة الثقافية",
    category: "cultural",
    description:
      "لحظات بارزة تحتفي بتنوع الثقافات الأفريقية وإبداعات الطلبة.",
    image: "/images/campus/IMG-20250212-WA0021.jpg",
    link: "",
  },
]

export default function EventsPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">فعاليات جامعة ABS</h1>
      <p className="text-lg text-muted-foreground mb-8">
        مؤتمرات وأيام توجّه ولقاءات مع مهنيين وأنشطة ثقافية تُقطِّع حياة المؤسسة. تُعلن المواعيد على هذه الصفحة عند
        البرمجة الرسمية للفعاليات.
      </p>

      <Tabs defaultValue="all" className="w-full mb-8">
        <TabsList>
          <TabsTrigger value="all">جميع الفعاليات</TabsTrigger>
          <TabsTrigger value="academic">أكاديمية</TabsTrigger>
          <TabsTrigger value="cultural">ثقافية</TabsTrigger>
          <TabsTrigger value="career">مهنية</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {events.map((event, index) => (
              <Card key={index}>
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{event.description}</p>
                  {event.link && (
                    <Link href={event.link}>
                      <Button>اعرف المزيد</Button>
                    </Link>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="academic">
          <p className="text-muted-foreground">
            مؤتمرات ومُداخلات لضيوف ولقاءات مهنية تتصل بتدريسات الأقطاب الخمسة للتكوين. تُعلن الفعاليات الأكاديمية هنا
            عند برمجتها رسمياً.
          </p>
        </TabsContent>
        <TabsContent value="cultural">
          <p className="text-muted-foreground">
            أنشطة ثقافية ومبادرات طلابية تحتفي بتنوع الثقافات الأفريقية. يُبلَّغ ببرنامج السنة من طرف الإدارة تدريجياً.
          </p>
        </TabsContent>
        <TabsContent value="career">
          <p className="text-muted-foreground">
            منتدى المهن السنوي، أيام التوجّه ولقاءات مع الشركات للتحضير لإدماجكم المهني. اطّلعوا على الصفحة المخصَّصة
            لـ{" "}
            <Link href="/events/annual-career-fair" className="text-primary underline">
              منتدى المهن السنوي
            </Link>
            .
          </p>
        </TabsContent>
      </Tabs>
    </div>
  )
}
