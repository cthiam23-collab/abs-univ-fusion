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
  title: "Entreprises et partenaires | ABS",
  description:
    "Entreprises, institutions et organisations : construisez avec ABS des liens utiles — interventions de professionnels, visites, projets appliqués, stages et conférences à Bamako.",
  path: "/international/partnerships",
})

// Formes de collaboration — document V3, §11.1
const collaborations = [
  {
    icon: Users,
    title: "Interventions de professionnels",
    description:
      "Des professionnels viennent partager leur expérience et éclairer les étudiants sur les réalités des métiers.",
  },
  {
    icon: Building,
    title: "Visites",
    description:
      "Découvertes d'entreprises et d'institutions pour relier les enseignements au terrain.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Projets appliqués",
    description:
      "Travaux menés par les étudiants sur des problématiques réelles proposées par les organisations.",
  },
  {
    icon: Handshake,
    title: "Stages",
    description:
      "Immersions en entreprise permettant de mettre en pratique les compétences acquises en formation.",
  },
  {
    icon: Mic,
    title: "Conférences",
    description:
      "Rencontres et conférences animées avec des acteurs du monde économique et institutionnel.",
  },
  {
    icon: ArrowLeftRight,
    title: "Échanges de compétences",
    description:
      "Coopérations fondées sur un partage d'expertise, selon les accords conclus.",
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
            Entreprises et partenaires
          </Badge>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Construire des liens utiles
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-blue-100">
            ABS souhaite développer des relations avec les entreprises, les institutions, les
            organisations professionnelles et les acteurs du développement afin de rapprocher les
            formations des réalités du terrain.
          </p>
        </div>
      </section>

      {/* Formes de collaboration — document V3, §11.1 */}
      <section className="container mx-auto py-16">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-bold text-blue-900">Des collaborations au service de la formation</h2>
            <p className="mb-8 text-slate-600">
              Ces relations peuvent prendre différentes formes, selon les accords conclus entre ABS
              et ses partenaires.
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
                alt="La direction de ABS en séance de travail avec des officiels"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-3 text-sm text-slate-500">
              La vie du campus : des étudiants en contact permanent avec les réalités professionnelles.
            </p>
          </div>
        </div>
      </section>

      {/* Proposer une collaboration — document V3, §11.2 */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto">
          <Card className="mx-auto max-w-3xl border-slate-200 shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-900">Proposer une collaboration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-slate-600">
                Vous représentez une entreprise, une institution ou une organisation et souhaitez
                échanger avec ABS ? Présentez votre structure, votre domaine d&apos;activité et la
                forme de collaboration envisagée. L&apos;équipe étudiera votre proposition et
                reviendra vers vous selon les possibilités et les priorités de l&apos;institution.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-blue-700 text-white hover:bg-blue-900">
                  Proposer un partenariat
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Règle de publication — document V3, §11.3 */}
      <section className="container mx-auto py-12">
        <div className="mx-auto flex max-w-3xl items-start gap-4 rounded-xl border border-amber-200 bg-amber-50 p-6">
          <ShieldCheck className="mt-0.5 h-6 w-6 shrink-0 text-amber-600" />
          <div>
            <h2 className="mb-1 font-bold text-amber-900">Note sur la publication des partenaires</h2>
            <p className="text-sm text-amber-800">
              Seuls les partenaires ayant donné leur accord et dont la relation avec ABS peut être
              documentée sont affichés sur cette page. Aucun logo, nom ou mention « partenaire
              officiel » n&apos;est utilisé sans autorisation et sans accord vérifiable.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
