import { redirect } from "next/navigation"

// Route historique : redirige vers la page documentée (contenus issus des documents officiels ABS).
export default function LegacyRedirectPage() {
  redirect("/campus-life")
}
