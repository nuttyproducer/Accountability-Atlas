import { Hero } from "../components/landing/Hero";

import { MissionSection } from "../components/landing/MissionSection";
import { StartingFocus } from "../components/landing/StartingFocus";
import { ModuleGrid } from "../components/landing/ModuleGrid";
import { SafetyPrinciples } from "../components/landing/SafetyPrinciples";
import { NotThisProject } from "../components/landing/NotThisProject";
import { RoadmapPreview } from "../components/landing/RoadmapPreview";
import { ContributorCTA } from "../components/landing/ContributorCTA";

export function HomePage() {
  return (
    <>
      <Hero />

      <div className="mt-20">
        <MissionSection />
      </div>
      <StartingFocus />
      <ModuleGrid />
      <SafetyPrinciples />
      <NotThisProject />
      <RoadmapPreview />
      <ContributorCTA />
    </>
  );
}
