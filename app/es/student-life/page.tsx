import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import {
  Users,
  Dumbbell,
  CalendarDays,
  HeartHandshake,
  GraduationCap,
  ArrowRight,
  MapPin,
  Vote,
  Leaf,
  Briefcase,
} from "lucide-react"

export const metadata: Metadata = buildMetadata({
  title: "Vida estudiantil | ABS",
  description: "Vida estudiantil en ABS — African Business School: comunidad, eventos, clubes y acompañamiento.",
  path: "/student-life",
  locale: "es",
})

const stats = [
  { value: "5+", label: "Clubes y asociaciones estudiantiles", icon: Users },
  { value: "10+", label: "Eventos por año", icon: CalendarDays },
  { value: "80%", label: "De práctica en los planes de estudio", icon: GraduationCap },
  { value: "1", label: "Gobierno estudiantil: la BAGE", icon: Vote },
]

const vieAssociative = [
  {
    title: "La BAGE, su voz",
    description:
      "La Asamblea General de Estudiantes es el gobierno estudiantil de la Universidad ABS, elegido democráticamente cada año. Representa sus intereses ante la administración y organiza la vida del campus.",
    image: "/images/campus/IMG-20250212-WA0003.jpg",
    link: "/student-life/organizations",
  },
  {
    title: "Clubes temáticos",
    description:
      "Emprendimiento, cultura, medios, medio ambiente, digital: únase a un club existente o cree el suyo con el apoyo de la BAGE y de la administración.",
    image: "/images/gallery/IMG-20250216-WA0066.jpg",
    link: "/campus-life/organizations",
  },
  {
    title: "Compromiso ciudadano",
    description:
      "Mentoría de estudiantes de secundaria, voluntariado asociativo, campañas de reciclaje en el campus: la responsabilidad y la apertura forman parte de los valores que vivimos a diario.",
    image: "/images/gallery/IMG-20250216-WA0015.jpg",
    link: "/student-life/extracurricular-activities",
  },
]

const sportBienEtre = [
  {
    title: "Deporte integrado en los planes de estudio",
    description:
      "El deporte forma parte del horario de todos los estudiantes: fútbol, baloncesto, atletismo y fitness. Porque el bienestar físico sostiene el éxito académico.",
    image: "/images/campus/IMG-20250212-WA0006.jpg",
    link: "/student-life/athletics",
  },
  {
    title: "Torneos inter-promociones",
    description:
      "Las grandes citas deportivas del año unen a las promociones: campeonato de fútbol, torneos de baloncesto y jornadas de atletismo en el campus de Hamdallaye.",
    image: "/images/gallery/IMG-20250216-WA0067.jpg",
    link: "/campus-life/recreation",
  },
  {
    title: "Bienestar mental",
    description:
      "Escucha, acompañamiento y prevención: nuestro equipo de apoyo vela por el equilibrio entre la vida estudiantil, la intensidad de los planes de estudio y la vida personal.",
    image: "/images/gallery/IMG-20250216-WA0070.jpg",
    link: "/student-life/support",
  },
]

const evenements = [
  {
    title: "Jornadas de puertas abiertas",
    description: "Dé a conocer la Universidad ABS a sus allegados y conozca a los equipos pedagógicos.",
    image: "/images/campus/IMG-20250212-WA0009.jpg",
    link: "/student-life/events",
  },
  {
    title: "Semana del emprendimiento",
    description: "Talleres, presentaciones de proyectos y encuentros con emprendedores malienses y panafricanos.",
    image: "/images/gallery/IMG-20250216-WA0030.jpg",
    link: "/student-life/events",
  },
  {
    title: "Gala anual de ABS",
    description: "La gran cita de la comunidad: entrega de premios, cultura y celebración.",
    image: "/images/gallery/IMG-20250216-WA0034.jpg",
    link: "/student-life/events",
  },
]

