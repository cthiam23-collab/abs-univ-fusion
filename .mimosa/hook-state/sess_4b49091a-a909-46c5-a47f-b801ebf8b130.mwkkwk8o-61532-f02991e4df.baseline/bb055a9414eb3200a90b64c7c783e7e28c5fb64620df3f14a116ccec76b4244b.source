"use client"

import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Loader2, CheckCircle2, AlertCircle, ShieldCheck } from "lucide-react"
import { WHATSAPP_NUMBER } from "@/lib/constants"

type Status = "idle" | "submitting" | "success" | "error"

// Objeto de la solicitud — documento V3, §14.2.A
const OBJETS = [
  { value: "informations_formations", label: "Información sobre las formaciones" },
  { value: "conditions_admission", label: "Condiciones de admisión" },
  { value: "frais_scolarite", label: "Tasas de matrícula" },
  { value: "bourses_reductions", label: "Becas y reducciones" },
  { value: "constitution_dossier", label: "Confección del expediente" },
  { value: "autres_renseignements", label: "Otras consultas" },
]

// Formación deseada — documento V3, §14.2.A
const FORMATIONS = [
  { value: "licence", label: "Licencia (grado)" },
  { value: "master", label: "Máster" },
  { value: "autre", label: "Otra solicitud" },
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

// Mensaje de confirmación automática — documento V3, §14.2.C
function ConfirmationMessage({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-xl border border-green-200 bg-green-50 p-8 text-center">
      <CheckCircle2 className="h-12 w-12 text-green-600" />
      <h3 className="text-xl font-bold text-green-900">¡Su solicitud ha sido enviada correctamente!</h3>
      <div className="max-w-md space-y-2 text-sm text-green-800">
        <p>Gracias por manifestar su interés en la ABS — African Business School.</p>
        <p>Nuestro equipo administrativo tomará conocimiento de su solicitud y le contactará en el menor plazo posible.</p>
        <p>
          <strong>A tener en cuenta :</strong> el envío de este formulario no constituye ni una admisión ni una confirmación de cita.
        </p>
        <p className="font-semibold">ABS – Su futuro, nuestro compromiso.</p>
      </div>
      <Button onClick={onReset} variant="outline" className="border-green-600 text-green-700 hover:bg-green-100">
        Enviar otra solicitud
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

    // La API de contacto exige una dirección de correo electrónico válida ; el campo se presenta
    // como facultativo en el documento V3 (§14.2.A) pero sigue siendo necesario
    // para el envío mientras el servicio de mensajería no gestione el teléfono solo.
    if (!form.email.trim()) {
      setError(
        `Le rogamos indicar una dirección de correo electrónico para permitir el seguimiento de su solicitud, o contáctenos directamente por teléfono o WhatsApp al ${WHATSAPP_NUMBER}.`,
      )
      setStatus("error")
      return
    }

    setStatus("submitting")
    try {
      // Mismo wiring de envío que el formulario de contacto existente (/api/contact).
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.nom,
          email: form.email,
          phone: form.telephone,
          department: "admissions",
          subject: OBJETS.find((o) => o.value === form.objet)?.label ?? "Solicitud de información",
          message: [
            `Formación deseada : ${FORMATIONS.find((f) => f.value === form.formation)?.label ?? form.formation}`,
            form.filiere.trim() ? `Rama o itinerario deseado : ${form.filiere.trim()}` : null,
            form.message.trim() || null,
          ]
            .filter(Boolean)
            .join("\n"),
        }),
      })
      const json = await res.json()
      if (!res.ok || !json.success) {
        setError(json.error || "Se ha producido un error. Por favor, inténtelo de nuevo.")
        setStatus("error")
        return
      }
      setStatus("success")
    } catch {
      setError("No es posible enviar el mensaje. Verifique su conexión e inténtelo de nuevo.")
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
        Este formulario permite transmitir una solicitud de información y pedir que el equipo
        administrativo de ABS se ponga en contacto con usted.
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="recontact-nom">
            Apellidos y nombre <span className="text-red-600">*</span>
          </Label>
          <Input
            id="recontact-nom"
            name="nom"
            required
            value={form.nom}
            onChange={update("nom")}
            placeholder="Sus apellidos y nombre"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="recontact-telephone">
            Teléfono / WhatsApp <span className="text-red-600">*</span>
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
          <Label htmlFor="recontact-email">Dirección de correo electrónico (facultativa)</Label>
          <Input
            id="recontact-email"
            name="email"
            type="email"
            value={form.email}
            onChange={update("email")}
            placeholder="usted@ejemplo.com"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="recontact-formation">
            Formación deseada <span className="text-red-600">*</span>
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
          <Label htmlFor="recontact-filiere">Rama o itinerario deseado</Label>
          <Input
            id="recontact-filiere"
            name="filiere"
            value={form.filiere}
            onChange={update("filiere")}
            placeholder="Ej. : rama o itinerario previsto"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="recontact-objet">
            Objeto de la solicitud <span className="text-red-600">*</span>
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
        <Label htmlFor="recontact-message">Mensaje complementario (facultativo)</Label>
        <Textarea
          id="recontact-message"
          name="message"
          rows={5}
          value={form.message}
          onChange={update("message")}
          placeholder="Describa brevemente su solicitud."
        />
      </div>

      {/* Texto de ayuda del formulario — documento V3, §13 */}
      <p className="text-sm text-slate-600">
        Describa brevemente su solicitud. Los campos obligatorios se limitan a las informaciones
        necesarias para poder responderle. Evite enviar documentos oficiales o datos
        sensibles a través de este formulario.
      </p>

      {/* Protección de los datos personales — documento V3, §14.2.D */}
      <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
        <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
        <p>
          Las informaciones recogidas están exclusivamente destinadas al tratamiento de las solicitudes
          de información y al seguimiento de los interesados y candidatos. Este formulario no solicita
          documentos sensibles (documentos de identidad, diplomas, certificados de notas) : estos documentos
          serán transmitidos posteriormente por los canales oficiales y seguros indicados por
          la administración.
        </p>
      </div>

      {/* Botón de envío — documento V3, §14.2.E */}
      <Button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-blue-700 text-white hover:bg-blue-900 sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Enviando…
          </>
        ) : (
          "Que la contacten"
        )}
      </Button>
    </form>
  )
}
