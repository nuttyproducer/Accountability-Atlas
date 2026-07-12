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
  organizationRecords,
  getOrganizationsByCategory,
  ORGANIZATION_CATEGORIES,
} from "../data/organizations";
import { CONTENT_STATUS_LABELS } from "../types/content";

const organizationsByCategory = getOrganizationsByCategory();

export default function OrganizationsPage() {
  return (
    <Container className="py-16 lg:py-20">
      <PageIntro
        eyebrow="Public Resource Directory"
        title="Organizations"
        description="A directory of humanitarian, legal, documentation, medical, research, and press-freedom organisations whose public work is relevant to the accountability contexts this platform covers. Every listing links to the organisation's own public website."
      />

      <PageStatusNotice title="Public resources only" variant="info">
        <p>
          This directory lists organisations as public resources. Listing does
          not imply partnership, endorsement, approval, affiliation, or any
          formal relationship with Accountability Atlas. Organisations listed
          here have not requested inclusion and may not be aware of it.
        </p>
      </PageStatusNotice>

      {/* How listings work */}
      <PolicySection title="How listings work" id="how-listings-work" delay={0.15}>
        <p>
          Every organisation is linked to its official public website. The
          short description summarises the organisation&rsquo;s publicly stated
          mission and activities, drawn from its own published materials.
          Categories describe the primary function, not the entirety of an
          organisation&rsquo;s work.
        </p>
        <p>
          During the static beta, organisations are listed when their work is
          clearly relevant to the humanitarian and accountability contexts the
          platform covers. The directory will expand as additional categories
          and regions are reviewed. Organisations are not ranked, scored, or
          compared.
        </p>
        <ul className="space-y-2 mt-3">
          <li className="flex items-start gap-2">
            <span className="text-clay mt-1.5" aria-hidden="true">•</span>
            <span>
              <strong>Official websites only.</strong> Every link goes to the
              organisation&rsquo;s own domain. No third-party profiles or
              intermediary pages are used.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-clay mt-1.5" aria-hidden="true">•</span>
            <span>
              <strong>No logos.</strong> Logos are not reproduced without
              clear permission.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-clay mt-1.5" aria-hidden="true">•</span>
            <span>
              <strong>No private contact information.</strong> Only public
              websites and official donation pages are linked.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-clay mt-1.5" aria-hidden="true">•</span>
            <span>
              <strong>No staff details.</strong> Individual staff, board, or
              expert names are not scraped or published.
            </span>
          </li>
        </ul>
      </PolicySection>

      {/* Category-grouped organisation cards */}
      {ORGANIZATION_CATEGORIES.map((category, catIdx) => {
        const orgs = organizationsByCategory[category];
        if (!orgs || orgs.length === 0) return null;

        return (
          <section key={category} aria-labelledby={`cat-${category}`}>
            <Reveal delay={0.18 + catIdx * 0.04}>
              <h2
                id={`cat-${category}`}
                className="font-serif text-2xl font-semibold text-ink mb-5 mt-12 first:mt-0"
              >
                {category}
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              {orgs.map((org, i) => (
                <Reveal key={org.id} delay={0.2 + catIdx * 0.04 + i * 0.05}>
                  <Card
                    title={org.name}
                    accent={
                      org.contentStatus === "reviewed"
                        ? "blue"
                        : org.contentStatus === "review_pending"
                          ? "amber"
                          : "clay"
                    }
                  >
                    {/* Category + regions */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <Badge variant="neutral">{category}</Badge>
                      {org.regions.slice(0, 2).map((r) => (
                        <span
                          key={r}
                          className="font-mono text-[11px] text-charcoal/50"
                        >
                          {r}
                        </span>
                      ))}
                      {org.regions.length > 2 && (
                        <span className="font-mono text-[11px] text-charcoal/40">
                          +{org.regions.length - 2}
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-charcoal/80 leading-relaxed mb-3">
                      {org.shortDescription}
                    </p>

                    {/* Services */}
                    {org.services && org.services.length > 0 && (
                      <div className="mb-3">
                        <p className="font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-charcoal/45 mb-1.5">
                          Services
                        </p>
                        <ul className="space-y-1">
                          {org.services.map((s) => (
                            <li
                              key={s}
                              className="flex items-start gap-1.5 text-sm text-charcoal/70"
                            >
                              <span
                                className="text-charcoal/30 mt-1 flex-shrink-0"
                                aria-hidden="true"
                              >
                                •
                              </span>
                              {s}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Links */}
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 mt-4 pt-4 border-t border-border">
                      <ExternalLink href={org.officialWebsite}>
                        Official website
                      </ExternalLink>
                      {org.officialDonationUrl && (
                        <ExternalLink href={org.officialDonationUrl}>
                          Official donation page
                        </ExternalLink>
                      )}
                    </div>

                    {/* Status row */}
                    <div className="flex flex-wrap items-center gap-2 mt-4">
                      <Badge variant="neutral">Public resource</Badge>
                      <Badge
                        variant={
                          org.contentStatus === "reviewed"
                            ? "info"
                            : org.contentStatus === "review_pending"
                              ? "warning"
                              : "neutral"
                        }
                      >
                        {CONTENT_STATUS_LABELS[org.contentStatus]}
                      </Badge>
                      {org.lastReviewedAt && (
                        <span className="font-mono text-[11px] text-charcoal/45">
                          Last reviewed: {org.lastReviewedAt}
                        </span>
                      )}
                    </div>

                    {/* Correction link */}
                    <p className="mt-3 text-sm text-charcoal/50">
                      <Link
                        to="/corrections"
                        className="text-trust hover:text-trust/80 underline underline-offset-2 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-trust/50 focus-visible:ring-offset-2 rounded-sm"
                      >
                        Is this listing inaccurate or out of date?
                      </Link>
                    </p>
                  </Card>
                </Reveal>
              ))}
            </div>
          </section>
        );
      })}

      {/* Relationship status explanation */}
      <PolicySection
        title="What &ldquo;public resource&rdquo; means"
        id="relationship-status"
        delay={0.55}
      >
        <p>
          Every organisation in this directory is listed as a public resource.
          This means the organisation&rsquo;s publicly available work — its
          published reports, data, statements, and services — is potentially
          useful to people researching or engaging with accountability
          contexts.
        </p>
        <p>
          It does <strong>not</strong> mean:
        </p>
        <ul className="space-y-2 mt-2">
          <li className="flex items-start gap-2">
            <span className="text-clay mt-1.5" aria-hidden="true">•</span>
            <span>The organisation endorses or partners with this platform.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-clay mt-1.5" aria-hidden="true">•</span>
            <span>The organisation has reviewed or approved its listing.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-clay mt-1.5" aria-hidden="true">•</span>
            <span>The organisation shares this platform&rsquo;s views or analysis.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-clay mt-1.5" aria-hidden="true">•</span>
            <span>Accountability Atlas speaks for or represents the organisation.</span>
          </li>
        </ul>
      </PolicySection>

      {/* Donation-link disclaimer */}
      <PolicySection
        title="About donation links"
        id="donation-disclaimer"
        delay={0.58}
      >
        <div className="bg-bone border border-border rounded-md p-5">
          <p className="text-sm text-charcoal/75 leading-relaxed">
            <strong>Donations go directly to the named organisation.</strong>{" "}
            Accountability Atlas does not process, hold, or distribute funds.
            Donation links point to the organisation&rsquo;s own official
            donation page. The platform does not receive any commission,
            referral fee, or benefit from these links. A donation link is not
            an endorsement of every position or action of the organisation.
          </p>
        </div>
      </PolicySection>

      {/* Correction / removal process */}
      <PolicySection
        title="Correction and removal"
        id="correction-removal"
        delay={0.61}
      >
        <p>
          If a listing is inaccurate, out of date, miscategorised, or should
          not appear in this directory, please use the{" "}
          <Link
            to="/corrections"
            className="text-trust hover:text-trust/80 underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-trust/50 focus-visible:ring-offset-2 rounded-sm"
          >
            corrections process
          </Link>
          . Organisations can request removal at any time — no justification is
          required. Removals are processed promptly during the static beta.
        </p>
      </PolicySection>

      {/* Contributor / reviewer request */}
      <PolicySection
        title="Help expand this directory"
        id="contributor-request"
        delay={0.64}
      >
        <p>
          During the static beta, the directory is maintained by a small team.
          If you have expertise in humanitarian, legal, medical, human-rights,
          or press-freedom organisations — and can help review or suggest
          additional listings — please see{" "}
          <Link
            to="/contribute"
            className="text-trust hover:text-trust/80 underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-trust/50 focus-visible:ring-offset-2 rounded-sm"
          >
            how to contribute
          </Link>
          .
        </p>
      </PolicySection>

      <PreviewNotice title="This directory is a static preview">
        The organisation directory lists a small, carefully selected sample of
        public resources relevant to the accountability contexts the platform
        covers. The directory will expand as additional categories, regions,
        and organisations are reviewed. Corrections and suggestions are welcome.
      </PreviewNotice>

      <CorrectionLink />
      <LastUpdated date="2026-07-12" />
    </Container>
  );
}
