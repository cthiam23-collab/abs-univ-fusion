"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, CheckCircle2, GraduationCap, Newspaper, Users } from "lucide-react"
import { ORGANIZATION } from "@/lib/constants"

// Brand strings and mission statement localised in English for the /en tree
// (the shared ORGANIZATION constants remain the French source of truth).
const org = {
  ...ORGANIZATION,
  territoire: "Bamako – The World.",
  signature: "Your gateway to the world",
  signatureSecondaire: "African ambition, international horizons.",
  mission:
    "Rigorous training, rooted in African realities and open to skills, professions and international challenges.",
}

const logoUrl = "/images/abs-logo.png"
const heroUrl = "/images/campus/IMG-20250212-WA0021.jpg"
const directorUrl = "/images/documents/dg-seance-travail.jpg"

const domains = [
  {
    title: "Business Administration",
    description: "Management, finance, marketing, organisation, entrepreneurship and running business activities.",
    href: "/programs/business-administration",
  },
  {
    title: "Computer Engineering",
    description: "Software development, digital systems, data and a gradual introduction to the challenges of artificial intelligence.",
    href: "/programs/engineering/computer-science",
  },
  {
    title: "Geological, Civil and Mining Engineering",
    description: "Understanding resources, materials, structures and technical projects, with attention to safety and the environment.",
    href: "/programs/geological-civil-mining-engineering",
  },
  {
    title: "International Relations and Affairs",
    description: "Analysing international issues, diplomacy, cooperation, institutions and intercultural communication.",
    href: "/programs/international-relations",
  },
  {
    title: "Journalism and Communication",
    description: "News, writing, communication, content production and digital media.",
    href: "/programs/journalism-communication",
  },
]

