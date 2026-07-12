import { describe, it, expect } from "vitest";
import { validateAll, type ValidationError } from "../validation";

function formatErrors(errors: ValidationError[]): string {
  return errors
    .map(
      (e) => `  [${e.collection}] ${e.recordId} — ${e.field}: ${e.message}`,
    )
    .join("\n");
}

describe("Static data validation", () => {
  const report = validateAll();

  it("checks records across all collections", () => {
    expect(report.collectionsChecked).toBe(8);
    expect(report.recordsChecked).toBeGreaterThan(0);
  });

  it("has no duplicate IDs", () => {
    const dupes = report.errors.filter((e) => e.field === "id");
    if (dupes.length > 0) {
      throw new Error(`Duplicate IDs found:\n${formatErrors(dupes)}`);
    }
  });

  it("has no invalid content statuses", () => {
    const invalid = report.errors.filter((e) => e.field === "contentStatus" || e.field === "status");
    if (invalid.length > 0) {
      throw new Error(`Invalid statuses:\n${formatErrors(invalid)}`);
    }
  });

  it("has no invalid legal statuses", () => {
    const invalid = report.errors.filter((e) => e.field === "legalStatuses");
    if (invalid.length > 0) {
      throw new Error(`Invalid legal statuses:\n${formatErrors(invalid)}`);
    }
  });

  it("has no invalid URLs", () => {
    const invalid = report.errors.filter(
      (e) => e.field === "url" || e.field === "officialWebsite" || e.field === "officialDonationUrl" || e.field === "licenseUrl" || e.field === "sourceUrl",
    );
    if (invalid.length > 0) {
      throw new Error(`Invalid URLs:\n${formatErrors(invalid)}`);
    }
  });

  it("has no impossible verification levels", () => {
    const invalid = report.errors.filter((e) => e.field === "sourceQuality");
    if (invalid.length > 0) {
      throw new Error(`Impossible verification levels:\n${formatErrors(invalid)}`);
    }
  });

  it("has no reviewed records missing lastReviewedAt", () => {
    const invalid = report.errors.filter((e) => e.field === "lastReviewedAt");
    if (invalid.length > 0) {
      throw new Error(`Reviewed records missing lastReviewedAt:\n${formatErrors(invalid)}`);
    }
  });

  it("has no reviewed records missing sourceIds", () => {
    const invalid = report.errors.filter(
      (e) => e.field === "sourceIds" && e.message.includes("Reviewed"),
    );
    if (invalid.length > 0) {
      throw new Error(`Reviewed records missing sourceIds:\n${formatErrors(invalid)}`);
    }
  });

  it("has no publishable records missing source IDs", () => {
    const invalid = report.errors.filter(
      (e) => e.field === "sourceIds" && e.message.includes("Publishable"),
    );
    if (invalid.length > 0) {
      throw new Error(`Publishable records missing sources:\n${formatErrors(invalid)}`);
    }
  });

  it("has no missing versions", () => {
    const invalid = report.errors.filter((e) => e.field === "version");
    if (invalid.length > 0) {
      throw new Error(`Missing/invalid versions:\n${formatErrors(invalid)}`);
    }
  });

  it("has no invalid relationship statuses", () => {
    const invalid = report.errors.filter((e) => e.field === "relationshipStatus");
    if (invalid.length > 0) {
      throw new Error(`Invalid relationship statuses:\n${formatErrors(invalid)}`);
    }
  });

  it("has no missing correction routes on publishable records", () => {
    const invalid = report.errors.filter((e) => e.field === "correctionUrl");
    if (invalid.length > 0) {
      throw new Error(`Missing correction routes:\n${formatErrors(invalid)}`);
    }
  });

  it("has no unreferenced source IDs", () => {
    const invalid = report.errors.filter(
      (e) => e.field === "sourceIds" && e.message.includes("not found"),
    );
    if (invalid.length > 0) {
      throw new Error(`Unreferenced sources:\n${formatErrors(invalid)}`);
    }
  });

  it("produces zero validation errors overall", () => {
    if (report.errors.length > 0) {
      throw new Error(
        `${report.errors.length} validation errors across ${report.recordsChecked} records:\n${formatErrors(report.errors)}`,
      );
    }
  });
});
