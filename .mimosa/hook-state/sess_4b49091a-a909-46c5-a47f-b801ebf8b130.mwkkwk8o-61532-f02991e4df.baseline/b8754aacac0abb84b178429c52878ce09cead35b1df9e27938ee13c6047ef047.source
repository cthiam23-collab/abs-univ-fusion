"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useToast } from "@/components/ui/use-toast"

interface Notification {
  id: string
  message: string
  date: string
  read: boolean
}

export function AdminNotifications() {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const { toast } = useToast()

  useEffect(() => {
    fetchNotifications()
  }, [])

  const fetchNotifications = async () => {
    try {
      const response = await fetch("/api/admin/notifications")
      if (!response.ok) throw new Error("Failed to fetch notifications")
      const data = await response.json()
      setNotifications(data)
    } catch (error) {
      console.error("Error fetching notifications:", error)
      toast({
        title: "Error",
        description: "Failed to fetch notifications. Please try again.",
        variant: "destructive",
      })
    }
  }

  const markAsRead = async (id: string) => {
    try {
      const response = await fetch(`/api/admin/notifications/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ read: true }),
      })
      if (!response.ok) throw new Error("Failed to mark notification as read")
      fetchNotifications()
      toast({
        title: "Success",
        description: "Notification marked as read.",
      })
    } catch (error) {
      console.error("Error marking notification as read:", error)
      toast({
        title: "Error",
        description: "Failed to mark notification as read. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Notifications</h1>
      <Card>
        <CardHeader>
          <CardTitle>Recent Notifications</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Message</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {notifications.map((notification) => (
                <TableRow key={notification.id}>
                  <TableCell>{notification.message}</TableCell>
                  <TableCell>{notification.date}</TableCell>
                  <TableCell>{notification.read ? "Read" : "Unread"}</TableCell>
                  <TableCell>
                    {!notification.read && <Button onClick={() => markAsRead(notification.id)}>Mark as Read</Button>}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

export default AdminNotifications
