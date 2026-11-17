import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"
import {
  BookOpen,
  Landmark,
  Pickaxe,
  Scale,
  Newspaper,
  Wifi,
  Database,
  Laptop,
  Users,
  Printer,
  Search,
  Clock,
  MapPin,
  Phone,
  Mail,
  Headphones,
} from "lucide-react"
import { ORGANIZATION } from "@/lib/constants"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "المكتبة | ABS",
  description: "مكتبة ABS — African Business School ومواردها التوثيقية بباماكو: مجموعات متخصصة، موارد رقمية، قاعات عمل وخدمات مساعدة بحثية لطلبة الإجازة والماجستير.",
  path: "/library",
  locale: "ar",
})

const collections = [
  {
    icon: Landmark,
    title: "الإدارة والتدبير",
    description:
      "الاستراتيجية والتسويق وموارد البشر وريادة الأعمال: المؤلفات المرجعية والكتب الدراسية لبرامج الإجازة الخمسة في الجامعة، مدعّمة بدراسات حالات أفريقية ودولية.",
  },
  {
    icon: BookOpen,
    title: "المالية والبنوك والتمويل الإسلامي",
    description:
      "مجموعة نادرة في المنطقة: تمويل الشركات والهندسة المالية والأسواق والتمويل الأصغر ومبادئ التمويل الإسلامي (المضاربة، المشاركة، الصكوك) — بالفرنسية والإنجليزية.",
  },
  {
    icon: Pickaxe,
    title: "المناجم والجيولوجيا والطاقة",
    description:
      "الهندسة التعدينية واستغلال المحاجر وسلامة المواقع والقانون التعديني والقضايا البيئية: الأساس التوثيقي لتخصصاتنا التقنية، بما يواكب القطاع المالي.",
  },
  {
    icon: Scale,
    title: "القانون والحوكمة",
    description:
      "قانون الأعمال والقانون الدولي والصفقات العمومية والحوكمة والأخلاقيات: موارد لا غنى عنها لماجستير حوكمة الصفقات العمومية والاستعداد للمسابقات.",
  },
  {
    icon: Newspaper,
    title: "الصحافة المالية والأفريقية",
    description:
      "الصحف والمجلات والدوريات الاقتصادية من مالي والقارة: تابعوا نبض الأخبار من أجل عروضكم ومناظراتكم وبحوثكم.",
  },
  {
    icon: Database,
    title: "الموارد الرقمية",
    description:
      "كتب إلكترونية وقواعد بيانات أكاديمية ورسائل طلابية ومجاملات امتحانات متاحة من محطات المكتبة أو عبر شبكة الواي فاي في الحرم الجامعي.",
  },
]

const services = [
  {
    icon: Search,
    title: "المساعدة في البحث التوثيقي",
    description:
      "يرشدك أمين المكتبة إلى المصدر المناسب، ويساعدك على التوثيق الصحيح واستثمار قواعد البيانات.",
  },
  {
    icon: Laptop,
    title: "محطات معلومية وواي فاي",
    description:
      "فضاء مُتصل للاطلاع على الموارد الرقمية وصياغة أعمالك والتحضير لعروضك التقديمية.",
  },
  {
    icon: Users,
    title: "قاعات العمل الجماعي",
    description:
      "فضاءات للتحضير لمشاريعكم الجماعية — فالبيداغوجيا في ABS تعتمد بنسبة 80 في المائة على الممارسة والعمل الجمعوي.",
  },
  {
    icon: Printer,
    title: "الطباعة والاستنساخ",
    description:
      "طباعة ونسخ ورقياً ومسح ضوئي للوثائق في عين المكان، بأسعار مخصصة للطلبة.",
  },
  {
    icon: Headphones,
    title: "فضاء الإنجليزية واللغات",
    description:
      "موارد مخصصة للأكاديمية الإنجليزية (English Academy): كتب دراسية، مواد صوتية، تحضير للامتحانات وقراءات بالإنجليزية لجميع المستويات.",
  },
  {
    icon: BookOpen,
    title: "الإعارة بين المكتبات",
    description:
      "وثيقة غير متوفرة في رفوفنا؟ نفعّل شراكاتنا للحصول عليها في أقرب الآجال.",
  },
]

