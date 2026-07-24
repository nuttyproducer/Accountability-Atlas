import type { SourceRecord } from "../types/content";

/**
 * Public source records.
 *
 * Every source is a publicly available document or record. The
 * SourceRecord type captures metadata about the document — who
 * published it, what type of document it is, when it was accessed,
 * and whether it is currently active.
 *
 * A source record establishes what an institution published or
 * stated. It does not automatically establish every underlying
 * factual claim within the source. Verification of individual
 * claims requires additional corroboration.
 *
 * Source records do not carry a contentStatus. They are factual
 * references, not editorial summaries.
 */
export const sources: SourceRecord[] = [
  // ═══════════════════════════════════════════════════════════════════════
  // ICJ — International Court of Justice
  // ═══════════════════════════════════════════════════════════════════════
  {
    id: "icj-2024-01-26",
    slug: "icj-provisional-measures-jan-2024",
    title:
      "Application of the Convention on the Prevention and Punishment of the Crime of Genocide in the Gaza Strip (South Africa v. Israel) — Order of 26 January 2024",
    publisher: "International Court of Justice",
    sourceType: "court",
    documentType: "Provisional measures order",
    url: "https://www.icj-cij.org/node/203455",
    publicationDate: "2024-01-26",
    accessedAt: "2026-07-24",
    language: "en",
    jurisdiction: "International — United Nations principal judicial organ",
    authors: ["International Court of Justice"],
    official: true,
    status: "active",
    notes:
      "The ICJ issued provisional measures in the case brought by South Africa alleging violations of the Genocide Convention. This is the direct document page for the 26 January 2024 order. The order is a binding provisional measures decision — it does not constitute a final judgment on the merits.",
    version: 1,
    lastCheckedAt: "2026-07-24",
    correctionUrl: "/corrections",
  },
  {
    id: "icj-2024-03-28",
    slug: "icj-additional-measures-march-2024",
    title:
      "Application of the Convention on the Prevention and Punishment of the Crime of Genocide in the Gaza Strip (South Africa v. Israel) — Order of 28 March 2024",
    publisher: "International Court of Justice",
    sourceType: "court",
    documentType: "Provisional measures order (modification)",
    url: "https://www.icj-cij.org/node/203560",
    publicationDate: "2024-03-28",
    accessedAt: "2026-07-24",
    language: "en",
    jurisdiction: "International — United Nations principal judicial organ",
    authors: ["International Court of Justice"],
    official: true,
    status: "active",
    notes:
      "The ICJ issued modified provisional measures on 28 March 2024, reaffirming earlier measures and adding specific obligations regarding humanitarian assistance. The order followed a further request from South Africa citing worsening conditions and famine. This is the direct document page.",
    version: 1,
    lastCheckedAt: "2026-07-24",
    correctionUrl: "/corrections",
  },
  {
    id: "icj-2024-05-24",
    slug: "icj-additional-measures-may-2024",
    title:
      "Application of the Convention on the Prevention and Punishment of the Crime of Genocide in the Gaza Strip (South Africa v. Israel) — Order of 24 May 2024",
    publisher: "International Court of Justice",
    sourceType: "court",
    documentType: "Provisional measures order (additional)",
    url: "https://www.icj-cij.org/node/204091",
    publicationDate: "2024-05-24",
    accessedAt: "2026-07-24",
    language: "en",
    jurisdiction: "International — United Nations principal judicial organ",
    authors: ["International Court of Justice"],
    official: true,
    status: "active",
    notes:
      "The ICJ issued additional provisional measures specifically addressing the military offensive in Rafah. The Court ordered Israel to immediately halt its military offensive in Rafah governorate and to keep the Rafah crossing open for humanitarian assistance. The order is a binding provisional measures decision — it does not constitute a final judgment on the merits.",
    version: 1,
    lastCheckedAt: "2026-07-24",
    correctionUrl: "/corrections",
  },

  // ═══════════════════════════════════════════════════════════════════════
  // ICC — International Criminal Court
  // ═══════════════════════════════════════════════════════════════════════
  {
    id: "icc-palestine-2024",
    slug: "icc-palestine-situation",
    title: "Situation in the State of Palestine — Public Court Records",
    publisher: "International Criminal Court",
    sourceType: "court",
    documentType: "Court records and filings",
    url: "https://www.icc-cpi.int/palestine",
    publicationDate: "2024",
    accessedAt: "2026-07-24",
    language: "en",
    jurisdiction: "International — Rome Statute, State of Palestine referral",
    authors: ["International Criminal Court — Office of the Prosecutor", "ICC Pre-Trial Chambers"],
    official: true,
    status: "active",
    notes:
      "The ICC has an open situation concerning the State of Palestine with jurisdiction over alleged crimes committed in the occupied Palestinian territory. Public court records include decisions on jurisdiction, arrest warrant applications, and procedural filings. The ICC is an independent judicial institution.",
    version: 1,
    lastCheckedAt: "2026-07-24",
    correctionUrl: "/corrections",
  },
  {
    id: "icc-arrest-warrants-2024-11",
    slug: "icc-arrest-warrants-nov-2024",
    title:
      "Situation in the State of Palestine: ICC Pre-Trial Chamber I rejects the State of Israel's challenges to jurisdiction and issues warrants of arrest for Benjamin Netanyahu and Yoav Gallant",
    publisher: "International Criminal Court",
    sourceType: "court",
    documentType: "Press release — arrest warrant issuance",
    url: "https://www.icc-cpi.int/news/situation-state-palestine-icc-pre-trial-chamber-i-rejects-state-israels-challenges",
    publicationDate: "2024-11-21",
    accessedAt: "2026-07-24",
    language: "en",
    jurisdiction: "International — Rome Statute",
    authors: ["ICC Pre-Trial Chamber I"],
    official: true,
    status: "active",
    notes:
      "On 21 November 2024, ICC Pre-Trial Chamber I unanimously issued arrest warrants for Benjamin Netanyahu, Yoav Gallant, and Mohammed Deif. The Chamber found reasonable grounds to believe that Netanyahu and Gallant each committed the war crime of using starvation as a method of warfare and crimes against humanity. All persons are presumed innocent until proven guilty. This press release summarises the judicial decision.",
    version: 1,
    lastCheckedAt: "2026-07-24",
    correctionUrl: "/corrections",
  },

  // ═══════════════════════════════════════════════════════════════════════
  // UN OHCHR — Commission of Inquiry
  // ═══════════════════════════════════════════════════════════════════════
  {
    id: "un-coi-2024",
    slug: "un-coi-opt-2024",
    title:
      "Report of the Independent International Commission of Inquiry on the Occupied Palestinian Territory, including East Jerusalem, and Israel",
    publisher: "United Nations Human Rights Council",
    sourceType: "un",
    documentType: "Commission of Inquiry report",
    url: "https://www.ohchr.org/en/hr-bodies/hrc/co-israel-opt",
    publicationDate: "2024",
    accessedAt: "2026-07-24",
    language: "en",
    jurisdiction: "International — United Nations Human Rights Council mandate",
    authors: ["Independent International Commission of Inquiry on the Occupied Palestinian Territory, including East Jerusalem, and Israel"],
    official: true,
    status: "active",
    notes:
      "The UN Independent International Commission of Inquiry published detailed reports examining human-rights and international humanitarian law compliance by all parties. Reports are submitted to the UN General Assembly and Human Rights Council. UN Commissions of Inquiry are fact-finding bodies — their findings inform international accountability processes but are not judicial rulings. The COI's 2024 report to the General Assembly (A/79/232) covers the period 7 October 2023 to August 2024.",
    version: 1,
    lastCheckedAt: "2026-07-24",
    correctionUrl: "/corrections",
  },
  {
    id: "un-coi-unga-2024",
    slug: "un-coi-unga-report-2024",
    title:
      "Report of the Independent International Commission of Inquiry on the Occupied Palestinian Territory, including East Jerusalem, and Israel (A/79/232)",
    publisher: "United Nations General Assembly",
    sourceType: "un",
    documentType: "Report to the General Assembly",
    url: "https://digitallibrary.un.org/record/4063389",
    publicationDate: "2024-09-11",
    accessedAt: "2026-07-24",
    language: "en",
    jurisdiction: "International — United Nations General Assembly",
    authors: ["Independent International Commission of Inquiry on the Occupied Palestinian Territory, including East Jerusalem, and Israel"],
    official: true,
    status: "active",
    notes:
      "The Commission's third report (A/79/232), dated 11 September 2024, covering treatment of detainees and hostages and attacks on medical facilities from 7 October 2023 to August 2024. This is the exact document record in the UN Digital Library.",
    version: 1,
    lastCheckedAt: "2026-07-24",
    correctionUrl: "/corrections",
  },

  // ═══════════════════════════════════════════════════════════════════════
  // UN OCHA — Occupied Palestinian Territory
  // ═══════════════════════════════════════════════════════════════════════
  {
    id: "ocha-opt-main",
    slug: "ocha-opt-main",
    title:
      "United Nations Office for the Coordination of Humanitarian Affairs — Occupied Palestinian Territory",
    publisher: "UN OCHA",
    sourceType: "un",
    documentType: "Humanitarian coordination and reporting hub",
    url: "https://www.ochaopt.org/",
    accessedAt: "2026-07-24",
    language: "en",
    jurisdiction: "International — United Nations",
    authors: ["UN OCHA occupied Palestinian territory office"],
    official: true,
    status: "active",
    notes:
      "UN OCHA's occupied Palestinian territory office coordinates humanitarian response, publishes twice-weekly situation reports (Gaza Strip and West Bank), tracks access restrictions and casualties, and manages the humanitarian notification system. This is the main landing page for all oPt humanitarian reporting.",
    version: 1,
    lastCheckedAt: "2026-07-24",
    correctionUrl: "/corrections",
  },
  {
    id: "ocha-opt-data",
    slug: "ocha-opt-data",
    title: "UN OCHA oPt — Data and dashboards",
    publisher: "UN OCHA",
    sourceType: "un",
    documentType: "Data portal",
    url: "https://www.ochaopt.org/data",
    accessedAt: "2026-07-24",
    language: "en",
    jurisdiction: "International — United Nations",
    authors: ["UN OCHA occupied Palestinian territory office"],
    official: true,
    status: "active",
    notes:
      "UN OCHA's data portal for the occupied Palestinian territory. Includes casualty data, displacement tracking, access restriction mapping, and humanitarian funding tracking. Data is updated regularly from verified sources.",
    version: 1,
    lastCheckedAt: "2026-07-24",
    correctionUrl: "/corrections",
  },

  // ═══════════════════════════════════════════════════════════════════════
  // ICRC — International Committee of the Red Cross
  // ═══════════════════════════════════════════════════════════════════════
  {
    id: "icrc-israel-opt",
    slug: "icrc-israel-opt",
    title:
      "ICRC in Israel and the occupied territories — Humanitarian action and IHL advocacy",
    publisher: "International Committee of the Red Cross",
    sourceType: "humanitarian",
    documentType: "Operational and legal resource hub",
    url: "https://www.icrc.org/en/where-we-work/israel-and-occupied-territories",
    accessedAt: "2026-07-24",
    language: "en",
    jurisdiction: "International — Geneva Conventions mandate",
    authors: ["International Committee of the Red Cross"],
    official: true,
    status: "active",
    notes:
      "The ICRC operates under the Geneva Conventions providing humanitarian protection and assistance in Israel and the occupied territories. This page provides access to operational updates, IHL analysis, and official statements on the conflict.",
    version: 1,
    lastCheckedAt: "2026-07-24",
    correctionUrl: "/corrections",
  },
  {
    id: "icrc-president-statement-2024-03",
    slug: "icrc-president-statement-march-2024",
    title:
      "A statement on Gaza and Israel from the president of the ICRC — March 2024",
    publisher: "International Committee of the Red Cross",
    sourceType: "humanitarian",
    documentType: "Official statement",
    url: "https://www.icrc.org/en/document/statement-gaza-and-israel-president-icrc",
    publicationDate: "2024-03-09",
    accessedAt: "2026-07-24",
    language: "en",
    jurisdiction: "International — Geneva Conventions mandate",
    authors: ["Mirjana Spoljaric — President, ICRC"],
    official: true,
    status: "active",
    notes:
      "ICRC President Mirjana Spoljaric's March 2024 statement calling for: (1) a cessation of hostilities to allow meaningful humanitarian assistance, (2) unconditional release of all hostages, and (3) humane treatment of Palestinian detainees. The statement emphasises that IHL principles of distinction, proportionality, and precaution must be applied by all parties.",
    version: 1,
    lastCheckedAt: "2026-07-24",
    correctionUrl: "/corrections",
  },

  // ═══════════════════════════════════════════════════════════════════════
  // IPC — Integrated Food Security Phase Classification
  // ═══════════════════════════════════════════════════════════════════════
  {
    id: "ipc-frc-gaza-2024",
    slug: "ipc-frc-gaza-2024",
    title:
      "IPC Famine Review Committee — Gaza Strip Acute Food Insecurity Assessments (2024)",
    publisher: "Integrated Food Security Phase Classification (IPC)",
    sourceType: "un",
    documentType: "Famine Review Committee assessment",
    url: "https://www.ipcinfo.org/ipcinfo-website/frc/en/",
    publicationDate: "2024",
    accessedAt: "2026-07-24",
    language: "en",
    jurisdiction: "International — Multi-agency (FAO, WFP, WHO, UNICEF, NGOs)",
    authors: ["IPC Famine Review Committee"],
    official: true,
    status: "active",
    notes:
      "The IPC Famine Review Committee published three reviews of food insecurity in Gaza during 2024. The March 2024 review concluded that famine was projected and imminent in North Gaza and Gaza Governorates. The June 2024 review found that while available evidence did not indicate famine was currently occurring, the situation remained catastrophic with a high and sustained risk of famine. IPC reports are technical food-security assessments — they do not make legal determinations about causes.",
    version: 1,
    lastCheckedAt: "2026-07-24",
    correctionUrl: "/corrections",
  },
  {
    id: "ipc-frc-gaza-march-2024",
    slug: "ipc-frc-gaza-march-2024-report",
    title:
      "IPC Famine Review Committee — Gaza Strip Acute Food Insecurity February–July 2024 Special Brief",
    publisher: "Integrated Food Security Phase Classification (IPC)",
    sourceType: "un",
    documentType: "Special brief — Famine Review Committee",
    url: "https://www.ipcinfo.org/fileadmin/user_upload/ipcinfo/docs/IPC_Famine_Committee_Review_Report_Gaza_Strip_Acute_Food_Insecurity_Feb_July2024_Special_Brief.pdf",
    publicationDate: "2024-03-18",
    accessedAt: "2026-07-24",
    language: "en",
    jurisdiction: "International — Multi-agency",
    authors: ["IPC Famine Review Committee"],
    official: true,
    status: "active",
    notes:
      "The IPC FRC's March 2024 special brief concluded that famine was projected and imminent in North Gaza and Gaza Governorates (IPC Phase 5). 55% of households in northern governorates were experiencing Catastrophe (IPC Phase 5). The FRC stated that famine would occur unless there was an immediate cessation of hostilities and full humanitarian access.",
    version: 1,
    lastCheckedAt: "2026-07-24",
    correctionUrl: "/corrections",
  },

  // ═══════════════════════════════════════════════════════════════════════
  // EU — Arms export, Association Agreement, and Institutions
  // ═══════════════════════════════════════════════════════════════════════
  {
    id: "eu-common-position-2008-944",
    slug: "eu-common-position-arms-export",
    title:
      "Council Common Position 2008/944/CFSP of 8 December 2008 defining common rules governing control of exports of military technology and equipment",
    publisher: "Council of the European Union",
    sourceType: "government",
    documentType: "Common Position — legally binding instrument",
    url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32008E0944",
    publicationDate: "2008-12-08",
    accessedAt: "2026-07-24",
    language: "en",
    jurisdiction: "European Union — all Member States",
    authors: ["Council of the European Union"],
    official: true,
    status: "active",
    notes:
      "This legally binding Common Position defines eight criteria for arms export licensing by EU Member States, including: respect for international obligations (Criterion 1), human rights and IHL in the destination country (Criterion 2), internal situation/armed conflicts (Criterion 3), and regional peace and security (Criterion 4). Member States must deny exports where there is a clear risk of serious IHL violations. The Common Position was amended by Council Decision (CFSP) 2019/1560. Available on EUR-Lex.",
    version: 1,
    lastCheckedAt: "2026-07-24",
    correctionUrl: "/corrections",
  },
  {
    id: "eu-israel-association-agreement",
    slug: "eu-israel-association-agreement",
    title:
      "Euro-Mediterranean Agreement establishing an association between the European Communities and their Member States, of the one part, and the State of Israel, of the other part (2000)",
    publisher: "European Union — Official Journal",
    sourceType: "government",
    documentType: "International agreement — treaty",
    url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02000A0621(01)-20100101",
    publicationDate: "2000-06-21",
    accessedAt: "2026-07-24",
    language: "en",
    jurisdiction: "European Union — Israel",
    authors: ["European Communities and Member States", "State of Israel"],
    official: true,
    status: "active",
    notes:
      "The EU-Israel Association Agreement entered into force on 1 June 2000. Article 2 establishes that relations between the parties are based on respect for human rights and democratic principles as an essential element. The agreement governs trade, political dialogue, and cooperation. The consolidated version on EUR-Lex includes subsequent amendments.",
    version: 1,
    lastCheckedAt: "2026-07-24",
    correctionUrl: "/corrections",
  },
  {
    id: "arms-trade-treaty",
    slug: "arms-trade-treaty",
    title:
      "Arms Trade Treaty (ATT) — adopted 2 April 2013, entered into force 24 December 2014",
    publisher: "United Nations",
    sourceType: "government",
    documentType: "International treaty",
    url: "https://treaties.un.org/Pages/ViewDetails.aspx?clang=_en&chapter=26&mtdsg_no=XXVI-8&src=TREATY",
    publicationDate: "2013-04-02",
    accessedAt: "2026-07-24",
    language: "en",
    jurisdiction: "International — 118 States Parties (as of 2026)",
    authors: ["United Nations General Assembly"],
    official: true,
    status: "active",
    notes:
      "The Arms Trade Treaty establishes common international standards for regulating the international trade in conventional arms. Article 6 prohibits transfers that would violate UN Security Council measures or be used in genocide, crimes against humanity, or war crimes. Article 7 requires states to assess whether arms would undermine peace and security or could be used to commit serious IHL violations. The treaty text is available from the UN Office for Disarmament Affairs (disarmament.unoda.org) and the ATT Secretariat (thearmstradetreaty.org).",
    version: 1,
    lastCheckedAt: "2026-07-24",
    correctionUrl: "/corrections",
  },

  // ═══════════════════════════════════════════════════════════════════════
  // Belgian official sources
  // ═══════════════════════════════════════════════════════════════════════
  {
    id: "belgium-fps-foreign-affairs",
    slug: "belgium-fps-foreign-affairs",
    title:
      "Federal Public Service Foreign Affairs, Foreign Trade and Development Cooperation — Kingdom of Belgium",
    publisher: "Kingdom of Belgium — FPS Foreign Affairs",
    sourceType: "government",
    documentType: "Government ministry official website",
    url: "https://diplomatie.belgium.be/",
    accessedAt: "2026-07-24",
    language: "en",
    jurisdiction: "Belgium — Federal",
    authors: ["Belgian Federal Public Service Foreign Affairs"],
    official: true,
    status: "active",
    notes:
      "Official website of Belgium's Federal Public Service Foreign Affairs. Publishes official government positions, policy documents, press releases, and diplomatic statements. This is the primary source for Belgian foreign policy positions including those related to Gaza, Palestine, and international accountability.",
    version: 1,
    lastCheckedAt: "2026-07-24",
    correctionUrl: "/corrections",
  },
  {
    id: "belgium-chamber",
    slug: "belgium-chamber-of-representatives",
    title: "Belgian Chamber of Representatives — Official website",
    publisher: "Kingdom of Belgium — Chamber of Representatives",
    sourceType: "government",
    documentType: "Parliamentary chamber official website",
    url: "https://www.dekamer.be/",
    accessedAt: "2026-07-24",
    language: "nl",
    jurisdiction: "Belgium — Federal",
    authors: ["Belgian Chamber of Representatives"],
    official: true,
    status: "active",
    notes:
      "Official website of the Belgian Chamber of Representatives. Publishes parliamentary questions, committee reports, plenary records, and legislative documents. The primary source for Belgian federal parliamentary scrutiny of arms exports, foreign policy, and government positions on international accountability.",
    version: 1,
    lastCheckedAt: "2026-07-24",
    correctionUrl: "/corrections",
  },
  {
    id: "belgium-senate",
    slug: "belgium-senate",
    title: "Belgian Senate — Official website",
    publisher: "Kingdom of Belgium — Senate",
    sourceType: "government",
    documentType: "Parliamentary chamber official website",
    url: "https://www.senate.be/",
    accessedAt: "2026-07-24",
    language: "nl",
    jurisdiction: "Belgium — Federal",
    authors: ["Belgian Senate"],
    official: true,
    status: "active",
    notes:
      "Official website of the Belgian Senate. Publishes legislative documents, information reports, and parliamentary records. Relevant for tracking Belgian federal positions on international law, human rights, and accountability.",
    version: 1,
    lastCheckedAt: "2026-07-24",
    correctionUrl: "/corrections",
  },

  // ═══════════════════════════════════════════════════════════════════════
  // EU Institutions
  // ═══════════════════════════════════════════════════════════════════════
  {
    id: "eu-council",
    slug: "european-council-and-council",
    title:
      "European Council and Council of the European Union — Official website",
    publisher: "Council of the European Union",
    sourceType: "government",
    documentType: "Institutional official website",
    url: "https://www.consilium.europa.eu/",
    accessedAt: "2026-07-24",
    language: "en",
    jurisdiction: "European Union — all Member States",
    authors: ["Council of the European Union"],
    official: true,
    status: "active",
    notes:
      "Official website of the European Council and the Council of the European Union. Publishes Council conclusions, decisions, Common Positions (including on arms export), and Foreign Affairs Council outcomes. Relevant for tracking EU-level policy on the Middle East, accountability, and restrictive measures.",
    version: 1,
    lastCheckedAt: "2026-07-24",
    correctionUrl: "/corrections",
  },
  {
    id: "eu-commission",
    slug: "european-commission",
    title: "European Commission — Official website",
    publisher: "European Commission",
    sourceType: "government",
    documentType: "Institutional official website",
    url: "https://commission.europa.eu/",
    accessedAt: "2026-07-24",
    language: "en",
    jurisdiction: "European Union — all Member States",
    authors: ["European Commission"],
    official: true,
    status: "active",
    notes:
      "Official website of the European Commission. Publishes EU humanitarian aid announcements, trade policy decisions, association agreement implementation reports, and enlargement/neighbourhood policy documents. Relevant for tracking EU-level humanitarian funding and trade-related measures.",
    version: 1,
    lastCheckedAt: "2026-07-24",
    correctionUrl: "/corrections",
  },
  {
    id: "eu-parliament",
    slug: "european-parliament",
    title: "European Parliament — Official website",
    publisher: "European Parliament",
    sourceType: "government",
    documentType: "Institutional official website",
    url: "https://www.europarl.europa.eu/",
    accessedAt: "2026-07-24",
    language: "en",
    jurisdiction: "European Union — directly elected body",
    authors: ["European Parliament"],
    official: true,
    status: "active",
    notes:
      "Official website of the European Parliament. Publishes resolutions, committee reports, parliamentary questions, and plenary debates. Relevant for tracking EP resolutions on the Middle East, human rights, arms export control, and humanitarian access.",
    version: 1,
    lastCheckedAt: "2026-07-24",
    correctionUrl: "/corrections",
  },
  {
    id: "eu-eeas",
    slug: "european-external-action-service",
    title: "European External Action Service (EEAS) — Official website",
    publisher: "European External Action Service",
    sourceType: "government",
    documentType: "Institutional official website",
    url: "https://www.eeas.europa.eu/",
    accessedAt: "2026-07-24",
    language: "en",
    jurisdiction: "European Union — external action",
    authors: ["European External Action Service"],
    official: true,
    status: "active",
    notes:
      "Official website of the EEAS, the EU's diplomatic service. Publishes official statements by the High Representative, EU positions on international issues, and diplomatic engagement records. Relevant for tracking EU foreign policy on the Middle East Peace Process, the two-state solution, and EU-Israel relations.",
    version: 1,
    lastCheckedAt: "2026-07-24",
    correctionUrl: "/corrections",
  },

  // ═══════════════════════════════════════════════════════════════════════
  // Human-rights organisation reports
  // ═══════════════════════════════════════════════════════════════════════
  {
    id: "amnesty-opt-2024",
    slug: "amnesty-international-israel-opt",
    title:
      "Amnesty International — Israel and Occupied Palestinian Territory: Research and reports",
    publisher: "Amnesty International",
    sourceType: "ngo",
    documentType: "Research and reporting hub",
    url: "https://www.amnesty.org/en/location/middle-east-and-north-africa/israel-and-occupied-palestinian-territories/",
    accessedAt: "2026-07-24",
    language: "en",
    jurisdiction: "International — NGO research",
    authors: ["Amnesty International"],
    official: false,
    status: "active",
    notes:
      "Amnesty International's research hub for Israel and the Occupied Palestinian Territory. Publishes detailed reports on international humanitarian law compliance, civilian harm documentation, arms transfers, and human-rights conditions. Organisational findings are distinct from judicial determinations.",
    version: 1,
    lastCheckedAt: "2026-07-24",
    correctionUrl: "/corrections",
  },
  {
    id: "hrw-israel-palestine",
    slug: "hrw-israel-palestine",
    title:
      "Human Rights Watch — Israel/Palestine: Research, reports, and documentation",
    publisher: "Human Rights Watch",
    sourceType: "ngo",
    documentType: "Research and documentation hub",
    url: "https://www.hrw.org/middle-east/north-africa/israel/palestine",
    accessedAt: "2026-07-24",
    language: "en",
    jurisdiction: "International — NGO research",
    authors: ["Human Rights Watch"],
    official: false,
    status: "active",
    notes:
      "Human Rights Watch's research hub for Israel and Palestine. Publishes detailed documentation on civilian harm, weapons use, compliance with international humanitarian law, and human-rights conditions. Organisational findings are distinct from judicial determinations.",
    version: 1,
    lastCheckedAt: "2026-07-24",
    correctionUrl: "/corrections",
  },

  // ═══════════════════════════════════════════════════════════════════════
  // OSINT / documentation organisations
  // ═══════════════════════════════════════════════════════════════════════
  {
    id: "airwars-gaza",
    slug: "airwars-gaza-monitoring",
    title:
      "Airwars — Gaza civilian harm monitoring: Transparent documentation and open-source methodology",
    publisher: "Airwars",
    sourceType: "osint",
    documentType: "Civilian-harm monitoring dataset and methodology",
    url: "https://airwars.org/conflict/israel-and-gaza-2023/",
    accessedAt: "2026-07-24",
    language: "en",
    jurisdiction: "International — OSINT monitoring",
    authors: ["Airwars"],
    official: false,
    status: "active",
    notes:
      "Airwars is a UK-based civilian-harm monitoring organisation that systematically tracks, assesses, and archives civilian-harm claims from the Gaza conflict. All data and methodology are published openly and transparently. Airwars does not rely on classified or non-public information. This work is based on open-source intelligence methods.",
    version: 1,
    lastCheckedAt: "2026-07-24",
    correctionUrl: "/corrections",
  },

  // ═══════════════════════════════════════════════════════════════════════
  // Organization official websites (used as self-referential sources)
  // ═══════════════════════════════════════════════════════════════════════
  {
    id: "org-unrwa",
    slug: "source-unrwa-official",
    title: "UNRWA — Official website of the United Nations Relief and Works Agency",
    publisher: "UNRWA",
    sourceType: "un",
    documentType: "Organisation official website",
    url: "https://www.unrwa.org/",
    accessedAt: "2026-07-24",
    language: "en",
    jurisdiction: "International — United Nations",
    authors: ["UNRWA"],
    official: true,
    status: "active",
    notes:
      "Official website of UNRWA. Confirms the organisation's name, mandate, services, and operational areas. UNRWA was established in 1949 and provides education, healthcare, relief, and social services to Palestine refugees across five fields of operation.",
    version: 1,
    lastCheckedAt: "2026-07-24",
    correctionUrl: "/corrections",
  },
  {
    id: "org-ocha",
    slug: "source-ocha-official",
    title: "UN OCHA — Official website (global)",
    publisher: "UN OCHA",
    sourceType: "un",
    documentType: "Organisation official website",
    url: "https://www.unocha.org/",
    accessedAt: "2026-07-24",
    language: "en",
    jurisdiction: "International — United Nations",
    authors: ["UN Office for the Coordination of Humanitarian Affairs"],
    official: true,
    status: "active",
    notes:
      "Official global website of UN OCHA. Confirms the organisation's mandate, structure, and coordination role. UN OCHA coordinates humanitarian response, publishes situation reports, and manages humanitarian funding mechanisms.",
    version: 1,
    lastCheckedAt: "2026-07-24",
    correctionUrl: "/corrections",
  },
  {
    id: "org-wfp",
    slug: "source-wfp-official",
    title: "World Food Programme — Official website",
    publisher: "World Food Programme",
    sourceType: "un",
    documentType: "Organisation official website",
    url: "https://www.wfp.org/",
    accessedAt: "2026-07-24",
    language: "en",
    jurisdiction: "International — United Nations",
    authors: ["World Food Programme"],
    official: true,
    status: "active",
    notes:
      "Official website of the WFP. Confirms the organisation's name, mandate, and services. WFP is the UN's food-assistance branch and the world's largest humanitarian organization addressing hunger.",
    version: 1,
    lastCheckedAt: "2026-07-24",
    correctionUrl: "/corrections",
  },
  {
    id: "org-icrc",
    slug: "source-icrc-official",
    title: "ICRC — Official website of the International Committee of the Red Cross",
    publisher: "International Committee of the Red Cross",
    sourceType: "humanitarian",
    documentType: "Organisation official website",
    url: "https://www.icrc.org/",
    accessedAt: "2026-07-24",
    language: "en",
    jurisdiction: "International — Geneva Conventions mandate",
    authors: ["International Committee of the Red Cross"],
    official: true,
    status: "active",
    notes:
      "Official website of the ICRC. Confirms the organisation's name, mandate, and services. The ICRC is an independent, neutral organisation operating under the Geneva Conventions.",
    version: 1,
    lastCheckedAt: "2026-07-24",
    correctionUrl: "/corrections",
  },
  {
    id: "org-prcs",
    slug: "source-prcs-official",
    title: "Palestine Red Crescent Society — Official website",
    publisher: "Palestine Red Crescent Society",
    sourceType: "humanitarian",
    documentType: "Organisation official website",
    url: "https://www.palestinercs.org/",
    accessedAt: "2026-07-24",
    language: "en",
    jurisdiction: "Palestine — National Society, Red Cross / Red Crescent Movement",
    authors: ["Palestine Red Crescent Society"],
    official: true,
    status: "active",
    notes:
      "Official website of the PRCS. Confirms the organisation's name, mandate, and services. PRCS is the national Red Crescent society for Palestine and part of the International Red Cross and Red Crescent Movement.",
    version: 1,
    lastCheckedAt: "2026-07-24",
    correctionUrl: "/corrections",
  },
  {
    id: "org-msf",
    slug: "source-msf-official",
    title: "Médecins Sans Frontières (MSF) — Official website",
    publisher: "Médecins Sans Frontières",
    sourceType: "humanitarian",
    documentType: "Organisation official website",
    url: "https://www.msf.org/",
    accessedAt: "2026-07-24",
    language: "en",
    jurisdiction: "International — Independent medical humanitarian organisation",
    authors: ["Médecins Sans Frontières"],
    official: false,
    status: "active",
    notes:
      "Official website of MSF. Confirms the organisation's name, mandate, and services. MSF is an independent international medical humanitarian organisation delivering emergency medical care in conflict zones.",
    version: 1,
    lastCheckedAt: "2026-07-24",
    correctionUrl: "/corrections",
  },
  {
    id: "org-map",
    slug: "source-map-official",
    title: "Medical Aid for Palestinians (MAP) — Official website",
    publisher: "Medical Aid for Palestinians",
    sourceType: "humanitarian",
    documentType: "Organisation official website",
    url: "https://www.map.org.uk/",
    accessedAt: "2026-07-24",
    language: "en",
    jurisdiction: "United Kingdom — Registered charity",
    authors: ["Medical Aid for Palestinians"],
    official: false,
    status: "active",
    notes:
      "Official website of MAP. Confirms the organisation's name, mandate, and services. MAP is a UK-based charity working for the health and dignity of Palestinians living under occupation and as refugees.",
    version: 1,
    lastCheckedAt: "2026-07-24",
    correctionUrl: "/corrections",
  },
  {
    id: "org-amnesty",
    slug: "source-amnesty-official",
    title: "Amnesty International — Official website",
    publisher: "Amnesty International",
    sourceType: "ngo",
    documentType: "Organisation official website",
    url: "https://www.amnesty.org/",
    accessedAt: "2026-07-24",
    language: "en",
    jurisdiction: "International — NGO",
    authors: ["Amnesty International"],
    official: false,
    status: "active",
    notes:
      "Official website of Amnesty International. Confirms the organisation's name, mandate, and services. Amnesty International is a global human-rights movement that researches, documents, and campaigns against human-rights abuses.",
    version: 1,
    lastCheckedAt: "2026-07-24",
    correctionUrl: "/corrections",
  },
  {
    id: "org-hrw",
    slug: "source-hrw-official",
    title: "Human Rights Watch — Official website",
    publisher: "Human Rights Watch",
    sourceType: "ngo",
    documentType: "Organisation official website",
    url: "https://www.hrw.org/",
    accessedAt: "2026-07-24",
    language: "en",
    jurisdiction: "International — NGO",
    authors: ["Human Rights Watch"],
    official: false,
    status: "active",
    notes:
      "Official website of Human Rights Watch. Confirms the organisation's name, mandate, and services. HRW is an independent international human-rights organisation investigating and reporting on abuses worldwide.",
    version: 1,
    lastCheckedAt: "2026-07-24",
    correctionUrl: "/corrections",
  },
  {
    id: "org-btselem",
    slug: "source-btselem-official",
    title: "B'Tselem — Official website",
    publisher: "B'Tselem — The Israeli Information Center for Human Rights in the Occupied Territories",
    sourceType: "ngo",
    documentType: "Organisation official website",
    url: "https://www.btselem.org/",
    accessedAt: "2026-07-24",
    language: "en",
    jurisdiction: "Israel — Human-rights documentation organisation",
    authors: ["B'Tselem"],
    official: false,
    status: "active",
    notes:
      "Official website of B'Tselem. Confirms the organisation's name, mandate, and services. B'Tselem is an Israeli human-rights organisation documenting human-rights violations in the occupied territories.",
    version: 1,
    lastCheckedAt: "2026-07-24",
    correctionUrl: "/corrections",
  },
  {
    id: "org-airwars",
    slug: "source-airwars-official",
    title: "Airwars — Official website",
    publisher: "Airwars",
    sourceType: "osint",
    documentType: "Organisation official website",
    url: "https://airwars.org/",
    accessedAt: "2026-07-24",
    language: "en",
    jurisdiction: "United Kingdom — OSINT and civilian-harm monitoring organisation",
    authors: ["Airwars"],
    official: false,
    status: "active",
    notes:
      "Official website of Airwars. Confirms the organisation's name, mandate, and methodology. Airwars is a UK-based civilian-harm monitoring organisation maintaining transparent, open-source methodology and publishing all data.",
    version: 1,
    lastCheckedAt: "2026-07-24",
    correctionUrl: "/corrections",
  },
  {
    id: "org-cpj",
    slug: "source-cpj-official",
    title: "Committee to Protect Journalists — Official website",
    publisher: "Committee to Protect Journalists",
    sourceType: "ngo",
    documentType: "Organisation official website",
    url: "https://cpj.org/",
    accessedAt: "2026-07-24",
    language: "en",
    jurisdiction: "International — Press freedom organisation",
    authors: ["Committee to Protect Journalists"],
    official: false,
    status: "active",
    notes:
      "Official website of CPJ. Confirms the organisation's name, mandate, and services. CPJ is an independent non-profit organisation promoting press freedom and documenting journalist casualties worldwide.",
    version: 1,
    lastCheckedAt: "2026-07-24",
    correctionUrl: "/corrections",
  },
  {
    id: "org-forensic-architecture",
    slug: "source-forensic-architecture-official",
    title: "Forensic Architecture — Official website",
    publisher: "Forensic Architecture — Goldsmiths, University of London",
    sourceType: "academic",
    documentType: "Organisation official website",
    url: "https://forensic-architecture.org/",
    accessedAt: "2026-07-24",
    language: "en",
    jurisdiction: "United Kingdom — Academic research group",
    authors: ["Forensic Architecture"],
    official: false,
    status: "active",
    notes:
      "Official website of Forensic Architecture. Confirms the organisation's name, mandate, and methodology. Forensic Architecture is a research group based at Goldsmiths, University of London, using architectural and spatial analysis to investigate human-rights violations.",
    version: 1,
    lastCheckedAt: "2026-07-24",
    correctionUrl: "/corrections",
  },
];

/** Convenience: source lookup by id. */
export function getSourceById(id: string): SourceRecord | undefined {
  return sources.find((s) => s.id === id);
}

/** Convenience: source lookup by slug. */
export function getSourceBySlug(slug: string): SourceRecord | undefined {
  return sources.find((s) => s.slug === slug);
}

/** All unique source types present, for filter controls. */
export function getAvailableSourceTypes(): string[] {
  const types = new Set(sources.map((s) => s.sourceType));
  return Array.from(types).sort();
}

/** All unique jurisdictions present, for filter controls. */
export function getAvailableJurisdictions(): string[] {
  const jurisdictions = new Set(
    sources.map((s) => s.jurisdiction).filter(Boolean) as string[],
  );
  return Array.from(jurisdictions).sort();
}

/** All unique document types present, for filter controls. */
export function getAvailableDocumentTypes(): string[] {
  const types = new Set(
    sources.map((s) => s.documentType).filter(Boolean) as string[],
  );
  return Array.from(types).sort();
}
