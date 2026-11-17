import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { BookOpen, Briefcase, HeartPulse, Library, GraduationCap, Users } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Recursos para estudiantes | ABS",
  description: "Recursos académicos y servicios de apoyo para los estudiantes de ABS — African Business School.",
  path: "/student-resources",
  locale: "es",
})

export default function StudentResourcesPage() {
  const resources = [
    {
      title: "Asesoría académica",
      description: "Reciba orientación sobre la selección de cursos y la planificación académica",
      icon: BookOpen,
      link: "/student-resources/academic-advising",
    },
    {
      title: "Servicios de carrera",
      description: "Explore las oportunidades profesionales y reciba ayuda en la búsqueda de empleo",
      icon: Briefcase,
      link: "/student-resources/career-services",
    },
    {
      title: "Salud y bienestar",
      description: "Acceda a los servicios médicos y de salud mental",
      icon: HeartPulse,
      link: "/student-resources/health-wellness",
    },
    {
      title: "Servicios de biblioteca",
      description: "Aproveche nuestra amplia colección de libros y recursos digitales",
      icon: Library,
      link: "/student-resources/library",
    },
    {
      title: "Tutorías y apoyo al aprendizaje",
      description: "Reciba ayuda con las asignaturas más difíciles y mejore sus técnicas de estudio",
      icon: GraduationCap,
      link: "/student-resources/tutoring",
    },
    {
      title: "Organizaciones estudiantiles",
      description: "Únase a clubes y organizaciones para enriquecer su experiencia universitaria",
      icon: Users,
      link: "/student-life/organizations",
    },
  ]

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Recursos estudiantiles</h1>
      <p className="text-xl mb-12">
        En la Universidad ABS, estamos comprometidos con el apoyo a su trayectoria académica y a su crecimiento
        personal. Explore la amplia gama de recursos disponibles para ayudarle a tener éxito.
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
                  Saber más
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="academic" className="mb-12">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
          <TabsTrigger value="academic">Apoyo académico</TabsTrigger>
          <TabsTrigger value="wellness">Salud y bienestar</TabsTrigger>
          <TabsTrigger value="career">Desarrollo profesional</TabsTrigger>
        </TabsList>
        <TabsContent value="academic">
          <Card>
            <CardHeader>
              <CardTitle>Servicios de apoyo académico</CardTitle>
              <CardDescription>Impulsando su éxito académico</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Sesiones de tutoría individualizadas</li>
                <li>Centro de escritura para la ayuda con redacciones</li>
                <li>Mesas de ayuda de matemáticas y ciencias</li>
                <li>Talleres de técnicas de estudio</li>
                <li>Coaching académico</li>
                <li>Servicios de apoyo para personas con discapacidad</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="wellness">
          <Card>
            <CardHeader>
              <CardTitle>Recursos de salud y bienestar</CardTitle>
              <CardDescription>Apoyando su bienestar físico y mental</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Clínica de salud en el campus</li>
                <li>Servicios de orientación y apoyo psicológico</li>
                <li>Centro de fitness y deportes recreativos</li>
                <li>Asesoramiento nutricional</li>
                <li>Talleres de gestión del estrés</li>
                <li>Clases de mindfulness y meditación</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="career">
          <Card>
            <CardHeader>
              <CardTitle>Oportunidades de desarrollo profesional</CardTitle>
              <CardDescription>Preparándole para el éxito profesional</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Revisión de CV y cartas de presentación</li>
                <li>Entrevistas simuladas</li>
                <li>Colocación en pasantías</li>
                <li>Ferias de empleo y eventos de networking</li>
                <li>Talleres de estrategias de búsqueda de empleo</li>
                <li>Programa de mentoría de antiguos alumnos</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="bg-secondary p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">¿Necesita ayuda?</h2>
        <p className="mb-6">
          Nuestro equipo de Servicios Estudiantiles está a su disposición. No dude en contactarnos si tiene alguna
          pregunta o necesita apoyo.
        </p>
        <Link href="/contact">
          <Button>Contactar con los Servicios Estudiantiles</Button>
        </Link>
      </div>
    </div>
  )
}
