import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import { ApplicationForm } from "@/components/forms/application-form"

export const metadata: Metadata = buildMetadata({
  title: "Candidature Bachelor | African Business School (ABS)",
  description:
    "Soumettez votre candidature en Bachelor (Licence) à l'ABS : formulaire en ligne, dossier et test d'entrée.",
  path: "/apply/undergraduate",
})

export default function UndergraduateApplyPage() {
  return (
    <div className="bg-slate-50 py-10">
      <div className="container mx-auto px-4">
        <ApplicationForm level="undergraduate" />
      </div>
    </div>
  )
}
