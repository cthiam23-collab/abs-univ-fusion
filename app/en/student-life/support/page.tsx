import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Heart, Globe } from "lucide-react"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Student Support | ABS",
  description: "Support and guidance services for the students of ABS — African Business School.",
  path: "/student-life/support",
  locale: "en",
})

export default function StudentSupportPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold text-primary mb-8">Student support</h1>

      <p className="text-xl text-muted-foreground mb-8">
        African Business School (ABS) is committed to supporting each student throughout their journey, both for academic success and
        for personal well-being.
      </p>

      <div className="grid gap-6 md:grid-cols-3 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center">
              <BookOpen className="mr-2 h-6 w-6" />
              Academic support
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-muted-foreground">
              <li>Academic monitoring of students</li>
              <li>Help organising your work</li>
              <li>Support in preparing the coursework and projects set out in the programme frameworks</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center">
              <Heart className="mr-2 h-6 w-6" />
              Listening and well-being
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-muted-foreground">
              <li>A team that listens to students</li>
              <li>Support in case of personal or academic difficulties</li>
              <li>Referral to the right contacts where needed</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center">
              <Globe className="mr-2 h-6 w-6" />
              International students
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-muted-foreground">
              <li>Welcoming and integrating students from elsewhere</li>
              <li>Practical guidance for life in Bamako</li>
              <li>Language support within a bilingual French-English framework</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <p className="text-muted-foreground">
        Our team is at your disposal throughout your studies. Do not hesitate to contact the administration if you need
        help: every request will be handled with care.
      </p>
    </div>
  )
}
