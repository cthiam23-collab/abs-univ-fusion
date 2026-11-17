import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Briefcase, FileText, Users, Compass } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "الخدمات المهنية للطلبة | ABS",
  description: "خدمات التوجّه والإدماج المهني لطلبة ABS — African Business School: وسائل، فعاليات وشبكة علاقات.",
  path: "/student-resources/career-services",
  locale: "ar",
})

export default function CareerServicesPage() {
  const services = [
    {
      title: "استشارة التوجّه",
      description: "مرافقة فردية لبناء مشروعكم المهني",
      icon: Compass,
    },
    {
      title: "مراجعة السيرة الذاتية ورسالة التحفيز",
      description: "رأي في وثائق ترشّحكم",
      icon: FileText,
    },
    {
      title: "التدرّب على المقابلات",
      description: "التحضير لمقابلات التربص أو التوظيف",
      icon: Users,
    },
    {
      title: "التربصات وأول الوظائف",
      description: "آفاق بالانسجام مع المخططات التربوية المعتمدة",
      icon: Briefcase,
    },
  ]

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">الخدمات المهنية</h1>
      <p className="text-xl mb-12">
        في جامعة ABS، نرافقكم في التحضير لحياتكم المهنية. يطرح الفريق المكلف بالتوجّه والإدماج وسائل وتتبّعاً
        ملائماً لكل قطب تكوين.
      </p>

      <div className="mb-12">
        <Image
          src="/images/campus/african-business-school-campus.jpg"
          alt="الخدمات المهنية في جامعة ABS"
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

      <Tabs defaultValue="resources" className="mb-12">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
          <TabsTrigger value="resources">الوسائل</TabsTrigger>
          <TabsTrigger value="events">الفعاليات</TabsTrigger>
          <TabsTrigger value="employers">لأصحاب العمل</TabsTrigger>
          <TabsTrigger value="alumni">للخريجين</TabsTrigger>
        </TabsList>
        <TabsContent value="resources">
          <Card>
            <CardHeader>
              <CardTitle>وسائل المهن</CardTitle>
              <CardDescription>أدوات لمساعدتكم على النجاح</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>معينات على بلورة مشروعكم المهني</li>
                <li>معالم عن القطاعات المتصلة بتكوينكم</li>
                <li>مناهج البحث عن تربص ووظيفة</li>
                <li>نصائح حول بناء الشبكة والتواصل الأولي</li>
                <li>آفاق مواصلة الدراسات، من الإجازة (ليسانس) إلى الماجستير</li>
              </ul>
              <Link href="/career-services">
                <Button className="mt-4">الولوج إلى الوسائل</Button>
              </Link>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="events">
          <Card>
            <CardHeader>
              <CardTitle>الفعاليات المهنية</CardTitle>
              <CardDescription>التحضير وتطوير شبكة العلاقات</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                منتدى المهن السنوي، مؤتمرات مع مهنيين ولقاءات حسب القطاع: تُعلن المواعيد عند البرمجة الرسمية
                للفعاليات.
              </p>
              <Link href="/career-services/events">
                <Button className="mt-4">اطّلعوا على الفعاليات المهنية</Button>
              </Link>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="employers">
          <Card>
            <CardHeader>
              <CardTitle>لأصحاب العمل</CardTitle>
              <CardDescription>عقد تبادل مع جامعة ABS</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                نصِل بين الشركات وطلبة وخريجي جامعة ABS. وإليكم الصور التي يمكن أن تتخّذها هذه الشراكة:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>طرح تربصات وفرص عمل</li>
                <li>المشاركة في الفعاليات المهنية واللقاءات الطلابية</li>
                <li>التدخّل في مؤتمرات أو ورشات</li>
                <li>اللقاء بالطلبة في إطار التجنيد</li>
                <li>التبادل حول مشاريع الطلبة، وفق المخططات التربوية المعتمدة</li>
              </ul>
              <Link href="/employers/recruit">
                <Button>جنّدوا مواهب ABS</Button>
              </Link>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="alumni">
          <Card>
            <CardHeader>
              <CardTitle>الخدمات الموجهة للخريجين</CardTitle>
              <CardDescription>مرافقة يمكن أن تستمر بعد التكوين</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                يمكن لخريجي جامعة ABS، حسب الخدمات المطروحة من المؤسسة، الاستفادة من دعم لمواصلة مسارهم:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>استشارة توجّه ومرافقة المشروع المهني</li>
                <li>آفاق فرص حسب العروض المبلَّغة إلى المؤسسة</li>
                <li>لقاءات وفعاليات تعزّز شبكة الخريجين</li>
                <li>مشاركة التجربة مع الطلبة قيد التكوين</li>
              </ul>
              <p className="text-sm text-muted-foreground">
                تواصلوا مع الإدارة لمعرفة الخدمات المفتوحة حالياً أمام الخريجين.
              </p>
              <Link href="/alumni/career-services">
                <Button>استكشفوا الخدمات الموجهة للخريجين</Button>
              </Link>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="bg-secondary p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">طلب لقاء توجّه</h2>
        <p className="mb-6">
          فريق الإدماج المهني موجود لمساعدتكم. اطلبوا لقاءً لمناقشة أهدافكم وتلقّي نصائح شخصية.
        </p>
        <Link href="/contact">
          <Button variant="default">طلب لقاء</Button>
        </Link>
      </div>
    </div>
  )
}
