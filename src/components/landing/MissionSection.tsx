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
          />
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-lg text-charcoal/80 leading-relaxed max-w-3xl mx-auto text-center">
            Accountability Atlas is being built as calm public-interest
            infrastructure for people who need evidence to be organized,
            sourced, contextualized, and connected to lawful action.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
