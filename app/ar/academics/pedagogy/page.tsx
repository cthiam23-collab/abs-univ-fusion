import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowRight, BookOpen, Briefcase, Globe2, Languages, Laptop, Target, Users } from "lucide-react"

export const metadata: Metadata = buildMetadata({
  title: "المنهجية البيداغوجية | ABS",
  description: "اكتشف المنهجية البيداغوجية لـ ABS: المشاريع والتطبيق والكفاءات العرضية واللغات والاحتراف المهني.",
  path: "/academics/pedagogy",
  locale: "ar",
})

const approches = [
  {
    icon: Target,
    title: "التعلّم بفهم وتطبيق",
    text: "تهدف بيداغوجيا ABS إلى ربط المعارف الأساسية بالحالات الملموسة. وبحسب البرامج التكوينية والموارد المتاحة، يمكن أن تعتمد عملية التعلم على دراسات الحالة، والتمارين، والأعمال الموجهة، والمشاريع، والعروض، والزيارات، والانغماس المهني. والغاية هي تقدّم الطالب في التحليل والمنهجية والتواصل والقدرة على إنتاج عمل مُسند بالحجج.",
  },
  {
    icon: Briefcase,
    title: "المشاريع خيطاً ناظماً",
    text: "تمكّن المشاريع الطلبة من تعبئة عدة كفاءات حول مشكلة أو مخرَج: دراسة، ملف، نموذج أولي، خطة عمل، عرض أو تقرير. ويُشرح الأهداف ومعايير التقييم والمواعيد في بداية كل وحدة تعليمية.",
  },
  {
    icon: Globe2,
    title: "اللغات والانفتاح الدولي",
    text: "تُصمَّم اللغة الإنجليزية بوصفها كفاءة عرضية تُنمّى تدريجياً في المسارات. وتجمع بين الفهم والتعبير والمعجم المهني والحالات التطبيقية. وفي تخصص العلاقات والأعمال الدولية، تُنظَّر الإسبانية بوصفها لغة مكملة، مع مراعاة اعتماد الحجم الساعي والتشكيلات البيداغوجية. ويُقيَّد أي إعلان عن شهادة TOEIC أو IELTS أو غيرها بالآليات المتاحة والمصرح بها فعلاً.",
  },
  {
    icon: Laptop,
    title: "الكفاءات الرقمية والذكاء الاصطناعي",
    text: "تأخذ الكفاءات الرقمية مكانة متزايدة في المهن. تعزز ABS الاستخدام الرشيد للأدوات الرقمية والتهيئة التدريجية للذكاء الاصطناعي، مع مراعاة مستوى الطلبة واحتياجات الفروع وحماية البيانات والروح النقدية والنزاهة الأكاديمية.",
  },
  {
    icon: Users,
    title: "التطوير الشخصي والاحتراف",
    text: "يشمل التكوين أيضاً أبعاداً أساسية للحياة المهنية: التحدث أمام الجمهور، وإدارة الوقت، والعمل الجماعي، والتنظيم، والسلوك المهني، وقيادة الاجتماعات، وإدارة الضغوط والتحضير للإدماج المهني. وتعتمد الأنشطة الفعلية على الجدول الأكاديمي وتُعلن عند تأكيدها.",
  },
  {
    icon: BookOpen,
    title: "التدريبات والانغماس المهني",
    text: "التدريبات والزيارات والانغماس المهني فرص لفهم المهن وبيئات العمل بشكل أفضل. ويُحدَّد جدولها وتشكيلاتها ومدى إلزاميتها أو اختياريتها في التصميم الرسمي لكل برنامج تكويني.",
  },
]

const dispositifLinguistique = [
  {
    niveau: "الإجازة (ليسانس) السنة الأولى",
    contenu:
      "تعزيز الأسس النحوية والمعجمية، والفهم الشفوي والكتابي، والتعبير الاعتيادي، واكتساب المعجم الأكاديمي.",
  },
  {
    niveau: "الإجازة (ليسانس) السنة الثانية",
    contenu:
      "تنمية التواصل المهني، والعروض الشفوية، والتحرير، والمعجم التخصصي الخاص بكل فرع.",
  },
  {
    niveau: "الإجازة (ليسانس) السنة الثالثة",
    contenu:
      "استخدام اللغة الإنجليزية في المشاريع ودراسات الحالة والعروض والتقارير وبعض مناقشات البحث النهائي.",
  },
  {
    niveau: "الماجستير السنة الأولى والسنة الثانية",
    contenu:
      "تعزيز الإنجليزية المهنية والأكاديمية، وتحليل الوثائق التخصصية، وعرض أعمال البحث، والتفاوض والتواصل في محيط دولي.",
  },
]

