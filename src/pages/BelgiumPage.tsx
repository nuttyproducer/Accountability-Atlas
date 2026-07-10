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
import { belgiumSections } from "../data/countries";
import { CONTENT_STATUS_LABELS } from "../types/content";

export default function BelgiumPage() {
  return (
    <Container className="py-16 lg:py-20">
      <PageIntro
        eyebrow="Country Accountability"
        title="Belgium"
        description="A structural preview of the country accountability page for Belgium. Explains what this page will track, why Belgium matters as the first country page, and the competency framework. Content is under review; no scores or final policy conclusions are published."
      />

      <PageStatusNotice title="Content under review" variant="warning">
        <p>
          This page structure describes the accountability areas the platform
          will track for Belgium. Government positions, voting records, and
          policy summaries will be added after expert review. No accountability
          scores are published.
        </p>
      </PageStatusNotice>

      {/* Competency caution */}
      <Reveal delay={0.12}>
        <div
          className="bg-bone border border-amber/30 rounded-lg p-5 mb-10"
          role="note"
        >
          <div className="flex items-start gap-3">
            <Badge variant="warning">Competency note</Badge>
            <p className="text-sm text-charcoal/80 leading-relaxed">
              Belgium hosts EU institutions and NATO headquarters in Brussels.
              This page tracks Belgian federal and regional government
              positions, not EU or NATO decisions. Belgium does not control
              those institutions. The{" "}
              <Link
                to="/institutions/european-union"
                className="text-trust hover:text-trust/80 underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-trust/50 focus-visible:ring-offset-2 rounded-sm"
              >
                European Union institution page
              </Link>{" "}
              separately tracks EU-level mechanisms.
            </p>
          </div>
        </div>
      </Reveal>

      {/* 1. Why Belgium */}
      <PolicySection title="Why Belgium" id="why-belgium" delay={0.15}>
        <p>
          Belgium is the first country accountability page because of its
          distinctive role in international accountability infrastructure.
          Brussels hosts the EU institutions and NATO headquarters. Belgium is a
          State Party to the Rome Statute of the ICC and the Genocide
          Convention. Its federal structure — with foreign policy at the federal
          level and arms-export licensing involving regional governments —
          creates specific accountability pathways worth tracking.
        </p>
        <p>
          This page is a structural skeleton. It explains what information the
          platform intends to track and why each area matters for
          accountability. Content is added only after sourcing and review.
        </p>
      </PolicySection>

      {/* 2. What This Page Will Track */}
      <PolicySection
        title="What This Page Will Track"
        id="tracking-areas"
        delay={0.18}
      >
        <p>
          Each card below represents a future tracking area. Cards labelled
          &ldquo;Content under review&rdquo; or &ldquo;Source pending&rdquo;
          describe areas where the platform needs expert input before publishing
          substantive content.
        </p>
      </PolicySection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {belgiumSections.map((section, i) => (
          <Reveal key={section.id} delay={0.2 + i * 0.05}>
            <Card
              title={section.title}
              accent={
                section.status === "static_preview"
                  ? "blue"
                  : section.status === "review_pending"
                    ? "amber"
                    : "clay"
              }
            >
              <p className="text-charcoal/80 leading-relaxed mb-3">
                {section.description}
              </p>
              <Badge
                variant={
                  section.status === "static_preview"
                    ? "info"
                    : section.status === "review_pending"
                      ? "warning"
                      : "neutral"
                }
              >
                {section.statusLabel || CONTENT_STATUS_LABELS[section.status]}
              </Badge>
            </Card>
          </Reveal>
        ))}
      </div>

      {/* 3. Sources and Corrections */}
      <PolicySection
        title="Sources and Corrections"
        id="sources"
        delay={0.35}
      >
        <p>
          When substantive content is added to this page, every claim will be
          linked to a specific source record with a publication date, publisher,
          and access date. Sources will be categorized by type (court, UN,
          government, humanitarian, NGO, academic, journalism, OSINT) and
          assigned a verification level.
        </p>
        <p>
          Belgium-specific content will require review by contributors familiar
          with Belgian federal and regional governance, EU institutional
          processes, and international humanitarian law. If you have relevant
          expertise, see{" "}
          <Link
            to="/contribute"
            className="text-trust hover:text-trust/80 underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-trust/50 focus-visible:ring-offset-2 rounded-sm"
          >
            how to contribute
          </Link>
          .
        </p>
        <p>
          Corrections to this page structure or to future substantive content
          are welcome through the{" "}
          <Link
            to="/corrections"
            className="text-trust hover:text-trust/80 underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-trust/50 focus-visible:ring-offset-2 rounded-sm"
          >
            corrections process
          </Link>
          .
        </p>
      </PolicySection>

      <PreviewNotice title="This page is a structural skeleton">
        Belgium page content is under development. Section descriptions explain
        what the platform intends to track. Government positions, voting
        records, and policy summaries are not yet published.
      </PreviewNotice>

      <CorrectionLink />
      <LastUpdated date="2026-07-10" />
    </Container>
  );
}
