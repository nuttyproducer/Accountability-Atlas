import { Link } from "react-router-dom";
import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import { Card } from "../components/ui/Card";
import { PageIntro } from "../components/pages/PageIntro";
import { PageStatusNotice } from "../components/pages/PageStatusNotice";
import { PolicySection } from "../components/pages/PolicySection";
import { LastUpdated } from "../components/pages/LastUpdated";
import { PreviewNotice } from "../components/pages/PreviewNotice";
import { CorrectionLink } from "../components/pages/CorrectionLink";
import { LegalStatusBadge } from "../components/pages/LegalStatusBadge";
import { VerificationBadge } from "../components/pages/VerificationBadge";
import { SourceList } from "../components/pages/SourceList";
import { legalCases } from "../data/legalCases";
import { sources } from "../data/sources";
import type { LegalStatus } from "../types/content";

const statusExplanations: { status: LegalStatus; explanation: string }[] = [
  {
    status: "court_proceeding_active",
    explanation:
      "A case is actively pending before a court or tribunal. Procedural steps — hearings, filings, deliberations — are ongoing.",
  },
  {
    status: "provisional_measures_issued",
    explanation:
      "A court has issued binding provisional (interim) measures before reaching a final judgment. These measures aim to preserve rights and prevent irreparable harm during proceedings.",
  },
  {
    status: "arrest_warrant_issued",
    explanation:
      "A court has issued an arrest warrant. Warrants are subject to judicial review processes. All persons are presumed innocent until proven guilty.",
  },
  {
    status: "allegation_under_investigation",
    explanation:
      "An allegation has been made and is under formal investigation by a competent body. No determination has been reached.",
  },
  {
    status: "un_finding",
    explanation:
      "A United Nations body — such as a Commission of Inquiry, Human Rights Council mechanism, or Special Rapporteur — has published findings. UN findings are fact-finding outputs, not judicial rulings.",
  },
  {
    status: "ngo_legal_determination",
    explanation:
      "An established non-governmental organization with relevant legal expertise has published a determination based on documented evidence and legal analysis.",
  },
  {
    status: "not_judicially_determined",
    explanation:
      "The matter has not been determined by a court or tribunal. It may be under investigation, subject to public reporting, or categorized for future tracking.",
  },
  {
    status: "contested_claim",
    explanation:
      "The claim is contested by one or more parties or credible sources. The platform flags contested status to avoid presenting one-sided accounts as settled.",
  },
  {
    status: "requires_further_verification",
    explanation:
      "The information has been recorded but requires additional source verification before it can be upgraded to a higher verification level.",
  },
];

function getSourceById(id: string) {
  return sources.find((s) => s.id === id);
}

