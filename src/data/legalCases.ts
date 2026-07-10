import type { LegalStatus, ReviewMetadata } from "../types/content";

export interface LegalCaseEntry {
  id: string;
  title: string;
  institution: string;
  summary: string;
  legalStatuses: LegalStatus[];
  sourceIds: string[];
  proceduralNote?: string;
  review: ReviewMetadata;
}

export const legalCases: LegalCaseEntry[] = [
  {
    id: "icj-genocide-convention",
    title: "Application of the Genocide Convention (South Africa v. Israel)",
    institution: "International Court of Justice (ICJ)",
    summary:
      "South Africa instituted proceedings against Israel alleging violations of the Genocide Convention. The ICJ issued provisional measures and has continued to receive further filings and interventions from multiple states.",
    legalStatuses: [
      "court_proceeding_active",
      "provisional_measures_issued",
    ],
    sourceIds: ["icj-2024-01-26", "icj-2024-05-24"],
    proceduralNote:
      "Provisional measures are binding orders issued before a final judgment. They do not constitute a final ruling on the merits of the case.",
    review: {
      status: "static_preview",
      methodologyUrl: "/methodology",
      sourceIds: ["icj-2024-01-26", "icj-2024-05-24"],
      correctionUrl: "/corrections",
    },
  },
  {
    id: "icc-palestine-situation",
    title: "Situation in the State of Palestine",
    institution: "International Criminal Court (ICC)",
    summary:
      "The ICC Office of the Prosecutor opened an investigation into the Situation in the State of Palestine. Arrest warrants have been publicly issued. The proceedings address alleged crimes within the Court's jurisdiction.",
    legalStatuses: ["arrest_warrant_issued"],
    sourceIds: ["icc-palestine-2024"],
    proceduralNote:
      "The ICC prosecutes individuals, not states. Arrest warrants are issued by Pre-Trial Chambers and are subject to judicial review. All persons are presumed innocent until proven guilty.",
    review: {
      status: "static_preview",
      methodologyUrl: "/methodology",
      sourceIds: ["icc-palestine-2024"],
      correctionUrl: "/corrections",
    },
  },
  {
    id: "un-coi-opt",
    title:
      "UN Commission of Inquiry on the Occupied Palestinian Territory, including East Jerusalem, and Israel",
    institution: "United Nations Human Rights Council",
    summary:
      "The Independent International Commission of Inquiry has documented findings related to international humanitarian law, human rights law, and alleged violations by all parties. Reports are publicly available through OHCHR.",
    legalStatuses: ["un_finding"],
    sourceIds: ["un-coi-2024"],
    proceduralNote:
      "UN Commissions of Inquiry are fact-finding bodies. Their findings inform international accountability processes but are not judicial rulings.",
    review: {
      status: "static_preview",
      methodologyUrl: "/methodology",
      sourceIds: ["un-coi-2024"],
      correctionUrl: "/corrections",
    },
  },
];
