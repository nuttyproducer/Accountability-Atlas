import { Button, ArrowIcon, ExternalIcon } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { Container } from "../ui/Container";

export function Hero() {
  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24" aria-labelledby="hero-title">
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
              className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-ink leading-[1.08] mb-6"
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
              className="w-6 h-0.5 bg-amber mx-auto mb-6"
              aria-hidden="true"
            />
          </Reveal>

          <Reveal delay={0.32} duration={0.5}>
            <p className="text-lg text-charcoal/80 leading-relaxed max-w-2xl mx-auto mb-10">
              An open civic-technology project for verified atrocity
              documentation, humanitarian accountability, legal and policy
              tracking, and lawful public action.
            </p>
          </Reveal>

          <Reveal delay={0.42} duration={0.5}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
        </div>
      </Container>
    </section>
  );
}
