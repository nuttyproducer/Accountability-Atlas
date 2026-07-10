Yes — **we are on the right track now.** The current page finally has a real identity: the hero says what the project is about, the Gaza focus is unmistakable, the roadmap feels more strategic, and the visual language is no longer generic. It still needs polish, but the direction is right.

Now the important mentor note: **we should stop treating the landing page as the whole product.** It has done its job: it gives the project a face. From here, we need to start building the first real information architecture.

## PRD inspection: what the project really is

The PRD is still strong. It defines Accountability Atlas as a human-rights civic-tech platform with Gaza/oPt as the primary launch focus and later expansion to other mass-atrocity contexts. It is not just a landing page; it is a framework for evidence, legal tracking, country accountability, action tools, dossiers, and organization directories. 

The clearest definition is this:

> Accountability Atlas turns dispersed evidence into structured civic infrastructure: verified evidence, methodology, country/institution accountability pages, lawful action tools, downloadable dossiers, humanitarian aid directory, legal tracker, security-aware submission roadmap, and future expansion to other crises. 

That is our product.

Not a petition.
Not a charity page.
Not a news site.
Not a rage campaign.
Not a database dump.

It is:

```text
verified evidence → structured understanding → lawful pressure → public accountability
```

## Who we are building this for

We need to keep two audience layers in mind.

### Immediate audience: contributors and reviewers

Right now, the live site is mainly for:

* developers
* designers
* researchers
* legal/human-rights reviewers
* OSINT/source-verification people
* writers/translators
* security/privacy reviewers
* journalists or policy people willing to give feedback

They need to see that this project is serious, safe, structured, and worth helping.

### Product audience: public platform users

The PRD defines the main users as concerned citizens, activists/community organizers, journalists/researchers, policymakers/staffers, NGOs/humanitarian organizations, and legal workers/human-rights defenders. Each group has a different job-to-be-done: citizens need facts and lawful actions; organizers need templates and dossiers; journalists need sourced timelines; policymakers need short jurisdiction-specific briefs; NGOs need safe visibility; legal workers need structured evidence trails. 

So the platform must serve:

```text
citizens who want to act
journalists who need sources
policy staff who need briefs
researchers who need structure
NGOs who need safe visibility
legal reviewers who need precision
contributors who need clear tasks
```

That is the north star.

## Current landing page review

Your current page is a **big improvement**.

What works now:

* the hero finally has moral clarity;
* the Gaza focus section is visually strong;
* the page no longer feels like generic civic-tech filler;
* the roadmap is much better as a horizontal build path;
* the footer still feels institutional;
* the visual style now supports the message instead of hiding it.

What still needs polish:

* The page still needs stronger **pathways** into the future platform.
* The core modules are good, but they should eventually become preview cards linking to actual pages.
* The current home page is mostly “what we are building.” The next version needs to become “enter the system.”
* The top navigation is still contributor-site navigation. Later it should evolve toward product navigation: Evidence, Countries, Legal Tracker, Take Action, Organizations, Methodology.
* The page needs an Attributions/Image Credits route because we are using open-licensed images.
* We should not keep endlessly tweaking the landing page. One more finishing pass, then move into real pages.

## Brutal PRD correction

The PRD is ambitious. Good. But if we treat the full MVP list as “next sprint,” we will drown.

The PRD says the MVP should include home, Gaza dossier, legal tracker, curated evidence library, Belgium/EU country pages, action hub, organization directory, methodology page, press/resources, admin CMS, basic dossier export, privacy-first analytics, static source references, and correction submission form. 

That is too much for one phase if you are solo.

So we split it into two levels:

## Level 1: Static Public Beta

This is what we build now.

No backend.
No admin CMS.
No database.
No sensitive submissions.
No PDF generator yet.
No live map.
No action tracking.

But we **do** build real pages, using static data and source-safe placeholders.

## Level 2: Functional MVP

This comes after the public beta is structured and reviewed.

That is when we add Supabase/PostgreSQL, admin workflows, correction submission storage, dossier generation, and more serious data architecture.

