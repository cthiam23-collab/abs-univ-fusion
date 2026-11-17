import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import Image from "next/image"
import {
  Briefcase,
  Users,
  FileText,
  Globe,
  Compass,
  Network,
  Handshake,
  Target,
  Building2,
  Landmark,
  Zap,
  HeartHandshake,
  Rocket,
  Linkedin,
  MessagesSquare,
  Presentation,
  MapPin,
  Phone,
  Mail,
  TrendingUp,
} from "lucide-react"
import { ORGANIZATION } from "@/lib/constants"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "خدمات المسار المهني | ABS",
  description: "مرافقة طلبة ABS نحو التشغيل: التوجيه، التربصات، الورشات العملية وتيسير الاتصال بأصحاب العمل في مالي وغرب أفريقيا.",
  path: "/career-services",
  locale: "ar",
})

const coachingSteps = [
  {
    icon: Compass,
    step: "المرحلة 1",
    title: "الاستكشاف",
    description:
      "اعرف نقاط قوتك وطموحاتك والمهن المطلوبة في مالي وغرب أفريقيا. يساعدك مستشارونا على تحديد مشروع مهني واضح وواقعي، متوائم مع تخصصك — التدبير، المالية، سلسلة التوريد أو الهندسة التعدينية.",
  },
  {
    icon: FileText,
    step: "المرحلة 2",
    title: "التحضير",
    description:
      "سيرة ذاتية مؤثرة، رسالة دافع مقنعة، ملف ترشّح متقن: نعمل معكم على كل الوثائق التي تُحدث الفرق لدى مسؤولي التوظيف، بما في ذلك الترشيحات الدولية.",
  },
  {
    icon: Network,
    step: "المرحلة 3",
    title: "بناء الشبكة",
    description:
      "تعرّف على مهنيين خلال منتدياتنا ومؤتمراتنا ولقاءاتنا مع الشركات. في ABS، الشبكة — الخريجون والأساتذة والشركاء — هي بوابتك الأولى إلى سوق العمل.",
  },
  {
    icon: Target,
    step: "المرحلة 4",
    title: "التحصيل",
    description:
      "محاكاة المقابلات، مرافقة فردية، والاطلاع على لوح التربصات وعروض العمل: حتى التوقيع على عقدك، لن تكون وحيداً في بحثك.",
  },
]

const sectors = [
  {
    icon: Landmark,
    title: "البنوك والتمويل الأصغر",
    description:
      "القطاع البنكي المالي والإقليمي — البنوك التجارية ومؤسسات التمويل الأصغر وشركات التقنية المالية — يجند بانتظام خريجينا في المالية والمحاسبة وMBA.",
  },
  {
    icon: Building2,
    title: "المناجم والطاقة",
    description:
      "الذهب والمحاجر ومشاريع الطاقة محركات الاقتصاد المالي. وبرامجنا في الهندسة التعدينية وسلسلة التوريد تُعِدّ لمسارات مهنية في هذا القطاع النابِط.",
  },
  {
    icon: Zap,
    title: "الاتصالات",
    description:
      "مشغّلو الهاتف النقال ومزوّدو الخدمات الرقمية يبحثون عن كفاءات في التدبير والتسويق واللوجستيك — كفاءات تشكّلها ABS بأسلوب الممارسة بنسبة 80 في المائة.",
  },
  {
    icon: HeartHandshake,
    title: "المنظمات غير الحكومية والمنظمات الدولية",
    description:
      "برامج الأمم المتحدة والمنظمات غير الحكومية ووكالات التنمية والمشاريع الثنائية توفر تربصات ووظائف في إدارة المشاريع والمالية وتدبير الصفقات.",
  },
  {
    icon: Rocket,
    title: "الشركات الناشئة وريادة الأعمال",
    description:
      "المنظومة الريادية في باماكو في طور التنظيم. ولمن يريد أن يؤسس، ترافق ABS الفكرة وخطة العمل وأولى اللقاءات مع الممولين.",
  },
]

