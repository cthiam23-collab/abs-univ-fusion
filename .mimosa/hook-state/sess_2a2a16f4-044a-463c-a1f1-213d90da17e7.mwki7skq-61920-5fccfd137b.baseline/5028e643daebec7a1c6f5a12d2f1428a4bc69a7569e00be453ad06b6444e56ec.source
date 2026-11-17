import Link from "next/link"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import { sql } from "@/lib/db"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { getAdminSession } from "./auth"
import { updateApplicationStatus, updateApplicationNotes, updateMessageStatus } from "./actions"

export const metadata: Metadata = buildMetadata({
  title: "Gestion des admissions | African Business School (ABS)",
  description: "Back-office admissions : candidatures et messages de contact",
  path: "/admin/admissions",
})

export const dynamic = "force-dynamic"

/* ------------------------------------------------------------------ */
/* Libellés et badges                                                  */
/* ------------------------------------------------------------------ */

const APPLICATION_STATUSES = ["submitted", "in_review", "interview", "accepted", "rejected", "waitlist"] as const
const MESSAGE_STATUSES = ["new", "read", "answered", "archived"] as const

const APPLICATION_STATUS_LABELS: Record<string, string> = {
  submitted: "Soumise",
  in_review: "En examen",
  interview: "Entretien",
  accepted: "Acceptée",
  rejected: "Refusée",
  waitlist: "Liste d'attente",
}

// submitted=slate, in_review=blue, interview=cyan, accepted=green, rejected=red, waitlist=amber-500
const APPLICATION_STATUS_BADGES: Record<string, string> = {
  submitted: "bg-slate-100 text-slate-700 border-slate-200",
  in_review: "bg-blue-100 text-blue-800 border-blue-200",
  interview: "bg-cyan-100 text-cyan-800 border-cyan-200",
  accepted: "bg-green-100 text-green-800 border-green-200",
  rejected: "bg-red-100 text-red-800 border-red-200",
  waitlist: "bg-amber-500 text-white border-amber-500",
}

const MESSAGE_STATUS_LABELS: Record<string, string> = {
  new: "Nouveau",
  read: "Lu",
  answered: "Répondu",
  archived: "Archivé",
}

// new=blue, read=slate, answered=green, archived=slate
const MESSAGE_STATUS_BADGES: Record<string, string> = {
  new: "bg-blue-100 text-blue-800 border-blue-200",
  read: "bg-slate-100 text-slate-700 border-slate-200",
  answered: "bg-green-100 text-green-800 border-green-200",
  archived: "bg-slate-100 text-slate-500 border-slate-200",
}

const TYPE_LABELS: Record<string, string> = {
  undergraduate: "Licence",
  graduate: "Master",
  international: "International",
}

const TYPE_BADGES: Record<string, string> = {
  undergraduate: "bg-blue-700 text-white",
  graduate: "bg-blue-900 text-white",
  international: "bg-cyan-600 text-white",
}

const DEPARTMENT_LABELS: Record<string, string> = {
  general: "Général",
  admissions: "Admissions",
  graduate_admissions: "Admissions Master",
  international: "International",
  library: "Bibliothèque",
  financial: "Financier",
  careers: "Carrières",
}

function badgeClass(list: Record<string, string>, key: string): string {
  return list[key] ?? "bg-slate-100 text-slate-700 border-slate-200"
}

function formatDate(value: unknown): string {
  if (!value) return "—"
  try {
    return new Date(value as string).toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  } catch {
    return String(value)
  }
}

function ouiNon(value: unknown): string {
  return value === true ? "Oui" : "Non"
}

/* ------------------------------------------------------------------ */
/* Types de lignes                                                     */
/* ------------------------------------------------------------------ */

