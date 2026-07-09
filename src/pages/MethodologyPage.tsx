import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import { Badge } from "../components/ui/Badge";
import { Button, ExternalIcon, ArrowIcon } from "../components/ui/Button";

export function MethodologyPage() {
  return (
    <div className="py-24 lg:py-32">
      <Container>
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <p className="font-mono text-xs font-medium tracking-[0.15em] uppercase text-charcoal/60 mb-4">
              Methodology
            </p>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-ink mb-4">
              How We Work With Evidence
            </h1>
            <div className="w-10 h-px bg-border mb-8" aria-hidden="true" />
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-lg text-charcoal/80 leading-relaxed mb-10">
              Our full source methodology, verification model, and evidence
              standards are published and versioned in the project repository.
              This page is a preview — the complete documentation lives on
              GitHub and will expand through Phase 2.
            </p>
          </Reveal>

          {/* Source hierarchy preview */}
          <Reveal delay={0.15}>
            <section className="mb-10" aria-labelledby="sources-heading">
              <h2 id="sources-heading" className="font-serif text-2xl font-semibold text-ink mb-4">
                Source Hierarchy
              </h2>
              <div className="space-y-2">
                {[
                  { label: "Primary", desc: "Court records, UN documents, official government statements, verified audiovisual evidence", variant: "info" as const },
                  { label: "Secondary", desc: "NGO reports, investigative journalism, academic research, institutional findings", variant: "neutral" as const },
                  { label: "Tertiary", desc: "News reports, public statements, civil society documentation, unverified leads", variant: "warning" as const },
                ].map((level) => (
                  <div key={level.label} className="flex items-start gap-3 bg-bone border border-border rounded-md p-4">
                    <Badge variant={level.variant}>{level.label}</Badge>
                    <p className="text-sm text-charcoal leading-relaxed">{level.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>

          {/* Verification states preview */}
          <Reveal delay={0.2}>
            <section className="mb-10" aria-labelledby="verification-heading">
              <h2 id="verification-heading" className="font-serif text-2xl font-semibold text-ink mb-4">
                Verification States
              </h2>
              <p className="text-charcoal/80 leading-relaxed mb-4">
                Every piece of evidence is assigned a verification state. This
                system is part of our identity — it tells readers exactly how
                confident we are in each source.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Lead", "Preserved", "Corroborated", "Verified", "Disputed", "Corrected", "Withdrawn"].map((state) => (
                  <Badge key={state} variant="neutral">{state}</Badge>
                ))}
              </div>
            </section>
          </Reveal>

          {/* Safety boundaries */}
          <Reveal delay={0.25}>
            <section className="mb-10" aria-labelledby="safety-heading">
              <h2 id="safety-heading" className="font-serif text-2xl font-semibold text-ink mb-4">
                Safety Boundaries
              </h2>
              <ul className="space-y-2 text-charcoal/80 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-clay mt-1.5" aria-hidden="true">•</span>
                  <span>No personally identifiable information is published without verified consent.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-clay mt-1.5" aria-hidden="true">•</span>
                  <span>No graphic or sensitive content is displayed without content warnings and secure review.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-clay mt-1.5" aria-hidden="true">•</span>
                  <span>All sources are assessed for authenticity, context, and potential harm before publication.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-clay mt-1.5" aria-hidden="true">•</span>
                  <span>Corrections are issued publicly and promptly when errors are identified.</span>
                </li>
              </ul>
            </section>
          </Reveal>

          {/* Links to full docs */}
          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-border">
              <Button
                href="https://github.com/nuttyproducer/accountability-atlas/blob/main/docs/methodology.md"
                variant="primary"
                icon={<ExternalIcon />}
                external
              >
                Read Full Methodology
              </Button>
              <Button
                href="https://github.com/nuttyproducer/accountability-atlas/blob/main/docs/source-policy.md"
                variant="secondary"
                icon={<ExternalIcon />}
                external
              >
                Source Policy
              </Button>
              <Button href="/" variant="ghost" icon={<ArrowIcon />}>
                Back home
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </div>
  );
}
