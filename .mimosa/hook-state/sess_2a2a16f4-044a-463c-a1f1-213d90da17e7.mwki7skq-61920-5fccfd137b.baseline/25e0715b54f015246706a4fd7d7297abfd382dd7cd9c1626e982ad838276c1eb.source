"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import Image from "next/image"

interface Activity {
  id: number
  name: string
  role: string
  hours: number
}

export function ExtracurricularActivities() {
  const [activities, setActivities] = useState<Activity[]>([])
  const [newActivity, setNewActivity] = useState<Omit<Activity, "id">>({ name: "", role: "", hours: 0 })
  const [showAddForm, setShowAddForm] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await fetch("/api/extracurricular-activities")
        if (!response.ok) {
          throw new Error("Failed to fetch activities")
        }
        const data = await response.json()
        setActivities(data)
      } catch (error) {
        console.error("Error fetching activities:", error)
        toast({
          title: "Error",
          description: "Failed to fetch activities. Please try again later.",
          variant: "destructive",
        })
      }
    }

    fetchActivities()
  }, [toast])

  const handleAddActivity = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch("/api/extracurricular-activities", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newActivity),
      })

      if (!response.ok) {
        throw new Error("Failed to add activity")
      }

      const addedActivity = await response.json()
      setActivities([...activities, addedActivity])
      setNewActivity({ name: "", role: "", hours: 0 })
      setShowAddForm(false)
      toast({
        title: "Success",
        description: "Activity added successfully.",
      })
    } catch (error) {
      console.error("Error adding activity:", error)
      toast({
        title: "Error",
        description: "Failed to add activity. Please try again later.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>My Extracurricular Activities</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Activity Name</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Hours</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {activities.map((activity) => (
                <TableRow key={activity.id}>
                  <TableCell>{activity.name}</TableCell>
                  <TableCell>{activity.role}</TableCell>
                  <TableCell>{activity.hours}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={showAddForm} onOpenChange={setShowAddForm}>
        <DialogTrigger asChild>
          <Button>Add New Activity</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Extracurricular Activity</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleAddActivity} className="space-y-4">
            <div>
              <Label htmlFor="activity-name">Activity Name</Label>
              <Input
                id="activity-name"
                value={newActivity.name}
                onChange={(e) => setNewActivity({ ...newActivity, name: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="activity-role">Your Role</Label>
              <Input
                id="activity-role"
                value={newActivity.role}
                onChange={(e) => setNewActivity({ ...newActivity, role: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="activity-hours">Hours Spent</Label>
              <Input
                id="activity-hours"
                type="number"
                value={newActivity.hours}
                onChange={(e) => setNewActivity({ ...newActivity, hours: Number(e.target.value) })}
                required
              />
            </div>
            <Button type="submit">Add Activity</Button>
          </form>
        </DialogContent>
      </Dialog>

      <Image
        src="/images/extracurricular-activities.jpg"
        alt="Extracurricular Activities"
        width={800}
        height={400}
        className="rounded-lg"
      />
    </div>
  )
}

export default ExtracurricularActivities
