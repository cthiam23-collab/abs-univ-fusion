import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { BookOpen, Briefcase, HeartPulse, Library, GraduationCap, Users } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "موارد الطلبة | ABS",
  description: "الموارد الأكاديمية وخدمات الدعم المخصصة لطلبة ABS — African Business School: التوجيه، المسار المهني، الصحة، المكتبة والدروس الخصوصية.",
  path: "/student-resources",
  locale: "ar",
})

export default function StudentResourcesPage() {
  const resources = [
    {
      title: "الإرشاد الأكاديمي",
      description: "احصل على إرشادات حول اختيار الدروس والتخطيط الأكاديمي",
      icon: BookOpen,
      link: "/student-resources/academic-advising",
    },
    {
      title: "خدمات المسار المهني",
      description: "استكشف الفرص المهنية واحصل على مساعدة في البحث عن عمل",
      icon: Briefcase,
      link: "/student-resources/career-services",
    },
    {
      title: "الصحة والعافية",
      description: "اطّلع على الخدمات الطبية وخدمات الصحة النفسية",
      icon: HeartPulse,
      link: "/student-resources/health-wellness",
    },
    {
      title: "خدمات المكتبة",
      description: "استفد من مجموعتنا الواسعة من الكتب والموارد الرقمية",
      icon: Library,
      link: "/student-resources/library",
    },
    {
      title: "الدروس الخصوصية والدعم التعليمي",
      description: "احصل على مساعدة في المواد الصعبة وطوّر مهاراتك الدراسية",
      icon: GraduationCap,
      link: "/student-resources/tutoring",
    },
    {
      title: "الجمعيات الطلابية",
      description: "انضم إلى الأندية والجمعيات لإثراء تجربتك الجامعية",
      icon: Users,
      link: "/student-life/organizations",
    },
  ]

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">موارد الطلبة</h1>
      <p className="text-xl mb-12">
        في جامعة ABS، نلتزم بدعم مساركم الأكاديمي ونموّكم الشخصي. استكشفوا مجموعة الموارد الواسعة المتاحة لمساعدتكم
        على النجاح.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {resources.map((resource, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <resource.icon className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>{resource.title}</CardTitle>
              <CardDescription>{resource.description}</CardDescription>
            </CardHeader>
            <CardContent className="mt-auto">
              <Link href={resource.link}>
                <Button variant="outline" className="w-full">
                  اطّلع على المزيد
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="academic" className="mb-12">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
          <TabsTrigger value="academic">الدعم الأكاديمي</TabsTrigger>
          <TabsTrigger value="wellness">الصحة والعافية</TabsTrigger>
          <TabsTrigger value="career">التطوير المهني</TabsTrigger>
        </TabsList>
        <TabsContent value="academic">
          <Card>
            <CardHeader>
              <CardTitle>خدمات الدعم الأكاديمي</CardTitle>
              <CardDescription>نُمكّنكم من تحقيق النجاح الأكاديمي</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>حصص دروس خصوصية فردية</li>
                <li>مركز الكتابة للمساعدة في تحرير المقالات</li>
                <li>مكاتب مساعدة في الرياضيات والعلوم</li>
                <li>ورشات مهارات الدراسة</li>
                <li>المرافقة الأكاديمية</li>
                <li>خدمات دعم الطلبة من ذوي الإعاقة</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="wellness">
          <Card>
            <CardHeader>
              <CardTitle>موارد الصحة والعافية</CardTitle>
              <CardDescription>دعم عافيتكم الجسدية والنفسية</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>عيادة صحية في الحرم الجامعي</li>
                <li>خدمات الاستشارة والدعم النفسي</li>
                <li>مركز اللياقة والرياضات الترفيهية</li>
                <li>استشارات التغذية</li>
                <li>ورشات إدارة التوتر</li>
                <li>حصص اليقظة الذهنية والتأمل</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="career">
          <Card>
            <CardHeader>
              <CardTitle>فرص التطوير المهني</CardTitle>
              <CardDescription>نُعِدّكم للنجاح المهني</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>مراجعة السيرة الذاتية ورسالة الدافع</li>
                <li>محاكاة المقابلات</li>
                <li>ترتيب التربصات</li>
                <li>معارض المهن وفعاليات التواصل</li>
                <li>ورشات استراتيجيات البحث عن عمل</li>
                <li>برنامج التوجّه مع الخريجين</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="bg-secondary p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">تحتاجون مساعدة؟</h2>
        <p className="mb-6">
          فريق الخدمات الطلابية لدينا هنا لمساعدتكم. لا تترددوا في الاتصال بنا إذا كانت لديكم أسئلة أو احتجتم إلى
          دعم.
        </p>
        <Link href="/contact">
          <Button>الاتصال بالخدمات الطلابية</Button>
        </Link>
      </div>
    </div>
  )
}
