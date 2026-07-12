import type { LegalStatus, VerificationLevel, ContentStatus } from "../types/content";

export interface LegalCaseEntry {
  id: string;
  slug: string;
  title: string;
  institution: string;
  jurisdiction: string;
  parties: string[];
  summary: string;
  legalStatuses: LegalStatus[];
  openedDate?: string;
  latestVerifiedUpdateDate?: string;
  nextMilestone?: string;
  legalBasisOrAllegedCrimes?: string;
  actionRelevance?: string;
  sourceIds: string[];
  sourceQuality: VerificationLevel;
  contentStatus: ContentStatus;
  lastReviewedAt?: string;
  reviewedByRole?: string;
  version: number;
  proceduralNote?: string;
}

export const legalCases: LegalCaseEntry[] = [
  {
    id: "icj-genocide-convention",
    slug: "icj-genocide-convention",
    title: "Application of the Genocide Convention (South Africa v. Israel)",
    institution: "International Court of Justice (ICJ)",
    jurisdiction: "International — United Nations principal judicial organ",
    parties: ["South Africa", "Israel"],
    summary:
      "South Africa instituted proceedings against Israel alleging violations of the Genocide Convention. The ICJ issued provisional measures and has continued to receive further filings and interventions from multiple states.",
    legalStatuses: [
      "court_proceeding_active",
      "provisional_measures_issued",
    ],
    openedDate: "2023-12-29",
    latestVerifiedUpdateDate: "2024-05-24",
    nextMilestone: "Further provisional measures or merits hearings pending",
    legalBasisOrAllegedCrimes:
      "Alleged violations of the Convention on the Prevention and Punishment of the Crime of Genocide (1948)",
    actionRelevance:
      "Provisional measures are binding under international law. Member states may submit interventions or make declarations of intervention.",
    sourceIds: ["icj-2024-01-26", "icj-2024-05-24"],
    sourceQuality: 5,
    contentStatus: "review_pending",
    lastReviewedAt: "2026-07-10",
    reviewedByRole: "Static beta — editorial review pending",
    version: 1,
    proceduralNote:
      "Provisional measures are binding orders issued before a final judgment. They do not constitute a final ruling on the merits of the case.",
  },
  {
    id: "icc-palestine-situation",
    slug: "icc-palestine-situation",
    title: "Situation in the State of Palestine",
    institution: "International Criminal Court (ICC)",
    jurisdiction: "International — Rome Statute, State of Palestine referral",
    parties: ["Office of the Prosecutor", "State of Palestine"],
    summary:
      "The ICC Office of the Prosecutor opened an investigation into the Situation in the State of Palestine. Arrest warrants have been publicly issued. The proceedings address alleged crimes within the Court's jurisdiction.",
    legalStatuses: ["arrest_warrant_issued"],
    openedDate: "2021-03-03",
    latestVerifiedUpdateDate: "2024",
    nextMilestone: "Further judicial proceedings pending",
    legalBasisOrAllegedCrimes:
      "Alleged war crimes and crimes against humanity within the Court's jurisdiction under the Rome Statute",
    actionRelevance:
      "ICC arrest warrants are binding on all States Parties to the Rome Statute. States Parties have a duty to cooperate with the Court.",
    sourceIds: ["icc-palestine-2024"],
    sourceQuality: 5,
    contentStatus: "review_pending",
    lastReviewedAt: "2026-07-10",
    reviewedByRole: "Static beta — editorial review pending",
    version: 1,
    proceduralNote:
      "The ICC prosecutes individuals, not states. Arrest warrants are issued by Pre-Trial Chambers and are subject to judicial review. All persons are presumed innocent until proven guilty.",
  },
  {
    id: "un-coi-opt",
    slug: "un-coi-opt",
    title:
      "UN Commission of Inquiry on the Occupied Palestinian Territory, including East Jerusalem, and Israel",
    institution: "United Nations Human Rights Council",
    jurisdiction: "International — United Nations Human Rights Council mandate",
    parties: [
      "Independent International Commission of Inquiry",
      "UN Human Rights Council",
    ],
    summary:
      "The Independent International Commission of Inquiry has documented findings related to international humanitarian law, human rights law, and alleged violations by all parties. Reports are publicly available through OHCHR.",
    legalStatuses: ["un_finding"],
    openedDate: "2021-05-27",
    latestVerifiedUpdateDate: "2024",
    nextMilestone: "Periodic reporting to UN Human Rights Council",
    legalBasisOrAllegedCrimes:
      "Mandate to investigate alleged violations of international humanitarian law and international human rights law",
    actionRelevance:
      "UN COI findings inform international accountability processes and may be referenced in court proceedings or UN resolutions.",
    sourceIds: ["un-coi-2024"],
    sourceQuality: 4,
    contentStatus: "review_pending",
    lastReviewedAt: "2026-07-10",
    reviewedByRole: "Static beta — editorial review pending",
    version: 1,
    proceduralNote:
      "UN Commissions of Inquiry are fact-finding bodies. Their findings inform international accountability processes but are not judicial rulings.",
  },
];
