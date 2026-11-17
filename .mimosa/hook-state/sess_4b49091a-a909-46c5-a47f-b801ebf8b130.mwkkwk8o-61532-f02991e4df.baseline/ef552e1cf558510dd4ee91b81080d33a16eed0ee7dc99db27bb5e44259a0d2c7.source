import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { buildMetadata } from "@/lib/seo"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowRight, BookOpen, Briefcase, Globe2, Languages, Laptop, Target, Users } from "lucide-react"

export const metadata: Metadata = buildMetadata({
  title: "Approche pédagogique | ABS",
  description:
    "Découvrez l'approche pédagogique de ABS : projets, pratique, compétences transversales, langues et professionnalisation.",
  path: "/academics/pedagogy",
})

const approches = [
  {
    icon: Target,
    title: "Apprendre en comprenant et en pratiquant",
    text: "La pédagogie de ABS vise à relier les savoirs fondamentaux aux situations concrètes. Selon les formations et les ressources disponibles, les apprentissages peuvent s'appuyer sur des études de cas, des exercices, des travaux dirigés, des projets, des présentations, des visites et des immersions professionnelles. L'objectif est de faire progresser l'étudiant dans l'analyse, la méthode, la communication et la capacité à produire un travail argumenté.",
  },
  {
    icon: Briefcase,
    title: "Les projets comme fil conducteur",
    text: "Les projets permettent aux étudiants de mobiliser plusieurs compétences autour d'un problème ou d'un livrable : étude, dossier, prototype, plan d'action, présentation ou rapport. Les objectifs, critères d'évaluation et échéances sont expliqués au début de chaque module.",
  },
  {
    icon: Globe2,
    title: "Langues et ouverture internationale",
    text: "L'anglais est conçu comme une compétence transversale à développer progressivement dans les parcours. Il articule compréhension, expression, vocabulaire professionnel et mises en situation. Pour Relations et Affaires Internationales, l'espagnol est envisagé comme langue complémentaire, sous réserve de validation des volumes horaires et des modalités pédagogiques. Toute annonce de certification TOEIC, IELTS ou autre est limitée aux dispositifs effectivement disponibles et autorisés.",
  },
  {
    icon: Laptop,
    title: "Compétences numériques et intelligence artificielle",
    text: "Les compétences numériques prennent une place croissante dans les métiers. ABS favorise une utilisation raisonnée des outils numériques et une initiation progressive à l'intelligence artificielle, en tenant compte du niveau des étudiants, des besoins des filières, de la protection des données, de l'esprit critique et de l'intégrité académique.",
  },
  {
    icon: Users,
    title: "Développement personnel et professionnalisation",
    text: "La formation comprend également des dimensions essentielles à la vie professionnelle : prise de parole, gestion du temps, travail en équipe, organisation, savoir-être, conduite de réunion, gestion du stress et préparation à l'insertion. Les activités exactes dépendent du calendrier académique et sont annoncées lorsqu'elles sont confirmées.",
  },
  {
    icon: BookOpen,
    title: "Stages et immersions",
    text: "Les stages, visites et immersions sont des occasions de mieux comprendre les métiers et les environnements de travail. Leur calendrier, leurs modalités et leur caractère obligatoire ou optionnel sont précisés dans la maquette officielle de chaque formation.",
  },
]

const dispositifLinguistique = [
  {
    niveau: "Licence 1",
    contenu:
      "Consolidation des bases grammaticales et lexicales, compréhension orale et écrite, expression courante et acquisition du vocabulaire académique.",
  },
  {
    niveau: "Licence 2",
    contenu:
      "Développement de la communication professionnelle, des présentations orales, de la rédaction et du vocabulaire spécialisé propre à chaque filière.",
  },
  {
    niveau: "Licence 3",
    contenu:
      "Utilisation de l'anglais dans les projets, les études de cas, les exposés, les rapports et certaines soutenances.",
  },
  {
    niveau: "Master 1 et Master 2",
    contenu:
      "Renforcement de l'anglais professionnel et académique, analyse de documents spécialisés, présentation de travaux de recherche, négociation et communication dans un environnement international.",
  },
]

