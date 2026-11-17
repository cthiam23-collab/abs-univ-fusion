import { DetailPage } from "@/components/content/detail-page"

const tracks: Record<string, { title: string; description: string }> = {
  undergraduate: {
    title: "Programmes de licence",
    description: "Les licences ABS combinent fondamentaux académiques, compétences professionnelles, anglais et mises en situation pour préparer une insertion durable.",
  },
  graduate: {
    title: "Programmes de master",
    description: "Les masters ABS approfondissent l’expertise, le management et la capacité à conduire des projets dans des environnements africains et internationaux.",
  },
  doctoral: {
    title: "Parcours doctoral",
    description: "Le parcours doctoral est orienté vers la recherche appliquée, la production de connaissances et la contribution aux enjeux de développement durable.",
  },
}

export default async function AcademicTrackPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const track = tracks[slug] ?? {
    title: "Parcours académiques ABS",
    description: "Découvrez les parcours académiques de l’African Business School (ABS) et choisissez une formation cohérente avec votre projet professionnel.",
  }

  return (
    <DetailPage
      title={track.title}
      description={track.description}
      highlights={[
        "Approche professionnalisante et apprentissage par projets",
        "Suivi pédagogique et accompagnement vers l’employabilité",
        "Ouverture sur l’entrepreneuriat, le numérique et l’international",
        "Candidature et informations d’admission accessibles en ligne",
      ]}
      primaryHref="/apply"
      primaryLabel="Commencer une candidature"
    />
  )
}
