import { Link } from "react-router-dom";
import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import { Card } from "../components/ui/Card";
import { PageIntro } from "../components/pages/PageIntro";
import { PageStatusNotice } from "../components/pages/PageStatusNotice";
import { PolicySection } from "../components/pages/PolicySection";
import { LastUpdated } from "../components/pages/LastUpdated";
import { PreviewNotice } from "../components/pages/PreviewNotice";
import { CorrectionLink } from "../components/pages/CorrectionLink";
import { VerificationBadge } from "../components/pages/VerificationBadge";

const harmCategories = [
  {
    title: "Civilian Harm",
    description:
      "Documented patterns of civilian casualties, injuries, and harm to protected persons under international humanitarian law.",
    accent: "clay" as const,
  },
  {
    title: "Displacement",
    description:
      "Forced displacement, evacuation orders, and conditions preventing safe return, assessed against IHL prohibitions on forced transfer.",
    accent: "amber" as const,
  },
  {
    title: "Healthcare Access",
    description:
      "Attacks on healthcare facilities, medical personnel, and impediments to medical access — tracked against IHL special protections for medical services.",
    accent: "clay" as const,
  },
  {
    title: "Food & Water Access",
    description:
      "Access to food, clean water, and sanitation infrastructure. Includes the use of starvation as a method of warfare, which is prohibited under IHL.",
    accent: "amber" as const,
  },
  {
    title: "Infrastructure Damage",
    description:
      "Damage to civilian infrastructure including housing, schools, places of worship, and cultural property — assessed for proportionality and distinction.",
    accent: "blue" as const,
  },
  {
    title: "Humanitarian Access",
    description:
      "Obstruction of humanitarian relief operations, attacks on aid workers, and denial of access to civilian populations in need.",
    accent: "clay" as const,
  },
];

const keyInstitutions = [
  {
    label: "United Nations bodies",
    title: "UN Agencies & Mechanisms",
    description:
      "OHCHR, OCHA, UNRWA, WFP, WHO, Human Rights Council, and Commissions of Inquiry — each with specific mandates relevant to documentation and humanitarian response. Listing does not imply partnership.",
  },
  {
    label: "Courts and tribunals",
    title: "International Courts",
    description:
      "International Court of Justice (ICJ) and International Criminal Court (ICC) — the principal judicial bodies addressing legal accountability for alleged international crimes.",
  },
  {
    label: "Humanitarian organizations",
    title: "Humanitarian Actors",
    description:
      "ICRC, IFRC, and national Red Cross/Red Crescent societies; major medical and relief organizations operating under humanitarian principles. Listing does not imply partnership or endorsement.",
  },
  {
    label: "Documentation groups",
    title: "Documentation & Research",
    description:
      "Human-rights organizations, investigative journalism groups, academic research centres, and OSINT collectives whose public reports may be referenced as sources after verification review.",
  },
];

const policyPriorities = [
  {
    title: "Humanitarian Access",
    description:
      "Support unimpeded humanitarian access, protection of aid workers, and respect for humanitarian notification systems.",
    accent: "amber" as const,
  },
  {
    title: "Arms-Transfer Review",
    description:
      "Support lawful review of arms transfers where there is a clear risk of IHL violations, in line with the Arms Trade Treaty and EU Common Position.",
    accent: "clay" as const,
  },
  {
    title: "Diplomatic Pressure",
    description:
      "Support diplomatic engagement, restrictive measures, and multilateral accountability mechanisms through lawful, public channels.",
    accent: "blue" as const,
  },
  {
    title: "Legal Accountability",
    description:
      "Support ICC cooperation, universal jurisdiction cases, and domestic legal processes that advance accountability for international crimes.",
    accent: "clay" as const,
  },
];

const sourceCategories = [
  {
    title: "Court & Legal Records",
    description:
      "ICJ orders and judgments, ICC filings and warrants, national court decisions, and tribunal records. These carry the highest evidentiary weight in the source hierarchy.",
  },
  {
    title: "UN & International Body Documents",
    description:
      "Security Council resolutions, General Assembly records, Human Rights Council reports, Commission of Inquiry findings, and OCHA humanitarian updates.",
  },
  {
    title: "Humanitarian Organization Reports",
    description:
      "Public reporting from ICRC, UNRWA, WHO, WFP, MSF, and other established humanitarian organizations operating under international mandates.",
  },
  {
    title: "Human-Rights Organization Findings",
    description:
      "Published reports and legal analyses from established human-rights organizations. Reviewed for methodology, sourcing, and consistency before platform use.",
  },
  {
    title: "Investigative Journalism",
    description:
      "Open-source investigations, forensic reporting, and verified journalistic accounts from recognized media and investigative outlets.",
  },
  {
    title: "Academic Research",
    description:
      "Peer-reviewed studies, legal scholarship, and research centre publications relevant to international law, conflict studies, and accountability mechanisms.",
  },
];

