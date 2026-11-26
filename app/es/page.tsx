"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, CheckCircle2, GraduationCap, Newspaper, Users } from "lucide-react"

const logoUrl = "/images/abs-logo.png"
const heroUrl = "/images/campus/IMG-20250212-WA0021.jpg"
const directorUrl = "/images/documents/dg-seance-travail.jpg"

// Equivalents espagnols des éléments de marque (ORGANIZATION, lib/constants).
const signature = "Su puerta de entrada al mundo"
const signatureSecondaire = "La ambición africana, los horizontes internacionales."
const territoire = "Bamako – Mundo."
const mission =
  "Formar competencias capaces de comprender las transformaciones de su entorno y de aportar respuestas útiles."

const domains = [
  {
    title: "Administración de Empresas",
    description: "Dirección, finanzas, marketing, organización, emprendimiento y gestión de las actividades.",
    href: "/programs/business-administration",
  },
  {
    title: "Ingeniería Informática",
    description: "Desarrollo de software, sistemas digitales, datos e iniciación progresiva a los retos de la inteligencia artificial.",
    href: "/programs/engineering/computer-science",
  },
  {
    title: "Ingeniería Geológica, Civil y Minera",
    description: "Comprensión de los recursos, los materiales, las obras y los proyectos técnicos, con atención a la seguridad y al medio ambiente.",
    href: "/programs/geological-civil-mining-engineering",
  },
  {
    title: "Relaciones y Asuntos Internacionales",
    description: "Análisis de los retos internacionales, diplomacia, cooperación, instituciones y comunicación intercultural.",
    href: "/programs/international-relations",
  },
  {
    title: "Periodismo-Comunicación",
    description: "Información, redacción, comunicación, producción de contenidos y medios digitales.",
    href: "/programs/journalism-communication",
  },
]

