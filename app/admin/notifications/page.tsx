import { AdminNotifications } from "@/components/admin-portal/admin-notifications"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Admin Notifications | African Business School (ABS)",
  description: "Manage notifications for African Business School (ABS)",
  path: "/admin/notifications",
})

export default function AdminNotificationsPage() {
  return <AdminNotifications />
}
