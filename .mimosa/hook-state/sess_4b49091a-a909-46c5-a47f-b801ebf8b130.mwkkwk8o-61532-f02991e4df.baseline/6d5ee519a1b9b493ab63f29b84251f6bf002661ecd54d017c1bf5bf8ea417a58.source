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
  Camera,
  CheckCircle2,
  ClipboardList,
  GraduationCap,
  Mail,
  MapPin,
  Megaphone,
  Mic,
  Newspaper,
  Phone,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react"
import { WHATSAPP_NUMBER, WHATSAPP_URL } from "@/lib/constants"

export const metadata: Metadata = buildMetadata({
  title: "الإجازة في الصحافة والاتصال | ABS",
  description: "الإجازة في الصحافة والاتصال بباماكو: البحث عن المعلومة والتحقق منها، التحرير، الإنتاج السمعي البصري، صحافة الويب، الاتصال المؤسساتي وأخلاقيات الإعلام. 3 سنوات، 6 فصول دراسية، 180 رصيدًا. الرسم السنوي الاسترشادي 1 250 000 فرنك CFA (يشترط تأكيد كتابي لـ 2026-2027).",
  path: "/programs/journalism-communication",
  locale: "ar",
})

const competences = [
  {
    code: "JC01",
    competence: "جمع المعلومة والتحقق منها",
    resultat: "مضاعفة المصادر وتوثيق معلومة.",
  },
  {
    code: "JC02",
    competence: "التحرير لصيغ مختلفة",
    resultat: "إنتاج نص واضح ومُهيكل ومُلاءَم للجمهور.",
  },
  {
    code: "JC03",
    competence: "إعداد مقابلة",
    resultat: "إعداد الأسئلة، وقيادة الحوار، وإعادة نقله بأمانة.",
  },
  {
    code: "JC04",
    competence: "إنتاج محتوى متعدد الوسائط",
    resultat: "إعداد محتوى صورة أو صوت أو فيديو أو ويب حسب الوسائل المتاحة.",
  },
  {
    code: "JC05",
    competence: "وضع خطة اتصال",
    resultat: "تحديد جمهور ورسالة ودعامات ومؤشرات.",
  },
  {
    code: "JC06",
    competence: "تطبيق أخلاقيات المهنة",
    resultat: "مراعاة التحقق، والحياة الخاصة، والحق في الصورة وقواعد المهنة.",
  },
]

const enseignements = [
  "تقنيات التعبير الكتابي والشفهي",
  "الأنواع الصحفية والتحرير",
  "منهجية البحث والتحقق من الوقائع",
  "قانون الإعلام وأخلاقيات المهنة",
  "الاتصال المؤسساتي والعلاقات الصحفية",
  "استراتيجية الاتصال وتسويق الإعلام",
  "التصوير الفوتوغرافي والتسجيل الصوتي",
  "الإنتاج المرئي والمونتاج حسب التجهيزات",
  "صحافة الويب والشبكات الاجتماعية",
  "تصميم الحملات وقياس الجمهور",
  "الإنجليزية المهنية في كل فصل دراسي",
  "المشاريع التحريرية والتنمية الذاتية والتدريب",
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
    value: "1 250 000 فرنك CFA في السنة (رسم مُعلَن، يشترط تأكيد كتابي لـ 2026–2027)",
  },
  {
    label: "الرسوم الإضافية المُعلَنة",
    value: "الملف: 15 000 فرنك CFA؛ مناقشة الإجازة: 80 000 فرنك CFA — مبالغ تُؤكَّد لـ 2026–2027",
  },
  { label: "الاتصال", value: "+223 78 14 14 88 — abs.mail1290@gmail.com" },
]

const axes = [
  {
    icon: Newspaper,
    titre: "الصحافة",
    texte:
      "البحث عن المعلومة والتحقق منها وتحليلها ونشرها؛ والتحقيقات والمقابلات والصحافة الرقمية.",
  },
  {
    icon: Megaphone,
    titre: "اتصال المنظمات",
    texte:
      "تصميم استراتيجيات اتصال ملائمة للأهداف والجمهور: المؤسساتية، والعلاقات الصحفية، والرقمية.",
  },
  {
    icon: Camera,
    titre: "إنتاج المحتوى",
    texte:
      "إنتاجات متعددة الوسائط ومشاريع تحريرية ومواقف تطبيقية؛ والتحقق من الوقائع والمسؤولية التحريرية ومكافحة التضليل.",
  },
  {
    icon: Mic,
    titre: "إشعاع الأصوات الأفريقية",
    texte:
      "سرد واقعيات القارة بدقة، والرفع من قيمة نجاحاتها، وإيضاح تحدياتها، والمساهمة في إشعاعها.",
  },
]