export default function GazaDossierPage() {
  return (
    <Container className="py-16 lg:py-20">
      <PageIntro
        eyebrow="Accountability System"
        title="Gaza Dossier"
        description="A structured framework for understanding the humanitarian context, legal processes, documented harm categories, and action priorities. This is a static preview — not a complete dossier."
      />

      <PageStatusNotice title="Static preview" variant="info">
        <p>
          The dossier framework is under active development. Categories and
          structures represent planned content areas. No current casualty
          figures, incident lists, or definitive legal conclusions are published
          here.
        </p>
      </PageStatusNotice>

      {/* 1. Scope and Purpose */}
      <PolicySection title="Scope and Purpose" id="scope" delay={0.15}>
        <p>
          The Gaza Dossier is designed to organize verified public information
          about the humanitarian situation, legal accountability processes, and
          documented harm in Gaza and the wider occupied Palestinian territory.
          It will connect evidence, legal tracking, country accountability, and
          lawful action routes in one structured starting point.
        </p>
        <p>
          This dossier is not a comprehensive incident database, a real-time
          tracker, or a legal judgment. It is a curated framework that
          distinguishes sourced claims from allegations, separates legal
          findings from advocacy, and links every category to its source
          methodology.
        </p>
        <p>
          The dossier works together with the{" "}
          <Link
            to="/legal-tracker"
            className="text-trust hover:text-trust/80 underline underline-offset-2"
          >
            Legal Tracker
          </Link>{" "}
          and future country accountability pages to form a complete
          documentation-to-action pathway.
        </p>
      </PolicySection>

      {/* 2. Humanitarian Situation Framework */}
      <PolicySection
        title="Humanitarian Situation Framework"
        id="humanitarian-framework"
        delay={0.18}
      >
        <p>
          The dossier will track documented patterns of harm using the following
          categories. Each category will be supported by sourced records,
          verification levels, and clear distinction between allegation,
          investigation, and confirmed finding.
        </p>
      </PolicySection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {harmCategories.map((cat, i) => (
          <Reveal key={cat.title} delay={0.2 + i * 0.05}>
            <Card
              accent={cat.accent}
              title={cat.title}
              label={`Category ${i + 1}`}
            >
              {cat.description}
            </Card>
          </Reveal>
        ))}
      </div>

      {/* 3. Legal Accountability Framework */}
      <PolicySection
        title="Legal Accountability Framework"
        id="legal-framework"
        delay={0.22}
      >
        <p>
          The dossier connects to ongoing legal accountability processes at the
          ICJ, ICC, and UN level. Each documented harm category will be linked
          — where applicable — to relevant court proceedings, provisional
          measures, arrest warrants, and institutional findings.
        </p>
        <p>
          The platform uses consistent{" "}
          <Link
            to="/legal-tracker"
            className="text-trust hover:text-trust/80 underline underline-offset-2"
          >
            legal status labels
          </Link>{" "}
          and verification levels. Every claim is positioned on the source
          hierarchy, from unreviewed lead to legal/institutional record.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <VerificationBadge level={5} />
          <VerificationBadge level={3} />
          <VerificationBadge level={0} />
        </div>
        <p className="text-sm text-charcoal/60 mt-2">
          Example verification levels shown. Level 5 represents the highest
          standard — legal or institutional records.
        </p>
      </PolicySection>

      {/* 4. Key Institutions */}
      <PolicySection
        title="Key Institutions"
        id="institutions"
        delay={0.25}
      >
        <p>
          The dossier references the work of international institutions without
          implying partnership, endorsement, or affiliation. Each institution is
          listed because its public mandate, reporting, or legal function is
          relevant to accountability.
        </p>
      </PolicySection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {keyInstitutions.map((inst, i) => (
          <Reveal key={inst.title} delay={0.27 + i * 0.05}>
            <Card label={inst.label} title={inst.title}>
              {inst.description}
            </Card>
          </Reveal>
        ))}
      </div>

      {/* 5. Policy Priorities */}
      <PolicySection
        title="Policy Priorities & Action Pathways"
        id="policy-priorities"
        delay={0.30}
      >
        <p>
          Each harm category in the dossier will connect to specific, lawful
          action pathways. The Action Hub (currently in development) will
          provide sourced, non-harassing templates for contacting
          representatives, institutions, and media.
        </p>
      </PolicySection>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        {policyPriorities.map((p, i) => (
          <Reveal key={p.title} delay={0.32 + i * 0.05}>
            <Card accent={p.accent} title={p.title}>
              {p.description}
            </Card>
          </Reveal>
        ))}
      </div>

      {/* 6. Planned Source Categories */}
      <PolicySection
        title="Planned Source Categories"
        id="source-categories"
        delay={0.35}
      >
        <p>
          The dossier will draw on multiple source types, each assigned a
          position in the methodology source hierarchy. No source category
          implies automatic verification — every item must be individually
          reviewed before it receives a verification level above "unreviewed
          lead."
        </p>
      </PolicySection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {sourceCategories.map((sc, i) => (
          <Reveal key={sc.title} delay={0.37 + i * 0.04}>
            <Card title={sc.title}>{sc.description}</Card>
          </Reveal>
        ))}
      </div>

      {/* 7. Status and Limitations */}
      <PolicySection
        title="Status and Limitations"
        id="limitations"
        delay={0.40}
      >
        <p>
          <strong>What is active now:</strong> The dossier framework, category
          structure, methodology links, and legal accountability framework are
          available for review. The{" "}
          <Link
            to="/methodology"
            className="text-trust hover:text-trust/80 underline underline-offset-2"
          >
            Methodology
          </Link>{" "}
          page explains how sources, verification, and legal labels work.
        </p>
        <p>
          <strong>What is not active yet:</strong> Individual source records,
          incident data, casualty figures, real-time updates, and
          country-specific dossier sections are not yet published. These require
          editorial review and source verification before publication.
        </p>
        <p>
          <strong>How to help:</strong> Reviewers, legal researchers, and
          humanitarian specialists are invited to{" "}
          <Link
            to="/contribute"
            className="text-trust hover:text-trust/80 underline underline-offset-2"
          >
            contribute
          </Link>{" "}
          to the dossier structure and source methodology.
        </p>
      </PolicySection>

      <PreviewNotice title="This dossier is a static preview">
        The Gaza Dossier framework is under active development. All categories
        and structures are subject to expert review. No final or reviewed
        content is published yet.
      </PreviewNotice>

      <CorrectionLink />
      <LastUpdated date="2026-07-10" />
    </Container>
  );
}
