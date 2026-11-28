import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Image from "next/image"
import Link from "next/link"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Building2,
  FileText,
  Hash,
  MessageCircle,
  ExternalLink,
  Navigation,
  ArrowRight,
  AlertCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { RecontactForm } from "./recontact-form"
import { WHATSAPP_NUMBER } from "@/lib/constants"

export const metadata: Metadata = buildMetadata({
  title: "اتصل بنا | ABS",
  description: "اتصل بـ ABS — African Business School بباماكو: الهاتف/واتساب، البريد الإلكتروني، العنوان واستمارة «ليتم الاتصال بك» لأسئلتك حول التكوين والقبول.",
  path: "/contact",
  locale: "ar",
})

const CONTACT_EMAIL = "abs.mail1290@gmail.com"
const CONTACT_PHONE = "+223 78 14 14 88"

// Message prérempli WhatsApp — document V3, §14.4
const WHATSAPP_PREFILL =
  "مرحباً ABS، أرغب في الحصول على معلومات حول برامجكم التكوينية وشروط القبول للعودة الدراسية القادمة."
const WHATSAPP_LINK = `https://wa.me/22378141488?text=${encodeURIComponent(WHATSAPP_PREFILL)}`

// Coordonnées officielles — document V3, §13
const infoRows = [
  {
    icon: Building2,
    label: "المؤسسة",
    value: "ABS — African Business School",
    note: null as string | null,
  },
  {
    icon: MapPin,
    label: "العنوان",
    value: "Hamdallaye ACI 2000, Rue 338, Porte 06, Bamako, Mali",
    note: null,
  },
  {
    icon: Phone,
    label: "الهاتف / واتساب",
    value: WHATSAPP_NUMBER,
    note: null,
  },
  {
    icon: Mail,
    label: "البريد الإلكتروني",
    value: CONTACT_EMAIL,
    note: null,
  },
  {
    icon: FileText,
    label: "السجل التجاري",
    value: "RC MA.BKO.2016.B.7812",
    note: "يؤكد قبل النشر",
  },
  {
    icon: Hash,
    label: "الرقم الضريبي (NIF)",
    value: "084127277W",
    note: "يؤكد قبل النشر",
  },
]

