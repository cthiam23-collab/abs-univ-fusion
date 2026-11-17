import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Briefcase,
  Calculator,
  CheckCircle2,
  ClipboardList,
  Factory,
  GraduationCap,
  LineChart,
  Mail,
  MapPin,
  Phone,
  SearchCheck,
  Sprout,
  Target,
  Truck,
  UserCog,
  Users,
} from "lucide-react"
import { WHATSAPP_NUMBER, WHATSAPP_URL } from "@/lib/constants"

export const metadata: Metadata = buildMetadata({
  title: "الإجازة في إدارة الأعمال | ABS",
  description: "الإجازة في إدارة الأعمال بباماكو: التسيير، المحاسبة، المالية، التسويق، الموارد البشرية وريادة الأعمال. 3 سنوات، 6 فصول دراسية، 180 رصيدًا. الرسم السنوي الاسترشادي 1 025 000 فرنك CFA (يشترط تأكيد كتابي لـ 2026-2027).",
  path: "/programs/business-administration",
  locale: "ar",
})

const competences = [
  {
    code: "AA01",
    competence: "تحليل البيئة الاقتصادية والتنظيمية",
    resultat: "إنتاج تحليل منهجي ومُهيكل لسياق منظمة ما.",
  },
  {
    code: "AA02",
    competence: "تدبير الموارد المالية",
    resultat: "إعداد ميزانية، وتفسير المؤشرات، وتفسير الفوارق وتعليلها.",
  },
  {
    code: "AA03",
    competence: "تصميم عمل تسويقي",
    resultat: "تحديد فئة مستهدفة، وعرض قيمة، وخطة عمل.",
  },
  {
    code: "AA04",
    competence: "تنظيم الموارد البشرية",
    resultat: "المساهمة في التخطيط والتوظيف وتطوير الفرق.",
  },
  {
    code: "AA05",
    competence: "قيادة مشروع",
    resultat: "تخطيط المهام، ومتابعة النتائج، وعرض حصيلة.",
  },
  {
    code: "AA06",
    competence: "التواصل باحترافية",
    resultat:
      "تحرير تقرير والدفاع عن توصية باللغتين الفرنسية والإنجليزية.",
  },
]

const enseignements = [
  "الاقتصاد العام واقتصاد المؤسسات",
  "المحاسبة العامة والمحاسبة التحليلية",
  "الرياضيات المالية والإحصاء",
  "مالية المؤسسات والتحليل المالي",
  "التسويق الأساسي والتسويق الرقمي",
  "التسيير والاستراتيجية",
  "تدبير الموارد البشرية",
  "قانون الأعمال والجباية وفق التصميم المرجعي",
  "ريادة الأعمال ومشروع الأعمال (Business plan)",
  "التدقيق ومراقبة التسيير ولوحات القيادة",
  "الإنجليزية المهنية في كل فصل دراسي",
  "التنمية الذاتية والمشاريع والانغماس المهني",
]

const options = [
  {
    icon: LineChart,
    titre: "الهندسة المالية",
    texte: "التحليل المالي، التدبير الميزانياتي، تمويل المؤسسات وتدبير المخاطر.",
  },
  {
    icon: Calculator,
    titre: "المحاسبة والمالية",
    texte: "المحاسبة العامة والتحليلية، الجباية، مراقبة التسيير والقيادة المالية.",
  },
  {
    icon: SearchCheck,
    titre: "التدقيق",
    texte: "الرقابة الداخلية، تحليل المخاطر، تقييم الإجراءات وتحسين الأداء.",
  },
  {
    icon: Target,
    titre: "التسويق والاتصال",
    texte: "دراسات السوق، الاستراتيجية التجارية، التسويق الرقمي وتطوير العلامة التجارية.",
  },
  {
    icon: Truck,
    titre: "النقل واللوجستيك",
    texte: "التموين، تدبير التدفقات، النقل، التوزيع وتحسين سلسلة الإمداد.",
  },
  {
    icon: Sprout,
    titre: "الأعمال الزراعية",
    texte: "تدبير المقاولات الزراعية والغذائية، والرفع من قيمة الإنتاج وسلاسل القيمة.",
  },
  {
    icon: UserCog,
    titre: "تدبير الموارد البشرية",
    texte: "التوظيف، تطوير الكفاءات، إدارة شؤون الموظفين وتسيير الفرق.",
  },
  {
    icon: Factory,
    titre: "ريادة الأعمال",
    texte: "إنشاء المقاولات، إعداد مشاريع الأعمال، الابتكار، التمويل وتطوير الأنشطة.",
  },
]

