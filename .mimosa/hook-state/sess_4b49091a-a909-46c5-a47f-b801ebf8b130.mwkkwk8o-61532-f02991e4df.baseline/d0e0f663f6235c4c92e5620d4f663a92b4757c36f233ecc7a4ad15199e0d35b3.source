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
  CheckCircle2,
  ClipboardList,
  Cpu,
  GitBranch,
  GraduationCap,
  Lock,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Smartphone,
  Target,
  Users,
} from "lucide-react"
import { WHATSAPP_NUMBER, WHATSAPP_URL } from "@/lib/constants"

export const metadata: Metadata = buildMetadata({
  title: "الإجازة في الهندسة المعلوماتية | ABS",
  description: "الإجازة في الهندسة المعلوماتية بباماكو: الخوارزميات، البرمجة، تطوير الويب والتطبيقات، قواعد البيانات، الأنظمة، الشبكات والأمن السيبراني. 3 سنوات، 6 فصول دراسية، 180 رصيدًا. الرسم السنوي الاسترشادي 1 025 000 فرنك CFA (يشترط تأكيد كتابي لـ 2026-2027).",
  path: "/programs/engineering/computer-science",
  locale: "ar",
})

const competences = [
  {
    code: "II01",
    competence: "حل مشكلة بواسطة الخوارزميات",
    resultat: "صياغة حل وتحويله إلى برنامج.",
  },
  {
    code: "II02",
    competence: "تطوير تطبيق",
    resultat: "تصميم تطبيق وترميزه واختباره وتوثيقه.",
  },
  {
    code: "II03",
    competence: "تدبير المعطيات",
    resultat: "بناء نموذج لقاعدة بيانات وتنفيذ استعلامات ملائمة.",
  },
  {
    code: "II04",
    competence: "فهم الأنظمة والشبكات",
    resultat: "وصف بنية معمارية وتشخيص حوادث بسيطة.",
  },
  {
    code: "II05",
    competence: "تأمين التطويرات",
    resultat: "تحديد المخاطر الشائعة وتطبيق الممارسات الحسنة.",
  },
  {
    code: "II06",
    competence: "العمل بمنهجية المشروع",
    resultat: "استخدام مستودع شيفرة، ومتابعة المهام، وعرض عرض توضيحي.",
  },
]

