"use client"

/*
 * Formulaire de candidature ABS — un composant pour les trois parcours
 * (undergraduate / graduate / international). Enregistre dans la table
 * `applications` via /api/applications et retourne une référence ABS-…
 */

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, Loader2, Send } from "lucide-react"

export type ApplicationLevel = "undergraduate" | "graduate" | "international"

const PROGRAMS: Record<ApplicationLevel, { code: string; name: string }[]> = {
  undergraduate: [
    { code: "BA-ADM", name: "Bachelor — Administration des affaires" },
    { code: "BA-RI", name: "Bachelor — Relations et affaires internationales" },
    { code: "BA-JOU", name: "Bachelor — Journalisme" },
    { code: "BA-INFO", name: "Bachelor — Ingénierie informatique" },
    { code: "BA-GEO", name: "Bachelor — Génie géologique, civil et minier" },
  ],
  graduate: [
    { code: "M-MBA", name: "Master — Administration des Affaires (MBA)" },
    { code: "M-MGP", name: "Master — Management de Projets" },
    { code: "M-FIF", name: "Master — Finance d'Entreprise et Ingénierie Financière" },
    { code: "M-FIN-ISL", name: "Master — Finance Islamique" },
    { code: "M-ACG", name: "Master — Audit et Contrôle de Gestion" },
    { code: "M-SCM", name: "Master — Supply Chain Management" },
    { code: "M-DDRSE", name: "Master — Développement Durable et RSE" },
    { code: "M-GMP", name: "Master — Gouvernance et Management des Marchés Publics" },
    { code: "M-MIB", name: "Master — Management International Business" },
    { code: "M-MRH", name: "Master — Management des Ressources Humaines" },
    { code: "M-INFO", name: "Master — Ingénierie Informatique" },
    { code: "M-GMIN", name: "Master — Génie Minier" },
    { code: "M-JOU", name: "Master — Journalisme" },
    { code: "M-RI", name: "Master — Relations et Affaires Internationales" },
    { code: "M-ENT", name: "Master — Entrepreneuriat" },
    { code: "M-DEF", name: "Master — Stratégie et Politique de Défense" },
  ],
  international: [
    { code: "BA-ADM", name: "Licence (Bachelor) — Administration des affaires" },
    { code: "BA-RI", name: "Licence (Bachelor) — Relations et affaires internationales" },
    { code: "BA-JOU", name: "Licence (Bachelor) — Journalisme" },
    { code: "BA-INFO", name: "Licence (Bachelor) — Ingénierie informatique" },
    { code: "BA-GEO", name: "Licence (Bachelor) — Génie géologique, civil et minier" },
    { code: "M-MBA", name: "Master — Administration des Affaires (MBA)" },
    { code: "M-MGP", name: "Master — Management de Projets" },
    { code: "M-FIF", name: "Master — Finance d'Entreprise et Ingénierie Financière" },
    { code: "M-FIN-ISL", name: "Master — Finance Islamique" },
    { code: "M-SCM", name: "Master — Supply Chain Management" },
    { code: "M-MIB", name: "Master — Management International Business" },
    { code: "M-INFO", name: "Master — Ingénierie Informatique" },
  ],
}

const TITLES: Record<ApplicationLevel, { title: string; description: string }> = {
  undergraduate: {
    title: "Candidature Bachelor (Licence)",
    description: "Ouvert aux titulaires du Baccalauréat ou équivalent. Durée : 3 ans (6 semestres).",
  },
  graduate: {
    title: "Candidature Master",
    description: "Ouvert aux titulaires d'une Licence (Bac+3) ou équivalent. Durée : 2 ans (4 semestres).",
  },
  international: {
    title: "Candidature internationale",
    description: "Étudiants venant de l'étranger : accompagnement visa, logement et intégration.",
  },
}

const ENGLISH_LEVELS = [
  { value: "beginner", label: "Débutant" },
  { value: "intermediate", label: "Intermédiaire" },
  { value: "advanced", label: "Avancé" },
  { value: "fluent", label: "Courant" },
]

