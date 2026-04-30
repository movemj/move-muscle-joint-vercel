# JSON-LD Schema Strategy for Move Muscle & Joint

## Overview

This document outlines the complete Schema.org JSON-LD implementation strategy for the Move Muscle & Joint website. The strategy includes **7 core schema types** deployed across all pages with a centralized utility system.

---

## Architecture

### Core Files

- **`/lib/schemas.ts`** - Centralized schema utility with all 7 schema generators
- **`/components/schema-json-ld.tsx`** - Reusable component to render schemas in the DOM
- **`/lib/site-data.ts`** - Single source of truth for business data (domain, address, phone, etc.)

### Implementation Pattern

All pages use the reusable `<JsonLdSchema>` component:

```tsx
import { JsonLdSchema } from '@/components/schema-json-ld';
import { schemas } from '@/lib/schemas';

export default function Page() {
  return (
    <>
      <JsonLdSchema data={schemas.yourSchema()} />
      {/* page content */}
    </>
  );
}
```

---

## The 7 JSON-LD Schemas

### 1. LocalBusiness + Chiropractor (Combined)

**Purpose:** Tells search engines the business identity, location, hours, and services.

**Deployed on:** Homepage (`/`)

**Paste-Ready JSON-LD:**

```json
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Chiropractor"],
  "@id": "https://movemuscleandjoint.com/#organization",
  "name": "Move Muscle & Joint",
  "description": "Integrated chiropractic care, myofascial release therapy, shockwave therapy, and targeted rehab in Overland Park, KS.",
  "url": "https://movemuscleandjoint.com",
  "telephone": "(913) 303-0989",
  "image": "https://movemuscleandjoint.com/images/clinic.webp",
  "logo": "https://movemuscleandjoint.com/logo.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "10701 El Monte St, Studio 2",
    "addressLocality": "Overland Park",
    "addressRegion": "KS",
    "postalCode": "66211",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 38.9258,
    "longitude": -94.6458
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00"
    }
  ],
  "priceRange": "$$",
  "areaServed": [
    { "@type": "City", "name": "Overland Park" },
    { "@type": "City", "name": "Leawood" },
    { "@type": "City", "name": "Prairie Village" },
    { "@type": "City", "name": "Olathe" },
    { "@type": "City", "name": "Kansas City" }
  ],
  "sameAs": []
}
```

---

### 2. Service

**Purpose:** Describes a specific service offered by the business.

**Deployed on:** All service detail pages (`/services/*)

**Paste-Ready JSON-LD (Example: Chiropractic Care):**

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://movemuscleandjoint.com/services/chiropractic-care#service",
  "name": "Chiropractic Care",
  "description": "Chiropractic Care in Overland Park, KS to improve joint mobility, reduce pain, and support better movement.",
  "provider": {
    "@type": "Chiropractor",
    "@id": "https://movemuscleandjoint.com/#organization"
  },
  "areaServed": {
    "@type": "City",
    "name": "Overland Park"
  },
  "serviceType": "Chiropractic Treatment"
}
```

---

### 3. FAQPage

**Purpose:** Rich snippet for FAQ pages — improves visibility in Google Search results.

**Deployed on:** FAQ page (`/faq`) and condition detail pages with FAQs

**Paste-Ready JSON-LD (Example):**

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What conditions do you treat?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We treat a wide range of musculoskeletal conditions including sciatica, neck pain, low back pain, shoulder pain, knee pain, hip pain, plantar fasciitis, sports injuries, and headaches."
      }
    },
    {
      "@type": "Question",
      "name": "Do you combine chiropractic care with rehab?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. This is one of the core features of our integrated care model. Most sessions include hands-on chiropractic treatment combined with targeted movement-based rehab."
      }
    }
  ]
}
```

---

### 4. BreadcrumbList

**Purpose:** Enables breadcrumb navigation in search results for better UX and crawlability.

**Deployed on:** All interior pages (via `<Breadcrumbs>` component)

**Paste-Ready JSON-LD (Example):**

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://movemuscleandjoint.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://movemuscleandjoint.com/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Chiropractic Care",
      "item": "https://movemuscleandjoint.com/services/chiropractic-care"
    }
  ]
}
```

---

### 5. Person

**Purpose:** Identifies the healthcare provider; boosts trust and local SEO signals.

