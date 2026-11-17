import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { BookOpen, Briefcase, HeartPulse, Library, GraduationCap, Users } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Ressources pour étudiants | ABS",
  description: "Ressources académiques et services d'appui pour les étudiants de ABS — African Business School.",
  path: "/student-resources",
})

export default function StudentResourcesPage() {
  const resources = [
    {
      title: "Academic Advising",
      description: "Get guidance on course selection and academic planning",
      icon: BookOpen,
      link: "/student-resources/academic-advising",
    },
    {
      title: "Career Services",
      description: "Explore career opportunities and get job search assistance",
      icon: Briefcase,
      link: "/student-resources/career-services",
    },
    {
      title: "Health and Wellness",
      description: "Access medical and mental health services",
      icon: HeartPulse,
      link: "/student-resources/health-wellness",
    },
    {
      title: "Library Services",
      description: "Utilize our extensive collection of books and digital resources",
      icon: Library,
      link: "/student-resources/library",
    },
    {
      title: "Tutoring and Learning Support",
      description: "Get help with challenging subjects and improve your study skills",
      icon: GraduationCap,
      link: "/student-resources/tutoring",
    },
    {
      title: "Student Organizations",
      description: "Join clubs and organizations to enhance your college experience",
      icon: Users,
      link: "/student-life/organizations",
    },
  ]

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Student Resources</h1>
      <p className="text-xl mb-12">
        At African Business School (ABS), we're committed to supporting your academic journey and personal growth. Explore the wide
        range of resources available to help you succeed.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {resources.map((resource, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <resource.icon className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>{resource.title}</CardTitle>
              <CardDescription>{resource.description}</CardDescription>
            </CardHeader>
            <CardContent className="mt-auto">
              <Link href={resource.link}>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="academic" className="mb-12">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
          <TabsTrigger value="academic">Academic Support</TabsTrigger>
          <TabsTrigger value="wellness">Health & Wellness</TabsTrigger>
          <TabsTrigger value="career">Career Development</TabsTrigger>
        </TabsList>
        <TabsContent value="academic">
          <Card>
            <CardHeader>
              <CardTitle>Academic Support Services</CardTitle>
              <CardDescription>Empowering your academic success</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>One-on-one tutoring sessions</li>
                <li>Writing center for essay assistance</li>
                <li>Math and science help desks</li>
                <li>Study skills workshops</li>
                <li>Academic coaching</li>
                <li>Disability support services</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="wellness">
          <Card>
            <CardHeader>
              <CardTitle>Health & Wellness Resources</CardTitle>
              <CardDescription>Supporting your physical and mental well-being</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>On-campus health clinic</li>
                <li>Counseling and psychological services</li>
                <li>Fitness center and recreational sports</li>
                <li>Nutrition counseling</li>
                <li>Stress management workshops</li>
                <li>Mindfulness and meditation classes</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="career">
          <Card>
            <CardHeader>
              <CardTitle>Career Development Opportunities</CardTitle>
              <CardDescription>Preparing you for professional success</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Resume and cover letter reviews</li>
                <li>Mock interviews</li>
                <li>Internship placements</li>
                <li>Career fairs and networking events</li>
                <li>Job search strategies workshops</li>
                <li>Alumni mentorship program</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="bg-secondary p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
        <p className="mb-6">
          Our Student Services team is here to assist you. Don't hesitate to reach out if you have any questions or need
          support.
        </p>
        <Link href="/contact">
          <Button>Contact Student Services</Button>
        </Link>
      </div>
    </div>
  )
}
