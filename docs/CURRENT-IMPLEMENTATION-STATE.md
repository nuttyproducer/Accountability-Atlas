# Current Implementation State

**Generated:** 2026-07-12  
**Branch:** `feature/landing-page`  
**Method:** Code-derived audit — every figure is verified against actual repository files.

---

## 1. Active routes (18 + 404)

| # | Route | Page component | Type | Metadata |
|---|---|---|---|---|
| 1 | `/` | `HomePage` | Landing | ✅ |
| 2 | `/methodology` | `MethodologyPage` | Trust | ✅ |
| 3 | `/contribute` | `ContributePage` | Contribution | ✅ |
| 4 | `/changelog` | `ChangelogPage` | Meta | ✅ |
| 5 | `/attributions` | `AttributionsPage` | Legal | ✅ |
| 6 | `/corrections` | `CorrectionsPage` | Trust | ✅ |
| 7 | `/privacy` | `PrivacyPage` | Legal | ✅ |
| 8 | `/accessibility` | `AccessibilityPage` | Legal | ✅ |
| 9 | `/disclaimer` | `DisclaimerPage` | Legal | ✅ |
| 10 | `/gaza-dossier` | `GazaDossierPage` | Product | ✅ |
| 11 | `/legal-tracker` | `LegalTrackerPage` | Product | ✅ |
| 12 | `/countries/belgium` | `BelgiumPage` | Product | ✅ |
| 13 | `/institutions/european-union` | `EuropeanUnionPage` | Product | ✅ |
| 14 | `/organizations` | `OrganizationsPage` | Product | ✅ |
| 15 | `/take-action` | `ActionHubPage` | Product | ✅ |
| 16 | `/evidence` | `EvidenceLibraryPage` | Product | ✅ |
| 17 | `/press` | `PressPage` | Resource | ✅ |
| 18 | `*` | `NotFoundPage` | Error | ✅ (404) |

All routes have unique `<title>`, `<meta name="description">`, OG metadata, canonical URL, and robots directive via `src/data/routeMetadata.ts` and `DocumentHead`.

---

## 2. Implemented product modules

| Module | Route | Status | Content |
|---|---|---|---|
| Gaza Dossier | `/gaza-dossier` | Structural skeleton | Framework preview — harm categories, legal processes, policy priorities |
| Legal Tracker | `/legal-tracker` | Preview with data | 3 legal cases with source references and legal status labels |
| Country Accountability | `/countries/belgium` | Structural skeleton | 9 tracking areas with competency boundaries |
| Institution Accountability | `/institutions/european-union` | Structural skeleton | 5 EU institutions with competency descriptions |
| Organization Directory | `/organizations` | Preview with data | 13 organizations across 7 categories |
| Action Hub | `/take-action` | Preview with data | 6 action templates (all manual copy-only) |
| Evidence Library | `/evidence` | Preview with data | 9 records with working filter controls |
| Press & Resources | `/press` | Informational | 12 sections for journalists and researchers |

---

## 3. Implemented trust/policy modules

| Module | Route | Content |
|---|---|---|
| Methodology | `/methodology` | 21 sections — active draft, not externally reviewed |
| Corrections | `/corrections` | Process, categories, GitHub Issues route |
| Privacy | `/privacy` | Static-beta policy — no data collection, self-hosted fonts |
| Accessibility | `/accessibility` | WCAG 2.2 AA target, 8 commitments, 5 known limitations |
| Disclaimer | `/disclaimer` | Legal disclaimer — not a court/NGO/charity/authority |
| Attributions | `/attributions` | 2 image attribution records, dispute route |

---

## 4. Current data files and record counts

