export default function AdminAdmissionsLoading() {
  return (
    <div className="space-y-6 animate-pulse">
      <div>
        <div className="h-7 w-72 rounded bg-slate-200" />
        <div className="mt-2 h-4 w-96 rounded bg-slate-100" />
      </div>

      {/* Statistiques */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="h-3 w-28 rounded bg-slate-200" />
            <div className="mt-3 h-8 w-16 rounded bg-slate-200" />
          </div>
        ))}
      </div>

      {/* Onglets */}
      <div className="h-9 w-64 rounded-lg bg-slate-200" />

      {/* Lignes de tableau */}
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="grid grid-cols-[9rem_1fr_1fr_7rem_9rem_8rem] gap-3 border-b border-slate-200 pb-3">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-3 rounded bg-slate-200" />
          ))}
        </div>
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="grid grid-cols-[9rem_1fr_1fr_7rem_9rem_8rem] gap-3 py-3">
            {[0, 1, 2, 3, 4, 5].map((j) => (
              <div key={j} className="h-4 rounded bg-slate-100" />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
