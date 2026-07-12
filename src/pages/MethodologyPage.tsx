import { Link } from "react-router-dom";
import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import { Badge } from "../components/ui/Badge";
import { Button, ArrowIcon } from "../components/ui/Button";
import { PageIntro } from "../components/pages/PageIntro";
import { PageStatusNotice } from "../components/pages/PageStatusNotice";
import { PolicySection } from "../components/pages/PolicySection";
import { LastUpdated } from "../components/pages/LastUpdated";

const sourceTiers = [
  {
    tier: "1",
    label: "Court records and official legal filings",
    variant: "info" as const,
  },
  {
    tier: "2",
    label: "UN documents and official humanitarian updates",
    variant: "info" as const,
  },
  {
    tier: "3",
    label: "ICRC / Red Cross / Red Crescent and major humanitarian organizations",
    variant: "info" as const,
  },
  {
    tier: "4",
    label: "Established human-rights organizations",
    variant: "neutral" as const,
  },
  {
    tier: "5",
    label: "Investigative journalism and OSINT groups",
    variant: "neutral" as const,
  },
  {
    tier: "6",
    label: "Academic research",
    variant: "neutral" as const,
  },
  {
    tier: "7",
    label: "Public social media leads, only as leads until verified",
    variant: "warning" as const,
  },
];

const verificationLevels = [
  { level: "0", label: "Unreviewed lead", desc: "Raw information that has not yet been reviewed by the platform." },
  { level: "1", label: "Preserved lead", desc: "Information that has been saved for review but not yet checked against sources." },
  { level: "2", label: "Source checked", desc: "Information verified against at least one documented public source." },
  { level: "3", label: "Corroborated", desc: "Information confirmed by multiple independent sources or documentation types." },
  { level: "4", label: "Trusted organization verified", desc: "Information verified by an established human-rights, legal, or humanitarian organization." },
  { level: "5", label: "Legal/institutional record", desc: "Official court record, UN document, or formal institutional finding." },
];

const legalLabels = [
  "Court proceeding active",
  "Provisional measures issued",
  "Arrest warrant issued",
  "Allegation under investigation",
  "NGO legal determination",
  "UN finding",
  "Not yet judicially determined",
  "Contested claim",
  "Requires further verification",
];

const notActiveItems = [
  "No witness submissions",
  "No evidence uploads",
  "No live map",
  "No country scoring",
  "No public user accounts",
  "No direct fundraising",
  "No automated email sending",
];