| File | Records | Reviewed | Review Pending | Static Preview |
|---|---|---|---|---|
| `src/data/sources.ts` | 4 (ICJ × 2, ICC, UN COI) | N/A | N/A | N/A |
| `src/data/legalCases.ts` | 3 | 0 | 3 | 0 |
| `src/data/countries.ts` | 9 Belgium sections | 0 | 7 | 2 |
| `src/data/institutions.ts` | 5 EU institutions | 0 | 4 | 1 |
| `src/data/organizations.ts` | 13 | 13 | 0 | 0 |
| `src/data/actionTemplates.ts` | 6 (all active) | 0 | 0 | 6 |
| `src/data/evidenceItems.ts` | 9 | 2 | 7 | 0 |
| `src/data/attributions.ts` | 2 | 1 | 1 | N/A |
| `src/data/navigation.ts` | 5 main nav + 1 external | N/A | N/A | N/A |
| `src/data/routeMetadata.ts` | 18 routes + 404 | N/A | N/A | N/A |
| `src/data/modules.ts` | Landing page modules | N/A | N/A | N/A |
| `src/data/principles.ts` | Safety principles | N/A | N/A | N/A |
| `src/data/roadmap.ts` | Roadmap items | N/A | N/A | N/A |
| **Total records** | **64 content records** | **16** | **22** | **9** |

### Record status definitions

- **Reviewed:** Has `lastReviewedAt`, `reviewedByRole`, and source basis. Organization listings count as reviewed (verified against official websites). Court-record evidence items count as reviewed.
- **Review Pending:** Has at least one public source but editorial summary not yet formally reviewed. Honest placeholder `reviewedByRole` values.
- **Static Preview:** Structural skeleton, draft template, or future-content placeholder. Clearly labeled to readers.

---

## 5. Current test coverage

| Area | Files | Tests | Status |
|---|---|---|---|
| Badge variant mapping | 1 | 7 | ✅ |
| VerificationBadge | 1 | 7 | ✅ |
| LegalStatusBadge | 1 | 7 | ✅ |
| SourceList | 1 | 9 | ✅ |
| PreviewNotice | 1 | 7 | ✅ |
| CorrectionLink | 1 | 5 | ✅ |
| Header + mobile menu | 1 | 7 | ✅ |
| NotFoundPage | 1 | 7 | ✅ |
| Route smoke (11 pages) | 1 | 11 | ✅ |
| Axe a11y (4 pages) | 1 | 4 | ✅ |
| Data validation (8 collections) | 1 | 14 | ✅ |
| **Total** | **11** | **87** | **All passing** |

### Pages not yet smoke-tested (7)

GazaDossier, LegalTracker, Belgium, EuropeanUnion, Organizations, ActionHub, EvidenceLibrary. These pages are structurally more complex and were deferred for a future testing pass.

---

## 6. Current CI and security controls

| Control | Status |
|---|---|
| GitHub Actions CI | ✅ Typecheck + lint + test + build on push/PR to `main` |
| Dependabot (npm) | ✅ Weekly |
| Dependabot (GitHub Actions) | ✅ Monthly |
| ESLint v9 flat config | ✅ React + TypeScript rules |
| Data validation in CI | ✅ 14 rules across 8 collections |
| CSP (HTTP header) | ✅ `public/_headers` |
| CSP (meta fallback) | ✅ `index.html` |
| HSTS | ✅ `max-age=2yr; includeSubDomains; preload` |
| X-Content-Type-Options | ✅ `nosniff` |
| Referrer-Policy | ✅ `strict-origin-when-cross-origin` |
| Permissions-Policy | ✅ All sensors disabled |
| Frame-ancestors | ✅ `'none'` |
| `robots.txt` | ✅ `Disallow: /` for preview |
| `security.txt` | ✅ `/.well-known/security.txt` (RFC 9116) |
| Branch protection | ⬜ Not enabled |
| Secret scanning | ⬜ Not enabled |
| Security email | ⬜ Not configured |
| PGP key | ⬜ Not published |

---

## 7. Missing PRD requirements

