# Evidence Verification Model

This document defines how evidence items are categorized before publication.

---

## Purpose

The platform must separate leads, reports, corroborated incidents, legal records, and verified evidence. This protects credibility and reduces harm.

---

## Verification levels

### Level 0 — Source lead

A potential item found through social media, a tip, a news mention, or an unreviewed submission.

Public display: normally no.  
Use: internal triage only.  
Label if displayed: `Unreviewed lead`.

### Level 1 — Publicly reported

The claim has been reported by at least one public source with date and attribution.

Public display: yes, with caution.  
Label: `Publicly reported`.

### Level 2 — Corroborated

The claim is supported by two or more independent sources, or one strong primary source.

Public display: yes.  
Label: `Corroborated`.

### Level 3 — Geolocated / chronolocated

Media or incident details have been matched to a place and time using transparent OSINT methods.

Public display: yes, with safety review.  
Label: `Geolocated/chronolocated`.

### Level 4 — NGO/UN documented

The incident or pattern appears in documentation by a UN body, humanitarian organization, or major human-rights organization.

Public display: yes.  
Label: `Documented by [source]`.

### Level 5 — Court/legal record

The item appears in a court filing, warrant, order, judgment, sanctions record, official legal submission, or parliamentary/government record.

Public display: yes.  
Label: `Legal/public record`.

### Level X — Disputed or retracted

The item has been challenged, corrected, or retracted.

Public display: possibly, if the correction itself is relevant.  
Label: `Disputed`, `Corrected`, or `Retracted`.

---

## Evidence item schema

Each item should include:

```yaml
id:
title:
summary:
incident_type:
location:
location_precision:
date:
time:
sources:
verification_level:
verification_notes:
legal_relevance:
humanitarian_relevance:
media:
safety_flags:
privacy_flags:
published_status:
reviewed_by:
last_reviewed_at:
correction_history:
```

---

## Location precision

Location should be classified:

- country only;
- region/province;
- city/town;
- neighborhood;
- approximate coordinates;
- exact coordinates.

Do not show exact coordinates if doing so could expose vulnerable people, shelters, medical sites, aid routes, or witnesses.

---

## Media handling

Before using media:

- confirm lawful use or link instead of reuploading;
- avoid graphic thumbnails;
- check for identifying details;
- check whether publication could endanger someone;
- verify context where possible;
- strip metadata if stored;
- record source and date.

---

## Review workflow

```text
lead found
→ source logged
→ duplicate check
→ source quality review
→ location/date review
→ legal language review if needed
→ privacy/safety review
→ publication decision
→ correction monitoring
```

---

## Publication statuses

```text
draft
needs-source
needs-review
needs-legal-review
needs-safety-review
approved
published
corrected
disputed
retracted
archived
```

---

## Minimum standard for public MVP

For the first MVP, publish only:

- legal records;
- UN/humanitarian organization reports;
- major NGO reports;
- official government/parliamentary records;
- carefully attributed reputable journalism;
- no raw user submissions.

---

## Correction trail

Every evidence item should preserve a correction history:

- what changed;
- why it changed;
- who reviewed it;
- date changed;
- source that triggered change.
