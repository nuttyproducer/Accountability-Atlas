import { Button, ArrowIcon, ExternalIcon } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { Container } from "../ui/Container";
import { Badge } from "../ui/Badge";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28" aria-labelledby="hero-title">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <Reveal delay={0} duration={0.6}>
            <p className="font-mono text-xs font-medium tracking-[0.15em] uppercase text-charcoal/60 mb-6">
              Open Civic Evidence Platform
            </p>
          </Reveal>

          <Reveal delay={0.12} duration={0.6}>
            <h1
              id="hero-title"
              className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-ink leading-[1.06] mb-6"
            >
              Accountability Atlas
            </h1>
          </Reveal>

          <Reveal delay={0.22} duration={0.6}>
            <p className="font-serif text-2xl lg:text-3xl font-semibold text-charcoal leading-tight mb-6">
              Evidence for protection.
              <br />
              Action for accountability.
            </p>
          </Reveal>

          {/* Amber accent line — coordinate marker motif */}
          <Reveal delay={0.28} duration={0.5}>
            <div
              className="w-8 h-0.5 bg-amber mx-auto mb-6"
              aria-hidden="true"
            />
          </Reveal>

          <Reveal delay={0.32} duration={0.5}>
            <p className="text-xl text-charcoal/80 leading-relaxed max-w-2xl mx-auto mb-10">
              An open civic-technology project for verified atrocity
              documentation, humanitarian accountability, legal and policy
              tracking, and lawful public action.
            </p>
          </Reveal>

          <Reveal delay={0.42} duration={0.5}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Button href="/methodology" variant="primary" icon={<ArrowIcon />}>
                Read the Methodology
              </Button>
              <Button
                href="https://github.com/nuttyproducer/accountability-atlas"
                variant="secondary"
                icon={<ExternalIcon />}
                external
              >
                Contribute on GitHub
              </Button>
            </div>
          </Reveal>

          {/* Subtle visual anchor: evidence-record preview */}
          <Reveal delay={0.55} duration={0.6}>
            <div className="max-w-md mx-auto">
              <div className="bg-bone border border-charcoal/15 rounded-lg p-5 text-left shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[10px] font-medium uppercase tracking-[0.15em] text-charcoal/50">
                    Source Record
                  </span>
                  <Badge variant="info">Corroborated</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-[10px] text-charcoal/40 uppercase tracking-wider w-20 flex-shrink-0">
                      Evidence ID
                    </span>
                    <span className="font-mono text-xs text-charcoal/70">
                      AA-2026-001
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-[10px] text-charcoal/40 uppercase tracking-wider w-20 flex-shrink-0">
                      Source
                    </span>
                    <span className="font-mono text-xs text-charcoal/70">
                      UN Independent Inquiry
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-[10px] text-charcoal/40 uppercase tracking-wider w-20 flex-shrink-0">
                      Date
                    </span>
                    <span className="font-mono text-xs text-charcoal/70">
                      2026-06-15
                    </span>
                  </div>
                </div>
                {/* Amber coordinate accent */}
                <div className="mt-3 pt-3 border-t border-border flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber flex-shrink-0" aria-hidden="true" />
                  <span className="font-mono text-[10px] text-charcoal/40 uppercase tracking-wider">
                    Protected record — public summary only
                  </span>
                </div>
              </div>
              <p className="font-mono text-[10px] text-charcoal/30 uppercase tracking-wider mt-3 text-center">
                Structured evidence, sourced and verified
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
