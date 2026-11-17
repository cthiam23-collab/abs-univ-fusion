import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import { ApplicationForm } from "@/components/forms/application-form"

export const metadata: Metadata = buildMetadata({
  title: "Candidature internationale | African Business School (ABS)",
  description:
    "Étudiants internationaux : rejoignez l'ABS à Bamako. Formulaire en ligne avec accompagnement visa et logement.",
  path: "/apply/international",
})

export default function InternationalApplyPage() {
  return (
    <div className="bg-slate-50 py-10">
      <div className="container mx-auto px-4">
        <ApplicationForm level="international" />
      </div>
    </div>
  )
}
