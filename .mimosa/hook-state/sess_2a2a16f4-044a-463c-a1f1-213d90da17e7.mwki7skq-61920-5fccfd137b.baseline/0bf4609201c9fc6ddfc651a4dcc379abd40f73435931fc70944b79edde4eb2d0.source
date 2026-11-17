import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = buildMetadata({
  title: "African Business School (ABS) Campus in Bamako",
  description:
    "Explore the African Business School (ABS) campus in Bamako: modern classrooms, library, digital spaces and community life in support of student success.",
  path: "/campus",
  locale: "en",
})

export default function CampusPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Our campus</h1>

      <div className="mb-12">
        <Image
          src="/images/campus/african-business-school-campus.jpg"
          alt="African Business School (ABS) campus"
          width={1200}
          height={600}
          className="w-full rounded-lg shadow-lg"
        />
      </div>

      <Card className="mb-12">
        <CardHeader>
          <CardTitle>The campus at a glance</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">
            ABS — African Business School welcomes you to Hamdallaye ACI 2000, Bamako, in an environment designed
            for teaching and student success. Classrooms, work spaces and shared living areas are all organised in
            support of the institution&apos;s five academic schools and the student community.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="facilities" className="mb-12">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="facilities">Facilities</TabsTrigger>
          <TabsTrigger value="housing">Student housing</TabsTrigger>
          <TabsTrigger value="recreation">Student life</TabsTrigger>
        </TabsList>
        <TabsContent value="facilities">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Classrooms",
                description:
                  "Rooms equipped for the teaching of the five academic schools, from lectures to tutorial sessions.",
                image:
                  "/images/campus/IMG-20250212-WA0021.jpg",
              },
              {
                title: "Library and resources",
                description:
                  "A space dedicated to reading and research, with books and resources suited to the programmes.",
                image:
                  "/images/campus/IMG-20250212-WA0003.jpg",
              },
              {
                title: "Work spaces",
                description:
                  "Places to work alone or in groups, prepare projects and revise between classes.",
                image:
                  "/images/campus/IMG-20250212-WA0004.jpg",
              },
              {
                title: "Lecture halls and conference rooms",
                description:
                  "Spaces for large-group classes, conferences and meetings with professionals.",
                image:
                  "/images/campus/IMG-20250212-WA0006.jpg",
              },
              {
                title: "Practical work areas",
                description:
                  "Spaces dedicated to hands-on practice, notably for the computer engineering and geological, civil and mining engineering programmes.",
                image:
                  "/images/campus/IMG-20250212-WA0007.jpg",
              },
              {
                title: "Common areas",
                description:
                  "Places for conversation and relaxation that foster dialogue and community life among students.",
                image:
                  "/images/campus/IMG-20250212-WA0009.jpg",
              },
            ].map((facility, index) => (
              <Card key={index}>
                <Image
                  src={facility.image || "/placeholder.svg"}
                  alt={facility.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardHeader>
                  <CardTitle>{facility.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{facility.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="housing">
          <p className="text-lg mb-6">
            African Business School (ABS) supports its students with their housing arrangements in Bamako. Arrangements and
            availability are set out each year by the administration: we invite you to contact them to learn about the
            possible options and guidance advice.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <Image
                src="/images/campus/IMG-20250212-WA0010.jpg"
                alt="Finding accommodation near the campus"
                width={600}
                height={400}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardHeader>
                <CardTitle>Finding accommodation in Bamako</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside">
                  <li>Information on housing options, subject to availability</li>
                  <li>Guidance on finding accommodation suited to your situation</li>
                  <li>Points of reference on neighbourhoods close to the campus</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <Image
                src="/images/campus/IMG-20250212-WA0011.jpg"
                alt="Support for students"
                width={600}
                height={400}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardHeader>
                <CardTitle>Support for students</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside">
                  <li>Guidance from the administration on practical matters</li>
                  <li>Help settling in for new students, including those coming from other regions</li>
                  <li>Direct contact for any specific request</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="recreation">
          <p className="text-lg mb-6">
            Student life at ABS goes beyond the classroom: conversations, cultural activities and student-led
            initiatives all help strike a balance between studies and personal life.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Conversation and conviviality",
                description:
                  "Spaces and moments to get together with fellow students, exchange ideas and unwind after class.",
                image:
                  "/images/campus/IMG-20250212-WA0012.jpg",
              },
              {
                title: "Cultural activities",
                description:
                  "Highlights of the year celebrating the diversity of African cultures, according to the year's programme.",
                image:
                  "/images/campus/IMG-20250212-WA0013.jpg",
              },
              {
                title: "Relaxation spaces",
                description:
                  "Places to rest and chat on campus, conducive to student well-being.",
                image:
                  "/images/campus/IMG-20250212-WA0014.jpg",
              },
              {
                title: "Student initiatives",
                description:
                  "Clubs and projects led by students according to their interests, with support from the administration.",
                image:
                  "/images/campus/IMG-20250212-WA0015.jpg",
              },
              {
                title: "Events throughout the year",
                description:
                  "Conferences, guidance days and gatherings announced once they are officially scheduled.",
                image:
                  "/images/gallery/IMG-20250216-WA0015.jpg",
              },
              {
                title: "Dining",
                description:
                  "Dining options on site and nearby, set out by the administration at the start of the year.",
                image:
                  "/images/gallery/IMG-20250216-WA0021.jpg",
              },
            ].map((rec, index) => (
              <Card key={index}>
                <Image
                  src={rec.image || "/placeholder.svg"}
                  alt={rec.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardHeader>
                  <CardTitle>{rec.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{rec.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Come and discover our campus</h2>
        <p className="text-lg mb-6">
          A campus visit is the best way to picture your studies at ABS: teaching spaces, living areas and the teaching
          team. Contact us to arrange your visit.
        </p>
        <a
          href="/visit"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Plan a campus visit
        </a>
      </div>
    </div>
  )
}
