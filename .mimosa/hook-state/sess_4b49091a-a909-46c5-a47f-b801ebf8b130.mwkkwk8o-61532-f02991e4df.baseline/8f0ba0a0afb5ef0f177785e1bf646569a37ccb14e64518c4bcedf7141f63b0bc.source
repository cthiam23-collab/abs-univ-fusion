import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Business Programs at ABS University",
  description:
    "Explore our comprehensive range of business programs at African Business School University, including Business Administration, Finance, Marketing, and more.",
}

export default function BusinessProgramsPage() {
  const programs = [
    {
      title: "Business Administration",
      description: "Develop essential business skills and leadership capabilities.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      link: "/programs/business/business-administration",
    },
    {
      title: "Finance",
      description: "Master financial management and investment strategies.",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      link: "/programs/business/finance",
    },
    {
      title: "Marketing",
      description: "Learn cutting-edge marketing techniques and consumer behavior analysis.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      link: "/programs/business/marketing",
    },
    {
      title: "International Business",
      description: "Prepare for a global business career with our international focus.",
      image:
        "https://images.unsplash.com/photo-1526470498-9ae73c665de8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      link: "/programs/business/international-business",
    },
    {
      title: "Entrepreneurship",
      description: "Develop the skills to start and grow your own business.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      link: "/programs/business/entrepreneurship",
    },
    {
      title: "Management Information Systems",
      description: "Bridge business and technology with our MIS program.",
      image:
        "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      link: "/programs/business/management-information-systems",
    },
  ]

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6">Business Programs at ABS University</h1>
      <p className="text-xl mb-8">
        Discover our comprehensive range of business programs designed to prepare you for success in the global
        marketplace.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {programs.map((program, index) => (
          <Card key={index} className="flex flex-col">
            <Image
              src={program.image || "/placeholder.svg"}
              alt={program.title}
              width={400}
              height={200}
              className="object-cover h-48 w-full rounded-t-lg"
            />
            <CardHeader>
              <CardTitle>{program.title}</CardTitle>
              <CardDescription>{program.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <Button asChild className="w-full mt-4">
                <Link href={program.link}>Learn More</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-4">Why Choose ABS for Business?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Industry Connections</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Benefit from our strong ties with leading African and global businesses, providing internship and job
                opportunities.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Experienced Faculty</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Learn from industry experts and seasoned academics with real-world business experience.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>State-of-the-Art Facilities</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Access modern classrooms, a business incubator, and advanced technology labs to enhance your learning
                experience.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Global Perspective</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Gain insights into international business practices through our diverse student body and study abroad
                opportunities.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mt-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Business Journey?</h2>
        <p className="text-xl mb-6">Take the first step towards a successful career in business with ABS University.</p>
        <Button asChild size="lg">
          <Link href="/apply">Apply Now</Link>
        </Button>
      </section>
    </div>
  )
}
