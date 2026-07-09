import { Reveal } from "../ui/Reveal";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { roadmap } from "../../data/roadmap";

export function RoadmapPreview() {
  return (
    <section className="py-24 lg:py-32" aria-labelledby="roadmap-title">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Where We're Going"
            title="Roadmap"
            id="roadmap-title"
            description="Each phase builds on the last. We move carefully — accuracy and safety before speed."
          />
        </Reveal>
        <div className="space-y-4 max-w-2xl mx-auto">
          {roadmap.map((phase, i) => (
            <Reveal key={i} delay={i * 0.12}>
              <Card accent="blue" label={phase.phase} title={phase.title}>
                <span>{phase.description}</span>
                {i === 0 && (
                  <span className="block mt-3">
                    <Badge variant="info">Current phase</Badge>
                  </span>
                )}
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
