import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Book, BookOpen, Database, Globe, Clock, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Student Library | ABS",
  description: "Library and work spaces for the students of ABS — African Business School.",
  path: "/student-resources/library",
  locale: "en",
})

export default function LibraryServicesPage() {
  const services = [
    {
      title: "Borrowing books",
      description: "Access the physical books made available to students",
      icon: Book,
    },
    {
      title: "Digital resources",
      description: "Consult the online resources suited to your programme",
      icon: Database,
    },
    {
      title: "Research help",
      description: "Get guidance with your documentary research",
      icon: Globe,
    },
    {
      title: "Work spaces",
      description: "Study in spaces conducive to learning, alone or in groups",
      icon: BookOpen,
    },
  ]

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Library and documentary resources</h1>
      <p className="text-xl mb-12">
        The African Business School (ABS) library is your gateway to academic resources. It supports your learning and your work
        across the institution&apos;s five academic schools.
      </p>

      <div className="mb-12">
        <Image
          src="/images/campus/IMG-20250212-WA0021.jpg"
          alt="African Business School (ABS) library"
          width={1200}
          height={600}
          className="rounded-lg shadow-lg"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {services.map((service, index) => (
          <Card key={index}>
            <CardHeader>
              <service.icon className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="catalog" className="mb-12">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
          <TabsTrigger value="catalog">Catalogue</TabsTrigger>
          <TabsTrigger value="databases">Digital resources</TabsTrigger>
          <TabsTrigger value="services">Services</TabsTrigger>
          <TabsTrigger value="hours">Hours and access</TabsTrigger>
        </TabsList>
        <TabsContent value="catalog">
          <Card>
            <CardHeader>
              <CardTitle>Catalogue</CardTitle>
              <CardDescription>Find the books and resources available</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                The catalogue lists the books and documentary resources of the library. Use the search field below to
                find the documents you need:
              </p>
              <div className="bg-secondary p-4 rounded-lg">
                <input
                  type="text"
                  placeholder="Search the catalogue..."
                  className="w-full p-2 rounded border border-gray-300"
                />
                <Button className="mt-2">Search</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="databases">
          <Card>
            <CardHeader>
              <CardTitle>Digital resources</CardTitle>
              <CardDescription>Access the online resources made available</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Digital books connected with the teaching of the five schools</li>
                <li>Reference resources for coursework and programme projects</li>
                <li>Documentation supporting internship preparation</li>
                <li>Additional materials recommended by teachers</li>
              </ul>
              <p className="mt-4 text-sm text-muted-foreground">
                The resources you can access depend on the subscriptions and agreements in force; the list is
                communicated by the library.
              </p>
              <Link href="/library/online-resources">
                <Button className="mt-4">View all resources</Button>
              </Link>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="services">
          <Card>
            <CardHeader>
              <CardTitle>Services offered</CardTitle>
              <CardDescription>Support that goes beyond simple book lending</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Documentary guidance for your coursework and projects</li>
                <li>Support with your research</li>
                <li>Advice on citation and organising references</li>
                <li>Work spaces for individual and group study</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="hours">
          <Card>
            <CardHeader>
              <CardTitle>Hours and access</CardTitle>
              <CardDescription>Find us on campus</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center mb-4">
                <Clock className="h-5 w-5 mr-2" />
                <span>Opening hours communicated by the administration at the start of the year</span>
              </div>
              <div className="flex items-center mb-4">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Opening adapted to the institution&apos;s academic calendar</span>
              </div>
              <p className="mb-4">
                The library is located on the African Business School (ABS) campus, Hamdallaye ACI 2000, Bamako. Access and borrowing
                conditions are set out by the administration.
              </p>
              <Link href="/campus/map">
                <Button>View the campus map</Button>
              </Link>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="bg-primary text-primary-foreground p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Need help?</h2>
        <p className="mb-6">
          The library team is here to support your research and guide you through the resources. Do not hesitate to
          reach out.
        </p>
        <Link href="/contact/library">
          <Button variant="secondary">Contact the library</Button>
        </Link>
      </div>
    </div>
  )
}
