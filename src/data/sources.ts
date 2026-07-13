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
  {
    id: "icj-2024-01-26",
    slug: "icj-provisional-measures-jan-2024",
    title:
      "Application of the Convention on the Prevention and Punishment of the Crime of Genocide in the Gaza Strip (South Africa v. Israel) — Order of 26 January 2024",
    publisher: "International Court of Justice",
    sourceType: "court",
    documentType: "Provisional measures order",
    url: "https://www.icj-cij.org/case/192",
    publicationDate: "2024-01-26",
    accessedAt: "2026-07-10",
    language: "en",
    jurisdiction: "International — United Nations principal judicial organ",
    authors: ["International Court of Justice"],
    official: true,
    status: "active",
    notes:
      "The ICJ issued provisional measures in the case brought by South Africa alleging violations of the Genocide Convention. This source record links to the case docket, which contains the order and subsequent filings. The order itself is a binding provisional measures decision — it does not constitute a final judgment on the merits.",
    version: 1,
    lastCheckedAt: "2026-07-10",
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
    url: "https://www.icj-cij.org/case/192",
    publicationDate: "2024-05-24",
    accessedAt: "2026-07-10",
    language: "en",
    jurisdiction: "International — United Nations principal judicial organ",
    authors: ["International Court of Justice"],
    official: true,
    status: "active",
    notes:
      "The ICJ issued additional provisional measures in response to a further request from South Africa, specifically addressing the military offensive in Rafah. This source record links to the case docket. The order is a binding provisional measures decision — it does not constitute a final judgment on the merits.",
    version: 1,
    lastCheckedAt: "2026-07-10",
    correctionUrl: "/corrections",
  },
  {
    id: "icc-palestine-2024",
    slug: "icc-palestine-situation",
    title: "Situation in the State of Palestine — Public Court Records",
    publisher: "International Criminal Court",
    sourceType: "court",
    documentType: "Court records and filings",
    url: "https://www.icc-cpi.int/palestine",
    publicationDate: "2024",
    accessedAt: "2026-07-10",
    language: "en",
    jurisdiction: "International — Rome Statute, State of Palestine referral",
    authors: ["International Criminal Court — Office of the Prosecutor", "ICC Pre-Trial Chambers"],
    official: true,
    status: "active",
    notes:
      "The ICC has an open situation concerning the State of Palestine with jurisdiction over alleged crimes committed in the occupied Palestinian territory. Public court records include decisions on jurisdiction, arrest warrant applications, and procedural filings. The ICC is an independent judicial institution.",
    version: 1,
    lastCheckedAt: "2026-07-10",
    correctionUrl: "/corrections",
  },
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
    accessedAt: "2026-07-10",
    language: "en",
    jurisdiction: "International — United Nations Human Rights Council mandate",
    authors: ["Independent International Commission of Inquiry on the Occupied Palestinian Territory, including East Jerusalem, and Israel"],
    official: true,
    status: "active",
    notes:
      "The UN Independent International Commission of Inquiry published a detailed report examining human-rights and international humanitarian law compliance by all parties. UN Commissions of Inquiry are fact-finding bodies — their findings inform international accountability processes but are not judicial rulings.",
    version: 1,
    lastCheckedAt: "2026-07-10",
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