const workshops = [
  {
    icon: FileText,
    title: "ورشة السيرة الذاتية ورسالة الدافع",
    description:
      "ابنِ سيرة ذاتية تجتاز المرشحات وتُبرز مشاريعك العملية وتربصاتك وكفاءاتك في الإنجليزية.",
    href: "/career-services/resume-workshop",
    cta: "المشاركة في الورشة",
  },
  {
    icon: MessagesSquare,
    title: "التحضير للمقابلات",
    description:
      "مقابلات تجريبية مصوّرة، أسئلة الموارد البشرية الكلاسيكية، محاكاة مواقف: احضر المقابلة الحقيقية بثقة من تدرّب سابقاً.",
    href: "/career-services/counseling",
    cta: "حجز جلسة مرافقة",
  },
  {
    icon: Linkedin,
    title: "LinkedIn والصورة المهنية",
    description:
      "أنشئ ملفاً يعمل لصالحك، وطوّر حضورك لدى مسؤولي التوظيف الماليين والدوليين.",
    href: "/career-services/events",
    cta: "الاطلاع على التقويم",
  },
  {
    icon: Presentation,
    title: "بحث منظّم عن تربص",
    description:
      "منهجية كاملة: استهداف الشركات، المتابعات، اتفاقية التربص، وتثمين التجربة عند نهاية المهمة.",
    href: "/career-services/job-board",
    cta: "استكشف لوح العروض",
  },
]

const stats = [
  { value: "80 في المائة", label: "بيداغوجيا عملية، متوائمة مع الاحتياجات الفعلية لأصحاب العمل" },
  { value: "21", label: "برنامج إجازة وماجستير مرتبط بالتشغيل" },
  { value: "5", label: "قطاعات شريكة كبرى: البنوك، المناجم، الاتصالات، المنظمات غير الحكومية، الشركات الناشئة" },
  { value: "1", label: "مرافق مخصص لكل مشروع مهني ابتداءً من الإجازة" },
]