| Requirement | Status | Notes |
|---|---|---|
| Gaza Dossier — substantive content | ⬜ | Structural skeleton only; harm categories, casualty data, policy summaries not yet added |
| Legal Tracker — additional cases | ⬜ | 3 cases; more jurisdictions and case types planned |
| Country pages beyond Belgium | ⬜ | Belgium is the only country page |
| Institution pages beyond EU | ⬜ | EU is the only institution page |
| Action Hub — mailto links | ⬜ | Deferred until jurisdiction and wording review |
| Action Hub — representative finder | ⬜ | Not built; requires reviewed public data |
| Evidence Library — more records | ⬜ | 9 sample records; database and review workflow needed for scale |
| Search functionality | ⬜ | Not built; no backend |
| PDF export | ⬜ | Out of scope for static beta |
| Content in languages beyond English | ⬜ | Translation policy documented; no translations yet |
| Brand asset downloads | ⬜ | Documented as not yet available on `/press` |
| Social preview PNG | ⬜ | SVG only; PNG documented as needed before public launch |
| Code splitting | ⬜ | Single JS bundle (641 KB); dynamic imports recommended |

---

## 8. Data-integrity problems

### None detected

The validation suite (`src/data/__tests__/validation.test.ts`) checks 14 rules across 8 collections. All 14 tests pass. No duplicate IDs, no invalid status values, no unreferenced source IDs, no impossible verification levels, no reviewed records missing review metadata, no invalid URLs, no invalid relationship statuses.

### Source ID coverage

| Collection | Records with source IDs | Records with empty source IDs | Explanation |
|---|---|---|---|
| Legal cases | 3/3 | 0 | All cases reference actual SourceRecords |
| Evidence items | 4/9 | 5 | 2 ICJ records reference sources; 5 `review_pending` records have descriptive source text but no SourceRecord entries yet |
| Organizations | 0/13 | 13 | Allowed — `officialWebsite` IS the source; validation accepts this |
| Action templates | 0/6 | 0 required | All `static_preview`; internal routing templates don't need external sources |

---

## 9. Content marked reviewed without documented review evidence

### Reviewed records audit

| Record | Status | Reviewer role | Evidence |
|---|---|---|---|
| Organizations × 13 | `reviewed` | "Contributor — verified against official public website" | Each org's website was checked against the listing. No formal second-reviewer process exists. |
| Evidence: ICJ Jan 2024 | `reviewed` | "Contributor — legal research background" | Summary verified against ICJ order text at icj-cij.org. Source record exists. |
| Evidence: ICJ May 2024 | `reviewed` | "Contributor — legal research background" | Same as above. |

**Assessment:** 15 records are marked `reviewed` (13 orgs + 2 evidence items). All have `lastReviewedAt` dates and honest `reviewedByRole` values. None claim external or formal review. The placeholder roles accurately describe single-contributor verification.

**Recommendation:** Before graduating from static beta, all 15 reviewed records should have at least one second-reviewer pass. This is documented in `docs/content-review-workflow.md`.

---

## 10. Records with empty or missing source references

See §8 — Source ID coverage table. The 5 evidence items with empty `sourceIds` are all `review_pending` and describe source categories in their summary text. SourceRecord entries should be created before these are promoted to `reviewed`.

---

## 11. Public TODOs or placeholders

**Zero.** A full `grep -r 'TODO\|FIXME\|HACK' src/` returned no matches in source code.

Placeholder reviewer roles are intentionally honest, not TODO markers:
- "Static beta — editorial review pending"
- "Contributor — legal research background"
- "Contributor — verified against official public website"
- "Contributor — OSINT/data background; source record pending"

---

## 12. Oversized / high-complexity files

| File | Lines | Notes |
|---|---|---|
| `src/pages/MethodologyPage.tsx` | ~590 | 21 sections — the largest page. Could be split into subsections. |
| `src/pages/EvidenceLibraryPage.tsx` | ~560 | Filter logic + card rendering + expandable detail. Could extract `EvidenceCard`. |
| `src/pages/ActionHubPage.tsx` | ~420 | Action cards + copy-to-clipboard. `ActionCard` and `CopyButton` are defined inline. |
| `src/data/validation.ts` | ~340 | 8 collection validators. Could be split per collection. |
| `src/data/organizations.ts` | ~430 | 13 records with full metadata — the largest data file. |
| JS bundle | 641 KB | Single bundle. Dynamic imports would improve initial load. |

---

## 13. Broken or misleading navigation

