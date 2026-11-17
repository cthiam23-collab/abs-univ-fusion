import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"
import {
  Network,
  Users,
  GraduationCap,
  Calendar,
  MessageCircle,
  BookOpen,
  Briefcase,
  Quote,
  HandHeart,
  MapPin,
  Phone,
  Mail,
  Globe2,
} from "lucide-react"
import { ORGANIZATION } from "@/lib/constants"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Antiguos alumnos | ABS",
  description: "Manténgase conectado a la comunidad de titulados de ABS — African Business School: red, eventos y servicios dedicados a los alumni.",
  path: "/alumni",
  locale: "es",
})

const benefits = [
  {
    icon: Briefcase,
    title: "Acceso de por vida al tablero de empleo",
    description:
      "Ofertas de pasantías, empleos y misiones compartidas por la red y las empresas socias de ABS.",
  },
  {
    icon: Users,
    title: "Mentoría de estudiantes",
    description:
      "Acompañe a una promoción: una hora al mes para compartir su oficio, revisar un CV o preparar una entrevista.",
  },
  {
    icon: BookOpen,
    title: "Recursos académicos",
    description:
      "Acceso a la biblioteca universitaria y a sus recursos digitales para mantenerse al día en su ámbito.",
  },
  {
    icon: Calendar,
    title: "Eventos reservados",
    description:
      "Encuentros-debate, veladas de networking, conferencias de titulados: citas regulares en Bamako y en línea.",
  },
]

const industries = [
  "Banca y Microfinanzas",
  "Minas y Energía",
  "Telecomunicaciones y Digital",
  "ONG y Cooperación",
  "Auditoría y Consultoría",
  "Cadena de Suministro y Logística",
  "Gestión pública",
  "Emprendimiento",
]

const testimonials = [
  {
    name: "Aïcha K., Promoción 2023",
    role: "Analista de crédito — sector bancario, Bamako",
    quote:
      "Las simulaciones de entrevista del Career Center lo cambiaron todo. El día de la entrevista en el banco, me sabía mis argumentos de memoria.",
  },
  {
    name: "Ibrahim D., Promoción 2022",
    role: "Responsable de logística — sector minero, región de Kayes",
    quote:
      "El Máster en Cadena de Suministro de ABS es un 80 % de práctica. Mi pasantía se convirtió en contrato, y hoy coordino un equipo en el sitio.",
  },
  {
    name: "Fatoumata S., Promoción 2024",
    role: "Asistente de proyecto — ONG internacional",
    quote:
      "El inglés integrado en el plan de estudios me abrió puertas que no imaginaba: paso la mitad de mis reuniones en inglés.",
  },
  {
    name: "Moussa T., Promoción 2021",
    role: "Emprendedor — startup agroalimentaria, Bamako",
    quote:
      "Mi plan de negocios se construyó en ABS y se pulió ante un jurado de docentes y profesionales. La red sigue acompañándome.",
  },
]

