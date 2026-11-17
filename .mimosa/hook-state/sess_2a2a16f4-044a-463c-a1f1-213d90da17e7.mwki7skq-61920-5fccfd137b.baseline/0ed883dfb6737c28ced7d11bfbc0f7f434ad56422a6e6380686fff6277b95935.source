import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Briefcase,
  Info,
  Table2,
  Target,
  Lightbulb,
  DoorOpen,
  MessageCircle,
  Mail,
  Phone,
} from "lucide-react"
import { WHATSAPP_URL } from "@/lib/constants"

export const metadata: Metadata = buildMetadata({
  title: "Master in Business Administration (MBA) | ABS",
  description:
    "Master in Business Administration (MBA) at ABS in Bamako: management, strategy, governance and organisational leadership. 2 years, 4 semesters, 120 credits. Opening confirmed by the Direction for each academic year.",
  path: "/programs/masters/mba",
  locale: "en",
})

const infos = [
  ["Degree", "Master — 2 years, 4 semesters, 120 credits (LMD framework)"],
  ["Location", "Bamako — Hamdallaye ACI 2000"],
  ["Languages", "French / English (English every semester)"],
  [
    "Indicative annual tuition",
    "1 500 000 FCFA / year (M1, M2) — written confirmation required for 2026–2027",
  ],
  ["Application fee", "15 000 FCFA"],
  [
    "Thesis defence fee",
    "150 000 FCFA for the Master — amount to be confirmed for 2026–2027",
  ],
]

export default function MBAPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mb-10">
        <Badge variant="outline" className="mb-4">
          <Briefcase className="size-4 mr-1" /> Master — area of study
        </Badge>
        <h1 className="text-4xl font-bold text-primary mb-4">
          Master in Business Administration (MBA)
        </h1>
        <p className="text-xl text-muted-foreground mb-4">
          Train executives able to deepen their expertise in management, strategy, governance and organisational
          leadership. The public presentation of this track emphasises management, strategy, governance, organisation
          and performance leadership.
        </p>
        <div className="flex items-start gap-2 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
          <Info className="mt-0.5 size-4 shrink-0" />
          <p>
            This track is an area of study to be confirmed by the Direction before being displayed as an open
            admission: the curriculum, prerequisites, admission procedures and opening are all subject to validation.
            Contact the administration to check the status of this track for the relevant academic year.
          </p>
        </div>
      </div>

      {/* Key information */}
      <Card className="mb-10">
        <CardHeader>
          <CardTitle className="text-xl text-primary flex items-center gap-2">
            <Table2 className="size-5" /> Key information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <table className="w-full text-sm">
            <tbody>
              {infos.map(([label, value]) => (
                <tr key={label} className="border-b last:border-0">
                  <td className="py-2 pr-4 font-medium text-foreground align-top whitespace-nowrap w-56">
                    {label}
                  </td>
                  <td className="py-2 text-muted-foreground">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2 mb-10">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-primary flex items-center gap-2">
              <Target className="size-5" /> Objectives
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <p>Deepen expertise in organisational management, strategy and governance.</p>
            <p>Develop the ability to lead organisational performance.</p>
            <p>
              Prepare students to take on decision-making responsibilities within companies, public administrations
              and organisations, in line with the deepening and specialisation ethos of the ABS Master&apos;s cycle.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-primary flex items-center gap-2">
              <Lightbulb className="size-5" /> Skills developed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Management and leadership of organisations</li>
              <li>Analysis and formulation of strategy</li>
              <li>Governance and structuring of organisations</li>
              <li>Performance leadership</li>
            </ul>
            <p className="text-xs text-muted-foreground italic mt-3">
              Skills derived strictly from the track&apos;s presentation sheet; the detailed curriculum and skills
              frameworks remain to be validated.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 mb-10">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-primary flex items-center gap-2">
              <DoorOpen className="size-5" /> Admission requirements
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <p>
              <span className="font-medium text-foreground">Entry into Master 1:</span> a Licence (Bachelor&apos;s
              degree) or recognised equivalent qualification in a relevant field, subject to review of the academic
              record (transcripts of the three years of the Licence, cover letter, curriculum vitae).
            </p>
            <p>
              <span className="font-medium text-foreground">Entry into Master 2:</span> Master 1 or an equivalent
              qualification in the field, subject to validation of prerequisites and the academic record.
            </p>
            <p>
              Submitting an application does not guarantee automatic admission; every application is subject to
              review of the file and to the decision of the Office of Academic Affairs.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-primary flex items-center gap-2">
              <Briefcase className="size-5" /> Indicative career outcomes
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <p>
              Indicatively, this Master&apos;s degree can prepare graduates for responsibilities in management,
              strategic leadership and governance within companies, public administrations and organisations,
              depending on each graduate&apos;s track and experience.
            </p>
            <p className="text-xs italic">
              Career outcomes are perspectives, not guarantees of employment.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Call to action */}
      <Card className="bg-secondary">
        <CardContent className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 py-8">
          <div>
            <h2 className="text-2xl font-bold text-primary mb-2">
              Would you like to apply for this Master&apos;s programme?
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Contact the ABS team to confirm the admission requirements, supporting documents, key dates and
              available places.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 text-sm text-muted-foreground mt-3">
              <span className="flex items-center gap-2">
                <Phone className="size-4" /> +223 78 14 14 88
              </span>
              <span className="flex items-center gap-2">
                <Mail className="size-4" /> abs.mail1290@gmail.com
              </span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link href="/contact">
              <Button size="lg">Request information</Button>
            </Link>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline">
                <MessageCircle className="size-4 mr-2" /> WhatsApp
              </Button>
            </a>
            <Link href="/apply">
              <Button size="lg" variant="secondary">
                Apply now
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
