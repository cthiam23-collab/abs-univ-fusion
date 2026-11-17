import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Events | ABS",
  description: "Conferences, guidance days and events of ABS — African Business School in Bamako.",
  path: "/events",
  locale: "en",
})

const events = [
  {
    title: "Annual Career Fair",
    category: "career",
    description:
      "A meeting between students and professionals to explore career opportunities across different sectors.",
    image:
      "/images/campus/IMG-20250212-WA0022.jpg",
    link: "/events/annual-career-fair",
  },
  {
    title: "Career guidance days",
    category: "career",
    description:
      "Days dedicated to discovering professions and the study paths of ABS's five academic schools.",
    image:
      "/images/campus/IMG-20250212-WA0017.jpg",
    link: "",
  },
  {
    title: "Conferences and professional gatherings",
    category: "academic",
    description:
      "Guest talks and exchanges with professionals to enrich the teaching programme.",
    image: "/images/campus/IMG-20250212-WA0021.jpg",
    link: "",
  },
  {
    title: "Cultural activities",
    category: "cultural",
    description:
      "Highlights celebrating the diversity of African cultures and student creativity.",
    image: "/images/campus/IMG-20250212-WA0021.jpg",
    link: "",
  },
]

export default function EventsPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">African Business School (ABS) events</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Conferences, guidance days, meetings with professionals and cultural activities shape life at the institution.
        Dates are announced on this page once the events are officially scheduled.
      </p>

      <Tabs defaultValue="all" className="w-full mb-8">
        <TabsList>
          <TabsTrigger value="all">All events</TabsTrigger>
          <TabsTrigger value="academic">Academic</TabsTrigger>
          <TabsTrigger value="cultural">Cultural</TabsTrigger>
          <TabsTrigger value="career">Career</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {events.map((event, index) => (
              <Card key={index}>
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{event.description}</p>
                  {event.link && (
                    <Link href={event.link}>
                      <Button>Learn more</Button>
                    </Link>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="academic">
          <p className="text-muted-foreground">
            Conferences, guest talks and professional gatherings connected with the teaching of the five academic
            schools. Academic events are announced here once they are officially scheduled.
          </p>
        </TabsContent>
        <TabsContent value="cultural">
          <p className="text-muted-foreground">
            Cultural activities and student initiatives celebrating the diversity of African cultures. The year&apos;s
            programme is communicated by the administration as it is confirmed.
          </p>
        </TabsContent>
        <TabsContent value="career">
          <p className="text-muted-foreground">
            The annual career fair, guidance days and meetings with companies to prepare your entry into professional
            life. See the dedicated page on the{" "}
            <Link href="/events/annual-career-fair" className="text-primary underline">
              annual career fair
            </Link>
            .
          </p>
        </TabsContent>
      </Tabs>
    </div>
  )
}
