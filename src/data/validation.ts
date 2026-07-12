/**
 * Static-data validation for the seed-content framework.
 *
 * Every data collection is validated at test time (runs in CI).
 * No runtime dependency on a schema library — the project's
 * TypeScript types are the schema, and these validators check
 * structural invariants that types alone cannot enforce.
 *
 * Run via: npx vitest run src/data/__tests__/validation.test.ts
 */

import type { ContentStatus } from "../types/content";
import { CONTENT_STATUS_LABELS, LEGAL_STATUS_LABELS } from "../types/content";
import { sources } from "./sources";
import { legalCases } from "./legalCases";
import { belgiumSections } from "./countries";
import { euInstitutions } from "./institutions";
import { organizationRecords } from "./organizations";
import { actionTemplates } from "./actionTemplates";
import { evidenceItems } from "./evidenceItems";
import { attributionRecords } from "./attributions";

// ── Helpers ──────────────────────────────────────────────────────────────

export interface ValidationError {
  collection: string;
  recordId: string;
  field: string;
  message: string;
}

function err(
  collection: string,
  recordId: string,
  field: string,
  message: string,
): ValidationError {
  return { collection, recordId, field, message };
}

const VALID_CONTENT_STATUSES = new Set(Object.keys(CONTENT_STATUS_LABELS));
const VALID_LEGAL_STATUSES = new Set(Object.keys(LEGAL_STATUS_LABELS));
const SOURCE_IDS = new Set(sources.map((s) => s.id));

/** Content statuses that represent publishable (visible) records. */
const PUBLISHABLE_STATUSES: Set<ContentStatus> = new Set([
  "static_preview",
  "review_pending",
  "reviewed",
  "disputed",
  "corrected",
]);

