import { Reveal } from "../ui/Reveal";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { LinkCard } from "../ui/LinkCard";

const gatewayCards = [
  {
    label: "Module 01",
    title: "Explore the Gaza Dossier",
    description:
      "Understand the planned structure for humanitarian context, legal processes, documented harm categories, policy priorities, and action routes.",
    to: undefined,
    disabled: true,
    disabledLabel: "Next sprint",
    accent: "amber" as const,
  },
  {
    label: "Module 02",
    title: "Read the Methodology",
    description:
      "See how sources, verification levels, legal labels, corrections, and publication safeguards will work.",
    to: "/methodology",
    disabled: false,
    accent: "amber" as const,
  },
  {
    label: "Module 03",
    title: "Track Legal Accountability",
    description:
      "A preview pathway for court proceedings, UN findings, legal status labels, and accountability milestones.",
    to: undefined,
    disabled: true,
    disabledLabel: "Next sprint",
    accent: "clay" as const,
  },
  {
    label: "Module 04",
    title: "Use Lawful Action Routes",
    description:
      "Future templates will help citizens contact representatives, institutions, journalists, and civic bodies without harassment or unsafe claims.",
    to: undefined,
    disabled: true,
    disabledLabel: "Next sprint",
    accent: "clay" as const,
  },
  {
    label: "Module 05",
    title: "Browse Public Resources",
    description:
      "Humanitarian, legal, documentation, research, and press-freedom organizations will be listed responsibly without implying partnership.",
    to: undefined,
    disabled: true,
    disabledLabel: "Next sprint",
    accent: "blue" as const,
  },
  {
    label: "Module 06",
    title: "Help Build the Platform",
    description:
      "Developers, designers, researchers, writers, translators, legal reviewers, and security reviewers can start with small, safe contributions.",
    to: "/contribute",
    disabled: false,
    accent: "blue" as const,
  },
];

export function GatewaySection() {
  return (
    <section className="py-24 lg:py-32" aria-labelledby="gateway-title">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Public Static Beta"
            title="Enter the accountability system."
            id="gateway-title"
            description="The next layer of Accountability Atlas turns the landing page into a navigable civic platform: methodology, dossiers, legal tracking, country accountability, lawful action tools, and public resource directories."
          />
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gatewayCards.map((card, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <LinkCard
                label={card.label}
                title={card.title}
                to={card.to}
                disabled={card.disabled}
                disabledLabel={card.disabledLabel}
                accent={card.accent}
              >
                {card.description}
              </LinkCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
