import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import { ApplicationForm } from "@/components/forms/application-form"

export const metadata: Metadata = buildMetadata({
  title: "Candidature Master | African Business School (ABS)",
  description: "Candidature en Master (Bac+3) à l'ABS : formulaire officiel en ligne, dossier de candidature et mise en situation professionnelle.",
  path: "/admissions/graduate/apply",
})

export default function GraduateApplicationPage() {
  return (
    <div className="bg-slate-50 py-10">
      <div className="container mx-auto px-4">
        <ApplicationForm level="graduate" />
      </div>
    </div>
  )
}