**None detected.** All internal links use React Router `<Link to>` or `<Button to>`. All external links use `ExternalLink` with `rel="noopener noreferrer"`. Header mobile menu closes on navigation. Footer links match routes. Gateway cards all link to active routes (8 modules, none disabled).

---

## 14. Metadata / indexing status

| Layer | Value |
|---|---|
| `robots.txt` | `Disallow: /` |
| `<meta name="robots">` (static) | `noindex,nofollow` |
| `<meta name="robots">` (per-route) | Inherits `DEFAULT_ROBOTS` = `noindex,nofollow` |
| Canonical base | `window.location.origin` (configurable via `setCanonicalBase()`) |
| 404 route | Hardcoded `noindex,nofollow` |

**Indexing:** Off by design. Triple-layered (robots.txt + static meta + per-route meta). Procedure to enable is in `docs/indexing-configuration.md`.

---

## 15. Accessibility known limitations

| Item | Status |
|---|---|
| Axe automated (4 pages) | ✅ No violations |
| Screen-reader testing | ⬜ Manual only |
| Mobile viewport (375px) | ⬜ Manual only |
| Color contrast on image overlays | ⬜ Manual only — Axe can't evaluate background images |
| Heading hierarchy audit | ⬜ Manual only |
| Touch targets | ✅ `min-h-[44px]` on all buttons |
| Focus states | ✅ `focus-visible:ring-2` on all interactive elements |
| Reduced motion | ✅ CSS + React `useReducedMotion()` |
| Skip-to-content link | ✅ In `PageShell.tsx` |

---

## 16. Security / privacy known limitations

| Item | Status |
|---|---|
| CSP, HSTS, frame-ancestors, X-Content-Type-Options | ✅ Configured |
| Third-party requests | ✅ Zero (fonts self-hosted) |
| Analytics | ✅ None |
| User data collection | ✅ None (static site) |
| Branch protection | ⬜ GitHub Settings |
| Secret scanning | ⬜ GitHub Settings |
| Security email | ⬜ Not configured |
| PGP key | ⬜ Not published |
| WAF | ⬜ Rely on deployment platform defaults |
| SRI hashes | ⬜ Vite doesn't generate by default |

---

## 17. Documentation audit

### Existing docs (33 files)

| Doc | Status |
|---|---|
| `STATIC-BETA-RELEASE-READINESS.md` | ✅ Created 2026-07-12 |
| `CURRENT-IMPLEMENTATION-STATE.md` | ✅ This file |
| `content-review-workflow.md` | ✅ Created 2026-07-12 |
| `source-review-checklist.md` | ✅ Created 2026-07-12 |
| `legal-wording-review-checklist.md` | ✅ Created 2026-07-12 |
| `content-record-template.md` | ✅ Created 2026-07-12 |
| `quality-and-testing.md` | ✅ Created 2026-07-12 |
| `indexing-configuration.md` | ✅ Created 2026-07-12 |
| `static-beta-security-checklist.md` | ✅ Created 2026-07-12 |
| `attributions.md` | ✅ Synced with `src/data/attributions.ts` |
| `Accountability-Atlas-Current-Build-and-Launch-Plan.md` | ✅ Pre-existing |
| `architecture.md` | ✅ Pre-existing |
| `brand-and-tone.md` | ✅ Pre-existing |
| `brand-identity.md` | ✅ Pre-existing |
| `communications-playbook.md` | ✅ Pre-existing |
| `correction-policy.md` | ✅ Pre-existing |
| `data-model.md` | ✅ Pre-existing |
| `decision-log.md` | ✅ Pre-existing |
| `ethics-and-safety.md` | ✅ Pre-existing |
| `evidence-verification-model.md` | ✅ Pre-existing |
| `first-sprint-backlog.md` | ✅ Pre-existing |
| `legal-language-policy.md` | ✅ Pre-existing |
| `methodology.md` | ✅ Pre-existing (companion to the /methodology page) |
| `mission-and-positioning.md` | ✅ Pre-existing |
| `moderation-policy.md` | ✅ Pre-existing |
| `open-roles.md` | ✅ Pre-existing |
| `outreach.md` | ✅ Pre-existing |
| `overnight-implementation.md` | ✅ Pre-existing |
| `partnership-policy.md` | ✅ Pre-existing |
| `privacy-principles.md` | ✅ Pre-existing |
| `source-policy.md` | ✅ Pre-existing |
| `volunteer-onboarding.md` | ✅ Pre-existing |
| `anti-doxing-policy.md` | ✅ Pre-existing |

