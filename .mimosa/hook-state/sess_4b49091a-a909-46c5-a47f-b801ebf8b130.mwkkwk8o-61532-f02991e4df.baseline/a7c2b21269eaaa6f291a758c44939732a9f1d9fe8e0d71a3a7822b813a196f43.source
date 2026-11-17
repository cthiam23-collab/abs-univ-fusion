import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { sql } from "@/lib/db"
import {
  ArrowRight,
  ClipboardCheck,
  FileText,
  GraduationCap,
  Mail,
  Users,
} from "lucide-react"

// Tableau de bord administrateur — statistiques réelles issues de la base.
export const dynamic = "force-dynamic"

async function getStats() {
  try {
    const [appsByStatus, appsByType, messages, students, teachers, recentApps, recentMessages] = await Promise.all([
      sql(`SELECT status, count(*)::int AS n FROM applications GROUP BY status`),
      sql(`SELECT application_type, count(*)::int AS n FROM applications GROUP BY application_type`),
      sql(`SELECT count(*)::int AS total, count(*) FILTER (WHERE status = 'new')::int AS unread FROM contact_messages`),
      sql(`SELECT count(*)::int AS n FROM students`),
      sql(`SELECT count(*)::int AS n FROM teachers`),
      sql(`SELECT reference, first_name, last_name, program_name, application_type, status, created_at FROM applications ORDER BY created_at DESC LIMIT 6`),
      sql(`SELECT name, subject, department, status, created_at FROM contact_messages ORDER BY created_at DESC LIMIT 6`),
    ])
    return { ok: true as const, appsByStatus, appsByType, messages, students, teachers, recentApps, recentMessages }
  } catch (error) {
    console.error("[admin dashboard] db error:", error)
    return { ok: false as const }
  }
}