The PRD itself supports this “static shell first” approach: the first development sprint calls for a credible static MVP shell with routes, home page, methodology page, organization directory UI, legal tracker UI, country page template, sample Belgium/EU pages, evidence item template, correction form UI, static source JSON, and deploy preview. 

That is exactly what we should do.

---

# What we can build from today

## Sprint 1A — Finish the current landing page

Do this before expanding:

```text
1. Final hero polish
2. Final Starting Focus polish
3. Mobile responsiveness pass
4. Roadmap mobile behavior check
5. Attributions page/link
6. Footer links updated
7. SEO metadata updated
8. Accessibility pass
9. Build + deploy preview
```

Acceptance:

```text
npm run build passes
mobile looks strong
all CTAs go somewhere useful
no image attribution gaps
no false partner claims
no placeholder dead ends
```

Then stop polishing the landing page.

---

## Sprint 2 — Methodology page

Build this first. The PRD says the Methodology page may become the most important page because it explains mission/scope, source hierarchy, verification levels, legal terminology, correction policy, moderation, privacy, partner verification, AI policy, doxing/harassment ban, citation guidance, and correction contact. 

Route:

```text
/methodology
```

Sections:

```text
1. Mission and scope
2. Source hierarchy
3. Verification levels
4. Legal terminology policy
5. Genocide terminology policy
6. What counts as evidence
7. What is only a lead
8. Correction policy
9. Anti-doxing and safety policy
10. How to cite Accountability Atlas
```

This page is critical because every future page can link back to it.

Build it as a beautiful, serious page — not a wall of text.

Suggested UI:

```text
source hierarchy cards
verification level table
legal status badge examples
correction process timeline
red-line policy block
```

---

## Sprint 3 — Gaza Accountability Dossier preview

Route:

```text
/gaza-dossier
```

Do **not** try to write the final legal dossier yet. Build the structure first.

Sections:

```text
1. Overview
2. Humanitarian situation
3. Legal status
4. Key documented harm categories
5. Source categories
6. Policy asks
7. Action routes
8. Source list
9. Correction link
```

Important: every current legal/humanitarian fact must be verified before publishing. For now, we can build the UI and use “source pending / draft” labels.

This page should show what the product will become.

---

## Sprint 4 — Legal Tracker preview

Route:

```text
/legal-tracker
```

Build a static legal tracker UI with status labels.

Initial case types from PRD:

```text
ICJ cases
ICC investigations/warrants
UN Commission of Inquiry findings
universal jurisdiction cases
sanctions procedures
national parliamentary inquiries
```

The PRD already defines the legal tracker fields: case title, institution, jurisdiction, status, date opened, latest update, alleged crimes, source documents, next milestone, and action opportunities. 

UI components:

```text
LegalCaseCard
LegalStatusBadge
SourceLinkList
TimelineEvent
CaseDetailPreview
```

Use careful labels:

```text
Court proceeding active
Provisional measures issued
Arrest warrant issued
NGO legal determination
UN finding
Not yet judicially determined
Requires further verification
```

---

## Sprint 5 — Belgium and EU accountability pages

Routes:

```text
/countries/belgium
/institutions/european-union
```

or:

```text
/countries/belgium
/countries/eu
```

The country pages are central to the platform. The PRD says they should show government position, UN voting record, arms-transfer position, humanitarian aid, ICC/ICJ stance, officials to contact, email templates, call scripts, downloadable dossier, and correction link. 

Start static.

Belgium page:

```text
1. Overview
2. Current position
3. UN/EU voting record
4. Arms-transfer review area
5. Humanitarian aid
6. Representatives/contact routes
7. Action templates
8. Download dossier preview
9. Sources
```

EU page:

```text
1. European Council position
2. Commission statements/actions
3. Parliament resolutions
4. EU-Israel Association Agreement area
5. Sanctions/restrictive measures area
6. MEP contact route
7. EU petition route
8. Sources
```

Do not score countries yet unless the methodology is published.

---

## Sprint 6 — Organization Directory

Route:

```text
/organizations
```

This is safe to build early because we can make it clearly “public resource only.”

The PRD says organization listings should distinguish public resource, contacted, verified partner, data partner, donation partner, and local partner, and it explicitly says the platform should not handle money during MVP. 

