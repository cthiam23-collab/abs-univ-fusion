"use client"

import { SessionProvider } from "next-auth/react"
import { StaffDashboard } from "@/components/staff-portal/staff-dashboard"

export default function StaffDashboardPage() {
  return (
    <SessionProvider>
      <StaffDashboard />
    </SessionProvider>
  )
}
