import type { Locale } from "@/lib/i18n"
import { mastersData } from "@/lib/masters-data"

/**
 * Traductions des Masters générés dynamiquement (lib/masters-data.ts).
 * Clés = slugs ; repli sur le français lorsque aucune traduction n'existe.
 * - mastersI18n : titre + accroche pour le catalogue public.
 * - mastersContentI18n : contenu intégral des fiches /programs/masters/[slug]
 *   (lib/masters-data-i18n/{en,es,de,ar}.ts), avec repli français champ par champ.
 */
export type MasterI18nEntry = { title: string; tagline: string }

/** Contenu intégral traduit d'une fiche Master dynamique. */
export type LocalizedMasterContent = {
  title: string
  tagline: string
  duration: string
  description: string[]
  objectives: string[]
  courses: { title: string; topics: string[] }[]
  skills: string[]
  careers: string[]
}

export const mastersI18n: Record<Exclude<Locale, "fr">, Record<string, MasterI18nEntry>> = {
  en: {
    "finance-entreprise-ingenierie-financiere": {
      title: "Corporate Finance and Financial Engineering",
      tagline: "Design financing policy, structure financial operations and manage corporate risks.",
    },
    "finance-islamique": {
      title: "Islamic Finance",
      tagline: "Master Islamic finance products, governance and development in accordance with the Sharia in Africa.",
    },
    "audit-controle-gestion": {
      title: "Audit and Management Control",
      tagline: "Secure organisations through audit, internal control and performance management.",
    },
    "supply-chain-management": {
      title: "Supply Chain Management",
      tagline: "Orchestrate flows from procurement to delivery in a West African environment undergoing full integration.",
    },
    "developpement-durable-rse": {
      title: "Sustainable Development and CSR",
      tagline: "Lead the sustainable transition of organisations: CSR strategy, extra-financial reporting and real impact.",
    },
    "gouvernance-marches-publics": {
      title: "Governance and Management of Public Procurement",
      tagline: "Master public procurement: tendering, execution, control and governance in the public interest.",
    },
    "management-rh": {
      title: "Human Resources Management",
      tagline: "Develop human capital: talent, labour law, remuneration, skills and social dialogue.",
    },
    "ingenierie-informatique": {
      title: "Computer Engineering",
      tagline: "Design tomorrow's digital systems: architecture, development, data and AI, cybersecurity and cloud.",
    },
    "genie-minier": {
      title: "Mining Engineering",
      tagline: "Train engineers for the Malian and West African mining sector: exploration, exploitation, processing and environmental responsibility.",
    },
    journalisme: {
      title: "Journalism",
      tagline: "Practise investigative journalism in the digital age: data, fact-checking, ethics and innovation.",
    },
    "relations-affaires-internationales": {
      title: "International Relations and Affairs",
      tagline: "Understand and act in the international system: economic diplomacy, African integration and multilateral negotiation.",
    },
    entrepreneuriat: {
      title: "Entrepreneurship",
      tagline: "From idea to growing enterprise: business model, financing, the Malian legal framework and growth management.",
    },
    "strategie-politique-defense": {
      title: "Strategy and Defence Policy",
      tagline: "Analyse threats, steer defence organisations and exercise strategic leadership.",
    },
  },
  es: {
    "finance-entreprise-ingenierie-financiere": {
      title: "Finanza Corporativa e Ingeniería Financiera",
      tagline: "Diseñar la política de financiación, estructurar las operaciones financieras y gestionar los riesgos de la empresa.",
    },
    "finance-islamique": {
      title: "Finanzas Islámicas",
      tagline: "Dominar los productos, la gobernanza y el desarrollo de las finanzas conforme a la Charia en África.",
    },
    "audit-controle-gestion": {
      title: "Auditoría y Control de Gestión",
      tagline: "Segurar las organizaciones mediante la auditoría, el control interno y el pilotaje del rendimiento.",
    },
    "supply-chain-management": {
      title: "Gestión de la Cadena de Suministro",
      tagline: "Orquestar los flujos del abastecimiento a la entrega en un entorno de África Occidental en plena integración.",
    },
    "developpement-durable-rse": {
      title: "Desarrollo Sostenible y RSE",
      tagline: "Dirigir la transición sostenible de las organizaciones: estrategia RSE, reporting extrafinanciero e impacto real.",
    },
    "gouvernance-marches-publics": {
      title: "Gobernanza y Gestión de los Mercados Públicos",
      tagline: "Dominar la contratación pública: licitación, ejecución, control y gobernanza al servicio del interés general.",
    },
    "management-rh": {
      title: "Gestión de Recursos Humanos",
      tagline: "Desarrollar el capital humano: talento, derecho laboral, remuneración, competencias y diálogo social.",
    },
    "ingenierie-informatique": {
      title: "Ingeniería Informática",
      tagline: "Diseñar los sistemas digitales del mañana: arquitecturas, desarrollo, datos e IA, ciberseguridad y nube.",
    },
    "genie-minier": {
      title: "Ingeniería Minera",
      tagline: "Formar a los ingenieros del sector minero de Malí y de África Occidental: exploración, explotación, tratamiento y responsabilidad ambiental.",
    },
    journalisme: {
      title: "Periodismo",
      tagline: "Ejercer un periodismo de investigación en la era digital: datos, verificación, ética e innovación.",
    },
    "relations-affaires-internationales": {
      title: "Relaciones y Asuntos Internacionales",
      tagline: "Comprender y actuar en el sistema internacional: diplomacia económica, integración africana y negociación multilateral.",
    },
    entrepreneuriat: {
      title: "Emprendimiento",
      tagline: "De la idea a la empresa que crece: modelo de negocio, financiación, marco jurídico maliense y pilotaje del crecimiento.",
    },
    "strategie-politique-defense": {
      title: "Estrategia y Política de Defensa",
      tagline: "Analizar las amenazas, dirigir las organizaciones de defensa y ejercer el liderazgo estratégico.",
    },
  },
  de: {
    "finance-entreprise-ingenierie-financiere": {
      title: "Unternehmensfinanzierung und Financial Engineering",
      tagline: "Finanzierungspolitik gestalten, Finanzoperationen strukturieren und Unternehmensrisiken steuern.",
    },
    "finance-islamique": {
      title: "Islamische Finanzen",
      tagline: "Produkte, Governance und Entwicklung islamkonformer Finanzen in Afrika beherrschen.",
    },
    "audit-controle-gestion": {
      title: "Audit und Controlling",
      tagline: "Organisationen durch Audit, interne Kontrolle und Performance-Steuerung absichern.",
    },
    "supply-chain-management": {
      title: "Supply-Chain-Management",
      tagline: "Flüsse von der Beschaffung bis zur Lieferung in einem sich integrierenden westafrikanischen Umfeld orchestrieren.",
    },
    "developpement-durable-rse": {
      title: "Nachhaltige Entwicklung und CSR",
      tagline: "Die nachhaltige Transformation von Organisationen steuern: CSR-Strategie, Nichtfinanzberichterstattung und echte Wirkung.",
    },
    "gouvernance-marches-publics": {
      title: "Governance und Management öffentlicher Aufträge",
      tagline: "Öffentliche Beschaffung beherrschen: Vergabe, Durchführung, Kontrolle und Governance im öffentlichen Interesse.",
    },
    "management-rh": {
      title: "Personalmanagement",
      tagline: "Humankapital entwickeln: Talente, Arbeitsrecht, Vergütung, Kompetenzen und sozialer Dialog.",
    },
    "ingenierie-informatique": {
      title: "Informatik",
      tagline: "Die digitalen Systeme von morgen entwerfen: Architekturen, Entwicklung, Daten und KI, Cybersicherheit und Cloud.",
    },
    "genie-minier": {
      title: "Bergbautechnik",
      tagline: "Ingenieure für den malischen und westafrikanischen Bergbausektor ausbilden: Exploration, Abbau, Aufbereitung und Umweltverantwortung.",
    },
    journalisme: {
      title: "Journalismus",
      tagline: "Investigativen Journalismus im digitalen Zeitalter ausüben: Daten, Faktenprüfung, Ethik und Innovation.",
    },
    "relations-affaires-internationales": {
      title: "Internationale Beziehungen",
      tagline: "Das internationale System verstehen und mitgestalten: Wirtschaftsdiplomatie, afrikanische Integration und multilaterale Verhandlung.",
    },
    entrepreneuriat: {
      title: "Unternehmertum",
      tagline: "Von der Idee zum wachsenden Unternehmen: Geschäftsmodell, Finanzierung, malischer Rechtsrahmen und Wachstumssteuerung.",
    },
    "strategie-politique-defense": {
      title: "Strategie und Verteidigungspolitik",
      tagline: "Bedrohungen analysieren, Verteidigungsorganisationen führen und strategische Führung ausüben.",
    },
  },
  ar: {
    "finance-entreprise-ingenierie-financiere": {
      title: "تمويل الشركات والهندسة المالية",
      tagline: "تصميم سياسة التمويل، وهيكلة العمليات المالية، وقيادة مخاطر المؤسسة.",
    },
    "finance-islamique": {
      title: "التمويل الإسلامي",
      tagline: "إتقان منتجات التمويل الإسلامي وحوكمته وتطويره وفقاً للشريعة في أفريقيا.",
    },
    "audit-controle-gestion": {
      title: "التدقيق ومراقبة التسيير",
      tagline: "حماية المنظمات عبر التدقيق والرقابة الداخلية وقيادة الأداء.",
    },
    "supply-chain-management": {
      title: "إدارة سلسلة التوريد",
      tagline: "تنسيق تدفقات التوريد والتوصيل في بيئة غرب أفريقية في طور التكامل.",
    },
    "developpement-durable-rse": {
      title: "التنمية المستدامة والمسؤولية المجتمعية",
      tagline: "قيادة التحول المستدام للمنظمات: استراتيجية المسؤولية المجتمعية، والتقرير غير المالي، والأثر الحقيقي.",
    },
    "gouvernance-marches-publics": {
      title: "حوكمة وإدارة الصفقات العمومية",
      tagline: "إتقان الصفقات العمومية: الإرساء والتنفيذ والرقابة والحوكمة في خدمة المصلحة العامة.",
    },
    "management-rh": {
      title: "إدارة الموارد البشرية",
      tagline: "تنمية رأس المال البشري: المواهب وقانون الشغل والأجور والكفاءات والحوار الاجتماعي.",
    },
    "ingenierie-informatique": {
      title: "هندسة المعلوماتية",
      tagline: "تصميم الأنظمة الرقمية للغد: البنى التحتية والتطوير والبيانات والذكاء الاصطناعي والأمن السيبراني والسحابة.",
    },
    "genie-minier": {
      title: "هندسة المناجم",
      tagline: "تكوين مهندسي القطاع المنجمي في مالي وغرب أفريقيا: الاستكشاف والاستغلال والمعالجة والمسؤولية البيئية.",
    },
    journalisme: {
      title: "الصحافة",
      tagline: "ممارسة صحافة التحري في العصر الرقمي: البيانات وتدقيق المعلومات والأخلاق والابتكار.",
    },
    "relations-affaires-internationales": {
      title: "العلاقات والشؤون الدولية",
      tagline: "فهم النظام الدولي والعمل فيه: الدبلوماسية الاقتصادية والتكامل الأفريقي والمفاوضات متعددة الأطراف.",
    },
    entrepreneuriat: {
      title: "ريادة الأعمال",
      tagline: "من الفكرة إلى المؤسسة النامية: النموذج الاقتصادي والتمويل والإطار القانوني المالي وقيادة النمو.",
    },
    "strategie-politique-defense": {
      title: "الاستراتيجية وسياسة الدفاع",
      tagline: "تحليل التهديدات وقيادة منظمات الدفاع وممارسة القيادة الاستراتيجية.",
    },
  },
}

