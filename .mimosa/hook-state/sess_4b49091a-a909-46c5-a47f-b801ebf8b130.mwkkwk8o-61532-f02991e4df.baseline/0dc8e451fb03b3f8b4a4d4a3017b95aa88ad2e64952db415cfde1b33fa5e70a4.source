import { DetailPage } from "@/components/content/detail-page"

export default async function ActivityDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  return (
    <DetailPage
      title={title}
      description={`L’activité ${title.toLowerCase()} s’inscrit dans la vie associative et citoyenne de l’African Business School (ABS). Elle permet de développer des compétences complémentaires, de rencontrer d’autres étudiants et de contribuer à la communauté.`}
      highlights={[
        "Participation encadrée par la vie étudiante",
        "Développement de compétences relationnelles et organisationnelles",
        "Rencontres, ateliers et projets collectifs",
        "Inscription et calendrier communiqués par l’association concernée",
      ]}
      primaryHref="/student-life/extracurricular-activities/join"
      primaryLabel="Rejoindre une activité"
    />
  )
}