const whyAbs = [
  "A pan-African ambition: learning from the realities of the continent and engaging in dialogue with the world.",
  "Action-oriented teaching: case studies, projects, presentations and hands-on scenarios, depending on the course.",
  "Transversal skills: communication, English, digital tools, personal development and teamwork.",
  "A culture of responsibility: ethics, professionalism, respect and consideration for sustainable development issues.",
  "A human-scale environment: close relationships that foster guidance, attentive listening and commitment.",
]

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const testimonials = [
    ["Training with rigour, revealing talent and preparing the builders of tomorrow's Africa.", "Sokhna Maryama Thiam", "Director General"],
    ["At ABS, we learn to turn ideas into projects that are useful to our society.", "Aïssata Diarra", "Management student"],
    ["The hands-on approach prepares us to become responsible, results-driven leaders.", "Mamadou Traoré", "ABS alumnus"],
  ]

  return (
    <main id="top" className="overflow-hidden">
      {/* Hero banner — V3 §3.1 */}
      <section className="relative min-h-[620px] bg-slate-950 text-white">
        <img src={heroUrl} alt="The ABS — African Business School campus in Bamako" className="absolute inset-0 h-full w-full object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-blue-950/55" />
        <div className="container relative mx-auto flex min-h-[620px] items-center px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur">
              <img src={logoUrl} alt="ABS logo" className="size-8 rounded-md object-contain" />
              <span>{org.territoire}</span>
            </div>
            <p className="mb-4 font-semibold uppercase tracking-[0.28em] text-cyan-300">{org.signature}</p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">ABS — African Business School</h1>
            <p className="mt-4 text-xl font-medium text-cyan-200 sm:text-2xl">{org.signatureSecondaire}</p>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200">In Bamako, ABS champions a vision of higher education that combines knowledge, practical skills, international openness and responsibility. Our ambition: to support students as they build their academic and professional projects, with particular attention to African realities and the transformations reshaping our world.</p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Button asChild size="lg" className="bg-cyan-400 text-slate-950 hover:bg-cyan-300"><Link href="/academics/programs">Explore our programmes <ArrowRight className="ml-2 size-4" /></Link></Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 bg-white/5 bg-transparent text-white hover:bg-white/15"><Link href="/apply">Start my application</Link></Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 bg-white/5 bg-transparent text-white hover:bg-white/15"><Link href="/contact">Connect with ABS</Link></Button>
            </div>
          </div>
        </div>
      </section>

      {/* Presentation block — V3 §3.2 */}
      <section className="border-b bg-white py-20"><div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-semibold uppercase tracking-[0.2em] text-blue-700">Overview</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">Learn, practise, build your future</h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">Choosing a programme means choosing a direction. At ABS, we want to help every student understand the challenges of their field, develop solid working methods and gradually turn their learning into applicable skills. Courses are designed to bring together fundamentals, case studies, projects and discovery of the professional world, according to the arrangements defined for each programme.</p>
        </div>
      </div></section>

      {/* "Why ABS?" block — V3 §3.3 */}
      <section className="bg-slate-50 py-20"><div className="container mx-auto px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-center">
          <div><p className="font-semibold uppercase tracking-[0.2em] text-blue-700">Why ABS?</p><h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">An African university geared towards action.</h2><p className="mt-5 leading-7 text-slate-600">{org.mission}</p><ul className="mt-7 space-y-4">{whyAbs.map(item => <li key={item} className="flex gap-3 text-sm font-medium text-slate-700"><CheckCircle2 className="size-5 shrink-0 text-cyan-600" />{item}</li>)}</ul><Button asChild variant="outline" className="mt-8"><Link href="/about/mission">Our vision and values <ArrowRight className="ml-2 size-4" /></Link></Button></div>
          <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl"><img src={directorUrl} alt="Sokhna Maryama Thiam, Director General of ABS — African Business School" className="h-[420px] w-full object-cover object-top" /><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 to-transparent p-7 pt-24 text-white"><p className="font-semibold">Sokhna Maryama Thiam</p><p className="text-sm text-slate-200">Director General</p></div></div>
        </div>
      </div></section>

      {/* Our fields of study — V3 §3.4 */}
      <section className="bg-white py-20"><div className="container mx-auto px-6 lg:px-8"><div className="flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><p className="font-semibold uppercase tracking-[0.2em] text-blue-700">Our fields of study</p><h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">Five fields, one standard of excellence.</h2></div><Link href="/academics/programs" className="inline-flex items-center font-semibold text-blue-700 hover:text-blue-900">View all programmes <ArrowRight className="ml-2 size-4" /></Link></div><p className="mt-5 max-w-3xl leading-7 text-slate-600">ABS develops programmes in the fields of management, engineering, digital technology, international relations and communication. The list of programmes actually open for each intake is displayed and updated by the administration.</p><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{domains.map(domain => <Card key={domain.title} className="border-slate-200 transition-shadow hover:shadow-lg"><CardHeader><div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-700"><GraduationCap className="size-4" />Licence · Master</div><CardTitle className="text-xl">{domain.title}</CardTitle></CardHeader><CardContent><p className="leading-7 text-slate-600">{domain.description}</p><Button asChild variant="link" className="mt-3 h-auto px-0 text-blue-700"><Link href={domain.href}>Learn more <ArrowRight className="ml-2 size-4" /></Link></Button></CardContent></Card>)}</div></div></section>

      {/* Admissions block — V3 §3.5 */}
      <section className="bg-blue-950 py-20 text-white"><div className="container mx-auto px-6 text-center lg:px-8"><GraduationCap className="mx-auto size-10 text-cyan-300" /><h2 className="mt-5 text-4xl font-bold">Your journey starts here</h2><p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-blue-100">Would you like to join ABS? Discover the programmes on offer, check the entry requirements and contact the team to be guided through the steps that match your situation. The conditions, documents, dates and fees that apply are those officially communicated by the administration for the relevant academic year.</p><div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row"><Button asChild size="lg" className="bg-cyan-400 text-slate-950 hover:bg-cyan-300"><Link href="/admissions">Understand admissions</Link></Button><Button asChild size="lg" variant="outline" className="border-white/40 bg-transparent text-white hover:bg-white/10"><Link href="/contact">Contact the administration</Link></Button></div></div></section>

      {/* Campus life and news — V3 §3.6 */}
      <section className="bg-slate-50 py-20"><div className="container mx-auto px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <p className="font-semibold uppercase tracking-[0.2em] text-blue-700">Campus life &amp; news</p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">Life at ABS is also built outside the classroom.</h2>
            <p className="mt-5 leading-7 text-slate-600">Lectures, gatherings, visits, projects, events and student initiatives contribute to open-mindedness and professional readiness. News on the site features only activities that have actually taken place or are officially scheduled.</p>
            <Button asChild variant="outline" className="mt-8"><Link href="/about/news">View news <Newspaper className="ml-2 size-4" /></Link></Button>
          </div>
          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <Newspaper className="size-8 text-blue-700" />
            <h3 className="mt-4 text-xl font-semibold text-slate-950">Follow the life of the institution</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">Find events, student projects and community initiatives in the News section.</p>
          </div>
        </div>
      </div></section>

      {/* Testimonials */}
      <section className="bg-white py-20"><div className="container mx-auto px-6 lg:px-8"><div className="mx-auto max-w-3xl text-center"><Users className="mx-auto size-8 text-blue-700" /><h2 className="mt-4 text-3xl font-bold text-slate-950">The ABS community in a few words</h2><blockquote className="mt-8 text-xl leading-9 text-slate-700">“{testimonials[activeTestimonial][0]}”</blockquote><p className="mt-5 font-semibold text-slate-950">{testimonials[activeTestimonial][1]}</p><p className="text-sm text-slate-500">{testimonials[activeTestimonial][2]}</p><div className="mt-7 flex justify-center gap-2">{testimonials.map((_, index) => <button key={index} aria-label={`Show testimonial ${index + 1}`} onClick={() => setActiveTestimonial(index)} className={`h-2 rounded-full transition-all ${activeTestimonial === index ? "w-8 bg-blue-700" : "w-2 bg-slate-300"}`} />)}</div></div></div></section>

      {/* Final call to action — V3 §3.7 */}
      <section className="bg-slate-950 py-20 text-white"><div className="container mx-auto px-6 text-center lg:px-8"><h2 className="text-4xl font-bold">Your ambition deserves a solid plan.</h2><p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">Get in touch with ABS to discover the available programmes and receive reliable guidance on your direction.</p><div className="mt-8"><Button asChild size="lg" className="bg-cyan-400 text-slate-950 hover:bg-cyan-300"><Link href="/contact">Talk to the ABS team <ArrowRight className="ml-2 size-4" /></Link></Button></div></div></section>
    </main>
  )
}