const soutenances = [
  "Des soutenances en français pour les projets et travaux académiques ;",
  "Des présentations ou soutenances en anglais, selon le niveau linguistique et le parcours ;",
  "Des soutenances bilingues, avec une présentation dans une langue et une séquence de questions-réponses dans l'autre ;",
  "Des résumés exécutifs, abstracts ou supports de présentation en anglais ;",
  "Des simulations de réunions, de négociations, de conférences et d'entretiens professionnels en français et en anglais.",
]

const anglaisParSpecialite = [
  { domaine: "Ingénierie (génie géologique, civil et minier)", angle: "Anglais scientifique et technique" },
  { domaine: "Administration des affaires", angle: "Anglais des affaires" },
  { domaine: "Relations et affaires internationales", angle: "Anglais diplomatique" },
  { domaine: "Journalisme-Communication", angle: "Anglais des médias" },
  { domaine: "Ingénierie informatique", angle: "Anglais appliqué aux technologies numériques" },
]

export default function PedagogyPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-blue-950 py-20 text-white">
        <Image
          src="/images/documents/v3-image1.png"
          alt="Étudiants de ABS sur le campus universitaire"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/85 to-blue-900/60" />
        <div className="container relative mx-auto px-6">
          <p className="font-semibold uppercase tracking-[0.25em] text-cyan-300">Pédagogie</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Apprendre en comprenant et en pratiquant
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-100">
            Relier les savoirs fondamentaux aux situations concrètes : études de cas, projets, présentations,
            immersions et mises en situation professionnelle, avec une orientation de référence de{" "}
            <strong className="text-cyan-300">40&nbsp;% de théorie et 60&nbsp;% de pratique</strong>.
          </p>
        </div>
      </section>

      {/* Les six dimensions de l'approche pédagogique */}
      <section className="container mx-auto px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-slate-900">Notre approche pédagogique</h2>
          <p className="mt-3 leading-7 text-slate-600">
            Une orientation de référence de 40&nbsp;% d&apos;apports théoriques et 60&nbsp;% de pratiques, projets,
            travaux dirigés, terrain, stages et immersions, sous réserve de la maquette approuvée de chaque formation.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {approches.map(({ icon: Icon, title, text }) => (
            <Card key={title} className="border-slate-200 transition-shadow hover:shadow-lg">
              <CardContent className="p-7">
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-cyan-50">
                  <Icon className="size-6 text-cyan-700" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Le bilinguisme français-anglais */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <p className="flex items-center gap-2 font-semibold uppercase tracking-[0.2em] text-blue-700">
                <Languages className="size-5" /> Le bilinguisme
              </p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900">
                Le bilinguisme français-anglais, un pilier stratégique de la formation
              </h2>
              <p className="mt-5 leading-7 text-slate-600">
                À ABS — African Business School, la maîtrise du français et de l&apos;anglais constitue un axe
                fondamental du parcours académique et professionnel de chaque étudiant. Dans un environnement africain
                caractérisé par la diversité linguistique et par l&apos;intensification des échanges internationaux, ABS
                ambitionne de former des diplômés capables de communiquer, de négocier, de présenter leurs idées et
                d&apos;exercer leurs responsabilités dans les deux langues.
              </p>
              <p className="mt-4 leading-7 text-slate-600">
                L&apos;apprentissage de l&apos;anglais ne se limite pas aux heures de cours qui lui sont consacrées : il
                est conçu comme une compétence progressivement mobilisée dans les enseignements, les projets, les
                travaux de recherche, les présentations orales, les activités d&apos;immersion et les évaluations.
              </p>
              <p className="mt-4 leading-7 text-slate-600">
                Les contenus linguistiques sont adaptés aux spécialités — anglais scientifique et technique en
                ingénierie, anglais des affaires en administration, anglais diplomatique en relations internationales,
                anglais des médias en journalisme-communication et anglais appliqué aux technologies numériques en
                ingénierie informatique.
              </p>
            </div>
            <Card className="border-slate-200 shadow-sm">
              <CardContent className="p-7">
                <h3 className="text-lg font-semibold text-slate-900">
                  Une progression structurée, de la Licence au Master
                </h3>
                <Accordion type="single" collapsible className="mt-4">
                  {dispositifLinguistique.map((item, index) => (
                    <AccordionItem key={item.niveau} value={`niveau-${index}`}>
                      <AccordionTrigger className="text-sm font-semibold text-slate-800">{item.niveau}</AccordionTrigger>
                      <AccordionContent className="text-sm leading-7 text-slate-600">{item.contenu}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                <p className="mt-4 text-sm leading-6 text-slate-500">
                  Cette progression permet à chaque étudiant de développer des compétences linguistiques mesurables et
                  de se préparer, selon son niveau et son parcours, aux certifications internationales telles que le
                  TOEIC ou l&apos;IELTS.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Soutenances + anglais par spécialité */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Des soutenances en français et en anglais</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Les soutenances constituent un instrument majeur de professionnalisation et d&apos;évaluation des
              compétences de communication. À ABS, elles sont conçues comme des occasions de structurer une
              argumentation, de présenter des résultats, de répondre aux questions d&apos;un jury et de défendre ses
              propositions devant un auditoire. Les modalités d&apos;évaluation peuvent prévoir :
            </p>
            <ul className="mt-5 space-y-3">
              {soutenances.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-7 text-slate-700">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-600" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-7 text-slate-500">
              Les modalités précises sont définies dans les maquettes pédagogiques et les règlements d&apos;évaluation.
              La progression est adaptée au niveau d&apos;études afin que l&apos;exigence linguistique constitue un
              objectif d&apos;apprentissage et non un obstacle injustifié à l&apos;évaluation des connaissances
              disciplinaires.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900">L&apos;anglais adapté à chaque spécialité</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Afin de faire vivre concrètement le bilinguisme, ABS encourage l&apos;utilisation progressive du français
              et de l&apos;anglais dans les activités pédagogiques de toutes les filières : lectures documentaires,
              exposés bilingues, études de cas internationales, recherches bibliographiques, débats et simulations
              professionnelles.
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-sm">
                <thead className="bg-slate-50 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                  <tr>
                    <th className="px-5 py-3">Domaine</th>
                    <th className="px-5 py-3">Anglais</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {anglaisParSpecialite.map((row) => (
                    <tr key={row.domaine}>
                      <td className="px-5 py-3 font-medium text-slate-800">{row.domaine}</td>
                      <td className="px-5 py-3 text-slate-600">{row.angle}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Immersions et développement personnel */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl">
              <Image
                src="/images/documents/v3-image2.jpg"
                alt="Étudiants de ABS travaillant ensemble sur un projet"
                width={800}
                height={560}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Immersions, projets et développement personnel
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                Les immersions et les sorties pédagogiques prolongent les apprentissages en confrontant les étudiants
                aux réalités des entreprises, des institutions, des laboratoires, des chantiers, des médias, des
                organisations internationales et des autres milieux professionnels. Lorsque les conditions le
                permettent, ces activités intègrent des exercices en anglais : présentation d&apos;une organisation,
                entretien avec un professionnel, collecte d&apos;informations, restitution orale ou rédaction
                d&apos;un compte rendu bilingue.
              </p>
              <p className="mt-4 leading-7 text-slate-600">
                Le modèle pédagogique de ABS associe la maîtrise des savoirs au développement de la personnalité, du
                sens des responsabilités et de l&apos;esprit d&apos;initiative. Des ateliers de leadership, de prise de
                parole en public, de négociation, d&apos;entrepreneuriat, d&apos;éthique professionnelle, de gestion de
                projet et de citoyenneté sont organisés en français et, progressivement, en anglais.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button asChild className="bg-blue-700 hover:bg-blue-800">
                  <Link href="/academics/programs">
                    Découvrir nos formations <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-blue-700 bg-transparent text-blue-700 hover:bg-blue-50 hover:text-blue-800"
                >
                  <Link href="/admissions">Préparer ma candidature</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="bg-blue-950 py-14 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Un ensemble cohérent au service de la réussite</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-blue-100">
            À ABS, le bilinguisme français-anglais, les projets appliqués, les soutenances, les immersions, les sorties
            pédagogiques et le développement personnel forment un ensemble cohérent au service de la réussite
            académique et de l&apos;employabilité. Former des diplômés compétents dans leur spécialité, capables de
            travailler en français et en anglais, de défendre leurs idées avec assurance et de porter une vision
            panafricaine du développement.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-cyan-400 text-slate-950 hover:bg-cyan-300">
              <Link href="/apply">Candidater maintenant</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white">
              <Link href="/contact">Parler à l&apos;équipe ABS</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
