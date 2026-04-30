import { SITE } from './site-data';

/**
 * JSON-LD Schema Utility
 * Generates structured data for SEO and rich snippets
 */

export const schemas = {
  /**
   * 1. LocalBusiness + Chiropractor Schema (Combined)
   * Used on: Homepage
   */
  localBusinessChiropractor: () => ({
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'Chiropractor', 'MedicalBusiness'],
    '@id': `${SITE.url}/#organization`,
    name: SITE.name,
    alternateName: 'Move Muscle and Joint',
    description:
      'Movement-based chiropractic care, myofascial release therapy, shockwave therapy, and targeted rehab inside Fit House gym in Overland Park, KS. Led by Dr. Joseph Hugunin, team physician for Sporting KC and University of Kansas Athletics.',
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    logo: `${SITE.url}/logo.png`,
    image: [
      `${SITE.url}/images/clinic.webp`,
      `${SITE.url}/images/handsOn.webp`,
      `${SITE.url}/images/assessment.webp`,
      `${SITE.url}/images/provider.webp`,
      `${SITE.url}/images/chiropractic.webp`,
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.addressStreet,
      addressLocality: SITE.addressCity,
      addressRegion: SITE.addressState,
      postalCode: SITE.addressZip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE.lat,
      longitude: SITE.lng,
    },
    hasMap: 'https://www.google.com/maps/place/?q=place_id:ChIJN-zGIIPpwIcRCDPsBaLbDtg',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    priceRange: '$$',
    currenciesAccepted: 'USD',
    paymentAccepted: 'Cash, Credit Card, HSA, FSA',
    areaServed: [
      { '@type': 'City', name: 'Overland Park' },
      { '@type': 'City', name: 'Leawood' },
      { '@type': 'City', name: 'Lenexa' },
      { '@type': 'City', name: 'Prairie Village' },
      { '@type': 'City', name: 'Kansas City' },
    ],
    medicalSpecialty: ['Chiropractic', 'Sports Medicine', 'Physical Therapy'],
    founder: {
      '@id': `${SITE.url}/about/#provider`,
    },
    employee: {
      '@id': `${SITE.url}/about/#provider`,
    },
    availableService: [
      {
        '@type': 'MedicalTherapy',
        name: 'Chiropractic Care',
        url: `${SITE.url}/services/chiropractic-care`,
      },
      {
        '@type': 'MedicalTherapy',
        name: 'Myofascial Release Therapy',
        url: `${SITE.url}/services/myofascial-release-therapy`,
      },
      {
        '@type': 'MedicalTherapy',
        name: 'Shockwave Therapy',
        url: `${SITE.url}/services/shockwave-therapy`,
      },
      {
        '@type': 'MedicalTherapy',
        name: 'Targeted Rehab',
        url: `${SITE.url}/services/targeted-rehab`,
      },
    ],
    sameAs: [
      'https://www.google.com/maps/place/?q=place_id:ChIJN-zGIIPpwIcRCDPsBaLbDtg',
      'https://www.yelp.com/biz/move-muscle-and-joint-overland-park',
      'https://www.healthgrades.com/group-directory/ks-kansas/overland-park/move-muscle-joint-u3cdyw2',
      'https://www.instagram.com/movemuscleandjoint/',
      'https://local.yahoo.com/info-224216223-move-muscle-joint-overland-park/',
      'https://nextdoor.com/pages/move-muscle-joint-overland-park-ks/',
      'https://www.facebook.com/movemuscleandjoint',
    ],
  }),

  /**
   * 2. Service Schema
   * Used on: Service detail pages
   */
  service: (serviceTitle: string, serviceSlug: string) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE.url}${serviceSlug}#service`,
    name: serviceTitle,
    description: `${serviceTitle} in ${SITE.addressCity}, ${SITE.addressState} to improve joint mobility, reduce pain, and support better movement.`,
    provider: {
      '@type': 'Chiropractor',
      '@id': `${SITE.url}/#organization`,
    },
    areaServed: {
      '@type': 'City',
      name: SITE.addressCity,
    },
    serviceType: 'Chiropractic Treatment',
  }),

  /**
   * 3. FAQPage Schema
   * Used on: FAQ page, condition pages with FAQs
   */
  faqPage: (faqs: Array<{ question: string; answer: string }>) => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }),

  /**
   * 4. BreadcrumbList Schema
   * Used on: All interior pages
   */
  breadcrumb: (breadcrumbs: Array<{ name: string; url: string }>) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }),

  /**
   * 5. Person Schema
   * Used on: About page
   */
  person: () => ({
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE.url}/about/#provider`,
    name: 'Dr. Joseph Hugunin',
    alternateName: 'Dr. Joey Hugunin',
    honorificSuffix: 'DC',
    jobTitle: 'Chiropractor',
    description: 'Founder of Move Muscle & Joint and movement-focused chiropractor in Overland Park with 20+ years of experience. Team physician for Sporting KC and care provider for University of Kansas Athletics.',
    image: `${SITE.url}/images/provider.webp`,
    url: `${SITE.url}/about`,
    worksFor: {
      '@id': `${SITE.url}/#organization`,
    },
    alumniOf: [
      { '@type': 'CollegeOrUniversity', name: 'Rockhurst University' },
    ],
    knowsAbout: [
      'Chiropractic Care',
      'Myofascial Release Therapy',
      'Shockwave Therapy',
      'Sports Chiropractic',
      'Movement-Based Rehabilitation',
      'Functional Movement Assessment',
    ],
    memberOf: [
      { '@type': 'SportsTeam', name: 'Sporting KC', description: 'Team Physician' },
      { '@type': 'SportsOrganization', name: 'University of Kansas Athletics', description: 'Care Provider' },
    ],
    areaServed: 'Overland Park, KS',
  }),

  /**
   * 6. MedicalCondition Schema
   * Used on: Condition detail pages
   */
  medicalCondition: (
    conditionName: string,
    alternateName: string,
    description: string,
    symptoms: Array<{ name: string }>,
    treatmentName: string,
    treatmentDesc: string
  ) => ({
    '@context': 'https://schema.org',
    '@type': 'MedicalCondition',
    name: conditionName,
    alternateName,
    description,
    signOrSymptom: symptoms.map((symptom) => ({
      '@type': 'MedicalSignOrSymptom',
      name: symptom.name,
    })),
    possibleTreatment: {
      '@type': 'MedicalTherapy',
      name: treatmentName,
      description: treatmentDesc,
    },
  }),

  /**
   * 7. WebSite Schema
   * Used on: Layout (site-wide)
   */
  website: () => ({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.url}#website`,
    name: SITE.name,
    url: SITE.url,
    description:
      'Chiropractic care, myofascial release therapy, shockwave therapy, and rehab in Overland Park, KS.',
    publisher: {
      '@type': 'Chiropractor',
      '@id': `${SITE.url}/#organization`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE.url}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }),
};

/**
 * Helper to render a JSON-LD script tag
 */
export function renderJsonLd(schema: any): string {
  return JSON.stringify(schema);
}
