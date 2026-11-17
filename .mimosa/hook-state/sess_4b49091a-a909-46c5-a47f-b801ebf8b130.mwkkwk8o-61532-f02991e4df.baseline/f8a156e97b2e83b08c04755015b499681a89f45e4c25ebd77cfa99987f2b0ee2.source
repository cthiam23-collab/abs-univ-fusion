import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Info } from "lucide-react"

export const metadata: Metadata = buildMetadata({
  title: "Certifications — Master en Gestion de Projets | ABS",
  description: "Informations sur les certifications éventuellement associées au Master en Gestion de Projets d'ABS : dispositif non documenté, à confirmer auprès de l'administration.",
  path: "/programs/masters/project-management/certifications",
})

export default function ProjectManagementCertificationsPage() {
  return (
    <div className="container py-12 max-w-3xl">
      <h1 className="text-3xl font-bold text-primary mb-4">Certifications</h1>
      <div className="flex items-start gap-2 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900 mb-6">
        <Info className="mt-0.5 size-4 shrink-0" />
        <p>
          Aucune préparation spécifique à une certification professionnelle n&apos;est documentée dans le référentiel
          actuel du Master en Gestion de Projets. Tout dispositif de certification éventuel devra être formalisé et
          approuvé avant tout affichage. Contactez l&apos;administration pour toute question.
        </p>
      </div>
      <Card>
        <CardContent className="flex flex-col sm:flex-row gap-3 py-6">
          <Link href="/programs/masters/project-management">
            <Button variant="secondary">Retour à la fiche du Master</Button>
          </Link>
          <Link href="/contact">
            <Button>Demander des informations</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}
