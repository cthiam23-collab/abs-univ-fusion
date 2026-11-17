"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"

const ResearchPartnerships = () => {
  const { t } = useLanguage()

  const partnerships = [
    {
      name: "African Development Bank",
      description: "Collaboration on economic development research and policy recommendations.",
    },
    {
      name: "MIT Sloan School of Management",
      description: "Joint research projects on innovation and entrepreneurship in Africa.",
    },
    {
      name: "United Nations Economic Commission for Africa",
      description: "Research partnership on sustainable development goals in African business contexts.",
    },
    {
      name: "Google AI Research Center",
      description: "Collaborative research on artificial intelligence applications in African businesses.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{t("researchPartnerships")}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {partnerships.map((partner, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{partner.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{partner.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default ResearchPartnerships
