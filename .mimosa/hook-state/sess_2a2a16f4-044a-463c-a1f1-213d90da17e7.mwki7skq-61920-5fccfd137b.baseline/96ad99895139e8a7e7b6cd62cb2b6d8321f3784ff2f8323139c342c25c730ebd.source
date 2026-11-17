"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Briefcase, Users, FileText, MessageSquare } from "lucide-react"
import Link from "next/link"
import { useSession } from "next-auth/react"

export function ExternalPartnerDashboard() {
  const [partnerData, setPartnerData] = useState<{
    activeProjects: number
    currentInterns: number
    activeAgreements: number
    unreadMessages: number
  } | null>(null)
  const { data: session } = useSession()

  useEffect(() => {
    const fetchPartnerData = async () => {
      try {
        const res = await fetch("/api/external-partner")
        const data = await res.json()
        setPartnerData(data)
      } catch (error) {
        console.error("Error fetching external partner data:", error)
      }
    }
    fetchPartnerData()
  }, [])

  if (!partnerData) {
    return <div>Loading...</div>
  }

  if (session?.user?.role !== "external_partner") {
    return <div>Unauthorized access. Please log in as an external partner.</div>
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Briefcase className="mr-2 h-4 w-4" />
            Active Projects
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>Total Projects: {partnerData.activeProjects}</p>
          <Link href="/external-partner/projects">
            <Button className="mt-4 w-full">View Projects</Button>
          </Link>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Users className="mr-2 h-4 w-4" />
            Student Interns
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>Current Interns: {partnerData.currentInterns}</p>
          <Link href="/external-partner/interns">
            <Button className="mt-4 w-full">Manage Interns</Button>
          </Link>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <FileText className="mr-2 h-4 w-4" />
            Agreements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>Active Agreements: {partnerData.activeAgreements}</p>
          <Link href="/external-partner/agreements">
            <Button className="mt-4 w-full">View Agreements</Button>
          </Link>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <MessageSquare className="mr-2 h-4 w-4" />
            Messages
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>Unread Messages: {partnerData.unreadMessages}</p>
          <Link href="/external-partner/messages">
            <Button className="mt-4 w-full">View Messages</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}

export default ExternalPartnerDashboard
