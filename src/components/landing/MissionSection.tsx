import { Reveal } from "../ui/Reveal";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

export function MissionSection() {
  return (
    <section className="py-24 lg:py-32" aria-labelledby="mission-title">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Why This Exists"
            title="Building calm public-interest infrastructure."
            id="mission-title"
          />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-charcoal/80 leading-relaxed border-l-2 border-amber/30 pl-6 lg:pl-8 py-2">
              Accountability Atlas is being built as calm public-interest
              infrastructure for people who need evidence to be organized,
              sourced, contextualized, and connected to lawful action.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
