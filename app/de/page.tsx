"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, CheckCircle2, GraduationCap, Newspaper, Users } from "lucide-react"

const logoUrl = "/images/abs-logo.png"
const heroUrl = "/images/campus/african-business-school-campus.jpg"
const directorUrl = "/images/documents/dg-seance-travail.jpg"

// Équivalents allemands de ORGANIZATION.signature / territoire / signatureSecondaire (lib/constants.ts en français)
const DE_SIGNATURE = "Ihre Brücke zur Welt"
const DE_SIGNATURE_SECONDAIRE = "Afrikanischer Ehrgeiz, internationale Horizonte."
const DE_TERRITOIRE = "Bamako – Welt."
const DE_MISSION =
  "Eine anspruchsvolle Ausbildung, verwurzelt in den afrikanischen Realitäten und offen für Kompetenzen, Berufsfelder und internationale Herausforderungen."

const domains = [
  {
    title: "Betriebswirtschaft",
    description: "Management, Finanzen, Marketing, Organisation, Unternehmertum und Steuerung von Geschäftstätigkeiten.",
    href: "/programs/business-administration",
  },
  {
    title: "Informatik-Ingenieurwesen",
    description: "Softwareentwicklung, digitale Systeme, Daten und schrittweise Heranführung an die Herausforderungen der künstlichen Intelligenz.",
    href: "/programs/engineering/computer-science",
  },
  {
    title: "Geologie-, Bau- und Bergbauingenieurwesen",
    description: "Verständnis von Ressourcen, Materialien, Bauwerken und technischen Projekten mit besonderem Blick auf Sicherheit und Umwelt.",
    href: "/programs/geological-civil-mining-engineering",
  },
  {
    title: "Internationale Beziehungen und Internationale Angelegenheiten",
    description: "Analyse internationaler Fragestellungen, Diplomatie, Zusammenarbeit, Institutionen und interkulturelle Kommunikation.",
    href: "/programs/international-relations",
  },
  {
    title: "Journalismus und Kommunikation",
    description: "Information, Redaktion, Kommunikation, Content-Produktion und digitale Medien.",
    href: "/programs/journalism-communication",
  },
]

