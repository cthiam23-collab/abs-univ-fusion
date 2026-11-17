"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function StudentOrganizations() {
  const [organizations, setOrganizations] = useState([
    {
      id: 1,
      name: "Business Club",
      description: "For students interested in business and entrepreneurship",
      members: 50,
    },
    {
      id: 2,
      name: "Debate Society",
      description: "Improve your public speaking and argumentation skills",
      members: 30,
    },
    {
      id: 3,
      name: "Environmental Action Group",
      description: "Working towards a sustainable campus and community",
      members: 40,
    },
    {
      id: 4,
      name: "International Students Association",
      description: "Promoting cultural exchange and support for international students",
      members: 60,
    },
  ])

  const [newOrganization, setNewOrganization] = useState({ name: "", description: "" })

  const handleJoinOrganization = (orgId: number) => {
    // Here you would typically send a request to the server to join the organization
    console.log(`Joined organization with id ${orgId}`)
  }

  const handleCreateOrganization = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the new organization data to the server
    const newOrg = {
      id: organizations.length + 1,
      name: newOrganization.name,
      description: newOrganization.description,
      members: 1, // Starting with the creator as the first member
    }
    setOrganizations([...organizations, newOrg])
    setNewOrganization({ name: "", description: "" })
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Student Organizations</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Organization Name</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Members</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {organizations.map((org) => (
                <TableRow key={org.id}>
                  <TableCell>{org.name}</TableCell>
                  <TableCell>{org.description}</TableCell>
                  <TableCell>{org.members}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm" onClick={() => handleJoinOrganization(org.id)}>
                      Join
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Create New Organization</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleCreateOrganization} className="space-y-4">
            <div>
              <Label htmlFor="org-name">Organization Name</Label>
              <Input
                id="org-name"
                value={newOrganization.name}
                onChange={(e) => setNewOrganization({ ...newOrganization, name: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="org-description">Description</Label>
              <Textarea
                id="org-description"
                value={newOrganization.description}
                onChange={(e) => setNewOrganization({ ...newOrganization, description: e.target.value })}
                required
              />
            </div>
            <Button type="submit">Create Organization</Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Organization Resources</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li>
              <a href="/student-life/organizations#handbook" className="text-blue-500 hover:underline">
                Student Organization Handbook
              </a>
            </li>
            <li>
              <a href="/events#planning-guide" className="text-blue-500 hover:underline">
                Event Planning Guide
              </a>
            </li>
            <li>
              <a href="/financial-aid#funding-request" className="text-blue-500 hover:underline">
                Funding Request Form
              </a>
            </li>
            <li>
              <a href="/career-services/events#leadership-workshops" className="text-blue-500 hover:underline">
                Leadership Development Workshops
              </a>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
