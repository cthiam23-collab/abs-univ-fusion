"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export default function InternationalPage() {
  const { t } = useLanguage()

  const internationalServices = [
    {
      title: t("studyAbroad"),
      description: t("studyAbroadDesc"),
      link: "/international/study-abroad",
    },
    {
      title: t("exchangePrograms"),
      description: t("exchangeProgramsDesc"),
      link: "/international/exchange-programs",
    },
    {
      title: t("internationalAdmissions"),
      description: t("internationalAdmissionsDesc"),
      link: "/admissions/international",
    },
    {
      title: t("visaSupport"),
      description: t("visaSupportDesc"),
      link: "/international/visa-support",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">{t("internationalOpportunities")}</h1>
      <p className="text-lg mb-8 text-center">{t("internationalWelcome")}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {internationalServices.map((service, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{service.description}</p>
              <Link href={service.link}>
                <Button>{t("learnMore")}</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">{t("globalPartnerships")}</h2>
        <p className="mb-4">{t("globalPartnershipsDesc")}</p>
        <Link href="/international/partnerships">
          <Button>{t("explorePartnerships")}</Button>
        </Link>
      </div>
    </div>
  )
}
