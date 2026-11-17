import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"
import {
  Network,
  Users,
  GraduationCap,
  Calendar,
  MessageCircle,
  BookOpen,
  Briefcase,
  Quote,
  HandHeart,
  MapPin,
  Phone,
  Mail,
  Globe2,
} from "lucide-react"
import { ORGANIZATION } from "@/lib/constants"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "الخريجون | ABS",
  description: "ابقوا على تواصل مع مجتمع خريجي ABS — African Business School: الشبكة، الفعاليات والخدمات المخصصة للخريجين.",
  path: "/alumni",
  locale: "ar",
})

const benefits = [
  {
    icon: Briefcase,
    title: "وصول مدى الحياة إلى لوح العروض",
    description:
      "عروض تربصات ووظائف ومهام يشاركها الشبكة والشركات الشريكة في ABS.",
  },
  {
    icon: Users,
    title: "التوجّه لطلبة دفعتكم",
    description:
      "رافقوا دفعة: ساعة واحدة شهرياً لمشاركة مهنتكم، أو مراجعة سيرة ذاتية، أو تحضير مقابلة.",
  },
  {
    icon: BookOpen,
    title: "الموارد الأكاديمية",
    description:
      "وصول إلى المكتبة الجامعية ومواردها الرقمية للبقاء على اطلاع في مجالكم.",
  },
  {
    icon: Calendar,
    title: "فعاليات خاصة بالخريجين",
    description:
      "لقاءات حوارية، أمسيات تواصل، مؤتمرات للخريجين: مواعيد منتظمة في باماكو وعلى الخط.",
  },
]

const industries = [
  "البنوك والتمويل الأصغر",
  "المناجم والطاقة",
  "الاتصالات والرقمي",
  "المنظمات غير الحكومية والتعاون",
  "التدقيق والاستشارة",
  "سلسلة التوريد واللوجستيك",
  "التدبير العمومي",
  "ريادة الأعمال",
]

const testimonials = [
  {
    name: "عائشة ك.، دفعة 2023",
    role: "محللة ائتمان — القطاع البنكي، باماكو",
    quote:
      "غيّرت محاكاة المقابلات في مركز المسار المهني كل شيء. يوم المقابلة في البنك، كنت أعرف حججي عن ظهر قلب.",
  },
  {
    name: "إبراهيم د.، دفعة 2022",
    role: "مسؤول لوجستيك — القطاع التعديني، إقليم كايي",
    quote:
      "ماجستير سلسلة التوريد في ABS يعني 80 في المائة ممارسة. تحوّل تربصي إلى عقد، وأنا اليوم أنسّق فريقاً في عين المكان.",
  },
  {
    name: "فاطمة س.، دفعة 2024",
    role: "مساعدة مشروع — منظمة غير حكومية دولية",
    quote:
      "الإنجليزية المدمجة في المسار فتحت أمامي أبواباً لم أتخيلها: أنجز نصف اجتماعاتي بالإنجليزية.",
  },
  {
    name: "موسى ت.، دفعة 2021",
    role: "رائد أعمال — شركة ناشئة في الصناعات الغذائية، باماكو",
    quote:
      "بُنيت خطة عملي في ABS وتم اختبارها أمام لجنة من الأساتذة والمهنيين. ولا تزال الشبكة تواصل مرافقتي.",
  },
]

