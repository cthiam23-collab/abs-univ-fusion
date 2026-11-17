import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Globe2,
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
  title: "Master en Management International | ABS",
  description: "Master en Management International d'ABS à Bamako : stratégie, gestion interculturelle, développement international et pilotage d'activités transfrontalières. 2 ans, 4 semestres, 120 crédits.",
  path: "/programs/masters/international-business",
})

const infos = [
  ["Diplôme", "Master — 2 ans, 4 semestres, 120 crédits (cadre LMD)"],
  ["Lieu", "Bamako — Hamdallaye ACI 2000"],
  ["Langues", "Français / anglais (anglais à chaque semestre)"],
  [
    "Tarif annuel indicatif",
    "1 500 000 FCFA / an (M1, M2) — confirmation écrite 2026–2027 requise",
  ],
  ["Frais de dossier", "15 000 FCFA"],
  [
    "Frais de soutenance",
    "150 000 FCFA pour le Master — montant à confirmer pour 2026–2027",
  ],
]

export default function InternationalBusinessPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mb-10">
        <Badge variant="outline" className="mb-4">
          <Globe2 className="size-4 mr-1" /> Master — axe de formation
        </Badge>
        <h1 className="text-4xl font-bold text-primary mb-4">Master en Management International</h1>
        <p className="text-xl text-muted-foreground mb-4">
          Former des cadres capables d&apos;approfondir la stratégie, la gestion interculturelle, le développement
          international et le pilotage d&apos;activités transfrontalières, dans un environnement économique régional et
          international en évolution.
        </p>
        <div className="flex items-start gap-2 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
          <Info className="mt-0.5 size-4 shrink-0" />
          <p>
            Ce parcours correspond à un axe de formation à confirmer par la Direction avant affichage comme admission
            ouverte&nbsp;: la maquette, les prérequis, les modalités d&apos;admission et l&apos;ouverture sont à
            valider. Contactez l&apos;administration pour vérifier la situation du parcours pour la rentrée concernée.
          </p>
        </div>
      </div>

      {/* Informations clés */}
      <Card className="mb-10">
        <CardHeader>
          <CardTitle className="text-xl text-primary flex items-center gap-2">
            <Table2 className="size-5" /> Informations clés
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
              <Target className="size-5" /> Objectifs
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <p>
              Approfondir la stratégie appliquée aux activités menées au-delà des frontières nationales.
            </p>
            <p>
              Développer la gestion interculturelle et la capacité à piloter le développement international
              d&apos;une organisation, conformément à la dynamique d&apos;approfondissement et de spécialisation du
              cycle Master d&apos;ABS.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-primary flex items-center gap-2">
              <Lightbulb className="size-5" /> Compétences développées
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Stratégie et management international</li>
              <li>Gestion interculturelle</li>
              <li>Développement international des activités</li>
              <li>Pilotage d&apos;activités transfrontalières</li>
            </ul>
            <p className="text-xs text-muted-foreground italic mt-3">
              Compétences dérivées strictement de la fiche de présentation de l&apos;axe&nbsp;; la maquette détaillée
              et les référentiels de compétences restent à valider.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 mb-10">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-primary flex items-center gap-2">
              <DoorOpen className="size-5" /> Conditions d&apos;accès
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <p>
              <span className="font-medium text-foreground">Accès en Master 1&nbsp;:</span> Licence ou diplôme reconnu
              équivalent dans un domaine pertinent, avec examen du dossier académique (relevés des trois années de
              Licence, lettre de motivation, curriculum vitae).
            </p>
            <p>
              <span className="font-medium text-foreground">Accès en Master 2&nbsp;:</span> Master 1 ou diplôme
              équivalent dans le domaine, selon la validation des prérequis et du parcours académique.
            </p>
            <p>
              Le dépôt d&apos;un dossier ne vaut pas admission automatique&nbsp;; toute candidature est soumise à
              l&apos;étude du dossier et à la décision de la Direction des Études.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-primary flex items-center gap-2">
              <Globe2 className="size-5" /> Débouchés indicatifs
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <p>
              À titre indicatif, ce Master peut préparer à des responsabilités liées au développement international et
              au pilotage d&apos;activités transfrontalières dans les entreprises, les institutions et les
              organisations opérant à l&apos;échelle régionale ou internationale, selon le parcours et
              l&apos;expérience de chaque diplômé.
            </p>
            <p className="text-xs italic">
              Les débouchés sont des perspectives, pas des garanties d&apos;emploi.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Appel à l'action */}
      <Card className="bg-secondary">
        <CardContent className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 py-8">
          <div>
            <h2 className="text-2xl font-bold text-primary mb-2">
              Vous souhaitez candidater à ce Master&nbsp;?
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Contactez l&apos;équipe de ABS pour vérifier les conditions d&apos;admission, les pièces à fournir, le
              calendrier et les places disponibles.
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
              <Button size="lg">Demander des informations</Button>
            </Link>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline">
                <MessageCircle className="size-4 mr-2" /> WhatsApp
              </Button>
            </a>
            <Link href="/apply">
              <Button size="lg" variant="secondary">
                Candidater
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