Start with public-resource cards only.

Fields:

```text
Name
Type
Region
Official website
Official donation URL, if public
Status: Public resource
Last reviewed
Correction request link
```

UI categories:

```text
UN / humanitarian
Red Cross / Red Crescent
Medical
Human-rights / legal
Documentation / data
Journalism / press freedom
Civil society / community later
```

Critical copy:

```text
Listing does not imply partnership, endorsement, approval, or affiliation.
```

---

## Sprint 7 — Action Hub preview

Route:

```text
/take-action
```

Build static action cards first.

The PRD defines action types such as email representative, call script, send policy dossier, contact MEP/MP, contact foreign ministry, contact arms-export authority, share verified source card, donate via official organization link, attend lawful event, volunteer, and submit correction/source. 

Do not build email sending yet.

Use:

```text
copy template
mailto later
download brief later
manual action first
```

Action cards:

```text
Contact your representative
Ask for arms-transfer review
Support humanitarian access
Send a dossier to a journalist
Submit a correction/source
Volunteer for the project
```

Each card should have:

```text
Who this is for
What this does
Safety note
Button: View template
```

---

## Sprint 8 — Evidence Library preview

Route:

```text
/evidence
```

This is delicate. Build the **structure**, not a giant evidence database yet.

The PRD defines evidence library content types and verification levels, from unreviewed lead to legal/institutional record. 

Start with curated source summaries, not incident-level claims.

UI:

```text
EvidenceItemCard
VerificationBadge
SourceTypeBadge
CategoryFilter
EvidenceDetailTemplate
CorrectionLink
```

Static data:

```text
src/data/evidenceItems.ts
src/data/sources.ts
```

Each item should include:

```text
title
summary
source type
verification level
source URL
last reviewed
status
```

Do not publish raw social media claims as facts.

---

## Sprint 9 — Press / Resources page

Route:

```text
/press
```

For journalists and contributors.

Sections:

```text
1. Project summary
2. 60-second pitch
3. Methodology links
4. Founder/project contact
5. Logo/brand assets later
6. Safe quote policy
7. Source citation guide
8. Press note
```

The PRD specifically says press/resources should help journalists and creators use the platform responsibly with methodology, contact route, templates, social cards, quote policy, and source citation guide. 

---

# Recommended route map now

I would set up these routes now, even if some are previews:

```text
/
 /methodology
 /gaza-dossier
 /legal-tracker
 /countries/belgium
 /institutions/european-union
 /organizations
 /take-action
 /evidence
 /press
 /contribute
 /attributions
```

Top nav for now:

```text
Gaza Dossier
Legal Tracker
Countries
Take Action
Methodology
Contribute
```

Mobile nav can collapse under “Menu.”

Footer nav:

```text
Methodology
Gaza Dossier
Legal Tracker
Organizations
Take Action
Contribute
Security
Attributions
GitHub
```

---

# What to build as previews

Yes, we can create previews now. But they must be clearly labeled:

```text
Static preview
Methodology draft
Source pending
Public resource only
No partnership implied
Correction welcome
```

Good preview components:

```text
LegalTrackerPreview
CountryAccountabilityPreview
OrganizationDirectoryPreview
ActionHubPreview
EvidenceLibraryPreview
DossierPreviewCard
MethodologyTrustBlock
```

The home page can then evolve from “manifesto” into “gateway.”

---

# Updated homepage direction

The current homepage is good, but the PRD expects more gateway sections: action cards, latest verified updates, country accountability preview, legal tracker preview, organization directory preview, and methodology trust block. 

So after the current sections, add a new area:

## “Enter the accountability system”

Three cards:

```text
Explore the Gaza Dossier
See what is documented, what is alleged, and which legal processes are active.

Track Country Responsibility
Start with Belgium and the EU: positions, votes, arms-transfer questions, and action routes.

Use Lawful Action Templates
Contact representatives, journalists, institutions, and civic groups with sourced, non-harassing templates.
```

This will bridge the landing page into the real product.

---

# What not to build yet

Do **not** build these yet:

```text
public witness submissions
live map
donation system
country score numbers
user accounts
AI translation
scrapers
email sending
admin CMS
dynamic PDF generator
partner login
newsletter automation
```

