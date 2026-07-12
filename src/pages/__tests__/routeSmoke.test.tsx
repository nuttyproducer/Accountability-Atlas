import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { HomePage } from "../HomePage";
import { MethodologyPage } from "../MethodologyPage";
import { ContributePage } from "../ContributePage";
import { CorrectionsPage } from "../CorrectionsPage";
import { PrivacyPage } from "../PrivacyPage";
import { AccessibilityPage } from "../AccessibilityPage";
import { DisclaimerPage } from "../DisclaimerPage";
import { AttributionsPage } from "../AttributionsPage";
import { ChangelogPage } from "../ChangelogPage";
import { NotFoundPage } from "../NotFoundPage";
import PressPage from "../PressPage";

// Mock framer-motion — jsdom doesn't support animation APIs.
// Components using Reveal will render children without animation.
vi.mock("framer-motion", () => ({
  motion: {
    div: "div",
    section: "section",
    span: "span",
    p: "p",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    li: "li",
    ul: "ul",
    a: "a",
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
  useInView: () => true,
  useScroll: () => ({ scrollYProgress: { get: () => 0 } }),
  useTransform: () => 0,
  useReducedMotion: () => true,
}));

/**
 * Route rendering smoke tests.
 *
 * Each test verifies that a page renders without throwing and
 * displays its primary heading or identifying content. These are
 * not integration tests — they don't exercise the full router.
 */

function renderPage(Page: React.ComponentType) {
  return render(
    <MemoryRouter>
      <Page />
    </MemoryRouter>,
  );
}

describe("Route rendering smoke tests", () => {
  it("renders HomePage", () => {
    renderPage(HomePage);
    expect(
      screen.getByText("Accountability Atlas"),
    ).toBeInTheDocument();
  });

  it("renders MethodologyPage", () => {
    renderPage(MethodologyPage);
    expect(
      screen.getByText(/How Accountability Atlas works with evidence/),
    ).toBeInTheDocument();
  });

  it("renders ContributePage", () => {
    renderPage(ContributePage);
    expect(
      screen.getByText("Help Build the Platform"),
    ).toBeInTheDocument();
  });

  it("renders CorrectionsPage", () => {
    renderPage(CorrectionsPage);
    expect(
      screen.getByText(/Corrections are part of the trust model/),
    ).toBeInTheDocument();
  });

  it("renders PrivacyPage", () => {
    renderPage(PrivacyPage);
    expect(
      screen.getByText(/Privacy in the public static beta/),
    ).toBeInTheDocument();
  });

  it("renders AccessibilityPage", () => {
    renderPage(AccessibilityPage);
    expect(
      screen.getByText("Accessibility commitment."),
    ).toBeInTheDocument();
  });

  it("renders DisclaimerPage", () => {
    renderPage(DisclaimerPage);
    expect(
      screen.getByText("Public disclaimer."),
    ).toBeInTheDocument();
  });

  it("renders AttributionsPage", () => {
    renderPage(AttributionsPage);
    expect(
      screen.getByText("Attributions and image credits."),
    ).toBeInTheDocument();
  });

  it("renders ChangelogPage", () => {
    renderPage(ChangelogPage);
    expect(screen.getByText("What's New")).toBeInTheDocument();
  });

  it("renders PressPage", () => {
    renderPage(PressPage);
    expect(
      screen.getByText("Press and Resources"),
    ).toBeInTheDocument();
  });

  it("renders NotFoundPage", () => {
    renderPage(NotFoundPage);
    expect(screen.getByText("404")).toBeInTheDocument();
  });
});
