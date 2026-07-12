import { useState, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import { Card } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { PageIntro } from "../components/pages/PageIntro";
import { PageStatusNotice } from "../components/pages/PageStatusNotice";
import { PolicySection } from "../components/pages/PolicySection";
import { LastUpdated } from "../components/pages/LastUpdated";
import { PreviewNotice } from "../components/pages/PreviewNotice";
import { CorrectionLink } from "../components/pages/CorrectionLink";
import { ExternalLink } from "../components/ui/ExternalLink";
import {
  evidenceItems,
  EVIDENCE_CATEGORIES,
  EVIDENCE_CATEGORY_LABELS,
  getAvailableSourceTypes,
  getAvailableVerificationLevels,
  getAvailableContentStatuses,
  type EvidenceItem,
  type EvidenceCategory,
} from "../data/evidenceItems";
import { sources } from "../data/sources";
import {
  CONTENT_STATUS_LABELS,
  VERIFICATION_LEVEL_LABELS,
  SOURCE_TYPE_LABELS,
  LEGAL_STATUS_LABELS,
  type ContentStatus,
  type VerificationLevel,
  type SourceType,
} from "../types/content";

const allItems = evidenceItems;
const availableSourceTypes = getAvailableSourceTypes();
const availableVerificationLevels = getAvailableVerificationLevels();
const availableContentStatuses = getAvailableContentStatuses();

type FilterKey = "category" | "sourceType" | "verificationLevel" | "contentStatus";

interface ActiveFilters {
  category: EvidenceCategory | null;
  sourceType: SourceType | null;
  verificationLevel: VerificationLevel | null;
  contentStatus: ContentStatus | null;
}

const defaultFilters: ActiveFilters = {
  category: null,
  sourceType: null,
  verificationLevel: null,
  contentStatus: null,
};

function filterItems(items: EvidenceItem[], filters: ActiveFilters): EvidenceItem[] {
  return items.filter((item) => {
    if (filters.category && item.category !== filters.category) return false;
    if (filters.sourceType && item.primarySourceType !== filters.sourceType) return false;
    if (filters.verificationLevel !== null && item.sourceQuality !== filters.verificationLevel) return false;
    if (filters.contentStatus && item.contentStatus !== filters.contentStatus) return false;
    return true;
  });
}

function hasActiveFilters(filters: ActiveFilters): boolean {
  return (
    filters.category !== null ||
    filters.sourceType !== null ||
    filters.verificationLevel !== null ||
    filters.contentStatus !== null
  );
}

/** Keyboard-accessible filter chip group */
function FilterChipGroup<T extends string | number>({
  label,
  options,
  selected,
  onSelect,
  onClear,
  formatLabel,
}: {
  label: string;
  options: T[];
  selected: T | null;
  onSelect: (value: T) => void;
  onClear: () => void;
  formatLabel: (value: T) => string;
}) {
  return (
    <fieldset className="mb-4">
      <legend className="font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-charcoal/45 mb-2">
        {label}
      </legend>
      <div className="flex flex-wrap gap-2" role="group" aria-label={label}>
        {options.map((value) => {
          const isActive = selected === value;
          return (
            <button
              key={String(value)}
              type="button"
              onClick={() => (isActive ? onClear() : onSelect(value))}
              className={`
                inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-md border
                transition-colors duration-200 min-h-[36px]
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-trust/50 focus-visible:ring-offset-1
                ${
                  isActive
                    ? "bg-ink text-bone border-ink"
                    : "bg-paper text-charcoal/70 border-charcoal/20 hover:bg-ink/5 hover:border-charcoal/40"
                }
              `.trim()}
              aria-pressed={isActive}
            >
              {formatLabel(value)}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

function EvidenceCard({ item }: { item: EvidenceItem }) {
  const [expanded, setExpanded] = useState(false);

  // Resolve referenced sources
  const itemSources = item.sourceIds
    .map((sid) => sources.find((s) => s.id === sid))
    .filter(Boolean);

  const hasDetail =
    item.legalStatuses ||
    item.incidentDate ||
    item.safeLocation ||
    item.sourceLanguage ||
    item.reviewedByRole ||
    itemSources.length > 0;

  return (
    <Card
      title={item.title}
      accent={
        item.category === "court record"
          ? "clay"
          : item.category === "official UN document"
            ? "blue"
            : item.category === "humanitarian update"
              ? "amber"
              : item.category === "human-rights report"
                ? "clay"
                : item.category === "parliamentary document"
                  ? "blue"
                  : "amber"
      }
    >
      {/* Category + source-quality row */}
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <Badge variant="neutral">
          {EVIDENCE_CATEGORY_LABELS[item.category]}
        </Badge>
        <span className="font-mono text-[11px] text-charcoal/50">
          Source quality: Level {item.sourceQuality}
        </span>
      </div>

      {/* Summary */}
      <p className="text-charcoal/80 leading-relaxed mb-3">{item.summary}</p>

      {/* Source type + status badges */}
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <Badge variant="info">
          {SOURCE_TYPE_LABELS[item.primarySourceType]}
        </Badge>
        <Badge
          variant={
            item.contentStatus === "reviewed"
              ? "info"
              : item.contentStatus === "review_pending"
                ? "warning"
                : "neutral"
          }
        >
          {CONTENT_STATUS_LABELS[item.contentStatus]}
        </Badge>
        {item.publicationDate && (
          <span className="font-mono text-[11px] text-charcoal/45">
            Published: {item.publicationDate}
          </span>
        )}
      </div>

      {/* Legal statuses */}
      {item.legalStatuses && item.legalStatuses.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-3">
          {item.legalStatuses.map((ls) => (
            <Badge key={ls} variant="alert">
              {LEGAL_STATUS_LABELS[ls]}
            </Badge>
          ))}
        </div>
      )}

      {/* Verification level explanation */}
      <p className="text-xs text-charcoal/50 leading-relaxed mb-3">
        <span className="font-medium text-charcoal/60">
          Verification level {item.sourceQuality}:{" "}
        </span>
        {VERIFICATION_LEVEL_LABELS[item.sourceQuality]}.
        {item.contentStatus === "review_pending" &&
          " This summary has not yet completed editorial review, even though the source quality is known."}
      </p>

      {/* Expandable detail */}
      {hasDetail && (
        <>
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-1.5 text-sm text-trust hover:text-trust/80 underline underline-offset-2 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-trust/50 focus-visible:ring-offset-2 rounded-sm min-h-[44px]"
            aria-expanded={expanded}
          >
            {expanded ? "Hide details" : "View details"}
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              aria-hidden="true"
              className={`transition-transform duration-200 ${expanded ? "rotate-90" : ""}`}
            >
              <path
                d="M4.5 2.5L8 6L4.5 9.5"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {expanded && (
            <div className="mt-4 pt-4 border-t border-border space-y-3">
              {/* Incident date */}
              {item.incidentDate && (
                <div>
                  <p className="font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-charcoal/45 mb-0.5">
                    Incident date
                  </p>
                  <p className="text-sm text-charcoal/70">{item.incidentDate}</p>
                </div>
              )}

              {/* Safe location */}
              {item.safeLocation && (
                <div>
                  <p className="font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-charcoal/45 mb-0.5">
                    Region
                  </p>
                  <p className="text-sm text-charcoal/70">{item.safeLocation}</p>
                </div>
              )}

              {/* Source language */}
              {item.sourceLanguage && (
                <div>
                  <p className="font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-charcoal/45 mb-0.5">
                    Source language
                  </p>
                  <p className="text-sm text-charcoal/70">
                    {item.sourceLanguage === "en" ? "English" : item.sourceLanguage}
                  </p>
                </div>
              )}

              {/* Reviewer */}
              {item.reviewedByRole && (
                <div>
                  <p className="font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-charcoal/45 mb-0.5">
                    Last reviewed by
                  </p>
                  <p className="text-sm text-charcoal/70">{item.reviewedByRole}</p>
                </div>
              )}

              {/* Source list */}
              {itemSources.length > 0 && (
                <div>
                  <p className="font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-charcoal/45 mb-1.5">
                    Sources
                  </p>
                  <ul className="space-y-2">
                    {itemSources.map((src) => (
                      <li key={src!.id} className="text-sm">
                        <ExternalLink href={src!.url} showIcon>
                          {src!.title.length > 100
                            ? src!.title.slice(0, 100) + "…"
                            : src!.title}
                        </ExternalLink>
                        <span className="block font-mono text-[11px] text-charcoal/40 mt-0.5">
                          {src!.publisher}
                          {src!.publicationDate ? ` — ${src!.publicationDate}` : ""}
                          {src!.accessedAt ? ` (accessed ${src!.accessedAt})` : ""}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tags */}
              {item.tags.length > 0 && (
                <div>
                  <p className="font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-charcoal/45 mb-1.5">
                    Tags
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] px-2 py-0.5 rounded-sm bg-bone border border-border text-charcoal/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Related routes */}
              {item.relatedRoutes.length > 0 && (
                <div>
                  <p className="font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-charcoal/45 mb-1.5">
                    Related pages
                  </p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1">
                    {item.relatedRoutes.map((route) => (
                      <Link
                        key={route}
                        to={route}
                        className="text-sm text-trust hover:text-trust/80 underline underline-offset-2 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-trust/50 focus-visible:ring-offset-2 rounded-sm"
                      >
                        {route}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </>
      )}

      {/* Correction route */}
      <p className="mt-4 pt-3 border-t border-border text-sm text-charcoal/50">
        <Link
          to={item.correctionUrl}
          className="text-trust hover:text-trust/80 underline underline-offset-2 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-trust/50 focus-visible:ring-offset-2 rounded-sm"
        >
          Report an error in this summary
        </Link>
      </p>
    </Card>
  );
}

export default function EvidenceLibraryPage() {
  const [filters, setFilters] = useState<ActiveFilters>(defaultFilters);

  const setFilter = useCallback(
    <K extends FilterKey>(key: K, value: ActiveFilters[K]) => {
      setFilters((prev) => ({ ...prev, [key]: value }));
    },
    [],
  );

  const clearFilter = useCallback((key: FilterKey) => {
    setFilters((prev) => ({ ...prev, [key]: null }));
  }, []);

  const clearAllFilters = useCallback(() => {
    setFilters(defaultFilters);
  }, []);

  const filteredItems = useMemo(
    () => filterItems(allItems, filters),
    [filters],
  );

  const active = hasActiveFilters(filters);

  return (
    <Container className="py-16 lg:py-20">
      <PageIntro
        eyebrow="Evidence Library"
        title="Evidence Library"
        description="A static preview of how evidence records will be structured, categorised, sourced, and displayed when the platform moves beyond the public static beta."
      />

      <PageStatusNotice title="Static preview — no live database" variant="info">
        <p>
          Every record on this page is a public source-summary — not raw
          testimony, user-submitted evidence, or live incident reporting.
          Records reference publicly available sources only. This library
          validates information architecture, source display, verification
          labels, and evidence-item presentation before a database exists.
        </p>
      </PageStatusNotice>

      {/* Evidence versus lead */}
      <PolicySection title="Evidence and leads" id="evidence-vs-lead" delay={0.15}>
        <p>
          The platform distinguishes between evidence and leads.
        </p>
        <ul className="space-y-3 mt-3">
          <li className="flex items-start gap-2">
            <span className="text-clay mt-1.5" aria-hidden="true">•</span>
            <span>
              <strong>A lead</strong> is raw information that has not yet been
              reviewed — a URL, a report, a social-media post, a document
              reference, or a tip. Leads are preserved for review but not
              presented as evidence. Verification levels 0 (unreviewed) and 1
              (preserved) describe leads, not evidence records.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-clay mt-1.5" aria-hidden="true">•</span>
            <span>
              <strong>An evidence record</strong> has been checked against at
              least one documented public source (verification level 2+) and
              has an editorial content status. It may still be under review
              (review_pending), but the source basis is documented.
            </span>
          </li>
        </ul>
        <p className="mt-4">
          This page displays evidence records only — verification levels 2 and
          above. Leads are not displayed publicly. Social media is never
          treated as verified proof without corroboration and safety review.
        </p>
      </PolicySection>

      {/* Filters */}
      <section aria-labelledby="filters-heading" className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <h2
            id="filters-heading"
            className="font-serif text-2xl font-semibold text-ink"
          >
            Filters
          </h2>
          {active && (
            <button
              type="button"
              onClick={clearAllFilters}
              className="text-sm text-trust hover:text-trust/80 underline underline-offset-2 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-trust/50 focus-visible:ring-offset-2 rounded-sm min-h-[44px] flex items-center"
            >
              Clear all filters
            </button>
          )}
        </div>

        <FilterChipGroup<EvidenceCategory>
          label="Category"
          options={EVIDENCE_CATEGORIES}
          selected={filters.category}
          onSelect={(v) => setFilter("category", v)}
          onClear={() => clearFilter("category")}
          formatLabel={(v) => EVIDENCE_CATEGORY_LABELS[v]}
        />

        <FilterChipGroup<SourceType>
          label="Source type"
          options={availableSourceTypes as SourceType[]}
          selected={filters.sourceType}
          onSelect={(v) => setFilter("sourceType", v)}
          onClear={() => clearFilter("sourceType")}
          formatLabel={(v) => SOURCE_TYPE_LABELS[v]}
        />

        <FilterChipGroup<VerificationLevel>
          label="Verification level"
          options={availableVerificationLevels}
          selected={filters.verificationLevel}
          onSelect={(v) => setFilter("verificationLevel", v)}
          onClear={() => clearFilter("verificationLevel")}
          formatLabel={(v) => `Level ${v} — ${VERIFICATION_LEVEL_LABELS[v]}`}
        />

        <FilterChipGroup<ContentStatus>
          label="Content status"
          options={availableContentStatuses}
          selected={filters.contentStatus}
          onSelect={(v) => setFilter("contentStatus", v)}
          onClear={() => clearFilter("contentStatus")}
          formatLabel={(v) => CONTENT_STATUS_LABELS[v]}
        />

        {/* Result count */}
        <p className="font-mono text-xs text-charcoal/50 mt-2">
          {filteredItems.length} of {allItems.length} records
          {active ? " match the current filters" : " displayed"}
        </p>
      </section>

      {/* Evidence item cards / empty state */}
      {filteredItems.length === 0 ? (
        <Reveal delay={0.1}>
          <div className="bg-bone border border-border rounded-lg p-10 text-center mb-10">
            <p className="font-serif text-xl font-semibold text-ink mb-3">
              No records match these filters.
            </p>
            <p className="text-charcoal/70 leading-relaxed mb-4">
              Try adjusting or clearing the filter selections above. The
              evidence library contains {allItems.length} records across{" "}
              {EVIDENCE_CATEGORIES.length} categories — a different combination
              may show results.
            </p>
            <button
              type="button"
              onClick={clearAllFilters}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-trust hover:text-trust/80 underline underline-offset-2 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-trust/50 focus-visible:ring-offset-2 rounded-sm min-h-[44px]"
            >
              Clear all filters
            </button>
          </div>
        </Reveal>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {filteredItems.map((item) => (
            <EvidenceCard key={item.id} item={item} />
          ))}
        </div>
      )}

      {/* Source and verification explanation */}
      <PolicySection title="Source quality and editorial status" id="source-explanation" delay={0.55}>
        <p>
          Source quality and editorial status are separate dimensions. A
          record may reference a high-quality source (such as a court order or
          UN report) while the editorial summary itself is still under review
          or pending expert input.
        </p>
        <div className="overflow-x-auto mt-4">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="py-2 pr-4 font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-charcoal/45">
                  Verification level
                </th>
                <th className="py-2 pr-4 font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-charcoal/45">
                  Label
                </th>
                <th className="py-2 font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-charcoal/45">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="text-charcoal/70">
              {([0, 1, 2, 3, 4, 5] as VerificationLevel[]).map((level) => (
                <tr key={level} className="border-b border-border/50">
                  <td className="py-2 pr-4 font-mono text-xs text-charcoal/50">
                    Level {level}
                  </td>
                  <td className="py-2 pr-4 font-medium text-charcoal/80">
                    {VERIFICATION_LEVEL_LABELS[level]}
                  </td>
                  <td className="py-2 text-charcoal/60">
                    {level === 0
                      ? "Raw information not yet reviewed by the platform."
                      : level === 1
                        ? "Saved for review but not yet checked against sources."
                        : level === 2
                          ? "Verified against at least one documented public source."
                          : level === 3
                            ? "Confirmed by multiple independent sources."
                            : level === 4
                              ? "Verified by an established trusted organisation."
                              : "Official court record, UN document, or formal institutional finding."}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-charcoal/60">
          Source quality = verification level. Content status = editorial
          review state. An item at verification level 5 may still be
          review_pending if the summary text has not completed editorial
          review. Do not describe a record as verified unless both the source
          quality and the content status support that word.
        </p>
      </PolicySection>

      {/* Citation guidance */}
      <PolicySection title="Citation guidance" id="citation" delay={0.58}>
        <p>
          Evidence records displayed on this page are summaries of public
          sources. When citing, go to the original source — not this platform.
        </p>
        <ul className="space-y-2 mt-3">
          <li className="flex items-start gap-2">
            <span className="text-clay mt-1.5" aria-hidden="true">•</span>
            <span>
              <strong>For court records:</strong> Cite the official court
              document using the court&rsquo;s own citation format. The ICJ
              and ICC publish official citations on their websites.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-clay mt-1.5" aria-hidden="true">•</span>
            <span>
              <strong>For UN documents:</strong> Use the official UN document
              symbol and the UN&rsquo;s published citation. This platform
              provides links to help you find the original.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-clay mt-1.5" aria-hidden="true">•</span>
            <span>
              <strong>For humanitarian and human-rights reports:</strong> Cite
              the publishing organisation, report title, publication date, and
              URL. Do not cite this platform as the source.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-clay mt-1.5" aria-hidden="true">•</span>
            <span>
              <strong>For parliamentary records:</strong> Cite the official
              record — Hansard, parliamentary website, or official gazette —
              not this platform&rsquo;s summary.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-clay mt-1.5" aria-hidden="true">•</span>
            <span>
              <strong>For investigative reports:</strong> Cite the original
              publication with its own date, publisher, and URL.
            </span>
          </li>
        </ul>
      </PolicySection>

      {/* Methodology link */}
      <PolicySection title="How this library works" id="how-it-works" delay={0.61}>
        <p>
          The Evidence Library is built on the{" "}
          <Link
            to="/methodology"
            className="text-trust hover:text-trust/80 underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-trust/50 focus-visible:ring-offset-2 rounded-sm"
          >
            platform methodology
          </Link>
          . Every record separates source quality from editorial review
          status. Verification levels describe the source, not the platform.
          Content status describes this platform&rsquo;s editorial confidence
          in the summary.
        </p>
        <p>
          During the static beta, the evidence library does not include:
        </p>
        <ul className="space-y-2 mt-3">
          <li className="flex items-start gap-2">
            <span className="text-clay mt-1.5" aria-hidden="true">•</span>
            <span>Raw witness testimony or user-submitted evidence</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-clay mt-1.5" aria-hidden="true">•</span>
            <span>Exact sensitive locations or identifying information about vulnerable people</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-clay mt-1.5" aria-hidden="true">•</span>
            <span>Graphic media or imagery of casualties</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-clay mt-1.5" aria-hidden="true">•</span>
            <span>Unreviewed social-media posts presented as facts</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-clay mt-1.5" aria-hidden="true">•</span>
            <span>Live incident reporting or real-time tracking</span>
          </li>
        </ul>
      </PolicySection>

      <PreviewNotice title="The Evidence Library is a static preview">
        These records validate the information architecture for evidence
        display — categories, source-quality levels, content statuses, legal
        labels, and filter controls. The library will expand when a database
        and review workflow exist. Corrections and source suggestions are
        welcome.
      </PreviewNotice>

      <CorrectionLink />
      <LastUpdated date="2026-07-12" />
    </Container>
  );
}
