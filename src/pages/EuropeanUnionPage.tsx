import { Link } from "react-router-dom";
import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import { Card } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { PageIntro } from "../components/pages/PageIntro";
import { PageStatusNotice } from "../components/pages/PageStatusNotice";
import { PolicySection } from "../components/pages/PolicySection";
import { LastUpdated } from "../components/pages/LastUpdated";
import { PreviewNotice } from "../components/pages/PreviewNotice";
import { CorrectionLink } from "../components/pages/CorrectionLink";
import { euInstitutions } from "../data/institutions";
import { CONTENT_STATUS_LABELS } from "../types/content";

export default function EuropeanUnionPage() {
  return (
    <Container className="py-16 lg:py-20">
      <PageIntro
        eyebrow="Institution Accountability"
        title="European Union"
        description="A structural preview explaining EU-level accountability tracking. Describes the competencies and roles of key EU bodies, what the platform will monitor, and how citizens can engage through lawful routes. Content is under review."
      />

      <PageStatusNotice title="Content under review" variant="warning">
        <p>
          This page describes the accountability areas the platform will track
          at the EU institutional level. Policy summaries and positions will be
          added after review. EU powers are described within their legal
          competencies only.
        </p>
      </PageStatusNotice>

      {/* Competency note */}
      <Reveal delay={0.12}>
        <div
          className="bg-bone border border-amber/30 rounded-lg p-5 mb-10"
          role="note"
        >
          <div className="flex items-start gap-3">
            <Badge variant="warning">Competency note</Badge>
            <p className="text-sm text-charcoal/80 leading-relaxed">
              EU-level accountability is complex. Some decisions sit with EU
              institutions, some with member states, and some require unanimity
              or national implementation. This page will separate EU-level
              mechanisms from national responsibilities.{" "}
              <Link
                to="/countries/belgium"
                className="text-trust hover:text-trust/80 underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-trust/50 focus-visible:ring-offset-2 rounded-sm"
              >
                Country pages
              </Link>{" "}
              (starting with Belgium) track member-state-level accountability
              separately.
            </p>
          </div>
        </div>
      </Reveal>

      {/* 1. Why EU-Level Accountability Matters */}
      <PolicySection
        title="Why EU-Level Accountability Matters"
        id="why-eu"
        delay={0.15}
      >
        <p>
          The European Union is a significant actor in foreign policy, trade,
          humanitarian aid, and arms-export regulation. EU decisions — on
          sanctions, restrictive measures, trade preferences, humanitarian
          funding, and diplomatic positions — can affect civilian protection and
          accountability outcomes.
        </p>
        <p>
          However, the EU is not a state. Its powers vary by policy area. In
          some areas (trade, competition) the EU has exclusive competence. In
          others (foreign policy, defence) member states retain primary
          authority and EU action requires consensus or unanimity. This page
          tracks what the EU can do, what it has done, and where the boundary
          between EU and national responsibility lies.
        </p>
        <p>
          This page is a structural skeleton. It explains the EU institutional
          landscape and what the platform intends to track. Policy summaries and
          institutional positions are not yet published.
        </p>
      </PolicySection>

      {/* 2. Institution Cards */}
      <PolicySection title="EU Institutions" id="institutions" delay={0.18}>
        <p>
          Each card describes an EU institution&rsquo;s role, legal competence,
          and what this page will track once substantive content is reviewed and
          published.
        </p>
      </PolicySection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {euInstitutions.map((inst, i) => (
          <Reveal key={inst.id} delay={0.2 + i * 0.06}>
            <Card
              title={inst.name}
              label={inst.acronym}
              accent={
                inst.status === "static_preview"
                  ? "blue"
                  : inst.status === "review_pending"
                    ? "amber"
                    : "clay"
              }
            >
              <p className="text-charcoal/80 leading-relaxed mb-2">
                <span className="font-semibold text-ink">Role: </span>
                {inst.role}
              </p>
              <p className="text-charcoal/80 leading-relaxed mb-2">
                <span className="font-semibold text-ink">Competency: </span>
                {inst.competency}
              </p>
              <p className="text-charcoal/80 leading-relaxed mb-3">
                <span className="font-semibold text-ink">Tracking: </span>
                {inst.trackingNote}
              </p>
              <Badge
                variant={
                  inst.status === "static_preview"
                    ? "info"
                    : inst.status === "review_pending"
                      ? "warning"
                      : "neutral"
                }
              >
                {CONTENT_STATUS_LABELS[inst.status]}
              </Badge>
            </Card>
          </Reveal>
        ))}
      </div>

      {/* 3. Mechanisms */}
      <PolicySection
        title="Mechanisms This Page Will Track"
        id="mechanisms"
        delay={0.30}
      >
        <h3 className="font-serif text-lg font-semibold text-ink mt-4 mb-2">
          Sanctions / Restrictive Measures
        </h3>
        <p>
          The EU adopts restrictive measures (sanctions) through Council
          decisions requiring unanimity. This page will track relevant sanctions
          regimes, designation criteria, and implementation — distinguishing EU
          autonomous sanctions from UN Security Council-mandated measures.
        </p>

        <h3 className="font-serif text-lg font-semibold text-ink mt-6 mb-2">
          Humanitarian & Diplomatic Measures
        </h3>
        <p>
          The EU is one of the world&rsquo;s largest humanitarian donors through
          ECHO (European Civil Protection and Humanitarian Aid Operations). This
          page will track humanitarian funding allocations, diplomatic
          statements, and demarches relevant to civilian protection and
          humanitarian access.
        </p>

        <h3 className="font-serif text-lg font-semibold text-ink mt-6 mb-2">
          Arms-Export Competency
        </h3>
        <p>
          Arms-export licensing is a national competency of EU member states.
          The EU Common Position on arms exports (2008/944/CFSP) sets shared
          criteria, but decisions are made by national governments. This page
          will track the EU-level framework while country pages track individual
          member-state export decisions.
        </p>
      </PolicySection>

      {/* 4. Citizen Routes */}
      <PolicySection
        title="Citizen & Civil-Society Routes"
        id="citizen-routes"
        delay={0.33}
      >
        <p>
          <strong>MEP contact:</strong> Citizens can contact Members of the
          European Parliament — particularly those on the Foreign Affairs
          Committee (AFET), Human Rights Subcommittee (DROI), and Development
          Committee (DEVE). The platform will provide guidance on how to do so
          lawfully and effectively (feature in development).
        </p>
        <p>
          <strong>European Parliament petitions:</strong> EU citizens and
          residents can submit petitions to the European Parliament on matters
          within the EU&rsquo;s fields of activity. The platform will explain
          the petition process once relevant templates are reviewed (feature in
          development).
        </p>
        <p>
          <strong>Policy asks preview:</strong> Future action templates will
          include sourced, polite, non-harassing language for contacting EU
          representatives about humanitarian access, arms-export review, and
          legal accountability.
        </p>
      </PolicySection>

      {/* 5. Sources */}
      <PolicySection
        title="Sources and Corrections"
        id="sources"
        delay={0.36}
      >
        <p>
          When substantive content is added to this page, every claim about EU
          policy, positions, or actions will be linked to official EU documents,
          Council conclusions, Commission decisions, Parliament resolutions, or
          verified institutional reporting. Sources will be categorized by type
          and assigned a verification level according to the{" "}
          <Link
            to="/methodology"
            className="text-trust hover:text-trust/80 underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-trust/50 focus-visible:ring-offset-2 rounded-sm"
          >
            methodology
          </Link>
          .
        </p>
        <p>
          EU institutional content requires review by contributors familiar with
          EU law, decision-making procedures, and foreign policy. Corrections
          are welcome through the{" "}
          <Link
            to="/corrections"
            className="text-trust hover:text-trust/80 underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-trust/50 focus-visible:ring-offset-2 rounded-sm"
          >
            corrections process
          </Link>
          .
        </p>
      </PolicySection>

      <PreviewNotice title="This page is a structural skeleton">
        EU institution page content is under development. Institution
        descriptions explain competencies and tracking plans. Policy summaries
        and institutional positions are not yet published.
      </PreviewNotice>

      <CorrectionLink />
      <LastUpdated date="2026-07-10" />
    </Container>
  );
}
