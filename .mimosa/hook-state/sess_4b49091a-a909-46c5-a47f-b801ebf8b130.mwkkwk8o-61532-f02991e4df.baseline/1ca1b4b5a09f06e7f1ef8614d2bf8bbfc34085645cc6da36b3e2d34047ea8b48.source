import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Book, BookOpen, Database, Globe, Clock, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "مكتبة الطلبة | ABS",
  description: "المكتبة وفضاءات العمل لطلبة ABS — African Business School: فهرس، وسائل رقمية وخدمات وثائقية.",
  path: "/student-resources/library",
  locale: "ar",
})

export default function LibraryServicesPage() {
  const services = [
    {
      title: "استعارة المؤلَّفات",
      description: "الولوج إلى المؤلَّفات المادية المتاحة للطلبة",
      icon: Book,
    },
    {
      title: "الوسائل الرقمية",
      description: "الاطلاع على الوسائل الإلكترونية الملائمة لتكوينكم",
      icon: Database,
    },
    {
      title: "المساعدة في البحث",
      description: "أن تُوجَّهوا في بحوثكم الوثائقية",
      icon: Globe,
    },
    {
      title: "فضاءات العمل",
      description: "العمل في فضاءات مواتية للدراسة، فردياً أو جماعياً",
      icon: BookOpen,
    },
  ]

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">المكتبة والوسائل الوثائقية</h1>
      <p className="text-xl mb-12">
        مكتبة جامعة ABS هي بابكم إلى الوسائل الأكاديمية. ترافق تعلّمكم وأعمالكم في الأقطاب الخمسة للتكوين بالمؤسسة.
      </p>

      <div className="mb-12">
        <Image
          src="/images/campus/IMG-20250212-WA0021.jpg"
          alt="مكتبة جامعة ABS"
          width={1200}
          height={600}
          className="rounded-lg shadow-lg"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {services.map((service, index) => (
          <Card key={index}>
            <CardHeader>
              <service.icon className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="catalog" className="mb-12">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
          <TabsTrigger value="catalog">الفهرس</TabsTrigger>
          <TabsTrigger value="databases">الوسائل الرقمية</TabsTrigger>
          <TabsTrigger value="services">الخدمات</TabsTrigger>
          <TabsTrigger value="hours">التوقيت والولوج</TabsTrigger>
        </TabsList>
        <TabsContent value="catalog">
          <Card>
            <CardHeader>
              <CardTitle>الفهرس</CardTitle>
              <CardDescription>تجدوا المؤلَّفات والوسائل المتوفرة</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                يرصد الفهرس مؤلَّفات المكتبة ووسائلها الوثائقية. استعملوا خانة البحث أدناه للعثور على الوثائق التي
                تحتاجونها:
              </p>
              <div className="bg-secondary p-4 rounded-lg">
                <input
                  type="text"
                  placeholder="ابحث في الفهرس..."
                  className="w-full p-2 rounded border border-gray-300"
                />
                <Button className="mt-2">بحث</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="databases">
          <Card>
            <CardHeader>
              <CardTitle>الوسائل الرقمية</CardTitle>
              <CardDescription>الولوج إلى الوسائل الإلكترونية المتاحة</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>مؤلَّفات رقمية متصلة بتدريسات الأقطاب الخمسة</li>
                <li>وسائل مرجعية للأعمال ومشاريع التكوين</li>
                <li>وثائق داعمة للتحضير للتربصات</li>
                <li>دعامات إضافية موصى بها من الأساتذة</li>
              </ul>
              <p className="mt-4 text-sm text-muted-foreground">
                تعتمد الوسائل القابلة للاطلاع على الاشتراكات والاتفاقيات السارية؛ تُبلَّغ القائمة من طرف المكتبة.
              </p>
              <Link href="/library/online-resources">
                <Button className="mt-4">اطّلعوا على جميع الوسائل</Button>
              </Link>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="services">
          <Card>
            <CardHeader>
              <CardTitle>الخدمات المطروحة</CardTitle>
              <CardDescription>دعم يتجاوز مجرد إعارة المؤلَّفات</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>توجيه وثائقي لأعمالكم ومشاريعكم</li>
                <li>مرافقة في بحوثكم</li>
                <li>نصائح حول التوثيق وتنظيم المراجع</li>
                <li>فضاءات عمل للدراسة الفردية والجماعية</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="hours">
          <Card>
            <CardHeader>
              <CardTitle>التوقيت والولوج</CardTitle>
              <CardDescription>أين تجدوننا في الحرم الجامعي</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center mb-4">
                <Clock className="h-5 w-5 mr-2" />
                <span>تُبلَّغ ساعات العمل من طرف الإدارة في بداية السنة</span>
              </div>
              <div className="flex items-center mb-4">
                <Calendar className="h-5 w-5 mr-2" />
                <span>الفتح ملائم للتقويم الأكاديمي للمؤسسة</span>
              </div>
              <p className="mb-4">
                تقع المكتبة في حرم جامعة ABS، حمدلاي ACI 2000، باماكو. تُحدَّد شروط الولوج والإعارة من طرف الإدارة.
              </p>
              <Link href="/campus/map">
                <Button>اطّلعوا على مخطط الحرم الجامعي</Button>
              </Link>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="bg-primary text-primary-foreground p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">هل تحتاجون مساعدة؟</h2>
        <p className="mb-6">
          فريق المكتبة موجود لمرافقتكم في بحوثكم وتوجيهكم في الوسائل. لا تترددوا في الاستعانة بنا.
        </p>
        <Link href="/library/contact">
          <Button variant="secondary">التواصل مع المكتبة</Button>
        </Link>
      </div>
    </div>
  )
}
