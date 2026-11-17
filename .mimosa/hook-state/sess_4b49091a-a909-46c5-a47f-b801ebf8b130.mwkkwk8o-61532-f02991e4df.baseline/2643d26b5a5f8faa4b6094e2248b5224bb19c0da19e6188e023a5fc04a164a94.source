import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowRight,
  BookOpen,
  Building2,
  Coins,
  Globe2,
  Handshake,
  Landmark,
  Laptop,
  LineChart,
  Microscope,
  Newspaper,
  Pickaxe,
  Sprout,
  Users,
} from "lucide-react"
import { ORGANIZATION } from "@/lib/constants"

export const metadata: Metadata = buildMetadata({
  title: "البحث | جامعة ABS",
  description: "البحث التطبيقي في جامعة ABS — African Business School الخاصة بباماكو: ريادة الأعمال، المناجم والتنمية المستدامة، التمويل الإسلامي، الرقمي والذكاء الاصطناعي، الاندماج الأفريقي.",
  path: "/research",
  locale: "ar",
})

const stats = [
  { value: "6", label: "مجالات بحث تطبيقي", icon: Microscope },
  { value: "16", label: "برنامج ماجستير متخصص مدعوم بالبحث", icon: Landmark },
  { value: "80%", label: "من الممارسة في بيداغوجيا ABS", icon: Laptop },
  { value: "1", label: "كرسي مخصص للاندماج الأفريقي", icon: Globe2 },
]

const axes = [
  {
    icon: Sprout,
    title: "ريادة الأعمال والشركات الصغيرة والمتوسطة الأفريقية",
    description:
      "كيف تنشأ الشركات المالية وتنمو وتصمد: النماذج الاقتصادية، تمويل الشركات الصغيرة والمتوسطة، منظومة الشركات الناشئة في باماكو، إدماج القطاع غير المنظّم وريادة الأعمال النسائية.",
    image: "/images/campus/IMG-20250212-WA0016.jpg",
    tags: ["منظومة الشركات الناشئة", "تمويل الشركات الصغيرة والمتوسطة", "ريادة الأعمال النسائية"],
  },
  {
    icon: Pickaxe,
    title: "الصناعات الاستخراجية والتنمية المستدامة",
    description:
      "مالي أرض الذهب والبوكسيت. تحلّل أعمالنا حوكمة القطاع التعديني، وإعادة التوزيع المحلي للعوائد، والأثر البيئي والمسؤولية الاجتماعية لشركات القطاع.",
    image: "/images/campus/IMG-20250212-WA0021.jpg",
    tags: ["الحوكمة التعدينية", "المسؤولية الاجتماعية للشركات", "الأثر البيئي"],
  },
  {
    icon: Coins,
    title: "المالية والتمويل الإسلامي والشمول المالي",
    description:
      "التمويل الأصغر والنقود عبر الهاتف المحمول والتمويل الإسلامي والهندسة المالية: كيف نربط الفاعلين الاقتصاديين في غرب أفريقيا بدوائر التمويل، بما في ذلك المتوافقة مع مبادئ الإسلام.",
    image: "/images/gallery/IMG-20250216-WA0015.jpg",
    tags: ["التمويل الإسلامي", "النقود المحمولة", "الشمول المالي"],
  },
  {
    icon: Laptop,
    title: "الرقمي والذكاء الاصطناعي وتحوّل المؤسسات",
    description:
      "الذكاء الاصطناعي المطبّق في التدبير، الأمن السيبراني للشركات الصغيرة والمتوسطة، حوكمة المعطيات ورقمنة الخدمات العمومية في السياق غرب الأفريقي.",
    image: "/images/campus/IMG-20250212-WA0022.jpg",
    tags: ["الذكاء الاصطناعي التطبيقي", "حوكمة المعطيات", "التحوّل الرقمي"],
  },
  {
    icon: Globe2,
    title: "العلاقات الدولية والاندماج الأفريقي",
    description:
      "المجموعة الاقتصادية لدول غرب أفريقيا، منطقة التجارة الحرة القارية الأفريقية، الدبلوماسية الاقتصادية وجيوسياسة الموارد: يُنير كرسي ABS مكانة مالي وغرب أفريقيا في سلاسل القيمة العالمية.",
    image: "/images/gallery/IMG-20250216-WA0030.jpg",
    tags: ["منطقة التجارة الحرة القارية", "المجموعة الاقتصادية لدول غرب أفريقيا", "الدبلوماسية الاقتصادية"],
  },
  {
    icon: Newspaper,
    title: "الإعلام والتواصل والمعلومة العمومية",
    description:
      "جودة المعلومة الاقتصادية، صحافة المعطيات، التواصل في أوقات الأزمات وحرية الصحافة: محور في خدمة رأي عام واعٍ ومؤسسات شفافة.",
    image: "/images/gallery/IMG-20250216-WA0060.jpg",
    tags: ["صحافة المعطيات", "التواصل", "المعلومة الاقتصادية"],
  },
]

