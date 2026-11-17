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
  { value: "informations_formations", label: "Informationen zu den Studiengängen" },
  { value: "conditions_admission", label: "Zulassungsbedingungen" },
  { value: "frais_scolarite", label: "Studiengebühren" },
  { value: "bourses_reductions", label: "Stipendien und Ermäßigungen" },
  { value: "constitution_dossier", label: "Zusammenstellung des Dossiers" },
  { value: "autres_renseignements", label: "Weitere Auskünfte" },
]

// Formation souhaitée — document V3, §14.2.A
const FORMATIONS = [
  { value: "licence", label: "Licence (Bachelorabschluss)" },
  { value: "master", label: "Master" },
  { value: "autre", label: "Sonstiges Anliegen" },
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
      <h3 className="text-xl font-bold text-green-900">Ihr Anliegen wurde erfolgreich übermittelt!</h3>
      <div className="max-w-md space-y-2 text-sm text-green-800">
        <p>Vielen Dank, dass Sie Ihr Interesse an der ABS — African Business School bekundet haben.</p>
        <p>Unser Verwaltungsteam wird Ihr Anliegen zur Kenntnis nehmen und sich schnellstmöglich mit Ihnen in Verbindung setzen.</p>
        <p>
          <strong>Hinweis:</strong> Das Absenden dieses Formulars stellt weder eine Zulassung noch eine
          Terminbestätigung dar.
        </p>
        <p className="font-semibold">ABS – Ihre Zukunft, unser Engagement.</p>
      </div>
      <Button onClick={onReset} variant="outline" className="border-green-600 text-green-700 hover:bg-green-100">
        Ein weiteres Anliegen senden
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
        `Bitte geben Sie eine E-Mail-Adresse an, damit wir Ihr Anliegen bearbeiten können, oder kontaktieren Sie uns direkt telefonisch oder per WhatsApp unter ${WHATSAPP_NUMBER}.`,
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
          subject: OBJETS.find((o) => o.value === form.objet)?.label ?? "Anfrage für Informationen",
          message: [
            `Gewünschte Ausbildung: ${FORMATIONS.find((f) => f.value === form.formation)?.label ?? form.formation}`,
            form.filiere.trim() ? `Gewünschter Studiengang oder Schwerpunkt: ${form.filiere.trim()}` : null,
            form.message.trim() || null,
          ]
            .filter(Boolean)
            .join("\n"),
        }),
      })
      const json = await res.json()
      if (!res.ok || !json.success) {
        setError(json.error || "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.")
        setStatus("error")
        return
      }
      setStatus("success")
    } catch {
      setError("Die Nachricht konnte nicht gesendet werden. Bitte prüfen Sie Ihre Verbindung und versuchen Sie es erneut.")
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
        Mit diesem Formular können Sie ein Informationsanliegen übermitteln und einen Rückruf beim
        Verwaltungsteam von ABS anfragen.
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="recontact-nom">
            Name und Vorname(n) <span className="text-red-600">*</span>
          </Label>
          <Input
            id="recontact-nom"
            name="nom"
            required
            value={form.nom}
            onChange={update("nom")}
            placeholder="Ihr Name und Ihre Vorname(n)"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="recontact-telephone">
            Telefon / WhatsApp <span className="text-red-600">*</span>
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
          <Label htmlFor="recontact-email">E-Mail-Adresse (optional)</Label>
          <Input
            id="recontact-email"
            name="email"
            type="email"
            value={form.email}
            onChange={update("email")}
            placeholder="sie@beispiel.com"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="recontact-formation">
            Gewünschte Ausbildung <span className="text-red-600">*</span>
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
          <Label htmlFor="recontact-filiere">Gewünschter Studiengang oder Schwerpunkt</Label>
          <Input
            id="recontact-filiere"
            name="filiere"
            value={form.filiere}
            onChange={update("filiere")}
            placeholder="Z. B.: angestrebter Studiengang oder Schwerpunkt"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="recontact-objet">
            Gegenstand des Anliegens <span className="text-red-600">*</span>
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
        <Label htmlFor="recontact-message">Ergänzende Nachricht (optional)</Label>
        <Textarea
          id="recontact-message"
          name="message"
          rows={5}
          value={form.message}
          onChange={update("message")}
          placeholder="Beschreiben Sie kurz Ihr Anliegen."
        />
      </div>

      {/* Texte d'aide du formulaire — document V3, §13 */}
      <p className="text-sm text-slate-600">
        Beschreiben Sie kurz Ihr Anliegen. Die Pflichtfelder beschränken sich auf die Informationen, die für eine
        Antwort notwendig sind. Vermeiden Sie es, offizielle Dokumente oder sensible Daten über dieses Formular zu
        senden.
      </p>

      {/* Protection des données personnelles — document V3, §14.2.D */}
      <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
        <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
        <p>
          Die erhobenen Informationen sind ausschließlich für die Bearbeitung von Informationsanliegen und für die
          Betreuung von Interessenten und Bewerbern bestimmt. Dieses Formular verlangt keine sensiblen Dokumente
          (Ausweispapiere, Diplome, Zeugnisse): Diese Dokumente werden später über die von der Verwaltung
          angegebenen offiziellen und sicheren Kanäle übermittelt.
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
            Wird gesendet…
          </>
        ) : (
          "Rückkontakt wünschen"
        )}
      </Button>
    </form>
  )
}
