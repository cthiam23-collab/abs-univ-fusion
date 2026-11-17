import { redirect } from "next/navigation"

// Route historique : redirige vers la fiche documentée (contenus issus des documents officiels ABS).
export default function LegacyRedirectPage() {
  redirect("/programs/journalism-communication")
}
