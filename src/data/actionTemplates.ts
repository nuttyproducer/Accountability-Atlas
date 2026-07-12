import type { ContentStatus } from "../types/content";

/**
 * Action types for the lawful civic action hub.
 *
 * Every action is manual copy-only during the static beta.
 * The platform does not send, store, track, or automate any action.
 */
export type ActionType =
  | "contact_representative"
  | "arms_transfer_review"
  | "humanitarian_access"
  | "send_dossier"
  | "submit_correction"
  | "volunteer";

export const ACTION_TYPE_LABELS: Record<ActionType, string> = {
  contact_representative: "Contact a representative",
  arms_transfer_review: "Ask for arms-transfer review",
  humanitarian_access: "Support humanitarian access",
  send_dossier: "Send a dossier to a journalist",
  submit_correction: "Submit a correction or public source",
  volunteer: "Volunteer for the project",
};

export interface ActionTemplate {
  id: string;
  slug: string;
  title: string;
  actionType: ActionType;
  /** Jurisdiction where this action is relevant. */
  jurisdiction: string;
  /** Who this action is written for. */
  intendedAudience: string;
  /** Why this action exists — the accountability problem it addresses. */
  purpose: string;
  /** What the recipient (representative, official, journalist, etc.) can realistically do. */
  policyAsk: string;
  /** Legal or procedural basis for the action. */
  sourceBasis: string;
  /** Step-by-step instructions for completing the action safely. */
  instructions: string;
  /** Draft template body — copy-only during static beta. Labeled clearly as draft or reviewed. */
  templateBody?: string;
  /** Template review status: "draft" = not yet reviewed, "reviewed" = reviewed for safety and accuracy. */
  templateReviewStatus?: "draft" | "reviewed";
  /** Language the template is written in. */
  language: string;
  contentStatus: ContentStatus;
  sourceIds: string[];
  lastReviewedAt?: string;
  reviewedByRole?: string;
  version: number;
  /** Related routes on this platform. */
  relatedRoutes: string[];
  /** Safety and limitation warnings displayed prominently on the card. */
  warnings: string[];
  /** Whether this action is currently displayed on the page. */
  active: boolean;
}

