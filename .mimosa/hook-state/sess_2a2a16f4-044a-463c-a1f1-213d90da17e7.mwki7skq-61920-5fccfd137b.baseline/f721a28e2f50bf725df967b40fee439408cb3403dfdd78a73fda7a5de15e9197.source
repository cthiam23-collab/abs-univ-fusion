import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BriefcaseIcon, UsersIcon, FileTextIcon } from "lucide-react"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Ressources carrières | ABS",
  description: "Ressources d'orientation et d'insertion professionnelle pour les étudiants de ABS.",
  path: "/resources/career-services",
})

const careerServices = [
  {
    name: "Career Counseling",
    description: "One-on-one sessions with career advisors to discuss your career goals and options",
    icon: BriefcaseIcon,
    category: "advising",
  },
  {
    name: "Resume and Cover Letter Workshops",
    description: "Learn how to create compelling job application materials",
    icon: FileTextIcon,
    category: "workshops",
  },
  {
    name: "Interview Preparation",
    description: "Practice your interview skills with mock interviews and feedback sessions",
    icon: UsersIcon,
    category: "workshops",
  },
  {
    name: "Job and Internship Board",
    description: "Access to exclusive job and internship opportunities for ABS students and alumni",
    icon: BriefcaseIcon,
    category: "resources",
  },
  {
    name: "Networking Events",
    description: "Connect with industry professionals and alumni at various networking events",
    icon: UsersIcon,
    category: "events",
  },
  {
    name: "Career Fairs",
    description: "Annual events bringing together employers and students for job and internship opportunities",
    icon: BriefcaseIcon,
    category: "events",
  },
]

export default function CareerServicesPage() {
  const categories = ["All", "Advising", "Workshops", "Resources", "Events"]

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Career Services</h1>
      <p className="text-xl mb-12 text-center">Empowering African Business School (ABS) students and alumni for career success</p>

      <Tabs defaultValue="All" className="w-full">
        <TabsList className="flex justify-center mb-8">
          {categories.map((category) => (
            <TabsTrigger key={category} value={category} className="px-4 py-2">
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
        {categories.map((category) => (
          <TabsContent key={category} value={category}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {careerServices
                .filter((service) => category === "All" || service.category.toLowerCase() === category.toLowerCase())
                .map((service, index) => (
                  <Card key={index} className="hover:shadow-lg transition-duration-300">
                    <CardHeader>
                      <div className="flex items-center">
                        <service.icon className="h-8 w-8 mr-2 text-blue-600" />
                        <CardTitle>{service.name}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p>{service.description}</p>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
