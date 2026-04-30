export const SITE = {
  name: "Move Muscle & Joint",
  tagline: "Move Today, Thrive Tomorrow.",
  phone: "(913) 303-0989",
  address: "10701 El Monte St, Studio 2, Overland Park, KS 66211",
  addressStreet: "10701 El Monte St, Studio 2",
  addressCity: "Overland Park",
  addressState: "KS",
  addressZip: "66211",
  domain: "movemuscleandjoint.com",
  url: "https://movemuscleandjoint.com",
  janeBookingUrl: "https://mmj.janeapp.com/#staff_member/1",
  bookPath: "/book",
  lat: 38.9258,
  lng: -94.6458,
};

export const SERVICES = [
  {
    title: "Chiropractic Care",
    slug: "/services/chiropractic-care",
    shortDesc: "Restore joint function, improve mobility, and reduce pain through precise, personalized chiropractic treatment integrated with your full care plan.",
  },
  {
    title: "Myofascial Release Therapy",
    slug: "/services/myofascial-release-therapy",
    shortDesc: "Release chronic tension, improve tissue mobility, and support recovery through targeted hands-on soft tissue work.",
  },
  {
    title: "Shockwave Therapy",
    slug: "/services/shockwave-therapy",
    shortDesc: "Accelerate healing for stubborn soft tissue conditions using focused acoustic wave technology as part of your recovery plan.",
  },
  {
    title: "Targeted Rehab / Movement Retraining",
    slug: "/services/targeted-rehab",
    shortDesc: "Rebuild strength, retrain movement patterns, and create lasting resilience through progressive exercise-based rehabilitation.",
  },
];

export const CONDITIONS = [
  { title: "Sciatica", slug: "/conditions/sciatica" },
  { title: "Neck Pain", slug: "/conditions/neck-pain" },
  { title: "Low Back Pain", slug: "/conditions/low-back-pain" },
  { title: "Shoulder Pain", slug: "/conditions/shoulder-pain" },
  { title: "Knee Pain", slug: "/conditions/knee-pain" },
  { title: "Hip Pain", slug: "/conditions/hip-pain" },
  { title: "Plantar Fasciitis", slug: "/conditions/plantar-fasciitis" },
  { title: "Sports Injuries", slug: "/conditions/sports-injuries" },
  { title: "Headaches & Tension", slug: "/conditions/headaches-tension" },
];

export const MOVE_METHOD_STEPS = [
  { step: "01", title: "Reduce Pain", desc: "Address acute discomfort and inflammation so your body can begin to heal." },
  { step: "02", title: "Restore Alignment", desc: "Improve joint position and tissue mobility to create a foundation for movement." },
  { step: "03", title: "Relearn Movement", desc: "Retrain the patterns that caused dysfunction so your body moves efficiently." },
  { step: "04", title: "Build Strength", desc: "Progressively load tissue and build resilience for the demands of your daily life." },
  { step: "05", title: "Move With Confidence", desc: "Maintain your results and move through life without hesitation or fear of setback." },
];

export const NAV_ITEMS = [
  { label: "Home", path: "/" },
  { label: "Our Approach", path: "/our-approach" },
  { label: "Services", path: "/services", children: SERVICES.map(s => ({ label: s.title, path: s.slug })) },
  { label: "Conditions", path: "/conditions", children: CONDITIONS.map(c => ({ label: c.title, path: c.slug })) },
  { label: "About", path: "/about" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact", path: "/contact" },
];

export const IMAGES = {
  hero: "/images/hero.webp",
  chiropractic: "/images/chiropractic.webp",
  myofascial: "/images/myofascial.webp",
  shockwave: "/images/shockwave.webp",
  rehab: "/images/rehab.webp",
  provider: "/images/provider.webp",
  assessment: "/images/assessment.webp",
  lifestyle: "/images/lifestyle.webp",
  clinic: "/images/clinic.webp",
  handsOn: "/images/handsOn.webp",
};