export function MethodologyPage() {
  return (
    <div className="py-24 lg:py-32">
      <Container>
        <div className="max-w-3xl mx-auto">
          <PageIntro
            eyebrow="Methodology"
            title="How Accountability Atlas works with evidence."
            description="The methodology explains how the platform separates sources, leads, allegations, legal findings, humanitarian reporting, advocacy language, and reviewed public evidence."
          />

          <PageStatusNotice label="Active draft" variant="warning">
            <p>
              This methodology is an active draft and will be updated as the
              platform develops through the public static beta. The full
              versioned methodology is also published in the project repository.
            </p>
          </PageStatusNotice>

          {/* 1. Mission and scope */}
          <PolicySection title="Mission and scope" id="mission-scope" delay={0.15}>
            <p>
              Accountability Atlas is being built to organize verified public
              evidence, legal and humanitarian sources, country accountability
              information, and lawful action pathways.
            </p>
            <p>
              The platform begins with Gaza and the wider regional humanitarian
              crisis. The structure is intended to become reusable for other
              mass-atrocity and humanitarian-crisis contexts after local, legal,
              and security review.
            </p>
          </PolicySection>

          {/* 2. Source hierarchy */}
          <PolicySection title="Source hierarchy" id="source-hierarchy" delay={0.18}>
            <p>
              Sources are organized in a structured hierarchy — not all sources
              carry the same weight. The platform separates court records from
              advocacy reports, UN findings from news coverage, and verified
              documentation from unverified leads.
            </p>
            <div className="space-y-2 mt-4">
              {sourceTiers.map((tier) => (
                <div
                  key={tier.tier}
                  className="flex items-start gap-3 bg-bone border border-border rounded-md p-4"
                >
                  <span className="font-mono text-xs font-medium text-charcoal/40 w-5 flex-shrink-0 mt-0.5">
                    {tier.tier}
                  </span>
                  <Badge variant={tier.variant}>{tier.label}</Badge>
                </div>
              ))}
            </div>
          </PolicySection>

          {/* 3. Verification levels */}
          <PolicySection title="Verification levels" id="verification-levels" delay={0.21}>
            <p>
              Every piece of evidence is assigned a verification level. This
              system is part of the platform identity — it tells readers exactly
              how confident we are in each source.
            </p>
            <div className="space-y-3 mt-4">
              {verificationLevels.map((vl) => (
                <div
                  key={vl.level}
                  className="bg-bone border border-border rounded-md p-5"
                >
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-mono text-sm font-medium text-charcoal/50">
                      Level {vl.level}
                    </span>
                    <span className="font-serif text-lg font-semibold text-ink">
                      {vl.label}
                    </span>
                  </div>
                  <p className="text-sm text-charcoal/70 leading-relaxed pl-0">
                    {vl.desc}
                  </p>
                </div>
              ))}
            </div>
            <div className="bg-bone border border-amber/20 rounded-md p-5 mt-4">
              <p className="text-base text-charcoal/75 leading-relaxed">
                <strong>Important:</strong> Social media is never automatically
                treated as verified proof. It may help discover events, preserve
                leads, or guide further research, but publication requires
                context, corroboration, and safety review.
              </p>
            </div>
          </PolicySection>

          {/* 4. Legal terminology policy */}
          <PolicySection title="Legal terminology policy" id="legal-terms" delay={0.24}>
            <p>
              The platform distinguishes between allegations, investigations,
              NGO determinations, UN findings, court filings, provisional
              measures, warrants, rulings, and final judgments.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {legalLabels.map((label) => (
                <Badge key={label} variant="neutral">
                  {label}
                </Badge>
              ))}
            </div>
          </PolicySection>

          {/* 5. Genocide terminology policy */}
          <PolicySection title="Genocide terminology policy" id="genocide-terms" delay={0.27}>
            <p>
              The word <em>genocide</em> may be used when attributed to legal
              proceedings, court filings, UN or NGO findings, or named
              expert/legal determinations. The platform must not imply a final
              judicial determination where one has not occurred.
            </p>
          </PolicySection>

          {/* 6. Protection before publication */}
          <PolicySection title="Protection before publication" id="protection" delay={0.30}>
            <p>
              The platform will not publish private personal details, sensitive
              witness material, exact dangerous locations, or content that
              exposes vulnerable people without review.
            </p>
          </PolicySection>

          {/* 7. Corrections */}
          <PolicySection title="Corrections" id="corrections" delay={0.33}>
            <p>
              Corrections are part of the trust model. If a page is inaccurate,
              outdated, unsafe, mistranslated, or misleading, users should be
              able to report it.
            </p>
            <p>
              <Link
                to="/corrections"
                className="text-trust hover:text-trust/80 underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-trust/50 focus-visible:ring-offset-2 rounded-sm transition-colors duration-200"
              >
                Read the corrections process →
              </Link>
            </p>
          </PolicySection>

          {/* 8. What is not active yet */}
          <PolicySection title="What is not active yet" id="not-active" delay={0.36}>
            <ul className="space-y-2">
              {notActiveItems.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-clay mt-1.5" aria-hidden="true">
                    •
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </PolicySection>

          {/* Links */}
          <Reveal delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-border mt-10">
              <Button
                href="https://github.com/nuttyproducer/accountability-atlas/blob/main/docs/methodology.md"
                variant="secondary"
                external
              >
                Full Methodology on GitHub
              </Button>
              <Button to="/" variant="ghost" icon={<ArrowIcon />}>
                Back home
              </Button>
            </div>
          </Reveal>

          <LastUpdated date="2026-07-10" />
        </div>
      </Container>
    </div>
  );
}