const centers = [
  { name: "مركز الامتياز في التدبير وريادة الأعمال", icon: Building2 },
  { name: "مرصد الصناعات التعدينية والتنمية المستدامة", icon: Pickaxe },
  { name: "مختبر المالية والهندسة المالية", icon: LineChart },
  { name: "مختبر الرقمي والذكاء الاصطناعي", icon: Laptop },
  { name: "مركز الإعلام والتواصل", icon: Newspaper },
  { name: "كرسي العلاقات الدولية والاندماج الأفريقي", icon: Globe2 },
]

const projects = [
  {
    title: "رسم خريطة منظومة الشركات الناشئة في باماكو",
    lead: "مركز الامتياز في التدبير وريادة الأعمال",
    description:
      "حصر وتحليل الشركات الفتية في العاصمة: القطاعات الواعدة، عوائق التمويل، دور الحاضنات والجاليات.",
    icon: Sprout,
  },
  {
    title: "مقياس الحوكمة التعدينية في مالي",
    lead: "مرصد الصناعات التعدينية",
    description:
      "تتبّع سنوي لممارسات الشركات الذهبية: المحتوى المحلي، الرسوم، الحوار المجتمعي ومسارات التنمية المستدامة.",
    icon: Pickaxe,
  },
  {
    title: "التمويل الإسلامي وتمويل البنى التحتية",
    lead: "مختبر المالية والهندسة المالية",
    description:
      "دراسة آليات المرابحة والصكوك المطبّقة في تمويل المشاريع بغرب أفريقيا، مع سيناريوهات تطبيق في مالي.",
    icon: Coins,
  },
  {
    title: "الذكاء الاصطناعي وقيادة الشركات الصغيرة والمتوسطة المالية",
    lead: "مختبر الرقمي والذكاء الاصطناعي",
    description:
      "ابتكار أدوات مساعدة القرار في متناول قادة الشركات الصغيرة والمتوسطة: توقع الخزينة، إدارة المخزون، تحليل الزبائن.",
    icon: Laptop,
  },
  {
    title: "الإعلام والمعلومة الاقتصادية: تغطية القطاع التعديني في الصحافة المالية",
    lead: "مركز الإعلام والتواصل",
    description:
      "تحليل جودة المعلومة الاقتصادية المواطنة: المعطيات المستشهد بها، صحافة المعطيات ورهانات النقاش العام حول حوكمة الموارد.",
    icon: Newspaper,
  },
]

const publications = [
  {
    title: "ريادة الأعمال في باماكو: مسارات ونماذج اقتصادية للشركات الفتية",
    authors: "هيئة التدريس في ABS — مركز الامتياز في التدبير وريادة الأعمال",
    journal: "Cahiers de la Recherche ABS",
    date: "2025",
  },
  {
    title: "الذهب والبوكسيت والتنمية: أيّ محتوى محلي للصناعات الاستخراجية المالية؟",
    authors: "فريق ABS — مرصد الصناعات التعدينية",
    journal: "Recherche & Territoires Ouest-Africains",
    date: "2025",
  },
  {
    title: "النقود المحمولة والشمول المالي لرائدات الأعمال في الساحل",
    authors: "مختبر المالية والهندسة المالية في ABS",
    journal: "Cahiers de la Recherche ABS",
    date: "2024",
  },
]