**Deployed on:** About page (`/about`)

**Paste-Ready JSON-LD:**

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://movemuscleandjoint.com/about#provider",
  "name": "Dr. Joseph Hugunin",
  "jobTitle": "Chiropractor",
  "description": "Founder and chiropractor at Move Muscle & Joint, specializing in integrated chiropractic care, movement assessment, and rehab-based treatment.",
  "image": "https://movemuscleandjoint.com/images/provider.webp",
  "worksFor": {
    "@type": "Chiropractor",
    "@id": "https://movemuscleandjoint.com/#organization"
  },
  "knowsAbout": [
    "Chiropractic Care",
    "Myofascial Release Therapy",
    "Movement Assessment",
    "Rehabilitation",
    "Shockwave Therapy"
  ]
}
```

---

### 6. MedicalCondition

**Purpose:** Provides rich information about conditions treated, symptoms, and treatments.

**Deployed on:** All condition detail pages (`/conditions/*`)

**Paste-Ready JSON-LD (Example: Sciatica):**

```json
{
  "@context": "https://schema.org",
  "@type": "MedicalCondition",
  "name": "Sciatica",
  "alternateName": "Sciatic Nerve Pain",
  "description": "Sciatica refers to pain that radiates along the path of the sciatic nerve, which runs from the lower back through the hips and down each leg.",
  "signOrSymptom": [
    {
      "@type": "MedicalSignOrSymptom",
      "name": "Radiating pain from the low back into the buttock and leg"
    },
    {
      "@type": "MedicalSignOrSymptom",
      "name": "Numbness or tingling in the leg or foot"
    },
    {
      "@type": "MedicalSignOrSymptom",
      "name": "Sharp, burning, or shooting pain with sitting or standing"
    }
  ],
  "possibleTreatment": {
    "@type": "MedicalTherapy",
    "name": "Integrated Chiropractic and Rehab Treatment",
    "description": "Treatment includes spinal manipulation, myofascial release therapy, and targeted rehab."
  }
}
```

---

### 7. WebSite

**Purpose:** Site-wide identity; enables site search box in search results.

**Deployed on:** Root layout (all pages inherit this)

**Paste-Ready JSON-LD:**

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://movemuscleandjoint.com#website",
  "name": "Move Muscle & Joint",
  "url": "https://movemuscleandjoint.com",
  "description": "Chiropractic care, myofascial release therapy, shockwave therapy, and rehab in Overland Park, KS.",
  "publisher": {
    "@type": "Chiropractor",
    "@id": "https://movemuscleandjoint.com/#organization"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://movemuscleandjoint.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

---

## Per-Page Schema Map

| Page | URL | Schemas | Notes |
|------|-----|---------|-------|
| **Homepage** | `/` | LocalBusiness+Chiropractor, WebSite | Primary business identity |
| **Our Approach** | `/our-approach` | WebSite, BreadcrumbList | Educational content |
| **Services Overview** | `/services` | WebSite, BreadcrumbList | Service listing |
| **Chiropractic Care** | `/services/chiropractic-care` | Service, FAQPage (if FAQs present), BreadcrumbList | Service detail |
| **Myofascial Release** | `/services/myofascial-release-therapy` | Service, FAQPage, BreadcrumbList | Service detail |
| **Shockwave Therapy** | `/services/shockwave-therapy` | Service, FAQPage, BreadcrumbList | Service detail |
| **Targeted Rehab** | `/services/targeted-rehab` | Service, FAQPage, BreadcrumbList | Service detail |
| **Conditions Overview** | `/conditions` | WebSite, BreadcrumbList | Condition listing |
| **Sciatica** | `/conditions/sciatica` | MedicalCondition, FAQPage, BreadcrumbList | Medical condition detail |
| **Neck Pain** | `/conditions/neck-pain` | MedicalCondition, FAQPage, BreadcrumbList | Medical condition detail |
| **Low Back Pain** | `/conditions/low-back-pain` | MedicalCondition, FAQPage, BreadcrumbList | Medical condition detail |
| **Shoulder Pain** | `/conditions/shoulder-pain` | MedicalCondition, FAQPage, BreadcrumbList | Medical condition detail |
| **Knee Pain** | `/conditions/knee-pain` | MedicalCondition, FAQPage, BreadcrumbList | Medical condition detail |
| **Hip Pain** | `/conditions/hip-pain` | MedicalCondition, FAQPage, BreadcrumbList | Medical condition detail |
| **Plantar Fasciitis** | `/conditions/plantar-fasciitis` | MedicalCondition, FAQPage, BreadcrumbList | Medical condition detail |
| **Sports Injuries** | `/conditions/sports-injuries` | MedicalCondition, FAQPage, BreadcrumbList | Medical condition detail |
| **Headaches & Tension** | `/conditions/headaches-tension` | MedicalCondition, FAQPage, BreadcrumbList | Medical condition detail |
| **FAQ** | `/faq` | FAQPage, BreadcrumbList, WebSite | Comprehensive FAQ |
| **About** | `/about` | Person, BreadcrumbList, WebSite | Provider identity |
| **Contact** | `/contact` | BreadcrumbList, WebSite | Contact page |
| **Book** | `/book` | BreadcrumbList, WebSite | Booking page |
| **Privacy** | `/privacy` | BreadcrumbList, WebSite | Legal page |

---

## Implementation Details

### How It Works

1. **Single Source of Truth**: Business data (domain, address, phone, coordinates) is managed in `/lib/site-data.ts`. All schemas reference this data.

2. **Utility Functions**: Each schema type has a generator function in `/lib/schemas.ts` that returns a properly formatted JSON-LD object.

3. **Reusable Component**: The `<JsonLdSchema>` component accepts any schema object and renders it as a `<script type="application/ld+json">` tag.

4. **Page-Level Deployment**: Each page imports the necessary schemas and renders them at the top of the component tree.

---

## Testing & Validation

### Google Rich Results Test
Validate schemas at: [Google Rich Results Test](https://search.google.com/test/rich-results)

### Schema.org Validator
Validate at: [Schema.org Validator](https://validator.schema.org/)

### Common Issues & Fixes

| Issue | Fix |
|-------|-----|
| Schema not rendering | Ensure `<JsonLdSchema>` is used, not a manual `<script>` tag |
| Multiple schemas on same page | Render multiple `<JsonLdSchema>` components—they stack correctly |
| Domain mismatch | Check that all `@id` and URLs use `https://movemuscleandjoint.com` |
| Missing required fields | Refer to `schemas.ts` generator functions for required fields |

---

## SEO Benefits

- ✅ **Google Knowledge Panel**: LocalBusiness schema enables business panel in search results
- ✅ **FAQ Rich Snippets**: FAQPage schema shows Q&A directly in search results
- ✅ **Local Visibility**: Medical + LocalBusiness + Person schemas boost local search rankings
- ✅ **Breadcrumb Navigation**: Enables breadcrumb trails in SERPs for better UX
- ✅ **Content Clarity**: Helps search engines understand content structure and relationships

---

## Maintenance

### Adding a New Schema
1. Add a new generator function to `/lib/schemas.ts`
2. Use the `<JsonLdSchema>` component in the page
3. Test with Google's Rich Results Test tool

### Updating Business Data
All business information is centralized in `/lib/site-data.ts`. Update it once and all schemas auto-update.

### Domain Changes
The domain `https://movemuscleandjoint.com` is used throughout. To update:
1. Change `SITE.url` in `/lib/site-data.ts`
2. All schemas will automatically use the new domain

---

## Files Modified

- ✅ `/lib/site-data.ts` — Updated domain to `https://movemuscleandjoint.com`
- ✅ `/app/sitemap.ts` — Updated domain reference
- ✅ `/public/robots.txt` — Updated sitemap URL
- ✅ `/app/api/contact/route.ts` — Updated email domain
- ✅ `/lib/schemas.ts` — **NEW** Centralized schema generators
- ✅ `/components/schema-json-ld.tsx` — **NEW** Reusable schema component
- ✅ `/app/layout.tsx` — Added WebSite schema
- ✅ `/app/page.tsx` — Added LocalBusiness+Chiropractor schema
- ✅ `/app/faq/page.tsx` — Added FAQPage schema
- ✅ `/app/about/page.tsx` — Added Person schema
- ✅ `/components/templates/condition-page-template.tsx` — Added MedicalCondition + FAQPage schemas
- ✅ `/components/templates/service-page-template.tsx` — Added Service + FAQPage schemas
