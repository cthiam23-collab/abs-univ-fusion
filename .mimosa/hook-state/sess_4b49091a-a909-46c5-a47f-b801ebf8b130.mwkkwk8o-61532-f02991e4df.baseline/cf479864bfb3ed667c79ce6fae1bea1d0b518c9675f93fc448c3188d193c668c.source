import Link from "next/link"
import { Mail, Phone, MapPin, Clock, ArrowRight, GraduationCap, FileCheck2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ContactForm } from "@/components/forms/contact-form"
import { ORGANIZATION } from "@/lib/constants"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "الاتصال بقبول الماجستير | ABS",
  description: "اتصل بخدمة قبول الماجستير في ABS — African Business School بباماكو: الشروط والملف والرسوم الخاصة بالترشّح للماجستير.",
  path: "/contact/graduate-admissions",
  locale: "ar",
})

const grad = ORGANIZATION.departments.graduateAdmissions
const contact = ORGANIZATION.contact
const hours = ORGANIZATION.officeHours

const requirements = [
  {
    title: "شهادة إجازة (Bac+3) على الأقل",
    description:
      "الإجازة (ليسانس) أو معادل معتمد (Bac+3/Bac+4) في مجال متوافق مع الماجستير المستهدف. وتُدرس المعادلات حالةً بحالة.",
  },
  {
    title: "ملف الترشّح",
    description:
      "السيرة الذاتية، كشوف الدرجات، صور الشهادات، رسالة الدافع ورسائل التوصية حسب البرنامج المختار.",
  },
  {
    title: "مقابلة القبول",
    description:
      "مقابلة مع المسؤول عن البرنامج تتيح تقييم مشروعكم المهني ودافعكم.",
  },
]

export default function ContactGraduateAdmissionsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 py-20 text-white">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 border border-cyan-400/40 bg-cyan-400/10 text-cyan-400">
            <GraduationCap className="mr-1.5 h-3.5 w-3.5" />
            قبول الماجستير
          </Badge>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            الاتصال بقبول الماجستير
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-blue-100">
            هل حصلتم على الإجازة (Bac+3) وترغبون في مواصلة دراستكم في جامعة ABS؟ يرافقكم فريق القبول في كل خطوة
            من خطوات ترشّحكم.
          </p>
        </div>
      </section>

      {/* Requirements summary */}
      <section className="container mx-auto py-14">
        <h2 className="mb-2 text-2xl font-bold text-blue-900">شروط القبول في سطور</h2>
        <p className="mb-8 max-w-2xl text-slate-600">
          الأساسيات التي يجب معرفتها قبل الاتصال بنا — التفاصيل الكاملة موجودة في الصفحة المخصصة لمتطلبات
          القبول.
        </p>
        <div className="grid gap-5 md:grid-cols-3">
          {requirements.map((req) => (
            <Card key={req.title} className="border-slate-200">
              <CardHeader>
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-blue-700/10">
                  <FileCheck2 className="h-5 w-5 text-blue-700" />
                </div>
                <CardTitle className="text-lg text-blue-900">{req.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">{req.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact + form */}
      <section className="bg-slate-50 py-14">
        <div className="container mx-auto grid items-start gap-8 lg:grid-cols-5">
          <Card className="border-slate-200 lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-blue-900">مكتب القبول للماجستير</CardTitle>
              <CardDescription>{grad.name}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-slate-600">
              <a
                href={`mailto:${grad.email}`}
                className="flex items-start gap-3 font-medium text-blue-700 hover:text-blue-900"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                {grad.email}
              </a>
              <a
                href={`tel:${grad.phone.split(" / ")[0].replace(/\s/g, "")}`}
                className="flex items-start gap-3"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />
                {grad.phone}
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />
                <span>{contact.address.formatted}</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />
                <span>
                  {hours.weekday.days}: {hours.weekday.start} – {hours.weekday.end}
                  <br />
                  {hours.saturday.days}: {hours.saturday.start} – {hours.saturday.end}
                </span>
              </div>
              <div className="flex flex-col gap-3 border-t border-slate-100 pt-4">
                <Link href="/admissions/graduate/apply">
                  <Button className="w-full bg-blue-700 text-white hover:bg-blue-900">
                    إيداع ترشّح للماجستير
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/admissions/graduate/requirements">
                  <Button variant="outline" className="w-full border-blue-700 text-blue-700 hover:bg-blue-50">
                    الاطلاع على المتطلبات المفصّلة
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-md lg:col-span-3">
            <CardHeader>
              <CardTitle className="text-blue-900">طرح سؤال حول ملفكم</CardTitle>
              <CardDescription>
                سيُنقل رسالتكم مباشرة إلى فريق القبول للماجستير.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
