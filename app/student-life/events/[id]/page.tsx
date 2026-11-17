"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users, Share2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const events = [
  {
    id: 1,
    title: "International Cultural Festival",
    description: "Celebrate diversity with food, music, and performances from around the world.",
    longDescription: `Join us for our annual International Cultural Festival, a vibrant celebration of global diversity at African Business School (ABS). This year's festival promises to be bigger and better than ever, featuring:

    • Cultural performances from over 20 countries
    • International food court with authentic cuisines
    • Traditional art and craft exhibitions
    • Interactive cultural workshops
    • Global music performances
    • Traditional costume showcase`,
    date: "2023-11-20",
    time: "12:00 PM - 8:00 PM",
    location: "University Square",
    category: "cultural",
    image: "/images/campus/IMG-20250212-WA0021.jpg",
    registrationLink: "/events/register/1",
    organizer: "International Student Association",
    capacity: 500,
    price: "Free",
    schedule: [
      { time: "12:00 PM", activity: "Opening Ceremony" },
      { time: "1:00 PM", activity: "Cultural Performances Begin" },
      { time: "3:00 PM", activity: "International Food Court Opens" },
      { time: "5:00 PM", activity: "Workshop Sessions" },
      { time: "7:00 PM", activity: "Grand Finale Performance" },
      { time: "8:00 PM", activity: "Closing Ceremony" },
    ],
  },
  // Add other events here
]

export default function EventPage({ params }: { params: { id: string } }) {
  const event = events.find((e) => e.id === Number.parseInt(params.id)) || events[0]

  return (
    <div className="container py-12">
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Image
            src={event.image || "/placeholder.svg"}
            alt={event.title}
            width={800}
            height={400}
            className="rounded-lg mb-6"
          />
          <h1 className="text-4xl font-bold text-primary mb-4">{event.title}</h1>
          <p className="text-xl text-muted-foreground mb-6">{event.description}</p>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Event Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  <span>{new Date(event.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-2 h-5 w-5" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center">
                  <Users className="mr-2 h-5 w-5" />
                  <span>Capacity: {event.capacity} people</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>About This Event</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="whitespace-pre-line">{event.longDescription}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {event.schedule.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <Clock className="mr-2 h-5 w-5 flex-shrink-0" />
                    <div>
                      <span className="font-bold">{item.time}</span>
                      <p className="text-muted-foreground">{item.activity}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <Button className="w-full" size="lg">
                  Register Now
                </Button>
                <Button variant="outline" className="w-full" size="lg">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share Event
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Organizer</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{event.organizer}</p>
              <Button variant="link" className="p-0">
                Contact Organizer
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Additional Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p>
                  <strong>Price:</strong> {event.price}
                </p>
                <p>
                  <strong>Category:</strong> {event.category}
                </p>
                <Link href="/student-life/events">
                  <Button variant="link" className="p-0">
                    View All Events
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
