import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import {
  Users,
  Dumbbell,
  CalendarDays,
  HeartHandshake,
  GraduationCap,
  ArrowRight,
  MapPin,
  Vote,
  Leaf,
  Briefcase,
} from "lucide-react"

export const metadata: Metadata = buildMetadata({
  title: "الحياة الطلابية | ABS",
  description: "الحياة الطلابية في ABS — African Business School: المجتمع، الفعاليات، الأندية والمرافقة الطلابية.",
  path: "/student-life",
  locale: "ar",
})

const stats = [
  { value: "+5", label: "أندية وجمعيات طلابية", icon: Users },
  { value: "+10", label: "فعالية في السنة", icon: CalendarDays },
  { value: "80%", label: "من الممارسة في المسارات الدراسية", icon: GraduationCap },
  { value: "1", label: "حكومة طلابية: BAGE", icon: Vote },
]

const vieAssociative = [
  {
    title: "BAGE، صوتكم",
    description:
      "الجمعية العامة للطلبة هي الحكومة الطلابية لجامعة ABS، تُنتخب ديمقراطياً كل سنة. وهي تمثل مصالحكم لدى الإدارة وتنظّم حياة الحرم الجامعي.",
    image: "/images/campus/IMG-20250212-WA0003.jpg",
    link: "/student-life/organizations",
  },
  {
    title: "أندية موضوعية",
    description:
      "ريادة الأعمال، الثقافة، الإعلام، البيئة، الرقمي: انضموا إلى ناد قائم أو أسّسوا ناديكم الخاص بدعم BAGE والإدارة.",
    image: "/images/gallery/IMG-20250216-WA0066.jpg",
    link: "/campus-life/organizations",
  },
  {
    title: "الالتزام المواطني",
    description:
      "توجّه تلاميذ الثانوية، تطوع جمعوي، حملات إعادة التدوير في الحرم الجامعي: المسؤولية والانفتاح من القيم التي نعيشها يومياً.",
    image: "/images/gallery/IMG-20250216-WA0015.jpg",
    link: "/student-life/extracurricular-activities",
  },
]

const sportBienEtre = [
  {
    title: "الرياضة مدمجة في المسارات الدراسية",
    description:
      "الرياضة جزء من جدول جميع الطلبة: كرة القدم، كرة السلة، ألعاب القوى واللياقة البدنية. لأن العافية الجسدية تدعم النجاح الأكاديمي.",
    image: "/images/campus/IMG-20250212-WA0006.jpg",
    link: "/student-life/athletics",
  },
  {
    title: "دوريات بين الدفعات",
    description:
      "المواصلات الرياضية الكبرى للسنة تُحمّس الدفعات: بطولة كرة القدم، دوريات كرة السلة وأيام ألعاب القوى في حرم حمدلاي.",
    image: "/images/gallery/IMG-20250216-WA0067.jpg",
    link: "/campus-life/recreation",
  },
  {
    title: "العافية النفسية",
    description:
      "الاستماع والمرافقة والوقاية: فريق الدعم لدينا يتكفل بالتوازن بين الحياة الطلابية وحدّة المسارات والحياة الشخصية.",
    image: "/images/gallery/IMG-20250216-WA0070.jpg",
    link: "/student-life/support",
  },
]

const evenements = [
  {
    title: "الأيام المفتوحة",
    description: "عرّفوا أهلكم وأصدقاءكم بجامعة ABS والتقوا بالفرق البيداغوجية.",
    image: "/images/campus/IMG-20250212-WA0009.jpg",
    link: "/student-life/events",
  },
  {
    title: "أسبوع ريادة الأعمال",
    description: "ورشات وعروض ولقاءات مع رواد أعمال ماليين وعموم أفارقة.",
    image: "/images/gallery/IMG-20250216-WA0030.jpg",
    link: "/student-life/events",
  },
  {
    title: "الحفل السنوي لـ ABS",
    description: "الموعد الكبير للمجتمع: تسليم الجوائز، الثقافة والاحتفال.",
    image: "/images/gallery/IMG-20250216-WA0034.jpg",
    link: "/student-life/events",
  },
]