const soutenances = [
  "مناقشات بالفرنسية للمشاريع والأعمال الأكاديمية؛",
  "عروض أو مناقشات بالإنجليزية، حسب المستوى اللغوي والمسار؛",
  "مناقشات ثنائية اللغة، مع عرض بلغة وسلسلة أسئلة وأجوبة باللغة الأخرى؛",
  "ملخصات تنفيذية وabstracts أو دعائم عرض بالإنجليزية؛",
  "محاكاة اجتماعات ومفاوضات ومؤتمرات ومقابلات مهنية بالفرنسية والإنجليزية.",
]

const anglaisParSpecialite = [
  { domaine: "الهندسة (الجيولوجيا والهندسة المدنية والتعدين)", angle: "الإنجليزية العلمية والتقنية" },
  { domaine: "إدارة الأعمال", angle: "الإنجليزية التجارية" },
  { domaine: "العلاقات والأعمال الدولية", angle: "الإنجليزية الدبلوماسية" },
  { domaine: "الصحافة والاتصال", angle: "الإنجليزية الإعلامية" },
  { domaine: "هندسة المعلوماتية", angle: "الإنجليزية التطبيقية على التقنيات الرقمية" },
]

export default function PedagogyPage() {
  return (
    <div>
      {/* Hero */}
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
          <p className="font-semibold uppercase tracking-[0.25em] text-cyan-300">البيداغوجيا</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            التعلّم بفهم وتطبيق
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-100">
            ربط المعارف الأساسية بالحالات الملموسة: دراسات الحالة، والمشاريع، والعروض، والانغماس
            المهني، والتطبيقات العملية، مع توجيه مرجعي قدره{" "}
            <strong className="text-cyan-300">40% نظري و60% تطبيقي</strong>.
          </p>
        </div>
      </section>

      {/* Les six dimensions de l'approche pédagogique */}
      <section className="container mx-auto px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-slate-900">منهجيتنا البيداغوجية</h2>
          <p className="mt-3 leading-7 text-slate-600">
            توجيه مرجعي قدره 40% مدخلات نظرية و60% تطبيقات ومشاريع وأعمال موجهة وميدان وتدريبات
            وانغماس مهني، مع مراعاة التصميم المعتمد لكل برنامج تكويني.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {approches.map(({ icon: Icon, title, text }) => (
            <Card key={title} className="border-slate-200 transition-shadow hover:shadow-lg">
              <CardContent className="p-7">
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-cyan-50">
                  <Icon className="size-6 text-cyan-700" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Le bilinguisme français-anglais */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <p className="flex items-center gap-2 font-semibold uppercase tracking-[0.2em] text-blue-700">
                <Languages className="size-5" /> ازدواجية اللغة
              </p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900">
                ازدواجية الفرنسية والإنجليزية، ركيزة استراتيجية للتكوين
              </h2>
              <p className="mt-5 leading-7 text-slate-600">
                في ABS — African Business School، يشكل إتقان الفرنسية والإنجليزية محوراً
                أساسياً في المسار الأكاديمي والمهني لكل طالب. وفي محيط أفريقي يتسم بالتنوع اللغوي
                وتكثيف التبادلات الدولية، تطمح ABS إلى تكوين خريجين قادرين على التواصل والتفاوض
                وعرض أفكارهم وممارسة مسؤولياتهم باللغتين.
              </p>
              <p className="mt-4 leading-7 text-slate-600">
                تعلم الإنجليزية لا يقتصر على الساعات الدراسية المخصصة لها: بل يُتصوَّر بوصفه كفاءة
                تُعبَّأ تدريجياً في التدريس والمشاريع وأعمال البحث والعروض الشفوية وأنشطة الانغماس
                المهني والتقييمات.
              </p>
              <p className="mt-4 leading-7 text-slate-600">
                المحتويات اللغوية ملائمة للتخصصات — إنجليزية علمية وتقنية في الهندسة، وإنجليزية
                تجارية في الإدارة، وإنجليزية دبلوماسية في العلاقات الدولية، وإنجليزية إعلامية في
                الصحافة والاتصال، وإنجليزية تطبيقية على التقنيات الرقمية في هندسة المعلوماتية.
              </p>
            </div>
            <Card className="border-slate-200 shadow-sm">
              <CardContent className="p-7">
                <h3 className="text-lg font-semibold text-slate-900">
                  تطور منظّم من الإجازة (ليسانس) إلى الماجستير
                </h3>
                <Accordion type="single" collapsible className="mt-4">
                  {dispositifLinguistique.map((item, index) => (
                    <AccordionItem key={item.niveau} value={`niveau-${index}`}>
                      <AccordionTrigger className="text-sm font-semibold text-slate-800">{item.niveau}</AccordionTrigger>
                      <AccordionContent className="text-sm leading-7 text-slate-600">{item.contenu}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                <p className="mt-4 text-sm leading-6 text-slate-500">
                  يتيح هذا التطور لكل طالب تنمية كفاءات لغوية قابلة للقياس والتحضير، حسب مستواه
                  ومساره، للشهادات الدولية مثل TOEIC أو IELTS.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Soutenances + anglais par spécialité */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">مناقشات بالفرنسية والإنجليزية</h2>
            <p className="mt-4 leading-7 text-slate-600">
              تشكل المناقشات أداة رئيسية للاحتراف وتقييم كفاءات التواصل. في ABS، تُتصوَّر بوصفها
              فرصاً لتنظيم حجاجية، وعرض نتائج، والإجابة عن أسئلة لجنة، والدفاع عن المقترحات أمام
              جمهور. وقد تتضمن تشكيلات التقييم:
            </p>
            <ul className="mt-5 space-y-3">
              {soutenances.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-7 text-slate-700">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-600" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-7 text-slate-500">
              تُحدَّد التشكيلات الدقيقة في التصاميم البيداغوجية وأنظمة التقييم. والتطور ملائم للمستوى
              الدراسي بحيث تشكل الصرامة اللغوية هدفاً تعليمياً لا عائقاً غير مبرر لتقييم المعارف
              التخصصية.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900">إنجليزية ملائمة لكل تخصص</h2>
            <p className="mt-4 leading-7 text-slate-600">
              من أجل ترجمة ازدواجية اللغة إلى واقع، تشجع ABS الاستخدام التدريجي للفرنسية والإنجليزية
              في الأنشطة البيداغوجية لجميع الفروع: القراءة الوثائقية، والعروض ثنائية اللغة، ودراسات
              الحالة الدولية، والأبحاث الببليوغرافية، والمناظرات والمحاكاة المهنية.
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-sm">
                <thead className="bg-slate-50 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                  <tr>
                    <th className="px-5 py-3">المجال</th>
                    <th className="px-5 py-3">الإنجليزية</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {anglaisParSpecialite.map((row) => (
                    <tr key={row.domaine}>
                      <td className="px-5 py-3 font-medium text-slate-800">{row.domaine}</td>
                      <td className="px-5 py-3 text-slate-600">{row.angle}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Immersions et développement personnel */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl">
              <Image
                src="/images/documents/v3-image2.jpg"
                alt="طلبة ABS يعملون معاً في مشروع"
                width={800}
                height={560}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                الانغماس المهني والمشاريع والتطوير الشخصي
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                تُطوّل الأنشطة الانغماسية والخروج البيداغوجية عملية التعلم من خلال مواجهة الطلبة
                لواقعيات الشركات والمؤسسات والمختبرات ومواقع البناء والإعلام والمنظمات الدولية
                وغيرها من الأوساط المهنية. وعندما تسمح الظروف بذلك، تُدمج هذه الأنشطة تمارين
                بالإنجليزية: عرض منظمة، ومقابلة مع مهني، وجمع معلومات، أو تحرير تقرير ثنائي اللغة.
              </p>
              <p className="mt-4 leading-7 text-slate-600">
                يجمع النموذج البيداغوجي لـ ABS بين إتقان المعارف وتنمية الشخصية وحس المسؤولية وروح
                المبادرة. وتُنظَّم ورشات للقيادة والتحدث أمام الجمهور والتفاوض وريادة الأعمال
                والأخلاقيات المهنية وتسيير المشاريع والمواطنة بالفرنسية وتدريجياً بالإنجليزية.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button asChild className="bg-blue-700 hover:bg-blue-800">
                  <Link href="/academics/programs">
                    اكتشف برامجنا التكوينية <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-blue-700 bg-transparent text-blue-700 hover:bg-blue-50 hover:text-blue-800"
                >
                  <Link href="/admissions">جهّز ملف ترشحك</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="bg-blue-950 py-14 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">مجموعة متسقة في خدمة النجاح</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-blue-100">
            في ABS، تشكل ازدواجية الفرنسية والإنجليزية، والمشاريع التطبيقية، والمناقشات، والانغماس
            المهني، والخروج البيداغوجية، والتطوير الشخصي مجموعة متسقة في خدمة النجاح الأكاديمي
            والقابلية للتوظيف. تكوين خريجين أكفاء في تخصصهم، قادرين على العمل بالفرنسية والإنجليزية،
            والدفاع عن أفكارهم بثقة، وحمل رؤية قارية أفريقية للتنمية.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-cyan-400 text-slate-950 hover:bg-cyan-300">
              <Link href="/apply">ترشّح الآن</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white">
              <Link href="/contact">تحدث إلى فريق ABS</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
