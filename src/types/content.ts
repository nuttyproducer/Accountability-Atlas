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

// ── Legal Timeline ─────────────────────────────────────────────────────────

/** Controlled procedural event types for legal case timelines. */
export type LegalTimelineEventType =
  | "filing"
  | "jurisdiction_decision"
  | "investigation_opened"
  | "provisional_measure"
  | "arrest_warrant_application"
  | "arrest_warrant_issued"
  | "hearing"
  | "order"
  | "judgment"
  | "intervention"
  | "official_report_update";

export const LEGAL_TIMELINE_EVENT_LABELS: Record<LegalTimelineEventType, string> = {
  filing: "Filing",
  jurisdiction_decision: "Jurisdiction decision",
  investigation_opened: "Investigation opened",
  provisional_measure: "Provisional measure",
  arrest_warrant_application: "Arrest warrant application",
  arrest_warrant_issued: "Arrest warrant issued",
  hearing: "Hearing",
  order: "Order",
  judgment: "Judgment",
  intervention: "Intervention",
  official_report_update: "Official report / update",
};

/** A single procedural event in a legal case timeline. */
export interface LegalTimelineEvent {
  /** Unique identifier for this timeline event. */
  id: string;
  /** References the legal case this event belongs to. */
  legalCaseId: string;
  /** Date of the procedural event (ISO 8601). */
  date: string;
  /** Controlled event type from the procedural vocabulary. */
  eventType: LegalTimelineEventType;
  /** Brief title for this timeline entry. */
  title: string;
  /** Careful procedural summary — distinguishes allegations from findings. */
  proceduralSummary: string;
  /** Source document IDs that support this timeline entry. */
  sourceIds: string[];
  /** Editorial content status of this timeline entry. */
  contentStatus: ContentStatus;
  /** Verification level of the underlying sources. */
  sourceQuality: VerificationLevel;
  /** Schema version of this timeline record. */
  version: number;
  /** When this timeline entry was last reviewed. */
  lastReviewedAt?: string;
  /** Role that performed the review — not a personal name. */
  reviewedByRole?: string;
  /** Route to the corrections process. */
  correctionUrl: string;
}