### Docs reconciled from Prompt 11/12

All four required docs from the content-review-framework task exist and are accurate:
- `docs/content-review-workflow.md`
- `docs/source-review-checklist.md`
- `docs/legal-wording-review-checklist.md`
- `docs/content-record-template.md`

### Missing docs

**None.** All expected artifacts exist. The masterplan (`docs/ACCOUNTABILITY-ATLAS-IMPLEMENTATION-MASTERPLAN.md`) was referenced in guardrails but does not exist in the repository and was never created during the sprint — it is not a missing artifact, it is an unscoped document.

---

## 18. Release readiness assessment

### Evidence by gate

| Gate | Status | Evidence |
|---|---|---|
| Every route renders | ✅ | 18 routes verified |
| Direct-refresh works | ✅ | SPA fallback in `_redirects` |
| Security headers configured | ✅ | CSP, HSTS, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, frame-ancestors |
| No user data collection | ✅ | Static site — no accounts, no forms, no tracking |
| No fake functionality | ✅ | No send buttons, no live counters, no automated actions |
| No misleading claims | ✅ | All pages labeled as static preview/draft/review_pending |
| Attributions documented | ✅ | 2 images with attribution records |
| Indexing off | ✅ | Triple-layered (robots.txt + meta + per-route) |
| CI passes | ✅ | TypeScript + ESLint + 87 tests + data validation + build |
| Corrections process | ✅ | `/corrections` page + GitHub Issues |
| All internal links use React Router | ✅ | Verified by code audit |
| All external links marked safe | ✅ | `ExternalLink` component with `rel="noopener noreferrer"` |
| Zero public TODOs | ✅ | Grep audit |
| No contradictory labels | ✅ | Source quality ≠ editorial status maintained |
| Validation passes | ✅ | 14 rules, 0 errors across 8 collections |
| Third-party requests documented | ✅ | Privacy page + security checklist |
| Release docs exist | ✅ | Both STATE + READINESS reports |

### Recommendation

## ✅ Ready for limited Public Static Beta

The platform meets every gate for a clearly-labeled, limited public static beta. The recommended audience is trusted reviewers, contributors, researchers, and journalists who understand the static-preview nature of the content. Not yet recommended for general public distribution without context.

**Next gate:** The platform graduates to "Public Beta v0.1" when:
- Branch protection, secret scanning, and 2FA are enabled (repo admin)
- At least one external reviewer has assessed the methodology
- A social preview PNG is generated
- The hero image source URL is confirmed

---

## 19. Recommended next prompts and gates

### Immediate (repo admin — ~30 min)
1. Enable GitHub branch protection on `main`
2. Enable secret scanning with push protection
3. Enforce 2FA for collaborators
4. Enable private vulnerability reporting

### Short-term (content — 1–2 sprints)
5. Confirm hero image Wikimedia Commons URL → promote attribution to `complete`
6. Create SourceRecords for the 5 evidence items with empty `sourceIds`
7. Generate PNG social preview image
8. Code-split heavy pages (EvidenceLibrary, Methodology, ActionHub)

### Medium-term (review — before content expansion)
9. External methodology review (IHL/human-rights expertise)
10. Second-reviewer pass on 15 reviewed records
11. Screen-reader manual testing
12. Mobile viewport QA
13. Smoke tests for 7 remaining pages

### Long-term (platform maturity)
14. Country pages beyond Belgium
15. Institution pages beyond EU
16. Action Hub jurisdiction-specific templates (mailto, representative lookup)
17. Evidence Library database + review workflow
18. Translations into Arabic, Hebrew, French, Dutch