function fmtDate(d: Date | string) {
  return new Date(d).toLocaleDateString("fr-FR", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" })
}

const STATUS_COLORS: Record<string, string> = {
  submitted: "bg-slate-200 text-slate-700",
  in_review: "bg-blue-100 text-blue-800",
  interview: "bg-cyan-100 text-cyan-800",
  accepted: "bg-green-100 text-green-800",
  rejected: "bg-red-100 text-red-700",
  waitlist: "bg-amber-100 text-amber-800",
}

const DEPARTMENT_LABELS: Record<string, string> = {
  general: "Général",
  admissions: "Admissions",
  graduate_admissions: "Admissions Master",
  international: "International",
  library: "Bibliothèque",
  financial: "Aide financière",
  careers: "Services carrières",
}

export default async function AdminDashboard() {
  const stats = await getStats()

  if (!stats.ok) {
    return (
      <div className="p-6">
        <Card>
          <CardHeader>
            <CardTitle>Tableau de bord administrateur</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600">
              Impossible de joindre la base de données. Vérifiez que le serveur local Supabase (Docker) est démarré, puis
              rechargez la page.
            </p>
          </CardContent>
        </Card>
      </div>
    )
  }

  const statusCount = (s: string) => stats.appsByStatus.find((r: any) => r.status === s)?.n ?? 0
  const typeCount = (t: string) => stats.appsByType.find((r: any) => r.application_type === t)?.n ?? 0
  const totalApps = stats.appsByStatus.reduce((sum: number, r: any) => sum + r.n, 0)

  return (
    <div className="space-y-8 p-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Tableau de bord administrateur</h1>
          <p className="text-sm text-slate-500">Données réelles de l&apos;African Business School (ABS) — mises à jour à chaque chargement.</p>
        </div>
        <Button asChild className="bg-blue-700 hover:bg-blue-800">
          <Link href="/admin/admissions">
            Gérer les candidatures <ArrowRight className="ml-2 size-4" />
          </Link>
        </Button>
      </div>

      {/* Statistiques clés */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-sm font-medium text-slate-600">
              <ClipboardCheck className="size-4 text-cyan-600" /> Candidatures totales
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-slate-900">{totalApps}</p>
            <p className="mt-1 text-xs text-slate-500">
              {typeCount("undergraduate")} Bachelor · {typeCount("graduate")} Master · {typeCount("international")} Intl
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-sm font-medium text-slate-600">
              <FileText className="size-4 text-blue-600" /> En attente de revue
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-slate-900">{statusCount("submitted")}</p>
            <p className="mt-1 text-xs text-slate-500">{statusCount("in_review")} en cours d&apos;examen</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-sm font-medium text-slate-600">
              <Mail className="size-4 text-cyan-600" /> Messages de contact
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-slate-900">{stats.messages[0]?.total ?? 0}</p>
            <p className="mt-1 text-xs text-slate-500">{stats.messages[0]?.unread ?? 0} non lu(s)</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-sm font-medium text-slate-600">
              <GraduationCap className="size-4 text-blue-600" /> Communauté
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-slate-900">{stats.students[0]?.n ?? 0}</p>
            <p className="mt-1 text-xs text-slate-500">étudiants · {stats.teachers[0]?.n ?? 0} enseignants</p>
          </CardContent>
        </Card>
      </div>

      {/* Activités réelles */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Dernières candidatures</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {stats.recentApps.length === 0 && <p className="text-sm text-slate-500">Aucune candidature pour le moment.</p>}
            {stats.recentApps.map((a: any) => (
              <div key={a.reference} className="flex items-center justify-between gap-3 rounded-lg border border-slate-100 p-3">
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-slate-900">
                    {a.first_name} {a.last_name} — <span className="text-slate-600">{a.program_name}</span>
                  </p>
                  <p className="text-xs text-slate-500">
                    {a.reference} · {fmtDate(a.created_at)}
                  </p>
                </div>
                <span className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ${STATUS_COLORS[a.status] ?? "bg-slate-100"}`}>
                  {a.status}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Derniers messages</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {stats.recentMessages.length === 0 && <p className="text-sm text-slate-500">Aucun message pour le moment.</p>}
            {stats.recentMessages.map((m: any, i: number) => (
              <div key={i} className="flex items-center justify-between gap-3 rounded-lg border border-slate-100 p-3">
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-slate-900">{m.subject}</p>
                  <p className="text-xs text-slate-500">
                    {m.name} · {DEPARTMENT_LABELS[m.department] ?? m.department} · {fmtDate(m.created_at)}
                  </p>
                </div>
                <span
                  className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ${
                    m.status === "new" ? "bg-blue-100 text-blue-800" : m.status === "answered" ? "bg-green-100 text-green-800" : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {m.status}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Accès rapides */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Accès rapides</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3 sm:grid-cols-3">
          <Link href="/admin/admissions" className="rounded-lg border border-slate-200 p-4 transition-colors hover:border-cyan-300 hover:bg-cyan-50">
            <ClipboardCheck className="size-5 text-cyan-600" />
            <p className="mt-2 text-sm font-semibold text-slate-900">Candidatures & messages</p>
            <p className="text-xs text-slate-500">Statuts, dossiers, checklist des pièces</p>
          </Link>
          <Link href="/admin/students" className="rounded-lg border border-slate-200 p-4 transition-colors hover:border-cyan-300 hover:bg-cyan-50">
            <Users className="size-5 text-blue-600" />
            <p className="mt-2 text-sm font-semibold text-slate-900">Étudiants</p>
            <p className="text-xs text-slate-500">Gestion des étudiants inscrits</p>
          </Link>
          <Link href="/admin/system-settings" className="rounded-lg border border-slate-200 p-4 transition-colors hover:border-cyan-300 hover:bg-cyan-50">
            <FileText className="size-5 text-slate-600" />
            <p className="mt-2 text-sm font-semibold text-slate-900">Paramètres système</p>
            <p className="text-xs text-slate-500">Configuration de la plateforme</p>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}
