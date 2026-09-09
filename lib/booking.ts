import { SITE } from "@/lib/site-data";

export type JaneCampaign =
  | "header-footer"
  | "homepage"
  | "book-page"
  | "new-patient-offer"
  | "conditions"
  | "services"
  | "blog"
  | "about"
  | "our-approach"
  | "faq"
  | "contact"
  | "thank-you"
  | "services-overview"
  | "conditions-overview"
  | "blog-index";

interface BuildJaneUrlOptions {
  /** utm_campaign value identifying the page/section that produced the click. */
  campaign: JaneCampaign;
  /** utm_content value, e.g. a condition, service, or blog post slug. */
  content?: string;
  /**
   * Jane treatment ID for a direct deep link, e.g. 6 for the $49 new patient
   * offer. Only the /new-patient-offer page should use this — everywhere else
   * links to the bare Jane root.
   */
  treatment?: number;
}

/**
 * Builds a Jane booking URL with UTM attribution.
 *
 * Jane uses hash-based routing, so query parameters MUST be placed before the
 * `#` fragment — anything after `#` is client-side routing state and is
 * never sent to the server, so UTM params appended after the hash are
 * silently discarded. This helper guarantees the correct order:
 *
 *   https://mmj.janeapp.com/?utm_source=website&utm_medium=cta&utm_campaign=book#/staff_member/1/treatment/6
 */
export function buildJaneUrl({ campaign, content, treatment }: BuildJaneUrlOptions): string {
  const params = new URLSearchParams({
    utm_source: "website",
    utm_medium: "cta",
    utm_campaign: campaign,
  });

  if (content) {
    params.set("utm_content", content);
  }

  const hash = treatment ? `#/staff_member/1/treatment/${treatment}` : "";

  return `${SITE.janeBookingUrl}?${params.toString()}${hash}`;
}
