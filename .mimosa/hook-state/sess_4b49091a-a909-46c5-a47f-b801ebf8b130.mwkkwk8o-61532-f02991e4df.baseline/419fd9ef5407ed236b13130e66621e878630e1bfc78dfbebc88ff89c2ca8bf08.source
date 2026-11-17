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
  GraduationCap,
  HardHat,
  Layers,
  Mail,
  MapPin,
  Mountain,
  Phone,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react"
import { WHATSAPP_NUMBER, WHATSAPP_URL } from "@/lib/constants"

export const metadata: Metadata = buildMetadata({
  title: "الإجازة في الهندسة الجيولوجية والمدنية والتعدينية | ABS",
  description: "الإجازة في الهندسة الجيولوجية والمدنية والتعدينية بباماكو: الجيولوجيا، المساحة، المواد، الهندسة المدنية، الموارد التعدينية، الأمان والبيئة. 3 سنوات، 6 فصول دراسية، 180 رصيدًا. الرسم السنوي الاسترشادي 1 350 000 فرنك CFA (يشترط تأكيد كتابي لـ 2026-2027).",
  path: "/programs/geological-civil-mining-engineering",
  locale: "ar",
})

const competences = [
  {
    code: "GCM01",
    competence: "رصد التضاريس ووصفها",
    resultat: "جمع الملاحظات وتوصيف المواد.",
  },
  {
    code: "GCM02",
    competence: "الرسم الخرائطي والقياس",
    resultat: "تنظيم معطيات المسح وإنتاج تمثيل مقروء.",
  },
  {
    code: "GCM03",
    competence: "فهم المواد والمنشآت",
    resultat: "شرح الخصائص والقيود الأساسية.",
  },
  {
    code: "GCM04",
    competence: "المساهمة في الدراسات التقنية",
    resultat: "قراءة المخططات وتطبيق أساليب حساب ملائمة للمستوى.",
  },
  {
    code: "GCM05",
    competence: "مراعاة الأمان والبيئة",
    resultat: "تحديد المخاطر واقتراح تدابير وقائية.",
  },
  {
    code: "GCM06",
    competence: "توصيل النتائج",
    resultat: "تحرير تقرير وعرض معطيات تقنية.",
  },
]

const enseignements = [
  "الرياضيات التطبيقية والفيزياء",
  "الكيمياء العامة والمواد",
  "الجيولوجيا العامة والتركيبية",
  "علم المعادن وعلم الصخور والرسم الجيولوجي الخرائطي",
  "المساحة والمسوح الميدانية",
  "ميكانيك التربة ومواد البناء",
  "الهيدرولوجيا والجيوتقنية وفق التصميم المرجعي",
  "الرسم التقني وبرمجيات التصميم",
  "الأنظمة الجغرافية للمعلومات (SIG): QGIS والأدوات الخرائطية وفق الموارد",
  "المدخل إلى الأدوات المهنية: AutoCAD Civil 3D وSurpac حسب التوفر",
  "الاستغلال التعديني والأمان والبيئة",
  "الإنجليزية العلمية والمشاريع والخروج الميدانية",
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
    value: "1 350 000 فرنك CFA في السنة (رسم مُعلَن، يشترط تأكيد كتابي لـ 2026–2027)",
  },
  {
    label: "الرسوم الإضافية المُعلَنة",
    value: "الملف: 15 000 فرنك CFA؛ مناقشة الإجازة: 80 000 فرنك CFA — مبالغ تُؤكَّد لـ 2026–2027",
  },
  { label: "الاتصال", value: "+223 78 14 14 88 — abs.mail1290@gmail.com" },
]

export default function GeologicalCivilMiningEngineeringPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 bg-cyan-400/20 text-cyan-300 border border-cyan-400/40 hover:bg-cyan-400/20">
            القطب 1 — الهندسة الجيولوجية والمدنية والتعدينية
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            الإجازة في الهندسة الجيولوجية والمدنية والتعدينية
          </h1>
          <p className="text-lg md:text-xl italic text-cyan-200 mb-6">
            استكشاف الموارد. بناء البنى التحتية. الرفع الدائم من قيمة الإمكانات الأفريقية.
          </p>
          <p className="max-w-3xl text-slate-200 leading-relaxed">
            الجمع بين فهم التضاريس والمواد، وتقنيات الهندسة المدنية، ومعارف القطاع التعديني
            لتكوين مهنيين ينتبهون إلى الأمان وجودة المنشآت والتدبير المسؤول للموارد الطبيعية.
            وتمتلك أفريقيا تراثًا جيولوجيًا وتعدينيًا هائلًا وحاجات كبيرة في البنى التحتية:
            ويستهدف هذا التكوين الكفاءات العلمية والتقنية القادرة على مسيرة هذه المشاريع
            التنموية.
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
                      تكوين تقنيين سامين وكوادر مبتدئة قادرة على المشاركة في دراسة التضاريس،
                      وإعداد المشاريع، ومتابعة الأنشطة الجيولوجية والمدنية والتعدينية.
                    </p>
                    <div>
                      <p className="font-semibold text-blue-800 mb-2">الأهداف العامة</p>
                      <ul className="space-y-1.5">
                        <li>
                          إتقان الأساسيات العلمية اللازمة لدراسة التربة والمواد.
                        </li>
                        <li>
                          فهم أساليب المسح والرسم الخرائطي والتصميم ومتابعة المنشآت.
                        </li>
                        <li>مراعاة قواعد الأمان والبيئة والجودة.</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-blue-800 mb-2">الأهداف الخاصة</p>
                      <ul className="space-y-1.5">
                        <li>
                          وصف التشكيلات الجيولوجية وتفسير المعطيات الميدانية.
                        </li>
                        <li>إنجاز المسوح وإنتاج الخرائط أو المخططات الأساسية.</li>
                        <li>
                          المساهمة في إعداد ومتابعة أشغال مدنية أو تعدينية.
                        </li>
                        <li>
                          استخدام البرمجيات المتخصصة عند توفرها وتدريسها.
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
                        الالتحاق بالإجازة: بكالوريا علمية أو شهادة معادلة يُنصح بها، مع مراعاة
                        شروط القبول الرسمية. الالتحاق بالماستر: إجازة ذات صلة في الجيولوجيا أو
                        الهندسة المدنية أو المناجم أو مجال مجاور، وملف أكاديمي ومسار مفتوح
                        فعليًا.
                      </p>
                      <p className="mt-3 text-sm text-slate-500">
                        يُؤكَّد ما يلي قبل النشر: النطاق التخصصي، والبرمجيات والتجهيزات المتاحة
                        فعليًا، والخروج الميدانية، والمتطلبات المهنية المحتملة.
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
                        مراقبات مكتوبة، وتقارير أعمال عملانية، وخرائط/مخططات، ودراسات حالات،
                        وتقييمات ميدانية، وامتحانات، ومشروع وتدريب. والاعتماد وفق القواعد
                        المؤسساتية المعتمدة.
                      </p>
                      <p className="mt-3">
                        المقاربة البيداغوجية المستهدفة: نحو 40٪ إسهامات نظرية و60٪ ممارسات
                        ومشاريع وأعمال تطبيقية وخروج ميداني وتداريب وانغماس مهني، مع مراعاة
                        التصميم المرجعي المعتمد. وتلتزم الخروج الميدانية بتعليمات الأمان
                        وتجهيزات الحماية المحددة في التصميم المرجعي.
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
                        <TableHead className="w-24">الرمز</TableHead>
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
                    ويجب اعتماد تصاميم الماستر للمجال الجيولوجي والمدني والتعديني قبل فتح
                    التسجيلات.
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
                      يمكن استعمال برمجيات مثل QGIS وAutoCAD Civil 3D وSurpac حسب الأهداف
                      البيداغوجية والتجهيزات المتاحة.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-blue-900">ثلاثة شُعب متكاملة</CardTitle>
                    <CardDescription>
                      تكوين عند مفترق علوم الأرض وهندسة المنشآت والموارد المعدنية.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex gap-3">
                      <Mountain className="h-5 w-5 text-cyan-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-slate-800">الشعبة الجيولوجية</p>
                        <p className="text-sm text-slate-600">
                          رصد التضاريس وتوصيفها، وتفسير المعطيات الجيولوجية والجيوتقنية، والرسم
                          الخرائطي.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <HardHat className="h-5 w-5 text-cyan-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-slate-800">شعبة الهندسة المدنية</p>
                        <p className="text-sm text-slate-600">
                          المواد، وميكانيك التربة، وتصميم المنشآت ومتابعتها، والمخططات والحسابات
                          الأساسية.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Layers className="h-5 w-5 text-cyan-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-slate-800">الشعبة التعدينية</p>
                        <p className="text-sm text-slate-600">
                          استكشاف الموارد المعدنية واستغلالها، والأمان، والبيئة وإعادة تأهيل
                          المواقع.
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-slate-500 border-t border-slate-200 pt-4">
                      تُولى عناية خاصة بالأمان، والتدبير المسؤول للموارد، وتقليص الآثار
                      البيئية، ومراعاة حاجات المجتمعات.
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
                      دفتر ميداني، أو رسم جيولوجي خرائطي، أو تحليل مادة، أو دراسة حالة جيوتقنية،
                      أو مشروع صغير لمتابعة ورشة بناء. عرض النتائج وتقرير تقني.
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
                      خروج ميدانية بإشراف، وزيارات ورشات بناء ومواقع جيولوجية ومقاولات تعدينية
                      إذا سمحت ذلك الاتفاقيات والأمان؛ وتدريب مهني بمشرف وتقرير.
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
              src="/images/campus/IMG-20250212-WA0009.jpg"
              alt="طلبة قطب الهندسة الجيولوجية والمدنية والتعدينية في حرم ABS"
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
              أساتذة في الجيولوجيا والمساحة والمواد والهندسة المدنية؛ وأدوات قياس، وتجهيزات
              حماية فردية، وموارد خرائطية وبرمجيات حسب الرخص والتوفر. ولا يُدَّعى وجود أي
              مختبر أو شراكة محددة دون تحقق.
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
            آفاق استرشادية، مع مراعاة الكفاءات والتصاريح ومتطلبات صاحب العمل — فالفرص هي
            آفاق وليست ضمانات لتشغيل:
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "مساعد جيولوجي",
              "تقني ميداني",
              "مساعد مساح",
              "تقني مواد",
              "مساعد ورشة بناء",
              "مساعد دراسات جيوتقنية أو تعدينية",
            ].map((d) => (
              <Badge key={d} variant="secondary" className="text-sm px-3 py-1">
                {d}
              </Badge>
            ))}
          </div>
          <p className="mt-4 text-sm text-slate-500 max-w-3xl">
            القطاعات المعنية (على سبيل الاسترشاد): مكاتب الدراسات، ومقاولات البناء، والشركات
            التعدينية، والمختبرات، وهياكل الرسم الخرائطي، والمصالح التقنية والهياكل البيئية
            والجيوتقنية.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            هل تودّ معرفة المزيد عن تخصص الهندسة الجيولوجية والمدنية والتعدينية؟
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