const parcours = [
  {
    cycle: "الإجازة 1",
    organisation: "الفصلان الدراسي الأول والثاني: الأساسيات وأساليب العمل وأولى التطبيقات",
    statut: "إطار عام بـ 30 رصيدًا في كل فصل دراسي؛ يُرجى الرجوع إلى التصاميم المرجعية المفصلة المرفقة",
  },
  {
    cycle: "الإجازة 2",
    organisation: "الفصلان الدراسي الثالث والرابع: التعمق والممارسات والمشاريع",
    statut: "الوحدات والأحجام الساعية والأرصدة وفق التصميم المرجعي للتخصص",
  },
  {
    cycle: "الإجازة 3",
    organisation: "الفصلان الدراسي الخامس والسادس: تخصص تدريجي، مشروع، تدريب ومذكرة وفق التصميم المرجعي",
    statut: "الاعتماد الأكاديمي وفق اللائحة المعتمدة",
  },
]

const info = [
  { label: "الشهادة", value: "الإجازة — 3 سنوات، 6 فصول دراسية، 180 رصيدًا وفق الإطار المرجعي للعمل" },
  { label: "المكان", value: "باماكو، مالي — حمدالله أيه سي آي 2000" },
  {
    label: "اللغات",
    value: "الفرنسية والإنجليزية في كل فصل دراسي (تدرّج ثنائي اللغة، انظر صفحة البيداغوجيا)",
  },
  {
    label: "الرسم السنوي الاسترشادي",
    value: "1 025 000 فرنك CFA في السنة (رسم مُعلَن، يشترط تأكيد كتابي لـ 2026–2027)",
  },
  {
    label: "الرسوم الإضافية المُعلَنة",
    value: "الملف: 15 000 فرنك CFA؛ مناقشة الإجازة: 80 000 فرنك CFA — مبالغ تُؤكَّد لـ 2026–2027",
  },
  { label: "الاتصال", value: "+223 78 14 14 88 — abs.mail1290@gmail.com" },
]

