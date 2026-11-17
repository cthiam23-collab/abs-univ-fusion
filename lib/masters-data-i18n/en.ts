import type { LocalizedMasterContent } from "../masters-data-i18n"

/**
 * Contenu intégral traduit des fiches Masters dynamiques (EN).
 * Rempli par le traducteur EN — clés = slugs de lib/masters-data.ts.
 * Les champs absents retombent sur le français (repli champ par champ).
 */
export const mastersContent: Record<string, LocalizedMasterContent> = {
  "finance-entreprise-ingenierie-financiere": {
    title: "Corporate Finance and Financial Engineering",
    tagline:
      "Design financing policy, structure financial operations and manage corporate risks.",
    duration: "2 years (4 semesters)",
    description: [
      "This Master's programme trains specialists capable of defining an organisation's financing policy and optimal capital structure, then designing sophisticated financial engineering operations: options, futures, swaps and hybrid debt. Students learn to arbitrage between the various sources of financing, to measure the cost of capital and to structure arrangements tailored to the development needs of companies and projects.",
      "The track also covers the management of financial risks — market, credit, liquidity, currency and interest rate risk — as well as mergers and acquisitions, from the valuation of targets to the legal and financial structuring of transactions. Considerable weight is given to financial modelling in Excel and VBA and to portfolio theory, in order to prepare graduates for senior financial responsibilities.",
    ],
    objectives: [
      "Define an organisation's optimal financing policy and capital structure",
      "Master financial engineering techniques: options, futures, swaps and hybrid debt",
      "Identify and hedge market, credit, liquidity, currency and interest rate risks",
      "Value companies and structure merger and acquisition transactions",
      "Build operational financial models in Excel and VBA",
      "Apply portfolio theory to investment management and asset allocation",
    ],
    courses: [
      {
        title: "Financing policy and capital structure",
        topics: [
          "Debt / equity trade-off",
          "Weighted average cost of capital",
          "Leverage effect",
          "Modigliani-Miller theorems",
        ],
      },
      {
        title: "Financial engineering and derivatives",
        topics: [
          "Options",
          "Futures and forwards",
          "Swaps",
          "Hybrid debt and structured financing",
        ],
      },
      {
        title: "Financial risk management",
        topics: [
          "Market risk",
          "Credit risk",
          "Liquidity risk",
          "Currency and interest rate risks",
          "Value at Risk",
        ],
      },
      {
        title: "Mergers and acquisitions",
        topics: [
          "Valuation (DCF, multiples)",
          "Deal structuring",
          "Due diligence",
          "LBOs and acquisition financing",
        ],
      },
      {
        title: "Financial modelling",
        topics: [
          "Forecasting models in Excel",
          "VBA automation",
          "Financial business plans",
          "Scenario and sensitivity analysis",
        ],
      },
      {
        title: "Portfolio theory",
        topics: [
          "Diversification and the efficient frontier",
          "Markowitz model",
          "CAPM",
          "Asset allocation",
        ],
      },
      {
        title: "Advanced financial analysis",
        topics: [
          "Reading financial statements",
          "Financial diagnostics",
          "Ratios and warning signals",
          "Notes to the financial statements",
        ],
      },
      {
        title: "Capital markets and bank financing",
        topics: [
          "Securities issues",
          "Syndicated financing",
          "Bank covenants",
          "UMOA regional markets",
        ],
      },
      {
        title: "Ethics and financial compliance",
        topics: [
          "Financial governance",
          "UEMOA banking regulation",
          "Anti-money laundering",
          "Compliance",
        ],
      },
    ],
    skills: [
      "Design a financing policy aligned with the company's strategy",
      "Value a company, a target or an investment project",
      "Design hedges against financial risks (market, credit, currency, interest rate)",
      "Structure financial engineering and merger and acquisition transactions",
      "Build and automate financial models in Excel and VBA",
      "Manage and optimise a portfolio of financial assets",
    ],
    careers: [
      "Chief Financial Officer (CFO)",
      "Senior Financial Analyst",
      "M&A Consultant",
      "Financial Engineering Specialist",
      "Portfolio Manager",
      "Risk Manager",
      "Corporate Treasurer",
    ],
  },

  "finance-islamique": {
    title: "Islamic Finance",
    tagline:
      "Master Islamic finance products, governance and development in accordance with the Sharia in Africa.",
    duration: "2 years (4 semesters)",
    description: [
      "This Master's programme delves into the fundamental principles of Islamic finance: the prohibition of riba (usurious interest) and of excessive speculation, together with the discipline's major contracts — mudaraba, musharaka, murabaha, ijara and sukuk. Students study the structuring of compliant Islamic banking products, from contract design through to commercial distribution.",
      "The track covers Sharia governance and compliance (Sharia boards, compliance audits, AAOIFI and IFSB standards), the management of risks specific to Islamic finance, takaful (Islamic insurance) and the role of Islamic finance in financing development in Africa. Career opportunities extend from Islamic banks and Islamic windows to regulatory bodies, consulting and Islamic fintech.",
    ],
    objectives: [
      "Master the principles and prohibitions of Islamic finance (riba, gharar, maysir)",
      "Structure the major contracts: mudaraba, musharaka, murabaha, ijara, sukuk",
      "Implement Sharia governance and compliance within an institution",
      "Design Islamic banking products suited to the market",
      "Manage the risks specific to Islamic financial institutions",
      "Analyse the potential of Islamic finance for development in Africa",
    ],
    courses: [
      {
        title: "Fundamentals and principles of Islamic finance",
        topics: [
          "Prohibition of riba",
          "Prohibition of gharar and maysir",
          "Sources: the Quran and the Sunna",
          "Islamic economics",
        ],
      },
      {
        title: "Islamic contracts and products",
        topics: [
          "Mudaraba",
          "Musharaka",
          "Murabaha",
          "Ijara",
          "Sukuk and Islamic securitisation",
        ],
      },
      {
        title: "Sharia governance and compliance",
        topics: [
          "Sharia boards",
          "Sharia compliance audit",
          "AAOIFI and IFSB standards",
          "Fatwas and structuring",
        ],
      },
      {
        title: "Islamic banks and Islamic windows",
        topics: [
          "Operating models",
          "Deposit collection and uses",
          "Commercial financing",
          "Islamic windows",
        ],
      },
      {
        title: "Takaful: Islamic insurance",
        topics: [
          "Principles of takaful",
          "Mudaraba and wakala models",
          "Islamic reinsurance (retakaful)",
          "Family and general insurance products",
        ],
      },
      {
        title: "Managing specific risks",
        topics: [
          "Sharia compliance risks",
          "Counterparty risk",
          "Profit rate risk",
          "Reserve funds",
        ],
      },
      {
        title: "Islamic finance and development in Africa",
        topics: [
          "Financing productive investment",
          "AfCFTA instruments",
          "Sovereign sukuk",
          "Financial inclusion",
        ],
      },
      {
        title: "Regulation and standardisation",
        topics: [
          "Regional regulatory landscape",
          "Role of the BCEAO and of the CIMA",
          "International standards",
          "Islamic reporting",
        ],
      },
      {
        title: "Islamic fintech and innovation",
        topics: [
          "Compliant payments",
          "Islamic crowdfunding",
          "Sharia-compatible robo-advisors",
          "African use cases",
        ],
      },
    ],
    skills: [
      "Assess the Sharia compliance of a product or financial transaction",
      "Structure financing under Islamic contracts (murabaha, ijara, sukuk, etc.)",
      "Set up Sharia governance (board, compliance audit)",
      "Design a range of Islamic banking or insurance products",
      "Assess and hedge the risks specific to Islamic institutions",
      "Analyse Islamic finance markets in West Africa",
    ],
    careers: [
      "Analyst or account manager in an Islamic bank",
      "Business officer for Islamic windows",
      "Executive at a regulatory body",
      "Sharia compliance consultant",
      "Takaful product manager",
      "Islamic fintech entrepreneur",
      "Compliant fund manager",
    ],
  },

  "audit-controle-gestion": {
    title: "Audit and Management Control",
    tagline:
      "Secure organisations through audit, internal control and performance management.",
    duration: "2 years (4 semesters)",
    description: [
      "This Master's programme develops a dual expertise: financial and operational auditing, and management control. Students learn to conduct audit engagements in accordance with professional standards, to master organisations' internal risks and to apply the IFRS standards and the statutory audit framework. The audit process — planning, work programmes, evidence gathering, reporting — is practised on real cases.",
      "The management control stream covers the building of budgets, dashboards and key performance indicators (KPIs), the steering of overall performance and the interplay between information systems, internal control and results measurement. Graduates prepare for roles as internal or external auditors, management controllers, internal control managers or junior finance directors.",
    ],
    objectives: [
      "Conduct financial and operational audit engagements in accordance with professional standards",
      "Design budgets, dashboards and KPIs in support of steering",
      "Assess and control organisations' internal risks",
      "Apply the IFRS standards and the statutory and contractual audit framework",
      "Secure information systems and internal control",
      "Steer economic, social and organisational performance",
    ],
    courses: [
      {
        title: "Financial audit",
        topics: [
          "Auditing standards",
          "The financial statement audit cycle",
          "Audit evidence",
          "Audit report",
        ],
      },
      {
        title: "Operational audit",
        topics: [
          "Process audits",
          "Compliance audits",
          "Efficiency audits",
          "Recommendations and follow-up",
        ],
      },
      {
        title: "Management control and budgets",
        topics: [
          "Budget construction",
          "Flexible budgets",
          "Variances and analysis",
          "Management reporting",
        ],
      },
      {
        title: "Dashboards and KPIs",
        topics: [
          "Key performance indicators",
          "Strategic dashboards",
          "Balanced scorecard",
          "Data visualisation",
        ],
      },
      {
        title: "Internal risk management",
        topics: [
          "Risk mapping",
          "Internal control framework",
          "COSO",
          "Fraud prevention",
        ],
      },
      {
        title: "IFRS standards and statutory audit",
        topics: [
          "The IFRS framework",
          "Professional practice standards",
          "Statutory audit",
          "Post-closing events",
        ],
      },
      {
        title: "Information systems and internal control",
        topics: [
          "Information system security",
          "Application controls",
          "IT audit",
          "Audit trail",
        ],
      },
      {
        title: "Performance steering",
        topics: [
          "Profitability analysis",
          "Costs and margins",
          "Operational performance",
          "Continuous improvement",
        ],
      },
      {
        title: "Audit methodology and ethics",
        topics: [
          "Engagement planning",
          "Work programme",
          "Working papers",
          "Code of ethics",
        ],
      },
    ],
    skills: [
      "Plan and execute a financial or operational audit engagement",
      "Design and operate relevant dashboards and KPIs",
      "Develop and monitor an effective internal control framework",
      "Prepare IFRS-compliant financial statements and audit reports",
      "Identify, assess and address internal risks",
      "Report pertinently to management and governing bodies",
    ],
    careers: [
      "Internal auditor",
      "External auditor",
      "Management controller",
      "Internal control manager",
      "Deputy statutory auditor",
      "Organisation consultant",
      "Junior finance director",
    ],
  },

  "supply-chain-management": {
    title: "Supply Chain Management",
    tagline:
      "Orchestrate flows from procurement to delivery in a West African environment undergoing full integration.",
    duration: "2 years (4 semesters)",
    description: [
      "This Master's programme trains global supply chain managers capable of steering physical and information flows, from procurement at suppliers through to final delivery to the customer. The programme covers purchasing and supplier management, logistics and international transport, operations planning (S&OP, demand forecasting) as well as inventory and warehouse management.",
      "A regional specialisation sets this track apart: port and customs logistics in West Africa, the opportunities opened up by the AfCFTA and the mastery of logistics information systems (WMS, TMS, ERP). Lean continuous improvement methods complete the graduates' toolkit, preparing them for roles as supply chain managers, logistics directors, international buyers or SCM consultants.",
    ],
    objectives: [
      "Steer physical and information flows from procurement to delivery",
      "Structure the purchasing function and manage supplier relationships",
      "Organise multimodal international logistics and transport",
      "Build demand plans and S&OP processes",
      "Operate the supply chain's WMS, TMS and ERP systems",
      "Apply Lean to the continuous improvement of the supply chain",
    ],
    courses: [
      {
        title: "Flow and supply chain management",
        topics: [
          "Flow typology",
          "Push and pull flows",
          "Upstream-downstream synchronisation",
          "Measuring logistics performance",
        ],
      },
      {
        title: "Purchasing and supplier management",
        topics: [
          "The purchasing process",
          "Sourcing and tendering",
          "Supplier negotiation",
          "Supplier performance and development",
        ],
      },
      {
        title: "Logistics and international transport",
        topics: [
          "Incoterms",
          "Customs transit",
          "Multimodal transport",
          "Insurance and transport documents",
        ],
      },
      {
        title: "Planning and forecasting (S&OP)",
        topics: [
          "Demand forecasting",
          "Sales and operations planning (S&OP)",
          "Master production schedule",
          "Capacity management",
        ],
      },
      {
        title: "Port and customs logistics in West Africa",
        topics: [
          "Regional logistics corridors",
          "Port operations",
          "Customs regimes",
          "Trade facilitation",
        ],
      },
      {
        title: "The AfCFTA and regional opportunities",
        topics: [
          "The AfCFTA framework",
          "Regional value chains",
          "Cross-border trade",
          "African e-commerce logistics",
        ],
      },
      {
        title: "Logistics information systems",
        topics: [
          "WMS (warehouse management)",
          "TMS (transport management)",
          "ERP and integration",
          "Traceability and logistics data",
        ],
      },
      {
        title: "Inventory and warehouse management",
        topics: [
          "Replenishment policies",
          "Safety stock",
          "Warehouse design",
          "Inventories and reliability",
        ],
      },
      {
        title: "Lean and continuous improvement",
        topics: [
          "Eliminating waste (muda)",
          "Kaizen",
          "Value Stream Mapping (VSM)",
          "Lean supply chain",
        ],
      },
    ],
    skills: [
      "Design and steer a high-performing end-to-end supply chain",
      "Run purchasing processes and negotiate with international suppliers",
      "Organise international transport and manage customs operations",
      "Build forecasts and facilitate an S&OP process",
      "Configure and operate logistics information systems (WMS, TMS, ERP)",
      "Deploy a Lean approach across logistics operations",
    ],
    careers: [
      "Supply chain manager",
      "Logistics director",
      "International buyer",
      "Procurement manager",
      "SCM consultant",
      "Transport manager",
      "Warehouse and distribution manager",
    ],
  },

  "developpement-durable-rse": {
    title: "Sustainable Development and CSR",
    tagline:
      "Lead the sustainable transition of organisations: CSR strategy, extra-financial reporting and real impact.",
    duration: "2 years (4 semesters)",
    description: [
      "This Master's programme prepares students to integrate the Sustainable Development Goals (SDGs) into organisational strategy and to lead accomplished Corporate Social Responsibility approaches: business ethics, stakeholder dialogue and extra-financial reporting under the GRI and CSRD frameworks. The question of measurement — indicators, data, verification — holds a central place.",
      "The track pays particular attention to the environmental and social impact assessment of major projects, notably in the mining and energy sectors, which are structuring for the Malian and West African economy. Students also discover green finance and the financing instruments of the transition, which open up careers as CSR managers, sustainable development consultants, environmental officers or ESG analysts.",
    ],
    objectives: [
      "Translate the SDGs into operational roadmaps for an organisation",
      "Develop a CSR strategy consistent with the business model",
      "Produce extra-financial reporting under the GRI and CSRD frameworks",
      "Conduct environmental and social impact assessments (mining, energy)",
      "Structure stakeholder dialogue and materiality analysis",
      "Mobilise green finance instruments to fund the transition",
    ],
    courses: [
      {
        title: "Sustainable Development Goals and the 2030 Agenda",
        topics: [
          "Overview of the 17 SDGs",
          "National implementation",
          "The contribution of businesses",
          "SDG indicators",
        ],
      },
      {
        title: "CSR strategy",
        topics: [
          "ISO 26000",
          "Materiality",
          "CSR roadmap",
          "Embedding in strategy",
        ],
      },
      {
        title: "Extra-financial reporting (GRI, CSRD)",
        topics: [
          "GRI standards",
          "CSRD directive and ESRS",
          "Data collection and reliability",
          "Assurance",
        ],
      },
      {
        title: "Business ethics",
        topics: [
          "Ethical decision-making",
          "Codes of conduct",
          "Anti-corruption",
          "Culture of integrity",
        ],
      },
      {
        title: "Environmental and social impact assessment",
        topics: [
          "ESIA frameworks",
          "Impact studies (mining, energy)",
          "Environmental and social management plans",
          "Community consultation",
        ],
      },
      {
        title: "Stakeholder analysis",
        topics: [
          "Stakeholder mapping",
          "Engagement and dialogue",
          "Managing expectations",
          "Conflicts and mediation",
        ],
      },
      {
        title: "Green finance",
        topics: [
          "Green bonds",
          "Climate finance",
          "Taxonomies",
          "Carbon projects and mechanisms",
        ],
      },
      {
        title: "Environmental management and sustainable value chains",
        topics: [
          "ISO 14001",
          "Circular economy",
          "Sustainable procurement",
          "Carbon footprint",
        ],
      },
    ],
    skills: [
      "Develop and deploy a CSR and sustainable development strategy",
      "Produce extra-financial reporting compliant with the GRI and CSRD frameworks",
      "Carry out or supervise an environmental and social impact assessment",
      "Manage stakeholder relationships for a project or an organisation",
      "Structure green financing for a transition project",
      "Assess the ESG performance of an organisation or an asset",
    ],
    careers: [
      "CSR manager",
      "Sustainable development consultant",
      "Environmental officer",
      "QHSE manager",
      "ESG analyst",
      "NGO project officer",
      "Donor-funded project coordinator",
    ],
  },

  "gouvernance-marches-publics": {
    title: "Governance and Management of Public Procurement",
    tagline:
      "Master public procurement: tendering, execution, control and governance in the public interest.",
    duration: "2 years (4 semesters)",
    description: [
      "This Master's programme trains public procurement professionals capable of mastering the legal framework of public procurement — the Malian code and the UEMOA directives — and of conducting tendering and contract execution procedures in due form. Students learn to secure every step of the chain: needs definition, calls for tender, bid evaluation, notification, execution and payment.",
      "The track also addresses the control and audit of public procurement, public governance and the fight against corruption, essential dimensions of trust in public action. Specific attention is paid to the management of projects financed by international donors — the World Bank, the AfDB, the European Union — and to their procurement rules, which represent a substantial source of employment for graduates.",
    ],
    objectives: [
      "Master the legal framework of public procurement (Malian code, UEMOA directives)",
      "Conduct tendering and contract execution procedures",
      "Set up the control and audit of public procurement",
      "Contribute to transparent and accountable public governance",
      "Prevent and address situations of corruption and conflicts of interest",
      "Manage donor-funded projects (World Bank, AfDB, EU)",
    ],
    courses: [
      {
        title: "Legal framework of public procurement",
        topics: [
          "Malian public procurement code",
          "UEMOA directives",
          "Regulatory institutions",
          "Case law",
        ],
      },
      {
        title: "Tendering procedures",
        topics: [
          "Procurement methods",
          "Calls for tender and requests for proposals",
          "Evaluation and award",
          "Notification and contracts",
        ],
      },
      {
        title: "Contract execution and payment",
        topics: [
          "Work orders",
          "Amendments and revisions",
          "Provisional and final acceptance",
          "Financial settlement and payment terms",
        ],
      },
      {
        title: "Control and audit of public procurement",
        topics: [
          "Ex ante and ex post control",
          "Regularity audits",
          "Performance audits",
          "Control bodies",
        ],
      },
      {
        title: "Public governance",
        topics: [
          "Transparency and accountability",
          "Public financial management",
          "Deconcentration and decentralisation",
          "Digitalisation of public procurement",
        ],
      },
      {
        title: "Fighting corruption",
        topics: [
          "Fraud typology",
          "Prevention mechanisms",
          "Declarations and conflicts of interest",
          "Reporting and sanctions",
        ],
      },
      {
        title: "Donor-funded projects",
        topics: [
          "World Bank procedures",
          "AfDB procedures",
          "EU rules",
          "Managing supervision missions",
        ],
      },
      {
        title: "Disputes and dispute resolution",
        topics: [
          "Bidders' remedies",
          "Dispute review boards",
          "Arbitration",
          "Handling terminations",
        ],
      },
    ],
    skills: [
      "Determine the legal qualification of an operation and choose the appropriate procurement method",
      "Process and evaluate bids in accordance with public procurement principles",
      "Steer contract execution through to acceptance and payment",
      "Audit the regularity and performance of a public procurement operation",
      "Apply the procurement procedures of the main international donors",
      "Contribute to corruption prevention in public purchasing",
    ],
    careers: [
      "Public administration executive",
      "Public contracts officer",
      "Tendering consultant",
      "Public auditor",
      "Head of public procurement",
      "Donor programme officer",
      "Public services controller",
    ],
  },

  "management-rh": {
    title: "Human Resources Management",
    tagline:
      "Develop human capital: talent, labour law, remuneration, skills and social dialogue.",
    duration: "2 years (4 semesters)",
    description: [
      "This Master's programme trains human resources managers capable of aligning HR policy with the organisation's strategy. The track covers talent management and recruitment, personnel administration with in-depth knowledge of Malian labour law, as well as the design of remuneration and performance management policies.",
      "Students learn to organise skills development (training plans, strategic workforce planning), to facilitate social dialogue and labour relations, and to leverage HRIS systems to digitalise the HR function. Career opportunities span the full range of HR professions: HR manager, junior HR director, recruitment officer, training manager, HR consultant or payroll specialist.",
    ],
    objectives: [
      "Align HR strategy with the organisation's overall strategy",
      "Manage talent: recruitment, onboarding, mobility and retention",
      "Apply personnel administration and Malian labour law",
      "Design remuneration and performance management policies",
      "Organise skills development and the training plan",
      "Facilitate social dialogue and operate an HRIS",
    ],
    courses: [
      {
        title: "HR strategy and talent management",
        topics: [
          "Workforce planning",
          "Employer branding",
          "Recruitment and selection",
          "Onboarding and retention",
        ],
      },
      {
        title: "Personnel administration and Malian labour law",
        topics: [
          "The Malian labour code",
          "Employment contracts",
          "Social regulations",
          "Labour litigation",
        ],
      },
      {
        title: "Remuneration and performance",
        topics: [
          "Salary structure",
          "Bonuses and benefits",
          "Performance appraisal",
          "Variable pay and incentives",
        ],
      },
      {
        title: "Skills development",
        topics: [
          "Strategic workforce planning (GPEC)",
          "Training plan",
          "Training design",
          "Learning assessment",
        ],
      },
      {
        title: "Social dialogue and labour relations",
        topics: [
          "Collective bargaining",
          "Employee representation",
          "Conflict management",
          "The role of trade unions",
        ],
      },
      {
        title: "HRIS and HR digitalisation",
        topics: [
          "HRIS functionality",
          "Digital payroll and administration",
          "HR analytics",
          "E-recruitment",
        ],
      },
      {
        title: "Payroll management",
        topics: [
          "Payslips and social contributions",
          "CNSS and social obligations",
          "Controls and reliability",
          "Practical Malian cases",
        ],
      },
      {
        title: "Quality of work life and team management",
        topics: [
          "Occupational risk prevention",
          "Quality of work life",
          "Team management",
          "Company culture",
        ],
      },
    ],
    skills: [
      "Design an HR policy aligned with the organisation's strategy",
      "Manage a complete recruitment and talent management process",
      "Apply Malian labour law to personnel administration",
      "Build a salary scale and a performance management framework",
      "Develop and steer a skills development plan",
      "Operate an HRIS and produce reliable people metrics",
    ],
    careers: [
      "HR manager",
      "Junior HR director",
      "Recruitment officer",
      "Training manager",
      "HR consultant",
      "Payroll specialist",
      "Employee relations officer",
    ],
  },

  "ingenierie-informatique": {
    title: "Computer Engineering",
    tagline:
      "Design tomorrow's digital systems: architecture, development, data and AI, cybersecurity and cloud.",
    duration: "2 years (4 semesters)",
    description: [
      "This Master's programme trains engineers capable of designing robust, scalable software architectures, developing full-stack applications and managing digital projects from end to end. Students consolidate their skills in programming, API design and software quality on real projects carried out in teams.",
      "The track also covers data and applied artificial intelligence, cybersecurity (threats, defence, cryptography) and cloud and DevOps practices — containers, CI/CD pipelines, infrastructure as code. Graduates move into roles as software architects, lead developers, data/AI engineers, cybersecurity consultants or digital project managers, or venture into tech entrepreneurship.",
    ],
    objectives: [
      "Design robust, scalable and maintainable software architectures",
      "Develop modern full-stack applications (front end, back end, APIs)",
      "Leverage data and implement AI applied to business needs",
      "Secure systems: threat analysis, defence, cryptography",
      "Deploy and operate cloud applications with DevOps practices",
      "Manage digital projects using agile methods",
    ],
    courses: [
      {
        title: "Software architectures",
        topics: [
          "Architecture patterns",
          "Microservices",
          "API design",
          "Hexagonal architecture",
        ],
      },
      {
        title: "Full-stack development",
        topics: [
          "Front-end development",
          "Back-end development",
          "Databases",
          "Testing and software quality",
        ],
      },
      {
        title: "Data and applied AI",
        topics: [
          "Advanced databases",
          "Data engineering",
          "Applied machine learning",
          "Model deployment",
        ],
      },
      {
        title: "Cybersecurity",
        topics: [
          "Threats and attack vectors",
          "Applied cryptography",
          "Application security",
          "Incident response",
        ],
      },
      {
        title: "Cloud and DevOps",
        topics: [
          "Containers and orchestration",
          "CI/CD",
          "Infrastructure as code",
          "Observability",
        ],
      },
      {
        title: "Digital project management",
        topics: [
          "Agile methods (Scrum)",
          "Scoping and specifications",
          "Team management",
          "Product roadmap",
        ],
      },
      {
        title: "Distributed systems and networks",
        topics: [
          "Inter-service communication",
          "Message queues",
          "Resilience and fault tolerance",
          "Networks and protocols",
        ],
      },
      {
        title: "Software quality and maintenance",
        topics: [
          "Code review",
          "Refactoring",
          "Test coverage",
          "Technical debt",
        ],
      },
      {
        title: "Capstone projects",
        topics: [
          "Requirements specification",
          "Team development",
          "Continuous delivery",
          "Technical defence",
        ],
      },
    ],
    skills: [
      "Design the architecture of a complex software system",
      "Develop, test and deploy a full-stack application",
      "Build a data pipeline and train AI models for applications",
      "Assess and strengthen the security of an information system",
      "Automate deployments and operate cloud infrastructure",
      "Lead a digital project using agile methodology",
    ],
    careers: [
      "Software architect",
      "Lead developer",
      "Data / AI engineer",
      "Cybersecurity consultant",
      "Digital project manager",
      "Tech entrepreneur",
      "DevOps engineer",
    ],
  },

  "genie-minier": {
    title: "Mining Engineering",
    tagline:
      "Train engineers for the Malian and West African mining sector: exploration, exploitation, processing and environmental responsibility.",
    duration: "2 years (4 semesters)",
    description: [
      "This Master's programme trains mining engineers for a major sector of the Malian and West African economy — gold, bauxite and the other subsurface resources. The programme covers ore deposit knowledge and exploration techniques, open-pit and underground mining methods, as well as ore processing and beneficiation up to metallurgical operations.",
      "An essential part of the curriculum is devoted to the environmental and social management of mining projects, to Malian and West African mining legislation and to local content, not to mention the safety of people and installations. Graduates move into roles as mining engineers, mining operations supervisors, mining HSE managers or mining environment consultants, both in mining companies and in public administrations.",
    ],
    objectives: [
      "Characterise ore deposits and conduct exploration campaigns (gold, bauxite in Mali)",
      "Select and implement the appropriate mining methods",
      "Organise ore processing and beneficiation",
      "Manage the environmental and social issues of mining projects",
      "Apply Malian and West African mining legislation and local content requirements",
      "Guarantee the safety of operations and the health of workers",
    ],
    courses: [
      {
        title: "Ore deposits and mining exploration",
        topics: [
          "Deposit geology (gold, bauxite)",
          "Exploration campaigns",
          "Drilling and sampling",
          "Resource estimation",
        ],
      },
      {
        title: "Mining methods",
        topics: [
          "Open-pit mining",
          "Underground mining",
          "Drilling and blasting",
          "Operations planning",
        ],
      },
      {
        title: "Ore processing",
        topics: [
          "Crushing and grinding",
          "Flotation and gravity separation",
          "Hydrometallurgy (cyanidation)",
          "Recovery and refining",
        ],
      },
      {
        title: "Environmental and social management of mining projects",
        topics: [
          "Mining impact studies",
          "Effluent and waste management",
          "Site rehabilitation",
          "Community relations",
        ],
      },
      {
        title: "Mining legislation and local content",
        topics: [
          "The Malian mining code",
          "Regional frameworks",
          "Mining conventions",
          "Local content and economic benefits",
        ],
      },
      {
        title: "Mine safety and health",
        topics: [
          "Mining risk analysis",
          "Installation safety",
          "Occupational health",
          "HSE culture",
        ],
      },
      {
        title: "Mine planning and block models",
        topics: [
          "Geological and block models",
          "Extraction sequences",
          "Pit optimisation",
          "Mine logistics",
        ],
      },
      {
        title: "Mining economics and project management",
        topics: [
          "Feasibility studies",
          "Costs and CAPEX/OPEX",
          "Mining project financing",
          "Commodity markets",
        ],
      },
    ],
    skills: [
      "Interpret geological data and contribute to resource estimation",
      "Size and supervise open-pit or underground operations",
      "Run an ore processing chain",
      "Lead the environmental and social components of a mining project",
      "Apply the legal and contractual framework of the mining sector",
      "Implement a mine occupational health and safety system",
    ],
    careers: [
      "Mining engineer",
      "Mining operations supervisor",
      "Mining HSE manager",
      "Mining environment consultant",
      "Executive in the mines administration",
      "Mining services contractor",
      "Mine planner",
    ],
  },

  journalisme: {
    title: "Journalism",
    tagline:
      "Practise investigative journalism in the digital age: data, fact-checking, ethics and innovation.",
    duration: "2 years (4 semesters)",
    description: [
      "This Master's programme refines professional journalism practice around three pillars: investigation, data journalism and fact-checking. Students learn to document, verify and tell complex stories, with a permanent requirement of ethics and professional standards, in a media landscape marked by disinformation.",
      "The track also covers digital media and social networks, crisis management and community communication, as well as AI applied to the media — production automation, assisted verification, new formats. Graduates prepare for roles as senior journalists, editors-in-chief, investigative reporters, communications managers, senior community managers, media consultants or content producers.",
    ],
    objectives: [
      "Conduct rigorous, well-sourced journalistic investigations",
      "Practise data journalism and fact-checking",
      "Use digital media and social networks strategically",
      "Manage crisis communication and sensitive situations",
      "Uphold and enforce the ethics and standards of journalism",
      "Use AI applied to the media responsibly",
    ],
    courses: [
      {
        title: "Investigative journalism",
        topics: [
          "Investigation methodology",
          "Sources and source protection",
          "Documents and field investigation",
          "The investigative narrative",
        ],
      },
      {
        title: "Data journalism and fact-checking",
        topics: [
          "Data collection and cleaning",
          "Data visualisation",
          "Verification techniques",
          "Disinformation and rumours",
        ],
      },
      {
        title: "Digital media and social networks",
        topics: [
          "The digital media ecosystem",
          "Editorial community management",
          "Short formats and video",
          "Audience measurement",
        ],
      },
      {
        title: "Crisis management and communication",
        topics: [
          "Crisis communication",
          "Media relations",
          "Media spokespersonship",
          "Monitoring and alerting",
        ],
      },
      {
        title: "Ethics and standards of journalism",
        topics: [
          "Professional charters",
          "Pluralism and fairness",
          "Protection of sources",
          "Legal responsibility",
        ],
      },
      {
        title: "AI applied to the media",
        topics: [
          "Production automation",
          "AI-assisted verification",
          "Detecting generated content",
          "Ethical issues",
        ],
      },
      {
        title: "Multimedia production",
        topics: [
          "Multimedia writing",
          "Audiovisual production",
          "Podcasting",
          "Information design",
        ],
      },
      {
        title: "Media law",
        topics: [
          "The legal framework of the press",
          "Defamation and right of reply",
          "Freedom of the press",
          "Media regulation",
        ],
      },
    ],
    skills: [
      "Design and produce a complete journalistic investigation",
      "Verify information and produce documented fact-checking",
      "Analyse and visualise data to tell stories with it",
      "Deploy a multi-platform digital editorial strategy",
      "Manage an organisation's communication in a crisis",
      "Use AI production and verification tools responsibly",
    ],
    careers: [
      "Senior journalist / editor-in-chief",
      "Investigative reporter",
      "Communications manager",
      "Senior community manager",
      "Media consultant",
      "Content producer",
      "Digital newsroom manager",
    ],
  },

  "relations-affaires-internationales": {
    title: "International Relations and Affairs",
    tagline:
      "Understand and act in the international system: economic diplomacy, African integration and multilateral negotiation.",
    duration: "2 years (4 semesters)",
    description: [
      "This Master's programme deepens the theories of international relations and their concrete application to world affairs: economic diplomacy, multilateral negotiation and international business law. Students analyse the actors, institutions and dynamics of the international system, with an emphasis on the economic and commercial interests of states and companies.",
      "A strong African dimension structures the track: regional and continental integration through ECOWAS, the AfCFTA and the African Union, as well as development cooperation and work within international organisations. Graduates prepare for careers as diplomats, programme officers within institutions (UN, EU, NGOs), international affairs consultants or geopolitical analysts.",
    ],
    objectives: [
      "Apply international relations theories to analyse crises and cooperation",
      "Conduct diplomatic, multilateral or economic negotiations",
      "Analyse African integration dynamics (ECOWAS, AfCFTA, African Union)",
      "Apply international business law to cross-border operations",
      "Design and manage development cooperation projects",
      "Produce geopolitical analyses and actionable risk briefs",
    ],
    courses: [
      {
        title: "Theories of international relations",
        topics: [
          "Realist, liberal and constructivist approaches",
          "Actors of the international system",
          "Power balances and imbalances",
          "Case studies",
        ],
      },
      {
        title: "Economic diplomacy",
        topics: [
          "Trade diplomacy",
          "Investment promotion",
          "Trade negotiations",
          "Sanctions and incentives",
        ],
      },
      {
        title: "African integration (ECOWAS, AfCFTA, African Union)",
        topics: [
          "ECOWAS institutions",
          "The African Continental Free Trade Area",
          "The African Union's Agenda 2063",
          "Free movement and a single currency",
        ],
      },
      {
        title: "Multilateral negotiation",
        topics: [
          "Negotiation techniques",
          "Protocol and diplomatic practice",
          "Coalitions and negotiating blocs",
          "Summit simulations",
        ],
      },
      {
        title: "International business law",
        topics: [
          "International contracts",
          "International commercial arbitration",
          "The WTO and trade agreements",
          "Investment protection",
        ],
      },
      {
        title: "Development cooperation",
        topics: [
          "The aid architecture",
          "The project cycle",
          "Bilateral and multilateral financing",
          "Monitoring and evaluation",
        ],
      },
      {
        title: "Geopolitics of West Africa",
        topics: [
          "Regional security issues",
          "Rivalries and partnerships",
          "Resources and transitions",
          "Migration",
        ],
      },
      {
        title: "International security",
        topics: [
          "The collective security system",
          "Conflict prevention",
          "Peace operations",
          "International cybersecurity",
        ],
      },
    ],
    skills: [
      "Analyse an international situation using the relevant theoretical frameworks",
      "Prepare and conduct a multilateral negotiation",
      "Write geopolitical analyses and strategy briefs",
      "Apply international business law in a cross-border operation",
      "Design and monitor a development cooperation project",
      "Represent an institution or a company in an international forum",
    ],
    careers: [
      "Diplomat",
      "Programme officer (UN, EU, NGOs)",
      "International affairs consultant",
      "Geopolitical analyst",
      "Chamber of commerce executive",
      "Cooperation manager",
      "Commercial attaché",
    ],
  },

  entrepreneuriat: {
    title: "Entrepreneurship",
    tagline:
      "From idea to growing enterprise: business model, financing, the Malian legal framework and growth management.",
    duration: "2 years (4 semesters)",
    description: [
      "This Master's programme guides students from the business idea through to managing growth. The track covers turning an idea into a solid business model (Business Model Canvas, Lean Startup), market research and customer validation, then pitching and building the business plan. Students work on their own projects or on real company projects.",
      "The programme addresses business financing in all its forms — business angels, venture capital, microfinance — as well as the legal and tax framework for business creation in Mali. A final sequence covers growth and steering (indicators, dashboards) and the digital innovation of SMEs. Career paths range from starting or taking over a business to incubator management, from business creation consulting to early-stage investment.",
    ],
    objectives: [
      "Turn an idea into a validated business model (Business Model Canvas, Lean)",
      "Conduct market research and validate customer hypotheses",
      "Structure project financing: business angels, venture capital, microfinance",
      "Master the legal and tax aspects of business creation in Mali",
      "Manage growth with appropriate indicators and dashboards",
      "Support the digital transformation and innovation of SMEs",
    ],
    courses: [
      {
        title: "From idea to business model",
        topics: [
          "Business Model Canvas",
          "Lean Startup",
          "Value proposition",
          "Iteration and pivot",
        ],
      },
      {
        title: "Market research",
        topics: [
          "Segmentation and targeting",
          "Quantitative and qualitative studies",
          "Customer validation (MVP)",
          "Competitive analysis",
        ],
      },
      {
        title: "Business financing",
        topics: [
          "Business angels",
          "Venture capital",
          "Microfinance",
          "Grants and competitions",
        ],
      },
      {
        title: "Pitch and business plan",
        topics: [
          "The investor pitch",
          "Business plan",
          "Financial forecasts",
          "Negotiating with funders",
        ],
      },
      {
        title: "Business law and taxation in Mali",
        topics: [
          "Legal forms",
          "Incorporation formalities",
          "Corporate taxation",
          "SME regimes",
        ],
      },
      {
        title: "Growth and steering",
        topics: [
          "Growth indicators",
          "Executive dashboards",
          "Organisation and recruitment",
          "Risk management",
        ],
      },
      {
        title: "SME digital innovation",
        topics: [
          "Digital transformation",
          "Online management tools",
          "E-commerce",
          "SME data",
        ],
      },
      {
        title: "Entrepreneurial projects",
        topics: [
          "Incubation",
          "Mentoring",
          "The Malian entrepreneurial ecosystem",
          "Entrepreneurs' feedback and lessons learned",
        ],
      },
    ],
    skills: [
      "Build and iterate a viable business model",
      "Conduct market research and test hypotheses in the field",
      "Prepare and negotiate a funding round (equity, debt, microfinance)",
      "Create a company under the Malian legal and tax framework",
      "Manage SME growth with relevant indicators",
      "Support the digital innovation of a small or medium-sized enterprise",
    ],
    careers: [
      "Entrepreneur",
      "SME owner-manager",
      "Incubator manager",
      "Business creation consultant",
      "Business development officer",
      "Early-stage investor",
      "Innovation manager",
    ],
  },

  "strategie-politique-defense": {
    title: "Strategy and Defence Policy",
    tagline:
      "Analyse threats, steer defence organisations and exercise strategic leadership.",
    duration: "2 years (4 semesters)",
    description: [
      "This Master's programme deepens strategic theories and geopolitics as applied to defence policy and national security. Students learn to analyse the strategic environment, to understand how defence policies are formulated and to manage defence organisations: structure, processes, human resources and inter-ministerial coordination.",
      "The track addresses contemporary transnational risks — terrorism, cyber threats, illicit trafficking — as well as the budgetary steering of defence and ethics and leadership in security organisations. It is aimed at executives of the Ministries of Defence and of the Interior, senior officers in continuing education and professionals in security analysis and consulting.",
    ],
    objectives: [
      "Apply strategic theories and geopolitics to analyse threats",
      "Understand and contribute to the formulation of defence and national security policy",
      "Manage defence organisations and their resources",
      "Assess transnational risks: terrorism, cyber threats, trafficking",
      "Steer the defence budget and programmes",
      "Exercise ethical leadership in security organisations",
    ],
    courses: [
      {
        title: "Strategic theories and geopolitics",
        topics: [
          "Major strategic thinkers",
          "Classical and modern strategy",
          "Regional geopolitics",
          "Hybrid strategies",
        ],
      },
      {
        title: "Defence policy and national security",
        topics: [
          "White papers and national strategies",
          "Institutional architecture",
          "Defence and internal security",
          "Strategic planning",
        ],
      },
      {
        title: "Management of defence organisations",
        topics: [
          "Organisation and processes",
          "Defence human resources",
          "Inter-ministerial coordination",
          "Modernisation",
        ],
      },
      {
        title: "Transnational risks",
        topics: [
          "Terrorism and violent extremism",
          "Cyber threats",
          "Illicit trafficking",
          "Food and climate insecurity",
        ],
      },
      {
        title: "Defence budget steering",
        topics: [
          "Budget programming",
          "Costs of equipment programmes",
          "Audit and performance",
          "Defence economics",
        ],
      },
      {
        title: "Ethics and leadership",
        topics: [
          "Military ethics",
          "Organisational leadership",
          "The law of armed conflict",
          "A culture of responsibility",
        ],
      },
      {
        title: "Regional security and international cooperation",
        topics: [
          "Regional security organisations",
          "Bilateral and multilateral cooperation",
          "Peace operations",
          "Assistance and training",
        ],
      },
      {
        title: "Intelligence and strategic analysis",
        topics: [
          "The intelligence cycle",
          "Threat analysis",
          "Anticipation and foresight",
          "Crisis management",
        ],
      },
    ],
    skills: [
      "Produce a strategic analysis of a threat environment",
      "Contribute to the formulation of a defence or national security policy",
      "Manage a defence organisation or programme",
      "Assess transnational risks and propose responses",
      "Draft and monitor a defence budget and programmes",
      "Exercise ethical leadership in complex situations",
    ],
    careers: [
      "Executive in the Ministries of Defence and of the Interior",
      "Senior officer (continuing education)",
      "Security analyst",
      "Risk consultant",
      "Executive in international security organisations",
      "Private security manager",
      "Foresight studies officer",
    ],
  },
}