export default function JournalismCommunicationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 bg-cyan-400/20 text-cyan-300 border border-cyan-400/40 hover:bg-cyan-400/20">
            القطب 4 — الصحافة والاتصال
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            الإجازة في الصحافة والاتصال
          </h1>
          <p className="text-lg md:text-xl italic text-cyan-200 mb-6">
            الإخبار بدقّة. الاتصال بأثر. جعل الأصوات الأفريقية مسموعة ومشعّة.
          </p>
          <p className="max-w-3xl text-slate-200 leading-relaxed">
            تطوير الكفاءات اللازمة لجمع المعلومة والتحقق منها وإنتاجها ونشرها، وكذلك لاتصال
            المنظمات، في محيط يتسم بالرقمي والصورة والممارسات الإعلامية الجديدة.
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
                      تكوين ملفات قادرة على إنتاج محتوى موثوق وواضح ومُلاءَم لدعامات مختلفة،
                      مع مراعاة أخلاقيات الاتصال ومسؤولياته.
                    </p>
                    <div>
                      <p className="font-semibold text-blue-800 mb-2">الأهداف العامة</p>
                      <ul className="space-y-1.5">
                        <li>
                          إتقان أساسيات الكتابة الصحفية والاتصال.
                        </li>
                        <li>البدء في الإنتاج الصوتي والمرئي والتصويري والرقمي.</li>
                        <li>
                          فهم الأخلاقيات، وقانون المعلومة، واستراتيجية الاتصال.
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-blue-800 mb-2">الأهداف الخاصة</p>
                      <ul className="space-y-1.5">
                        <li>تحرير مقال أو بيان صحفي أو ملف صحفي.</li>
                        <li>إعداد مقابلة والتحقق من المعلومات.</li>
                        <li>إنجاز محتوى سمعي بصري مُلاءَم لصيغة محددة.</li>
                        <li>
                          تصميم عمل اتصالي وتقييم نتائجه.
                        </li>
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
                        الالتحاق بالإجازة: شهادة البكالوريا أو شهادة معادلة لها، وفق الشروط
                        الرسمية لـ ABS. ويُنصح بحبّ الاستطلاع، والجودة التحريرية، والاهتمام
                        بالأخبار، والقدرة على العمل الجماعي. الماستر: إجازة ذات صلة أو ما
                        يعادلها، وفق المسار المفتوح.
                      </p>
                      <p className="mt-3 text-sm text-slate-500">
                        يُؤكَّد ما يلي قبل النشر: تجهيزات الإنتاج، والاستوديو، والبرمجيات، وأساليب
                        إنجاز المشاريع. ولا يُعرض أي ماستر مستقل في هذا التخصص دون تصميم مرجعي
                        وقرار رسمي بالفتح.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-blue-900">
                        <ShieldCheck className="h-5 w-5 text-cyan-500" /> الأساليب والتقييم
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-slate-700">
                      <p>
                        مقالات، وملفات، وإنتاجات سمعية بصرية، وأعمال تطبيقية، وامتحانات، وحقيبة
                        أعمال، ومشروع تحريري، وتقرير تدريب. وتُرفَق التقييمات التطبيقية بمعايير
                        شفافة.
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
                  <CardTitle className="text-blue-900">
                    الكفاءات المستهدفة ونتائج التعلّم
                  </CardTitle>
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
                    <p className="mt-4 text-sm text-slate-500 border-t border-slate-200 pt-4">
                      يحدد كل ملزمة (syllabus) الصيغ المتوقعة، والأدوات المتاحة، والمعايير
                      التحريرية، وقواعد الحق في الصورة، وأساليب التقييم. ويجب أن تحترم الإنتاجات
                      الإطار الأخلاقي.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-blue-900">المحاور الأساسية للتكوين</CardTitle>
                    <CardDescription>
                      من صحافة التحقق إلى استراتيجية الاتصال.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {axes.map((a) => (
                      <div key={a.titre} className="flex gap-3">
                        <a.icon className="h-5 w-5 text-cyan-500 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-slate-800">{a.titre}</p>
                          <p className="text-sm text-slate-600">{a.texte}</p>
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
                      صحيفة مدرسية، أو بودكاست، أو تحقيق، أو مقابلة، أو فيلم وثائقي صغير، أو حملة
                      مؤسساتية، أو استراتيجية تحريرية. المخرجات: سيناريو، ومحتوى نهائي، وبطاقة
                      تحقق، وعرض.
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
                      زيارات وسائل إعلام ومصالح اتصال، وتمارين تحقيق بإشراف، والمشاركة في أحداث،
                      وتدريب في تحرير أو وكالة أو مصلحة اتصال عند الإمكان.
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
              src="/images/campus/IMG-20250212-WA0016.jpg"
              alt="طلبة قطب الصحافة والاتصال في حرم ABS"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              الوسائل المتاحة للطلبة
            </h2>
            <p className="text-slate-700 mb-4">
              أساتذة في الصحافة والاتصال والإعلام؛ وحواسيب، واتصال بالشبكة، وكاميرا تصوير/تصوير
              مرئي، وميكروفونات، وبرمجيات متاحة. ولا يُقدَّم أي استوديو أو عهدة كأمر مضمون دون
              جرد مادي مُوثَّق.
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
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            الآفاق المهنية وفرص التشغيل
          </h2>
          <p className="max-w-3xl text-slate-700 mb-6">
            آفاق استرشادية، حسب حقيبة الأعمال وخبرة كل خريج — فالفرص هي آفاق وليست ضمانات
            لتشغيل:
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "مساعد اتصال",
              "مُحرِّر مبتدئ",
              "صحفي مبتدئ",
              "مدير مجتمع رقمي",
              "مساعد علاقات صحفية",
              "منتج محتوى",
              "مسؤول اتصال مبتدئ",
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
            هل تودّ معرفة المزيد عن تخصص الصحافة والاتصال؟
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
