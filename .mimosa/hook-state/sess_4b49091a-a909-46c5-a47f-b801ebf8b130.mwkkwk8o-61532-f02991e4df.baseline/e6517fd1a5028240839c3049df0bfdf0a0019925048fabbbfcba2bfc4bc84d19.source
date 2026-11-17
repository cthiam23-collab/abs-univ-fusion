"use server"

import { revalidatePath } from "next/cache"
import { sql } from "@/lib/db"
import { getAdminSession } from "./auth"

const APPLICATION_STATUSES = ["submitted", "in_review", "interview", "accepted", "rejected", "waitlist"]
const MESSAGE_STATUSES = ["new", "read", "answered", "archived"]

/**
 * Met à jour le statut d'une candidature.
 * Appelée par un <form action={...}> natif (fonctionne sans JavaScript).
 */
export async function updateApplicationStatus(formData: FormData): Promise<void> {
  const session = await getAdminSession()
  if (!session) return

  const id = typeof formData.get("id") === "string" ? (formData.get("id") as string).trim() : ""
  const newStatus = typeof formData.get("newStatus") === "string" ? (formData.get("newStatus") as string).trim() : ""

  if (!id || !APPLICATION_STATUSES.includes(newStatus)) return

  try {
    await sql(`UPDATE applications SET status = $1, updated_at = now() WHERE id = $2`, [newStatus, id])
  } catch (error) {
    console.error("[updateApplicationStatus]", error)
    return
  }

  revalidatePath("/admin/admissions")
}

/**
 * Met à jour les notes internes d'une candidature.
 */
export async function updateApplicationNotes(formData: FormData): Promise<void> {
  const session = await getAdminSession()
  if (!session) return

  const id = typeof formData.get("id") === "string" ? (formData.get("id") as string).trim() : ""
  const raw = formData.get("admin_notes")
  const notes = typeof raw === "string" ? raw.trim() : ""

  if (!id) return

  try {
    await sql(`UPDATE applications SET admin_notes = $1, updated_at = now() WHERE id = $2`, [
      notes === "" ? null : notes,
      id,
    ])
  } catch (error) {
    console.error("[updateApplicationNotes]", error)
    return
  }

  revalidatePath("/admin/admissions")
}

/**
 * Met à jour le statut d'un message de contact.
 */
export async function updateMessageStatus(formData: FormData): Promise<void> {
  const session = await getAdminSession()
  if (!session) return

  const id = typeof formData.get("id") === "string" ? (formData.get("id") as string).trim() : ""
  const newStatus = typeof formData.get("newStatus") === "string" ? (formData.get("newStatus") as string).trim() : ""

  if (!id || !MESSAGE_STATUSES.includes(newStatus)) return

  try {
    await sql(`UPDATE contact_messages SET status = $1 WHERE id = $2`, [newStatus, id])
  } catch (error) {
    console.error("[updateMessageStatus]", error)
    return
  }

  revalidatePath("/admin/admissions")
}
