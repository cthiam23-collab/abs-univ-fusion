import { DetailPage } from "@/components/content/detail-page"

export default async function StudentLifeDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const title = slug.split("-").map((word) => word[0]?.toUpperCase() + word.slice(1)).join(" ")
  return <DetailPage title={title} description={`Learn how African Business School (ABS) supports ${title.toLowerCase()} for students living and learning in Bamako, Mali.`} highlights={["Inclusive services for the ABS community", "Experienced staff and student-led initiatives", "Ways to participate throughout the year", "Information for current and prospective students"]} primaryHref="/apply" primaryLabel="Apply to African Business School (ABS)" />
}