export default function CareerServicesPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="relative h-[420px] overflow-hidden">
        <Image
          src="/images/campus/african-business-school-campus.jpg"
          alt="حرم ABS — African Business School الجامعي في باماكو"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/80 to-blue-900/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <p className="text-cyan-400 font-semibold uppercase tracking-widest text-sm mb-4">
                Career Services — ABS
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                مستقبلك المهني يُبنى منذ اليوم الأول
              </h1>
              <p className="text-lg text-slate-200 mb-8">
                في ABS — African Business School، التشغيل ليس خدمة ثانوية بل استراتيجية. مرافقة شخصية،
                تحضير للتربصات والتوظيف، شبكة مهنية وانفتاح دولي — كل شيء مدوّر لكي يخرج كل طالب من ABS مع مهنة،
                لا بشهادة فقط.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/career-services/job-board">
                  <Button size="lg" className="bg-cyan-400 text-blue-950 hover:bg-cyan-300 font-semibold">
                    الاطلاع على لوح العروض
                  </Button>
                </Link>
                <Link href="/career-services/counseling">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white bg-transparent text-white hover:bg-white hover:text-blue-900"
                  >
                    حجز موعد
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-blue-950 py-10">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{s.value}</p>
              <p className="text-sm text-slate-300">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tabs */}
      <section className="container mx-auto px-4 py-14">
        <Tabs defaultValue="accompagnement" className="w-full">
          <TabsList className="mb-8 flex-wrap">
            <TabsTrigger value="accompagnement">المرافقة</TabsTrigger>
            <TabsTrigger value="stages-emploi">التربصات والتوظيف</TabsTrigger>
            <TabsTrigger value="ateliers">الورشات</TabsTrigger>
            <TabsTrigger value="entreprises">الشركات الشريكة</TabsTrigger>
          </TabsList>

          {/* Accompagnement */}
          <TabsContent value="accompagnement">
            <div className="mb-10 max-w-3xl">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">مسار مرافقة في 4 مراحل</h2>
              <p className="text-slate-600 text-lg">
                من الفصل الدراسي الأول إلى تسليم الشهادات، يرافقك مركز المسار المهني في ABS بمنهجية مجرّبة:
                الاستكشاف، التحضير، بناء الشبكة، التحصيل.
              </p>
            </div>
            <div className="relative">
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-blue-100" aria-hidden="true" />
              <div className="space-y-8">
                {coachingSteps.map((s, i) => (
                  <div key={i} className={`md:flex ${i % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}>
                    <Card className="md:w-[46%] border-t-4 border-t-cyan-400 shadow-sm hover:shadow-md transition-shadow">
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <div className="h-12 w-12 rounded-full bg-blue-900 flex items-center justify-center shrink-0">
                            <s.icon className="h-6 w-6 text-cyan-400" />
                          </div>
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-cyan-600">{s.step}</p>
                            <CardTitle className="text-blue-900">{s.title}</CardTitle>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-600">{s.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/career-services/counseling">
                <Button className="bg-blue-700 hover:bg-blue-900">اكتشف المرافقة الفردية</Button>
              </Link>
              <Link href="/student-resources/career-services">
                <Button variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50">
                  موارد الطلبة
                </Button>
              </Link>
            </div>
          </TabsContent>

          {/* Stages & emploi */}
          <TabsContent value="stages-emploi">
            <div className="mb-10 max-w-3xl">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">التربصات والوظائف الأولى: القطاعات التي تجند</h2>
              <p className="text-slate-600 text-lg">
                يُجمع لوح العروض لدينا عروض التربصات والوظائف المرسلة من الشركات الشريكة لـ ABS. وهذه القطاعات
                الخمسة الكبرى حيث يجد طلبتنا فرصهم.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-10">
              {sectors.map((s, i) => (
                <Card key={i} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-cyan-50 flex items-center justify-center">
                        <s.icon className="h-5 w-5 text-blue-700" />
                      </div>
                      <CardTitle className="text-lg text-blue-900">{s.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 text-sm">{s.description}</p>
                  </CardContent>
                </Card>
              ))}
              <Card className="bg-blue-900 text-white border-0 flex flex-col justify-center hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <Briefcase className="h-8 w-8 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">عروض متاحة على الخط بشكل دائم</h3>
                  <p className="text-slate-300 text-sm mb-4">
                    تربصات أكاديمية، عقود مهنية، مهام حرة: اطّلع على الإعلانات، أودع سيرتك الذاتية وتتبّع ترشيحاتك.
                  </p>
                  <Link href="/career-services/job-board">
                    <Button className="bg-cyan-400 text-blue-950 hover:bg-cyan-300 font-semibold w-full">
                      الوصول إلى لوح العروض
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/career-services/global-careers">
                <Button variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50">
                  <Globe className="mr-2 h-4 w-4" />
                  المسارات المهنية الدولية
                </Button>
              </Link>
              <Link href="/career-services/events">
                <Button variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50">
                  <Users className="mr-2 h-4 w-4" />
                  الفعاليات المهنية
                </Button>
              </Link>
            </div>
          </TabsContent>

          {/* Ateliers */}
          <TabsContent value="ateliers">
            <div className="mb-10 max-w-3xl">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">ورشات عملية على مدار السنة</h2>
              <p className="text-slate-600 text-lg">
                في كل فصل دراسي، ينظّم مركز المسار المهني ورشات قصيرة وملموسة. تعالوا بمسودّة سيرتكم الذاتية أو
                بأسئلتكم حول مقابلة: ستغادرون بنسخة محسّنة وخطة عمل.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 mb-10">
              {workshops.map((w, i) => (
                <Card key={i} className="border-l-4 border-l-blue-700 hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="h-11 w-11 rounded-full bg-blue-900 flex items-center justify-center shrink-0">
                        <w.icon className="h-5 w-5 text-cyan-400" />
                      </div>
                      <CardTitle className="text-blue-900 text-lg">{w.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">{w.description}</p>
                    <Link href={w.href}>
                      <Button variant="outline" size="sm" className="border-blue-700 text-blue-700 hover:bg-blue-50">
                        {w.cta}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Card className="bg-cyan-50 border-cyan-400/40">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <TrendingUp className="h-8 w-8 text-blue-700 shrink-0" />
                  <p className="text-blue-900 flex-1">
                    <strong>نصيحة ABS:</strong> شاركوا في ورشة واحدة على الأقل كل فصل دراسي وفي فعالية للشركات
                    سنوياً. هذا هو الإيقاع الذي يلتزم به الخريجون الأسرع في التحصيل.
                  </p>
                  <Link href="/career-services/resume-workshop">
                    <Button className="bg-blue-700 hover:bg-blue-900 shrink-0">اطّلع على ورشات السيرة الذاتية</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Entreprises partenaires */}
          <TabsContent value="entreprises">
            <div className="mb-10 max-w-3xl">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">جسر مباشر بين المدرسة والشركة</h2>
              <p className="text-slate-600 text-lg">
                البنوك وشركات المناجم ومشغّلو الاتصالات والمنظمات غير الحكومية والمؤسسات الإقليمية: شركاؤنا
                يتدخلون في القاعات ويستقبلون المتربصين ويجندون خريجينا. هل أنتم مؤسسة؟ انضموا إلى الشبكة.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 mb-10">
              <Card className="border-t-4 border-t-cyan-400">
                <CardHeader>
                  <CardTitle className="text-blue-900">التوظيف في ABS</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-slate-600 mb-6">
                    <li className="flex gap-2">
                      <span className="text-cyan-600 font-bold">—</span>
                      انشروا عروض تربصاتكم ووظائفكم على لوح العروض لدينا، مجاناً.
                    </li>
                    <li className="flex gap-2">
                      <span className="text-cyan-600 font-bold">—</span>
                      شاركوا في منتديات الشركات وأيام التوظيف بحرم حمدلاي.
                    </li>
                    <li className="flex gap-2">
                      <span className="text-cyan-600 font-bold">—</span>
                      اطّلعوا على قواعد مرشحين مستهدفة: MBA، المالية والهندسة المالية، سلسلة التوريد، الهندسة
                      التعدينية.
                    </li>
                    <li className="flex gap-2">
                      <span className="text-cyan-600 font-bold">—</span>
                      شاركوا في بناء مشاريع بيداغوجية مع بُعد الممارسة بنسبة 80 في المائة في برامجنا.
                    </li>
                  </ul>
                  <Link href="/employers/recruit">
                    <Button className="bg-blue-700 hover:bg-blue-900">
                      <Handshake className="mr-2 h-4 w-4" />
                      خدمات التوظيف
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              <Card className="bg-blue-950 text-white border-0">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4 text-cyan-400">لماذا يثق بنا أصحاب العمل</h3>
                  <ul className="space-y-3 text-slate-300 text-sm mb-6">
                    <li>طلبة متكوّنون وفق معايير LMD/ECTS، قابلة للمقارنة دولياً.</li>
                    <li>80 في المائة من الممارسة: حالات شركات، دراسات ميدانية، محاكاة.</li>
                    <li>الإنجليزية مدمجة منذ الإجازة عبر الأكاديمية الإنجليزية (English Academy) — ميزة داخل المجموعات الإقليمية.</li>
                    <li>قيم الاندماج والوحدة الأفريقية التي تُعنى بها المديرية العامة، السيدة سوخنا م. ثيام.</li>
                  </ul>
                  <Link href="/academics/programs">
                    <Button variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-blue-950">
                      برامجنا التكوينية
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* CTA band */}
      <section className="bg-gradient-to-r from-blue-950 to-blue-900 py-14">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            هل أنتم مستعدون للارتقاء بمساركم المهني؟
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            اتصلوا بمركز المسار المهني في ABS — African Business School — حمدلاي ACI 2000، باماكو — أو
            اطّلعوا الآن على عروض التربصات والتوظيف.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link href="/career-services/job-board">
              <Button size="lg" className="bg-cyan-400 text-blue-950 hover:bg-cyan-300 font-semibold">
                الاطلاع على العروض
              </Button>
            </Link>
            <Link href="/employers/recruit">
              <Button size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-blue-900">
                أنا صاحب عمل
              </Button>
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-300">
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-cyan-400" /> {ORGANIZATION.contact.address.formatted}
            </span>
            <span className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-cyan-400" /> {ORGANIZATION.contact.phone}
            </span>
            <span className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-cyan-400" /> {ORGANIZATION.contact.email}
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}