/** Titre et accroche localisés d'un Master fiche (repli : français). */
export function localizedMasterFields(
  master: { slug: string; title: string; tagline: string },
  locale: Locale,
): MasterI18nEntry {
  if (locale === "fr") return { title: master.title, tagline: master.tagline }
  const entry = mastersI18n[locale]?.[master.slug]
  return entry ?? { title: master.title, tagline: master.tagline }
}

// Overlays de contenu intégral par langue (remplis par les traducteurs ;
// structures vides tant que la traduction n'est pas livrée).
import { mastersContent as mastersContentEn } from "./masters-data-i18n/en"
import { mastersContent as mastersContentEs } from "./masters-data-i18n/es"
import { mastersContent as mastersContentDe } from "./masters-data-i18n/de"
import { mastersContent as mastersContentAr } from "./masters-data-i18n/ar"

export const mastersContentI18n: Record<
  Exclude<Locale, "fr">,
  Record<string, LocalizedMasterContent>
> = {
  en: mastersContentEn,
  es: mastersContentEs,
  de: mastersContentDe,
  ar: mastersContentAr,
}

/**
 * Fiche Master complète localisée : superpose le contenu traduit
 * (mastersContentI18n) sur la fiche française de référence, champ par champ.
 * Tout champ absent revient à sa valeur française — aucun trou possible.
 */
export function getLocalizedMasterBySlug(
  slug: string,
  locale: Locale,
): (typeof mastersData)[string] | undefined {
  const base = mastersData[slug]
  if (!base) return undefined
  if (locale === "fr") return base
  const overlay = mastersContentI18n[locale]?.[slug]
  if (!overlay) return base
  return {
    ...base,
    title: overlay.title || base.title,
    tagline: overlay.tagline || base.tagline,
    duration: overlay.duration || base.duration,
    description: overlay.description?.length ? overlay.description : base.description,
    objectives: overlay.objectives?.length ? overlay.objectives : base.objectives,
    courses: overlay.courses?.length ? overlay.courses : base.courses,
    skills: overlay.skills?.length ? overlay.skills : base.skills,
    careers: overlay.careers?.length ? overlay.careers : base.careers,
  }
}
