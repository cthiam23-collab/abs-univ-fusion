import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import {
  Globe2,
  Handshake,
  Leaf,
  Lightbulb,
  Quote,
  Recycle,
  ShieldCheck,
  Sprout,
  Target,
  Users,
  HeartHandshake,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = buildMetadata({
  title: "قيمنا | ABS — African Business School",
  description: "قيم ABS: الصرامة، المسؤولية، الانفتاح، الابتكار، الالتزام الأفريقي وروح الفريق، في خدمة تكوين دقيق وملتزم لأجل أفريقيا.",
  path: "/about/values",
  locale: "ar",
})

// Les six valeurs officielles de ABS (source : V3 §4.4 — définitions verbatim).
const values = [
  {
    id: "exigence",
    name: "الصرامة",
    icon: Target,
    definition: "الجدة في العمل، والانضباط، والسعي الدائم إلى التقدم.",
  },
  {
    id: "responsabilite",
    name: "المسؤولية",
    icon: ShieldCheck,
    definition: "العمل بنزاهة واحترام وإدراك لعواقب الأفعال.",
  },
  {
    id: "ouverture",
    name: "الانفتاح",
    icon: Globe2,
    definition: "التعلّم على الحوار بين الثقافات والتخصصات والأجيال.",
  },
  {
    id: "innovation",
    name: "الابتكار",
    icon: Lightbulb,
    definition: "استكشاف أفكار ومناهج مفيدة دون إغفال الاحتياجات الحقيقية.",
  },
  {
    id: "engagement-africain",
    name: "الالتزام الأفريقي",
    icon: Handshake,
    definition: "تثمين مواهب القارة ومواردها ومبادراتها.",
  },
  {
    id: "esprit-equipe",
    name: "روح الفريق",
    icon: Users,
    definition: "البناء مع الآخرين، والإصغاء، والمساهمة في هدف مشترك.",
  },
]

// Dimensions humaines de la formation (source : brochure institutionnelle CM1, §7).
const humanQualities = [
  "الانضباط",
  "الاحترام",
  "الدقة",
  "التضامن",
  "الفضول الفكري",
  "حس المسؤولية",
]

// Responsabilité sociétale et développement durable (source : brochure institutionnelle CM1, §5).
const rseCommitments = [
  {
    icon: Leaf,
    title: "تميّز ذو معنى",
    description:
      "تعزم ABS إدماج المسؤولية المجتمعية للمؤسسات (RSE) والتنمية المستدامة في رؤيتها للتكوين والاحتراف، من أجل تنمية وعي الطلبة بالعواقب الاقتصادية والاجتماعية والبيئية والأخلاقية للقرارات.",
  },
  {
    icon: Recycle,
    title: "جامعة خضراء",
    description:
      "وبصفتها مؤسسة تلتصق بمفهوم الجامعة الخضراء، تعزم ABS تشجيع المبادرات الهادفة إلى تقليص النفايات وتثمينها، والاقتصاد الدائري، والتوعية البيئية، والمشاريع الطلابية ذات الأثر الاجتماعي.",
  },
  {
    icon: Sprout,
    title: "أداء مسؤول",
    description:
      "مفهوم للأداء يجمع بين النتائج الاقتصادية، واحترام الأشخاص، والتسيير المسؤول للموارد، والشفافية، والمساهمة في الصالح العام.",
  },
  {
    icon: HeartHandshake,
    title: "جميع القطاعات معنية",
    description:
      "التسيير المستدام للموارد في الهندسة، وأخلاقيات الذكاء الاصطناعي والاعتدال الرقمي في المعلوماتية، والحوكمة في العلاقات الدولية، والمعلومات المسؤولة في الصحافة، وممارسات تسييرية مسؤولة في إدارة الأعمال.",
  },
]

export default function ValuesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-blue-950 text-white">
        <Image
          src="/images/documents/v3-image1.png"
          alt="طلبة ABS في الحرم الجامعي"
          fill
          priority
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/80 to-blue-900/40" />
        <div className="container relative py-20 md:py-28">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            من نحن · قيمنا
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
            ست قيم توجّه عملنا
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-200">
            إلى جانب الشهادات والكفاءات التقنية، تولي ABS مكانة مهمة للبعد الإنساني للتكوين: تكوين
            نساء ورجال أكفاء نزهاء مسؤولين قادرين على العمل في خدمة المصلحة الجماعية.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/about/mission">اكتشف رسالتنا</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Les 6 valeurs : cartes */}
      <section className="container py-16 md:py-20">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-blue-900 md:text-4xl">قيمنا الست</h2>
          <p className="mt-4 text-lg text-slate-600">
            هذه القيم ليست شعاراً إنقاطياً: بل توجّه البيداغوجيا وحياة الحرم الجامعي وطريقة ABS في
            تصور نجاح طلبتها.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => {
            const Icon = value.icon
            return (
              <Card key={value.id} className="group border border-slate-200 transition-shadow hover:shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-50 text-blue-700 transition-colors group-hover:bg-blue-700 group-hover:text-white">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-2xl font-bold text-blue-900">{value.name}</h3>
                  <p className="mt-3 leading-relaxed text-slate-600">{value.definition}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Tabs : chaque valeur en détail */}
        <div className="mt-14 rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-10">
          <h3 className="text-center text-2xl font-bold text-blue-900">كل قيمة بالتفصيل</h3>
          <p className="mt-2 text-center text-slate-600">
            اختر قيمة لقراءة ما تعنيه فعلياً في ABS.
          </p>
          <Tabs defaultValue="exigence" className="mt-8">
            <TabsList className="mx-auto flex-wrap">
              {values.map((value) => (
                <TabsTrigger key={value.id} value={value.id}>
                  {value.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {values.map((value) => {
              const Icon = value.icon
              return (
                <TabsContent key={value.id} value={value.id}>
                  <div className="mx-auto max-w-3xl rounded-xl border border-slate-200 bg-white p-6 md:p-8">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-700 text-white">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <h4 className="text-xl font-bold text-blue-900">{value.name}</h4>
                    </div>
                    <p className="mt-4 text-lg font-medium text-slate-800">{value.definition}</p>
                    <p className="mt-4 border-l-4 border-cyan-400 pl-4 text-sm italic text-slate-500">
                      تندرج هذه القيمة ضمن رسالة ABS: تنمية المعارف التخصصية والكفاءات العملية
                      والاستقلالية الفكرية والصفات الإنسانية للمتعلمين.
                    </p>
                  </div>
                </TabsContent>
              )
            })}
          </Tabs>
        </div>
      </section>

      {/* Former des compétences, cultiver des valeurs, révéler des leaders (CM1 §7) */}
      <section className="bg-blue-900 py-16 text-white md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              تكوين الكفاءات، وغرس القيم، والكشف عن القادة
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-200">
              بناء أفريقيا أقوى يستلزم نساءً ورجالاً أكفاء، ولكن أيضاً نزهاء مسؤولين مبدعين قادرين
              على العمل في خدمة المصلحة الجماعية.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-white/15 bg-blue-950/60 p-8 md:p-10">
            <ul className="flex flex-wrap gap-2">
              {humanQualities.map((quality) => (
                <li
                  key={quality}
                  className="rounded-full border border-cyan-400/30 bg-blue-900/60 px-4 py-1.5 text-sm font-medium text-cyan-100"
                >
                  {quality}
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-xl border border-cyan-400/30 bg-blue-900/60 p-5">
              <h3 className="font-bold text-cyan-400">تعريفنا للقيادة</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                تُفهم القيادة بوصفها القدرة على أخذ المبادرة، وحشد الطاقات، وقيادة المشاريع،
                والمساهمة إيجابياً في المحيط.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RSE et développement durable (CM1 §5) */}
      <section className="container py-16 md:py-20">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-blue-900 md:text-4xl">
            المسؤولية المجتمعية والتنمية المستدامة
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            تكوين من أجل النجاح، واشتغال من أجل التحويل، والعمل من أجل الأجيال القادمة: لا يمكن
            فصل تنمية أفريقيا عن حماية البيئة والمسؤولية الاجتماعية والحوكمة الرشيدة.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {rseCommitments.map((item) => {
            const Icon = item.icon
            return (
              <Card key={item.title} className="border border-slate-200 transition-shadow hover:shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-50 text-blue-700">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-blue-900">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-slate-600">{item.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
        <p className="mx-auto mt-10 max-w-3xl rounded-xl border border-cyan-200 bg-cyan-50 p-5 text-center leading-relaxed text-slate-600">
          يمكن أن يندرج هذا النهج في إطار أهداف التنمية المستدامة للأمم المتحدة. في ABS، لا يقتصر
          التميز على النجاح الفردي: بل يكتمل معناه في القيمة التي يخلقها الإنسان للمجتمع.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-blue-950 py-16 text-center text-white">
        <div className="container">
          <Quote className="mx-auto h-10 w-10 text-cyan-400" aria-hidden="true" />
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">عِش هذه القيم ولا تكتفي بقراءتها</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-200">
            انضم إلى جامعة يتقدم فيها الصرامة الأكاديمية والتطبيق المهني والالتزام الأفريقي معاً.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-cyan-400 text-blue-950 hover:bg-cyan-300">
              <Link href="/admissions">القبول والتسجيل</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/contact">اتصل بنا</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