The PRD explicitly excludes sensitive witness vaults, public live user-report maps, SecureDrop as a core flow, AI testimony translation, direct fundraising, private target lists, social scraping, exact-location publishing, and public user accounts from Phase 1. 

That boundary is correct.

---

# PRD updates I would make now

The PRD is good, but update it with what we learned today.

## 1. Add “Public Static Beta” before MVP

New stage:

```text
Phase 0.5 — Public Static Beta

Goal:
Make the platform understandable, credible, and reviewable before backend development.

Deliverables:
- landing page
- methodology page
- Gaza dossier preview
- legal tracker preview
- Belgium/EU page previews
- organization directory preview
- action hub preview
- evidence item template
- attributions page
```

## 2. Add image/attribution policy

Because we are now using open-licensed images.

Rules:

```text
Every image must have:
title
author
source URL
license
where used
modification note
```

## 3. Add “no dead placeholder pages” rule

Every route should provide at least:

```text
what this page will become
why it matters
current status
links to source docs/repo
next contribution request
```

## 4. Add “static source JSON first”

Before database:

```text
src/data/sources.ts
src/data/legalCases.ts
src/data/organizations.ts
src/data/countries.ts
src/data/actionTemplates.ts
src/data/evidenceItems.ts
```

This lets us design the full product before backend complexity.

## 5. Add “review before factual publication”

Any page containing current legal or humanitarian claims must pass:

```text
source check
language check
date check
legal-status check
safety check
```

---

# Suggested file structure expansion

Add these now:

```text
src/
  components/
    evidence/
      EvidenceItemCard.tsx
      VerificationBadge.tsx
      SourceTypeBadge.tsx
    legal/
      LegalCaseCard.tsx
      LegalStatusBadge.tsx
    countries/
      CountryOverviewCard.tsx
      AccountabilitySignal.tsx
      ActionTemplatePreview.tsx
    organizations/
      OrganizationCard.tsx
      OrganizationStatusBadge.tsx
    actions/
      ActionCard.tsx
      TemplatePreview.tsx
    dossiers/
      DossierCard.tsx
    pages/
      PageIntro.tsx

  data/
    sources.ts
    legalCases.ts
    organizations.ts
    countries.ts
    actionTemplates.ts
    evidenceItems.ts
    dossierTemplates.ts

  pages/
    GazaDossierPage.tsx
    LegalTrackerPage.tsx
    BelgiumPage.tsx
    EUPage.tsx
    OrganizationsPage.tsx
    ActionHubPage.tsx
    EvidenceLibraryPage.tsx
    PressPage.tsx
    AttributionsPage.tsx
```

---

# My recommended next sprint

## Sprint 2: “Trust and Product Shell”

Goal:

> Turn the site from a landing page into a navigable static beta.

Deliverables:

```text
1. Finish landing page polish
2. Real Methodology page
3. Attributions page
4. Gaza Dossier preview page
5. Legal Tracker preview page
6. Belgium page skeleton
7. EU page skeleton
8. Organization Directory preview
9. Action Hub preview
10. Navigation/footer update
```

Definition of done:

```text
all pages route correctly
all pages are responsive
no dead placeholders
all claims are cautious or marked draft
image attributions exist
no false partnerships
no sensitive forms
build passes
```

---

# Short version of the plan

You are here:

```text
PRD done
repo docs done
landing page mostly done
brand direction working
```

Next:

```text
finish landing page
build methodology
build attributions
build static product pages
add preview data
then ask reviewers
```

Not yet:

```text
backend
database
admin CMS
witness submissions
donations
PDF engine
public outreach blast
```

## Final verdict

The PRD is valid. The current page now finally matches the mission. The next move is not more hero tweaking. The next move is to build the **static platform skeleton**:

```text
Methodology
Gaza Dossier
Legal Tracker
Belgium/EU accountability pages
Organization Directory
Action Hub
Evidence Library preview
Attributions
```

That gives you something real to show to contributors, reviewers, journalists, and civic-tech people.

You are no longer only designing a landing page. You are now building the first visible layer of Accountability Atlas.
