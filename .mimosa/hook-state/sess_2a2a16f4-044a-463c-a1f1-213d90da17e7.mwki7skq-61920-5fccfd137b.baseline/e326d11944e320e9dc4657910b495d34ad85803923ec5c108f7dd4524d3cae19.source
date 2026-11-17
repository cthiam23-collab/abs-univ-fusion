"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Users, Plus } from "lucide-react"

export function ClubsSocieties() {
  const [clubs, setClubs] = useState([
    { id: 1, name: "Debate Society", role: "Member", joinDate: "2023-01-15" },
    { id: 2, name: "Entrepreneurship Club", role: "Secretary", joinDate: "2022-09-01" },
    { id: 3, name: "Photography Club", role: "Member", joinDate: "2023-03-10" },
  ])

  const [availableClubs, setAvailableClubs] = useState([
    { id: 4, name: "Chess Club" },
    { id: 5, name: "Environmental Awareness Group" },
    { id: 6, name: "Music Society" },
  ])

  const joinClub = (clubId: number) => {
    const club = availableClubs.find((c) => c.id === clubId)
    if (club) {
      setClubs([...clubs, { ...club, role: "Member", joinDate: new Date().toISOString().split("T")[0] }])
      setAvailableClubs(availableClubs.filter((c) => c.id !== clubId))
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Users className="mr-2 h-6 w-6" />
            Your Clubs and Societies
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Club Name</TableHead>
                <TableHead>Your Role</TableHead>
                <TableHead>Join Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {clubs.map((club) => (
                <TableRow key={club.id}>
                  <TableCell>{club.name}</TableCell>
                  <TableCell>{club.role}</TableCell>
                  <TableCell>{club.joinDate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Plus className="mr-2 h-6 w-6" />
            Available Clubs and Societies
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Club Name</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {availableClubs.map((club) => (
                <TableRow key={club.id}>
                  <TableCell>{club.name}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm" onClick={() => joinClub(club.id)}>
                      Join
                    </Button>
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
