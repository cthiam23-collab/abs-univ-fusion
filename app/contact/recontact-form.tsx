"use client"

import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Loader2, CheckCircle2, AlertCircle, ShieldCheck } from "lucide-react"
import { WHATSAPP_NUMBER } from "@/lib/constants"

type Status = "idle" | "submitting" | "success" | "error"

// Objet de la demande — document V3, §14.2.A
const OBJETS = [
  { value: "informations_formations", label: "Informations sur les formations" },
  { value: "conditions_admission", label: "Conditions d'admission" },
  { value: "frais_scolarite", label: "Frais de scolarité" },
  { value: "bourses_reductions", label: "Bourses et réductions" },
  { value: "constitution_dossier", label: "Constitution du dossier" },
  { value: "autres_renseignements", label: "Autres renseignements" },
]

// Formation souhaitée — document V3, §14.2.A
const FORMATIONS = [
  { value: "licence", label: "Licence" },
  { value: "master", label: "Master" },
  { value: "autre", label: "Autre demande" },
]

const initialForm = {
  nom: "",
  telephone: "",
  email: "",
  formation: "licence",
  filiere: "",
  objet: "informations_formations",
  message: "",
}

// Message de confirmation automatique — document V3, §14.2.C
function ConfirmationMessage({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-xl border border-green-200 bg-green-50 p-8 text-center">
      <CheckCircle2 className="h-12 w-12 text-green-600" />
      <h3 className="text-xl font-bold text-green-900">Votre demande a bien été transmise !</h3>
      <div className="max-w-md space-y-2 text-sm text-green-800">
        <p>Merci d&apos;avoir manifesté votre intérêt pour ABS — African Business School.</p>
        <p>Notre équipe administrative prendra connaissance de votre demande et vous recontactera dans les meilleurs délais.</p>
        <p>
          <strong>À noter :</strong> l&apos;envoi de ce formulaire ne constitue ni une admission ni une confirmation de rendez-vous.
        </p>
        <p className="font-semibold">ABS – Votre avenir, notre engagement.</p>
      </div>
      <Button onClick={onReset} variant="outline" className="border-green-600 text-green-700 hover:bg-green-100">
        Envoyer une autre demande
      </Button>
    </div>
  )
}

export function RecontactForm() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState<Status>("idle")
  const [error, setError] = useState<string | null>(null)

  const update =
    (field: keyof typeof initialForm) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }))

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)

    // L'API de contact exige une adresse e-mail valide ; le champ est présenté
    // comme facultatif dans le document V3 (§14.2.A) mais reste nécessaire
    // pour l'envoi tant que le service de messagerie ne gère pas le téléphone seul.
    if (!form.email.trim()) {
      setError(
        `Merci de renseigner une adresse e-mail pour permettre le suivi de votre demande, ou contactez-nous directement par téléphone ou WhatsApp au ${WHATSAPP_NUMBER}.`,
      )
      setStatus("error")
      return
    }

    setStatus("submitting")
    try {
      // Même wiring d'envoi que le formulaire de contact existant (/api/contact).
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.nom,
          email: form.email,
          phone: form.telephone,
          department: "admissions",
          subject: OBJETS.find((o) => o.value === form.objet)?.label ?? "Demande d'information",
          message: [
            `Formation souhaitée : ${FORMATIONS.find((f) => f.value === form.formation)?.label ?? form.formation}`,
            form.filiere.trim() ? `Filière ou parcours souhaité : ${form.filiere.trim()}` : null,
            form.message.trim() || null,
          ]
            .filter(Boolean)
            .join("\n"),
        }),
      })
      const json = await res.json()
      if (!res.ok || !json.success) {
        setError(json.error || "Une erreur est survenue. Veuillez réessayer.")
        setStatus("error")
        return
      }
      setStatus("success")
    } catch {
      setError("Impossible d'envoyer le message. Vérifiez votre connexion et réessayez.")
      setStatus("error")
    }
  }

  function reset() {
    setForm(initialForm)
    setStatus("idle")
    setError(null)
  }

  if (status === "success") {
    return <ConfirmationMessage onReset={reset} />
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {status === "error" && error && (
        <div className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
          <span>{error}</span>
        </div>
      )}

      <p className="rounded-lg bg-blue-50 p-4 text-sm text-slate-700">
        Ce formulaire permet de transmettre une demande d&apos;information et de solliciter un rappel
        auprès de l&apos;équipe administrative de ABS.
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="recontact-nom">
            Nom et prénom(s) <span className="text-red-600">*</span>
          </Label>
          <Input
            id="recontact-nom"
            name="nom"
            required
            value={form.nom}
            onChange={update("nom")}
            placeholder="Votre nom et prénom(s)"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="recontact-telephone">
            Téléphone / WhatsApp <span className="text-red-600">*</span>
          </Label>
          <Input
            id="recontact-telephone"
            name="telephone"
            type="tel"
            required
            value={form.telephone}
            onChange={update("telephone")}
            placeholder="+223 ..."
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="recontact-email">Adresse e-mail (facultative)</Label>
          <Input
            id="recontact-email"
            name="email"
            type="email"
            value={form.email}
            onChange={update("email")}
            placeholder="vous@exemple.com"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="recontact-formation">
            Formation souhaitée <span className="text-red-600">*</span>
          </Label>
          <select
            id="recontact-formation"
            name="formation"
            value={form.formation}
            onChange={update("formation")}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700"
          >
            {FORMATIONS.map((f) => (
              <option key={f.value} value={f.value}>
                {f.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="recontact-filiere">Filière ou parcours souhaité</Label>
          <Input
            id="recontact-filiere"
            name="filiere"
            value={form.filiere}
            onChange={update("filiere")}
            placeholder="Ex. : filière ou parcours envisagé"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="recontact-objet">
            Objet de la demande <span className="text-red-600">*</span>
          </Label>
          <select
            id="recontact-objet"
            name="objet"
            value={form.objet}
            onChange={update("objet")}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700"
          >
            {OBJETS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="recontact-message">Message complémentaire (facultatif)</Label>
        <Textarea
          id="recontact-message"
          name="message"
          rows={5}
          value={form.message}
          onChange={update("message")}
          placeholder="Décrivez brièvement votre demande."
        />
      </div>

      {/* Texte d'aide du formulaire — document V3, §13 */}
      <p className="text-sm text-slate-600">
        Décrivez brièvement votre demande. Les champs obligatoires sont limités aux informations
        nécessaires pour vous répondre. Évitez d&apos;envoyer des documents officiels ou des données
        sensibles via ce formulaire.
      </p>

      {/* Protection des données personnelles — document V3, §14.2.D */}
      <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
        <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
        <p>
          Les informations collectées sont exclusivement destinées au traitement des demandes
          d&apos;information et au suivi des prospects et candidats. Ce formulaire ne demande pas de
          documents sensibles (pièces d&apos;identité, diplômes, relevés de notes) : ces documents
          seront transmis ultérieurement par les canaux officiels et sécurisés indiqués par
          l&apos;administration.
        </p>
      </div>

      {/* Bouton de soumission — document V3, §14.2.E */}
      <Button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-blue-700 text-white hover:bg-blue-900 sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Envoi en cours…
          </>
        ) : (
          "Être recontacté"
        )}
      </Button>
    </form>
  )
}
