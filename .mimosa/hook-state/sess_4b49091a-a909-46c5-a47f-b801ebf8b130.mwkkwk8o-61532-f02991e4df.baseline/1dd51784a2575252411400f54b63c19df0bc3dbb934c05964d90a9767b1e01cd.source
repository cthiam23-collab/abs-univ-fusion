"use client"

import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react"

type Status = "idle" | "submitting" | "success" | "error"

const RECIPIENTS = [
  { value: "general", label: "Demande générale" },
  { value: "admissions", label: "Admissions Bachelor" },
  { value: "graduate_admissions", label: "Admissions Master" },
  { value: "international", label: "Étudiants internationaux" },
  { value: "library", label: "Bibliothèque" },
  { value: "financial", label: "Aide financière" },
  { value: "careers", label: "Services carrières" },
]

const initialForm = {
  nom: "",
  email: "",
  telephone: "",
  destinataire: "general",
  sujet: "",
  message: "",
}

export function ContactForm() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState<Status>("idle")
  const [error, setError] = useState<string | null>(null)

  const update = (field: keyof typeof initialForm) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => setForm((f) => ({ ...f, [field]: e.target.value }))

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("submitting")
    setError(null)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.nom,
          email: form.email,
          phone: form.telephone,
          department: form.destinataire,
          subject: form.sujet,
          message: form.message,
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
    return (
      <div className="flex flex-col items-center gap-4 rounded-xl border border-green-200 bg-green-50 p-8 text-center">
        <CheckCircle2 className="h-12 w-12 text-green-600" />
        <h3 className="text-xl font-bold text-green-900">Message envoyé !</h3>
        <p className="max-w-md text-sm text-green-800">
          Notre équipe vous répond sous 48h ouvrées. Merci de nous avoir contactés.
        </p>
        <Button onClick={reset} variant="outline" className="border-green-600 text-green-700 hover:bg-green-100">
          Envoyer un autre message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {status === "error" && error && (
        <div className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
          <span>{error}</span>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="contact-nom">
            Nom complet <span className="text-red-600">*</span>
          </Label>
          <Input
            id="contact-nom"
            name="nom"
            required
            value={form.nom}
            onChange={update("nom")}
            placeholder="Votre nom et prénom"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-email">
            Adresse email <span className="text-red-600">*</span>
          </Label>
          <Input
            id="contact-email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={update("email")}
            placeholder="vous@exemple.com"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="contact-telephone">Téléphone</Label>
          <Input
            id="contact-telephone"
            name="telephone"
            type="tel"
            value={form.telephone}
            onChange={update("telephone")}
            placeholder="+223 ..."
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-destinataire">Destinataire</Label>
          <select
            id="contact-destinataire"
            name="destinataire"
            value={form.destinataire}
            onChange={update("destinataire")}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700"
          >
            {RECIPIENTS.map((r) => (
              <option key={r.value} value={r.value}>
                {r.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-sujet">
          Sujet <span className="text-red-600">*</span>
        </Label>
        <Input
          id="contact-sujet"
          name="sujet"
          required
          value={form.sujet}
          onChange={update("sujet")}
          placeholder="Objet de votre message"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-message">
          Message <span className="text-red-600">*</span>
        </Label>
        <Textarea
          id="contact-message"
          name="message"
          required
          rows={6}
          value={form.message}
          onChange={update("message")}
          placeholder="Écrivez votre message ici…"
        />
      </div>

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
          "Envoyer le message"
        )}
      </Button>
    </form>
  )
}
