import { DetailPage } from "@/components/content/detail-page"

const athletics = {
  football: {
    title: "Football universitaire",
    description: "Une pratique collective qui développe la discipline, la coopération et l’équilibre entre réussite académique et vie de campus.",
  },
  basketball: {
    title: "Basketball universitaire",
    description: "Un espace pour progresser en équipe, représenter ABS et construire des habitudes de leadership par le sport.",
  },
  fitness: {
    title: "Fitness et bien-être",
    description: "Des activités accessibles pour soutenir la santé, la concentration et le bien-être quotidien des étudiants.",
  },
} as const

export default async function AthleticsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const item = athletics[slug as keyof typeof athletics] ?? {
    title: "Activités sportives ABS",
    description: "Découvrez les activités sportives et de bien-être proposées à la communauté ABS.",
  }

  return (
    <DetailPage
      title={item.title}
      description={item.description}
      highlights={[
        "Activités ouvertes aux étudiants selon le calendrier du campus",
        "Développement de l’esprit d’équipe et du leadership",
        "Encadrement et règles de participation communiqués par la vie étudiante",
        "Possibilité de représenter l’African Business School (ABS) lors d’événements interuniversitaires",
      ]}
      primaryHref="/student-life/athletics/contact"
      primaryLabel="Contacter la vie sportive"
    />
  )
}
