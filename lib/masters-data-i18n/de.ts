import type { LocalizedMasterContent } from "../masters-data-i18n"

/**
 * Contenu intégral traduit des fiches Masters dynamiques (DE).
 * Rempli par le traducteur DE — clés = slugs de lib/masters-data.ts.
 * Les champs absents retombent sur le français (repli champ par champ).
 */
export const mastersContent: Record<string, LocalizedMasterContent> = {
  "finance-entreprise-ingenierie-financiere": {
    title: "Unternehmensfinanzierung und Financial Engineering",
    tagline:
      "Finanzierungspolitik gestalten, Finanzoperationen strukturieren und Unternehmensrisiken steuern.",
    duration: "2 Jahre (4 Semester)",
    description: [
      "Dieser Masterstudiengang bildet Spezialisten aus, die die Finanzierungspolitik und die optimale Kapitalstruktur einer Organisation festlegen und anschließend anspruchsvolle Financial-Engineering-Operationen konzipieren können: Optionen, Futures, Swaps und hybride Schuldtitel. Die Studierenden lernen, zwischen den verschiedenen Finanzierungsquellen abzuwägen, die Kapitalkosten zu messen und Strukturen zu entwerfen, die auf die Entwicklungsbedürfnisse von Unternehmen und Projekten zugeschnitten sind.",
      "Der Studiengang behandelt zudem das Management der Finanzrisiken — Markt-, Kredit-, Liquiditäts-, Währungs- und Zinsrisiken — sowie Fusionen und Übernahmen, von der Bewertung der Zielunternehmen bis zur rechtlichen und finanziellen Strukturierung der Transaktionen. Der Finanzmodellierung mit Excel und VBA sowie der Portfoliotheorie wird großer Raum eingeräumt, um die Absolventen auf Finanzfunktionen mit hoher Verantwortung vorzubereiten.",
    ],
    objectives: [
      "Die optimale Finanzierungspolitik und Kapitalstruktur einer Organisation festlegen",
      "Die Techniken des Financial Engineering beherrschen: Optionen, Futures, Swaps und hybride Schuldtitel",
      "Markt-, Kredit-, Liquiditäts-, Währungs- und Zinsrisiken identifizieren und absichern",
      "Unternehmen bewerten und Transaktionen bei Fusionen und Übernahmen strukturieren",
      "Operative Finanzmodelle mit Excel und VBA erstellen",
      "Die Portfoliotheorie auf das Management und die Allokation von Vermögenswerten anwenden",
    ],
    courses: [
      {
        title: "Finanzierungspolitik und Kapitalstruktur",
        topics: [
          "Abwägung zwischen Fremd- und Eigenkapital",
          "Weighted Average Cost of Capital (WACC)",
          "Leverage-Effekt",
          "Modigliani-Miller-Theoreme",
        ],
      },
      {
        title: "Financial Engineering und Derivate",
        topics: [
          "Optionen",
          "Futures und Forwards",
          "Swaps",
          "Hybride Schuldtitel und strukturierte Finanzierungen",
        ],
      },
      {
        title: "Management finanzieller Risiken",
        topics: [
          "Marktrisiko",
          "Kreditrisiko",
          "Liquiditätsrisiko",
          "Währungs- und Zinsrisiken",
          "Value at Risk",
        ],
      },
      {
        title: "Fusionen und Übernahmen",
        topics: [
          "Bewertung (DCF, Multiplikatoren)",
          "Transaktionsstrukturierung",
          "Due Diligence",
          "LBO und Finanzierung der Akquisition",
        ],
      },
      {
        title: "Finanzmodellierung",
        topics: [
          "Prognosemodelle in Excel",
          "Automatisierung mit VBA",
          "Finanzielle Businesspläne",
          "Szenario- und Sensitivitätsanalyse",
        ],
      },
      {
        title: "Portfoliotheorie",
        topics: [
          "Diversifikation und effiziente Grenze",
          "Markowitz-Modell",
          "CAPM",
          "Asset Allocation",
        ],
      },
      {
        title: "Vertiefte Finanzanalyse",
        topics: [
          "Analyse der Jahresabschlüsse",
          "Finanzdiagnosen",
          "Kennzahlen und Frühwarnsignale",
          "Anhang und Lagebericht",
        ],
      },
      {
        title: "Kapitalmärkte und Bankfinanzierung",
        topics: [
          "Wertpapieremissionen",
          "Syndizierte Finanzierungen",
          "Bank-Covenants",
          "Regionale UMOA-Märkte",
        ],
      },
      {
        title: "Ethik und finanzsektorische Konformität",
        topics: [
          "Finanz-Governance",
          "Bankenregulierung der UEMOA",
          "Geldwäschebekämpfung",
          "Compliance",
        ],
      },
    ],
    skills: [
      "Eine an der Strategie des Unternehmens ausgerichtete Finanzierungspolitik erarbeiten",
      "Ein Unternehmen, ein Zielunternehmen oder ein Investitionsprojekt bewerten",
      "Absicherungen gegen Finanzrisiken konzipieren (Markt, Kredit, Währung, Zins)",
      "Financial-Engineering-Transaktionen sowie Fusionen und Übernahmen strukturieren",
      "Finanzmodelle mit Excel und VBA erstellen und automatisieren",
      "Ein Portfolio Finanzinstrumente verwalten und optimieren",
    ],
    careers: [
      "Finanzdirektor (CFO)",
      "Senior-Finanzanalyst",
      "M&A-Berater",
      "Spezialist für Financial Engineering",
      "Portfolio-Manager",
      "Risk Manager",
      "Unternehmenstreasurer",
    ],
  },

  "finance-islamique": {
    title: "Islamische Finanzen",
    tagline:
      "Produkte, Governance und Entwicklung islamkonformer Finanzen in Afrika beherrschen.",
    duration: "2 Jahre (4 Semester)",
    description: [
      "Dieser Masterstudiengang vertieft die Grundprinzipien des islamischen Finanzwesens: das Verbot des riba (Wucherzins) und übermäßiger Spekulationen sowie die zentralen Verträge der Disziplin — Mudaraba, Muscharaka, Murabaha, Ijara und Sukuk. Die Studierenden untersuchen die Strukturierung konformer islamischer Bankprodukte, von der vertraglichen Ausgestaltung bis zur kommerziellen Vermarktung.",
      "Der Studiengang behandelt die Sharia-Governance und -Konformität (Sharia-Gremien, Konformitätsaudit, die Standards AAOIFI und IFSB), das Risikomanagement, das für das islamische Finanzwesen spezifisch ist, das Takaful (islamische Versicherung) sowie die Rolle des islamischen Finanzwesens bei der Entwicklungsfinanzierung in Afrika. Die Berufsfelder reichen von islamischen Banken und islamischen Fensterinstituten über Aufsichtsbehörden und Beratung bis hin zur islamischen Fintech.",
    ],
    objectives: [
      "Die Prinzipien und Verbote des islamischen Finanzwesens beherrschen (riba, gharar, maysir)",
      "Die zentralen Verträge strukturieren: Mudaraba, Muscharaka, Murabaha, Ijara, Sukuk",
      "Die Sharia-Governance und -Konformität einer Institution umsetzen",
      "Marktgerechte islamische Bankprodukte konzipieren",
      "Die spezifischen Risiken islamischer Finanzinstitute managen",
      "Das Potenzial des islamischen Finanzwesens für die Entwicklung in Afrika analysieren",
    ],
    courses: [
      {
        title: "Grundlagen und Prinzipien des islamischen Finanzwesens",
        topics: [
          "Verbot des riba",
          "Verbot von gharar und maysir",
          "Quellen: Koran und Sunna",
          "Islamische Wirtschaft",
        ],
      },
      {
        title: "Islamische Verträge und Produkte",
        topics: [
          "Mudaraba",
          "Muscharaka",
          "Murabaha",
          "Ijara",
          "Sukuk und islamische Verbriefung",
        ],
      },
      {
        title: "Sharia-Governance und Konformität",
        topics: [
          "Sharia-Gremien",
          "Audit der Sharia-Konformität",
          "Standards AAOIFI und IFSB",
          "Fatwas und Strukturierung",
        ],
      },
      {
        title: "Islamische Banken und islamische Fenster",
        topics: [
          "Betriebsmodelle",
          "Annahme und Verwendung der Einlagen",
          "Kommerzielle Finanzierung",
          "Islamische Fenster (Windows)",
        ],
      },
      {
        title: "Takaful: islamische Versicherung",
        topics: [
          "Prinzipien des Takaful",
          "Mudaraba- und Wakala-Modelle",
          "Islamische Rückversicherung (Retakaful)",
          "Familien- und Sachprodukte",
        ],
      },
      {
        title: "Management der spezifischen Risiken",
        topics: [
          "Risiken der Sharia-Konformität",
          "Kontrahentenrisiko",
          "Risiko der Profitrate",
          "Reservefonds",
        ],
      },
      {
        title: "Islamisches Finanzwesen und Entwicklung in Afrika",
        topics: [
          "Finanzierung produktiver Investitionen",
          "Instrumente der ZLECAf",
          "Souveräne Sukuk",
          "Finanzielle Inklusion",
        ],
      },
      {
        title: "Regulierung und Standardisierung",
        topics: [
          "Regionales Regulierungsumfeld",
          "Rolle der BCEAO und der CIMA",
          "Internationale Standards",
          "Islamisches Reporting",
        ],
      },
      {
        title: "Islamische Fintech und Innovation",
        topics: [
          "Konforme Zahlungen",
          "Islamisches Crowdfunding",
          "Sharia-konforme Robo-Advisors",
          "Afrikanische Anwendungsfälle",
        ],
      },
    ],
    skills: [
      "Die Sharia-Konformität eines Produkts oder einer Finanztransaktion qualifizieren",
      "Finanzierungen nach islamischen Verträgen strukturieren (Murabaha, Ijara, Sukuk …)",
      "Eine Sharia-Governance einrichten (Gremium, Konformitätsaudit)",
      "Eine Produktpalette islamischer Bank- oder Versicherungsprodukte konzipieren",
      "Die spezifischen Risiken islamischer Institute bewerten und absichern",
      "Die Märkte des islamischen Finanzwesens in Westafrika analysieren",
    ],
    careers: [
      "Analyst oder Kundenbetreuer in einer islamischen Bank",
      "Sachbearbeiter für islamische Fensterinstitute",
      "Führungskraft bei einer Aufsichtsbehörde",
      "Berater für Sharia-Konformität",
      "Produktverantwortlicher für Takaful",
      "Unternehmer im Bereich islamische Fintech",
      "Manager konformer Fonds",
    ],
  },

  "audit-controle-gestion": {
    title: "Audit und Controlling",
    tagline:
      "Organisationen durch Audit, interne Kontrolle und Performance-Steuerung absichern.",
    duration: "2 Jahre (4 Semester)",
    description: [
      "Dieser Masterstudiengang entwickelt eine doppelte Expertise: das Finanz- und Operative Audit sowie das Controlling. Die Studierenden lernen, Prüfungsaufträge nach den beruflichen Standards durchzuführen, die internen Risiken von Organisationen zu beherrschen und die IFRS-Normen sowie den Rahmen der Pflichtprüfung anzuwenden. Der Prüfungsansatz — Planung, Arbeitsprogramme, Nachweiserhebung, Bericht — wird an realen Fällen geübt.",
      "Der Controlling-Teil umfasst die Erstellung von Budgets, Dashboards und Key Performance Indicators (KPI), die Steuerung der Gesamtleistung sowie die Verzahnung zwischen Informationssystemen, interner Kontrolle und Ergebnismessung. Die Absolventen bereiten sich auf Funktionen als interner oder externer Auditor, Controller, Leiter interne Kontrolle oder Junior-CFO vor.",
    ],
    objectives: [
      "Finanz- und Betriebsaudits nach den beruflichen Standards durchführen",
      "Budgets, Dashboards und KPIs für die Steuerung konzipieren",
      "Die internen Risiken von Organisationen bewerten und beherrschen",
      "Die IFRS-Normen und den Rahmen der Pflicht- und Vertragsprüfung anwenden",
      "Informationssysteme und interne Kontrolle absichern",
      "Die wirtschaftliche, soziale und organisatorische Performance steuern",
    ],
    courses: [
      {
        title: "Finanzaudit",
        topics: [
          "Prüfungsstandards",
          "Prüfungszyklus des Jahresabschlusses",
          "Prüfungsnachweise",
          "Prüfungsbericht",
        ],
      },
      {
        title: "Operatives Audit",
        topics: [
          "Prozessaudit",
          "Konformitätsaudit",
          "Effizienzaudit",
          "Empfehlungen und Nachverfolgung",
        ],
      },
      {
        title: "Controlling und Budgets",
        topics: [
          "Budgeterstellung",
          "Flexible Budgets",
          "Abweichungen und Analyse",
          "Management-Reporting",
        ],
      },
      {
        title: "Dashboards und KPIs",
        topics: [
          "Zentrale Leistungskennzahlen",
          "Strategische Dashboards",
          "Balanced Scorecard",
          "Datenvisualisierung",
        ],
      },
      {
        title: "Beherrschung der internen Risiken",
        topics: [
          "Risikokartierung",
          "System der internen Kontrolle",
          "COSO",
          "Betrugsprävention",
        ],
      },
      {
        title: "IFRS-Normen und Pflichtprüfung",
        topics: [
          "IFRS-Referenzrahmen",
          "Berufsausübungsstandards",
          "Commissariat aux comptes (Pflichtprüfung)",
          "Ereignisse nach dem Abschlussstichtag",
        ],
      },
      {
        title: "Informationssysteme und interne Kontrolle",
        topics: [
          "Sicherheit der Informationssysteme",
          "Kontrolle der Anwendungen",
          "IT-Audit",
          "Prüfungsspuren (Audit-Trail)",
        ],
      },
      {
        title: "Leistungssteuerung",
        topics: [
          "Rentabilitätsanalyse",
          "Kosten und Margen",
          "Operationale Performance",
          "Kontinuierliche Verbesserung",
        ],
      },
      {
        title: "Methodik und Ethik des Audits",
        topics: [
          "Auftragsplanung",
          "Arbeitsprogramm",
          "Arbeitsdossier",
          "Ethikkodex",
        ],
      },
    ],
    skills: [
      "Ein Finanz- oder Betriebsaudit planen und durchführen",
      "Aussagekräftige Dashboards und KPIs konzipieren und auswerten",
      "Ein wirksames System der internen Kontrolle ausarbeiten und überwachen",
      "IFRS-konforme Abschlüsse und Prüfungsberichte erstellen",
      "Interne Risiken identifizieren, bewerten und behandeln",
      "Der Geschäftsleitung und den Governance-Organen relevant Bericht erstatten",
    ],
    careers: [
      "Interner Auditor",
      "Externer Auditor",
      "Controller",
      "Leiter interne Kontrolle",
      "Stellvertretender Wirtschaftsprüfer (Commissaire aux comptes adjoint)",
      "Organisationsberater",
      "Junior-CFO",
    ],
  },

  "supply-chain-management": {
    title: "Supply-Chain-Management",
    tagline:
      "Flüsse von der Beschaffung bis zur Lieferung in einem sich integrierenden westafrikanischen Umfeld orchestrieren.",
    duration: "2 Jahre (4 Semester)",
    description: [
      "Dieser Masterstudiengang bildet Manager der globalen Lieferkette aus, die die physischen und Informationsflüsse steuern können — von der Beschaffung bei den Lieferanten bis zur Endlieferung beim Kunden. Das Programm umfasst Einkauf und Lieferantenmanagement, Logistik und internationalen Transport, die Planung der Abläufe (S&OP, Absatzprognosen) sowie das Bestands- und Lagermanagement.",
      "Eine regionale Spezialisierung zeichnet diesen Studiengang aus: die Hafen- und Zolllogistik in Westafrika, die Chancen der Kontinentalen Freihandelszone ZLECAf und die Beherrschung logistischer Informationssysteme (WMS, TMS, ERP). Die Lean-Methoden der kontinuierlichen Verbesserung ergänzen den Werkzeugkasten der Absolventen, die auf Funktionen als Supply-Chain-Leiter, Logistikdirektor, internationaler Einkäufer oder SCM-Berater vorbereitet werden.",
    ],
    objectives: [
      "Die physischen und Informationsflüsse von der Beschaffung bis zur Lieferung steuern",
      "Die Einkaufsfunktion strukturieren und die Lieferantenbeziehung managen",
      "Die multimodale Logistik und den internationalen Transport organisieren",
      "Bedarfspläne und S&OP-Prozesse aufbauen",
      "Die WMS-, TMS- und ERP-Systeme der Lieferkette nutzen",
      "Lean auf die kontinuierliche Verbesserung der Lieferkette anwenden",
    ],
    courses: [
      {
        title: "Management der Flüsse und der Lieferkette",
        topics: [
          "Typologie der Flüsse",
          "Push- und Pull-Flüsse",
          "Synchronisation der vor- und nachgelagerten Stufen",
          "Messung der Logistikperformance",
        ],
      },
      {
        title: "Einkauf und Lieferantenmanagement",
        topics: [
          "Einkaufsprozess",
          "Sourcing und Ausschreibung",
          "Lieferantenverhandlung",
          "Lieferantenperformance und -entwicklung",
        ],
      },
      {
        title: "Logistik und internationaler Transport",
        topics: [
          "Incoterms",
          "Transit und Zoll",
          "Multimodaler Transport",
          "Versicherung und Transportdokumente",
        ],
      },
      {
        title: "Planung und Prognosen (S&OP)",
        topics: [
          "Absatzprognose",
          "Vertriebs- und Ablaufplanung (S&OP)",
          "Produktionshauptplan",
          "Kapazitätsmanagement",
        ],
      },
      {
        title: "Hafen- und Zolllogistik in Westafrika",
        topics: [
          "Regionale Logistikkorridore",
          "Hafenbetrieb",
          "Zollverfahren",
          "Handelsfacilitierung",
        ],
      },
      {
        title: "ZLECAf und regionale Chancen",
        topics: [
          "Rahmen der ZLECAf",
          "Regionale Wertschöpfungsketten",
          "Grenzüberschreitender Handel",
          "Logistik des afrikanischen E-Commerce",
        ],
      },
      {
        title: "Logistische Informationssysteme",
        topics: [
          "WMS (Lagerverwaltung)",
          "TMS (Transportmanagement)",
          "ERP und Integration",
          "Rückverfolgbarkeit und Logistikdaten",
        ],
      },
      {
        title: "Bestands- und Lagermanagement",
        topics: [
          "Wiederauffüllungsrichtlinien",
          "Sicherheitsbestände",
          "Lagerkonzeption",
          "Inventuren und Datenqualität",
        ],
      },
      {
        title: "Lean und kontinuierliche Verbesserung",
        topics: [
          "Verschwendungsbeseitigung (muda)",
          "Kaizen",
          "VSM (Value Stream Mapping)",
          "Lean Supply Chain",
        ],
      },
    ],
    skills: [
      "Eine leistungsfähige Lieferkette von Ende zu Ende konzipieren und steuern",
      "Einkaufsprozesse durchführen und mit internationalen Lieferanten verhandeln",
      "Einen internationalen Transport organisieren und die Zollabfertigung managen",
      "Prognosen erstellen und einen S&OP-Prozess moderieren",
      "Logistische Informationssysteme (WMS, TMS, ERP) konfigurieren und nutzen",
      "Einen Lean-Ansatz auf die logistischen Abläufe anwenden",
    ],
    careers: [
      "Supply-Chain-Leiter",
      "Logistikdirektor",
      "Internationaler Einkäufer",
      "Beschaffungsleiter",
      "SCM-Berater",
      "Transportmanager",
      "Lager- und Distributionsleiter",
    ],
  },

  "developpement-durable-rse": {
    title: "Nachhaltige Entwicklung und CSR",
    tagline:
      "Die nachhaltige Transformation von Organisationen steuern: CSR-Strategie, Nichtfinanzberichterstattung und echte Wirkung.",
    duration: "2 Jahre (4 Semester)",
    description: [
      "Dieser Masterstudiengang bereitet die Studierenden darauf vor, die Ziele für nachhaltige Entwicklung (SDGs) in die Strategie von Organisationen zu integrieren und gelungene Programme Gesellschaftlicher Verantwortung von Unternehmen (CSR) umzusetzen: Wirtschaftsethik, Dialog mit den Interessengruppen und nichtfinanzielle Berichterstattung nach den Standards GRI und CSRD. Die Frage der Messung — Indikatoren, Daten, Verifizierung — nimmt einen zentralen Platz ein.",
      "Der Studiengang widmet der Umwelt- und Sozialverträglichkeitsprüfung großer Projekte besondere Aufmerksamkeit, insbesondere in den Bergbau- und Energiesektoren, die für die malische und westafrikanische Wirtschaft prägend sind. Die Studierenden lernen außerdem die Grünfinanzierung und die Finanzierungsinstrumente der Transformation kennen, die Berufsaussichten als CSR-Beauftragte, Nachhaltigkeitsberater, Umweltreferenten oder ESG-Analysten eröffnen.",
    ],
    objectives: [
      "Die SDGs in betriebsfähige Roadmaps für eine Organisation übersetzen",
      "Eine mit dem Geschäftsmodell konsistente CSR-Strategie erarbeiten",
      "Eine nichtfinanzielle Berichterstattung nach den Standards GRI und CSRD erstellen",
      "Umwelt- und Sozialverträglichkeitsprüfungen durchführen (Bergbau, Energie)",
      "Dialog und Wesentlichkeit mit den Interessengruppen strukturieren",
      "Instrumente der Grünfinanzierung für die Finanzierung der Transformation mobilisieren",
    ],
    courses: [
      {
        title: "Ziele für nachhaltige Entwicklung und Agenda 2030",
        topics: [
          "Überblick über die 17 SDGs",
          "Nationale Umsetzung",
          "Beitrag der Unternehmen",
          "SDG-Indikatoren",
        ],
      },
      {
        title: "CSR-Strategie",
        topics: [
          "ISO 26000",
          "Wesentlichkeitsanalyse (Materialität)",
          "CSR-Roadmap",
          "Verankerung in der Strategie",
        ],
      },
      {
        title: "Nichtfinanzielle Berichterstattung (GRI, CSRD)",
        topics: [
          "GRI-Standards",
          "CSRD-Richtlinie und ESRS",
          "Datenerhebung und Datenqualität",
          "Verifizierung (Assurance)",
        ],
      },
      {
        title: "Wirtschaftsethik",
        topics: [
          "Ethische Entscheidungsfindung",
          "Verhaltenskodizes",
          "Antikorruption",
          "Integritätskultur",
        ],
      },
      {
        title: "Umwelt- und Sozialverträglichkeitsprüfung",
        topics: [
          "ESIA-Rahmenwerke",
          "Verträglichkeitsstudien (Bergbau, Energie)",
          "Umwelt- und soziale Managementpläne",
          "Konsultation der Gemeinschaften",
        ],
      },
      {
        title: "Interessengruppenanalyse",
        topics: [
          "Stakeholder-Kartierung",
          "Engagement und Dialog",
          "Management der Erwartungen",
          "Konflikte und Mediation",
        ],
      },
      {
        title: "Grünfinanzierung",
        topics: [
          "Green Bonds",
          "Klimafinanzierung",
          "Taxonomien",
          "Kohlenstoffprojekte und -mechanismen",
        ],
      },
      {
        title: "Umweltmanagement und nachhaltige Wertschöpfungsketten",
        topics: [
          "ISO 14001",
          "Kreislaufwirtschaft",
          "Nachhaltiger Einkauf",
          "CO2-Fußabdruck",
        ],
      },
    ],
    skills: [
      "Eine CSR- und Nachhaltigkeitsstrategie ausarbeiten und umsetzen",
      "Eine nichtfinanzielle Berichterstattung nach den Standards GRI und CSRD erstellen",
      "Eine Umwelt- und Sozialverträglichkeitsprüfung durchführen oder beaufsichtigen",
      "Die Beziehungen zu den Interessengruppen eines Projekts oder einer Organisation gestalten",
      "Eine Grünfinanzierung für ein Transformationsprojekt strukturieren",
      "Die ESG-Performance einer Organisation oder eines Vermögenswerts bewerten",
    ],
    careers: [
      "CSR-Beauftragte/r",
      "Nachhaltigkeitsberater/in",
      "Umweltreferent/in",
      "QHSE-Leiter/in",
      "ESG-Analyst/in",
      "NGO-Projektreferent/in",
      "Koordinator/in von Geberprojekten",
    ],
  },

  "gouvernance-marches-publics": {
    title: "Governance und Management öffentlicher Aufträge",
    tagline:
      "Öffentliche Beschaffung beherrschen: Vergabe, Durchführung, Kontrolle und Governance im öffentlichen Interesse.",
    duration: "2 Jahre (4 Semester)",
    description: [
      "Dieser Masterstudiengang bildet Fachleute der öffentlichen Beschaffung aus, die den rechtlichen Rahmen der öffentlichen Aufträge beherrschen — das malische Gesetzbuch und die UEMOA-Richtlinien — und die Vergabe- und Durchführungsverfahren regelkonform abwickeln können. Die Studierenden lernen, jede Stufe der Kette abzusichern: Bedarfsdefinition, Ausschreibung, Angebotsbewertung, Zuschlag, Durchführung und Abrechnung.",
      "Der Studiengang behandelt auch die Kontrolle und das Audit öffentlicher Aufträge, die öffentliche Governance und die Korruptionsbekämpfung — wesentliche Dimensionen des Vertrauens in das öffentliche Handeln. Besondere Aufmerksamkeit gilt dem Management der von internationalen Gebern finanzierten Projekte — Weltbank, Afrikanische Entwicklungsbank (BAD), Europäische Union — und deren Vergaberegeln, die ein bedeutendes Beschäftigungsfeld für die Absolventen darstellen.",
    ],
    objectives: [
      "Den rechtlichen Rahmen der öffentlichen Aufträge beherrschen (malisches Gesetzbuch, UEMOA-Richtlinien)",
      "Vergabe- und Durchführungsverfahren öffentlicher Aufträge abwickeln",
      "Kontrolle und Audit öffentlicher Aufträge einrichten",
      "Zu einer transparenten und rechenschaftspflichtigen öffentlichen Governance beitragen",
      "Korruption und Interessenkonflikte vorbeugen und behandeln",
      "Von Gebern finanzierte Projekte managen (Weltbank, BAD, EU)",
    ],
    courses: [
      {
        title: "Rechtlicher Rahmen der öffentlichen Aufträge",
        topics: [
          "Gesetzbuch der öffentlichen Aufträge Malis",
          "UEMOA-Richtlinien",
          "Regulierungsinstitutionen",
          "Rechtsprechung",
        ],
      },
      {
        title: "Vergabe der Aufträge",
        topics: [
          "Vergabearten",
          "Ausschreibungen und Abfragen (consultations)",
          "Bewertung und Zuschlag",
          "Zuschlagserteilung und Verträge",
        ],
      },
      {
        title: "Durchführung und Abrechnung der Aufträge",
        topics: [
          "Leistungsanweisungen",
          "Vertragsänderungen und Preisanpassungen",
          "Vorläufige und endgültige Abnahme",
          "Finanzielle Abrechnung und Zahlungsfristen",
        ],
      },
      {
        title: "Kontrolle und Audit öffentlicher Aufträge",
        topics: [
          "Vorherige und nachträgliche Kontrolle",
          "Regelmäßigkeitsaudit",
          "Leistungsaudit",
          "Kontrollorgane",
        ],
      },
      {
        title: "Öffentliche Governance",
        topics: [
          "Transparenz und Rechenschaftspflicht",
          "Management der öffentlichen Finanzen",
          "Deconcentration und Dezentralisierung",
          "Digitalisierung der öffentlichen Beschaffung",
        ],
      },
      {
        title: "Korruptionsbekämpfung",
        topics: [
          "Typologie der Betrugsfälle",
          "Präventionssysteme",
          "Erklärungen und Interessenkonflikte",
          "Meldung und Sanktionen",
        ],
      },
      {
        title: "Von Gebern finanzierte Projekte",
        topics: [
          "Verfahren der Weltbank",
          "Verfahren der BAD",
          "EU-Regeln",
          "Management der Aufsichtsmissionen",
        ],
      },
      {
        title: "Streitigkeiten und Streitbeilegung",
        topics: [
          "Rechtsmittel der Bieter",
          "Streitbeilegungsgremien",
          "Schiedsgerichtsbarkeit",
          "Management von Vertragsabbrüchen",
        ],
      },
    ],
    skills: [
      "Eine Maßnahme rechtlich qualifizieren und die passende Vergabeart wählen",
      "Angebote prüfen und bewerten unter Beachtung der Grundsätze der öffentlichen Beschaffung",
      "Die Durchführung eines Auftrags bis zu Abnahme und Abrechnung steuern",
      "Regelmäßigkeit und Performance einer öffentlichen Beschaffungsmaßnahme auditieren",
      "Die Vergabeverfahren der wichtigsten internationalen Geber anwenden",
      "Zur Korruptionsprävention in der öffentlichen Beschaffung beitragen",
    ],
    careers: [
      "Führungskraft der öffentlichen Verwaltung",
      "Verwalter öffentlicher Aufträge (Régisseur de marchés)",
      "Berater für Auftragsvergabe",
      "Öffentlicher Auditor",
      "Leiter öffentlicher Beschaffung",
      "Referent für Geberprogramme",
      "Kontrolleur der öffentlichen Dienste",
    ],
  },

  "management-rh": {
    title: "Personalmanagement",
    tagline:
      "Humankapital entwickeln: Talente, Arbeitsrecht, Vergütung, Kompetenzen und sozialer Dialog.",
    duration: "2 Jahre (4 Semester)",
    description: [
      "Dieser Masterstudiengang bildet Personalmanager aus, die die Personalpolitik auf die Strategie der Organisation ausrichten können. Der Studiengang umfasst Talentmanagement und Personalgewinnung, die Personalverwaltung mit fundierten Kenntnissen des malischen Arbeitsrechts sowie die Ausgestaltung von Vergütungs- und Leistungsmanagementpolitiken.",
      "Die Studierenden lernen, die Kompetenzentwicklung zu organisieren (Schulungspläne, strategische Kompetenzplanung GPEC), den sozialen Dialog und die Arbeitsbeziehungen zu gestalten und Personalinformationssysteme (HRIS) zur Digitalisierung der Personalfunktion einzusetzen. Die Berufsfelder umfassen das gesamte HR-Spektrum: HR-Leiter, Junior-Personaldirektor, Recruiter, Weiterbildungsleiter, HR-Berater oder Lohnbuchhalter.",
    ],
    objectives: [
      "Die HR-Strategie auf die Gesamtstrategie der Organisation ausrichten",
      "Talente managen: Gewinnung, Einarbeitung, Mobilität und Bindung",
      "Personalverwaltung und malisches Arbeitsrecht anwenden",
      "Vergütungs- und Leistungsmanagementpolitiken konzipieren",
      "Kompetenzentwicklung und Schulungsplan organisieren",
      "Den sozialen Dialog gestalten und ein HRIS nutzen",
    ],
    courses: [
      {
        title: "HR-Strategie und Talentmanagement",
        topics: [
          "Personalbedarfsplanung",
          "Arbeitgebermarke (Employer Branding)",
          "Recruiting und Auswahl",
          "Onboarding und Bindung",
        ],
      },
      {
        title: "Personalverwaltung und malisches Arbeitsrecht",
        topics: [
          "Malisches Arbeitsgesetzbuch",
          "Arbeitsverträge",
          "Sozialrechtliche Vorschriften",
          "Arbeitsrechtliche Streitigkeiten",
        ],
      },
      {
        title: "Vergütung und Leistung",
        topics: [
          "Gehaltsstruktur",
          "Prämien und Zusatzleistungen",
          "Leistungsbewertung",
          "Variable Vergütung und Anreizsysteme",
        ],
      },
      {
        title: "Kompetenzentwicklung",
        topics: [
          "GPEC (strategische Kompetenzplanung)",
          "Schulungsplan",
          "Weiterbildungsengineering",
          "Lernerfolgskontrolle",
        ],
      },
      {
        title: "Sozialer Dialog und Arbeitsbeziehungen",
        topics: [
          "Tarifverhandlung",
          "Personalvertretung",
          "Konfliktmanagement",
          "Rolle der Gewerkschaften",
        ],
      },
      {
        title: "HRIS und HR-Digitalisierung",
        topics: [
          "Funktionen eines HRIS",
          "Digitale Lohn- und Verwaltungsbearbeitung",
          "HR-Analytics",
          "E-Recruiting",
        ],
      },
      {
        title: "Lohnabrechnung",
        topics: [
          "Lohnabrechnung und Sozialabgaben",
          "CNSS und soziale Pflichten",
          "Kontrollen und Datenqualität",
          "Malische Praxisfälle",
        ],
      },
      {
        title: "Lebensqualität im Beruf und Teammanagement",
        topics: [
          "Prävention von Berufsrisiken",
          "QVT (Lebensqualität im Beruf)",
          "Teamführung",
          "Unternehmenskultur",
        ],
      },
    ],
    skills: [
      "Eine an der Strategie der Organisation ausgerichtete Personalpolitik konzipieren",
      "Einen vollständigen Recruiting- und Talentmanagementprozess steuern",
      "Das malische Arbeitsrecht in der Personalverwaltung anwenden",
      "Einen Vergütungsrahmen und ein Leistungssystem aufbauen",
      "Einen Kompetenzentwicklungsplan ausarbeiten und steuern",
      "Ein HRIS nutzen und belastbare Sozialkennzahlen erstellen",
    ],
    careers: [
      "HR-Leiter/in",
      "Junior-Personaldirektor/in",
      "Recruiter/in",
      "Weiterbildungsleiter/in",
      "HR-Berater/in",
      "Lohn- und Gehaltsbuchhalter/in",
      "Referent/in für soziale Beziehungen",
    ],
  },

  "ingenierie-informatique": {
    title: "Informatik",
    tagline:
      "Die digitalen Systeme von morgen entwerfen: Architekturen, Entwicklung, Daten und KI, Cybersicherheit und Cloud.",
    duration: "2 Jahre (4 Semester)",
    description: [
      "Dieser Masterstudiengang bildet Ingenieure aus, die robuste und skalierbare Softwarearchitekturen entwerfen, Full-Stack-Anwendungen entwickeln und digitale Projekte von Ende zu Ende managen können. Die Studierenden festigen ihre Kompetenzen in Programmierung, API-Design und Softwarequalität in realen Teamprojekten.",
      "Der Studiengang behandelt außerdem Daten und angewandte künstliche Intelligenz, Cybersicherheit (Bedrohungen, Verteidigung, Kryptografie) sowie Cloud- und DevOps-Praktiken — Container, CI/CD-Pipelines, Infrastructure as Code. Die Absolventen gelangen in Funktionen als Softwarearchitekt, Lead-Entwickler, Data-/KI-Ingenieur, Cybersicherheitsberater oder Leiter digitaler Projekte oder wagen den Sprung in die Tech-Unternehmerschaft.",
    ],
    objectives: [
      "Robuste, skalierbare und wartbare Softwarearchitekturen entwerfen",
      "Moderne Full-Stack-Anwendungen entwickeln (Frontend, Backend, API)",
      "Daten auswerten und KI geschäftsnah einsetzen",
      "Systeme absichern: Bedrohungsanalyse, Verteidigung, Kryptografie",
      "Anwendungen mit DevOps-Praktiken in der Cloud bereitstellen und betreiben",
      "Digitale Projekte nach agilen Methoden managen",
    ],
    courses: [
      {
        title: "Softwarearchitekturen",
        topics: [
          "Architekturmuster",
          "Microservices",
          "API-Design",
          "Hexagonale Architektur",
        ],
      },
      {
        title: "Full-Stack-Entwicklung",
        topics: [
          "Frontend-Entwicklung",
          "Backend-Entwicklung",
          "Datenbanken",
          "Tests und Softwarequalität",
        ],
      },
      {
        title: "Daten und angewandte KI",
        topics: [
          "Fortgeschrittene Datenbanken",
          "Data Engineering",
          "Angewandtes Machine Learning",
          "Modellbereitstellung (MLOps)",
        ],
      },
      {
        title: "Cybersicherheit",
        topics: [
          "Bedrohungen und Angriffsvektoren",
          "Angewandte Kryptografie",
          "Sicherheit von Anwendungen",
          "Incident Response",
        ],
      },
      {
        title: "Cloud und DevOps",
        topics: [
          "Container und Orchestrierung",
          "CI/CD",
          "Infrastructure as Code",
          "Observability",
        ],
      },
      {
        title: "Management digitaler Projekte",
        topics: [
          "Agile Methoden (Scrum)",
          "Projektabgrenzung und Spezifikationen",
          "Teamführung",
          "Produkt-Roadmap",
        ],
      },
      {
        title: "Verteilte Systeme und Netzwerke",
        topics: [
          "Serviceübergreifende Kommunikation",
          "Message Queues",
          "Resilienz und Fehlertoleranz",
          "Netzwerke und Protokolle",
        ],
      },
      {
        title: "Softwarequalität und Wartung",
        topics: [
          "Code-Review",
          "Refactoring",
          "Testabdeckung",
          "Technische Schulden",
        ],
      },
      {
        title: "Integrationsprojekte",
        topics: [
          "Lastenheft",
          "Entwicklung im Team",
          "Continuous Delivery",
          "Technische Abschlusspräsentation",
        ],
      },
    ],
    skills: [
      "Die Architektur eines komplexen Softwaresystems entwerfen",
      "Eine Full-Stack-Anwendung entwickeln, testen und bereitstellen",
      "Eine Datenpipeline aufbauen und anwendungsnahe KI-Modelle trainieren",
      "Die Sicherheit eines Informationssystems bewerten und stärken",
      "Deployments automatisieren und eine Cloud-Infrastruktur betreiben",
      "Ein digitales Projekt nach agiler Methodik steuern",
    ],
    careers: [
      "Softwarearchitekt/in",
      "Lead-Entwickler/in",
      "Data-/KI-Ingenieur/in",
      "Cybersicherheitsberater/in",
      "Leiter/in digitaler Projekte",
      "Tech-Unternehmer/in",
      "DevOps-Ingenieur/in",
    ],
  },

  "genie-minier": {
    title: "Bergbautechnik",
    tagline:
      "Ingenieure für den malischen und westafrikanischen Bergbausektor ausbilden: Exploration, Abbau, Aufbereitung und Umweltverantwortung.",
    duration: "2 Jahre (4 Semester)",
    description: [
      "Dieser Masterstudiengang bildet Bergbauingenieure für einen Schlüsselsektor der malischen und westafrikanischen Wirtschaft aus — Gold, Bauxit und andere Rohstoffe des Untergrunds. Das Programm umfasst die Kenntnis der Lagerstätten und Explorationsverfahren, die Methoden des Tagebaus und des Untertagebaus sowie die Aufbereitung und Verwertung des Erzes bis zu den metallurgischen Verfahren.",
      "Ein wesentlicher Teil des Curriculums ist dem Umwelt- und Sozialmanagement von Bergbauprojekten, der malischen und westafrikanischen Bergbaugesetzgebung und dem lokalen Inhalt (contenu local) gewidmet — ohne die Sicherheit von Menschen und Anlagen zu vergessen. Die Absolventen gelangen in Funktionen als Bergbauingenieur, Abbausupervisor, Leiter Bergbau-HSE oder Umweltberater für Bergbau, in Bergbauunternehmen ebenso wie in Verwaltungen.",
    ],
    objectives: [
      "Lagerstätten charakterisieren und Explorationskampagnen durchführen (Gold, Bauxit in Mali)",
      "Die geeigneten Abbaumethoden auswählen und umsetzen",
      "Die Aufbereitung und Verwertung des Erzes organisieren",
      "Die Umwelt- und Sozialfragen von Bergbauprojekten managen",
      "Die malische und westafrikanische Bergbaugesetzgebung und den lokalen Inhalt anwenden",
      "Die Sicherheit der Betriebe und die Gesundheit der Beschäftigten gewährleisten",
    ],
    courses: [
      {
        title: "Lagerstätten und Exploration",
        topics: [
          "Lagerstättengeologie (Gold, Bauxit)",
          "Explorationskampagnen",
          "Bohrungen und Beprobung",
          "Ressourcenschätzung",
        ],
      },
      {
        title: "Abbaumethoden",
        topics: [
          "Tagebau",
          "Untertagebau",
          "Bohren und Sprengen",
          "Betriebsplanung",
        ],
      },
      {
        title: "Erzaufbereitung",
        topics: [
          "Brechen und Mahlen",
          "Flotation und Gravimetrie",
          "Hydrometallurgie (Cyanidlaugung)",
          "Gewinnung und Raffination",
        ],
      },
      {
        title: "Umwelt- und Sozialmanagement von Bergbauprojekten",
        topics: [
          "Bergbau-Verträglichkeitsstudien",
          "Management von Abwässern und Abfällen",
          "Sanierung der Standorte",
          "Gemeindebeziehungen",
        ],
      },
      {
        title: "Bergbaugesetzgebung und lokaler Inhalt",
        topics: [
          "Malisches Bergbaugesetzbuch",
          "Regionale Rahmenwerke",
          "Bergbauvertrag",
          "Lokaler Inhalt und wirtschaftliche Wertschöpfung",
        ],
      },
      {
        title: "Bergbauliche Sicherheit und Gesundheit",
        topics: [
          "Analyse bergbaulicher Risiken",
          "Anlagensicherheit",
          "Arbeitsschutz",
          "HSE-Kultur",
        ],
      },
      {
        title: "Bergbauplanung und Blockmodelle",
        topics: [
          "Geologische und Blockmodelle",
          "Abbausequenzen",
          "Grubenoptimierung",
          "Bergbaulogistik",
        ],
      },
      {
        title: "Ökonomie und Management von Bergbauprojekten",
        topics: [
          "Machbarkeitsstudien",
          "Kosten sowie CAPEX/OPEX",
          "Projektfinanzierung im Bergbau",
          "Rohstoffmärkte",
        ],
      },
    ],
    skills: [
      "Geologische Daten interpretieren und zur Ressourcenschätzung beitragen",
      "Einen Tagebau oder Untertagebau dimensionieren und beaufsichtigen",
      "Eine Erzaufbereitungskette steuern",
      "Die Umwelt- und Sozialkomponenten eines Bergbauprojekts leiten",
      "Den rechtlichen und vertraglichen Rahmen des Bergbausektors anwenden",
      "Ein System der Sicherheit und des Arbeitsschutzes im Bergbau umsetzen",
    ],
    careers: [
      "Bergbauingenieur/in",
      "Abbausupervisor/in",
      "Leiter/in Bergbau-HSE",
      "Umweltberater/in für Bergbau",
      "Führungskraft der Bergbauverwaltung",
      "Dienstleister im Bergbau",
      "Bergbauplaner/in",
    ],
  },

  journalisme: {
    title: "Journalismus",
    tagline:
      "Investigativen Journalismus im digitalen Zeitalter ausüben: Daten, Faktenprüfung, Ethik und Innovation.",
    duration: "2 Jahre (4 Semester)",
    description: [
      "Dieser Masterstudiengang perfektioniert die berufliche Praxis des Journalismus rund um drei Säulen: investigative Recherche, Datenjournalismus und Faktenprüfung (Fact-Checking). Die Studierenden lernen, komplexe Informationen zu dokumentieren, zu verifizieren und zu erzählen — mit dauerhafter Anforderung an Ethik und Berufspflichten in einem von Desinformation geprägten Medienumfeld.",
      "Der Studiengang behandelt auch digitale Medien und soziale Netzwerke, das Krisenmanagement und die Kommunikation im Nahbereich sowie KI im Medienbereich — Produktionsautomatisierung, unterstützte Verifikation, neue Formate. Die Absolventen bereiten sich auf Funktionen als Senior-Journalist, Chefredakteur, investigativer Reporter, Kommunikationsleiter, Senior-Community-Manager, Medienberater oder Content-Produzent vor.",
    ],
    objectives: [
      "Sorgfältige und quellengestützte journalistische Recherchen durchführen",
      "Datenjournalismus und Faktenprüfung praktizieren",
      "Digitale Medien und soziale Netzwerke strategisch nutzen",
      "Krisenkommunikation und heikle Situationen managen",
      "Die Ethik und die Berufspflichten des Journalismus beachten und durchsetzen",
      "KI im Medienbereich verantwortungsvoll einsetzen",
    ],
    courses: [
      {
        title: "Investigativer Journalismus",
        topics: [
          "Recherchemethodik",
          "Quellen und Quellenschutz",
          "Dokumente und Feldrecherche",
          "Investigative Erzählform",
        ],
      },
      {
        title: "Datenjournalismus und Faktenprüfung",
        topics: [
          "Datenerhebung und -bereinigung",
          "Datenvisualisierung",
          "Verifikationstechniken",
          "Desinformation und Gerüchte",
        ],
      },
      {
        title: "Digitale Medien und soziale Netzwerke",
        topics: [
          "Ökosystem der digitalen Medien",
          "Redaktionelles Community-Management",
          "Kurzformate und Video",
          "Reichweitenmessung",
        ],
      },
      {
        title: "Krisenmanagement und Kommunikation",
        topics: [
          "Krisenkommunikation",
          "Medienbeziehungen",
          "Sprecherfunktion",
          "Monitoring und Alarmierung",
        ],
      },
      {
        title: "Ethik und Berufspflichten des Journalismus",
        topics: [
          "Berufliche Kodizes",
          "Pluralismus und Fairness",
          "Quellenschutz",
          "Rechtliche Verantwortung",
        ],
      },
      {
        title: "KI im Medienbereich",
        topics: [
          "Automatisierung der Produktion",
          "KI-gestützte Verifikation",
          "Erkennung generierter Inhalte",
          "Ethische Fragen",
        ],
      },
      {
        title: "Multimedia-Produktion",
        topics: [
          "Multimediales Schreiben",
          "Audiovisuelle Realisation",
          "Podcasting",
          "Infografik",
        ],
      },
      {
        title: "Medienrecht",
        topics: [
          "Rechtlicher Rahmen der Presse",
          "Verleumdung und Gegendarstellung",
          "Pressefreiheit",
          "Medienregulierung",
        ],
      },
    ],
    skills: [
      "Eine vollständige journalistische Recherche konzipieren und realisieren",
      "Eine Information überprüfen und ein dokumentiertes Fact-Checking erstellen",
      "Daten analysieren und visualisieren, um sie zu erzählen",
      "Eine digitale, plattformübergreifende redaktionelle Strategie umsetzen",
      "Die Kommunikation einer Organisation in der Krise steuern",
      "KI-Tools für Produktion und Verifikation verantwortungsvoll nutzen",
    ],
    careers: [
      "Senior-Journalist/in / Chefredakteur/in",
      "Reporter/in für investigativen Journalismus",
      "Kommunikationsleiter/in",
      "Senior-Community-Manager/in",
      "Medienberater/in",
      "Content-Produzent/in",
      "Leiter/in einer digitalen Redaktion",
    ],
  },

  "relations-affaires-internationales": {
    title: "Internationale Beziehungen",
    tagline:
      "Das internationale System verstehen und mitgestalten: Wirtschaftsdiplomatie, afrikanische Integration und multilaterale Verhandlung.",
    duration: "2 Jahre (4 Semester)",
    description: [
      "Dieser Masterstudiengang vertieft die Theorien der internationalen Beziehungen und ihre konkrete Anwendung auf die Angelegenheiten der Welt: Wirtschaftsdiplomatie, multilaterale Verhandlung und internationales Wirtschaftsrecht. Die Studierenden analysieren Akteure, Institutionen und Dynamiken des internationalen Systems — mit Schwerpunkt auf den wirtschaftlichen und handelspolitischen Interessen von Staaten und Unternehmen.",
      "Eine starke afrikanische Dimension prägt den Studiengang: die regionale und kontinentale Integration durch CEDEAO, ZLECAf und die Afrikanische Union sowie die Entwicklungszusammenarbeit und die Arbeit in internationalen Organisationen. Die Absolventen bereiten sich auf Karrieren als Diplomat, Programmreferent in Institutionen (UNO, EU, NGO), Berater für internationale Angelegenheiten oder Geopolitik-Analyst vor.",
    ],
    objectives: [
      "Theorien der internationalen Beziehungen zur Analyse von Krisen und Kooperationen heranziehen",
      "Eine diplomatische, multilaterale oder wirtschaftliche Verhandlung führen",
      "Dynamiken der afrikanischen Integration analysieren (CEDEAO, ZLECAf, Afrikanische Union)",
      "Das internationale Wirtschaftsrecht auf grenzüberschreitende Transaktionen anwenden",
      "Projekte der Entwicklungszusammenarbeit konzipieren und managen",
      "Geopolitische Analysen und verwertbare Risikobriefings erstellen",
    ],
    courses: [
      {
        title: "Theorien der internationalen Beziehungen",
        topics: [
          "Realisten, Liberalisten und Konstruktivisten",
          "Akteure des internationalen Systems",
          "Machtgleichgewichte und Ungleichgewichte",
          "Fallstudien",
        ],
      },
      {
        title: "Wirtschaftsdiplomatie",
        topics: [
          "Handelsdiplomatie",
          "Investitionsförderung",
          "Handelsverhandlungen",
          "Sanktionen und Anreize",
        ],
      },
      {
        title: "Afrikanische Integration (CEDEAO, ZLECAf, Afrikanische Union)",
        topics: [
          "Institutionen der CEDEAO",
          "Kontinentale afrikanische Freihandelszone (ZLECAf)",
          "Agenda 2063 der Afrikanischen Union",
          "Freizügigkeit und einheitliche Währung",
        ],
      },
      {
        title: "Multilaterale Verhandlung",
        topics: [
          "Verhandlungstechniken",
          "Protokoll und diplomatische Praxis",
          "Koalitionen und Verhandlungsblöcke",
          "Gipfelsimulationen",
        ],
      },
      {
        title: "Internationales Wirtschaftsrecht",
        topics: [
          "Internationale Verträge",
          "Internationale Handelsschiedsgerichtsbarkeit",
          "WTO und Handelsabkommen",
          "Investitionsschutz",
        ],
      },
      {
        title: "Entwicklungszusammenarbeit",
        topics: [
          "Architektur der Entwicklungshilfe",
          "Projektzyklus",
          "Bilaterale und multilaterale Finanzierungen",
          "Monitoring und Evaluation",
        ],
      },
      {
        title: "Geopolitik Westafrikas",
        topics: [
          "Regionale Sicherheitsfragen",
          "Rivalitäten und Partnerschaften",
          "Ressourcen und Transformationen",
          "Migration",
        ],
      },
      {
        title: "Internationale Sicherheit",
        topics: [
          "System kollektiver Sicherheit",
          "Konfliktprävention",
          "Friedensmissionen",
          "Internationale Cybersicherheit",
        ],
      },
    ],
    skills: [
      "Eine internationale Situation mit den einschlägigen theoretischen Rastern analysieren",
      "Eine multilaterale Verhandlung vorbereiten und führen",
      "Geopolitische Analysen und Strategiepapiere verfassen",
      "Das internationale Wirtschaftsrecht in einer grenzüberschreitenden Transaktion anwenden",
      "Ein Projekt der Entwicklungszusammenarbeit konzipieren und begleiten",
      "Eine Institution oder ein Unternehmen in einem internationalen Gremium vertreten",
    ],
    careers: [
      "Diplomat/in",
      "Programmreferent/in (UNO, EU, NGO)",
      "Berater/in für internationale Angelegenheiten",
      "Geopolitik-Analyst/in",
      "Führungskraft einer Handelskammer",
      "Zusammenarbeitsreferent/in",
      "Handelsattaché/in",
    ],
  },

  entrepreneuriat: {
    title: "Unternehmertum",
    tagline:
      "Von der Idee zum wachsenden Unternehmen: Geschäftsmodell, Finanzierung, malischer Rechtsrahmen und Wachstumssteuerung.",
    duration: "2 Jahre (4 Semester)",
    description: [
      "Dieser Masterstudiengang begleitet die Studierenden von der Geschäftsidee bis zur Steuerung des Wachstums. Der Studiengang umfasst die Überführung einer Idee in ein tragfähiges Geschäftsmodell (Business Model Canvas, Lean Startup), die Marktstudie und Kundenvalidierung sowie Pitch und die Erstellung des Businessplans. Die Studierenden arbeiten an eigenen Projekten oder an realen Unternehmensprojekten.",
      "Das Programm behandelt die Unternehmensfinanzierung in allen Formen — Business Angels, Risikokapital, Mikrofinanz — sowie den rechtlichen und steuerlichen Rahmen der Gründung in Mali. Eine letzte Sequenz widmet sich dem Wachstum und dessen Steuerung (Kennzahlen, Dashboards) sowie der digitalen Innovation von KMU. Die Perspektiven reichen von Gründung oder Übernahme eines Unternehmens über das Management eines Inkubators bis zur Gründungsberatung und zum Early-Stage-Investment.",
    ],
    objectives: [
      "Eine Idee in ein validiertes Geschäftsmodell überführen (Business Model Canvas, Lean)",
      "Eine Marktstudie durchführen und die Kundenannahmen validieren",
      "Die Finanzierung eines Projekts strukturieren: Business Angels, Risikokapital, Mikrofinanz",
      "Die rechtlichen und steuerlichen Aspekte der Gründung in Mali beherrschen",
      "Das Wachstum mit geeigneten Kennzahlen und Dashboards steuern",
      "Die digitale Transformation und Innovation von KMU begleiten",
    ],
    courses: [
      {
        title: "Von der Idee zum Geschäftsmodell",
        topics: [
          "Business Model Canvas",
          "Lean Startup",
          "Wertversprechen (Value Proposition)",
          "Iteration und Pivot",
        ],
      },
      {
        title: "Marktstudie",
        topics: [
          "Segmentierung und Zielgruppen",
          "Quantitative und qualitative Studien",
          "Kundenvalidierung (MVP)",
          "Konkurrenzanalyse",
        ],
      },
      {
        title: "Unternehmensfinanzierung",
        topics: [
          "Business Angels",
          "Risikokapital (Venture Capital)",
          "Mikrofinanz",
          "Zuschüsse und Wettbewerbe",
        ],
      },
      {
        title: "Pitch und Businessplan",
        topics: [
          "Investorenpitch",
          "Businessplan",
          "Finanzplanung (Prévisionnels financiers)",
          "Verhandlung mit den Finanziers",
        ],
      },
      {
        title: "Recht und Steuern der Unternehmensgründung in Mali",
        topics: [
          "Rechtsformen",
          "Gründungsformalitäten",
          "Unternehmensbesteuerung",
          "Sonderregelungen für KMU",
        ],
      },
      {
        title: "Wachstum und Steuerung",
        topics: [
          "Wachstumskennzahlen",
          "Dashboards der Geschäftsführung",
          "Organisation und Personalgewinnung",
          "Risikomanagement",
        ],
      },
      {
        title: "Digitale Innovation von KMU",
        topics: [
          "Digitale Transformation",
          "Online-Management-Tools",
          "E-Commerce",
          "Daten der KMU",
        ],
      },
      {
        title: "Unternehmerische Projekte",
        topics: [
          "Inkubation",
          "Mentoring",
          "Malisches Unternehmerökosystem",
          "Erfahrungsberichte von Unternehmern",
        ],
      },
    ],
    skills: [
      "Ein tragfähiges Geschäftsmodell aufbauen und iterieren",
      "Eine Marktstudie durchführen und die Annahmen im Feld testen",
      "Eine Finanzierungsrunde vorbereiten und verhandeln (Beteiligungskapital, Fremdkapital, Mikrofinanz)",
      "Ein Unternehmen im malischen Rechts- und Steuerrahmen gründen",
      "Das Wachstum eines KMU mit aussagekräftigen Kennzahlen steuern",
      "Die digitale Innovation eines kleinen oder mittleren Unternehmens begleiten",
    ],
    careers: [
      "Unternehmer/in",
      "KMU-Geschäftsführer/in",
      "Inkubator-Manager/in",
      "Berater/in für Unternehmensgründung",
      "Entwicklungsreferent/in",
      "Early-Stage-Investor/in",
      "Innovationsleiter/in",
    ],
  },

  "strategie-politique-defense": {
    title: "Strategie und Verteidigungspolitik",
    tagline:
      "Bedrohungen analysieren, Verteidigungsorganisationen führen und strategische Führung ausüben.",
    duration: "2 Jahre (4 Semester)",
    description: [
      "Dieser Masterstudiengang vertieft die strategischen Theorien und die Geopolitik in ihrer Anwendung auf die Verteidigungspolitik und die nationale Sicherheit. Die Studierenden lernen, das strategische Umfeld zu analysieren, die Ausarbeitung von Verteidigungspolitiken zu verstehen und Verteidigungsorganisationen zu managen: Struktur, Prozesse, Personal und interministerielle Koordinierung.",
      "Der Studiengang behandelt die zeitgenössischen transnationalen Risiken — Terrorismus, Cyberbedrohungen, illegale Schmuggel — sowie das Budgetmanagement der Verteidigung und die Ethik und Führung in Sicherheitsorganisationen. Er richtet sich an Führungskräfte der Verteidigungs- und Innenministerien, an höhere Offiziere in Weiterbildung sowie an Fachleute der Sicherheitsanalyse und -beratung.",
    ],
    objectives: [
      "Strategische Theorien und Geopolitik zur Analyse der Bedrohungen heranziehen",
      "Die Ausarbeitung der Verteidigungs- und nationalen Sicherheitspolitik verstehen und mitgestalten",
      "Verteidigungsorganisationen und ihre Ressourcen managen",
      "Transnationale Risiken bewerten: Terrorismus, Cyberbedrohungen, Schmuggel",
      "Das Budget und die Programme der Verteidigung steuern",
      "Ethische Führung in Sicherheitsorganisationen ausüben",
    ],
    courses: [
      {
        title: "Strategische Theorien und Geopolitik",
        topics: [
          "Große strategische Denker",
          "Klassische und moderne Strategie",
          "Geopolitik der Regionen",
          "Hybride Strategien",
        ],
      },
      {
        title: "Verteidigungspolitik und nationale Sicherheit",
        topics: [
          "Weißbücher und nationale Strategien",
          "Institutionelle Architektur",
          "Verteidigung und innere Sicherheit",
          "Strategische Planung",
        ],
      },
      {
        title: "Management von Verteidigungsorganisationen",
        topics: [
          "Organisation und Prozesse",
          "Verteidigungspersonal",
          "Interministerielle Koordinierung",
          "Modernisierung",
        ],
      },
      {
        title: "Transnationale Risiken",
        topics: [
          "Terrorismus und gewalttätiger Extremismus",
          "Cyberbedrohungen",
          "Illegale Schmuggelaktivitäten",
          "Lebensmittel- und Klimainsicherheit",
        ],
      },
      {
        title: "Budgetsteuerung der Verteidigung",
        topics: [
          "Budgetprogrammierung",
          "Kosten der Ausrüstungsprogramme",
          "Audit und Performance",
          "Verteidigungsökonomie",
        ],
      },
      {
        title: "Ethik und Führung",
        topics: [
          "Militärische Ethik",
          "Führung von Organisationen",
          "Recht bewaffneter Konflikte",
          "Verantwortungskultur",
        ],
      },
      {
        title: "Regionale Sicherheit und internationale Kooperation",
        topics: [
          "Regionale Sicherheitsorganisationen",
          "Bilaterale und multilaterale Kooperation",
          "Friedensmissionen",
          "Unterstützung und Ausbildung",
        ],
      },
      {
        title: "Nachrichtendienste und strategische Analyse",
        topics: [
          "Nachrichtenzyklus",
          "Bedrohungsanalyse",
          "Antizipation und Zukunftsforschung",
          "Krisenmanagement",
        ],
      },
    ],
    skills: [
      "Eine strategische Analyse eines Bedrohungsumfelds erstellen",
      "Zur Ausarbeitung einer Verteidigungs- oder nationalen Sicherheitspolitik beitragen",
      "Eine Organisation oder ein Verteidigungsprogramm managen",
      "Transnationale Risiken bewerten und Antworten vorschlagen",
      "Ein Verteidigungsbudget und -programm aufstellen und begleiten",
      "Ethische Führung in komplexen Lagen ausüben",
    ],
    careers: [
      "Führungskraft der Verteidigungs- und Innenministerien",
      "Höherer Offizier (Weiterbildung)",
      "Sicherheitsanalyst/in",
      "Risikoberater/in",
      "Führungskraft internationaler Sicherheitsorganisationen",
      "Manager/in der privaten Sicherheitsbranche",
      "Referent/in für Zukunftsanalyse",
    ],
  },
}
