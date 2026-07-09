import { Reveal } from "../ui/Reveal";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { principles } from "../../data/principles";

export function SafetyPrinciples() {
  return (
    <section className="py-24 lg:py-32" aria-labelledby="principles-title">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How We Work"
            title="Safety Principles"
            id="principles-title"
            description="These principles guide every decision, from code to content to community."
          />
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {principles.map((principle, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="flex items-start gap-3 bg-bone border border-border rounded-lg p-5 transition-shadow duration-300 hover:shadow-soft hover:border-charcoal/20">
                {/* Clay dot — echo of the coordinate point motif */}
                <span
                  className="flex-shrink-0 w-2 h-2 rounded-full bg-clay mt-2"
                  aria-hidden="true"
                />
                <span className="text-charcoal leading-relaxed">
                  {principle}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
