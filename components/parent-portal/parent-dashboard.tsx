"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, BookOpen, CreditCard, MessageSquare } from "lucide-react"
import Link from "next/link"
import { formatCurrency } from "@/lib/helpers"
import { useSession } from "next-auth/react"

export function ParentDashboard() {
  const [parentData, setParentData] = useState<{
    childrenCount: number
    averageGPA: number
    outstandingBalance: number
    unreadMessages: number
  } | null>(null)
  const { data: session } = useSession()

  useEffect(() => {
    const fetchParentData = async () => {
      try {
        const res = await fetch("/api/parent")
        const data = await res.json()
        setParentData(data)
      } catch (error) {
        console.error("Error fetching parent data:", error)
      }
    }
    fetchParentData()
  }, [])

  if (!parentData) {
    return <div>Loading...</div>
  }

  if (session?.user?.role !== "parent") {
    return <div>Unauthorized access. Please log in as a parent.</div>
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Users className="mr-2 h-4 w-4" />
            Children
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>Number of Children: {parentData.childrenCount}</p>
          <Link href="/parent/children">
            <Button className="mt-4 w-full">View Children's Profiles</Button>
          </Link>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <BookOpen className="mr-2 h-4 w-4" />
            Academic Progress
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>Average GPA: {parentData.averageGPA}</p>
          <Link href="/parent/academic-progress">
            <Button className="mt-4 w-full">View Progress</Button>
          </Link>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <CreditCard className="mr-2 h-4 w-4" />
            Financial Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>Outstanding Balance: {formatCurrency(parentData.outstandingBalance)}</p>
          <Link href="/parent/finance">
            <Button className="mt-4 w-full">View Financial Details</Button>
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
          <p>Unread Messages: {parentData.unreadMessages}</p>
          <Link href="/parent/messages">
            <Button className="mt-4 w-full">View Messages</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}

export default ParentDashboard