const enseignements = [
  "الرياضيات التطبيقية والمنطق",
  "الخوارزميات والبرمجة",
  "Python و/أو Java وفق التصميم المرجعي",
  "تطوير الويب: HTML وCSS وJavaScript والأطر (frameworks) وفق الموارد",
  "قواعد البيانات وSQL",
  "أنظمة التشغيل والشبكات",
  "هندسة البرمجيات والاختبارات وضمان الجودة",
  "تطوير تطبيقات الهاتف وفق التصميم المرجعي",
  "الأمن السيبراني وحماية المعطيات",
  "المعطيات والمدخل التدريجي إلى الذكاء الاصطناعي",
  "الإنجليزية التقنية في كل فصل دراسي",
  "مشاريع بإشراف وتنمية ذاتية وانغماس مهني",
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

const axes = [
  {
    icon: Cpu,
    titre: "هندسة البرمجيات",
    texte: "تصميم التطبيقات وبرمجتها واختبارها وضمان جودتها.",
  },
  {
    icon: Smartphone,
    titre: "تطوير الويب وتطبيقات الهاتف",
    texte: "واجهات ويب، وتطبيقات متصلة، وخدمات رقمية.",
  },
  {
    icon: GitBranch,
    titre: "الذكاء الاصطناعي وعلوم المعطيات",
    texte: "مدخل تدريجي إلى الذكاء الاصطناعي والمعطيات واستغلالها.",
  },
  {
    icon: Lock,
    titre: "الأمن السيبراني",
    texte: "حماية الأنظمة والمعطيات والممارسات الحسنة للأمان.",
  },
]

export default function ComputerSciencePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 bg-cyan-400/20 text-cyan-300 border border-cyan-400/40 hover:bg-cyan-400/20">
            القطب 2 — الهندسة المعلوماتية والتكنولوجيات الرقمية
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            الإجازة في الهندسة المعلوماتية
          </h1>
          <p className="text-lg md:text-xl italic text-cyan-200 mb-6">
            إتقان التكنولوجيات. تصميم الابتكارات. تعزيز السيادة الرقمية لأفريقيا.
          </p>
          <p className="max-w-3xl text-slate-200 leading-relaxed">
            تكوين مختصين قادرين على تصميم الحلول الرقمية الملائمة لحاجات المنظمات وتطويرها
            واختبارها وصيانتها، مع مراعاة الأمان وجودة البرمجيات وتحولات الذكاء الاصطناعي.
            ويفتح الأساس العلمي — الرياضيات والمنطق والخوارزميات وبُنى المعطيات والأنظمة
            والشبكات وقواعد البيانات — بابًا للتخصص التدريجي نحو هندسة البرمجيات، والويب
            وتطبيقات الهاتف، والذكاء الاصطناعي، وعلوم المعطيات، والأمن السيبراني.
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
                      تصميم حلول معلوماتية موثوقة ومفيدة وآمنة وتنفيذها.
                    </p>
                    <div>
                      <p className="font-semibold text-blue-800 mb-2">الأهداف العامة</p>
                      <ul className="space-y-1.5">
                        <li>
                          اكتساب أساسيات الخوارزميات والبرمجة والأنظمة.
                        </li>
                        <li>تطوير تطبيقات وقواعد بيانات.</li>
                        <li>تطبيق أساليب الاختبار والأمن السيبراني وتدبير المشاريع.</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-blue-800 mb-2">الأهداف الخاصة</p>
                      <ul className="space-y-1.5">
                        <li>كتابة البرامج وتوثيقها واختبارها.</li>
                        <li>إنشاء واجهات ويب وتطبيقات متصلة بمعطيات.</li>
                        <li>
                          إدارة بيئات التطوير وفهم الشبكات.
                        </li>
                        <li>
                          إنجاز مشروع معلوماتي ضمن فريق وعرض خياراته التقنية.
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
                        الالتحاق بالإجازة: شهادة البكالوريا أو شهادة معادلة لها؛ ويُنصح بملف
                        علمي لتسهيل التعلمات الرياضية والخوارزمية. تُؤكَّد الشروط النهائية في
                        إجراءات القبول لدى ABS. الماستر: إجازة ذات صلة أو ما يعادلها وملف
                        وفق المسار المفتوح.
                      </p>
                      <p className="mt-3 text-sm text-slate-500">
                        يُؤكَّد ما يلي قبل النشر: المسمى الرسمي للشهادة، والتكنولوجيات
                        المدرَّسة، والمختبرات، والتجهيزات، والتخصص الدقيق في الذكاء الاصطناعي.
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
                        تقييمات تطبيقية في المختبر، وتمارين، ومراقبات، ومشاريع، وامتحانات،
                        ومناقشات. وتتعلق المعايير خصوصًا بالتشغيل والأمان وجودة الشيفرة
                        والتوثيق والقدرة على الشرح.
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
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-blue-900">محاور التخصص التدريجي</CardTitle>
                    <CardDescription>
                      بعد أساس علمي وتقني مشترك، يُبنى التخصص تدريجيًا وفق الموارد والتصميم
                      المرجعي المعتمد.
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
                    <p className="text-sm text-slate-500 border-t border-slate-200 pt-4">
                      يجب تثبيت الأدوات البرمجية المذكورة في التصميم المرجعي وإتاحتها للطلبة؛
                      ويتحقق من توفرها الفعلي قبل النشر. ويجب اعتماد ربط ماستر في الذكاء
                      الاصطناعي والشبكات والاتصالات قبل نشر أي وعد بتخصص.
                    </p>
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
                      تطبيق ويب أو هاتف، أو واجهة برمجية (API)، أو قاعدة بيانات، أو أتمتة، أو
                      نموذج أولي للذكاء الاصطناعي، أو تدقيق أمان بغرض بيداغوجي. وإيداع الشيفرة،
                      والتوثيق، والعرض التوضيحي، والمناقشة.
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
                      ورشات برمجة، وزيارات أو تبادلات مع مصالح معلوماتية، ومشاريع حقيقية بإشراف،
                      وتدريب في مقاولة أو مصلحة رقمية، حسب التوفر والاتفاقية.
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
              src="/images/documents/v3-image2.jpg"
              alt="طلبة ABS يعملون معًا على مشروع"
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
              أساتذة في البرمجة والأنظمة والشبكات والمعطيات؛ ومختبر معلوماتية مجهَّز بحواسيب
              واتصال بالشبكة وأدوات تطوير وبيئة لتدبير إصدارات الشيفرة. ويجب التحقق من التوفر
              الفعلي للتجهيزات قبل النشر.
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
            آفاق استرشادية، حسب الكفاءات المكتسبة ومواصلة التخصص — فالفرص هي آفاق وليست
            ضمانات لتشغيل:
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "مطوّر مبتدئ",
              "مدمج مواقع ويب",
              "تقني دعم",
              "مساعد إداري أنظمة/شبكات",
              "مختبِر برمجيات مبتدئ",
              "محلل معطيات مبتدئ",
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
            هل تودّ معرفة المزيد عن تخصص الهندسة المعلوماتية؟
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
