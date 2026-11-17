import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ORGANIZATION } from "@/lib/constants"
import {
  BookOpen,
  Video,
  Bot,
  Wifi,
  MonitorSmartphone,
  ClipboardList,
  MessageSquare,
  Headset,
  Clock,
  Globe2,
  CheckCircle2,
  ArrowRight,
} from "lucide-react"

export const metadata: Metadata = buildMetadata({
  title: "E-Campus | جامعة ABS — حرمكم الرقمي",
  description:
    "E-Campus لجامعة ABS — African Business School: منصة LMS، قاعات افتراضية، موارد الذكاء الاصطناعي ودعم تقني مخصص لنجاحكم، على مدار الساعة طوال أيام الأسبوع.",
  path: "/e-campus",
  locale: "ar",
})

const stats = [
  { value: "24/7", label: "الوصول إلى المنصة، ليل نهار", icon: Clock },
  { value: "100%", label: "من الدروس متاحة على الخط", icon: Globe2 },
  { value: "AI", label: "الذكاء الاصطناعي مدمج في المسارات الدراسية", icon: Bot },
  { value: "فريق واحد", label: "دعم معلومي مخصص للطلبة", icon: Headset },
]

export default function ECampusPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative flex min-h-[65vh] items-center justify-center text-white">
        <Image
          src="/images/campus/african-business-school-campus.jpg"
          alt="حرم جامعة ABS — African Business School في باماكو"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/85 via-blue-900/80 to-blue-950/90" />
        <div className="relative z-10 max-w-4xl px-4 py-20 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            جامعة ABS — African Business School — باماكو
          </p>
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            E-Campus: جامعتكم على بُعد نقرة واحدة
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-200 md:text-xl">
            الدروس والواجبات والنقاط والقاعات الافتراضية وأدوات الذكاء الاصطناعي: كل الرقمي في ABS مجمّع في محيط
            واحد، متاح أينما كنتم.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-cyan-400 font-semibold text-slate-950 hover:bg-cyan-300">
              <Link href="/student-portal">
                الوصول إلى بوابة الطالب <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white font-semibold text-white hover:bg-white hover:text-blue-900"
            >
              <Link href="/e-campus/lms">اكتشف منصة LMS</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-slate-200 bg-white py-12">
        <div className="container mx-auto grid grid-cols-2 gap-8 px-4 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="mx-auto mb-3 h-8 w-8 text-blue-700" />
              <p className="text-3xl font-bold text-blue-900">{stat.value}</p>
              <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="mb-3 text-3xl font-bold text-blue-900 md:text-4xl">منظومة رقمية متكاملة</h2>
            <p className="text-lg text-slate-600">
              التعلم في ABS لا يتوقف عند باب القاعة الدراسية. استكشفوا كل جوانب E-Campus.
            </p>
          </div>

          <Tabs defaultValue="lms" className="w-full">
            <TabsList className="mb-8 grid w-full grid-cols-1 md:grid-cols-4">
              <TabsTrigger value="lms">منصة LMS</TabsTrigger>
              <TabsTrigger value="virtual">القاعات الافتراضية</TabsTrigger>
              <TabsTrigger value="tools">الأدوات الرقمية</TabsTrigger>
              <TabsTrigger value="support">الدعم</TabsTrigger>
            </TabsList>

            <TabsContent value="lms">
              <div className="grid items-center gap-8 lg:grid-cols-2">
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src="/images/campus/IMG-20250212-WA0006.jpg"
                    alt="طلبة ABS يعملون على منصة LMS"
                    width={720}
                    height={480}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="mb-4 flex items-center gap-3 text-2xl font-bold text-blue-900">
                    <BookOpen className="h-7 w-7 text-blue-700" /> كل دروسكم في مكان واحد
                  </h3>
                  <p className="mb-6 text-slate-700">
                    يمثل نظام إدارة التعلم (LMS) في ABS قلب حياتكم الأكاديمية الرقمية. يضع كل أستاذ فيه دعاماته
                    البيداغوجية وواجباته ونقاطه، لكي لا يفوتكم أي شيء.
                  </p>
                  <ul className="mb-8 space-y-3">
                    {[
                      "الاطلاع على الدعامات البيداغوجية والمحاضرات والموارد المشتركة من الأساتذة",
                      "إيداع الواجبات على الخط وتتبّع الآجال",
                      "الاطلاع على النقاط ونتائج التقييم في الوقت الفعلي",
                      "فضاءات نقاش لكل درس للتبادل مع أساتذتكم وزملائكم",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-slate-700">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="bg-blue-700 font-semibold text-white hover:bg-blue-900">
                    <Link href="/e-campus/lms">
                      استكشف LMS بالتفصيل <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="virtual">
              <div className="grid items-center gap-8 lg:grid-cols-2">
                <div className="order-2 lg:order-1">
                  <h3 className="mb-4 flex items-center gap-3 text-2xl font-bold text-blue-900">
                    <Video className="h-7 w-7 text-blue-700" /> تعلّموا مباشرة، أينما كنتم
                  </h3>
                  <p className="mb-6 text-slate-700">
                    تُمدّد القاعات الافتراضية القاعة الدراسية. المحاضرات والحصص التطبيقية والمناقشات وحصص المرافقة
                    تُنجز عبر الفيديو مؤتمرات، مع تفاعل في الوقت الفعلي.
                  </p>
                  <ul className="mb-8 space-y-3">
                    {[
                      "دروس مباشرة مع أساتذة ABS، حضوريّة أو عن بُعد",
                      "جلسات مسجّلة للمراجعة وفق وتيرتكم الخاصة",
                      "أعمال جماعية وعروض تقديمية على الخط",
                      "مثالية للطلبة العاملين الذين يجمعون بين العمل والدراسة",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-slate-700">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="bg-blue-700 font-semibold text-white hover:bg-blue-900">
                    <Link href="/e-campus/virtual-classrooms">
                      اطّلع على القاعات الافتراضية <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="order-1 overflow-hidden rounded-2xl shadow-lg lg:order-2">
                  <Image
                    src="/images/campus/IMG-20250212-WA0007.jpg"
                    alt="قاعة افتراضية في جامعة ABS"
                    width={720}
                    height={480}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="tools">
              <div className="mb-8">
                <h3 className="mb-2 flex items-center gap-3 text-2xl font-bold text-blue-900">
                  <MonitorSmartphone className="h-7 w-7 text-blue-700" /> أدوات تُعِدّكم لعالم الغد
                </h3>
                <p className="max-w-3xl text-slate-700">
                  لأن الذكاء الاصطناعي مدمج في جميع مسارات ABS، يضع E-Campus تحت تصرفكم مجموعة من الأدوات الرقمية
                  التي تجعل منكم مهنيين متمكنين من التقنيات.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="border-slate-200 hover:shadow-xl">
                  <CardHeader>
                    <Bot className="mb-2 h-9 w-9 text-blue-700" />
                    <CardTitle className="text-blue-900">موارد الذكاء الاصطناعي</CardTitle>
                    <CardDescription>
                      تعرّفوا على الذكاء الاصطناعي التوليدي وتعلّموا استخدامه بمسؤولية في مشاريعكم الأكاديمية
                      والمهنية.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border-slate-200 hover:shadow-xl">
                  <CardHeader>
                    <BookOpen className="mb-2 h-9 w-9 text-blue-700" />
                    <CardTitle className="text-blue-900">المكتبة الرقمية</CardTitle>
                    <CardDescription>
                      اطّلعوا من خلال E-Campus على الموارد التوثيقية والمؤلفات والمراجع في مكتبة ABS.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="link" className="p-0 text-blue-700">
                      <Link href="/library">
                        المكتبة <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
                <Card className="border-slate-200 hover:shadow-xl">
                  <CardHeader>
                    <Wifi className="mb-2 h-9 w-9 text-blue-700" />
                    <CardTitle className="text-blue-900">واي فاي في كامل الحرم الجامعي</CardTitle>
                    <CardDescription>
                      اتصال متوفر في القاعات الدراسية والمكتبة وفضاءات العمل لتبقوا متصلين بشكل دائم.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border-slate-200 hover:shadow-xl">
                  <CardHeader>
                    <ClipboardList className="mb-2 h-9 w-9 text-blue-700" />
                    <CardTitle className="text-blue-900">موارد الطلبة</CardTitle>
                    <CardDescription>
                      جداول الأوقات واللوائح والوثائق الإدارية والأدلة العملية، مجمّعة في فضاء واحد.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="link" className="p-0 text-blue-700">
                      <Link href="/student-resources">
                        موارد الطلبة <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
                <Card className="border-slate-200 hover:shadow-xl">
                  <CardHeader>
                    <MessageSquare className="mb-2 h-9 w-9 text-blue-700" />
                    <CardTitle className="text-blue-900">التواصل والمرافقة</CardTitle>
                    <CardDescription>
                      تبادلوا مع مرافقيكم والإدارة عبر القنوات الرقمية للجامعة: تتبّع منتظم وشخصي.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border-slate-200 hover:shadow-xl">
                  <CardHeader>
                    <Globe2 className="mb-2 h-9 w-9 text-blue-700" />
                    <CardTitle className="text-blue-900">الإنجليزية والانفتاح الدولي</CardTitle>
                    <CardDescription>
                      تحتل الإنجليزية مكانة محورية في التكوين بـ ABS: تدعم الأدوات الرقمية ممارستكم اليومية للغة.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="link" className="p-0 text-blue-700">
                      <Link href="/english-academy">
                        English Academy <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="support">
              <div className="grid items-center gap-8 lg:grid-cols-2">
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src="/images/campus/IMG-20250212-WA0010.jpg"
                    alt="الدعم المعلومي في خدمة طلبة ABS"
                    width={720}
                    height={480}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="mb-4 flex items-center gap-3 text-2xl font-bold text-blue-900">
                    <Headset className="h-7 w-7 text-blue-700" /> فريق يصغي إليكم
                  </h3>
                  <p className="mb-6 text-slate-700">
                    مشكل اتصال، ولوج إلى درس، حساب طالب: يرافقكم فريق الدعم المعلومي في ABS لكي يبقى الرقمي ميزة،
                    لا عائقاً أبداً.
                  </p>
                  <ul className="mb-8 space-y-3">
                    {[
                      "المساعدة في ولوجكم إلى منصة LMS وبوابة الطالب",
                      "المساعدة في القاعات الافتراضية: الإعداد، الصوت، مشاركة الشاشة",
                      "دعم الواي فاي في حرم حمدلاي ACI 2000",
                      "نصائح وتكوين على الأدوات الرقمية والذكاء الاصطناعي",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-slate-700">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <Button asChild className="bg-blue-700 font-semibold text-white hover:bg-blue-900">
                      <Link href="/e-campus/it-support">
                        الاتصال بالدعم <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50">
                      <Link href="/contact">صفحة الاتصال</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Pédagogie numérique */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-blue-900">الرقمي في خدمة بيداغوجيا ABS</h2>
            <p className="mb-10 text-lg text-slate-600">
              مع 80 في المائة ممارسة و20 في المائة نظرية، فإن E-Campus ليس ترفاً: إنه الامتداد الطبيعي لبيداغوجيا
              موجهة نحو الفعل والتشغيل.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "التعلّم بالممارسة",
                description:
                  "مشاريع تُودع على الخط، دراسات حالات تُشارك على LMS، محاكاة في القاعة الافتراضية: الممارسة تمر أيضاً عبر الرقمي.",
              },
              {
                title: "تكوين مرن",
                description:
                  "دروس حضورية في حرم باماكو ومحتوى على الخط متاح على مدار الساعة: يبقى جدولكم الزمني تحت السيطرة.",
              },
              {
                title: "التحضير للتشغيل",
                description:
                  "إتقان الأدوات الرقمية والذكاء الاصطناعي هو الإجابة على ما تتوقعه الشركات اليوم من كل خريج من ABS.",
              },
            ].map((item) => (
              <Card key={item.title} className="border-t-4 border-t-cyan-400 shadow-md">
                <CardHeader>
                  <CardTitle className="text-blue-900">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">هل أنتم مستعدون للانضمام إلى E-Campus ABS؟</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-100">
            اتصلوا الآن ببوابة الطالب، أو راسلونا على الرقم {ORGANIZATION.contact.phone} لأي سؤال حول المحيط الرقمي
            للجامعة.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-cyan-400 font-semibold text-slate-950 hover:bg-cyan-300">
              <Link href="/student-portal">بوابة الطالب</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white font-semibold text-white hover:bg-white hover:text-blue-900"
            >
              <Link href="/admissions">انضم إلى ABS</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