export default function BusinessAdministrationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 bg-cyan-400/20 text-cyan-300 border border-cyan-400/40 hover:bg-cyan-400/20">
            القطب 5 — إدارة الأعمال
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            الإجازة في إدارة الأعمال
          </h1>
          <p className="text-lg md:text-xl italic text-cyan-200 mb-6">
            التسيير بمنهجية. الريادة بجرأة. خلق قيمة مستدامة.
          </p>
          <p className="max-w-3xl text-slate-200 leading-relaxed">
            تكوين مهنيين قادرين على فهم سير عمل المنظمات، وتحليل نتائجها، والمساهمة في التسيير
            والمالية والتسويق والموارد البشرية وتطوير الأنشطة. يستجيب هذا التكوين لحاجات
            المقاولات والإدارات والجمعيات والمشاريع الريادية.
          </p>
        </div>
      </section>

      {/* Info bar */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {info.map((i) => (
              <div key={i.label} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wide text-blue-700 mb-1">
                  {i.label}
                </p>
                <p className="text-sm text-slate-700">{i.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="finalite">
            <TabsList className="flex flex-wrap justify-center w-full mb-8">
              <TabsTrigger value="finalite" className="text-sm">
                الغاية والأهداف
              </TabsTrigger>
              <TabsTrigger value="competences" className="text-sm">
                الكفاءات المستهدفة
              </TabsTrigger>
              <TabsTrigger value="parcours" className="text-sm">
                تنظيم المسار
              </TabsTrigger>
              <TabsTrigger value="enseignements" className="text-sm">
                المقررات الدراسية
              </TabsTrigger>
              <TabsTrigger value="projets" className="text-sm">
                المشاريع والتداريب
              </TabsTrigger>
            </TabsList>

            {/* Finalité */}
            <TabsContent value="finalite">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-900">
                      <Target className="h-5 w-5 text-cyan-500" /> الغاية
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-5 text-slate-700">
                    <p className="font-medium">
                      تطوير قدرة على التسيير المسؤول والتحليلي والعملياتي.
                    </p>
                    <div>
                      <p className="font-semibold text-blue-800 mb-2">الأهداف العامة</p>
                      <ul className="space-y-1.5">
                        <li>إتقان أساسيات التسيير والاقتصاد.</li>
                        <li>
                          تطوير التحليل المالي والتواصل المهني واتخاذ القرار.
                        </li>
                        <li>
                          قيادة المشاريع، والعمل ضمن فريق، ومراعاة الأخلاقيات والاستدامة.
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-blue-800 mb-2">الأهداف الخاصة</p>
                      <ul className="space-y-1.5">
                        <li>إعداد ميزانية وقراءة القوائم المالية.</li>
                        <li>وضع خطة تسويقية وتحليل سوق.</li>
                        <li>
                          المساهمة في التوظيف والتنظيم ومتابعة الأداء.
                        </li>
                        <li>عرض توصيات مُعلَّلة مستندة إلى المعطيات.</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
                <div className="space-y-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-blue-900">
                        <GraduationCap className="h-5 w-5 text-cyan-500" /> شروط الالتحاق
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-slate-700">
                      <p>
                        الالتحاق بالإجازة: شهادة البكالوريا أو شهادة معادلة لها، مع مراعاة شروط
                        القبول الرسمية لمدرسة ABS. الالتحاق بالماستر: إجازة أو شهادة معادلة
                        في مجال ذي صلة، وملف أكاديمي وشروط المسار المختار.
                      </p>
                      <p className="mt-3 text-sm text-slate-500">
                        المسارات المفتوحة فعليًا والمسميات الرسمية والرسوم تُؤكَّدها الإدارة
                        عند كل بداية سنة دراسية.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-blue-900">
                        <Briefcase className="h-5 w-5 text-cyan-500" /> الأساليب والتقييم
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-slate-700">
                      <p>
                        المراقبة المستمرة، والواجبات، ودراسة الحالات، والعروض، والأعمال الجماعية،
                        والامتحانات نصف السنوية، والمشاريع والتدريب. الأوزان الدقيقة هي تلك
                        المحددة في اللائحة والتصميم المرجعي المعتمدين.
                      </p>
                      <p className="mt-3">
                        المقاربة البيداغوجية المستهدفة: نحو 40٪ إسهامات نظرية و60٪ ممارسات
                        ومشاريع وأعمال تطبيقية وخروج ميداني وتداريب وانغماس مهني، مع مراعاة
                        التصميم المرجعي المعتمد.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Compétences */}
            <TabsContent value="competences">
              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-900">الكفاءات المستهدفة ونتائج التعلّم</CardTitle>
                  <CardDescription>
                    ترتبط كل كفاءة بنتيجة تعلّم متوقعة في نهاية التكوين.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-20">الرمز</TableHead>
                        <TableHead>الكفاءة المستهدفة</TableHead>
                        <TableHead>نتيجة التعلّم المتوقعة</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {competences.map((c) => (
                        <TableRow key={c.code}>
                          <TableCell>
                            <Badge variant="secondary" className="font-semibold text-blue-800">
                              {c.code}
                            </Badge>
                          </TableCell>
                          <TableCell className="font-medium">{c.competence}</TableCell>
                          <TableCell className="text-slate-600">{c.resultat}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Parcours */}
            <TabsContent value="parcours">
              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-900">تنظيم مسار الإجازة</CardTitle>
                  <CardDescription>
                    الإجازة: 3 سنوات، 6 فصول دراسية، 180 رصيدًا وفق الإطار البيداغوجي المرجعي
                    للعمل. يُحدَّد التوزيع المفصل لوحدات التعليم في التصميم المرجعي نصف السنوي
                    المعتمد للتخصص.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-24">السلك</TableHead>
                        <TableHead>التنظيم</TableHead>
                        <TableHead>الحالة</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {parcours.map((p) => (
                        <TableRow key={p.cycle}>
                          <TableCell className="font-semibold text-blue-800">{p.cycle}</TableCell>
                          <TableCell>{p.organisation}</TableCell>
                          <TableCell className="text-slate-600">{p.statut}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  <p className="mt-4 text-sm text-slate-500">
                    الجداول نصف السنوية الكاملة (وحدات التعليم، والمواد، وأحجام الدروس
                    النظرية والتطبيقية والعملانية والعمل الشخصي، والأرصدة) واردة في المجلد
                    البيداغوجي المرفق، ويجب مراجعتها ومواءمتها قبل نشرها باعتبارها معطيات نهائية.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Enseignements */}
            <TabsContent value="enseignements">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-900">
                      <BookOpen className="h-5 w-5 text-cyan-500" /> أهم المقررات الدراسية
                    </CardTitle>
                    <CardDescription>قائمة معروضة على الجمهور، وفق التصميم المرجعي المعتمد</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {enseignements.map((e) => (
                        <li key={e} className="flex items-start gap-2 text-slate-700">
                          <CheckCircle2 className="h-4 w-4 mt-1 text-cyan-500 shrink-0" />
                          {e}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-blue-900">مجالات التخصص في القطب</CardTitle>
                    <CardDescription>
                      خيارات مُتخيَّلة في قطب إدارة الأعمال. يُؤكَّد ما يلي: الخيارات المفتوحة
                      فعليًا عند كل بداية سنة دراسية.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {options.map((o) => (
                      <div key={o.titre} className="flex gap-3">
                        <o.icon className="h-5 w-5 text-cyan-500 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-slate-800">{o.titre}</p>
                          <p className="text-sm text-slate-600">{o.texte}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Projets et stages */}
            <TabsContent value="projets">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-900">
                      <ClipboardList className="h-5 w-5 text-cyan-500" /> مشاريع نهاية الوحدة
                      ومناقشاتها
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-slate-700">
                    <p>
                      دراسة حالة مقاولة، أو ميزانية تقديرية، أو تدقيق مبسّط، أو خطة تسويقية، أو
                      مشروع أعمال. عرض شفوي وتقرير مكتوب؛ ومناقشة نهاية الإجازة وفق اللائحة
                      المعتمدة.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-900">
                      <Users className="h-5 w-5 text-cyan-500" /> الانغماس المهني والخروج
                      البيداغوجية والتداريب
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-slate-700">
                    <p>
                      زيارات مقاولات ومنظمات، ودراسات حالات، ومشاريع بإشراف، وتدريب في وسط
                      مهني وفق جدول زمني معتمد. يترتب عن التدريب تقرير وتقييم من المشرف
                      وعرض/مناقشة وفق قواعد ABS.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Image + moyens */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/campus/IMG-20250212-WA0003.jpg"
              alt="طلبة في درس إدارة الأعمال"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-blue-900 mb-4">الوسائل المتاحة للطلبة</h2>
            <p className="text-slate-700 mb-4">
              أساتذة في التسيير والمحاسبة والمالية والتسويق والموارد البشرية؛ وقاعة دروس
              ومكتبة وموارد رقمية وجداول بيانات وأدوات عرض. لا يُعلَن عن أي برمجيات متخصصة
              أو شراكات محددة إلا بعد التحقق من توفرها.
            </p>
            <p className="text-sm text-slate-500">
              المتابعة والتحسين المستمر: النتائج لكل وحدة تعليمية وكل فصل دراسي، وتقييم
              المقررات من طرف الطلبة، ومتابعة المشاريع والتداريب، والجمع السنوي لملاحظات
              الخريجين وأصحاب العمل كلما توفرت المعطيات، والمراجعة الدورية للتصاميم المرجعية
              والمحتوى.
            </p>
          </div>
        </div>
      </section>

      {/* Débouchés */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">الآفاق المهنية وفرص التشغيل</h2>
          <p className="max-w-3xl text-slate-700 mb-6">
            آفاق استرشادية، حسب تجربة وتخصص كل خريج — فالفرص هي آفاق وليست ضمانات
            لتشغيل:
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "مساعد تدبير",
              "مساعد محاسبة أو مالية",
              "مسؤول عملاء",
              "مساعد موارد بشرية",
              "مساعد تسويق",
              "مساعد متدرّب في تدبير المشاريع",
              "رائد أعمال أو دعم لمقاومة صغيرة ومتوسطة",
            ].map((d) => (
              <Badge key={d} variant="secondary" className="text-sm px-3 py-1">
                {d}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            هل تودّ معرفة المزيد عن تخصص إدارة الأعمال؟
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto text-slate-200">
            اتصل بفريق ABS للتحقق من شروط القبول، والوثائق المطلوبة، والجدول الزمني، والأماكن
            المتاحة.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-cyan-400 text-slate-950 hover:bg-cyan-300 font-semibold">
                طلب معلومات
              </Button>
            </Link>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 font-semibold"
              >
                <Phone className="mr-2 h-4 w-4" /> الاتصال بـ ABS عبر واتساب
              </Button>
            </a>
            <Link href="/apply">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 font-semibold"
              >
                التقديم
              </Button>
            </Link>
          </div>
          <p className="mt-8 text-sm text-slate-300 flex flex-col sm:flex-row items-center justify-center gap-4">
            <span className="inline-flex items-center gap-1">
              <Phone className="h-4 w-4" /> {WHATSAPP_NUMBER}
            </span>
            <span className="inline-flex items-center gap-1">
              <Mail className="h-4 w-4" /> abs.mail1290@gmail.com
            </span>
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-4 w-4" /> Hamdallaye ACI 2000, Bamako, Mali
            </span>
          </p>
        </div>
      </section>
    </div>
  )
}
