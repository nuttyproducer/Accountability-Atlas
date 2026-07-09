import { Reveal } from "../ui/Reveal";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

export function NotThisProject() {
  return (
    <section className="py-24 lg:py-32 bg-bone" aria-labelledby="not-title">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Clarity"
            title="What This Project Will Not Do"
          />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="max-w-3xl mx-auto bg-bone border border-border rounded-lg p-8">
            <p className="text-charcoal leading-relaxed text-lg">
              This is not a rage platform, a doxing project, a donation
              intermediary, a replacement for humanitarian organizations, or
              a legal authority.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