const soutien = [
  {
    title: "Coaching y empleabilidad",
    description:
      "Cada estudiante se beneficia de un seguimiento personalizado: proyecto profesional, preparación para entrevistas, pasantías y creación de redes con las empresas socias.",
    image: "/images/campus/IMG-20250212-WA0012.jpg",
    link: "/student-resources",
  },
  {
    title: "Salud y servicios",
    description: "Orientación sanitaria, servicios administrativos y apoyo en el día a día para estudiar con tranquilidad.",
    image: "/images/gallery/IMG-20250216-WA0060.jpg",
    link: "/student-resources/health-services",
  },
  {
    title: "Apoyo académico",
    description:
      "Tutorías entre promociones, acceso a la biblioteca y a la plataforma e-campus: nadie se queda solo frente a las exigencias de la formación.",
    image: "/images/gallery/IMG-20250216-WA0072.jpg",
    link: "/library",
  },
]

function FeatureGrid({ items }: { items: { title: string; description: string; image: string; link: string }[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Card key={item.title} className="overflow-hidden border-slate-200 pt-0 gap-0 hover:shadow-lg transition-shadow">
          <Image
            src={item.image}
            alt={item.title}
            width={600}
            height={400}
            className="h-48 w-full object-cover"
          />
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-blue-900 mb-2">{item.title}</h3>
            <p className="text-sm text-slate-600 mb-4">{item.description}</p>
            <Link href={item.link} className="inline-flex items-center gap-1 text-sm font-semibold text-blue-700 hover:text-cyan-400">
              Descubrir <ArrowRight className="h-4 w-4" />
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default function StudentLifePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] flex items-center">
        <Image
          src="/images/campus/african-business-school-campus.jpg"
          alt="Campus de la Universidad ABS en Bamako"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/85 to-blue-950/60" />
        <div className="container mx-auto relative z-10 px-4">
          <Badge className="mb-4 bg-cyan-400 text-blue-950 hover:bg-cyan-400">Vida estudiantil</Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white max-w-3xl leading-tight mb-4">
            Su vida estudiantil en la Universidad ABS de Bamako
          </h1>
          <p className="text-lg text-cyan-50 max-w-2xl mb-8">
            En pleno corazón de Hamdallaye ACI 2000, la Universidad ABS ofrece mucho más que una formación de
            excelencia: un campus vivo, un gobierno estudiantil elegido, el deporte integrado en cada plan de estudios
            y una comunidad comprometida.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="bg-cyan-400 text-blue-950 hover:bg-cyan-50 font-semibold">
              <Link href="/student-life/events">Ver los eventos</Link>
            </Button>
            <Button asChild variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-blue-900">
              <Link href="/campus-life">Explorar el campus</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-blue-950 py-10">
        <div className="container mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="h-8 w-8 text-cyan-400 mx-auto mb-2" />
              <div className="text-3xl font-extrabold text-white">{stat.value}</div>
              <div className="text-sm text-slate-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Tabs */}
      <section className="container mx-auto py-16 px-4">
        <Tabs defaultValue="associatif" className="w-full">
          <TabsList className="flex flex-wrap justify-center mb-10">
            <TabsTrigger value="associatif">Vida asociativa</TabsTrigger>
            <TabsTrigger value="sport">Deporte y bienestar</TabsTrigger>
            <TabsTrigger value="evenements">Eventos</TabsTrigger>
            <TabsTrigger value="soutien">Apoyo y servicios</TabsTrigger>
          </TabsList>

          <TabsContent value="associatif">
            <div className="max-w-3xl mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-3">Comprometerse, decidir, construir</h2>
              <p className="text-slate-600">
                En la Universidad ABS, los estudiantes no son espectadores: son actores. Las asociaciones, los clubes
                temáticos y los proyectos solidarios marcan el ritmo del año y desarrollan la creatividad, la
                responsabilidad y el espíritu de equipo.
              </p>
            </div>
            <FeatureGrid items={vieAssociative} />
          </TabsContent>

          <TabsContent value="sport">
            <div className="max-w-3xl mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-3">Un cuerpo sano para una mente eficaz</h2>
              <p className="text-slate-600">
                El deporte y las actividades físicas están integrados en los planes de estudio de todas nuestras
                Licenciaturas y Másters. Competición, ocio o fitness: cada uno encuentra su lugar y refuerza su
                espíritu de equipo.
              </p>
            </div>
            <FeatureGrid items={sportBienEtre} />
          </TabsContent>

          <TabsContent value="evenements">
            <div className="max-w-3xl mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-3">Un año rico en citas</h2>
              <p className="text-slate-600">
                Desde el inicio del curso hasta la gala anual, la BAGE y los equipos de la Universidad programan más
                de 10 eventos por año: cultura, emprendimiento, deporte y apertura hacia África.
              </p>
            </div>
            <FeatureGrid items={evenements} />
            <div className="text-center mt-8">
              <Button asChild className="bg-blue-700 hover:bg-blue-900">
                <Link href="/student-life/events">
                  Calendario completo de eventos <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="soutien">
            <div className="max-w-3xl mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-3">Tener éxito, juntos</h2>
              <p className="text-slate-600">
                Coaching de carrera, salud, tutorías: nuestros servicios acompañan a cada estudiante desde el inicio
                del curso hasta la inserción profesional.
              </p>
            </div>
            <FeatureGrid items={soutien} />
          </TabsContent>
        </Tabs>
      </section>

      {/* Compromiso estudiantil — BAGE */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4 grid gap-10 lg:grid-cols-2 items-center">
          <div className="relative h-80 rounded-xl overflow-hidden">
            <Image
              src="/images/campus/IMG-20250212-WA0015.jpg"
              alt="Los estudiantes de la BAGE reunidos en el campus de ABS"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <Badge className="mb-3 bg-cyan-50 text-blue-700 border border-cyan-400">
              <Vote className="h-4 w-4 mr-1" /> Compromiso estudiantil
            </Badge>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">La BAGE: un gobierno estudiantil elegido</h2>
            <p className="text-slate-600 mb-4">
              La Asamblea General de Estudiantes (BAGE) se elige democráticamente cada año. Su junta directiva ocupa
              el corazón de la vida estudiantil: defiende sus ideas, negocia las mejoras del campus y coconstruye el
              calendario de eventos con la Dirección General.
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Representar a los estudiantes ante la administración",
                "Dinamizar los clubes y las asociaciones del campus",
                "Organizar los grandes eventos del año",
                "Impulsar los proyectos de RSE: mentoría, voluntariado, reciclaje",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-slate-700">
                  <HeartHandshake className="h-5 w-5 text-cyan-400 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Button asChild className="bg-blue-700 hover:bg-blue-900">
              <Link href="/student-life/organizations">
                Unirse a una asociación <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Empleabilidad */}
      <section className="container mx-auto py-16 px-4">
        <div className="grid gap-10 lg:grid-cols-3">
          {[
            {
              icon: Briefcase,
              title: "Coaching y pasantías",
              text: "Un acompañamiento individual hacia el empleo: CV, simulación de entrevista y pasantías en empresas asociadas desde la Licenciatura.",
            },
            {
              icon: Users,
              title: "Red profesional",
              text: "Foros profesionales, encuentros con alumni y empresas malienses y panafricanas que contratan directamente en el campus.",
            },
            {
              icon: Leaf,
              title: "Responsabilidad y RSE",
              text: "Mentoría de jóvenes, voluntariado y reciclaje: nuestros estudiantes se comprometen por un desarrollo sostenible de Malí y de África.",
            },
          ].map((item) => (
            <div key={item.title} className="border-l-4 border-cyan-400 bg-cyan-50 p-6 rounded-r-xl">
              <item.icon className="h-8 w-8 text-blue-700 mb-3" />
              <h3 className="text-lg font-bold text-blue-900 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-blue-950 py-14">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">¿Listo para vivir la experiencia ABS?</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            Únase a una universidad donde la formación de excelencia, la práctica y la vida del campus avanzan
            juntas, en pleno corazón de Bamako.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-cyan-400 text-blue-950 hover:bg-cyan-50 font-semibold">
              <Link href="/apply">Candidatarse ahora</Link>
            </Button>
            <Button asChild variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-blue-950">
              <Link href="/campus-life/housing">Alojamiento y vida de campus</Link>
            </Button>
          </div>
          <p className="mt-8 flex items-center justify-center gap-2 text-sm text-slate-400">
            <MapPin className="h-4 w-4 text-cyan-400" /> Hamdallaye ACI 2000, Bamako — Malí
          </p>
        </div>
      </section>
    </div>
  )
}
