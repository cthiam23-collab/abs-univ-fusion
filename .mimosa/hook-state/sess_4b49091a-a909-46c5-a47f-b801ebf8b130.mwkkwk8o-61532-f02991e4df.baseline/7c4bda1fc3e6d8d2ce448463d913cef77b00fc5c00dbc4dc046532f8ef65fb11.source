import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = buildMetadata({
  title: "حرم جامعة ABS بباماكو | ABS",
  description:
    "تعرّفوا على حرم جامعة ABS — African Business School بباماكو: قاعات درس حديثة، مكتبة، فضاءات رقمية وحياة مجتمعية في خدمة نجاح الطلبة.",
  path: "/campus",
  locale: "ar",
})

export default function CampusPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">حرم جامعتنا</h1>

      <div className="mb-12">
        <Image
          src="/images/campus/african-business-school-campus.jpg"
          alt="حرم جامعة ABS"
          width={1200}
          height={600}
          className="w-full rounded-lg shadow-lg"
        />
      </div>

      <Card className="mb-12">
        <CardHeader>
          <CardTitle>الحرم الجامعي في لمحة</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">
            تستقبلكم جامعة ABS — African Business School في حمدلاي ACI 2000، باماكو، في محيط مصمَّم من أجل
            التكوين ونجاح الطلبة. قاعات الدرس وفضاءات العمل وأماكن الحياة المشتركة منظَّمة فيها في خدمة الأقطاب الخمسة
            للتكوين بالمؤسسة والمجتمع الطلابي.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="facilities" className="mb-12">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="facilities">المرافق</TabsTrigger>
          <TabsTrigger value="housing">السكن الطلابي</TabsTrigger>
          <TabsTrigger value="recreation">الحياة الطلابية</TabsTrigger>
        </TabsList>
        <TabsContent value="facilities">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "قاعات الدرس",
                description:
                  "قاعات مجهَّزة لتدريس الأقطاب الخمسة للتكوين، من المحاضرات الكبرى إلى الأعمال التطبيقية.",
                image:
                  "/images/campus/IMG-20250212-WA0021.jpg",
              },
              {
                title: "المكتبة والوسائل",
                description:
                  "فضاء مخصَّص للقراءة والبحث، يضم مؤلَّفات ووسائل ملائمة للبرامج.",
                image:
                  "/images/campus/IMG-20250212-WA0003.jpg",
              },
              {
                title: "فضاءات العمل",
                description:
                  "أماكن للعمل فردياً أو جماعياً، لإعداد المشاريع والمراجعة بين الحصص.",
                image:
                  "/images/campus/IMG-20250212-WA0004.jpg",
              },
              {
                title: "المدرجات وقاعات المؤتمرات",
                description:
                  "فضاءات للمحاضرات في المجموعات الكبيرة، والمؤتمرات واللقاءات مع المهنيين.",
                image:
                  "/images/campus/IMG-20250212-WA0006.jpg",
              },
              {
                title: "فضاءات الأعمال التطبيقية",
                description:
                  "فضاءات مخصَّصة للتطبيق العملي، لا سيما لتكوينات الهندسة المعلوماتية والهندسة الجيولوجية والمدنية والتعدينية.",
                image:
                  "/images/campus/IMG-20250212-WA0007.jpg",
              },
              {
                title: "فضاءات الحياة المشتركة",
                description:
                  "أماكن للتبادل والاستجمام تعزّز الحوار والحياة المجتمعية بين الطلبة.",
                image:
                  "/images/campus/IMG-20250212-WA0009.jpg",
              },
            ].map((facility, index) => (
              <Card key={index}>
                <Image
                  src={facility.image || "/placeholder.svg"}
                  alt={facility.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardHeader>
                  <CardTitle>{facility.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{facility.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="housing">
          <p className="text-lg mb-6">
            ترافق جامعة ABS طلبتها في إجراءات السكن بباماكو. تُحدَّد الترتيبات والتوفرات كل سنة من طرف الإدارة: ندعوكم
            إلى التواصل معها لمعرفة الخيارات الممكنة وإرشادات التوجّه.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <Image
                src="/images/campus/IMG-20250212-WA0010.jpg"
                alt="السكن على مقربة من الحرم الجامعي"
                width={600}
                height={400}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardHeader>
                <CardTitle>السكن في باماكو</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside">
                  <li>معلومات حول خيارات السكن حسب التوفرات</li>
                  <li>نصائح للبحث عن سكن ملائم لوضعيتكم</li>
                  <li>معالم عن الأحياء القريبة من الحرم الجامعي</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <Image
                src="/images/campus/IMG-20250212-WA0011.jpg"
                alt="مرافقة الطلبة"
                width={600}
                height={400}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardHeader>
                <CardTitle>مرافقة الطلبة</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside">
                  <li>توجيه من الإدارة للأسئلة العملية</li>
                  <li>مساعدة الطلبة الجدد على الاستقرار، بمن فيهم القادمون من مناطق أخرى</li>
                  <li>تواصل مباشر لكل طلب خاص</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="recreation">
          <p className="text-lg mb-6">
            الحياة الطلابية في ABS تتجاوز قاعة الدرس: تبادل وأنشطة ثقافية ومبادرات يحملها الطلبة تسهم في التوازن بين
            الدراسة والحياة الشخصية.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "التبادل والودّ",
                description:
                  "فضاءات ولحظات للتلاقي بين الطلبة، للتبادل والاستجمام بعد الحصص.",
                image:
                  "/images/campus/IMG-20250212-WA0012.jpg",
              },
              {
                title: "الأنشطة الثقافية",
                description:
                  "لحظات ثقافية بارزة تحتفي بغنى الثقافات الأفريقية وتنوعها، حسب برنامج السنة.",
                image:
                  "/images/campus/IMG-20250212-WA0013.jpg",
              },
              {
                title: "فضاءات الاستجمام",
                description:
                  "أماكن للراحة والحديث داخل الحرم الجامعي، مواتية للعافية الطلابية.",
                image:
                  "/images/campus/IMG-20250212-WA0014.jpg",
              },
              {
                title: "مبادرات الطلبة",
                description:
                  "أندية ومشاريع يحملها الطلبة حسب اهتماماتهم، بدعم الإدارة.",
                image:
                  "/images/campus/IMG-20250212-WA0015.jpg",
              },
              {
                title: "فعاليات السنة",
                description:
                  "مؤتمرات وأيام توجّه ولقاءات يُعلن عنها عند برمجتها رسمياً.",
                image:
                  "/images/gallery/IMG-20250216-WA0015.jpg",
              },
              {
                title: "التغذية",
                description:
                  "حلول للطعام في المكان وعلى مقربة، تُحدَّد من طرف الإدارة في بداية السنة.",
                image:
                  "/images/gallery/IMG-20250216-WA0021.jpg",
              },
            ].map((rec, index) => (
              <Card key={index}>
                <Image
                  src={rec.image || "/placeholder.svg"}
                  alt={rec.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardHeader>
                  <CardTitle>{rec.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{rec.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">تعالوا لاكتشاف حرم جامعتنا</h2>
        <p className="text-lg mb-6">
          زيارة الحرم هي أفضل وسيلة لتصوّر دراستكم في ABS: فضاءات التكوين، أماكن الحياة والفريق التربوي. تواصلوا معنا
          لتنظيم قدومكم.
        </p>
        <a
          href="/visit"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          برمجة زيارة للحرم الجامعي
        </a>
      </div>
    </div>
  )
}