export default function AlumniPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="relative h-[420px] overflow-hidden">
        <Image
          src="/images/campus/IMG-20250212-WA0022.jpg"
          alt="Comunidad de antiguos estudiantes de la African Business School"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/80 to-blue-900/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <p className="text-cyan-400 font-semibold uppercase tracking-widest text-sm mb-4">Red de titulados</p>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                La red de ABS: su diploma es un pasaporte profesional
              </h1>
              <p className="text-lg text-slate-200 mb-8">
                Orgullo de la African Business School, sus titulados llevan los valores de integración y de unidad
                africana a los bancos, las minas, las telecomunicaciones, las ONG y sus propias empresas, en Bamako
                como en toda la subregión. Una vez estudiante, siempre miembro de la red.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/alumni/networking">
                  <Button size="lg" className="bg-cyan-400 text-blue-950 hover:bg-cyan-300 font-semibold">
                    Unirse a la red
                  </Button>
                </Link>
                <Link href="/alumni/career-services">
                  <Button size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-blue-900">
                    Servicios para alumni
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="container mx-auto px-4 py-14">
        <Tabs defaultValue="reseau" className="w-full">
          <TabsList className="mb-8 flex-wrap">
            <TabsTrigger value="reseau">Red ABS</TabsTrigger>
            <TabsTrigger value="temoignages">Testimonios</TabsTrigger>
            <TabsTrigger value="connecte">Mantenerse conectado</TabsTrigger>
          </TabsList>

          {/* Réseau */}
          <TabsContent value="reseau">
            <div className="grid lg:grid-cols-2 gap-10 items-start mb-12">
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-4">Una red que trabaja para usted</h2>
                <p className="text-slate-600 mb-6">
                  La red de titulados de ABS reúne a profesionales activos en todos los sectores clave de la economía
                  malí y de África Occidental. Sirve como bolsa de talento para las empresas socias, como red de
                  seguridad para los nuevos titulados y como laboratorio de ideas para la universidad.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {industries.map((ind) => (
                    <span
                      key={ind}
                      className="px-3 py-1.5 rounded-full bg-cyan-50 text-blue-900 text-sm font-medium border border-cyan-400/40"
                    >
                      {ind}
                    </span>
                  ))}
                </div>
                <p className="text-slate-600 text-sm">
                  Estos ámbitos reflejan la distribución de nuestros titulados, fieles a las grandes carreras de la
                  universidad: MBA, Finanzas e Ingeniería Financiera, Finanzas Islámicas, Cadena de Suministro,
                  Gobernanza de la Contratación Pública, Ingeniería Minera.
                </p>
              </div>
              <div className="relative h-80 rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/images/gallery/IMG-20250216-WA0030.jpg"
                  alt="Titulados de ABS durante una ceremonia en el campus"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-blue-900 mb-6">Lo que la red le aporta</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-10">
              {benefits.map((b, i) => (
                <Card key={i} className="border-t-4 border-t-cyan-400 hover:shadow-md transition-shadow">
                  <CardHeader>
                    <b.icon className="h-8 w-8 text-blue-700 mb-2" />
                    <CardTitle className="text-lg text-blue-900">{b.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 text-sm">{b.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-blue-950 text-white border-0">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <GraduationCap className="h-10 w-10 text-cyan-400 shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Conviértase en mentor de un estudiante</h3>
                    <p className="text-slate-300 text-sm">
                      ¿Tiene un oficio, una experiencia, una red? Transmítalos: un estudiante de Licenciatura o de
                      Máster necesita su mirada una hora al mes. Es la tradición de ABS — todos han recibido, todos
                      dan.
                    </p>
                  </div>
                  <Link href="/alumni/networking">
                    <Button className="bg-cyan-400 text-blue-950 hover:bg-cyan-300 font-semibold shrink-0">
                      Ofrecer mi mentoría
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Témoignages */}
          <TabsContent value="temoignages">
            <div className="mb-10 max-w-3xl">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Han pasado por ABS</h2>
              <p className="text-slate-600 text-lg">
                Testimonios ilustrativos de titulados que hoy llevan el rigor y el pragmatismo de la African Business
                School a su día a día profesional.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 mb-10">
              {testimonials.map((t, i) => (
                <Card key={i} className="relative pt-8 hover:shadow-md transition-shadow">
                  <Quote className="absolute top-6 left-6 h-8 w-8 text-cyan-400" />
                  <CardContent className="pt-8">
                    <p className="text-slate-700 italic mb-6">« {t.quote} »</p>
                    <div className="flex items-center gap-4">
                      <div className="h-11 w-11 rounded-full bg-blue-900 flex items-center justify-center shrink-0">
                        <span className="text-cyan-400 font-bold text-sm">
                          {t.name.split(" ")[0].charAt(0)}
                          {t.name.split(" ")[1]?.charAt(0) ?? ""}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-blue-900">{t.name}</p>
                        <p className="text-sm text-slate-500">{t.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Card className="bg-cyan-50 border-cyan-400/40">
              <CardContent className="pt-6">
                <p className="text-blue-900">
                  <strong>¿Es titulado(a) de ABS?</strong> Comparta su recorrido con la comunidad: su historia puede
                  guiar a las promociones siguientes hacia el mismo éxito.
                </p>
                <Link href="/alumni/networking">
                  <Button className="mt-4 bg-blue-700 hover:bg-blue-900">Enviar mi testimonio</Button>
                </Link>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Rester connecté */}
          <TabsContent value="connecte">
            <div className="grid lg:grid-cols-2 gap-8 mb-10">
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-4">Mantenerse conectado a ABS</h2>
                <p className="text-slate-600 mb-6">
                  El vínculo con su alma máter no termina con la entrega de diplomas. Así puede seguir formando parte
                  de la familia ABS — y beneficiarse de ella.
                </p>
                <div className="space-y-5">
                  {[
                    {
                      icon: MessageCircle,
                      title: "Actualice sus datos de contacto",
                      description:
                        "¿Nuevo puesto, nueva ciudad? Avísanos para recibir las ofertas, invitaciones y novedades de la red.",
                    },
                    {
                      icon: Calendar,
                      title: "Participe en los eventos",
                      description:
                        "Jornadas de puertas abiertas, foros de empresas, conferencias profesionales: vuelva al campus y reencuéntrese con las promociones.",
                    },
                    {
                      icon: HandHeart,
                      title: "Aporte tiempo u oportunidades",
                      description:
                        "Una oferta de pasantía en su empresa, un taller profesional, una mentoría: cada contribución cuenta para la comunidad.",
                    },
                    {
                      icon: Globe2,
                      title: "Red panafricana",
                      description:
                        "La apertura africana es el ámbito de predilección de la universidad: conéctese con los alumni presentes en la subregión.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="h-10 w-10 rounded-lg bg-blue-900 flex items-center justify-center shrink-0">
                        <item.icon className="h-5 w-5 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-blue-900 mb-1">{item.title}</h3>
                        <p className="text-slate-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4 mt-8">
                  <Link href="/alumni/networking">
                    <Button className="bg-blue-700 hover:bg-blue-900">Unirse a la red</Button>
                  </Link>
                  <Link href="/events">
                    <Button variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50">
                      Ver los eventos
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="space-y-6">
                <div className="relative h-56 rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/images/gallery/IMG-20250216-WA0059.jpg"
                    alt="Vida asociativa y eventos en el campus de ABS"
                    fill
                    className="object-cover"
                  />
                </div>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-blue-900">Oficina de antiguos alumnos</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-slate-600">
                    <p className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-cyan-600 shrink-0" />
                      {ORGANIZATION.contact.address.formatted}
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-cyan-600 shrink-0" />
                      {ORGANIZATION.contact.phone}
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-cyan-600 shrink-0" />
                      {ORGANIZATION.contact.email}
                    </p>
                    <Link href="/contact">
                      <Button variant="outline" size="sm" className="mt-2 border-blue-700 text-blue-700 hover:bg-blue-50">
                        Escríbanos
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* CTA band */}
      <section className="bg-gradient-to-r from-blue-950 to-blue-900 py-14">
        <div className="container mx-auto px-4 text-center">
          <Network className="h-10 w-10 text-cyan-400 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">La red solo vale por sus miembros</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            Únase a la comunidad de titulados de la African Business School y haga crecer — juntos — la influencia de
            ABS en África y más allá.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/alumni/networking">
              <Button size="lg" className="bg-cyan-400 text-blue-950 hover:bg-cyan-300 font-semibold">
                Inscribirse en la red
              </Button>
            </Link>
            <Link href="/gallery">
              <Button size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-blue-900">
                Ver la vida del campus
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
