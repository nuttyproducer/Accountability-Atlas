import type { LegalTimelineEvent } from "../types/content";

/**
 * Procedural timeline events for legal cases.
 *
 * Every timeline event is source-linked. Event types use a controlled
 * procedural vocabulary. Summaries carefully distinguish allegations,
 * applications, provisional measures, warrants, findings, and judgments.
 *
 * Events are ordered chronologically per case. Source IDs reference
 * records in src/data/sources.ts.
 */
export const legalTimelineEvents: LegalTimelineEvent[] = [
  // ── ICJ Genocide Convention (South Africa v. Israel) ──────────────────────
  {
    id: "icj-filing-2023-12-29",
    legalCaseId: "icj-genocide-convention",
    date: "2023-12-29",
    eventType: "filing",
    title: "South Africa files application instituting proceedings",
    proceduralSummary:
      "South Africa filed an application instituting proceedings against Israel before the International Court of Justice, alleging violations of the Convention on the Prevention and Punishment of the Crime of Genocide. The application included a request for provisional measures.",
    sourceIds: ["icj-2024-01-26"],
    contentStatus: "review_pending",
    sourceQuality: 5,
    version: 1,
    lastReviewedAt: "2026-07-13",
    reviewedByRole: "Static beta — editorial review pending",
    correctionUrl: "/corrections",
  },
  {
    id: "icj-hearing-2024-01-11",
    legalCaseId: "icj-genocide-convention",
    date: "2024-01-11",
    eventType: "hearing",
    title: "Public hearings on provisional measures request",
    proceduralSummary:
      "The ICJ held public hearings on South Africa's request for the indication of provisional measures. Both South Africa and Israel presented oral arguments. The hearings addressed questions of prima facie jurisdiction and the criteria for provisional measures under the Genocide Convention.",
    sourceIds: ["icj-2024-01-26"],
    contentStatus: "review_pending",
    sourceQuality: 5,
    version: 1,
    lastReviewedAt: "2026-07-13",
    reviewedByRole: "Static beta — editorial review pending",
    correctionUrl: "/corrections",
  },
  {
    id: "icj-provisional-measures-2024-01-26",
    legalCaseId: "icj-genocide-convention",
    date: "2024-01-26",
    eventType: "provisional_measure",
    title: "ICJ indicates provisional measures",
    proceduralSummary:
      "The ICJ indicated provisional measures, finding that the court had prima facie jurisdiction and that the conditions for provisional measures were met. The court ordered Israel to take measures to prevent acts under Article II of the Genocide Convention, prevent destruction of evidence, and submit a report within one month. These are binding provisional measures — they do not constitute a final judgment on whether genocide has occurred.",
    sourceIds: ["icj-2024-01-26"],
    contentStatus: "review_pending",
    sourceQuality: 5,
    version: 1,
    lastReviewedAt: "2026-07-13",
    reviewedByRole: "Static beta — editorial review pending",
    correctionUrl: "/corrections",
  },
  {
    id: "icj-intervention-2024",
    legalCaseId: "icj-genocide-convention",
    date: "2024",
    eventType: "intervention",
    title: "Multiple states file declarations of intervention",
    proceduralSummary:
      "Several states filed declarations of intervention in the proceedings under Article 63 of the Statute of the Court. States intervening under Article 63 accept the interpretation of the Genocide Convention that will be given in the Court's judgment. The ICJ fixed time limits for written observations from the parties on the admissibility of the declarations.",
    sourceIds: ["icj-2024-05-24"],
    contentStatus: "review_pending",
    sourceQuality: 5,
    version: 1,
    lastReviewedAt: "2026-07-13",
    reviewedByRole: "Static beta — editorial review pending",
    correctionUrl: "/corrections",
  },
  {
    id: "icj-additional-measures-2024-05-24",
    legalCaseId: "icj-genocide-convention",
    date: "2024-05-24",
    eventType: "provisional_measure",
    title: "ICJ indicates additional provisional measures",
    proceduralSummary:
      "The ICJ indicated additional provisional measures in response to a further request from South Africa, specifically addressing the military offensive in Rafah. The court ordered Israel to immediately halt its military offensive in Rafah, keep the Rafah crossing open for humanitarian aid, and allow access to UN-mandated investigative bodies. These are binding provisional measures — they do not constitute a final judgment.",
    sourceIds: ["icj-2024-05-24"],
    contentStatus: "review_pending",
    sourceQuality: 5,
    version: 1,
    lastReviewedAt: "2026-07-13",
    reviewedByRole: "Static beta — editorial review pending",
    correctionUrl: "/corrections",
  },

  // ── ICC Palestine Situation ────────────────────────────────────────────────
  {
    id: "icc-referral-2015-01-01",
    legalCaseId: "icc-palestine-situation",
    date: "2015-01-01",
    eventType: "filing",
    title: "State of Palestine accedes to the Rome Statute and lodges Article 12(3) declaration",
    proceduralSummary:
      "The State of Palestine lodged a declaration under Article 12(3) of the Rome Statute accepting the jurisdiction of the ICC over alleged crimes committed in the occupied Palestinian territory since 13 June 2014. Palestine formally acceded to the Rome Statute on 2 January 2015.",
    sourceIds: ["icc-palestine-2024"],
    contentStatus: "review_pending",
    sourceQuality: 5,
    version: 1,
    lastReviewedAt: "2026-07-13",
    reviewedByRole: "Static beta — editorial review pending",
    correctionUrl: "/corrections",
  },
  {
    id: "icc-preliminary-2015-01-16",
    legalCaseId: "icc-palestine-situation",
    date: "2015-01-16",
    eventType: "investigation_opened",
    title: "ICC Prosecutor opens preliminary examination",
    proceduralSummary:
      "The ICC Office of the Prosecutor opened a preliminary examination into the Situation in Palestine to determine whether the criteria for opening an investigation under the Rome Statute were met. A preliminary examination is a pre-investigation assessment — it is not a formal investigation.",
    sourceIds: ["icc-palestine-2024"],
    contentStatus: "review_pending",
    sourceQuality: 5,
    version: 1,
    lastReviewedAt: "2026-07-13",
    reviewedByRole: "Static beta — editorial review pending",
    correctionUrl: "/corrections",
  },
  {
    id: "icc-jurisdiction-2021-02-05",
    legalCaseId: "icc-palestine-situation",
    date: "2021-02-05",
    eventType: "jurisdiction_decision",
    title: "Pre-Trial Chamber I rules on territorial jurisdiction",
    proceduralSummary:
      "ICC Pre-Trial Chamber I decided, by majority, that the Court's territorial jurisdiction in the Situation in the State of Palestine extends to Gaza, the West Bank, and East Jerusalem — territories occupied by Israel since 1967. This ruling determined the geographic scope of the Court's jurisdiction over the situation, not the merits of any specific case.",
    sourceIds: ["icc-palestine-2024"],
    contentStatus: "review_pending",
    sourceQuality: 5,
    version: 1,
    lastReviewedAt: "2026-07-13",
    reviewedByRole: "Static beta — editorial review pending",
    correctionUrl: "/corrections",
  },
  {
    id: "icc-investigation-2021-03-03",
    legalCaseId: "icc-palestine-situation",
    date: "2021-03-03",
    eventType: "investigation_opened",
    title: "ICC Prosecutor announces formal investigation",
    proceduralSummary:
      "The ICC Office of the Prosecutor announced the opening of a formal investigation into the Situation in the State of Palestine. The investigation covers alleged crimes within the jurisdiction of the Court committed since 13 June 2014. A formal investigation follows a preliminary examination and proceeds under the Rome Statute framework — it does not predetermine the outcome.",
    sourceIds: ["icc-palestine-2024"],
    contentStatus: "review_pending",
    sourceQuality: 5,
    version: 1,
    lastReviewedAt: "2026-07-13",
    reviewedByRole: "Static beta — editorial review pending",
    correctionUrl: "/corrections",
  },
  {
    id: "icc-warrant-application-2024-05-20",
    legalCaseId: "icc-palestine-situation",
    date: "2024-05-20",
    eventType: "arrest_warrant_application",
    title: "ICC Prosecutor announces applications for arrest warrants",
    proceduralSummary:
      "The ICC Prosecutor announced applications for arrest warrants before Pre-Trial Chamber I related to the Situation in the State of Palestine. Warrant applications are requests submitted by the Prosecutor to a Pre-Trial Chamber — they are not judicial findings. The Pre-Trial Chamber must independently assess the evidence before deciding whether to issue warrants.",
    sourceIds: ["icc-palestine-2024"],
    contentStatus: "review_pending",
    sourceQuality: 5,
    version: 1,
    lastReviewedAt: "2026-07-13",
    reviewedByRole: "Static beta — editorial review pending",
    correctionUrl: "/corrections",
  },
  {
    id: "icc-warrants-issued-2024",
    legalCaseId: "icc-palestine-situation",
    date: "2024",
    eventType: "arrest_warrant_issued",
    title: "Pre-Trial Chamber I issues arrest warrants",
    proceduralSummary:
      "ICC Pre-Trial Chamber I issued arrest warrants in connection with the Situation in the State of Palestine. Arrest warrants are issued by Pre-Trial Chambers based on judicial assessment of the evidence presented by the Prosecutor. They are subject to judicial review processes. All persons subject to arrest warrants are presumed innocent until proven guilty before the Court.",
    sourceIds: ["icc-palestine-2024"],
    contentStatus: "review_pending",
    sourceQuality: 5,
    version: 1,
    lastReviewedAt: "2026-07-13",
    reviewedByRole: "Static beta — editorial review pending",
    correctionUrl: "/corrections",
  },

  // ── UN Commission of Inquiry on the OPT ────────────────────────────────────
  {
    id: "un-coi-established-2021-05-27",
    legalCaseId: "un-coi-opt",
    date: "2021-05-27",
    eventType: "official_report_update",
    title: "UN Human Rights Council establishes Commission of Inquiry",
    proceduralSummary:
      "The UN Human Rights Council established the Independent International Commission of Inquiry on the Occupied Palestinian Territory, including East Jerusalem, and Israel. The Commission's mandate includes investigating alleged violations of international humanitarian law and international human rights law by all parties. A Commission of Inquiry is a fact-finding body — its findings inform international accountability processes but are not judicial rulings.",
    sourceIds: ["un-coi-2024"],
    contentStatus: "review_pending",
    sourceQuality: 4,
    version: 1,
    lastReviewedAt: "2026-07-13",
    reviewedByRole: "Static beta — editorial review pending",
    correctionUrl: "/corrections",
  },
  {
    id: "un-coi-first-report-2022",
    legalCaseId: "un-coi-opt",
    date: "2022",
    eventType: "official_report_update",
    title: "Commission of Inquiry publishes first report",
    proceduralSummary:
      "The Commission of Inquiry published its first report to the UN Human Rights Council, addressing root causes, applicable legal frameworks, and initial findings. The report documented patterns of human rights and international humanitarian law concerns across the occupied Palestinian territory and Israel. COI reports are fact-finding outputs presented to the Human Rights Council — they are not judicial findings.",
    sourceIds: ["un-coi-2024"],
    contentStatus: "review_pending",
    sourceQuality: 4,
    version: 1,
    lastReviewedAt: "2026-07-13",
    reviewedByRole: "Static beta — editorial review pending",
    correctionUrl: "/corrections",
  },
  {
    id: "un-coi-detailed-report-2024",
    legalCaseId: "un-coi-opt",
    date: "2024",
    eventType: "official_report_update",
    title: "Commission of Inquiry publishes detailed report on all parties",
    proceduralSummary:
      "The Commission of Inquiry published a detailed report examining human-rights and international humanitarian law compliance by all parties. The report addressed conduct during military operations, treatment of civilians, and respect for legal frameworks applicable in the occupied Palestinian territory and Israel. COI reports present factual and legal analysis for consideration by the Human Rights Council and the international community — they inform but do not substitute for judicial proceedings.",
    sourceIds: ["un-coi-2024"],
    contentStatus: "review_pending",
    sourceQuality: 4,
    version: 1,
    lastReviewedAt: "2026-07-13",
    reviewedByRole: "Static beta — editorial review pending",
    correctionUrl: "/corrections",
  },
];

/**
 * Get all timeline events for a specific legal case, ordered by date.
 * Events with year-only dates sort after events with full dates in the same year.
 */
export function getTimelineEventsForCase(legalCaseId: string): LegalTimelineEvent[] {
  return legalTimelineEvents
    .filter((e) => e.legalCaseId === legalCaseId)
    .sort((a, b) => {
      // Year-only dates (e.g. "2024") sort after full dates
      const aFull = a.date.length === 10 ? a.date : `${a.date}-12-31`;
      const bFull = b.date.length === 10 ? b.date : `${b.date}-12-31`;
      return aFull.localeCompare(bFull);
    });
}
