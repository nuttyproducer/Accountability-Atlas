export interface RoadmapPhase {
  phase: string;
  title: string;
  description: string;
}

export const roadmap: RoadmapPhase[] = [
  {
    phase: "Phase 1",
    title: "Credibility Landing Page",
    description:
      "Create a public landing page, methodology placeholder, contribute page, and safe project framing.",
  },
  {
    phase: "Phase 2",
    title: "Methodology and Country Pages",
    description:
      "Publish the first source methodology, Belgium page, EU page, legal tracker structure, and organization directory.",
  },
  {
    phase: "Phase 3",
    title: "Static Evidence Dossiers",
    description:
      "Add source-cited public dossiers and downloadable briefing formats.",
  },
  {
    phase: "Phase 4",
    title: "Reviewed Dynamic Features",
    description:
      "Only after review: maps, search, secure workflows, and structured data.",
  },
];