const soutien = [
  {
    title: "المرافقة والتشغيل",
    description:
      "كل طالب يستفيد من تتبّع شخصي: المشروع المهني، التحضير للمقابلات، التربصات وبناء الشبكة مع الشركات الشريكة.",
    image: "/images/campus/IMG-20250212-WA0012.jpg",
    link: "/student-resources",
  },
  {
    title: "الصحة والخدمات",
    description: "التوجيه الصحي، الخدمات الإدارية والدعم اليومي من أجل دراسة ببال مرتاح.",
    image: "/images/gallery/IMG-20250216-WA0060.jpg",
    link: "/student-resources/health-services",
  },
  {
    title: "الدعم الأكاديمي",
    description:
      "الدروس الخصوصية بين الدفعات، الوصول إلى المكتبة ومنصة E-Campus: لا أحد يبقى وحيداً أمام متطلبات التكوين.",
    image: "/images/gallery/IMG-20250216-WA0072.jpg",
    link: "/library",
  },
]

function FeatureGrid({ items }: { items: { title: string; description: string; image: string; link: string }[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Card key={item.title} className="overflow-hidden border-slate-200 pt-0 gap-0 hover:shadow-lg transition-shadow">
          <Image
            src={item.image}
            alt={item.title}
            width={600}
            height={400}
            className="h-48 w-full object-cover"
          />
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-blue-900 mb-2">{item.title}</h3>
            <p className="text-sm text-slate-600 mb-4">{item.description}</p>
            <Link href={item.link} className="inline-flex items-center gap-1 text-sm font-semibold text-blue-700 hover:text-cyan-400">
              اكتشف <ArrowRight className="h-4 w-4" />
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default function StudentLifePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] flex items-center">
        <Image
          src="/images/campus/african-business-school-campus.jpg"
          alt="حرم جامعة ABS في باماكو"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/85 to-blue-950/60" />
        <div className="container mx-auto relative z-10 px-4">
          <Badge className="mb-4 bg-cyan-400 text-blue-950 hover:bg-cyan-400">الحياة الطلابية</Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white max-w-3xl leading-tight mb-4">
            حياتكم الطلابية في جامعة ABS بباماكو
          </h1>
          <p className="text-lg text-cyan-50 max-w-2xl mb-8">
            في قلب حمدلاي ACI 2000، تقدم جامعة ABS أكثر من مجرد تكوين امتيازي: حرم جامعي نابض بالحياة، حكومة
            طلابية منتخبة، رياضة مدمجة في كل مسار ومجتمع ملتزم.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="bg-cyan-400 text-blue-950 hover:bg-cyan-50 font-semibold">
              <Link href="/student-life/events">اطّلع على الفعاليات</Link>
            </Button>
            <Button asChild variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-blue-900">
              <Link href="/campus-life">استكشف الحرم الجامعي</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-blue-950 py-10">
        <div className="container mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="h-8 w-8 text-cyan-400 mx-auto mb-2" />
              <div className="text-3xl font-extrabold text-white">{stat.value}</div>
              <div className="text-sm text-slate-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Tabs */}
      <section className="container mx-auto py-16 px-4">
        <Tabs defaultValue="associatif" className="w-full">
          <TabsList className="flex flex-wrap justify-center mb-10">
            <TabsTrigger value="associatif">الحياة الجمعوية</TabsTrigger>
            <TabsTrigger value="sport">الرياضة والعافية</TabsTrigger>
            <TabsTrigger value="evenements">الفعاليات</TabsTrigger>
            <TabsTrigger value="soutien">الدعم والخدمات</TabsTrigger>
          </TabsList>

          <TabsContent value="associatif">
            <div className="max-w-3xl mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-3">الالتزام، القرار، البناء</h2>
              <p className="text-slate-600">
                في جامعة ABS، الطلبة ليسوا متفرجين بل فاعلين. الجمعيات والأندية الموضوعية والمشاريع التضامنية
                تُنظّم السنة وتُنمّي الإبداع والمسؤولية وروح الفريق.
              </p>
            </div>
            <FeatureGrid items={vieAssociative} />
          </TabsContent>

          <TabsContent value="sport">
            <div className="max-w-3xl mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-3">جسم سليم لعقل منتج</h2>
              <p className="text-slate-600">
                الرياضة والأنشطة البدنية مدمجة في مسارات جميع برامج الإجازة والماجستير لدينا. تنافس أو ترفيه أو
                لياقة: لكل واحد مكانه ويقوّي روح الفريق لديه.
              </p>
            </div>
            <FeatureGrid items={sportBienEtre} />
          </TabsContent>

          <TabsContent value="evenements">
            <div className="max-w-3xl mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-3">سنة غنية بالمواعيد</h2>
              <p className="text-slate-600">
                من بداية السنة الدراسية إلى الحفل السنوي، تبرمج BAGE وفرق الجامعة أكثر من 10 فعاليات في السنة:
                الثقافة، ريادة الأعمال، الرياضة والانفتاح على أفريقيا.
              </p>
            </div>
            <FeatureGrid items={evenements} />
            <div className="text-center mt-8">
              <Button asChild className="bg-blue-700 hover:bg-blue-900">
                <Link href="/student-life/events">
                  التقويم الكامل للفعاليات <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="soutien">
            <div className="max-w-3xl mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-3">النجاح، معاً</h2>
              <p className="text-slate-600">
                مرافقة المسار المهني، الصحة، الدروس الخصوصية: خدماتنا ترافق كل طالب من بداية السنة الدراسية إلى
                غاية الإدماج المهني.
              </p>
            </div>
            <FeatureGrid items={soutien} />
          </TabsContent>
        </Tabs>
      </section>

      {/* Engagement étudiant — BAGE */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4 grid gap-10 lg:grid-cols-2 items-center">
          <div className="relative h-80 rounded-xl overflow-hidden">
            <Image
              src="/images/campus/IMG-20250212-WA0015.jpg"
              alt="طلبة BAGE متجمعون في حرم ABS"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <Badge className="mb-3 bg-cyan-50 text-blue-700 border border-cyan-400">
              <Vote className="h-4 w-4 mr-1" /> الالتزام الطلابي
            </Badge>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">BAGE: حكومة طلابية منتخبة</h2>
            <p className="text-slate-600 mb-4">
              تُنتخب الجمعية العامة للطلبة (BAGE) ديمقراطياً كل سنة. ويتخذ مكتبها مقره في قلب الحياة الطلابية:
              يحمل أفكاركم، ويتفاوض على تحسينات الحرم الجامعي، ويشارك في بناء تقويم الفعاليات مع المديرية العامة.
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "تمثيل الطلبة لدى الإدارة",
                "تنشيط الأندية وجمعيات الحرم الجامعي",
                "تنظيم الفعاليات الكبرى للسنة",
                "حمل مشاريع المسؤولية المجتمعية: التوجّه، التطوع، إعادة التدوير",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-slate-700">
                  <HeartHandshake className="h-5 w-5 text-cyan-400 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Button asChild className="bg-blue-700 hover:bg-blue-900">
              <Link href="/student-life/organizations">
                انضم إلى جمعية <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Employabilité */}
      <section className="container mx-auto py-16 px-4">
        <div className="grid gap-10 lg:grid-cols-3">
          {[
            {
              icon: Briefcase,
              title: "المرافقة والتربصات",
              text: "مرافقة فردية نحو التشغيل: السيرة الذاتية، محاكاة المقابلة وتربصات في شركات شريكة منذ الإجازة.",
            },
            {
              icon: Users,
              title: "الشبكة المهنية",
              text: "منتديات المهن، لقاءات مع الخريجين، وشركات مالية وعموم أفريقية تجند مباشرة في الحرم الجامعي.",
            },
            {
              icon: Leaf,
              title: "المسؤولية والمسؤولية المجتمعية",
              text: "توجّه الشباب، التطوع وإعادة التدوير: يلتزم طلبتنا من أجل تنمية مستدامة لمالي وأفريقيا.",
            },
          ].map((item) => (
            <div key={item.title} className="border-l-4 border-cyan-400 bg-cyan-50 p-6 rounded-r-xl">
              <item.icon className="h-8 w-8 text-blue-700 mb-3" />
              <h3 className="text-lg font-bold text-blue-900 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-blue-950 py-14">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">هل أنتم مستعدون لعيش تجربة ABS؟</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            انضموا إلى جامعة يتقد فيها التكوين الامتيازي والممارسة وحياة الحرم الجامعي معاً، في قلب باماكو.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-cyan-400 text-blue-950 hover:bg-cyan-50 font-semibold">
              <Link href="/apply">قدّم ترشّحك الآن</Link>
            </Button>
            <Button asChild variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-blue-950">
              <Link href="/campus-life/housing">السكن وحياة الحرم الجامعي</Link>
            </Button>
          </div>
          <p className="mt-8 flex items-center justify-center gap-2 text-sm text-slate-400">
            <MapPin className="h-4 w-4 text-cyan-400" /> Hamdallaye ACI 2000, Bamako — Mali
          </p>
        </div>
      </section>
    </div>
  )
}
