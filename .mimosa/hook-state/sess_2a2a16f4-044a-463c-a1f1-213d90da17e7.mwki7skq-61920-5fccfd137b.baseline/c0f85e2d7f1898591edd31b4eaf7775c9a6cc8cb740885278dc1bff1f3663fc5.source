import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Award,
  Compass,
  Globe2,
  Landmark,
  Network,
  Newspaper,
  Briefcase,
  ShieldCheck,
  Users,
} from "lucide-react"

export const metadata: Metadata = buildMetadata({
  title: "من نحن | ABS — African Business School",
  description: "من نحن؟ ABS — African Business School، مؤسسة خاصة للتعليم العالي قارية أفريقية ومتعددة التخصصات، مقرها حمدلاي ACI 2000 بباماكو منذ 2016.",
  path: "/about",
  locale: "ar",
})

// Les cinq grands domaines disciplinaires (source : V3 §4.1 et présentation institutionnelle).
const domains = [
  {
    icon: Landmark,
    title: "العلوم والهندسة",
    description: "الجيولوجيا، الجيوتقنية، الهندسة المدنية.",
    href: "/programs/geological-civil-mining-engineering",
  },
  {
    icon: Network,
    title: "الرقمنة والتقنيات",
    description:
      "التطوير المعلوماتي، الأنظمة، البيانات، الشبكات، الأمن السيبراني والتهيئة التدريجية للذكاء الاصطناعي.",
    href: "/programs/engineering/computer-science",
  },
  {
    icon: Globe2,
    title: "العلوم الاجتماعية والدولية",
    description:
      "العلاقات الدولية، الدبلوماسية، التعاون، المؤسسات، القضايا الجيوسياسية والتواصل بين الثقافات.",
    href: "/programs/international-relations",
  },
  {
    icon: Newspaper,
    title: "المعلومات والإعلام والاتصال",
    description:
      "الصحافة، التحرير، إنتاج المحتوى، الاتصال المؤسسي ووسائل الإعلام الرقمية.",
    href: "/programs/journalism-communication",
  },
  {
    icon: Briefcase,
    title: "علوم التسيير",
    description:
      "إدارة الأعمال، المالية، التسويق، الموارد البشرية، المراجعة، مراقبة التسيير، اللوجستيك وريادة الأعمال، وفق الاختيارات المعتمدة رسمياً.",
    href: "/programs/business-administration",
  },
]

const aboutLinks = [
  {
    icon: Compass,
    title: "رسالتنا ورؤيتنا",
    description:
      "تكوين كفاءات قادرة على فهم تحولات محيطها وتقديم إجابات مفيدة لها.",
    href: "/about/mission",
  },
  {
    icon: Award,
    title: "قيمنا",
    description:
      "الصرامة، المسؤولية، الانفتاح، الابتكار، الالتزام الأفريقي وروح الفريق.",
    href: "/about/values",
  },
  {
    icon: Users,
    title: "القيادة والحوكمة",
    description:
      "التنظيم المؤسسي لـ ABS: المديرية العامة، رئاسة الجامعة، مديرية الدراسات والخدمات.",
    href: "/about/governance",
  },
]

