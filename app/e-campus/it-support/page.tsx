"use client";

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/language-context";

export default function ITSupport() {
  const { t } = useLanguage();

  const faqItems = [
    { question: t("faq1Question"), answer: t("faq1Answer") },
    { question: t("faq2Question"), answer: t("faq2Answer") },
    { question: t("faq3Question"), answer: t("faq3Answer") },
    { question: t("faq4Question"), answer: t("faq4Answer") },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">{t("itSupportTitle")}</h1>
      <p className="text-lg mb-8 text-center">{t("itSupportDescription")}</p>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>{t("contactSupport")}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{t("supportEmail")}: infos@abs-univ.com</p>
          <p>{t("supportPhone")}: +223 78 14 14 88 / +223 68 14 14 88</p>
          <Button className="mt-4">{t("submitTicket")}</Button>
        </CardContent>
      </Card>

      <h2 className="text-2xl font-bold mb-4">{t("frequentlyAskedQuestions")}</h2>
      <Accordion type="single" collapsible>
        {faqItems.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