function isValidUrl(url: string): boolean {
  if (!url || url.trim() === "") return false;
  try {
    const parsed = new URL(url);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

// ── Per-collection validators ────────────────────────────────────────────

function validateSources(): ValidationError[] {
  const errors: ValidationError[] = [];
  const seen = new Set<string>();

  for (const s of sources) {
    // Duplicate ID
    if (seen.has(s.id)) {
      errors.push(err("sources", s.id, "id", "Duplicate source ID."));
    }
    seen.add(s.id);

    // URL
    if (!isValidUrl(s.url)) {
      errors.push(err("sources", s.id, "url", `Invalid or empty URL: "${s.url}".`));
    }

    // Missing publisher
    if (!s.publisher || s.publisher.trim() === "") {
      errors.push(err("sources", s.id, "publisher", "Publisher is required."));
    }
  }

  return errors;
}

function validateLegalCases(): ValidationError[] {
  const errors: ValidationError[] = [];
  const seen = new Set<string>();

  for (const c of legalCases) {
    if (seen.has(c.id)) {
      errors.push(err("legalCases", c.id, "id", "Duplicate ID."));
    }
    seen.add(c.id);

    // Missing slug
    if (!c.slug || c.slug.trim() === "") {
      errors.push(err("legalCases", c.id, "slug", "Slug is required."));
    }

    // Missing source IDs for publishable records
    if (PUBLISHABLE_STATUSES.has(c.contentStatus) && c.sourceIds.length === 0) {
      errors.push(
        err("legalCases", c.id, "sourceIds", "Publishable record has no source IDs."),
      );
    }

    // Unreferenced source IDs
    for (const sid of c.sourceIds) {
      if (!SOURCE_IDS.has(sid)) {
        errors.push(
          err("legalCases", c.id, "sourceIds", `Source "${sid}" not found in sources.ts.`),
        );
      }
    }

    // Invalid content status
    if (!VALID_CONTENT_STATUSES.has(c.contentStatus)) {
      errors.push(
        err("legalCases", c.id, "contentStatus", `Invalid content status: "${c.contentStatus}".`),
      );
    }

    // Invalid legal statuses
    for (const ls of c.legalStatuses) {
      if (!VALID_LEGAL_STATUSES.has(ls)) {
        errors.push(
          err("legalCases", c.id, "legalStatuses", `Invalid legal status: "${ls}".`),
        );
      }
    }

    // Impossible verification level
    if (c.sourceQuality < 0 || c.sourceQuality > 5) {
      errors.push(
        err("legalCases", c.id, "sourceQuality", `Impossible verification level: ${c.sourceQuality}.`),
      );
    }

    // Reviewed status requires lastReviewedAt
    if (c.contentStatus === "reviewed" && !c.lastReviewedAt) {
      errors.push(
        err("legalCases", c.id, "lastReviewedAt", "Record is reviewed but lastReviewedAt is missing."),
      );
    }

    // Missing version
    if (!c.version || c.version < 1) {
      errors.push(
        err("legalCases", c.id, "version", `Missing or invalid version: ${c.version}.`),
      );
    }
  }

  return errors;
}

function validateBelgiumSections(): ValidationError[] {
  const errors: ValidationError[] = [];
  const seen = new Set<string>();

  for (const sec of belgiumSections) {
    if (seen.has(sec.id)) {
      errors.push(err("belgiumSections", sec.id, "id", "Duplicate ID."));
    }
    seen.add(sec.id);

    if (!VALID_CONTENT_STATUSES.has(sec.status)) {
      errors.push(
        err("belgiumSections", sec.id, "status", `Invalid content status: "${sec.status}".`),
      );
    }
  }

  return errors;
}

function validateEuInstitutions(): ValidationError[] {
  const errors: ValidationError[] = [];
  const seen = new Set<string>();

  for (const inst of euInstitutions) {
    if (seen.has(inst.id)) {
      errors.push(err("euInstitutions", inst.id, "id", "Duplicate ID."));
    }
    seen.add(inst.id);

    if (!VALID_CONTENT_STATUSES.has(inst.status)) {
      errors.push(
        err("euInstitutions", inst.id, "status", `Invalid content status: "${inst.status}".`),
      );
    }
  }

  return errors;
}

function validateOrganizations(): ValidationError[] {
  const errors: ValidationError[] = [];
  const seen = new Set<string>();

  for (const org of organizationRecords) {
    if (seen.has(org.id)) {
      errors.push(err("organizations", org.id, "id", "Duplicate ID."));
    }
    seen.add(org.id);

    // Official website URL
    if (!isValidUrl(org.officialWebsite)) {
      errors.push(
        err("organizations", org.id, "officialWebsite", `Invalid or empty URL: "${org.officialWebsite}".`),
      );
    }

    // Donation URL if present
    if (org.officialDonationUrl && !isValidUrl(org.officialDonationUrl)) {
      errors.push(
        err("organizations", org.id, "officialDonationUrl", `Invalid URL: "${org.officialDonationUrl}".`),
      );
    }

    // Invalid content status
    if (!VALID_CONTENT_STATUSES.has(org.contentStatus)) {
      errors.push(
        err("organizations", org.id, "contentStatus", `Invalid content status: "${org.contentStatus}".`),
      );
    }

    // Reviewed status requires sourceIds OR a valid official website
    // (the organization's own public website is its primary source)
    if (
      org.contentStatus === "reviewed" &&
      org.sourceIds.length === 0 &&
      !isValidUrl(org.officialWebsite)
    ) {
      errors.push(
        err("organizations", org.id, "sourceIds", "Reviewed record has no source IDs and no valid official website."),
      );
    }

    // Reviewed status requires lastReviewedAt
    if (org.contentStatus === "reviewed" && !org.lastReviewedAt) {
      errors.push(
        err("organizations", org.id, "lastReviewedAt", "Record is reviewed but lastReviewedAt is missing."),
      );
    }

    // Relationship status check: only "public_resource" is valid in static beta
    if (org.relationshipStatus !== "public_resource") {
      errors.push(
        err(
          "organizations",
          org.id,
          "relationshipStatus",
          `Relationship status "${org.relationshipStatus}" is not valid. Only "public_resource" is supported in static beta.`,
        ),
      );
    }

    // Missing version
    if (!org.version || org.version < 1) {
      errors.push(
        err("organizations", org.id, "version", `Missing or invalid version: ${org.version}.`),
      );
    }
  }

  return errors;
}

function validateActionTemplates(): ValidationError[] {
  const errors: ValidationError[] = [];
  const seen = new Set<string>();

  for (const t of actionTemplates) {
    if (seen.has(t.id)) {
      errors.push(err("actionTemplates", t.id, "id", "Duplicate ID."));
    }
    seen.add(t.id);

    // Invalid content status
    if (!VALID_CONTENT_STATUSES.has(t.contentStatus)) {
      errors.push(
        err("actionTemplates", t.id, "contentStatus", `Invalid content status: "${t.contentStatus}".`),
      );
    }

    // Reviewed status requires lastReviewedAt
    if (t.contentStatus === "reviewed" && !t.lastReviewedAt) {
      errors.push(
        err("actionTemplates", t.id, "lastReviewedAt", "Record is reviewed but lastReviewedAt is missing."),
      );
    }

    // Reviewed template requires sourceIds
    if (t.contentStatus === "reviewed" && t.sourceIds.length === 0) {
      errors.push(
        err("actionTemplates", t.id, "sourceIds", "Reviewed record has no source IDs."),
      );
    }

    // Missing version
    if (!t.version || t.version < 1) {
      errors.push(
        err("actionTemplates", t.id, "version", `Missing or invalid version: ${t.version}.`),
      );
    }
  }

  return errors;
}

function validateEvidenceItems(): ValidationError[] {
  const errors: ValidationError[] = [];
  const seen = new Set<string>();

  for (const item of evidenceItems) {
    if (seen.has(item.id)) {
      errors.push(err("evidenceItems", item.id, "id", "Duplicate ID."));
    }
    seen.add(item.id);

    // Invalid content status
    if (!VALID_CONTENT_STATUSES.has(item.contentStatus)) {
      errors.push(
        err("evidenceItems", item.id, "contentStatus", `Invalid content status: "${item.contentStatus}".`),
      );
    }

    // Invalid legal statuses
    if (item.legalStatuses) {
      for (const ls of item.legalStatuses) {
        if (!VALID_LEGAL_STATUSES.has(ls)) {
          errors.push(
            err("evidenceItems", item.id, "legalStatuses", `Invalid legal status: "${ls}".`),
          );
        }
      }
    }

    // Impossible verification level
    if (item.sourceQuality < 0 || item.sourceQuality > 5) {
      errors.push(
        err("evidenceItems", item.id, "sourceQuality", `Impossible verification level: ${item.sourceQuality}.`),
      );
    }

    // Reviewed status requires lastReviewedAt
    if (item.contentStatus === "reviewed" && !item.lastReviewedAt) {
      errors.push(
        err("evidenceItems", item.id, "lastReviewedAt", "Record is reviewed but lastReviewedAt is missing."),
      );
    }

    // Reviewed status requires sourceIds
    if (item.contentStatus === "reviewed" && item.sourceIds.length === 0) {
      errors.push(
        err("evidenceItems", item.id, "sourceIds", "Reviewed record has no source IDs."),
      );
    }

    // Missing version
    if (!item.version || item.version < 1) {
      errors.push(
        err("evidenceItems", item.id, "version", `Missing or invalid version: ${item.version}.`),
      );
    }

    // Missing correction route for publishable records
    if (PUBLISHABLE_STATUSES.has(item.contentStatus) && !item.correctionUrl) {
      errors.push(
        err("evidenceItems", item.id, "correctionUrl", "Publishable record has no correction route."),
      );
    }
  }

  return errors;
}

function validateAttributions(): ValidationError[] {
  const errors: ValidationError[] = [];
  const seen = new Set<string>();

  for (const attr of attributionRecords) {
    if (seen.has(attr.id)) {
      errors.push(err("attributions", attr.id, "id", "Duplicate ID."));
    }
    seen.add(attr.id);

    // License URL when present
    if (attr.licenseUrl && !isValidUrl(attr.licenseUrl)) {
      errors.push(
        err("attributions", attr.id, "licenseUrl", `Invalid license URL: "${attr.licenseUrl}".`),
      );
    }

    // Source URL when present (may be empty for review_pending)
    if (attr.sourceUrl && !isValidUrl(attr.sourceUrl)) {
      errors.push(
        err("attributions", attr.id, "sourceUrl", `Invalid source URL: "${attr.sourceUrl}".`),
      );
    }

    // Complete status requires sourceUrl
    if (attr.status === "complete" && !attr.sourceUrl) {
      errors.push(
        err("attributions", attr.id, "sourceUrl", "Complete attribution has no source URL."),
      );
    }
  }

  return errors;
}

// ── Aggregate ─────────────────────────────────────────────────────────────

export interface ValidationReport {
  errors: ValidationError[];
  collectionsChecked: number;
  recordsChecked: number;
}

export function validateAll(): ValidationReport {
  const allErrors: ValidationError[] = [
    ...validateSources(),
    ...validateLegalCases(),
    ...validateBelgiumSections(),
    ...validateEuInstitutions(),
    ...validateOrganizations(),
    ...validateActionTemplates(),
    ...validateEvidenceItems(),
    ...validateAttributions(),
  ];

  return {
    errors: allErrors,
    collectionsChecked: 8,
    recordsChecked:
      sources.length +
      legalCases.length +
      belgiumSections.length +
      euInstitutions.length +
      organizationRecords.length +
      actionTemplates.length +
      evidenceItems.length +
      attributionRecords.length,
  };
}