export function ApplicationForm({ level }: { level: ApplicationLevel }) {
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [reference, setReference] = useState<string | null>(null)
  const [program, setProgram] = useState("")
  const [motivation, setMotivation] = useState("")

  const meta = TITLES[level]
  const programs = PROGRAMS[level]

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    const fd = new FormData(e.currentTarget)
    const payload: Record<string, unknown> = Object.fromEntries(fd.entries())
    payload.application_type = level
    payload.currently_employed = fd.get("currently_employed") === "on"
    payload.has_recommendation_letter = fd.get("has_recommendation_letter") === "on"
    payload.has_cv = fd.get("has_cv") === "on"
    payload.needs_visa = fd.get("needs_visa") === "on"
    payload.needs_housing = fd.get("needs_housing") === "on"

    setSubmitting(true)
    try {
      const res = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      const json = await res.json()
      if (!res.ok || !json.success) {
        setError(json.error || "Une erreur est survenue. Réessayez ou contactez les admissions.")
      } else {
        setReference(json.data.reference)
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
    } catch {
      setError("Impossible de joindre le serveur. Vérifiez votre connexion et réessayez.")
    } finally {
      setSubmitting(false)
    }
  }

  if (reference) {
    return (
      <Card className="mx-auto max-w-2xl border-cyan-200 bg-cyan-50/50">
        <CardHeader className="text-center">
          <CheckCircle2 className="mx-auto size-14 text-cyan-600" />
          <CardTitle className="mt-3 text-2xl">Candidature enregistrée !</CardTitle>
          <CardDescription className="text-base">
            Merci pour votre candidature {level === "graduate" ? "en Master" : level === "undergraduate" ? "en Bachelor" : "internationale"}.
            Notre bureau des admissions reviendra vers vous par email.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-center">
          <div className="rounded-lg border border-cyan-200 bg-white p-4">
            <p className="text-sm text-slate-500">Votre numéro de référence</p>
            <p className="mt-1 font-mono text-2xl font-bold tracking-wide text-blue-800">{reference}</p>
            <p className="mt-2 text-xs text-slate-500">Conservez ce numéro : il identifie votre dossier auprès du registrariat.</p>
          </div>
          <p className="text-sm text-slate-600">
            Prochaine étape : préparez les pièces demandées (acte de naissance, relevés, photos…). Vous serez convoqué(e)
            au test d&apos;entrée et à l&apos;entretien de motivation.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild className="bg-blue-700 hover:bg-blue-800">
              <a href={`mailto:admissions@abs-univ.com?subject=Candidature ${reference}`}>Contacter les admissions</a>
            </Button>
            <Button variant="outline" onClick={() => { setReference(null); setMotivation(""); setProgram("") }}>
              Soumettre une autre candidature
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="mx-auto max-w-4xl">
      <CardHeader>
        <CardTitle className="text-2xl">{meta.title}</CardTitle>
        <CardDescription>{meta.description}</CardDescription>
      </CardHeader>
      <CardContent>
        {error && (
          <div className="mb-6 rounded-md border border-red-200 bg-red-50 p-4 text-sm text-red-700">{error}</div>
        )}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Identité */}
          <fieldset>
            <legend className="mb-4 text-sm font-bold uppercase tracking-wider text-blue-800">1. Identité du candidat</legend>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="first_name">Prénom *</Label>
                <Input id="first_name" name="first_name" required placeholder="Ex : Mamadou" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last_name">Nom *</Label>
                <Input id="last_name" name="last_name" required placeholder="Ex : Traoré" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input id="email" name="email" type="email" required placeholder="vous@exemple.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Téléphone</Label>
                <Input id="phone" name="phone" type="tel" placeholder="+223 00 00 00 00" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="date_of_birth">Date de naissance</Label>
                <Input id="date_of_birth" name="date_of_birth" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gender">Genre</Label>
                <select
                  id="gender"
                  name="gender"
                  className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
                >
                  <option value="">— Sélectionner —</option>
                  <option value="M">Masculin</option>
                  <option value="F">Féminin</option>
                  <option value="other">Autre</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="country">Pays de résidence</Label>
                <Input id="country" name="country" placeholder="Ex : Mali" defaultValue={level === "international" ? "" : "Mali"} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">Ville</Label>
                <Input id="city" name="city" placeholder="Ex : Bamako" />
              </div>
              {level === "international" && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="passport_number">Numéro de passeport (si disponible)</Label>
                    <Input id="passport_number" name="passport_number" placeholder="Ex : AB1234567" />
                  </div>
                  <div className="flex items-end space-x-6 pb-2">
                    <label className="flex items-center gap-2 text-sm">
                      <input type="checkbox" name="needs_visa" className="size-4" /> Besoin d&apos;un visa étudiant
                    </label>
                    <label className="flex items-center gap-2 text-sm">
                      <input type="checkbox" name="needs_housing" className="size-4" /> Besoin d&apos;un logement
                    </label>
                  </div>
                </>
              )}
            </div>
          </fieldset>

          {/* Choix académique */}
          <fieldset>
            <legend className="mb-4 text-sm font-bold uppercase tracking-wider text-blue-800">2. Choix académique</legend>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="program_select">Programme souhaité *</Label>
                <select
                  id="program_select"
                  required
                  value={program}
                  onChange={(e) => setProgram(e.target.value)}
                  className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
                >
                  <option value="">— Sélectionner un programme —</option>
                  {programs.map((p) => (
                    <option key={p.code} value={p.code}>{p.name}</option>
                  ))}
                </select>
                <input type="hidden" name="program_code" value={program} />
                <input type="hidden" name="program_name" value={programs.find((p) => p.code === program)?.name ?? ""} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="start_term">Rentrée souhaitée</Label>
                <select
                  id="start_term"
                  name="start_term"
                  className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
                >
                  <option value="Septembre 2026">Septembre 2026</option>
                  <option value="Janvier 2027">Janvier 2027</option>
                  <option value="Septembre 2027">Septembre 2027</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="english_level">Niveau d&apos;anglais actuel</Label>
                <select
                  id="english_level"
                  name="english_level"
                  className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
                >
                  <option value="">— Sélectionner —</option>
                  {ENGLISH_LEVELS.map((l) => (
                    <option key={l.value} value={l.value}>{l.label}</option>
                  ))}
                </select>
                <p className="text-xs text-slate-500">Un test d&apos;anglais est passé à l&apos;entrée : l&apos;English Academy propose ensuite un parcours de progression.</p>
              </div>
            </div>
          </fieldset>

          {/* Parcours académique */}
          <fieldset>
            <legend className="mb-4 text-sm font-bold uppercase tracking-wider text-blue-800">3. Parcours académique</legend>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="last_diploma">
                  {level === "graduate" ? "Diplôme de Licence (ou équivalent)" : "Dernier diplôme obtenu"}
                </Label>
                <Input
                  id="last_diploma"
                  name="last_diploma"
                  placeholder={level === "graduate" ? "Ex : Licence en Gestion" : "Ex : Baccalauréat série Sciences Économiques"}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last_institution">Établissement</Label>
                <Input id="last_institution" name="last_institution" placeholder="Ex : Lycée Attabou / Université de Bamako" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="graduation_year">Année d&apos;obtention</Label>
                <Input id="graduation_year" name="graduation_year" type="number" min="1980" max="2026" placeholder="Ex : 2025" />
              </div>
              {level === "graduate" && (
                <div className="space-y-2">
                  <Label htmlFor="experience_years">Années d&apos;expérience professionnelle</Label>
                  <Input id="experience_years" name="experience_years" type="number" min="0" max="45" placeholder="Ex : 3" />
                </div>
              )}
            </div>
            {level === "graduate" && (
              <div className="mt-4 flex flex-wrap gap-x-8 gap-y-2 rounded-md bg-slate-50 p-4">
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" name="currently_employed" className="size-4" /> En activité actuellement (attestation de travail disponible)
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" name="has_cv" className="size-4" /> CV à jour prêt à joindre
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" name="has_recommendation_letter" className="size-4" /> Lettre de recommandation disponible
                </label>
              </div>
            )}
          </fieldset>

          {/* Motivation */}
          <fieldset>
            <legend className="mb-4 text-sm font-bold uppercase tracking-wider text-blue-800">4. Lettre de motivation</legend>
            <Textarea
              name="motivation"
              rows={6}
              value={motivation}
              onChange={(e) => setMotivation(e.target.value)}
              placeholder="Présentez votre personnalité, votre projet professionnel et vos ambitions (15 à 30 lignes recommandées)…"
            />
            <p className="mt-2 text-xs text-slate-500">
              La motivation, le potentiel et les valeurs du candidat sont au cœur de notre sélection.
            </p>
          </fieldset>

          <div className="flex flex-col items-center gap-3 border-t pt-6 sm:flex-row sm:justify-between">
            <p className="text-xs text-slate-500">
              Vos informations sont transmises au registrariat de l&apos;African Business School (ABS) et ne sont utilisées que pour le traitement de votre candidature.
            </p>
            <Button type="submit" size="lg" disabled={submitting} className="w-full bg-blue-700 hover:bg-blue-800 sm:w-auto">
              {submitting ? <Loader2 className="mr-2 size-4 animate-spin" /> : <Send className="mr-2 size-4" />}
              {submitting ? "Envoi en cours…" : "Soumettre ma candidature"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
