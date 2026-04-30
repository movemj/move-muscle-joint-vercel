import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // ESLint isn't installed in this project — skip linting during build
    ignoreDuringBuilds: true,
  },
  redirects: async () => {
    return [
      // Contact/Booking redirects
      { source: "/contact-booking", destination: "/book", permanent: true },

      // Compliance/Privacy redirects
      { source: "/compliance", destination: "/privacy", permanent: true },
      { source: "/compliance/disclaimers", destination: "/privacy", permanent: true },
      { source: "/compliance/hipaa-privacy-policy", destination: "/privacy", permanent: true },
      { source: "/compliance/privacy-policy", destination: "/privacy", permanent: true },
      { source: "/compliance/terms-of-service", destination: "/privacy", permanent: true },

      // Services redirects
      { source: "/services/chiropractic-adjustments", destination: "/services/chiropractic-care", permanent: true },
      { source: "/services/physical-therapy", destination: "/services/targeted-rehab", permanent: true },

      // Conditions redirects
      { source: "/conditions/runners-knee", destination: "/conditions/knee-pain", permanent: true },
      { source: "/conditions/headaches-migraines", destination: "/conditions/headaches-tension", permanent: true },
      { source: "/conditions/herniated-disc", destination: "/conditions/low-back-pain", permanent: true },
      { source: "/conditions/whiplash", destination: "/conditions/neck-pain", permanent: true },
      { source: "/conditions/carpal-tunnel", destination: "/conditions", permanent: true },
      { source: "/conditions/tmj-jaw-pain", destination: "/conditions/headaches-tension", permanent: true },
      { source: "/conditions/arthritis", destination: "/conditions", permanent: true },
      { source: "/conditions/acl-meniscus-injuries", destination: "/conditions/knee-pain", permanent: true },
      { source: "/conditions/ankle-sprains", destination: "/conditions/sports-injuries", permanent: true },
      { source: "/conditions/hamstring-groin-strains", destination: "/conditions/sports-injuries", permanent: true },
      { source: "/conditions/it-band-syndrome", destination: "/conditions/knee-pain", permanent: true },
      { source: "/conditions/rotator-cuff-injuries", destination: "/conditions/shoulder-pain", permanent: true },
      { source: "/conditions/shin-splints-stress-fractures", destination: "/conditions/sports-injuries", permanent: true },
      { source: "/conditions/tennis-elbow-golfers-elbow", destination: "/conditions/sports-injuries", permanent: true },

      // Systems redirects
      { source: "/systems/musculoskeletal-system", destination: "/our-approach", permanent: true },
      { source: "/systems/nervous-system", destination: "/our-approach", permanent: true },
      { source: "/systems/biomechanical-system", destination: "/our-approach", permanent: true },

      // Blog redirects
      { source: "/blog/plantar-fasciitis-heel-pain-treatment-overland-park", destination: "/conditions/plantar-fasciitis", permanent: true },
      { source: "/blog/sciatica-relief-exercises", destination: "/conditions/sciatica", permanent: true },
      { source: "/blog/headaches-migraines-treatment-overland-park", destination: "/conditions/headaches-tension", permanent: true },
      { source: "/blog/text-neck-forward-head-posture-overland-park", destination: "/conditions/neck-pain", permanent: true },
      { source: "/blog/when-to-use-shockwave-therapy-overland-park", destination: "/services/shockwave-therapy", permanent: true },
      { source: "/blog/introduction-to-chiropractic-care", destination: "/services/chiropractic-care", permanent: true },
      { source: "/blog/the-benefits-of-chiropractic-care-for-sports-injuries", destination: "/conditions/sports-injuries", permanent: true },
      { source: "/blog/best-chiropractor-near-me-overland-park-sports-injuries", destination: "/conditions/sports-injuries", permanent: true },
      { source: "/blog/modern-chiropractic-movement-therapy-overland-park", destination: "/our-approach", permanent: true },
      { source: "/blog/why-choose-movement-focused-chiropractic", destination: "/our-approach", permanent: true },

      // Location redirects (dynamic pattern)
      {
        source: "/locations/:city",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/locations/:city/chiropractic-adjustments",
        destination: "/services/chiropractic-care",
        permanent: true,
      },
      {
        source: "/locations/:city/physical-therapy",
        destination: "/services/targeted-rehab",
        permanent: true,
      },
      {
        source: "/locations/:city/myofascial-release-therapy",
        destination: "/services/myofascial-release-therapy",
        permanent: true,
      },
      {
        source: "/locations/:city/shockwave-therapy",
        destination: "/services/shockwave-therapy",
        permanent: true,
      },
      {
        source: "/locations/:city/sciatica",
        destination: "/conditions/sciatica",
        permanent: true,
      },
      {
        source: "/locations/:city/plantar-fasciitis",
        destination: "/conditions/plantar-fasciitis",
        permanent: true,
      },
      {
        source: "/locations/:city/runners-knee",
        destination: "/conditions/knee-pain",
        permanent: true,
      },
      {
        source: "/locations/:city/low-back-pain",
        destination: "/conditions/low-back-pain",
        permanent: true,
      },
      {
        source: "/locations/:city/neck-pain",
        destination: "/conditions/neck-pain",
        permanent: true,
      },
      {
        source: "/locations/:city/shoulder-pain",
        destination: "/conditions/shoulder-pain",
        permanent: true,
      },
      {
        source: "/locations/:city/headaches-migraines",
        destination: "/conditions/headaches-tension",
        permanent: true,
      },
      {
        source: "/locations/:city/knee-pain",
        destination: "/conditions/knee-pain",
        permanent: true,
      },
      {
        source: "/locations/:city/hip-pain",
        destination: "/conditions/hip-pain",
        permanent: true,
      },
      {
        source: "/locations/:city/sports-injuries",
        destination: "/conditions/sports-injuries",
        permanent: true,
      },
      {
        source: "/locations/:city/herniated-disc",
        destination: "/conditions/low-back-pain",
        permanent: true,
      },
      {
        source: "/locations/:city/whiplash",
        destination: "/conditions/neck-pain",
        permanent: true,
      },
      {
        source: "/locations/:city/carpal-tunnel",
        destination: "/conditions",
        permanent: true,
      },
      {
        source: "/locations/:city/tmj-jaw-pain",
        destination: "/conditions/headaches-tension",
        permanent: true,
      },
      {
        source: "/locations/:city/arthritis",
        destination: "/conditions",
        permanent: true,
      },
      {
        source: "/locations/:city/acl-meniscus-injuries",
        destination: "/conditions/knee-pain",
        permanent: true,
      },
      {
        source: "/locations/:city/ankle-sprains",
        destination: "/conditions/sports-injuries",
        permanent: true,
      },
      {
        source: "/locations/:city/hamstring-groin-strains",
        destination: "/conditions/sports-injuries",
        permanent: true,
      },
      {
        source: "/locations/:city/it-band-syndrome",
        destination: "/conditions/knee-pain",
        permanent: true,
      },
      {
        source: "/locations/:city/rotator-cuff-injuries",
        destination: "/conditions/shoulder-pain",
        permanent: true,
      },
      {
        source: "/locations/:city/shin-splints-stress-fractures",
        destination: "/conditions/sports-injuries",
        permanent: true,
      },
      {
        source: "/locations/:city/tennis-elbow-golfers-elbow",
        destination: "/conditions/sports-injuries",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