export default function AlumniPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="relative h-[420px] overflow-hidden">
        <Image
          src="/images/campus/IMG-20250212-WA0022.jpg"
          alt="مجتمع الخريجين في ABS — African Business School"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/80 to-blue-900/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <p className="text-cyan-400 font-semibold uppercase tracking-widest text-sm mb-4">شبكة الخريجين</p>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                شبكة ABS: شهادتكم جواز سفر مهني
              </h1>
              <p className="text-lg text-slate-200 mb-8">
                خريجو ABS — African Business School، فخر الجامعة، يحملون قيم الاندماج والوحدة الأفريقية في
                البنوك والمناجم والاتصالات والمنظمات غير الحكومية ومشاريعهم الخاصة، في باماكو وفي كل أنحاء
                المنطقة. مرة طالب، أبداً عضو في الشبكة.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/alumni/networking">
                  <Button size="lg" className="bg-cyan-400 text-blue-950 hover:bg-cyan-300 font-semibold">
                    انضم إلى الشبكة
                  </Button>
                </Link>
                <Link href="/alumni/career-services">
                  <Button size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-blue-900">
                    خدمات الخريجين
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="container mx-auto px-4 py-14">
        <Tabs defaultValue="reseau" className="w-full">
          <TabsList className="mb-8 flex-wrap">
            <TabsTrigger value="reseau">شبكة ABS</TabsTrigger>
            <TabsTrigger value="temoignages">شهادات الخريجين</TabsTrigger>
            <TabsTrigger value="connecte">ابقوا على تواصل</TabsTrigger>
          </TabsList>

          {/* Réseau */}
          <TabsContent value="reseau">
            <div className="grid lg:grid-cols-2 gap-10 items-start mb-12">
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-4">شبكة تعمل لصالحكم</h2>
                <p className="text-slate-600 mb-6">
                  تجمع شبكة خريجي ABS مهنيين نشطين في جميع القطاعات الرئيسية للاقتصاد المالي وغرب الأفريقي. وهي
                  تعمل كمخزون مواهب للشركات الشريكة، وشبكة أمان للخريجين الجدد، ومختبر أفكار للجامعة.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {industries.map((ind) => (
                    <span
                      key={ind}
                      className="px-3 py-1.5 rounded-full bg-cyan-50 text-blue-900 text-sm font-medium border border-cyan-400/40"
                    >
                      {ind}
                    </span>
                  ))}
                </div>
                <p className="text-slate-600 text-sm">
                  تعكس هذه المجالات توزيع خريجينا، الأوفياء للتخصصات الكبرى في الجامعة: MBA، المالية والهندسة
                  المالية، التمويل الإسلامي، سلسلة التوريد، حوكمة الصفقات العمومية، الهندسة التعدينية.
                </p>
              </div>
              <div className="relative h-80 rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/images/gallery/IMG-20250216-WA0030.jpg"
                  alt="خريجو ABS خلال حفل في الحرم الجامعي"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-blue-900 mb-6">ما تقدمه الشبكة لكم</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-10">
              {benefits.map((b, i) => (
                <Card key={i} className="border-t-4 border-t-cyan-400 hover:shadow-md transition-shadow">
                  <CardHeader>
                    <b.icon className="h-8 w-8 text-blue-700 mb-2" />
                    <CardTitle className="text-lg text-blue-900">{b.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 text-sm">{b.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-blue-950 text-white border-0">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <GraduationCap className="h-10 w-10 text-cyan-400 shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">كونوا موجهاً لطالب</h3>
                    <p className="text-slate-300 text-sm">
                      لديكم مهنة وخبرة وشبكة؟ انقلوها: طالب إجازة أو ماجستير بحاجة إلى نظرك ساعة واحدة شهرياً.
                      هذه تقليد ABS — كلنا تلقّينا، وكلنا نعطي.
                    </p>
                  </div>
                  <Link href="/alumni/networking">
                    <Button className="bg-cyan-400 text-blue-950 hover:bg-cyan-300 font-semibold shrink-0">
                      اقترح توجّهي
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Témoignages */}
          <TabsContent value="temoignages">
            <div className="mb-10 max-w-3xl">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">تخرّجوا من ABS</h2>
              <p className="text-slate-600 text-lg">
                شهادات إيضاحية لخريجين يحملون اليوم متطلبات وعملية ABS — African Business School في حياتهم
                المهنية اليومية.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 mb-10">
              {testimonials.map((t, i) => (
                <Card key={i} className="relative pt-8 hover:shadow-md transition-shadow">
                  <Quote className="absolute top-6 left-6 h-8 w-8 text-cyan-400" />
                  <CardContent className="pt-8">
                    <p className="text-slate-700 italic mb-6">« {t.quote} »</p>
                    <div className="flex items-center gap-4">
                      <div className="h-11 w-11 rounded-full bg-blue-900 flex items-center justify-center shrink-0">
                        <span className="text-cyan-400 font-bold text-sm">
                          {t.name.split(" ")[0].charAt(0)}
                          {t.name.split(" ")[1]?.charAt(0) ?? ""}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-blue-900">{t.name}</p>
                        <p className="text-sm text-slate-500">{t.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Card className="bg-cyan-50 border-cyan-400/40">
              <CardContent className="pt-6">
                <p className="text-blue-900">
                  <strong>هل أنتم خريج ABS؟</strong> شاركوا مساركم مع المجتمع: قصتكم قد ترشد الدفعات اللاحقة نحو
                  النجاح نفسه.
                </p>
                <Link href="/alumni/networking">
                  <Button className="mt-4 bg-blue-700 hover:bg-blue-900">أرسل شهادتي</Button>
                </Link>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Rester connecté */}
          <TabsContent value="connecte">
            <div className="grid lg:grid-cols-2 gap-8 mb-10">
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-4">ابقوا على تواصل مع ABS</h2>
                <p className="text-slate-600 mb-6">
                  لا ينقطع الصلة بجامعتكم الأم عند تسليم الشهادات. وهكذا تواصلوا الانتماء إلى عائلة ABS — وأنتم
                  تستفيدون منها.
                </p>
                <div className="space-y-5">
                  {[
                    {
                      icon: MessageCircle,
                      title: "حدّثوا معطيات الاتصال بكم",
                      description:
                        "منصب جديد، مدينة جديدة؟ أخبرونا لكي تتلقوا عروض الشبكة ودعواتها وأخبارها.",
                    },
                    {
                      icon: Calendar,
                      title: "شاركوا في الفعاليات",
                      description:
                        "الأيام المفتوحة، منتديات الشركات، مؤتمرات المهن: عودوا إلى الحرم الجامعي والتقوا بالدفعات.",
                    },
                    {
                      icon: HandHeart,
                      title: "قدّموا وقتاً أو فرصاً",
                      description:
                        "عرض تربص في شركتكم، ورشة مهنية، توجّه: كل مساهمة لها قيمة للمجتمع.",
                    },
                    {
                      icon: Globe2,
                      title: "شبكة عموم أفريقية",
                      description:
                        "الانفتاح الأفريقي مجال الجامعة المفضل: تواصلوا مع الخريجين الحاضرين في المنطقة.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="h-10 w-10 rounded-lg bg-blue-900 flex items-center justify-center shrink-0">
                        <item.icon className="h-5 w-5 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-blue-900 mb-1">{item.title}</h3>
                        <p className="text-slate-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4 mt-8">
                  <Link href="/alumni/networking">
                    <Button className="bg-blue-700 hover:bg-blue-900">انضم إلى الشبكة</Button>
                  </Link>
                  <Link href="/events">
                    <Button variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50">
                      اطّلع على الفعاليات
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="space-y-6">
                <div className="relative h-56 rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/images/gallery/IMG-20250216-WA0059.jpg"
                    alt="الحياة الجمعوية والفعاليات في حرم ABS"
                    fill
                    className="object-cover"
                  />
                </div>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-blue-900">مكتب الخريجين</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-slate-600">
                    <p className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-cyan-600 shrink-0" />
                      {ORGANIZATION.contact.address.formatted}
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-cyan-600 shrink-0" />
                      {ORGANIZATION.contact.phone}
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-cyan-600 shrink-0" />
                      {ORGANIZATION.contact.email}
                    </p>
                    <Link href="/contact">
                      <Button variant="outline" size="sm" className="mt-2 border-blue-700 text-blue-700 hover:bg-blue-50">
                        راسلونا
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* CTA band */}
      <section className="bg-gradient-to-r from-blue-950 to-blue-900 py-14">
        <div className="container mx-auto px-4 text-center">
          <Network className="h-10 w-10 text-cyan-400 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">الشبكة لا تسوى إلا بأعضائها</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            انضموا إلى مجتمع خريجي ABS — African Business School ولنجعل — معاً — من نفوذ ABS في أفريقيا
            وخارجها في نمو دائم.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/alumni/networking">
              <Button size="lg" className="bg-cyan-400 text-blue-950 hover:bg-cyan-300 font-semibold">
                التسجيل في الشبكة
              </Button>
            </Link>
            <Link href="/gallery">
              <Button size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-blue-900">
                اطّلع على حياة الحرم الجامعي
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
