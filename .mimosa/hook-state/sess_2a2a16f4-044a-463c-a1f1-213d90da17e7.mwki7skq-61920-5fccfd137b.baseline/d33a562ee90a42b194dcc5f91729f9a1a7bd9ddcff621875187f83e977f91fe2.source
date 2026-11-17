import type { Metadata } from "next"
import Link from "next/link"
import { buildMetadata } from "@/lib/seo"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ApplicationForm } from "@/components/forms/application-form"
import { CheckCircle2, FileText, GraduationCap, Globe2, UserCheck } from "lucide-react"

export const metadata: Metadata = buildMetadata({
  title: "Candidater — Apply to African Business School (ABS)",
  description:
    "Candidature en ligne à l'ABS (African Business School, Bamako) : Bachelor, Master ou parcours international. Formulaire officiel et suivi par numéro de référence.",
  path: "/apply",
})

const steps = [
  { icon: FileText, title: "1. Préparez votre dossier", text: "Acte de naissance, relevés, photos, lettre de motivation — la liste complète vous est confirmée après l'envoi." },
  { icon: UserCheck, title: "2. Test d'entrée", text: "Entretien de motivation, évaluation du profil de compétences et test d'anglais avec parcours de progression." },
  { icon: GraduationCap, title: "3. Décision d'admission", text: "Le registrariat étudie votre dossier et vous notifie la décision par email." },
  { icon: Globe2, title: "4. Inscription", text: "Finalisez votre inscription et rejoignez la communauté ABS à la rentrée de votre choix." },
]

const assurances = [
  "Système LMD reconnu (Licence, Master, Doctorat) et crédits ECTS transférables",
  "Pédagogie 80 % pratique / 20 % théorie : projets réels, stages, voyages d'études",
  "Anglais et intelligence artificielle intégrés dans tous les cursus",
  "Accompagnement personnalisé et coaching vers l'employabilité",
]

export default function ApplyPage() {
  return (
    <div className="bg-slate-50 pb-14">
      {/* Hero */}
      <section className="relative overflow-hidden bg-blue-950 py-16 text-white">
        <div className="container relative mx-auto px-4">
          <p className="font-semibold uppercase tracking-[0.25em] text-cyan-300">Apply to African Business School (ABS)</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Faites le premier pas vers votre avenir à l&apos;African Business School
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-blue-100">
            Choisissez le parcours qui correspond à votre projet. Le formulaire officiel enregistrera votre dossier dans
            le système d&apos;admissions de l&apos;African Business School (ABS) avec un numéro de référence personnel.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {assurances.map((a) => (
              <li key={a} className="flex items-start gap-2 text-sm text-blue-50">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-cyan-300" />
                {a}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Étapes */}
      <section className="container mx-auto px-4 py-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <Icon className="size-6 text-cyan-600" />
              <h2 className="mt-3 font-semibold text-slate-900">{title}</h2>
              <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Formulaires */}
      <section className="container mx-auto px-4">
        <Tabs defaultValue="undergraduate" className="w-full">
          <TabsList className="mx-auto grid w-full max-w-2xl grid-cols-1 md:grid-cols-3">
            <TabsTrigger value="undergraduate">Bachelor (Licence)</TabsTrigger>
            <TabsTrigger value="graduate">Master</TabsTrigger>
            <TabsTrigger value="international">International</TabsTrigger>
          </TabsList>
          <TabsContent value="undergraduate" className="mt-6">
            <ApplicationForm level="undergraduate" />
          </TabsContent>
          <TabsContent value="graduate" className="mt-6">
            <ApplicationForm level="graduate" />
          </TabsContent>
          <TabsContent value="international" className="mt-6">
            <ApplicationForm level="international" />
          </TabsContent>
        </Tabs>
      </section>

      {/* Aide */}
      <section className="container mx-auto px-4 pt-12 text-center">
        <p className="text-slate-600">
          Une question sur votre dossier ?{" "}
          <Link href="/admissions" className="font-semibold text-blue-700 hover:underline">
            Consultez les conditions d&apos;admission
          </Link>{" "}
          ou{" "}
          <Link href="/contact" className="font-semibold text-blue-700 hover:underline">
            contactez le bureau des admissions
          </Link>{" "}
          (admissions@abs-univ.com · +223 78 14 14 88).
        </p>
      </section>
    </div>
  )
}
