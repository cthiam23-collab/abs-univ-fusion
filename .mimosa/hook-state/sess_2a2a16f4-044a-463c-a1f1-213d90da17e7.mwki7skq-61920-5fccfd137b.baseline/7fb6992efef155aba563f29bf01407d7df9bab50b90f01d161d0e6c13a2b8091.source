import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Image from "next/image"
import Link from "next/link"
import {
  Handshake,
  Users,
  Building,
  BriefcaseBusiness,
  Mic,
  ArrowLeftRight,
  ShieldCheck,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = buildMetadata({
  title: "Companies and partners | ABS",
  description: "Companies, institutions and organisations: build useful links with ABS — professional speakers, visits, applied projects, internships and lectures in Bamako.",
  path: "/international/partnerships",
  locale: "en",
})

// Forms of collaboration — document V3, §11.1
const collaborations = [
  {
    icon: Users,
    title: "Professional speakers",
    description:
      "Professionals come to share their experience and shed light on the realities of the professions.",
  },
  {
    icon: Building,
    title: "Visits",
    description:
      "Discoveries of companies and institutions to connect teaching with the field.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Applied projects",
    description:
      "Work carried out by students on real issues proposed by organisations.",
  },
  {
    icon: Handshake,
    title: "Internships",
    description:
      "Company immersions allowing students to put into practice the skills acquired during training.",
  },
  {
    icon: Mic,
    title: "Lectures",
    description:
      "Meetings and lectures hosted with figures from the economic and institutional world.",
  },
  {
    icon: ArrowLeftRight,
    title: "Skills exchanges",
    description:
      "Cooperation based on sharing expertise, according to the agreements concluded.",
  },
]

export default function PartnershipsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 py-20 text-white">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 border border-cyan-400/40 bg-cyan-400/10 text-cyan-400">
            <Handshake className="mr-1 h-3.5 w-3.5" />
            Companies and partners
          </Badge>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Building useful links
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-blue-100">
            ABS wishes to develop relations with companies, institutions, professional organisations
            and development actors in order to bring training closer to the realities of the field.
          </p>
        </div>
      </section>

      {/* Forms of collaboration — document V3, §11.1 */}
      <section className="container mx-auto py-16">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-bold text-blue-900">Collaborations in the service of training</h2>
            <p className="mb-8 text-slate-600">
              These relations can take different forms, depending on the agreements concluded between
              ABS and its partners.
            </p>
            <div className="grid gap-5 sm:grid-cols-2">
              {collaborations.map((item) => (
                <Card key={item.title} className="border-slate-200">
                  <CardContent className="pt-6">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-700/10">
                      <item.icon className="h-5 w-5 text-blue-700" />
                    </div>
                    <h3 className="mb-1 font-bold text-blue-900">{item.title}</h3>
                    <p className="text-sm text-slate-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-md">
              <Image
                src="/images/documents/v3-image3.jpg"
                alt="ABS leadership in a working meeting with officials"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-3 text-sm text-slate-500">
              Campus life: students in constant contact with professional realities.
            </p>
          </div>
        </div>
      </section>

      {/* Proposing a collaboration — document V3, §11.2 */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto">
          <Card className="mx-auto max-w-3xl border-slate-200 shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-900">Propose a collaboration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-slate-600">
                Do you represent a company, an institution or an organisation and would like to talk
                with ABS? Present your organisation, your field of activity and the form of
                collaboration you have in mind. The team will review your proposal and get back to
                you according to the possibilities and priorities of the institution.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-blue-700 text-white hover:bg-blue-900">
                  Propose a partnership
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Publication rule — document V3, §11.3 */}
      <section className="container mx-auto py-12">
        <div className="mx-auto flex max-w-3xl items-start gap-4 rounded-xl border border-amber-200 bg-amber-50 p-6">
          <ShieldCheck className="mt-0.5 h-6 w-6 shrink-0 text-amber-600" />
          <div>
            <h2 className="mb-1 font-bold text-amber-900">Note on the publication of partners</h2>
            <p className="text-sm text-amber-800">
              Only partners who have given their consent and whose relationship with ABS can be
              documented are displayed on this page. No logo, name or mention of "official partner"
              is used without authorisation and a verifiable agreement.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
