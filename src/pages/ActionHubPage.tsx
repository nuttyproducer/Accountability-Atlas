import { Link } from "react-router-dom";
import { Container } from "../components/ui/Container";
import { PageIntro } from "../components/pages/PageIntro";
import { PageStatusNotice } from "../components/pages/PageStatusNotice";
import { PolicySection } from "../components/pages/PolicySection";
import { LastUpdated } from "../components/pages/LastUpdated";
import { PreviewNotice } from "../components/pages/PreviewNotice";
import { CorrectionLink } from "../components/pages/CorrectionLink";
import { ExternalLink } from "../components/ui/ExternalLink";
import { getActiveTemplates } from "../data/actionTemplates";
import { ActionCard } from "../components/actions/ActionCard";

const activeTemplates = getActiveTemplates();

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