export const actionTemplates: ActionTemplate[] = [
  {
    id: "contact-representative",
    slug: "contact-representative",
    title: "Contact your representative",
    actionType: "contact_representative",
    jurisdiction: "Any country with elected or appointed public representatives",
    intendedAudience:
      "Constituents who want to contact their representatives about accountability, civilian protection, humanitarian access, or adherence to international law.",
    purpose:
      "Elected and appointed representatives have the ability to ask parliamentary questions, call for government statements, request briefings, and raise issues in formal proceedings. Contacting them is a basic lawful civic action.",
    policyAsk:
      "Representatives can: ask written or oral parliamentary questions; request government briefings on policy positions; call for scrutiny of arms-export licences; raise humanitarian-access concerns in official proceedings; and press for transparency about government positions on international legal obligations.",
    sourceBasis:
      "Parliamentary procedures vary by country. Most representative democracies provide public contact channels for constituents. This action is based on the general right to petition and contact elected representatives, recognised in many jurisdictions.",
    instructions: `1. Identify your representative. Look up your electoral district or constituency on your government's official website. Do not rely on third-party contact databases.
2. Find their official contact form, email address, or postal address. Use only official parliamentary or government websites.
3. Adapt the template below to your own words. Personal messages are more effective than identical form letters.
4. Be polite, specific, and factual. Reference public sources where possible.
5. Include your name and address so they can verify you are a constituent. Most representatives only respond to their own constituents.
6. Send the message yourself. This platform does not send messages on your behalf.`,
    templateBody: `[Your name]
[Your address — required so they can verify you are a constituent]

Dear [Representative's name],

I am writing as a constituent to ask about [country]'s position on [specific issue: civilian protection / humanitarian access / arms exports / international legal obligations].

I would be grateful if you could:
- [Specific ask, e.g. "ask a parliamentary question about..." / "request a public briefing on..." / "raise the issue of humanitarian access with the relevant minister"]

I am asking because [brief personal reason — why this matters to you].

Thank you for your time and for representing our community.

Yours sincerely,
[Your name]`,
    templateReviewStatus: "draft",
    language: "en",
    contentStatus: "static_preview",
    sourceIds: [],
    version: 1,
    relatedRoutes: ["/methodology", "/countries/belgium"],
    warnings: [
      "This page does not look up your representative. Use your government's official website.",
      "No message is sent through this platform. Copy the text and send it yourself.",
      "This is draft template text — adapt it to your own words before sending.",
      "Do not send threats, abuse, or harassing messages. Lawful civic action only.",
      "Do not impersonate another person or use false identity information.",
    ],
    active: true,
  },
  {
    id: "arms-transfer-review",
    slug: "arms-transfer-review",
    title: "Ask for an arms-transfer review",
    actionType: "arms_transfer_review",
    jurisdiction:
      "Countries that export arms or arms components and have parliamentary scrutiny mechanisms",
    intendedAudience:
      "Constituents concerned about arms exports to contexts where serious violations of international humanitarian law are alleged.",
    purpose:
      "Many countries require parliamentary or judicial scrutiny of arms-export licences, particularly where there is a clear risk that exported arms may be used in serious violations of international humanitarian law. Constituents can ask their representatives to request or support such scrutiny.",
    policyAsk:
      "Representatives and relevant committees can: request review of specific arms-export licences; ask government to publish export-licence summaries; call for suspension of exports where there is clear risk of IHL violations; and press for compliance with arms-export criteria under national law and international obligations.",
    sourceBasis:
      "The Arms Trade Treaty (ATT) requires States Parties to assess whether arms exports could be used to commit or facilitate serious violations of IHL. The EU Common Position (2008/944/CFSP) sets shared criteria for member-state export decisions. Many countries have additional national legislation.",
    instructions: `1. Check whether your country publishes arms-export data. Some countries release annual reports or licence summaries.
2. Identify the relevant government department (often trade, foreign affairs, or defence) and the parliamentary committee responsible for arms-export scrutiny.
3. Adapt the template below. Be specific about which export relationships or licences concern you, and why.
4. Reference public sources: UN reports, NGO findings, court proceedings, or humanitarian assessments.
5. Send the message yourself through official channels.`,
    templateBody: `[Your name]
[Your address]

Dear [Representative's name / Committee chair],

I am writing about [country]'s arms exports to [recipient country or region].

I am concerned that arms or arms components exported from [country] may be used in serious violations of international humanitarian law, as documented by [reference public sources — e.g. UN Commission of Inquiry, ICRC, credible human-rights organisations].

Under [relevant law or treaty — e.g. the Arms Trade Treaty / EU Common Position 2008/944/CFSP], [country] is required to assess whether there is a clear risk that exported arms could be used to commit or facilitate serious violations of IHL.

I ask that you:
- Request a review of existing arms-export licences to [recipient]
- Ask the government to publish a summary of licences currently in effect
- Press for suspension of exports where there is a clear risk of IHL violations

Thank you for your attention to this matter.

Yours sincerely,
[Your name]`,
    templateReviewStatus: "draft",
    language: "en",
    contentStatus: "static_preview",
    sourceIds: [],
    version: 1,
    relatedRoutes: ["/methodology", "/countries/belgium", "/legal-tracker"],
    warnings: [
      "This platform does not track individual arms-export licences in real time. Check your government's official publications.",
      "Template text is a draft — review and adapt before sending.",
      "Arms-export decisions involve classified and commercial information. Representatives may not be able to discuss specific licences publicly.",
      "No message is sent through this platform. Copy and send yourself.",
    ],
    active: true,
  },
  {
    id: "humanitarian-access",
    slug: "humanitarian-access",
    title: "Support humanitarian access",
    actionType: "humanitarian_access",
    jurisdiction:
      "Countries that provide humanitarian funding, have diplomatic channels, or are party to the Geneva Conventions",
    intendedAudience:
      "Constituents concerned about humanitarian access restrictions, aid blockages, or attacks on humanitarian personnel.",
    purpose:
      "Under international humanitarian law, parties to conflict must allow and facilitate rapid and unimpeded passage of humanitarian relief. States that are not party to a conflict also have responsibilities — including using diplomatic channels to press for humanitarian access and funding humanitarian operations.",
    policyAsk:
      "Representatives and relevant ministers can: raise humanitarian-access concerns through diplomatic channels; increase or maintain humanitarian funding; press for protection of humanitarian personnel and facilities; ask parliamentary questions about government humanitarian policy; and support UN and ICRC access requests.",
    sourceBasis:
      "Geneva Convention IV, Article 23 and Additional Protocol I, Article 70. UN Security Council Resolution 2417 (2018) on conflict-induced food insecurity. Customary IHL Rule 55 (humanitarian access) and Rule 56 (freedom of movement of humanitarian personnel).",
    instructions: `1. Identify which humanitarian organisations are active in the context you are concerned about. Their public reports can strengthen your message.
2. Find the relevant minister or committee in your country — often foreign affairs, development, or humanitarian aid.
3. Adapt the template below. Be specific about which context and what kind of access restriction concerns you.
4. Reference specific public reports, UN OCHA situation updates, or humanitarian organisation statements where possible.
5. Send the message yourself.`,
    templateBody: `[Your name]
[Your address]

Dear [Representative's name / Minister's name],

I am writing about the humanitarian situation in [context — e.g. Gaza / specific region].

I am concerned about reports of [specific concern — restricted humanitarian access / attacks on humanitarian personnel / blockage of essential supplies], as documented by [reference public sources].

Under international humanitarian law, all parties must allow and facilitate rapid and unimpeded passage of humanitarian relief for civilians in need. States that are not party to the conflict also have responsibilities to use their diplomatic channels to press for compliance.

I ask that you:
- Raise the issue of humanitarian access in [context] through diplomatic channels
- Press for protection of humanitarian personnel and facilities
- Support adequate humanitarian funding for [context]

Thank you for your attention to this urgent humanitarian matter.

Yours sincerely,
[Your name]`,
    templateReviewStatus: "draft",
    language: "en",
    contentStatus: "static_preview",
    sourceIds: [],
    version: 1,
    relatedRoutes: ["/methodology", "/organizations", "/gaza-dossier"],
    warnings: [
      "Humanitarian access involves complex negotiations. Representatives cannot always discuss ongoing diplomatic efforts publicly.",
      "Template text is a draft — review and adapt before sending.",
      "Do not contact parties directly involved in a conflict unless you are a professional humanitarian actor.",
      "No message is sent through this platform. Copy and send yourself.",
    ],
    active: true,
  },
  {
    id: "send-dossier",
    slug: "send-dossier",
    title: "Send a dossier to a journalist",
    actionType: "send_dossier",
    jurisdiction: "Any country with a free or partly free press",
    intendedAudience:
      "People who have collected verified public information about accountability-related events and want to share it responsibly with journalists.",
    purpose:
      "Journalists and news organisations play a critical role in verifying and publicising accountability-relevant information. Sharing well-organised, sourced public documentation with journalists — responsibly and lawfully — can help bring attention to under-reported events.",
    policyAsk:
      "Journalists and news organisations can: investigate and verify public documentation; publish reports that bring public attention to accountability issues; file access-to-information requests; and interview experts and witnesses (within their own editorial and safety standards).",
    sourceBasis:
      "Press freedom is protected under Article 19 of the Universal Declaration of Human Rights and the International Covenant on Civil and Political Rights. Journalists operate under their own editorial standards and safety protocols. This action supports sharing public, non-classified, non-private information only.",
    instructions: `1. Organise your documentation. Group sources by type (official records, news reports, NGO publications, academic research, verified open-source material). Include publication dates, URLs, and access dates.
2. Identify journalists or news organisations that cover the relevant topic. Read their previous work to understand their focus and standards.
3. Write a brief, factual summary. Do not exaggerate, editorialise, or include private or classified information.
4. Send the material yourself. Most news organisations have public contact or tip addresses. Some have secure submission channels — use those if the material is sensitive.
5. Respect the journalist's time and editorial independence. They may or may not follow up — that is their professional decision.
6. Do not send graphic content without a content warning. Do not send material that identifies vulnerable people or exposes them to risk.`,
    templateBody: `Subject: Public documentation regarding [brief description — e.g. "civilian harm incident in Gaza, June 2026"]

Dear [Journalist's name / News desk],

I am sharing public documentation regarding [brief factual description of the event or context].

The enclosed material includes:
- [Type of source and date, e.g. "UN OCHA flash update, 12 June 2026"]
- [Type of source and date]
- [Type of source and date]

All sources are publicly available. URLs and access dates are included.

[Optional: one-sentence summary of why this matters — factual, not emotive.]

Thank you for your work covering this topic.

[Your name]
[Optional: your contact method if you wish to be reached for follow-up]`,
    templateReviewStatus: "draft",
    language: "en",
    contentStatus: "static_preview",
    sourceIds: [],
    version: 1,
    relatedRoutes: ["/methodology", "/gaza-dossier", "/organizations"],
    warnings: [
      "Share only public, verified documentation. Do not share private, classified, or sensitive personal information.",
      "Do not share graphic content without a content warning. Journalists have their own safety protocols.",
      "Template text is a draft — adapt before using. Journalists prefer original, well-organised material, not form letters.",
      "No information is sent through this platform. You send the material yourself.",
      "This is not a whistleblowing channel. If you need secure submission, use the journalist's own secure channels.",
    ],
    active: true,
  },
  {
    id: "submit-correction",
    slug: "submit-correction",
    title: "Submit a correction or public source",
    actionType: "submit_correction",
    jurisdiction: "Platform-wide — no jurisdiction restriction",
    intendedAudience:
      "Anyone who has identified an error on the platform, or who has a public source to suggest for a page that is under development.",
    purpose:
      "Corrections and public source suggestions are part of the platform's trust model. During the static beta, submissions are handled through GitHub issues. This action explains how to submit corrections and source suggestions safely and effectively.",
    policyAsk:
      "The platform maintainers can: review and apply corrections; assess public source suggestions against the methodology; update pages with reviewed sources; and log corrections transparently.",
    sourceBasis:
      "Based on the platform's methodology and corrections process at /methodology and /corrections.",
    instructions: `1. Read the corrections guidance at /corrections before submitting.
2. Identify the specific page, section, or claim that needs correction or sourcing.
3. Gather the public source, correction detail, or evidence that supports your submission.
4. Submit through GitHub Issues — this is the preferred method during the static beta.
5. Alternatively, use the project contact route listed on the Contribute page.
6. Do not submit sensitive witness information, private personal data, or confidential material through public channels.`,
    language: "en",
    contentStatus: "reviewed",
    sourceIds: [],
    version: 1,
    relatedRoutes: ["/corrections", "/methodology", "/contribute"],
    warnings: [
      "Do not submit sensitive witness information or private personal data through public GitHub issues.",
      "Corrections are processed during the static beta but may be delayed.",
      "Not every source suggestion will result in an immediate update — some require expert review.",
    ],
    active: true,
  },
  {
    id: "volunteer",
    slug: "volunteer",
    title: "Volunteer for the project",
    actionType: "volunteer",
    jurisdiction: "Any country — remote open-source contribution",
    intendedAudience:
      "Developers, designers, researchers, legal reviewers, translators, writers, and security reviewers who want to contribute to the platform.",
    purpose:
      "Accountability Atlas is an open-source project built by volunteers. Contributing your skills — even in small, safe ways — helps build infrastructure against genocide and mass atrocities. Every contribution is reviewed for safety and accuracy.",
    policyAsk:
      "Volunteer contributors can: develop the platform's frontend and data infrastructure; review sources and methodology; improve accessibility and translations; help with documentation; and participate in safety and security review.",
    sourceBasis:
      "Based on the platform's contribution guide, code of conduct, and open-source licence (AGPL-3.0-or-later). See /contribute and the GitHub repository.",
    instructions: `1. Read the Contribute page at /contribute for role descriptions and prerequisites.
2. Read the Contribution Guide, Code of Conduct, and Security Policy in the GitHub repository before starting.
3. Look for "good first issue" labels on GitHub — these are small, safe tasks suited to new contributors.
4. Join the project on GitHub and introduce yourself in a contribution discussion.
5. Every contribution is reviewed. Start small — a documentation fix, a translation, or a source check is a valuable contribution.`,
    language: "en",
    contentStatus: "reviewed",
    sourceIds: [],
    version: 1,
    relatedRoutes: ["/contribute", "/methodology"],
    warnings: [
      "Read the Code of Conduct and Contribution Guide before contributing.",
      "Every contribution is reviewed. Not every suggestion will be accepted.",
      "Do not include sensitive personal information in public contributions.",
    ],
    active: true,
  },
];

/** Convenience: active templates only. */
export function getActiveTemplates(): ActionTemplate[] {
  return actionTemplates.filter((t) => t.active);
}

/** Convenience: template lookup by slug. */
export function getTemplateBySlug(
  slug: string,
): ActionTemplate | undefined {
  return actionTemplates.find((t) => t.slug === slug);
}
