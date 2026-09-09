export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  tags: string[];
}

// Real Google reviews. Quote text is reproduced verbatim — do not edit wording,
// grammar, or punctuation. See https://maps.google.com/?cid=15832245689117076245
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "bekah-f",
    name: "Bekah F.",
    tags: ["homepage", "positioning"],
    quote:
      "He provides the best movement based care I've found in Overland Park. He is not your typical chiropractor. He takes the time to provide the care you need and not just a quick adjustment.",
  },
  {
    id: "wade-e",
    name: "Wade E.",
    tags: ["homepage"],
    quote:
      "Dr. Joey is fantastic! I was skeptical, but after he explained what he was doing and why I was put at ease . Soft tissue adjustment was what I needed to relieve my pain .",
  },
  {
    id: "amanda-r",
    name: "Amanda R.",
    tags: ["homepage", "offer"],
    quote:
      "Their combination of chiropractic adjustments and hands-on myofascial release is the best I've found. It's not just a quick crack and go; they actually take time to work through the muscle tension and movement issues behind the pain. \u2026 You can tell they're focused on long-term results, not just temporary relief.",
  },
  {
    id: "kristin-w",
    name: "Kristin W.",
    tags: ["neck-pain", "headaches-tension", "homepage"],
    quote:
      "My husband has been struggling with terrible neck pain and dizziness for nearly a year. He was absolutely miserable and had seen every type of doctor you could think of\u2014with no answers and no relief. \u2026 After the second appointment, the dizziness and neck pain was almost completely gone and he felt like a brand new person.",
  },
  {
    id: "michelle-s",
    name: "Michelle S.",
    tags: ["homepage", "sports-injuries", "low-back-pain", "knee-pain"],
    quote:
      'As a woman in my 40s who lifts heavy, I\'m not slowing down — I\'m training smarter. And having someone who understands strong, active bodies (not just "take it easy") makes all the difference. I followed his directions, did the work, and I\'ve been solid ever since.',
  },
  {
    id: "sammie-h",
    name: "Sammie H.",
    tags: ["offer", "homepage"],
    quote:
      "Dr. Joe is awesome! He's incredibly thorough and specializes in muscle movement care not just with an adjustment. This has helped me tremendously. I highly recommend him.",
  },
  {
    id: "sierra-m",
    name: "Sierra M.",
    tags: ["book", "homepage"],
    quote:
      "Excellent communication, service and overall care received by working with Dr. Joseph Hugunin. He spent time listening to my needs, and quickly was able to identify the root cause of many of my issues based upon his wealth of experience. Highly recommend meeting with him!",
  },
  {
    id: "sandra-c",
    name: "Sandra C.",
    tags: ["about", "low-back-pain"],
    quote:
      "He performed an ART treatment after I fell on a hip but which Xrays showed no damage. Then I fell again, this time on directly on my lower back. I did not have a clue as to possible damage but Dr. Joe sure did. He insisted that I immediately get a MRI. Not only did it show a crushed L1 vertebrae but that a fragment had gone into my spinal column.",
  },
  {
    id: "kyle-f",
    name: "Kyle F.",
    tags: ["plantar-fasciitis", "shockwave"],
    quote:
      "Dr. Joe fixed my plantar fasciitis! After two years of dealing with it in both feet, Dr. Joe attacked it with a combination of shockwave therapy, ART therapy, chiropractic work, and targeted rehab exercises. I finally wake up without foot pain and can go throughout the day without heavily managing my pain.",
  },
  {
    id: "yvette-c",
    name: "Yvette C.",
    tags: ["plantar-fasciitis", "low-back-pain"],
    quote:
      "Chiropractic care at Move in Overland Park helped relieve my back pain. Dr. Joey helped me get rid of my plantar fasciitis in just a few sessions. He can customize plans for all your muscle and joint care needs. I definitely recommend him over other chiropractors due to his in depth approach of hands on muscle and joint care.",
  },
  {
    id: "natasha-b",
    name: "Natasha B.",
    tags: ["headaches-tension", "neck-pain"],
    quote:
      "I came in with a long-standing head and neck injury and had been struggling with chronic nausea for years. After just the first session, my nausea was completely gone\u2014and I still have several sessions to go! \u2026 It's not just a standard adjustment\u2014he also uses soft tissue release techniques that help relax and realign the body.",
  },
  {
    id: "mckenna-z",
    name: "McKenna Z.",
    tags: ["shoulder-pain"],
    quote:
      "A single session of 30 minutes already increased the mobility in my right shoulder and relieved tensions. Joey was extremely respectful as well. So grateful!",
  },
  {
    id: "seth-d",
    name: "Seth D.",
    tags: ["sports-injuries"],
    quote:
      "Dr. Hugunin is awesome. If you're an athlete of any type, I'd suggest giving him a shot. He knows his stuff and is great at working troubled areas.",
  },
];

export const GOOGLE_REVIEWS_URL = "https://maps.google.com/?cid=15832245689117076245";

export function getTestimonialById(id: string): Testimonial | undefined {
  return TESTIMONIALS.find((t) => t.id === id);
}

export function getTestimonialsByIds(ids: string[]): Testimonial[] {
  return ids
    .map((id) => getTestimonialById(id))
    .filter((t): t is Testimonial => Boolean(t));
}

export function getTestimonialsByTag(tag: string): Testimonial[] {
  return TESTIMONIALS.filter((t) => t.tags.includes(tag));
}

// Condition slug -> exactly two testimonial ids, per the mapping provided.
const CONDITION_TESTIMONIAL_MAP: Record<string, [string, string]> = {
  "low-back-pain": ["sandra-c", "michelle-s"],
  "neck-pain": ["kristin-w", "natasha-b"],
  "headaches-tension": ["natasha-b", "kristin-w"],
  "plantar-fasciitis": ["kyle-f", "yvette-c"],
  "shoulder-pain": ["mckenna-z", "sierra-m"],
  "sports-injuries": ["seth-d", "michelle-s"],
  "knee-pain": ["michelle-s", "sierra-m"],
};

// hip-pain, sciatica, and any unmapped condition fall back to this general pair.
const FALLBACK_CONDITION_PAIR: [string, string] = ["bekah-f", "sammie-h"];

export function getTestimonialsForCondition(slug: string): Testimonial[] {
  const ids = CONDITION_TESTIMONIAL_MAP[slug] ?? FALLBACK_CONDITION_PAIR;
  return getTestimonialsByIds(ids);
}
