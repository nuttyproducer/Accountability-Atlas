import { useState, useCallback } from "react";
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
  getActiveTemplates,
  ACTION_TYPE_LABELS,
  type ActionTemplate,
} from "../data/actionTemplates";
import { CONTENT_STATUS_LABELS } from "../types/content";

const activeTemplates = getActiveTemplates();

/** Accessible copy-to-clipboard button for template text only. */
function CopyButton({ text, label }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Clipboard API not available — silently fail; the text is still visible for manual selection.
    }
  }, [text]);

  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={handleCopy}
        className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-md border border-ink/20 bg-paper text-ink hover:bg-ink/5 active:scale-[0.98] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-trust/50 focus-visible:ring-offset-2 min-h-[44px]"
        aria-label={label ?? "Copy template text to clipboard"}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <rect
            x="4"
            y="4"
            width="9"
            height="10"
            rx="1"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <path
            d="M3 12V3C3 2.44772 3.44772 2 4 2H10"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
        {copied ? "Copied" : "Copy template"}
      </button>
      <span
        aria-live="polite"
        aria-atomic="true"
        className="font-mono text-xs text-charcoal/50"
      >
        {copied ? "Template text copied to clipboard." : ""}
      </span>
    </div>
  );
}

function ActionCard({ template, index }: { template: ActionTemplate; index: number }) {
  const hasTemplate = !!template.templateBody;

  return (
    <Reveal delay={0.18 + index * 0.06}>
      <Card
        title={template.title}
        accent={
          template.contentStatus === "reviewed"
            ? "blue"
            : template.contentStatus === "review_pending"
              ? "amber"
              : "clay"
        }
      >
        {/* Type + jurisdiction */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <Badge variant="neutral">
            {ACTION_TYPE_LABELS[template.actionType]}
          </Badge>
          <span className="font-mono text-[11px] text-charcoal/50">
            {template.jurisdiction}
          </span>
        </div>

        {/* Purpose */}
        <p className="text-charcoal/80 leading-relaxed mb-3">
          {template.purpose}
        </p>

        {/* What the recipient can do */}
        <div className="bg-bone/70 border border-border/50 rounded-md p-4 mb-4">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-charcoal/45 mb-1.5">
            What the recipient can do
          </p>
          <p className="text-sm text-charcoal/75 leading-relaxed">
            {template.policyAsk}
          </p>
        </div>

        {/* Instructions */}
        <div className="mb-4">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-charcoal/45 mb-1.5">
            How to do this safely
          </p>
          <div className="text-sm text-charcoal/70 leading-relaxed whitespace-pre-line">
            {template.instructions}
          </div>
        </div>

        {/* Template body + copy button */}
        {hasTemplate && (
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-charcoal/45">
                Template text
              </p>
              {template.templateReviewStatus === "draft" && (
                <Badge variant="warning">Draft</Badge>
              )}
              {template.templateReviewStatus === "reviewed" && (
                <Badge variant="info">Reviewed</Badge>
              )}
            </div>
            <pre className="bg-bone/80 border border-border rounded-md p-4 text-sm text-charcoal/75 leading-relaxed whitespace-pre-line font-sans overflow-x-auto max-h-80 overflow-y-auto">
              {template.templateBody}
            </pre>
            <div className="mt-3">
              <CopyButton
                text={template.templateBody ?? ""}
                label={`Copy "${template.title}" template to clipboard`}
              />
            </div>
          </div>
        )}

        {/* Source basis */}
        <p className="text-sm text-charcoal/60 leading-relaxed mb-4">
          <span className="font-medium text-charcoal/70">Legal and policy basis: </span>
          {template.sourceBasis}
        </p>

        {/* Warnings */}
        <div className="bg-amber/5 border border-amber/20 rounded-md p-4 mb-4">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-amber/80 mb-1.5">
            Important warnings
          </p>
          <ul className="space-y-1.5">
            {template.warnings.map((w, i) => (
              <li
                key={i}
                className="flex items-start gap-1.5 text-sm text-charcoal/70"
              >
                <span className="text-amber/60 mt-0.5 flex-shrink-0" aria-hidden="true">
                  !
                </span>
                {w}
              </li>
            ))}
          </ul>
        </div>

        {/* Status + related pages */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <Badge
            variant={
              template.contentStatus === "reviewed"
                ? "info"
                : template.contentStatus === "review_pending"
                  ? "warning"
                  : "neutral"
            }
          >
            {CONTENT_STATUS_LABELS[template.contentStatus]}
          </Badge>
          {template.templateReviewStatus === "draft" && (
            <span className="font-mono text-[11px] text-amber/70">
              Template text not yet reviewed
            </span>
          )}
          {template.lastReviewedAt && (
            <span className="font-mono text-[11px] text-charcoal/45">
              Last reviewed: {template.lastReviewedAt}
            </span>
          )}
        </div>

        {/* Related routes */}
        {template.relatedRoutes.length > 0 && (
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-3 border-t border-border">
            <span className="font-mono text-[11px] text-charcoal/45">
              Related pages:
            </span>
            {template.relatedRoutes.map((route) => (
              <Link
                key={route}
                to={route}
                className="text-sm text-trust hover:text-trust/80 underline underline-offset-2 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-trust/50 focus-visible:ring-offset-2 rounded-sm"
              >
                {route}
              </Link>
            ))}
          </div>
        )}
      </Card>
    </Reveal>
  );
}

export default function ActionHubPage() {
  return (
    <Container className="py-16 lg:py-20">
      <PageIntro
        eyebrow="Action Hub"
        title="Lawful Civic Action Hub"
        description="A structured guide to lawful, calm, evidence-based civic actions. Every action is manual during the static beta — the platform does not send, store, or track anything on your behalf."
      />

      <PageStatusNotice title="Manual actions only — static beta" variant="info">
        <p>
          During the static beta, every action is manual. Copy template text.
          Adapt it. Send it yourself. The platform does not store your messages,
          your identity, or your contact details. No automated sending. No
          recipient tracking. This is a static guide, not an application.
        </p>
      </PageStatusNotice>

      {/* How to use the Action Hub safely */}
      <PolicySection title="How to use the Action Hub safely" id="how-to-use" delay={0.15}>
        <p>
          The Action Hub provides structured guidance and draft template text
          for lawful civic actions. It exists because people often want to act
          but do not know what is effective, what is lawful, or what
          representatives and institutions can actually do.
        </p>
        <ul className="space-y-2 mt-3">
          <li className="flex items-start gap-2">
            <span className="text-clay mt-1.5" aria-hidden="true">•</span>
            <span>
              <strong>Read the whole card.</strong> Every action explains the
              legal and policy basis, what the recipient can realistically do,
              and the safety warnings. Do not skip the warnings.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-clay mt-1.5" aria-hidden="true">•</span>
            <span>
              <strong>Adapt, do not copy-paste blindly.</strong> Draft templates
              are starting points. Personal, specific messages are more
              effective than identical form letters.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-clay mt-1.5" aria-hidden="true">•</span>
            <span>
              <strong>Use your own contact details.</strong> The platform does
              not intermediate your communication. You send messages from your
              own email, contact form, or postal address.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-clay mt-1.5" aria-hidden="true">•</span>
            <span>
              <strong>Be polite, factual, and specific.</strong> Messages that
              are threatening, abusive, or harassing are not lawful civic
              action. They undermine accountability efforts and may be illegal.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-clay mt-1.5" aria-hidden="true">•</span>
            <span>
              <strong>Reference public sources.</strong> Where possible, cite
              specific public documents — UN reports, court filings, official
              statements, or verified humanitarian updates. This strengthens
              your message and makes it harder to dismiss.
            </span>
          </li>
        </ul>
      </PolicySection>

      {/* Action cards */}
      <section aria-labelledby="action-cards-heading">
        <h2
          id="action-cards-heading"
          className="font-serif text-2xl font-semibold text-ink mb-5 mt-6"
        >
          Available actions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          {activeTemplates.map((template, i) => (
            <ActionCard key={template.id} template={template} index={i} />
          ))}
        </div>
      </section>

      {/* Detailed safe-action rules */}
      <PolicySection title="Safe-action rules" id="safe-action-rules" delay={0.55}>
        <p>
          Every action listed on this page must meet the following rules.
          Actions that do not meet them will not be published.
        </p>
        <ul className="space-y-2 mt-3">
          <li className="flex items-start gap-2">
            <span className="text-clay mt-1.5" aria-hidden="true">•</span>
            <span>
              <strong>Lawful only.</strong> Actions must be legal in the
              relevant jurisdiction. No encouragement of unlawful activity,
              civil disobedience, or sanctions violations.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-clay mt-1.5" aria-hidden="true">•</span>
            <span>
              <strong>No harassment or threats.</strong> Template text must not
              contain abusive, harassing, threatening, or intimidating language.
              Templates must be polite and factual.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-clay mt-1.5" aria-hidden="true">•</span>
            <span>
              <strong>No mass targeting.</strong> Templates are designed for
              individual, considered communication — not mass mail-merge or spam
              campaigns.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-clay mt-1.5" aria-hidden="true">•</span>
            <span>
              <strong>Clear recipient competency.</strong> Every action must
              explain what the recipient can realistically do. Do not ask a
              representative to do something outside their legal authority.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-clay mt-1.5" aria-hidden="true">•</span>
            <span>
              <strong>No identity deception.</strong> Templates must not
              encourage impersonation, false identities, or misrepresentation
              of constituency.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-clay mt-1.5" aria-hidden="true">•</span>
            <span>
              <strong>Source-backed claims.</strong> Templates should reference
              public, verifiable sources — not rumours, unverified social media,
              or private information.
            </span>
          </li>
        </ul>
      </PolicySection>

      {/* What the platform does not do */}
      <PolicySection title="What this platform does not do" id="what-not" delay={0.58}>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-clay mt-1.5" aria-hidden="true">•</span>
            <span>Send messages on your behalf.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-clay mt-1.5" aria-hidden="true">•</span>
            <span>Store your identity, messages, or contact details.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-clay mt-1.5" aria-hidden="true">•</span>
            <span>Track whether a recipient responded.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-clay mt-1.5" aria-hidden="true">•</span>
            <span>Provide a representative finder or lookup tool.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-clay mt-1.5" aria-hidden="true">•</span>
            <span>Automate or mass-send messages.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-clay mt-1.5" aria-hidden="true">•</span>
            <span>Collect analytics tied to your identity or actions.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-clay mt-1.5" aria-hidden="true">•</span>
            <span>Provide legal advice or tell you what to say.</span>
          </li>
        </ul>
      </PolicySection>

      {/* Related methodology and pages */}
      <PolicySection title="Related methodology and pages" id="related" delay={0.61}>
        <ul className="space-y-2">
          <li>
            <Link
              to="/methodology"
              className="text-trust hover:text-trust/80 underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-trust/50 focus-visible:ring-offset-2 rounded-sm transition-colors duration-200"
            >
              Methodology — how sources, verification, and legal labels work
            </Link>
          </li>
          <li>
            <Link
              to="/disclaimer"
              className="text-trust hover:text-trust/80 underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-trust/50 focus-visible:ring-offset-2 rounded-sm transition-colors duration-200"
            >
              Public disclaimer — what this platform is and is not
            </Link>
          </li>
          <li>
            <Link
              to="/countries/belgium"
              className="text-trust hover:text-trust/80 underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-trust/50 focus-visible:ring-offset-2 rounded-sm transition-colors duration-200"
            >
              Belgium — country accountability tracking
            </Link>
          </li>
          <li>
            <Link
              to="/institutions/european-union"
              className="text-trust hover:text-trust/80 underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-trust/50 focus-visible:ring-offset-2 rounded-sm transition-colors duration-200"
            >
              European Union — institution accountability tracking
            </Link>
          </li>
          <li>
            <ExternalLink href="https://github.com/nuttyproducer/accountability-atlas/blob/main/CONTRIBUTING.md">
              Contribution guide — how to contribute safely
            </ExternalLink>
          </li>
        </ul>
      </PolicySection>

      {/* Reviewer / contributor request */}
      <PolicySection title="Help review and expand the Action Hub" id="contributor-request" delay={0.64}>
        <p>
          During the static beta, the Action Hub is a small set of draft
          templates. It needs review by people with expertise in:
        </p>
        <ul className="space-y-2 mt-3">
          <li className="flex items-start gap-2">
            <span className="text-clay mt-1.5" aria-hidden="true">•</span>
            <span>International humanitarian law and human-rights law</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-clay mt-1.5" aria-hidden="true">•</span>
            <span>Parliamentary and legislative processes in specific countries</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-clay mt-1.5" aria-hidden="true">•</span>
            <span>Arms-export control regimes and licensing</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-clay mt-1.5" aria-hidden="true">•</span>
            <span>Humanitarian coordination and access</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-clay mt-1.5" aria-hidden="true">•</span>
            <span>Journalism safety and media law</span>
          </li>
        </ul>
        <p className="mt-4">
          If you have relevant expertise, please see{" "}
          <Link
            to="/contribute"
            className="text-trust hover:text-trust/80 underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-trust/50 focus-visible:ring-offset-2 rounded-sm"
          >
            how to contribute
          </Link>
          .
        </p>
      </PolicySection>

      <PreviewNotice title="The Action Hub is a static preview">
        Action templates are drafts under development. Template text has not
        yet been reviewed for legal accuracy in every jurisdiction. Adapt
        templates to your own words and verify that the action is lawful in
        your jurisdiction before sending. Corrections and suggestions are
        welcome.
      </PreviewNotice>

      <CorrectionLink />
      <LastUpdated date="2026-07-12" />
    </Container>
  );
}
