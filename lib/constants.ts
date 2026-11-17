export const ORGANIZATION = {
  name: "ABS — African Business School",
  shortName: "ABS",
  domain: "abs-univ.com",
  website: "https://abs-univ.com",

  // Identité de marque (source : document V3, §1 Positionnement et principes éditoriaux)
  signature: "Votre passerelle vers le monde",
  signatureSecondaire: "L’ambition africaine, les horizons internationaux.",
  territoire: "Bamako – Monde.",

  // Contact Information
  contact: {
    address: {
      street: "Hamdallaye ACI 2000 — Rue 338, Porte 06",
      city: "Bamako",
      state: "District de Bamako",
      postalCode: "",
      country: "Mali",
      formatted: "Hamdallaye ACI 2000, Rue 338, Porte 06, Bamako, Mali",
    },
    // Téléphone officiel (également WhatsApp) — document V3, §13
    phone: "+223 78 14 14 88",
    whatsapp: "+223 78 14 14 88",
    // Adresse e-mail officielle — document V3, §13
    email: "abs.mail1290@gmail.com",
    fax: "+223 21 73 58 68",
  },

  // Department Contacts
  // Remarque : seules les coordonnées officielles du document V3 (§13) sont validées
  // (téléphone/WhatsApp +223 78 14 14 88 et abs.mail1290@gmail.com).
  departments: {
    admissions: {
      name: "Admissions Office",
      email: "admissions@abs-univ.com",
      phone: "+223 78 14 14 88",
    },
    graduateAdmissions: {
      name: "Graduate Admissions Office",
      email: "graduate-admissions@abs-univ.com",
      phone: "+223 78 14 14 88",
    },
    studentServices: {
      name: "Student Services",
      email: "student-services@abs-univ.com",
      phone: "+223 78 14 14 88",
    },
    careers: {
      name: "Career Services",
      email: "careers@abs-univ.com",
      phone: "+223 78 14 14 88",
    },
    library: {
      name: "Library Services",
      email: "library@abs-univ.com",
      phone: "+223 78 14 14 88",
    },
    financialAid: {
      name: "Financial Aid Office",
      email: "financial-aid@abs-univ.com",
      phone: "+223 78 14 14 88",
    },
  },

  // Organization Details
  mission:
    "Une formation exigeante, ancrée dans les réalités africaines et ouverte sur les compétences, les métiers et les enjeux internationaux.",

  // Informations légales — document V3, §13 / annexe
  // À confirmer avant publication
  registreCommercial: "RC MA.BKO.2016.B.7812",
  nif: "084127277W",

  // Social Media
  social: {
    facebook: "https://www.facebook.com/share/1F7JyY2hab/",
    tiktok: "https://www.tiktok.com/@africanbs16",
    instagram: "https://www.instagram.com/universiteabs",
    linkedin:
      "https://www.linkedin.com/in/universit%C3%A9-african-business-school-abs-abs-university-5b240320b",
    twitter: "https://x.com/UniversiteABS",
    whatsappChannel: "https://whatsapp.com/channel/0029VbBMTbSLikg3A63Nr116",
  },

  // Office Hours
  officeHours: {
    weekday: { start: "09:00", end: "17:00", days: "Monday - Friday" },
    saturday: { start: "09:00", end: "13:00", days: "Saturday" },
    sunday: { status: "Closed", days: "Sunday" },
  },

}

// Lien WhatsApp officiel (numéro +223 78 14 14 88) — document V3, §14.4
export const WHATSAPP_NUMBER = "+223 78 14 14 88"
export const WHATSAPP_URL = "https://wa.me/22378141488"

export const CONTACT_INFO = ORGANIZATION.contact
export const DEPARTMENTS = ORGANIZATION.departments