const whyAbs = [
  "Eine panafrikanische Ambition: aus den Realitäten des Kontinents lernen und mit der Welt in Dialog treten.",
  "Eine handlungsorientierte Pädagogik: Fallstudien, Projekte, Präsentationen und praxisnahe Übungen je nach Lehrangebot.",
  "Überfachliche Kompetenzen: Kommunikation, Englisch, digitale Werkzeuge, Persönlichkeitsentwicklung und Teamarbeit.",
  "Eine Kultur der Verantwortung: Ethik, Professionalität, Respekt und Berücksichtigung der Herausforderungen nachhaltiger Entwicklung.",
  "Ein Umfeld auf menschlicher Ebene: eine enge Betreuung, die Orientierung, Zuhören und Engagement begünstigt.",
]

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const testimonials = [
    ["Mit Strenge ausbilden, Talente entfalten und die Erbauer des Afrika von morgen vorbereiten.", "Sokhna Maryama Thiam", "Generaldirektorin"],
    ["An ABS lernen wir, Ideen in Projekte zu verwandeln, die unserer Gesellschaft zugutekommen.", "Aïssata Diarra", "Managementstudentin"],
    ["Der praxisnahe Ansatz bereitet uns darauf vor, verantwortungsbewusste und umsetzungsfähige Führungspersönlichkeiten zu werden.", "Mamadou Traoré", "ABS-Alumnus"],
  ]

  return (
    <main id="top" className="overflow-hidden">
      {/* Bandeau principal — V3 §3.1 */}
      <section className="relative min-h-[620px] bg-slate-950 text-white">
        <picture>
          <source media="(max-width: 767px)" srcSet="/images/campus/african-business-school-campus-portrait.jpg" />
          <img src={heroUrl} alt="Campus der ABS — African Business School in Bamako" className="absolute inset-0 h-full w-full object-cover opacity-35" />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-blue-950/55" />
        <div className="container relative mx-auto flex min-h-[620px] items-center px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur">
              <span className="flex shrink-0 items-center justify-center rounded-lg bg-white p-1">
                <img src={logoUrl} alt="ABS-Logo" className="h-[26px] w-10 object-contain sm:h-9 sm:w-14" />
              </span>
              <span>{DE_TERRITOIRE}</span>
            </div>
            <p className="mb-4 font-semibold uppercase tracking-[0.28em] text-cyan-300">{DE_SIGNATURE}</p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">ABS — African Business School</h1>
            <p className="mt-4 text-xl font-medium text-cyan-200 sm:text-2xl">{DE_SIGNATURE_SECONDAIRE}</p>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200">In Bamako verfolgt ABS eine Vision der Hochschulbildung, die Wissen, praktische Kompetenzen, internationale Offenheit und Verantwortung verbindet. Unser Anspruch: Studierende beim Aufbau ihres akademischen und beruflichen Werdegangs begleiten – mit besonderer Aufmerksamkeit für die afrikanischen Realitäten und die Transformationen der Welt.</p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Button asChild size="lg" className="bg-cyan-400 text-slate-950 hover:bg-cyan-300"><Link href="/academics/programs">Unsere Studiengänge entdecken <ArrowRight className="ml-2 size-4" /></Link></Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 bg-white/5 bg-transparent text-white hover:bg-white/15"><Link href="/apply">Meine Bewerbung vorbereiten</Link></Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 bg-white/5 bg-transparent text-white hover:bg-white/15"><Link href="/contact">Mit ABS in Kontakt treten</Link></Button>
            </div>
          </div>
        </div>
      </section>

      {/* Bloc de présentation — V3 §3.2 */}
      <section className="border-b bg-white py-20"><div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-semibold uppercase tracking-[0.2em] text-blue-700">Vorstellung</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">Lernen, praktizieren, die eigene Zukunft gestalten</h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">Ein Studium zu wählen bedeutet, eine Richtung zu wählen. An ABS möchten wir jedem Studierenden helfen, die Herausforderungen seines Fachgebiets zu verstehen, solide Arbeitsmethoden zu entwickeln und seine Kenntnisse schrittweise in anwendbare Kompetenzen umzuwandeln. Die Lehrveranstaltungen sind darauf ausgelegt, Grundlagen, Fallstudien, Projekte und die Entdeckung der Berufswelt miteinander ins Gespräch zu bringen – gemäß den für jedes Studium festgelegten Modalitäten.</p>
        </div>
      </div></section>

      {/* Bloc « Pourquoi ABS ? » — V3 §3.3 */}
      <section className="bg-slate-50 py-20"><div className="container mx-auto px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-center">
          <div><p className="font-semibold uppercase tracking-[0.2em] text-blue-700">Warum ABS?</p><h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">Eine afrikanische Universität, die aufs Handeln ausgerichtet ist.</h2><p className="mt-5 leading-7 text-slate-600">{DE_MISSION}</p><ul className="mt-7 space-y-4">{whyAbs.map(item => <li key={item} className="flex gap-3 text-sm font-medium text-slate-700"><CheckCircle2 className="size-5 shrink-0 text-cyan-600" />{item}</li>)}</ul><Button asChild variant="outline" className="mt-8"><Link href="/about/mission">Unsere Vision und unsere Werte <ArrowRight className="ml-2 size-4" /></Link></Button></div>
          <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl"><img src={directorUrl} alt="Sokhna Maryama Thiam, Generaldirektorin der ABS — African Business School" className="h-[420px] w-full object-cover object-top" /><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 to-transparent p-7 pt-24 text-white"><p className="font-semibold">Sokhna Maryama Thiam</p><p className="text-sm text-slate-200">Generaldirektorin</p></div></div>
        </div>
      </div></section>

      {/* Nos domaines de formation — V3 §3.4 */}
      <section className="bg-white py-20"><div className="container mx-auto px-6 lg:px-8"><div className="flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><p className="font-semibold uppercase tracking-[0.2em] text-blue-700">Unsere Studienbereiche</p><h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">Fünf Bereiche, ein gemeinsamer Anspruch.</h2></div><Link href="/academics/programs" className="inline-flex items-center font-semibold text-blue-700 hover:text-blue-900">Alle Studiengänge ansehen <ArrowRight className="ml-2 size-4" /></Link></div><p className="mt-5 max-w-3xl leading-7 text-slate-600">ABS entwickelt Studiengänge in den Bereichen Management, Ingenieurwesen, Digitaltechnik, internationale Beziehungen und Kommunikation. Die Liste der tatsächlich für jedes Studienjahr geöffneten Studiengänge wird von der Verwaltung ausgehängt und aktualisiert.</p><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{domains.map(domain => <Card key={domain.title} className="border-slate-200 transition-shadow hover:shadow-lg"><CardHeader><div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-700"><GraduationCap className="size-4" />Licence (Bachelorabschluss) · Master</div><CardTitle className="text-xl">{domain.title}</CardTitle></CardHeader><CardContent><p className="leading-7 text-slate-600">{domain.description}</p><Button asChild variant="link" className="mt-3 h-auto px-0 text-blue-700"><Link href={domain.href}>Mehr erfahren <ArrowRight className="ml-2 size-4" /></Link></Button></CardContent></Card>)}</div></div></section>

      {/* Bloc Admissions — V3 §3.5 */}
      <section className="bg-blue-950 py-20 text-white"><div className="container mx-auto px-6 text-center lg:px-8"><GraduationCap className="mx-auto size-10 text-cyan-300" /><h2 className="mt-5 text-4xl font-bold">Ihr Vorhaben beginnt hier</h2><p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-blue-100">Sie möchten an ABS studieren? Entdecken Sie die angebotenen Studiengänge, prüfen Sie die Zulassungsvoraussetzungen und kontaktieren Sie das Team, um zu den Schritten geleitet zu werden, die Ihrer Situation entsprechen. Die geltenden Bedingungen, Unterlagen, Termine und Gebühren sind diejenigen, die von der Verwaltung offiziell für das jeweilige akademische Jahr mitgeteilt werden.</p><div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row"><Button asChild size="lg" className="bg-cyan-400 text-slate-950 hover:bg-cyan-300"><Link href="/admissions">Zulassung verstehen</Link></Button><Button asChild size="lg" variant="outline" className="border-white/40 bg-transparent text-white hover:bg-white/10"><Link href="/contact">Die Verwaltung kontaktieren</Link></Button></div></div></section>

      {/* Vie de campus et actualités — V3 §3.6 */}
      <section className="bg-slate-50 py-20"><div className="container mx-auto px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <p className="font-semibold uppercase tracking-[0.2em] text-blue-700">Campusleben & Aktuelles</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 wrap-anywhere sm:text-4xl">Das Leben an ABS gestaltet sich auch außerhalb der Lehrveranstaltungen.</h2>
            <p className="mt-5 leading-7 text-slate-600">Konferenzen, Begegnungen, Besichtigungen, Projekte, Veranstaltungen und studentische Initiativen tragen zur geistigen Offenheit und zur Professionalisierung bei. Die Aktualitäten der Website zeigen ausschließlich tatsächlich durchgeführte oder offiziell geplante Aktivitäten.</p>
            <Button asChild variant="outline" className="mt-8"><Link href="/about/news">Aktuelles ansehen <Newspaper className="ml-2 size-4" /></Link></Button>
          </div>
          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <Newspaper className="size-8 text-blue-700" />
            <h3 className="mt-4 text-xl font-semibold text-slate-950">Dem Leben der Institution folgen</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">Finden Sie Veranstaltungen, studentische Projekte und Initiativen der ABS-Gemeinschaft in der Rubrik Aktuelles.</p>
          </div>
        </div>
      </div></section>

      {/* Témoignages */}
      <section className="bg-white py-20"><div className="container mx-auto px-6 lg:px-8"><div className="mx-auto max-w-3xl text-center"><Users className="mx-auto size-8 text-blue-700" /><h2 className="mt-4 text-3xl font-bold text-slate-950">Die ABS-Gemeinschaft in wenigen Worten</h2><blockquote className="mt-8 text-xl leading-9 text-slate-700">„{testimonials[activeTestimonial][0]}"</blockquote><p className="mt-5 font-semibold text-slate-950">{testimonials[activeTestimonial][1]}</p><p className="text-sm text-slate-500">{testimonials[activeTestimonial][2]}</p><div className="mt-7 flex justify-center gap-2">{testimonials.map((_, index) => <button key={index} aria-label={`Stimme ${index + 1} anzeigen`} onClick={() => setActiveTestimonial(index)} className={`h-2 rounded-full transition-all ${activeTestimonial === index ? "w-8 bg-blue-700" : "w-2 bg-slate-300"}`} />)}</div></div></div></section>

      {/* Appel final — V3 §3.7 */}
      <section className="bg-slate-950 py-20 text-white"><div className="container mx-auto px-6 text-center lg:px-8"><h2 className="text-4xl font-bold">Ihr Ehrgeiz verdient ein solides Vorhaben.</h2><p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">Nehmen Sie Kontakt mit ABS auf, um die verfügbaren Studiengänge kennenzulernen und verlässliche Informationen für Ihre Orientierung zu erhalten.</p><div className="mt-8"><Button asChild size="lg" className="bg-cyan-400 text-slate-950 hover:bg-cyan-300"><Link href="/contact">Mit dem ABS-Team sprechen <ArrowRight className="ml-2 size-4" /></Link></Button></div></div></section>
    </main>
  )
}