const whyAbs = [
  "Una ambición panafricana: aprender a partir de las realidades del continente y dialogar con el mundo.",
  "Una pedagogía orientada a la acción: estudios de caso, proyectos, presentaciones y simulaciones prácticas según las enseñanzas.",
  "Competencias transversales: comunicación, inglés, herramientas digitales, desarrollo personal y trabajo en equipo.",
  "Una cultura de responsabilidad: ética, profesionalidad, respeto y consideración de los retos del desarrollo sostenible.",
  "Un entorno a escala humana: una relación de cercanía que favorece la orientación, la escucha y el compromiso.",
]

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const testimonials = [
    ["Formar con exigencia, revelar los talentos y preparar a los constructores del África del mañana.", "Sokhna Maryama Thiam", "Directora General"],
    ["En ABS, aprendemos a transformar las ideas en proyectos útiles para nuestra sociedad.", "Aïssata Diarra", "Estudiante de Administración de Empresas"],
    ["El enfoque práctico nos prepara para convertirnos en líderes responsables y operativos.", "Mamadou Traoré", "Exalumno de ABS"],
  ]

  return (
    <main id="top" className="overflow-hidden">
      {/* Bandeau principal — V3 §3.1 */}
      <section className="relative min-h-[620px] bg-slate-950 text-white">
        <img src={heroUrl} alt="Campus de la ABS — African Business School en Bamako" className="absolute inset-0 h-full w-full object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-blue-950/55" />
        <div className="container relative mx-auto flex min-h-[620px] items-center px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur">
              <span className="-my-1 flex size-12 shrink-0 items-center justify-center rounded-lg bg-white p-1">
                <img src={logoUrl} alt="Logo de ABS" className="h-full w-full object-contain" />
              </span>
              <span>{territoire}</span>
            </div>
            <p className="mb-4 font-semibold uppercase tracking-[0.28em] text-cyan-300">{signature}</p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">ABS — African Business School</h1>
            <p className="mt-4 text-xl font-medium text-cyan-200 sm:text-2xl">{signatureSecondaire}</p>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200">En Bamako, ABS defiende una visión de la educación superior que combina conocimientos, competencias prácticas, apertura internacional y responsabilidad. Nuestra ambición: acompañar a los estudiantes en la construcción de su proyecto académico y profesional, con una atención especial a las realidades africanas y a las transformaciones del mundo.</p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Button asChild size="lg" className="bg-cyan-400 text-slate-950 hover:bg-cyan-300"><Link href="/academics/programs">Descubrir nuestras formaciones <ArrowRight className="ml-2 size-4" /></Link></Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 bg-white/5 bg-transparent text-white hover:bg-white/15"><Link href="/apply">Preparar mi candidatura</Link></Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 bg-white/5 bg-transparent text-white hover:bg-white/15"><Link href="/contact">Contactar con ABS</Link></Button>
            </div>
          </div>
        </div>
      </section>

      {/* Bloc de présentation — V3 §3.2 */}
      <section className="border-b bg-white py-20"><div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-semibold uppercase tracking-[0.2em] text-blue-700">Presentación</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">Aprender, practicar, construir su futuro</h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">Elegir una formación es elegir un rumbo. En ABS, queremos ayudar a cada estudiante a comprender los retos de su ámbito, a desarrollar métodos de trabajo sólidos y a transformar progresivamente sus adquisiciones en competencias movilizables. Las enseñanzas están concebidas para hacer dialogar los fundamentos, los estudios de caso, los proyectos y el descubrimiento del mundo profesional, según las modalidades definidas para cada formación.</p>
        </div>
      </div></section>

      {/* Bloc « Pourquoi ABS ? » — V3 §3.3 */}
      <section className="bg-slate-50 py-20"><div className="container mx-auto px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-center">
          <div><p className="font-semibold uppercase tracking-[0.2em] text-blue-700">¿Por qué ABS?</p><h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">Una universidad africana orientada a la acción.</h2><p className="mt-5 leading-7 text-slate-600">{mission}</p><ul className="mt-7 space-y-4">{whyAbs.map(item => <li key={item} className="flex gap-3 text-sm font-medium text-slate-700"><CheckCircle2 className="size-5 shrink-0 text-cyan-600" />{item}</li>)}</ul><Button asChild variant="outline" className="mt-8"><Link href="/about/mission">Nuestra visión y nuestros valores <ArrowRight className="ml-2 size-4" /></Link></Button></div>
          <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl"><img src={directorUrl} alt="Sokhna Maryama Thiam, Directora General de la ABS — African Business School" className="h-[420px] w-full object-cover object-top" /><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 to-transparent p-7 pt-24 text-white"><p className="font-semibold">Sokhna Maryama Thiam</p><p className="text-sm text-slate-200">Directora General</p></div></div>
        </div>
      </div></section>

      {/* Nos domaines de formation — V3 §3.4 */}
      <section className="bg-white py-20"><div className="container mx-auto px-6 lg:px-8"><div className="flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><p className="font-semibold uppercase tracking-[0.2em] text-blue-700">Nuestros ámbitos de formación</p><h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">Cinco ámbitos, una misma exigencia.</h2></div><Link href="/academics/programs" className="inline-flex items-center font-semibold text-blue-700 hover:text-blue-900">Ver todas las formaciones <ArrowRight className="ml-2 size-4" /></Link></div><p className="mt-5 max-w-3xl leading-7 text-slate-600">ABS desarrolla itinerarios en los ámbitos de la dirección, la ingeniería, lo digital, las relaciones internacionales y la comunicación. La lista de los itinerarios efectivamente abiertos para cada curso académico se expone y se actualiza por la administración.</p><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{domains.map(domain => <Card key={domain.title} className="border-slate-200 transition-shadow hover:shadow-lg"><CardHeader><div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-700"><GraduationCap className="size-4" />Licencia (grado) · Máster</div><CardTitle className="text-xl">{domain.title}</CardTitle></CardHeader><CardContent><p className="leading-7 text-slate-600">{domain.description}</p><Button asChild variant="link" className="mt-3 h-auto px-0 text-blue-700"><Link href={domain.href}>Saber más <ArrowRight className="ml-2 size-4" /></Link></Button></CardContent></Card>)}</div></div></section>

      {/* Bloc Admissions — V3 §3.5 */}
      <section className="bg-blue-950 py-20 text-white"><div className="container mx-auto px-6 text-center lg:px-8"><GraduationCap className="mx-auto size-10 text-cyan-300" /><h2 className="mt-5 text-4xl font-bold">Su proyecto empieza aquí</h2><p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-blue-100">¿Desea incorporarse a ABS? Descubra las formaciones propuestas, verifique las condiciones de acceso y contacte con el equipo para ser orientado hacia las etapas correspondientes a su situación. Las condiciones, los documentos, las fechas y las tasas aplicables son los comunicados oficialmente por la administración para el curso académico correspondiente.</p><div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row"><Button asChild size="lg" className="bg-cyan-400 text-slate-950 hover:bg-cyan-300"><Link href="/admissions">Comprender las admisiones</Link></Button><Button asChild size="lg" variant="outline" className="border-white/40 bg-transparent text-white hover:bg-white/10"><Link href="/contact">Contactar con la administración</Link></Button></div></div></section>

      {/* Vie de campus et actualités — V3 §3.6 */}
      <section className="bg-slate-50 py-20"><div className="container mx-auto px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <p className="font-semibold uppercase tracking-[0.2em] text-blue-700">Vida de campus y novedades</p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">La vida en ABS también se construye fuera de las aulas.</h2>
            <p className="mt-5 leading-7 text-slate-600">Conferencias, encuentros, visitas, proyectos, eventos e iniciativas estudiantiles contribuyen a la apertura de mente y a la profesionalización. Las novedades del sitio presentan únicamente las actividades efectivamente realizadas u oficialmente programadas.</p>
            <Button asChild variant="outline" className="mt-8"><Link href="/about/news">Ver las novedades <Newspaper className="ml-2 size-4" /></Link></Button>
          </div>
          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <Newspaper className="size-8 text-blue-700" />
            <h3 className="mt-4 text-xl font-semibold text-slate-950">Seguir la vida de la institución</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">Encuentre los eventos, los proyectos estudiantiles y las iniciativas de la comunidad ABS en la sección de Novedades.</p>
          </div>
        </div>
      </div></section>

      {/* Témoignages */}
      <section className="bg-white py-20"><div className="container mx-auto px-6 lg:px-8"><div className="mx-auto max-w-3xl text-center"><Users className="mx-auto size-8 text-blue-700" /><h2 className="mt-4 text-3xl font-bold text-slate-950">La comunidad ABS en pocas palabras</h2><blockquote className="mt-8 text-xl leading-9 text-slate-700">“{testimonials[activeTestimonial][0]}”</blockquote><p className="mt-5 font-semibold text-slate-950">{testimonials[activeTestimonial][1]}</p><p className="text-sm text-slate-500">{testimonials[activeTestimonial][2]}</p><div className="mt-7 flex justify-center gap-2">{testimonials.map((_, index) => <button key={index} aria-label={`Mostrar el testimonio ${index + 1}`} onClick={() => setActiveTestimonial(index)} className={`h-2 rounded-full transition-all ${activeTestimonial === index ? "w-8 bg-blue-700" : "w-2 bg-slate-300"}`} />)}</div></div></div></section>

      {/* Appel final — V3 §3.7 */}
      <section className="bg-slate-950 py-20 text-white"><div className="container mx-auto px-6 text-center lg:px-8"><h2 className="text-4xl font-bold">Su ambición merece un proyecto sólido.</h2><p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">Contacte con ABS para descubrir los itinerarios disponibles y obtener información fiable sobre su orientación.</p><div className="mt-8"><Button asChild size="lg" className="bg-cyan-400 text-slate-950 hover:bg-cyan-300"><Link href="/contact">Hablar con el equipo de ABS <ArrowRight className="ml-2 size-4" /></Link></Button></div></div></section>
    </main>
  )
}
