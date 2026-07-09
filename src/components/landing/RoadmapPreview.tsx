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
        <div className="max-w-2xl mx-auto">
          {/* Vertical timeline */}
          <div className="relative">
            {roadmap.map((phase, i) => (
              <Reveal key={i} delay={i * 0.12}>
                <div className="relative pl-12 pb-10 last:pb-0">
                  {/* Timeline connector */}
                  {i < roadmap.length - 1 && (
                    <div
                      className="absolute left-[17px] top-10 bottom-0 w-px bg-border"
                      aria-hidden="true"
                    />
                  )}
                  {/* Phase node */}
                  <div
                    className={`
                      absolute left-0 top-1 w-[35px] h-[35px] rounded-full border-2 flex items-center justify-center font-mono text-xs font-medium
                      ${i === 0
                        ? "border-trust bg-trust/10 text-trust"
                        : "border-border text-charcoal/50"
                      }
                    `.trim()}
                    aria-hidden="true"
                  >
                    {i + 1}
                  </div>
                  {/* Phase card */}
                  <Card accent="blue" label={phase.phase} title={phase.title}>
                    <span>{phase.description}</span>
                    {i === 0 && (
                      <span className="block mt-3">
                        <Badge variant="info">Current phase</Badge>
                      </span>
                    )}
                  </Card>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