type ApplicationRow = {
  id: string
  reference: string
  application_type: string
  first_name: string
  last_name: string
  email: string
  phone: string | null
  date_of_birth: string | null
  gender: string | null
  country: string | null
  city: string | null
  address: string | null
  program_code: string | null
  program_name: string
  start_term: string | null
  last_diploma: string | null
  last_institution: string | null
  graduation_year: number | string | null
  english_level: string | null
  motivation: string | null
  experience_years: number | string | null
  currently_employed: boolean | null
  has_recommendation_letter: boolean | null
  has_cv: boolean | null
  needs_visa: boolean | null
  needs_housing: boolean | null
  passport_number: string | null
  status: string
  admin_notes: string | null
  created_at: string
}

type DocumentRow = {
  id: string
  application_id: string
  document_type: string
  file_name: string | null
  provided: boolean
  verified: boolean
}

type MessageRow = {
  id: string
  name: string
  email: string
  phone: string | null
  department: string
  subject: string
  message: string
  status: string
  created_at: string
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default async function AdminAdmissionsPage() {
  const session = await getAdminSession()

  if (!session) {
    return (
      <div className="mx-auto max-w-md mt-16">
        <div className="rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-900 text-white font-bold">
            A
          </div>
          <h1 className="text-lg font-semibold text-blue-900">Accès réservé</h1>
          <p className="mt-2 text-sm text-slate-600">Accès réservé — connectez-vous avec un compte administrateur.</p>
          <Link
            href="/login"
            className="mt-5 inline-flex items-center justify-center rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-900 transition-colors"
          >
            Se connecter
          </Link>
        </div>
      </div>
    )
  }

  const [applications, documents, messages] = await Promise.all([
    sql(`SELECT * FROM applications ORDER BY created_at DESC LIMIT 200`) as Promise<ApplicationRow[]>,
    sql(`SELECT id, application_id, document_type, file_name, provided, verified FROM application_documents`) as Promise<
      DocumentRow[]
    >,
    sql(`SELECT * FROM contact_messages ORDER BY created_at DESC LIMIT 200`) as Promise<MessageRow[]>,
  ])

  const docsByApplication = new Map<string, DocumentRow[]>()
  for (const doc of documents) {
    const list = docsByApplication.get(doc.application_id)
    if (list) list.push(doc)
    else docsByApplication.set(doc.application_id, [doc])
  }

  const totalApplications = applications.length
  const countByType = {
    undergraduate: applications.filter((a) => a.application_type === "undergraduate").length,
    graduate: applications.filter((a) => a.application_type === "graduate").length,
    international: applications.filter((a) => a.application_type === "international").length,
  }
  const newMessages = messages.filter((m) => m.status === "new").length

  return (
    <div className="space-y-6">
      {/* En-tête */}
      <div>
        <h1 className="text-2xl font-bold text-blue-900">Gestion des admissions</h1>
        <p className="mt-1 text-sm text-slate-600">
          Suivi des candidatures et des messages de contact reçus par l&apos;école.
        </p>
      </div>

      {/* Statistiques */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Total candidatures</p>
          <p className="mt-2 text-3xl font-bold text-blue-900">{totalApplications}</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Licence</p>
          <p className="mt-2 text-3xl font-bold text-blue-700">{countByType.undergraduate}</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Master / International</p>
          <p className="mt-2 text-3xl font-bold text-cyan-700">{countByType.graduate + countByType.international}</p>
          <p className="mt-1 text-xs text-slate-500">
            {countByType.graduate} master · {countByType.international} international
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Nouveaux messages</p>
          <p className="mt-2 text-3xl font-bold text-blue-900">{newMessages}</p>
          <p className="mt-1 text-xs text-slate-500">sur {messages.length} message(s)</p>
        </div>
      </div>

      {/* Onglets (CSS pur, fonctionne sans JS) */}
      <Tabs defaultValue="candidatures">
        <TabsList>
          <TabsTrigger value="candidatures">Candidatures ({totalApplications})</TabsTrigger>
          <TabsTrigger value="messages">Messages ({messages.length})</TabsTrigger>
        </TabsList>

        {/* ------------------------------ Onglet Candidatures ------------------------------ */}
        <TabsContent value="candidatures">
          {applications.length === 0 ? (
            <div className="rounded-xl border border-slate-200 bg-white p-10 text-center text-sm text-slate-500">
              Aucune candidature pour le moment.
            </div>
          ) : (
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              {/* En-tête de tableau */}
              <div className="hidden md:grid grid-cols-[9rem_1fr_1fr_7rem_9rem_8rem] gap-3 border-b border-slate-200 bg-slate-50 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                <span>Référence</span>
                <span>Candidat</span>
                <span>Programme</span>
                <span>Type</span>
                <span>Statut</span>
                <span>Date</span>
              </div>

              {applications.map((app) => {
                const docs = docsByApplication.get(app.id) ?? []
                return (
                  <details key={app.id} className="group border-b border-slate-100 last:border-b-0">
                    <summary className="cursor-pointer list-none grid grid-cols-1 md:grid-cols-[9rem_1fr_1fr_7rem_9rem_8rem] gap-2 md:gap-3 px-4 py-3 text-sm hover:bg-blue-50/50 transition-colors">
                      <span className="font-mono text-xs font-medium text-blue-900 md:pt-0.5">{app.reference}</span>
                      <span className="font-medium text-slate-800">
                        {app.first_name} {app.last_name}
                        <span className="block text-xs text-slate-500 md:hidden">{app.program_name}</span>
                      </span>
                      <span className="hidden md:block text-slate-600">{app.program_name}</span>
                      <span className="hidden md:block">
                        <span
                          className={`inline-block rounded-full px-2 py-0.5 text-xs font-semibold ${badgeClass(TYPE_BADGES, app.application_type)}`}
                        >
                          {TYPE_LABELS[app.application_type] ?? app.application_type}
                        </span>
                      </span>
                      <span className="hidden md:block">
                        <span
                          className={`inline-block rounded-full border px-2 py-0.5 text-xs font-semibold ${badgeClass(APPLICATION_STATUS_BADGES, app.status)}`}
                        >
                          {APPLICATION_STATUS_LABELS[app.status] ?? app.status}
                        </span>
                      </span>
                      <span className="hidden md:block text-xs text-slate-500 md:pt-0.5">
                        {formatDate(app.created_at)}
                      </span>
                    </summary>

                    {/* Carte de détail */}
                    <div className="border-t border-slate-100 bg-slate-50/60 px-4 py-5">
                      <div className="grid gap-6 lg:grid-cols-2">
                        {/* Informations candidat */}
                        <div className="rounded-lg border border-slate-200 bg-white p-4">
                          <h3 className="text-sm font-semibold text-blue-900">Informations personnelles</h3>
                          <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                            <Detail label="Email" value={app.email} />
                            <Detail label="Téléphone" value={app.phone} />
                            <Detail label="Date de naissance" value={app.date_of_birth} />
                            <Detail
                              label="Genre"
                              value={
                                app.gender === "male"
                                  ? "Masculin"
                                  : app.gender === "female"
                                    ? "Féminin"
                                    : app.gender
                              }
                            />
                            <Detail label="Pays" value={app.country} />
                            <Detail label="Ville" value={app.city} />
                            <Detail label="Adresse" value={app.address} wide />
                            <Detail label="Passeport" value={app.passport_number} />
                          </dl>
                        </div>

                        {/* Programme et parcours */}
                        <div className="rounded-lg border border-slate-200 bg-white p-4">
                          <h3 className="text-sm font-semibold text-blue-900">Programme et parcours</h3>
                          <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                            <Detail label="Code programme" value={app.program_code} />
                            <Detail label="Programme" value={app.program_name} />
                            <Detail label="Rentrée" value={app.start_term} />
                            <Detail label="Niveau d'anglais" value={app.english_level} />
                            <Detail label="Dernier diplôme" value={app.last_diploma} />
                            <Detail label="Établissement" value={app.last_institution} />
                            <Detail label="Année d'obtention" value={app.graduation_year} />
                            <Detail label="Expérience (années)" value={app.experience_years} />
                            <Detail label="En poste actuellement" value={ouiNon(app.currently_employed)} />
                          </dl>
                          <div className="mt-3 flex flex-wrap gap-2 text-xs">
                            <FlagChip label="CV fourni" ok={app.has_cv === true} />
                            <FlagChip label="Lettre de recommandation" ok={app.has_recommendation_letter === true} />
                            <FlagChip label="Besoin de visa" ok={app.needs_visa === true} neutral />
                            <FlagChip label="Besoin de logement" ok={app.needs_housing === true} neutral />
                          </div>
                        </div>

                        {/* Motivation */}
                        <div className="rounded-lg border border-slate-200 bg-white p-4 lg:col-span-2">
                          <h3 className="text-sm font-semibold text-blue-900">Lettre de motivation</h3>
                          <p className="mt-2 whitespace-pre-line text-sm text-slate-700">
                            {app.motivation ?? "—"}
                          </p>
                        </div>

                        {/* Documents */}
                        <div className="rounded-lg border border-slate-200 bg-white p-4 lg:col-span-2">
                          <h3 className="text-sm font-semibold text-blue-900">Documents fournis</h3>
                          {docs.length === 0 ? (
                            <p className="mt-2 text-sm text-slate-500">Aucun document enregistré.</p>
                          ) : (
                            <div className="mt-3 overflow-x-auto">
                              <table className="w-full text-left text-sm">
                                <thead>
                                  <tr className="border-b border-slate-200 text-xs uppercase tracking-wide text-slate-500">
                                    <th className="px-2 py-2 font-semibold">Document</th>
                                    <th className="px-2 py-2 font-semibold">Fichier</th>
                                    <th className="px-2 py-2 font-semibold">Fourni</th>
                                    <th className="px-2 py-2 font-semibold">Vérifié</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {docs.map((doc) => (
                                    <tr key={doc.id} className="border-b border-slate-100 last:border-b-0">
                                      <td className="px-2 py-2 text-slate-700">{doc.document_type}</td>
                                      <td className="px-2 py-2 text-slate-500">{doc.file_name ?? "—"}</td>
                                      <td className="px-2 py-2">
                                        <FlagChip label={doc.provided ? "Oui" : "Non"} ok={doc.provided} />
                                      </td>
                                      <td className="px-2 py-2">
                                        <FlagChip label={doc.verified ? "Oui" : "Non"} ok={doc.verified} />
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Formulaires de gestion */}
                      <div className="mt-5 grid gap-4 lg:grid-cols-2">
                        <form
                          action={updateApplicationStatus}
                          className="rounded-lg border border-slate-200 bg-white p-4"
                        >
                          <input type="hidden" name="id" value={app.id} />
                          <label
                            htmlFor={`status-${app.id}`}
                            className="block text-sm font-semibold text-blue-900"
                          >
                            Changer le statut
                          </label>
                          <div className="mt-2 flex flex-wrap items-center gap-2">
                            <select
                              id={`status-${app.id}`}
                              name="newStatus"
                              defaultValue={app.status}
                              className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 focus:border-blue-700 focus:outline-none"
                            >
                              {APPLICATION_STATUSES.map((s) => (
                                <option key={s} value={s}>
                                  {APPLICATION_STATUS_LABELS[s]}
                                </option>
                              ))}
                            </select>
                            <button
                              type="submit"
                              className="rounded-md bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-900 transition-colors"
                            >
                              Mettre à jour
                            </button>
                          </div>
                        </form>

                        <form
                          action={updateApplicationNotes}
                          className="rounded-lg border border-slate-200 bg-white p-4"
                        >
                          <input type="hidden" name="id" value={app.id} />
                          <label
                            htmlFor={`notes-${app.id}`}
                            className="block text-sm font-semibold text-blue-900"
                          >
                            Notes internes
                          </label>
                          <textarea
                            id={`notes-${app.id}`}
                            name="admin_notes"
                            rows={3}
                            defaultValue={app.admin_notes ?? ""}
                            className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-700 focus:border-blue-700 focus:outline-none"
                            placeholder="Notes réservées à l'administration…"
                          />
                          <button
                            type="submit"
                            className="mt-2 rounded-md bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-900 transition-colors"
                          >
                            Enregistrer les notes
                          </button>
                        </form>
                      </div>
                    </div>
                  </details>
                )
              })}
            </div>
          )}
        </TabsContent>

        {/* ------------------------------ Onglet Messages ------------------------------ */}
        <TabsContent value="messages">
          {messages.length === 0 ? (
            <div className="rounded-xl border border-slate-200 bg-white p-10 text-center text-sm text-slate-500">
              Aucun message de contact pour le moment.
            </div>
          ) : (
            <div className="grid gap-4 lg:grid-cols-2">
              {messages.map((msg) => (
                <div key={msg.id} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <p className="font-semibold text-blue-900">{msg.name}</p>
                      <a
                        href={`mailto:${msg.email}`}
                        className="text-sm text-blue-700 hover:underline"
                      >
                        {msg.email}
                      </a>
                      {msg.phone ? <p className="text-xs text-slate-500">{msg.phone}</p> : null}
                    </div>
                    <span
                      className={`inline-block rounded-full border px-2 py-0.5 text-xs font-semibold ${badgeClass(MESSAGE_STATUS_BADGES, msg.status)}`}
                    >
                      {MESSAGE_STATUS_LABELS[msg.status] ?? msg.status}
                    </span>
                  </div>

                  <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
                    <span className="rounded-full bg-blue-900 px-2 py-0.5 font-semibold text-white">
                      {DEPARTMENT_LABELS[msg.department] ?? msg.department}
                    </span>
                    <span className="text-slate-400">{formatDate(msg.created_at)}</span>
                  </div>

                  <h3 className="mt-3 text-sm font-semibold text-slate-800">{msg.subject}</h3>
                  <p className="mt-1 whitespace-pre-line text-sm text-slate-600">{msg.message}</p>

                  <form action={updateMessageStatus} className="mt-4 flex flex-wrap items-center gap-2 border-t border-slate-100 pt-4">
                    <input type="hidden" name="id" value={msg.id} />
                    <label htmlFor={`msg-status-${msg.id}`} className="sr-only">
                      Statut du message
                    </label>
                    <select
                      id={`msg-status-${msg.id}`}
                      name="newStatus"
                      defaultValue={msg.status}
                      className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-700 focus:border-blue-700 focus:outline-none"
                    >
                      {MESSAGE_STATUSES.map((s) => (
                        <option key={s} value={s}>
                          {MESSAGE_STATUS_LABELS[s]}
                        </option>
                      ))}
                    </select>
                    <button
                      type="submit"
                      className="rounded-md bg-blue-700 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-900 transition-colors"
                    >
                      Mettre à jour
                    </button>
                  </form>
                </div>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Sous-composants                                                     */
/* ------------------------------------------------------------------ */

function Detail({
  label,
  value,
  wide = false,
}: {
  label: string
  value: string | number | null | undefined
  wide?: boolean
}) {
  return (
    <div className={wide ? "col-span-2" : undefined}>
      <dt className="text-xs uppercase tracking-wide text-slate-400">{label}</dt>
      <dd className="text-sm text-slate-700">{value ? String(value) : "—"}</dd>
    </div>
  )
}

function FlagChip({ label, ok, neutral = false }: { label: string; ok: boolean; neutral?: boolean }) {
  const cls = ok
    ? "bg-green-100 text-green-800 border-green-200"
    : neutral
      ? "bg-slate-100 text-slate-600 border-slate-200"
      : "bg-slate-100 text-slate-500 border-slate-200"
  return (
    <span className={`inline-block rounded-full border px-2 py-0.5 font-medium ${cls}`}>
      {ok ? "✓ " : neutral ? "" : "○ "}
      {label}
    </span>
  )
}
