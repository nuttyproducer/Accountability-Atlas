/**
 * Structured data for the Gaza Dossier page.
 *
 * Extracted from the page component to keep the component focused
 * on layout and rendering, with data testable independently.
 */

export const harmCategories = [
  {
    title: "Civilian Harm",
    description:
      "Documented patterns of civilian casualties, injuries, and harm to protected persons under international humanitarian law.",
    accent: "clay" as const,
  },
  {
    title: "Displacement",
    description:
      "Forced displacement, evacuation orders, and conditions preventing safe return, assessed against IHL prohibitions on forced transfer.",
    accent: "amber" as const,
  },
  {
    title: "Healthcare Access",
    description:
      "Attacks on healthcare facilities, medical personnel, and impediments to medical access — tracked against IHL special protections for medical services.",
    accent: "clay" as const,
  },
  {
    title: "Food & Water Access",
    description:
      "Access to food, clean water, and sanitation infrastructure. Includes the use of starvation as a method of warfare, which is prohibited under IHL.",
    accent: "amber" as const,
  },
  {
    title: "Infrastructure Damage",
    description:
      "Damage to civilian infrastructure including housing, schools, places of worship, and cultural property — assessed for proportionality and distinction.",
    accent: "blue" as const,
  },
  {
    title: "Humanitarian Access",
    description:
      "Obstruction of humanitarian relief operations, attacks on aid workers, and denial of access to civilian populations in need.",
    accent: "clay" as const,
  },
];

export const keyInstitutions = [
  {
    label: "United Nations bodies",
    title: "UN Agencies & Mechanisms",
    description:
      "OHCHR, OCHA, UNRWA, WFP, WHO, Human Rights Council, and Commissions of Inquiry — each with specific mandates relevant to documentation and humanitarian response. Listing does not imply partnership.",
  },
  {
    label: "Courts and tribunals",
    title: "International Courts",
    description:
      "International Court of Justice (ICJ) and International Criminal Court (ICC) — the principal judicial bodies addressing legal accountability for alleged international crimes.",
  },
  {
    label: "Humanitarian organizations",
    title: "Humanitarian Actors",
    description:
      "ICRC, IFRC, and national Red Cross/Red Crescent societies; major medical and relief organizations operating under humanitarian principles. Listing does not imply partnership or endorsement.",
  },
  {
    label: "Documentation groups",
    title: "Documentation & Research",
    description:
      "Human-rights organizations, investigative journalism groups, academic research centres, and OSINT collectives whose public reports may be referenced as sources after verification review.",
  },
];

export const policyPriorities = [
  {
    title: "Humanitarian Access",
    description:
      "Support unimpeded humanitarian access, protection of aid workers, and respect for humanitarian notification systems.",
    accent: "amber" as const,
  },
  {
    title: "Arms-Transfer Review",
    description:
      "Support lawful review of arms transfers where there is a clear risk of IHL violations, in line with the Arms Trade Treaty and EU Common Position.",
    accent: "clay" as const,
  },
  {
    title: "Diplomatic Pressure",
    description:
      "Support diplomatic engagement, restrictive measures, and multilateral accountability mechanisms through lawful, public channels.",
    accent: "blue" as const,
  },
  {
    title: "Legal Accountability",
    description:
      "Support ICC cooperation, universal jurisdiction cases, and domestic legal processes that advance accountability for international crimes.",
    accent: "clay" as const,
  },
];

export const sourceCategories = [
  {
    title: "Court & Legal Records",
    description:
      "ICJ orders and judgments, ICC filings and warrants, national court decisions, and tribunal records. These carry the highest evidentiary weight in the source hierarchy.",
  },
  {
    title: "UN & International Body Documents",
    description:
      "Security Council resolutions, General Assembly records, Human Rights Council reports, Commission of Inquiry findings, and OCHA humanitarian updates.",
  },
  {
    title: "Humanitarian Organization Reports",
    description:
      "Public reporting from ICRC, UNRWA, WHO, WFP, MSF, and other established humanitarian organizations operating under international mandates.",
  },
  {
    title: "Human-Rights Organization Findings",
    description:
      "Published reports and legal analyses from established human-rights organizations. Reviewed for methodology, sourcing, and consistency before platform use.",
  },
  {
    title: "Investigative Journalism",
    description:
      "Open-source investigations, forensic reporting, and verified journalistic accounts from recognized media and investigative outlets.",
  },
  {
    title: "Academic Research",
    description:
      "Peer-reviewed studies, legal scholarship, and research centre publications relevant to international law, conflict studies, and accountability mechanisms.",
  },
];
