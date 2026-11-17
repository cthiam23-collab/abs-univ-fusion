import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"


export const metadata: Metadata = buildMetadata({
  title: "Forum annuel des carrières | ABS",
  description: "Le forum annuel des carrières de ABS — African Business School : rencontres étudiants-entreprises.",
  path: "/events/annual-career-fair",
})

export default function AnnualCareerFairPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Forum annuel des carrières</h1>
      <p className="text-xl mb-8 text-muted-foreground">
        Un rendez-vous étudiant-entreprises organisé par ABS — African Business School. Les dates et modalités
        de chaque édition sont annoncées lorsque l'événement est officiellement programmé.
      </p>

      <Image
        src="/images/campus/IMG-20250212-WA0022.jpg"
        alt="Forum annuel des carrières"
        width={800}
        height={400}
        className="w-full h-64 object-cover rounded-lg mb-8"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Pour qui ?</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Les étudiants de l'ABS, en Licence comme en Master, tous pôles de formation.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Où ?</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Sur le campus de l'ABS, Hamdallaye ACI 2000, Bamako.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Comment participer ?</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Les modalités d'inscription sont communiquées par l'administration à l'approche de l'événement, via les
              canaux officiels de l'établissement.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="prose max-w-none">
        <h2>Présentation de l'événement</h2>
        <p>
          Le forum annuel des carrières de l'ABS est l'occasion pour les étudiants de rencontrer des
          entreprises et des professionnels de différents secteurs. Que vous recherchiez un stage, une première
          expérience professionnelle ou simplement des repères sur les métiers, cet événement est conçu pour vous aider
          dans votre parcours.
        </p>

        <h2>Ce que l'événement peut comprendre</h2>
        <ul>
          <li>Rencontres avec des entreprises et des professionnels selon les éditions</li>
          <li>Échanges sur les métiers en lien avec les cinq pôles de formation</li>
          <li>Conseils de préparation de dossier et d'entretien</li>
          <li>Pistes de stages, en cohérence avec les maquettes de formation</li>
        </ul>

        <h2>Bien se préparer</h2>
        <ol>
          <li>Mettre à jour votre CV et préparer plusieurs exemplaires</li>
          <li>Vous renseigner en amont sur les secteurs et entreprises présents</li>
          <li>Préparer une courte présentation de votre parcours et de vos objectifs</li>
          <li>Vous présenter de manière professionnelle</li>
        </ol>

        <h2>Informations pratiques</h2>
        <p>
          La date, le programme détaillé et la liste des participants de chaque édition sont communiqués par
          l'administration lorsque l'événement est officiellement programmé. Contactez l'administration pour toute
          question ou pour proposer la participation de votre entreprise.
        </p>
      </div>
    </div>
  )
}
