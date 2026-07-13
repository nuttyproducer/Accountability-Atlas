import { useState, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import { Container } from "../components/ui/Container";
import { PageIntro } from "../components/pages/PageIntro";
import { PageStatusNotice } from "../components/pages/PageStatusNotice";
import { PolicySection } from "../components/pages/PolicySection";
import { LastUpdated } from "../components/pages/LastUpdated";
import { CorrectionLink } from "../components/pages/CorrectionLink";
import { ExternalLink } from "../components/ui/ExternalLink";
import { Badge } from "../components/ui/Badge";
import { FilterChipGroup } from "../components/evidence/EvidenceFilters";
import {
  sources,
  getAvailableSourceTypes,
} from "../data/sources";
import {
  SOURCE_TYPE_LABELS,
  SOURCE_STATUS_LABELS,
  type SourceType,
  type SourceStatus,
} from "../types/content";

const allSources = sources;
const availableSourceTypes = getAvailableSourceTypes();

const sourceStatuses: SourceStatus[] = ["active", "broken", "archived", "superseded"];

interface SourceFilters {
  sourceType: SourceType | null;
  status: SourceStatus | null;
}

const defaultFilters: SourceFilters = {
  sourceType: null,
  status: null,
};

function filterSources(
  items: typeof allSources,
  filters: SourceFilters,
): typeof allSources {
  return items.filter((s) => {
    if (filters.sourceType && s.sourceType !== filters.sourceType) return false;
    if (filters.status && s.status !== filters.status) return false;
    return true;
  });
}

export default function SourceRegistryPage() {
  const [filters, setFilters] = useState<SourceFilters>(defaultFilters);

  const setFilter = useCallback(
    <K extends keyof SourceFilters>(key: K, value: SourceFilters[K]) => {
      setFilters((prev) => ({ ...prev, [key]: value }));
    },
    [],
  );

  const clearFilter = useCallback((key: keyof SourceFilters) => {
    setFilters((prev) => ({ ...prev, [key]: null }));
  }, []);

  const clearAllFilters = useCallback(() => {
    setFilters(defaultFilters);
  }, []);

  const filteredSources = useMemo(
    () => filterSources(allSources, filters),
    [filters],
  );

  const hasActive = filters.sourceType !== null || filters.status !== null;

  return (
    <Container className="py-16 lg:py-20">
      <PageIntro
        eyebrow="Source Registry"
        title="Public Source Registry"
        description="Every source referenced on this platform is listed here with its publisher, type, publication date, access date, and current status. A source record establishes what an institution published or stated — it does not automatically establish every underlying factual claim."
      />

      <PageStatusNotice title="Static preview" variant="info">
        <p>
          The source registry contains a limited set of representative source
          records for structural demonstration during the static beta. Sources
          are factual references — they do not carry a content review status.
          Every source links to its original URL. If a link is broken, the
          source status is updated and an archive URL is provided where
          available.
        </p>
      </PageStatusNotice>

      {/* What a source record proves */}
      <PolicySection title="What a source record proves" id="what-sources-prove" delay={0.15}>
        <p>
          A source record documents that a specific institution or organisation
          published a specific document or record at a specific time. It proves
          what was published — not that every factual claim within the document
          is independently verified.
        </p>
        <ul className="space-y-2 mt-3">
          <li className="flex items-start gap-2">
            <span className="text-clay mt-1.5" aria-hidden="true">•</span>
            <span>
              <strong>An official source</strong> may establish what an
              institution published or stated. It does not automatically
              establish every underlying factual claim.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-clay mt-1.5" aria-hidden="true">•</span>
            <span>
              <strong>A court record</strong> proves what the court ordered or
              found. It does not automatically prove every factual claim
              recited in the filing.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-clay mt-1.5" aria-hidden="true">•</span>
            <span>
              <strong>A UN document</strong> carries the institutional weight
              of the issuing body. It may reflect political compromise as well
              as factual investigation.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-clay mt-1.5" aria-hidden="true">•</span>
            <span>
              <strong>A humanitarian or NGO report</strong> reflects the
              organisation&rsquo;s findings based on its published methodology.
              Organisational findings are distinct from judicial
              determinations.
            </span>
          </li>
        </ul>
      </PolicySection>

      {/* Filters */}
      <section aria-labelledby="filters-heading" className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <h2
            id="filters-heading"
            className="font-serif text-2xl font-semibold text-ink"
          >
            Source filters
          </h2>
          {hasActive && (
            <button
              type="button"
              onClick={clearAllFilters}
              className="text-sm text-trust hover:text-trust/80 underline underline-offset-2 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-trust/50 focus-visible:ring-offset-2 rounded-sm min-h-[44px] flex items-center"
            >
              Clear all filters
            </button>
          )}
        </div>

        <FilterChipGroup<SourceType>
          label="Source type"
          options={availableSourceTypes as SourceType[]}
          selected={filters.sourceType}
          onSelect={(v) => setFilter("sourceType", v)}
          onClear={() => clearFilter("sourceType")}
          formatLabel={(v) => SOURCE_TYPE_LABELS[v]}
        />

        <FilterChipGroup<SourceStatus>
          label="Source status"
          options={sourceStatuses}
          selected={filters.status}
          onSelect={(v) => setFilter("status", v)}
          onClear={() => clearFilter("status")}
          formatLabel={(v) => SOURCE_STATUS_LABELS[v]}
        />

        <p className="font-mono text-xs text-charcoal/50 mt-2">
          {filteredSources.length} of {allSources.length} sources
          {hasActive ? " match the current filters" : " displayed"}
        </p>
      </section>

      {/* Source list */}
      {filteredSources.length === 0 ? (
        <div className="bg-bone border border-border rounded-lg p-10 text-center mb-10">
          <p className="font-serif text-xl font-semibold text-ink mb-3">
            No sources match these filters.
          </p>
          <p className="text-charcoal/70 leading-relaxed mb-4">
            Try adjusting or clearing the filter selections above.
          </p>
          <button
            type="button"
            onClick={clearAllFilters}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-trust hover:text-trust/80 underline underline-offset-2 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-trust/50 focus-visible:ring-offset-2 rounded-sm min-h-[44px]"
          >
            Clear all filters
          </button>
        </div>
      ) : (
        <div className="space-y-4 mb-10">
          {filteredSources.map((source) => (
            <div
              key={source.id}
              className="border border-border/60 rounded-lg p-5 bg-paper"
            >
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <Badge variant="neutral">
                  {SOURCE_TYPE_LABELS[source.sourceType]}
                </Badge>
                {source.documentType && (
                  <span className="font-mono text-[11px] text-charcoal/50">
                    {source.documentType}
                  </span>
                )}
                <Badge
                  variant={
                    source.status === "active"
                      ? "info"
                      : source.status === "broken"
                        ? "alert"
                        : source.status === "superseded"
                          ? "warning"
                          : "neutral"
                  }
                >
                  {SOURCE_STATUS_LABELS[source.status]}
                </Badge>
                {source.official && (
                  <span className="font-mono text-[10px] text-charcoal/40 uppercase">
                    Official record
                  </span>
                )}
              </div>

              <h3 className="font-serif text-lg font-semibold text-ink mb-1.5">
                <Link
                  to={`/sources/${source.slug}`}
                  className="text-ink hover:text-trust/80 underline underline-offset-2 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-trust/50 focus-visible:ring-offset-2 rounded-sm"
                >
                  {source.title}
                </Link>
              </h3>

              <p className="text-sm text-charcoal/70 mb-2">
                {source.publisher}
                {source.jurisdiction && (
                  <span className="text-charcoal/50">
                    {" — "}{source.jurisdiction}
                  </span>
                )}
              </p>

              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-charcoal/50 mb-2">
                {source.publicationDate && (
                  <span>Published: {source.publicationDate}</span>
                )}
                <span>Accessed: {source.accessedAt}</span>
                {source.language && (
                  <span className="uppercase">Lang: {source.language}</span>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs">
                <ExternalLink href={source.url} showIcon>
                  Original source
                </ExternalLink>
                {source.archiveUrl && (
                  <ExternalLink href={source.archiveUrl} showIcon>
                    Archived version
                  </ExternalLink>
                )}
                <Link
                  to={`/sources/${source.slug}`}
                  className="text-trust hover:text-trust/80 underline underline-offset-2 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-trust/50 focus-visible:ring-offset-2 rounded-sm"
                >
                  View details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Broken/archived/superseded explanation */}
      <PolicySection title="Source statuses" id="source-statuses" delay={0.50}>
        <p>
          Every source record has a status indicating whether the original URL
          is accessible and whether the source has been superseded.
        </p>
        <ul className="space-y-2 mt-3">
          <li className="flex items-start gap-2">
            <span className="text-clay mt-1.5" aria-hidden="true">•</span>
            <span>
              <strong>Active:</strong> The original URL resolves and the source
              is current. Checked on the access date shown.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-clay mt-1.5" aria-hidden="true">•</span>
            <span>
              <strong>Broken link:</strong> The original URL no longer
              resolves. An archive URL is provided where available. Report
              broken links through the corrections process.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-clay mt-1.5" aria-hidden="true">•</span>
            <span>
              <strong>Archived:</strong> The source is accessible only through
              an archive. The original may have been removed or relocated.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-clay mt-1.5" aria-hidden="true">•</span>
            <span>
              <strong>Superseded:</strong> The source has been replaced by a
              newer version, official record, or corrected document. The
              superseding source is linked where available.
            </span>
          </li>
        </ul>
      </PolicySection>

      {/* Methodology and corrections links */}
      <PolicySection title="How sources are used" id="how-sources-are-used" delay={0.53}>
        <p>
          Sources listed in this registry are referenced by evidence records,
          legal case entries, country accountability pages, and action
          templates throughout the platform. When a source is cited on another
          page, it links back to its entry in this registry.
        </p>
        <p>
          For details on how sources are evaluated, categorised, and assigned
          verification levels, see the{" "}
          <Link
            to="/methodology"
            className="text-trust hover:text-trust/80 underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-trust/50 focus-visible:ring-offset-2 rounded-sm"
          >
            Methodology
          </Link>
          .
        </p>
        <p>
          To report a broken link, suggest an additional source, or correct
          source metadata, use the{" "}
          <Link
            to="/corrections"
            className="text-trust hover:text-trust/80 underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-trust/50 focus-visible:ring-offset-2 rounded-sm"
          >
            corrections process
          </Link>
          .
        </p>
      </PolicySection>

      <CorrectionLink />
      <LastUpdated date="2026-07-13" />
    </Container>
  );
}