export default function LibraryPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="relative h-[420px] overflow-hidden">
        <Image
          src="/images/campus/IMG-20250212-WA0013.jpg"
          alt="مكتبة ABS — African Business School الجامعية"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/80 to-blue-900/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <p className="text-cyan-400 font-semibold uppercase tracking-widest text-sm mb-4">
                المكتبة الجامعية
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                مكتبة ABS: وقود بحوثكم وطموحاتكم
              </h1>
              <p className="text-lg text-slate-200 mb-8">
                مجموعات متوائمة مع برامجنا، موارد رقمية، فضاءات عمل وفريق يرافقكم: هنا يبدأ كل مشروع — عرض، بحث،
                خطة عمل — ببحث توثيقي جيد.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/library/catalog">
                  <Button size="lg" className="bg-cyan-400 text-blue-950 hover:bg-cyan-300 font-semibold">
                    البحث في الدليل
                  </Button>
                </Link>
                <Link href="/library/hours">
                  <Button size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-blue-900">
                    أوقات الافتتاح
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="container mx-auto px-4 py-14">
        <Tabs defaultValue="collections" className="w-full">
          <TabsList className="mb-8 flex-wrap">
            <TabsTrigger value="collections">المجموعات</TabsTrigger>
            <TabsTrigger value="services">الخدمات</TabsTrigger>
            <TabsTrigger value="horaires">الأوقات والولوج</TabsTrigger>
          </TabsList>

          {/* Collections */}
          <TabsContent value="collections">
            <div className="mb-10 max-w-3xl">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">مجموعات مدوّرة على مقاس مساراتنا</h2>
              <p className="text-slate-600 text-lg">
                من الإجازة إلى MBA، لكل تخصص في ABS رصيده التوثيقي الخاص. وتواكب مشترياتنا البنى البيداغوجية
                والواقع الاقتصادي لغرب أفريقيا.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-10">
              {collections.map((c, i) => (
                <Card key={i} className="hover:shadow-md transition-shadow border-t-4 border-t-cyan-400">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-blue-900 flex items-center justify-center shrink-0">
                        <c.icon className="h-5 w-5 text-cyan-400" />
                      </div>
                      <CardTitle className="text-lg text-blue-900">{c.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 text-sm">{c.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Card className="bg-blue-950 text-white border-0">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <Wifi className="h-10 w-10 text-cyan-400 shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">مكتبة متصلة بالشبكة</h3>
                    <p className="text-slate-300 text-sm">
                      واي فاي في كامل الحرم الجامعي، دليل على الخط، قواعد بيانات أكاديمية: التوثيق في ABS يرافقكم في كل
                      مكان، من حرم حمدلاي إلى منازلكم.
                    </p>
                  </div>
                  <Link href="/resources/library">
                    <Button className="bg-cyan-400 text-blue-950 hover:bg-cyan-300 font-semibold shrink-0">
                      الموارد على الخط
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Services */}
          <TabsContent value="services">
            <div className="mb-10 max-w-3xl">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">أكثر من مجرد رفوف كتب</h2>
              <p className="text-slate-600 text-lg">
                المكتبة فضاء للعمل وتبادل الخبرات والتكوين المنهجي. اكتشفوا كل ما تضعها تحت تصرفكم، بوصفها
                مكمّلاً للمحاضرات.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-10">
              {services.map((s, i) => (
                <Card key={i} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-cyan-50 flex items-center justify-center shrink-0">
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
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/library/catalog">
                <Button className="bg-blue-700 hover:bg-blue-900">
                  <Search className="mr-2 h-4 w-4" />
                  استكشف الدليل
                </Button>
              </Link>
              <Link href="/library/hours">
                <Button variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50">
                  <Clock className="mr-2 h-4 w-4" />
                  جدولة زيارتي
                </Button>
              </Link>
            </div>
          </TabsContent>

          {/* Horaires & accès */}
          <TabsContent value="horaires">
            <div className="grid lg:grid-cols-2 gap-8 mb-10">
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-4">أوقات الافتتاح</h2>
                <Card className="mb-6">
                  <CardContent className="pt-6">
                    <ul className="divide-y divide-slate-100">
                      {[
                        { day: "الاثنين — الجمعة", hours: "8:00 — 18:00", note: "يوم متصل، فضاء العمل مفتوح" },
                        { day: "السبت", hours: "9:00 — 13:00", note: "المراجعة والاطلاع في عين المكان" },
                        { day: "الأحد والأيام العطلية", hours: "مغلق", note: "الموارد الرقمية متاحة عن بُعد" },
                      ].map((row, i) => (
                        <li key={i} className="flex items-center justify-between py-3">
                          <div>
                            <p className="font-semibold text-blue-900">{row.day}</p>
                            <p className="text-sm text-slate-500">{row.note}</p>
                          </div>
                          <span
                            className={`font-bold ${
                              row.hours === "مغلق" ? "text-slate-400" : "text-cyan-600"
                            }`}
                          >
                            {row.hours}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm text-slate-500 mt-4">
                      قد تتغير الأوقات خلال فترات الامتحانات والعطل الأكاديمية والأيام العطلية المالية. راجعوا
                      الصفحة المخصصة للحصول على آخر التحديثات.
                    </p>
                    <Link href="/library/hours">
                      <Button variant="outline" size="sm" className="mt-3 border-blue-700 text-blue-700 hover:bg-blue-50">
                        الأوقات المفصّلة
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-6">
                <Card className="border-t-4 border-t-cyan-400">
                  <CardHeader>
                    <CardTitle className="text-blue-900">الولوج والشروط</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-slate-600 text-sm">
                      <li className="flex gap-2">
                        <span className="text-cyan-600 font-bold">—</span>
                        أولوية الولوج لطلبة ABS بشرط إبراز بطاقة الطالب.
                      </li>
                      <li className="flex gap-2">
                        <span className="text-cyan-600 font-bold">—</span>
                        شروط الإعارة تُبلّغ في استقبال المكتبة.
                      </li>
                      <li className="flex gap-2">
                        <span className="text-cyan-600 font-bold">—</span>
                        الخريجون السابقون: استفسروا عن صيغ الولوج إلى الرصيد التوثيقي.
                      </li>
                      <li className="flex gap-2">
                        <span className="text-cyan-600 font-bold">—</span>
                        الموقع: حرم حمدلاي ACI 2000، في قلب باماكو، سهل الولوج من كل نواحي العاصمة.
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-blue-900">الاتصال بالمكتبة</CardTitle>
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
                        إرسال سؤال
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
          <h2 className="text-3xl font-bold text-white mb-4">فكرتكم الكبيرة القادمة تبدأ من هنا</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            سواء كنتم تحضّرون عرضاً أو بحثاً أو مشروعكم الخاص، فإن مكتبة ABS هي شريككم الأول في النجاح. تعالوا
            لاكتشافها.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/library/catalog">
              <Button size="lg" className="bg-cyan-400 text-blue-950 hover:bg-cyan-300 font-semibold">
                الاطلاع على الدليل
              </Button>
            </Link>
            <Link href="/campus-tour">
              <Button size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-blue-900">
                زيارة الحرم الجامعي
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
