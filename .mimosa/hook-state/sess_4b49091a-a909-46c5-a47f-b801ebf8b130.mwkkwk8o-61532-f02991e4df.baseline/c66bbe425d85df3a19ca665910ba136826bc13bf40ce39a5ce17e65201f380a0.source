"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Award, Medal, Trophy } from "lucide-react"

export function StudentAchievements() {
  const [achievements, setAchievements] = useState([
    { id: 1, title: "Dean's List", date: "Spring 2023", description: "Achieved a GPA of 3.8 or higher" },
    {
      id: 2,
      title: "Research Paper Published",
      date: "Summer 2023",
      description: "Co-authored a paper in the Journal of Business Economics",
    },
    {
      id: 3,
      title: "Hackathon Winner",
      date: "Fall 2022",
      description: "First place in the African Business School (ABS) Annual Hackathon",
    },
  ])

  const [newAchievement, setNewAchievement] = useState({ title: "", date: "", description: "" })

  const handleAddAchievement = (e: React.FormEvent) => {
    e.preventDefault()
    const achievement = {
      id: achievements.length + 1,
      ...newAchievement,
    }
    setAchievements([...achievements, achievement])
    setNewAchievement({ title: "", date: "", description: "" })
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Trophy className="mr-2 h-6 w-6" />
            Your Achievements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Achievement</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {achievements.map((achievement) => (
                <TableRow key={achievement.id}>
                  <TableCell className="font-medium">{achievement.title}</TableCell>
                  <TableCell>{achievement.date}</TableCell>
                  <TableCell>{achievement.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Medal className="mr-2 h-6 w-6" />
            Add New Achievement
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleAddAchievement} className="space-y-4">
            <div>
              <Label htmlFor="achievement-title">Achievement Title</Label>
              <Input
                id="achievement-title"
                value={newAchievement.title}
                onChange={(e) => setNewAchievement({ ...newAchievement, title: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="achievement-date">Date</Label>
              <Input
                id="achievement-date"
                type="date"
                value={newAchievement.date}
                onChange={(e) => setNewAchievement({ ...newAchievement, date: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="achievement-description">Description</Label>
              <Textarea
                id="achievement-description"
                value={newAchievement.description}
                onChange={(e) => setNewAchievement({ ...newAchievement, description: e.target.value })}
                required
              />
            </div>
            <Button type="submit">Add Achievement</Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Award className="mr-2 h-6 w-6" />
            Achievement Resources
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li>
              <a href="/programs/graduate#honors" className="text-blue-500 hover:underline">
                University Honors Program
              </a>
            </li>
            <li>
              <a href="/research" className="text-blue-500 hover:underline">
                Research Opportunities
              </a>
            </li>
            <li>
              <a href="/career-services/events" className="text-blue-500 hover:underline">
                Leadership Development Programs
              </a>
            </li>
            <li>
              <a href="/events?topic=academic-competitions" className="text-blue-500 hover:underline">
                Academic Competitions
              </a>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
