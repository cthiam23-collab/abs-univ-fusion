import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Quote } from "lucide-react"

export const metadata: Metadata = buildMetadata({
  title: "كلمة المديرة العامة | ABS",
  description: "كلمة المديرة العامة لـ ABS — African Business School: طموح قاري أفريقي في خدمة المعرفة ونجاح الطلبة.",
  path: "/about/mot-de-la-directrice",
  locale: "ar",
})

const paragraphes = [
  "أعزّ الزوار والآباء والطلبة والشركاء،",
  "بكل اقتناع وعزيمة أرحّب بكم في موقع ABS — African Business School.",
  "طموحنا واضح: المساهمة في تكوين جيل أفريقي أكفاء مسؤول جريء، قادر على فهم تحولات العالم، والابتكار، والمشاركة الفاعلة في تنمية مجتمعاتنا.",
  "أنا مقتنعة اقتناعاً عميقاً بأن الشهادة ليست غاية بذاتها، بل نقطة انطلاق لبناء شخصي ومهني حقيقي. ويتحقق النجاح بفضل صلابة المعارف، وإتقان الكفاءات، وغنى التجربة، وجودة الحكم، وقوة القيم الإنسانية. كما يستلزم أيضاً فهم المحيط، وتوقع تطوراته، وتحويل التحديات إلى فرص للفعل.",
  "هذا التصور للتعليم هو ما يؤسس التزامنا في ABS. نريد الجمع بين الصرامة الأكاديمية والتطبيق المهني، وتنمية الكفاءات مع الازدهار الشخصي، والمعرفة مع القدرة على الفعل. طموحنا هو إعداد نساء ورجال قادرين على التفكير بصرامة، والاشتغال بجرأة، واتخاذ القرارات ببرؤية ثاقبة، وممارسة مسؤولياتهم بنزاهة.",
  "في عالم تحوّل بعمق بفعل الرقمنة والذكاء الاصطناعي، أصبح إتقان التقنيات قضية استراتيجية. نعزم إعداد طلبتنا لهذه التحولات، مع الحفاظ على اقتناع أساسي: أن تبقى التقنية في خدمة الذكاء الإنساني، والكرامة، والتقدم الجماعي.",
  "وفياً لرسالتها القارية الأفريقية، تندرج ABS في منظور أوسع من النجاح الفردي وحده. نريد المساهمة في بروز كفاءات قادرة على تلبية احتياجات مالي، ومرافقة تحولات أفريقيا، وحمل طموحاتها في محيط دولي في تغير مستمر.",
  "يفرض علينا هذا الطموح صرامة دائمة: تقريب التكوين من الواقعيات المهنية، وتشجيع المبادرة، وزراعة انفتاح العقل، وجعل كل مسار فرصة لتطوير إمكانات الإنسان. فالتكوين ليس مجرد نقل معرفة: بل هو تمكين كل واحد من أن يصبح فاعلاً في مستقبله ومساهماً في تقدم مجتمعه.",
  "وإلى الطلبة المستقبليين، وإلى المهنيين الراغبين في تعزيز كفاءاتهم، وإلى الآباء الذين يمنحوننا ثقتهم، أوجّه دعوة صادقة: اكتشفوا فروعنا، وتعرفوا على فرقنا، وانضموا إلى مجتمع ABS.",
  "لا تخيروا شهادة فحسب. اختاروا تكويناً يوسّع رؤيتكم، ويرفع قيمتكم المهنية، ويصقل بصيرتكم، ويجهزكم لاغتنام فرص الغد. اختاروا مساراً يمكّنكم من تحقيق طموحاتكم مع المساهمة في طموحات أفريقيا.",
  "أدعوكم لاكتشاف مشروعنا التعليمي والبدء في إجراءات تسجيلكم. سنكون سعداء بمرافقتكم في بناء مستقبلكم.",
  "في ABS، لا نعتبر التعليم مجرد مرحلة في مسار: بل نعتبره قوة قادرة على الكشف عن المواهب، وتحويل المسارات، والمساهمة في بناء أفريقيا الغد.",
]

export default function MotDeLaDirectricePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-blue-950 py-20 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/90 to-blue-900/60" />
        <div className="container relative mx-auto px-6">
          <p className="font-semibold uppercase tracking-[0.25em] text-cyan-300">المؤسسة</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            كلمة المديرة العامة
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-100">
            ننمّي المواهب. نرفع الطموحات. نبني مستقبل أفريقيا.
          </p>
        </div>
      </section>

      {/* Lettre */}
      <section className="container mx-auto px-6 py-16">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[240px_1fr] lg:items-start">
          <div className="relative mx-auto overflow-hidden rounded-3xl bg-white shadow-xl lg:sticky lg:top-24">
            <Image
              src="/images/documents/dg-seance-travail.jpg"
              alt="سخنة مريم تيام، المديرة العامة لـ ABS — African Business School"
              width={480}
              height={600}
              className="h-[320px] w-full object-cover object-top"
              priority
            />
            <div className="p-5">
              <p className="font-semibold text-slate-950">سخنة مريم تيام</p>
              <p className="text-sm text-slate-500">المديرة العامة</p>
              <p className="mt-1 text-xs text-slate-400">ABS — African Business School</p>
            </div>
          </div>
          <div>
            {paragraphes.map((texte, index) => (
              <p
                key={index}
                className={
                  index === 0
                    ? "text-xl font-medium leading-8 text-slate-900"
                    : "mt-5 leading-8 text-slate-600 first:mt-0"
                }
              >
                {texte}
              </p>
            ))}
            <p className="mt-8 leading-8 text-slate-600">مع فائق عبارات التقدير والاحترام،</p>
            <p className="mt-3 font-semibold text-slate-950">سخنة مريم تيام</p>
            <p className="text-sm text-slate-500">المديرة العامة — ABS — African Business School</p>
            <div className="mt-8 rounded-2xl border border-cyan-100 bg-cyan-50/60 p-6">
              <Quote className="size-8 text-cyan-700" aria-hidden="true" />
              <blockquote className="mt-3 text-lg font-medium leading-8 text-slate-800">
                « التكوين بصرامة، والكشف عن المواهب، وإعداد بناة أفريقيا الغد. »
              </blockquote>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="bg-blue-700 hover:bg-blue-800">
                <Link href="/admissions">ابدأ إجراءات تسجيلي</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-blue-700 bg-transparent text-blue-700 hover:bg-blue-50 hover:text-blue-800"
              >
                <Link href="/academics/programs">اكتشف فروعنا</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-950 py-14 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">مرحباً بكم في ABS — African Business School</h2>
          <p className="mx-auto mt-3 max-w-2xl text-blue-100">
            انضموا إلى مجتمع يكشف المواهب ويحوّل المسارات.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-cyan-400 text-slate-950 hover:bg-cyan-300">
              <Link href="/apply">ترشّح الآن</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/contact">تحدث إلى فريق ABS</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
