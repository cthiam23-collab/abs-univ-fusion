"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

export function CareerServices() {
  const [jobListings, setJobListings] = useState([
    { id: 1, title: "Marketing Intern", company: "TechCorp", location: "New York, NY", type: "Internship" },
    {
      id: 2,
      title: "Junior Software Developer",
      company: "StartupX",
      location: "San Francisco, CA",
      type: "Full-time",
    },
    { id: 3, title: "Business Analyst", company: "ConsultCo", location: "Chicago, IL", type: "Full-time" },
  ])

  const [events, setEvents] = useState([
    { id: 1, title: "Annual Career Fair", date: "2023-10-15", time: "10:00 AM - 4:00 PM", location: "University Hall" },
    {
      id: 2,
      title: "Resume Writing Workshop",
      date: "2023-09-20",
      time: "2:00 PM - 4:00 PM",
      location: "Career Center",
    },
    { id: 3, title: "Interview Skills Seminar", date: "2023-10-05", time: "1:00 PM - 3:00 PM", location: "Online" },
  ])

  return (
    <Tabs defaultValue="job-search" className="space-y-4">
      <TabsList>
        <TabsTrigger value="job-search">Job Search</TabsTrigger>
        <TabsTrigger value="resume">Resume Builder</TabsTrigger>
        <TabsTrigger value="events">Career Events</TabsTrigger>
        <TabsTrigger value="resources">Resources</TabsTrigger>
      </TabsList>

      <TabsContent value="job-search">
        <Card>
          <CardHeader>
            <CardTitle>Job Listings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <Input placeholder="Search jobs..." />
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Company</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {jobListings.map((job) => (
                  <TableRow key={job.id}>
                    <TableCell>{job.title}</TableCell>
                    <TableCell>{job.company}</TableCell>
                    <TableCell>{job.location}</TableCell>
                    <TableCell>{job.type}</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        Apply
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="resume">
        <Card>
          <CardHeader>
            <CardTitle>Resume Builder</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <Label htmlFor="full-name">Full Name</Label>
                <Input id="full-name" placeholder="John Doe" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="johndoe@example.com" />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
              </div>
              <div>
                <Label htmlFor="summary">Professional Summary</Label>
                <Textarea id="summary" placeholder="Brief overview of your professional experience and goals" />
              </div>
              <Button>Generate Resume</Button>
            </form>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="events">
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Career Events</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Event</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {events.map((event) => (
                  <TableRow key={event.id}>
                    <TableCell>{event.title}</TableCell>
                    <TableCell>{event.date}</TableCell>
                    <TableCell>{event.time}</TableCell>
                    <TableCell>{event.location}</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        Register
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="resources">
        <Card>
          <CardHeader>
            <CardTitle>Career Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>
                <a href="/career-services" className="text-blue-500 hover:underline">
                  Interview Preparation Guide
                </a>
              </li>
              <li>
                <a href="/career-services" className="text-blue-500 hover:underline">
                  Networking Tips for Students
                </a>
              </li>
              <li>
                <a href="/research/publications#industry-insights" className="text-blue-500 hover:underline">
                  Industry Insights Reports
                </a>
              </li>
              <li>
                <a href="/career-services" className="text-blue-500 hover:underline">
                  Career Path Exploration Tools
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </TabsContent>

      <Image
        src="/images/career-services.jpg"
        alt="Career Services"
        width={800}
        height={400}
        className="rounded-lg mt-4"
      />
    </Tabs>
  )
}

export default CareerServices
