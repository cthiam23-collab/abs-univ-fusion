"use client"

import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Loader2, CheckCircle2, AlertCircle, ShieldCheck } from "lucide-react"
import { WHATSAPP_NUMBER } from "@/lib/constants"

type Status = "idle" | "submitting" | "success" | "error"

// Subject of the request — document V3, §14.2.A
const OBJETS = [
  { value: "informations_formations", label: "Information about the programmes" },
  { value: "conditions_admission", label: "Admission requirements" },
  { value: "frais_scolarite", label: "Tuition fees" },
  { value: "bourses_reductions", label: "Scholarships and reductions" },
  { value: "constitution_dossier", label: "Compiling the application file" },
  { value: "autres_renseignements", label: "Other enquiries" },
]

// Desired programme — document V3, §14.2.A
const FORMATIONS = [
  { value: "licence", label: "Licence (Bachelor's degree)" },
  { value: "master", label: "Master" },
  { value: "autre", label: "Other enquiry" },
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

// Automatic confirmation message — document V3, §14.2.C
function ConfirmationMessage({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-xl border border-green-200 bg-green-50 p-8 text-center">
      <CheckCircle2 className="h-12 w-12 text-green-600" />
      <h3 className="text-xl font-bold text-green-900">Your request has been successfully submitted!</h3>
      <div className="max-w-md space-y-2 text-sm text-green-800">
        <p>Thank you for expressing your interest in ABS — African Business School.</p>
        <p>Our administrative team will review your request and get back to you as soon as possible.</p>
        <p>
          <strong>Please note:</strong> submitting this form constitutes neither an admission nor a confirmation of an appointment.
        </p>
        <p className="font-semibold">ABS – Your future, our commitment.</p>
      </div>
      <Button onClick={onReset} variant="outline" className="border-green-600 text-green-700 hover:bg-green-100">
        Send another request
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

    // The contact API requires a valid email address; the field is presented
    // as optional in document V3 (§14.2.A) but remains necessary for submission
    // as long as the messaging service does not handle phone-only requests.
    if (!form.email.trim()) {
      setError(
        `Please provide an email address so we can follow up on your request, or contact us directly by phone or WhatsApp at ${WHATSAPP_NUMBER}.`,
      )
      setStatus("error")
      return
    }

    setStatus("submitting")
    try {
      // Same submission wiring as the existing contact form (/api/contact).
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.nom,
          email: form.email,
          phone: form.telephone,
          department: "admissions",
          subject: OBJETS.find((o) => o.value === form.objet)?.label ?? "Information request",
          message: [
            `Desired programme: ${FORMATIONS.find((f) => f.value === form.formation)?.label ?? form.formation}`,
            form.filiere.trim() ? `Desired field or pathway: ${form.filiere.trim()}` : null,
            form.message.trim() || null,
          ]
            .filter(Boolean)
            .join("\n"),
        }),
      })
      const json = await res.json()
      if (!res.ok || !json.success) {
        setError(json.error || "An error occurred. Please try again.")
        setStatus("error")
        return
      }
      setStatus("success")
    } catch {
      setError("Unable to send the message. Please check your connection and try again.")
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
        This form allows you to send an information request and ask for a callback from the ABS
        administrative team.
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="recontact-nom">
            Full name <span className="text-red-600">*</span>
          </Label>
          <Input
            id="recontact-nom"
            name="nom"
            required
            value={form.nom}
            onChange={update("nom")}
            placeholder="Your full name"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="recontact-telephone">
            Phone / WhatsApp <span className="text-red-600">*</span>
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
          <Label htmlFor="recontact-email">Email address (optional)</Label>
          <Input
            id="recontact-email"
            name="email"
            type="email"
            value={form.email}
            onChange={update("email")}
            placeholder="you@example.com"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="recontact-formation">
            Desired programme <span className="text-red-600">*</span>
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
          <Label htmlFor="recontact-filiere">Desired field or pathway</Label>
          <Input
            id="recontact-filiere"
            name="filiere"
            value={form.filiere}
            onChange={update("filiere")}
            placeholder="E.g.: field or pathway you are considering"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="recontact-objet">
            Subject of the request <span className="text-red-600">*</span>
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
        <Label htmlFor="recontact-message">Additional message (optional)</Label>
        <Textarea
          id="recontact-message"
          name="message"
          rows={5}
          value={form.message}
          onChange={update("message")}
          placeholder="Briefly describe your request."
        />
      </div>

      {/* Form help text — document V3, §13 */}
      <p className="text-sm text-slate-600">
        Briefly describe your request. Required fields are limited to the information needed to
        reply to you. Avoid sending official documents or sensitive data through this form.
      </p>

      {/* Personal data protection — document V3, §14.2.D */}
      <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
        <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
        <p>
          The information collected is used exclusively to process information requests and to
          follow up on prospects and applicants. This form does not ask for sensitive documents
          (identity documents, diplomas, transcripts): these documents will be sent later through
          the official and secure channels indicated by the administration.
        </p>
      </div>

      {/* Submit button — document V3, §14.2.E */}
      <Button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-blue-700 text-white hover:bg-blue-900 sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending…
          </>
        ) : (
          "Get a callback"
        )}
      </Button>
    </form>
  )
}
