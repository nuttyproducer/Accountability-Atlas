# Data Model

This document defines early data structures. The MVP can use YAML/JSON/Markdown before moving to a database.

---

## Source

```yaml
id: icj-case-192
source_type: court-record
title: "Application of the Convention on the Prevention and Punishment of the Crime of Genocide in the Gaza Strip"
publisher: "International Court of Justice"
author: null
published_date: "YYYY-MM-DD"
accessed_date: "YYYY-MM-DD"
url: "https://..."
archive_url: null
language: "en"
summary: "Short neutral summary."
relevance: "Why this source matters."
reliability_note: "Primary court source."
license_note: "Link only; do not reproduce full document unless permitted."
```

---

## Country accountability page

```yaml
id: belgium
name: Belgium
region: Europe
eu_member: true
last_updated: "YYYY-MM-DD"
summary: "Neutral country summary."
positions:
  ceasefire:
    status: "supports / opposes / mixed / unclear"
    sources: []
  humanitarian_access:
    status: "..."
    sources: []
  arms_transfers:
    status: "..."
    sources: []
  icc_icj_support:
    status: "..."
    sources: []
public_actions:
  - action_id: belgium-email-foreign-minister
scorecard:
  methodology_version: "0.1"
  scores:
    humanitarian_access: null
    arms_transfer_review: null
    legal_accountability: null
    transparency: null
notes:
  - "All scores are methodology-dependent and should be reviewed."
```

---

## Organization directory entry

```yaml
id: unrwa
name: "UNRWA"
organization_type: "UN body"
website: "https://..."
regions:
  - Gaza
  - West Bank
  - East Jerusalem
  - Lebanon
  - Jordan
  - Syria
public_summary: "Neutral summary of public mission/work."
official_donation_url: "https://..."
partnership_status: "public-resource-listed"
partnership_note: "This organization has not necessarily reviewed, endorsed, or partnered with Accountability Atlas."
sources: []
last_reviewed: "YYYY-MM-DD"
contact_public: null
logo_usage_permission: "not-requested"
```

---

## Legal case

```yaml
id: icj-south-africa-israel-genocide-convention
body: "International Court of Justice"
case_name: "..."
case_number: "..."
parties:
  applicant: "..."
  respondent: "..."
status: "proceedings ongoing"
legal_area:
  - genocide-convention
important_dates:
  - date: "YYYY-MM-DD"
    event: "Application filed"
    source_id: "..."
summary: "Legally careful summary."
latest_update: "..."
sources: []
legal_language_reviewed: false
```

---

## Action template

```yaml
id: belgium-email-mp-humanitarian-access
country: Belgium
action_type: email
recipient_type: elected-representative
target_office: "Member of Parliament"
language: "en"
title: "Ask Belgium to support humanitarian access and accountability"
summary: "Short explanation."
body_template: "..."
legal_reviewed: false
anti_spam_reviewed: false
sources: []
```

---

## Evidence item

```yaml
id: evidence-0001
title: "Short neutral title"
summary: "Short sourced summary."
incident_type: "humanitarian-access / attack / displacement / legal-record / other"
location:
  country: "..."
  region: "..."
  locality: "..."
  coordinates: null
  precision: "city"
date: "YYYY-MM-DD"
time: null
sources: []
verification_level: "ngo-un-documented"
verification_notes: "..."
legal_relevance: "..."
humanitarian_relevance: "..."
media:
  has_media: false
  media_links: []
safety_flags: []
privacy_flags: []
published_status: "draft"
reviewed_by: []
last_reviewed_at: null
correction_history: []
```

---

## Contributor

Public contributor profiles should be optional.

```yaml
id: contributor-handle
name_or_handle: "..."
role: "frontend / research / design / etc."
public_contact: null
private_contact: "not in repo"
permissions: "public contributor"
```

---

## Future database tables

Later backend may include:

- sources;
- countries;
- country_positions;
- organizations;
- legal_cases;
- legal_events;
- actions;
- action_templates;
- evidence_items;
- reviews;
- corrections;
- users/admins;
- audit_logs.

Sensitive submissions should be handled in a separate system after expert review.
