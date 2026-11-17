import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Quote } from "lucide-react"

export const metadata: Metadata = buildMetadata({
  title: "Word from the Director General | ABS",
  description: "A word from the Director General of ABS — African Business School: a pan-African ambition in the service of knowledge and student success.",
  path: "/about/mot-de-la-directrice",
  locale: "en",
})

const paragraphes = [
  "Dear visitors, dear parents, dear students and partners,",
  "It is with conviction and determination that I welcome you to the website of ABS — African Business School.",
  "Our ambition is clear: to contribute to educating a competent, responsible and bold African generation, capable of understanding the changes in the world, of innovating and of taking an active part in the development of our societies.",
  "I am deeply convinced that a diploma is not an end in itself, but the starting point of a genuine personal and professional journey. Success rests on the solidity of knowledge, the mastery of skills, the richness of experience, the quality of judgement and the strength of human values. It also requires understanding one's environment, anticipating its changes and turning challenges into opportunities for action.",
  "It is this conception of education that underpins our commitment at ABS. We want to combine academic rigour with professional practice, skill development with personal fulfilment, and knowledge with the capacity to act. Our ambition is to prepare women and men capable of thinking with rigour, undertaking with boldness, deciding with discernment and exercising their responsibilities with integrity.",
  "In a world profoundly transformed by digital technology and artificial intelligence, mastering technology has become a strategic issue. We intend to prepare our students for these changes, while preserving an essential conviction: technology must remain at the service of human intelligence, dignity and collective progress.",
  "True to its pan-African vocation, ABS grounds its action in a broader perspective than individual success alone. We want to contribute to the emergence of professionals capable of meeting the needs of Mali, of supporting Africa's transformations and of carrying its ambitions in a constantly changing international environment.",
  "This ambition imposes a permanent requirement on us: to bring training closer to professional realities, to encourage initiative, to cultivate open-mindedness and to make every pathway an opportunity to develop one's potential. For educating is not merely transmitting knowledge: it is giving everyone the means to become an agent of their own future and a contributor to the progress of their society.",
  "To future students, to professionals seeking to strengthen their skills and to the parents who place their trust in us, I extend a sincere invitation: discover our fields of study, meet our teams and join the ABS community.",
  "Do not choose just a diploma. Choose a training that broadens your vision, strengthens your professional value, sharpens your judgement and prepares you to seize the opportunities of tomorrow. Choose a pathway that gives you the means to accomplish your ambitions while contributing to those of Africa.",
  "I invite you to discover our educational project and to begin your enrolment process. We will be delighted to support you in building your future.",
  "At ABS, we do not regard education as a mere stage in a journey: we regard it as a force capable of revealing talents, of transforming trajectories and of helping to build tomorrow's Africa.",
]

export default function MotDeLaDirectricePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-blue-950 py-20 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/90 to-blue-900/60" />
        <div className="container relative mx-auto px-6">
          <p className="font-semibold uppercase tracking-[0.25em] text-cyan-300">Institution</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Word from the Director General
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-100">
            Training talent. Raising ambitions. Building Africa's future.
          </p>
        </div>
      </section>

      {/* Letter */}
      <section className="container mx-auto px-6 py-16">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[240px_1fr] lg:items-start">
          <div className="relative mx-auto overflow-hidden rounded-3xl bg-white shadow-xl lg:sticky lg:top-24">
            <Image
              src="/images/documents/dg-seance-travail.jpg"
              alt="Sokhna Maryama Thiam, Director General of ABS — African Business School"
              width={480}
              height={600}
              className="h-[320px] w-full object-cover object-top"
              priority
            />
            <div className="p-5">
              <p className="font-semibold text-slate-950">Sokhna Maryama Thiam</p>
              <p className="text-sm text-slate-500">Director General</p>
              <p className="mt-1 text-xs text-slate-400">ABS — African Business School</p>
            </div>
          </div>
          <div>
            {paragraphes.map((texte, index) => (
              <p
                key={index}
                className={
                  index === 0
                    ? "text-xl font-medium leading-8 text-slate-900"
                    : "mt-5 leading-8 text-slate-600 first:mt-0"
                }
              >
                {texte}
              </p>
            ))}
            <p className="mt-8 leading-8 text-slate-600">Yours sincerely,</p>
            <p className="mt-3 font-semibold text-slate-950">Sokhna Maryama Thiam</p>
            <p className="text-sm text-slate-500">Director General — ABS — African Business School</p>
            <div className="mt-8 rounded-2xl border border-cyan-100 bg-cyan-50/60 p-6">
              <Quote className="size-8 text-cyan-700" aria-hidden="true" />
              <blockquote className="mt-3 text-lg font-medium leading-8 text-slate-800">
                “Training with rigour, revealing talent and preparing the builders of tomorrow's Africa.”
              </blockquote>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="bg-blue-700 hover:bg-blue-800">
                <Link href="/admissions">Start my enrolment process</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-blue-700 bg-transparent text-blue-700 hover:bg-blue-50 hover:text-blue-800"
              >
                <Link href="/academics/programs">Discover our fields of study</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-950 py-14 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Welcome to ABS — African Business School</h2>
          <p className="mx-auto mt-3 max-w-2xl text-blue-100">
            Join a community that reveals talent and transforms trajectories.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-cyan-400 text-slate-950 hover:bg-cyan-300">
              <Link href="/apply">Apply now</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/contact">Talk to the ABS team</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