export default function AboutPage() {
  return (
    <div>
      {/* Hero : Qui sommes-nous */}
      <section className="relative overflow-hidden bg-blue-950 py-20 text-white">
        <Image
          src="/images/documents/v3-image1.png"
          alt="طلبة ABS في الحرم الجامعي"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/85 to-blue-900/60" />
        <div className="container relative mx-auto px-6">
          <p className="font-semibold uppercase tracking-[0.25em] text-cyan-300">من نحن؟</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            مؤسسة متعددة التخصصات: العلوم والهندسة، الرقمنة، العلوم الاجتماعية والدولية، الاتصال والتسيير
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-blue-100">
            ABS — African Business School مؤسسة خاصة للتعليم العالي مقرها باماكو في مالي.
            منذ سنة 2016، تحمل ABS طموحاً قارياً أفريقياً: المساهمة في تكوين كفاءات قادرة على فهم
            تحولات محيطها وتقديم إجابات مفيدة لها.
          </p>
        </div>
      </section>

      {/* Présentation institutionnelle */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="mx-auto w-full max-w-md overflow-hidden rounded-3xl bg-white p-8 shadow-xl">
            <Image
              src="/images/abs-logo.png"
              alt="الشعار الرسمي لـ ABS — African Business School"
              width={480}
              height={294}
              className="h-auto w-full object-contain"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900">هوية ABS</h2>
            <p className="mt-5 leading-7 text-slate-600">
              انطلقت سنة 2016، ومقرها حمدلاي ACI 2000 في باماكو، وتندرج المؤسسة ضمن طموح واضح:
              المساهمة في تكوين كفاءات قادرة على تلبية احتياجات المنظمات والمؤسسات والمجتمعات
              الأفريقية، مع فهم الديناميات الدولية.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              تطوّر ABS هوية قارية أفريقية ومنهجاً موجهاً نحو الاحتراف. وتريد أن تجعل من التكوين فضاءً
              تلتقي فيه المعارف الأكاديمية مع واقعيات الميدان، حيث يتعلم الطالب التحليل والاقتراح
              والتعاون والعمل بمسؤولية.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              هويتها متعددة التخصصات. فإلى جانب علوم التسيير، تطوّر ABS مجالات مرتبطة بالعلوم
              والهندسة والرقمنة والعلاقات الدولية، إضافة إلى الصحافة والاتصال.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              كلمة «Business» في تسمية African Business School لا تعني أن ABS مدرسة تجارية
              حصراً. بل تعبّر عن طموح تكويني موجه نحو العمل، وحل المشكلات، والتنظيم، والابتكار
              وخلق القيمة.
            </p>
          </div>
        </div>
      </section>

      {/* Les cinq grands domaines de formation */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-slate-900">مجالاتنا التكوينية الخمسة الكبرى</h2>
            <p className="mt-3 leading-7 text-slate-600">
              يمكّن تنوّع هذه المجالات ABS من تناول التحديات المعاصرة من عدة زوايا: فهم الأقاليم
              والموارد، تصميم الحلول التقنية، إتقان الأدوات الرقمية، تحليل العلاقات بين المجتمعات
              والمؤسسات، إنتاج معلومات موثوقة، الاتصال بفعالية وتسيير المنظمات بمسؤولية.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {domains.map(({ icon: Icon, title, description, href }) => (
              <Link key={title} href={href} className="group">
                <Card className="h-full border-slate-200 transition-shadow group-hover:shadow-lg">
                  <CardHeader>
                    <span className="mb-2 inline-flex size-12 items-center justify-center rounded-xl bg-cyan-50">
                      <Icon className="size-6 text-cyan-700" aria-hidden="true" />
                    </span>
                    <CardTitle className="text-lg text-slate-900">{title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-6 text-slate-600">{description}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-700">
                      استكشف هذا الفرع
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Approche pédagogique */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="font-semibold uppercase tracking-[0.2em] text-blue-700">منهجنا</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              تقريب المعارف الأكاديمية من التطبيقات الملموسة
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              تعزم ABS تقريب المعارف الأكاديمية من التطبيقات الملموسة، وتشجيع الصرامة والانفتاح
              الدولي والمسؤولية والالتزام في خدمة التنمية الأفريقية. وتفضّل منهجيتها البيداغوجية
              الربط بين الأسس النظرية وتطبيقها الملموس، وفق توجيه مرجعي قدره 40% نظري و60% تطبيقي.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "دراسات الحالة، الأعمال التطبيقية، المشاريع والمحاكاة المهنية",
                "كفاءات عرضية: اللغة الإنجليزية، الثقافة الرقمية، القيادة، الأخلاقيات المهنية",
                "تكوين منفتح على المؤسسات والشركات والقضايا الدولية",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm font-medium text-slate-700">
                  <ShieldCheck className="mt-0.5 size-5 shrink-0 text-cyan-600" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 rounded-xl border border-cyan-200 bg-cyan-50 p-4 text-sm leading-6 text-slate-600">
              البرامج والتخصصات المعروضة على الموقع هي المعتمدة للعودة الدراسية المعنية. وتُنقل
              المعلومات المتعلقة بالتراخيص والاعتمادات والتقديرات أو الاعتراف حصراً بناءً على الوثائق
              الرسمية السارية؛ ولأي توضيح إضافي، يرجى الاتصال بإدارة ABS.
            </p>
          </div>

          {/* Liens vers les pages institutionnelles */}
          <div className="space-y-4">
            {aboutLinks.map(({ icon: Icon, title, description, href }) => (
              <Link key={href} href={href} className="group block">
                <Card className="border-slate-200 transition-shadow group-hover:shadow-lg">
                  <CardContent className="flex items-start gap-4 p-6">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                      <Icon className="size-5 text-blue-700" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-semibold text-slate-900">{title}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{description}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
            <Button asChild className="w-full bg-blue-700 hover:bg-blue-800">
              <Link href="/about/history">
                اكتشف مسارنا <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-950 py-14 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">انضم إلى مجتمع ABS</h2>
          <p className="mx-auto mt-3 max-w-2xl text-blue-100">
            اكتشف فروعنا، وتعرف على فرقنا، وابدأ إجراءات تسجيلك.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-cyan-400 text-slate-950 hover:bg-cyan-300">
              <Link href="/academics/programs">استكشف البرامج التكوينية</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/contact">الاتصال بالإدارة</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
