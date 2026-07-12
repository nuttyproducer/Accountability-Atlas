import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { axe } from "vitest-axe";
import { MethodologyPage } from "../pages/MethodologyPage";
import { CorrectionsPage } from "../pages/CorrectionsPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import PressPage from "../pages/PressPage";

// Mock framer-motion for tests
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
    button: "button",
    nav: "nav",
    header: "header",
    footer: "footer",
    main: "main",
    img: "img",
    table: "table",
    thead: "thead",
    tbody: "tbody",
    tr: "tr",
    th: "th",
    td: "td",
    pre: "pre",
    code: "code",
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
  useInView: () => true,
  useScroll: () => ({ scrollYProgress: { get: () => 0 } }),
  useTransform: () => 0,
  useReducedMotion: () => true,
}));

/**
 * Accessibility (Axe) tests for core pages.
 *
 * Each test runs axe-core against the rendered page and reports
 * violations. These tests catch structural accessibility issues:
 * missing landmarks, color contrast, heading hierarchy, aria usage,
 * and keyboard accessibility.
 *
 * Known limitations:
 * - HomePage is not tested here because it contains several
 *   full-viewport image sections that are better tested manually
 *   with screen readers and real viewport sizes.
 * - Framer Motion is mocked to a plain div, so animation-related
 *   accessibility concerns (prefers-reduced-motion) are tested
 *   manually.
 */

async function checkA11y(ui: React.ReactElement) {
  const { container } = render(
    <MemoryRouter>{ui}</MemoryRouter>,
  );
  const results = await axe(container);
  return results;
}

describe("Accessibility — Axe automated checks", () => {
  it("Methodology page has no detectable a11y violations", async () => {
    const results = await checkA11y(<MethodologyPage />);
    expect(results.violations).toEqual([]);
  }, 15000);

  it("Corrections page has no detectable a11y violations", async () => {
    const results = await checkA11y(<CorrectionsPage />);
    expect(results.violations).toEqual([]);
  }, 15000);

  it("NotFound page has no detectable a11y violations", async () => {
    const results = await checkA11y(<NotFoundPage />);
    expect(results.violations).toEqual([]);
  }, 15000);

  it("Press page has no detectable a11y violations", async () => {
    const results = await checkA11y(<PressPage />);
    expect(results.violations).toEqual([]);
  }, 15000);
});