const quickCards = [
  {
    icon: MapPin,
    title: "العنوان",
    lines: ["Hamdallaye ACI 2000, Rue 338, Porte 06", "باماكو، مالي"],
  },
  {
    icon: Phone,
    title: "الهاتف / واتساب",
    lines: [WHATSAPP_NUMBER],
  },
  {
    icon: Mail,
    title: "البريد الإلكتروني",
    lines: [CONTACT_EMAIL],
  },
  {
    icon: Clock,
    title: "أوقات العمل",
    lines: [
      "الاثنين – الجمعة : 09:00 – 17:00",
      "السبت : 09:00 – 13:00",
    ],
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero — document V3, §13 */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 py-20 text-white">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 border border-cyan-400/40 bg-cyan-400/10 text-cyan-400">اتصال</Badge>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            لنتحدث عن مشروعك
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-blue-100">
            سؤال حول البرامج التكوينية، أو القبول، أو الحياة في ABS، أو شراكة؟ يدعوكم الفريق إلى
            الاتصال عبر المعطيات الرسمية أدناه.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-green-500 text-white hover:bg-green-600">
                <MessageCircle className="mr-2 h-5 w-5" />
                راسلنا على واتساب
              </Button>
            </a>
            <a href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}>
              <Button
                size="lg"
                variant="outline"
                className="border-white/40 bg-transparent text-white hover:bg-white/10"
              >
                <Phone className="mr-2 h-5 w-5" />
                اتصل بـ {WHATSAPP_NUMBER}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Coordonnées officielles — document V3, §13 */}
      <section className="container mx-auto -mt-10 px-4 pb-12">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {quickCards.map((card) => (
            <Card key={card.title} className="border-slate-200 shadow-lg">
              <CardContent className="pt-6">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-blue-700/10">
                  <card.icon className="h-5 w-5 text-blue-700" />
                </div>
                <h2 className="mb-2 font-bold text-blue-900">{card.title}</h2>
                {card.lines.map((line) => (
                  <p key={line} className="text-sm text-slate-600">
                    {line}
                  </p>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Tableau des informations + carte */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid items-start gap-8 lg:grid-cols-2">
            <div className="min-w-0">
              <h2 className="mb-2 text-2xl font-bold text-blue-900">المعطيات الرسمية</h2>
              <p className="mb-6 text-slate-600">
                استخدم حصراً القنوات أدناه للاتصال بإدارة ABS.
              </p>
              <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-blue-900 text-left text-white">
                      <th className="px-4 py-3 font-semibold">المعلومة</th>
                      <th className="px-4 py-3 font-semibold">المعطى</th>
                    </tr>
                  </thead>
                  <tbody>
                    {infoRows.map((row) => (
                      <tr key={row.label} className="border-t border-slate-100 align-top">
                        <td className="px-4 py-3">
                          <span className="flex items-center gap-2 font-medium text-blue-900">
                            <row.icon className="h-4 w-4 text-blue-700" />
                            {row.label}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-slate-700">
                          {row.value}
                          {row.note && (
                            <span className="mt-1 flex items-start gap-1 text-xs text-amber-700">
                              <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                              {row.note}
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-lg border border-green-500 bg-green-50 px-5 py-3 text-sm font-semibold text-green-700 transition hover:bg-green-100"
              >
                <MessageCircle className="h-5 w-5" />
                تحدث عبر واتساب — {WHATSAPP_NUMBER}
              </a>
            </div>

            <div>
              <h2 className="mb-2 text-2xl font-bold text-blue-900">موقعنا في باماكو</h2>
              <p className="mb-6 text-slate-600">
                يقع الحرم الجامعي في حمدلاي ACI 2000، في قلب باماكو.
              </p>
              <iframe
                title="خريطة ABS — African Business School، حمدلاي ACI 2000، باماكو"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-8.0130%2C12.6210%2C-7.9930%2C12.6350&layer=mapnik&marker=12.6280%2C-8.0030"
                className="h-[380px] w-full rounded-xl border-0 shadow-md"
                loading="lazy"
              />
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="https://www.openstreetmap.org/?mlat=12.6280&mlon=-8.0030#map=16/12.6280/-8.0030"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    افتح في OpenStreetMap
                  </Button>
                </a>
                <a
                  href="https://www.openstreetmap.org/directions?to=12.6280%2C-8.0030"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-blue-700 text-white hover:bg-blue-900">
                    <Navigation className="mr-2 h-4 w-4" />
                    المسار
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire « Être recontacté » — document V3, §14.2 */}
      <section className="container mx-auto py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-2 text-2xl font-bold text-blue-900">ليتم الاتصال بك</h2>
          <p className="mb-8 text-slate-600">
            المرشحون المستقبليون، والآباء، وكل مهتم بالبرامج التكوينية: املأوا هذه الاستمارة
            المبسّطة لتسهيل تبادلاتكم مع الفريق الإداري لـ ABS.
          </p>
          <Card className="border-slate-200 shadow-md">
            <CardContent className="pt-6">
              <RecontactForm />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Plan d'accès */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-xl font-bold text-blue-900">خطة الولوج إلى الحرم الجامعي</h2>
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-slate-200 shadow-md">
            <Image
              src="/images/campus/university-campus-map.jpg"
              alt="خطة الولوج إلى حرم ABS — حمدلاي ACI 2000، باماكو"
              fill
              className="object-contain"
            />
          </div>
          <p className="mt-3 text-sm text-slate-500">
            تجد تفاصيل المباني في{" "}
            <Link href="/campus/map" className="font-medium text-blue-700 hover:underline">
              صفحة خطة الحرم الجامعي
            </Link>
            .
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-14 text-white">
        <div className="container mx-auto flex flex-col items-center gap-6 px-4 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">هل أنت مستعد للانضمام إلى ABS؟</h2>
          <p className="max-w-2xl text-blue-100">
            اكتشف برامجنا التكوينية، أو تجوّل في الحرم الجامعي، أو قدّم ملف ترشّحك اليوم.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/admissions">
              <Button size="lg" className="bg-cyan-400 text-blue-950 hover:bg-cyan-50">
                ترشّح الآن
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/visit">
              <Button
                size="lg"
                variant="outline"
                className="border-white/40 bg-transparent text-white hover:bg-white/10"
              >
                زيارة الحرم الجامعي
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
import { localizedOfficeHours } from "@/lib/i18n"
