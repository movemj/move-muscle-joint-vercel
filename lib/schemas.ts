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
    '@type': ['LocalBusiness', 'Chiropractor'],
    '@id': `${SITE.url}/#organization`,
    name: SITE.name,
    description:
      'Integrated chiropractic care, myofascial release therapy, shockwave therapy, and targeted rehab in Overland Park, KS.',
    url: SITE.url,
    telephone: SITE.phone,
    image: `${SITE.url}/images/clinic.webp`,
    logo: `${SITE.url}/logo.png`,
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
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00',
      },
    ],
    priceRange: '$$',
    areaServed: [
      { '@type': 'City', name: 'Overland Park' },
      { '@type': 'City', name: 'Leawood' },
      { '@type': 'City', name: 'Prairie Village' },
      { '@type': 'City', name: 'Olathe' },
      { '@type': 'City', name: 'Kansas City' },
    ],
    sameAs: [],
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
  person: (name: string, title: string, description: string) => ({
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE.url}/about#provider`,
    name,
    jobTitle: title,
    description,
    image: `${SITE.url}/images/provider.webp`,
    worksFor: {
      '@type': 'Chiropractor',
      '@id': `${SITE.url}/#organization`,
    },
    knowsAbout: [
      'Chiropractic Care',
      'Myofascial Release Therapy',
      'Movement Assessment',
      'Rehabilitation',
      'Shockwave Therapy',
    ],
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