export default function LegalTrackerPage() {
  return (
    <Container className="py-16 lg:py-20">
      <PageIntro
        eyebrow="Accountability System"
        title="Legal Tracker"
        description="Follow court proceedings, investigations, warrants, UN findings, and procedural milestones. Uses consistent legal status labels. Currently a static preview with limited representative entries."
      />

      <PageStatusNotice title="Static preview" variant="info">
        <p>
          The legal tracker contains a limited number of representative case
          entries for structural demonstration. Legal status labels are based on
          publicly reported proceedings. This is not a comprehensive or
          real-time legal database.
        </p>
      </PageStatusNotice>

      {/* 1. How This Tracker Works */}
      <PolicySection title="How This Tracker Works" id="how-it-works" delay={0.15}>
        <p>
          Each case is displayed as a card showing the institution, procedural
          status, legal status labels, linked sources, and review metadata.
          Legal status labels use a consistent vocabulary drawn from the{" "}
          <Link
            to="/methodology"
            className="text-trust hover:text-trust/80 underline underline-offset-2"
          >
            Methodology
          </Link>
          .
        </p>
        <p>
          Sources are linked where publicly available. Every case entry
          indicates its review status — static preview, source pending, or legal
          wording review needed — so readers know what has been editorially
          reviewed and what has not.
        </p>
        <p>
          This tracker does not make legal interpretations. It reports publicly
          available procedural information and links to primary source
          documents.
        </p>
      </PolicySection>

      {/* 2. Case Cards */}
      <PolicySection title="Representative Case Entries" id="cases" delay={0.18}>
        <p>
          The following entries demonstrate how the tracker will display legal
          cases, source documents, legal status labels, and review metadata.
          These are structural examples based on publicly reported proceedings.
        </p>
      </PolicySection>

      <div className="space-y-8 mb-10">
        {legalCases.map((entry, i) => {
          const entrySources = entry.sourceIds
            .map(getSourceById)
            .filter(Boolean) as typeof sources;

          return (
            <Reveal key={entry.id} delay={0.2 + i * 0.08}>
              <Card
                accent={i === 0 ? "amber" : i === 1 ? "clay" : "blue"}
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

                <div className="flex flex-wrap gap-2 mb-4">
                  {entry.legalStatuses.map((ls) => (
                    <LegalStatusBadge key={ls} status={ls} />
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <VerificationBadge level={5} showPrefix={false} />
                  <span className="text-xs text-charcoal/50 font-mono uppercase">
                    Source pending
                  </span>
                  <span className="text-xs text-charcoal/50 font-mono uppercase">
                    Legal wording review needed
                  </span>
                </div>

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
        })}
      </div>

      {/* 3. How to Read Legal Status Labels */}
      <PolicySection
        title="How to Read Legal Status Labels"
        id="status-labels"
        delay={0.30}
      >
        <p>
          Every legal status label used on the platform has a defined meaning.
          Labels are applied conservatively — when in doubt, the platform uses
          "not yet judicially determined" or "requires further verification"
          rather than implying certainty.
        </p>
      </PolicySection>

      <div className="space-y-4 mb-10">
        {statusExplanations.map((item, i) => (
          <Reveal key={item.status} delay={0.32 + i * 0.03}>
            <div className="flex flex-col sm:flex-row sm:items-start gap-3 border-b border-border/50 pb-4">
              <div className="sm:w-52 flex-shrink-0">
                <LegalStatusBadge status={item.status} />
              </div>
              <p className="text-sm text-charcoal/80 leading-relaxed">
                {item.explanation}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* 4. Tracker Limitations */}
      <PolicySection title="Tracker Limitations" id="limitations" delay={0.40}>
        <p>
          <strong>Not comprehensive:</strong> The tracker does not and cannot
          list every legal case, filing, or procedural event. It presents
          representative entries selected for their relevance to the
          platform&rsquo;s accountability framework.
        </p>
        <p>
          <strong>Not real-time:</strong> Entries are updated on a periodic
          basis, not in real time. Dates indicate when information was last
          reviewed by the platform, not when court events occurred.
        </p>
        <p>
          <strong>Not legal advice:</strong> The platform does not provide legal
          advice, legal representation, or legal opinions. Case summaries are
          informational only and should not be relied upon for legal decisions.
        </p>
        <p>
          <strong>Source dependent:</strong> All entries are limited by the
          availability and quality of public source documents. If source URLs
          become unavailable, entries are marked accordingly.
        </p>
      </PolicySection>

      {/* 5. Related Pages */}
      <PolicySection title="Related Pages" id="related" delay={0.43}>
        <ul className="space-y-3">
          <li>
            <Link
              to="/methodology"
              className="text-trust hover:text-trust/80 underline underline-offset-2"
            >
              Methodology
            </Link>
            {" — "}How sources are evaluated, verified, and labelled.
          </li>
          <li>
            <Link
              to="/gaza-dossier"
              className="text-trust hover:text-trust/80 underline underline-offset-2"
            >
              Gaza Dossier
            </Link>
            {" — "}The humanitarian and legal framework connected to these cases.
          </li>
          <li>
            <Link
              to="/corrections"
              className="text-trust hover:text-trust/80 underline underline-offset-2"
            >
              Corrections
            </Link>
            {" — "}How to request a correction to legal tracker entries.
          </li>
        </ul>
      </PolicySection>

      <PreviewNotice title="This tracker is a static preview">
        The legal tracker contains representative structural entries only.
        Source documents are linked where publicly available. All entries
        require legal wording review before they can be treated as reviewed
        content.
      </PreviewNotice>

      <CorrectionLink />
      <LastUpdated date="2026-07-10" />
    </Container>
  );
}
