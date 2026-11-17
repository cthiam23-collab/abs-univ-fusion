import Link from "next/link"
import { Mail, Phone, MapPin, Clock, Globe2, Languages, Plane, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ContactForm } from "@/components/forms/contact-form"
import { ORGANIZATION } from "@/lib/constants"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "الاتصال بالقبول الدولي | ABS",
  description: "اتصل بخدمة القبول الدولي في ABS — African Business School: المعادلات، ملف الترشّح والترحيب بالطلبة الدوليين في باماكو.",
  path: "/contact/international-admissions",
  locale: "ar",
})

const contact = ORGANIZATION.contact
const hours = ORGANIZATION.officeHours

const resources = [
  {
    icon: Globe2,
    title: "القبول الدولي",
    description: "الإجراءات والتقويمات والشروط الخاصة بالطلبة القادمين من الخارج.",
    href: "/admissions/international",
  },
  {
    icon: Plane,
    title: "حياة الطلبة الدوليين",
    description: "التأشيرات، السكن، الاستقرار في باماكو والاندماج في الحرم الجامعي.",
    href: "/international-students",
  },
  {
    icon: Languages,
    title: "الأكاديمية الإنجليزية",
    description: "قوّوا مستواكم في الإنجليزية قبل بداية السنة الدراسية بفضل أكاديميتنا الإنجليزية (English Academy).",
    href: "/english-academy",
  },
  {
    icon: ArrowRight,
    title: "الترشّح من الخارج",
    description: "أودعوا ملفكم على الخط، من أي مكان في العالم.",
    href: "/apply/international",
  },
]

export default function ContactInternationalAdmissionsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 py-20 text-white">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 border border-cyan-400/40 bg-cyan-400/10 text-cyan-400">
            <Globe2 className="mr-1.5 h-3.5 w-3.5" />
            الطلبة الدوليون
          </Badge>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            انضموا إلى باماكو من الخارج
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-blue-100">
            نرافق كل سنة طلبة من كل أنحاء غرب أفريقيا ومن خارجها. ويجيب فريقنا المخصص عن أسئلتكم حول التأشيرات
            ومعادلة الشهادات والاستقرار في باماكو.
          </p>
        </div>
      </section>

      {/* Resources */}
      <section className="container mx-auto py-14">
        <h2 className="mb-8 text-2xl font-bold text-blue-900">موارد مفيدة</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {resources.map((res) => (
            <Link key={res.href} href={res.href} className="group">
              <Card className="h-full border-slate-200 transition-shadow group-hover:shadow-md">
                <CardHeader>
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-blue-700/10">
                    <res.icon className="h-5 w-5 text-blue-700" />
                  </div>
                  <CardTitle className="text-base text-blue-900">{res.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">{res.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Contact + form */}
      <section className="bg-slate-50 py-14">
        <div className="container mx-auto grid items-start gap-8 lg:grid-cols-5">
          <Card className="border-slate-200 lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-blue-900">مكتب الطلبة الدوليين</CardTitle>
              <CardDescription>مكتب القبول — قطاع الشؤون الدولية</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-slate-600">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-start gap-3 font-medium text-blue-700 hover:text-blue-900"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                {contact.email}
              </a>
              <a
                href={`tel:+22378141488`}
                className="flex items-start gap-3"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" />
                {contact.phone}
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
              <div className="border-t border-slate-100 pt-4">
                <p className="mb-2 font-semibold text-blue-900">التوقيت</p>
                <p>GMT (UTC+0) — نكيّف مقابلاتنا عبر الفيديو مؤتمرات حسب توقيتكم.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 shadow-md lg:col-span-3">
            <CardHeader>
              <CardTitle className="text-blue-900">سؤالكم الدولي</CardTitle>
              <CardDescription>
                اختاروا «الطلبة الدوليين» كمستلم من أجل التواصل مع الخدمة المناسبة.
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