const partnerships = [
  {
    partner: "الشركات والاتحادات المهنية في مالي",
    description:
      "كراسي شركة، دراسات بتكليف، تربصات بحثية: يعمل طلبتنا وأساتذتنا على مشكلات حقيقية للقطاع الخاص المالي.",
    icon: Handshake,
  },
  {
    partner: "المؤسسات العمومية والجماعات المحلية",
    description:
      "خبرة في حوكمة الصفقات العمومية، سياسات التنمية المحلية، وصياغة سياسات عمومية قائمة على المعطيات.",
    icon: Landmark,
  },
  {
    partner: "الشبكات الأكاديمية الأفريقية والدولية",
    description:
      "نشر مشترك، ندوات مشتركة وتنقّل الأساتذة الباحثين مع جامعات شريكة في أفريقيا وخارجها.",
    icon: Users,
  },
]

export default function ResearchPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center justify-center text-white">
        <Image
          src="/images/campus/african-business-school-campus.jpg"
          alt="حرم جامعة ABS، باماكو"
          fill
          className="absolute inset-0 object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/80 to-blue-950/70" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 py-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            بحث تطبيقي — باماكو، مالي
          </p>
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            بحث ABS: نفكر في أفريقيا من باماكو
          </h1>
          <p className="mb-8 text-lg md:text-xl text-slate-100">
            ريادة الأعمال، المناجم والتنمية المستدامة، التمويل الإسلامي، الذكاء الاصطناعي، الإعلام والاندماج
            الأفريقي: ستة مجالات في خدمة التحديات الحقيقية لمالي وغرب أفريقيا.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/research/centers">
              <Button size="lg" className="bg-cyan-400 font-semibold text-slate-950 hover:bg-cyan-300">
                اكتشف مراكزنا <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/research/collaborate">
              <Button
                size="lg"
                variant="outline"
                className="border-white font-semibold text-white hover:bg-white hover:text-blue-900"
              >
                تعاون معنا
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-slate-200 bg-white">
        <div className="container mx-auto grid grid-cols-1 gap-6 px-4 py-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-4 rounded-xl border border-slate-200 bg-cyan-50 p-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-900 text-cyan-400">
                <stat.icon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-900">{stat.value}</p>
                <p className="text-sm text-slate-600">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ambition */}
      <section className="bg-white py-16">
        <div className="container mx-auto grid items-center gap-10 px-4 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-blue-900 md:text-4xl">
              مدرسة أعمال كبرى ومهمة بحثية حقيقية
            </h2>
            <p className="mb-4 text-lg text-slate-600">
              في جامعة ABS — African Business School الخاصة، البحث ليس زينة: بل يغذي مباشرة نسبة الـ 80 في
              المائة من بيداغوجيا العملية لدينا. كل محور بحث مدعوم ببرامج الإجازة وبرامج الماجستير الـ 16 لدينا،
              لكي يتعلم الطلبة بحل المشكلات الملموسة للشركات والأقاليم المالية.
            </p>
            <p className="mb-6 text-lg text-slate-600">
              من حوكمة الموارد التعدينية (الذهب والبوكسيت) إلى التمويل الإسلامي، مروراً بالذكاء الاصطناعي المطبّق
              في التدبير، تُنتج فرقنا معارف نافعة لصنّاع القرار ورجال الأعمال والمواطنين.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/research/publications">
                <Button variant="outline" className="border-blue-900 text-blue-900 hover:bg-cyan-50">
                  <BookOpen className="mr-2 h-4 w-4" /> اطّلع على المنشورات
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="ghost" className="text-blue-700 hover:bg-cyan-50">
                  رؤيتنا <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative h-72 overflow-hidden rounded-2xl shadow-xl lg:h-96">
            <Image
              src="/images/campus/IMG-20250212-WA0025.jpg"
              alt="طلبة جامعة ABS في عمل جماعي"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Tabs : Axes / Centres / Publications / Partenariats */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-3 text-center text-3xl font-bold text-blue-900 md:text-4xl">استكشف بحث ABS</h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-lg text-slate-600">
            محاور امتياز، مراكز مخصصة، منشورات هيئة التدريس وشراكات: كل منظومة البحث في ABS.
          </p>
          <Tabs defaultValue="axes" className="w-full">
            <TabsList className="mb-10 grid w-full grid-cols-2 lg:grid-cols-4">
              <TabsTrigger value="axes" className="text-base">
                محاور البحث
              </TabsTrigger>
              <TabsTrigger value="centres" className="text-base">
                المراكز
              </TabsTrigger>
              <TabsTrigger value="publications" className="text-base">
                المنشورات
              </TabsTrigger>
              <TabsTrigger value="partenariats" className="text-base">
                الشراكات
              </TabsTrigger>
            </TabsList>

            <TabsContent value="axes">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {axes.map((axe, i) => (
                  <Card key={i} className="group overflow-hidden transition-shadow hover:shadow-xl">
                    <div className="relative h-44 overflow-hidden">
                      <Image
                        src={axe.image}
                        alt={axe.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 to-transparent" />
                      <axe.icon className="absolute bottom-3 left-4 h-8 w-8 text-cyan-400" />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg text-blue-900">{axe.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-sm text-slate-600">{axe.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {axe.tags.map((tag, j) => (
                          <span
                            key={j}
                            className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-medium text-blue-900"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="centres">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {centers.map((center, i) => (
                  <Link href="/research/centers" key={i}>
                    <Card className="group h-full transition-all hover:border-blue-700 hover:shadow-lg">
                      <CardContent className="flex h-full flex-col items-start gap-4 p-6">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-900 text-cyan-400 transition-transform group-hover:scale-110">
                          <center.icon className="h-6 w-6" />
                        </div>
                        <h3 className="text-lg font-semibold text-blue-900 group-hover:text-blue-700">
                          {center.name}
                        </h3>
                        <span className="mt-auto inline-flex items-center text-sm font-medium text-blue-700">
                          اطّلع على المزيد <ArrowRight className="ml-1 h-4 w-4" />
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="publications">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {publications.map((pub, i) => (
                  <Card key={i} className="transition-shadow hover:shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-lg text-blue-900">{pub.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-2 text-sm text-slate-600">{pub.authors}</p>
                      <p className="text-sm font-medium text-blue-700">
                        {pub.journal} · {pub.date}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Link href="/research/publications">
                  <Button variant="outline" className="border-blue-900 text-blue-900 hover:bg-cyan-50">
                    جميع المنشورات <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </TabsContent>

            <TabsContent value="partenariats">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {partnerships.map((p, i) => (
                  <Card key={i} className="h-full transition-shadow hover:shadow-lg">
                    <CardContent className="flex h-full flex-col gap-4 p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-50 text-blue-900">
                        <p.icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-lg font-semibold text-blue-900">{p.partner}</h3>
                      <p className="text-sm text-slate-600">{p.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Link href="/research/partnerships">
                  <Button variant="outline" className="border-blue-900 text-blue-900 hover:bg-cyan-50">
                    شراكاتنا البحثية <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Projets en cours */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-3 text-center text-3xl font-bold text-blue-900 md:text-4xl">مشاريع قيد الإنجاز</h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-lg text-slate-600">
            أعمال بحث تطبيقي، تُنجز مع طلبة الماجستير في ABS، حول التحديات الكبرى لمالي والمنطقة.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {projects.map((project, i) => (
              <Card key={i} className="flex gap-4 p-6 transition-shadow hover:shadow-lg">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-900 text-cyan-400">
                  <project.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-blue-900">{project.title}</h3>
                  <p className="mb-2 text-sm font-medium text-blue-700">{project.lead}</p>
                  <p className="text-sm text-slate-600">{project.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-950 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">انضموا إلى مجتمعنا البحثي</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-200">
            طالب ماجستير، أستاذ باحث، شركة أو مؤسسة: هناك آلاف الطرق للمساهمة في بحث ABS. لنتحدث عن الأمر.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/research/collaborate">
              <Button size="lg" className="bg-cyan-400 font-semibold text-slate-950 hover:bg-cyan-300">
                تعاون مع ABS
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white font-semibold text-white hover:bg-white hover:text-blue-900"
              >
                الاتصال بالمديرية العامة
              </Button>
            </Link>
          </div>
          <p className="mt-8 text-sm text-slate-400">
            {ORGANIZATION.contact.address.formatted} · {ORGANIZATION.contact.phone} · {ORGANIZATION.contact.email}
          </p>
        </div>
      </section>
    </div>
  )
}
