export type ContentStatus =
  | "draft"
  | "static_preview"
  | "review_pending"
  | "reviewed"
  | "disputed"
  | "corrected"
  | "archived";

export const CONTENT_STATUS_LABELS: Record<ContentStatus, string> = {
  draft: "Draft",
  static_preview: "Static preview",
  review_pending: "Review pending",
  reviewed: "Reviewed",
  disputed: "Disputed",
  corrected: "Corrected",
  archived: "Archived",
};

export type LegalStatus =
  | "court_proceeding_active"
  | "provisional_measures_issued"
  | "arrest_warrant_issued"
  | "allegation_under_investigation"
  | "un_finding"
  | "ngo_legal_determination"
  | "not_judicially_determined"
  | "contested_claim"
  | "requires_further_verification";

export const LEGAL_STATUS_LABELS: Record<LegalStatus, string> = {
  court_proceeding_active: "Court proceeding active",
  provisional_measures_issued: "Provisional measures issued",
  arrest_warrant_issued: "Arrest warrant issued",
  allegation_under_investigation: "Allegation under investigation",
  un_finding: "UN finding",
  ngo_legal_determination: "NGO legal determination",
  not_judicially_determined: "Not yet judicially determined",
  contested_claim: "Contested claim",
  requires_further_verification: "Requires further verification",
};

export type VerificationLevel = 0 | 1 | 2 | 3 | 4 | 5;

export const VERIFICATION_LEVEL_LABELS: Record<VerificationLevel, string> = {
  0: "Unreviewed lead",
  1: "Preserved lead",
  2: "Source checked",
  3: "Corroborated",
  4: "Trusted organization verified",
  5: "Legal/institutional record",
};

export type SourceType =
  | "court"
  | "un"
  | "government"
  | "humanitarian"
  | "ngo"
  | "academic"
  | "journalism"
  | "osint";

export const SOURCE_TYPE_LABELS: Record<SourceType, string> = {
  court: "Court / legal record",
  un: "UN / international body",
  government: "Government / parliamentary record",
  humanitarian: "Humanitarian organization",
  ngo: "Human-rights organization",
  academic: "Academic research",
  journalism: "Investigative journalism",
  osint: "OSINT / documentation group",
};

/** Source record status — describes URL and currency state. */
export type SourceStatus = "active" | "broken" | "archived" | "superseded";

export const SOURCE_STATUS_LABELS: Record<SourceStatus, string> = {
  active: "Active",
  broken: "Broken link",
  archived: "Archived",
  superseded: "Superseded",
};

export interface SourceRecord {
  id: string;
  /** URL-safe slug for routing. */
  slug: string;
  title: string;
  publisher: string;
  sourceType: SourceType;
  /** The document type, e.g. "court order", "report", "resolution", "filing". */
  documentType?: string;
  url: string;
  publicationDate?: string;
  accessedAt: string;
  archiveUrl?: string;
  language?: string;
  /** Legal or institutional jurisdiction, e.g. "International", "Belgium". */
  jurisdiction?: string;
  /** Authors or issuing body, if distinct from publisher. */
  authors?: string[];
  /** Whether this is an official institutional record. */
  official?: boolean;
  /** Source currency status. */
  status: SourceStatus;
  /** Notes safe for public display — no private/internal review notes. */
  notes?: string;
  /** Schema version of this record. */
  version: number;
  /** When the URL was last verified as resolving correctly. */
  lastCheckedAt?: string;
  /** Route to the corrections process. */
  correctionUrl: string;
}

export interface ReviewMetadata {
  contentStatus: ContentStatus;
  sourceQuality?: VerificationLevel;
  sourceIds: string[];
  legalStatuses?: LegalStatus[];
  lastReviewedAt?: string;
  reviewedByRole?: string;
  version: number;
  methodologyUrl?: string;
  correctionUrl?: string;
  reviewNotes?: string;
}

export interface BasePreviewRecord {
  id: string;
  title: string;
  summary: string;
  review: ReviewMetadata;
}
