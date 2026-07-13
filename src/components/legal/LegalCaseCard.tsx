import { Reveal } from "../ui/Reveal";
import { Card } from "../ui/Card";
import { LegalStatusBadge } from "../pages/LegalStatusBadge";
import { VerificationBadge } from "../pages/VerificationBadge";
import { ContentStatusBadge } from "../pages/ContentStatusBadge";
import { SourceList } from "../pages/SourceList";
import { sources } from "../../data/sources";
import type { LegalCaseEntry } from "../../data/legalCases";

/** Resolve a source ID to its record. */
export function getSourceById(id: string) {
  return sources.find((s) => s.id === id);
}

interface LegalCaseCardProps {
  entry: LegalCaseEntry;
  index: number;
}

export function LegalCaseCard({ entry, index }: LegalCaseCardProps) {
  const entrySources = entry.sourceIds
    .map(getSourceById)
    .filter(Boolean) as typeof sources;

  const accent = index === 0 ? "amber" as const : index === 1 ? "clay" as const : "blue" as const;

  return (
    <Reveal delay={0.2 + index * 0.08}>
      <Card
        accent={accent}
        title={entry.title}
        label={entry.institution}
      >
        <p className="text-charcoal/80 leading-relaxed mb-4">
          {entry.summary}
        </p>

        {entry.proceduralNote && (
          <p className="text-sm text-charcoal/60 italic mb-4">
            {entry.proceduralNote}
          </p>
        )}

        {/* Legal status */}
        <div className="mb-4">
          <h4 className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-charcoal/50 mb-2">
            Legal status
          </h4>
          <div className="flex flex-wrap gap-2">
            {entry.legalStatuses.map((ls) => (
              <LegalStatusBadge key={ls} status={ls} />
            ))}
          </div>
        </div>

        {/* Source quality */}
        <div className="mb-4">
          <h4 className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-charcoal/50 mb-2">
            Source quality
          </h4>
          <div className="flex flex-wrap items-center gap-2">
            <VerificationBadge level={entry.sourceQuality} showPrefix />
          </div>
        </div>

        {/* Editorial status */}
        <div className="mb-4">
          <h4 className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-charcoal/50 mb-2">
            Editorial status
          </h4>
          <div className="flex flex-wrap items-center gap-2">
            <ContentStatusBadge status={entry.contentStatus} />
            {entry.lastReviewedAt && (
              <span className="text-xs text-charcoal/50 font-mono">
                Checked: {entry.lastReviewedAt}
              </span>
            )}
            {entry.version > 0 && (
              <span className="text-xs text-charcoal/50 font-mono">
                v{entry.version}
              </span>
            )}
            {entry.reviewedByRole && (
              <span className="text-xs text-charcoal/50">
                {entry.reviewedByRole}
              </span>
            )}
          </div>
        </div>

        {/* Sources */}
        {entrySources.length > 0 && (
          <SourceList
            sources={entrySources}
            title="Linked sources"
            emptyMessage="Source documents not yet linked."
          />
        )}
      </Card>
    </Reveal>
  );
}
