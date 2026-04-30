# Schema Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────────┐
│                    MOVE MUSCLE & JOINT WEBSITE                      │
│                   Schema.org JSON-LD Implementation                  │
└─────────────────────────────────────────────────────────────────────┘

┌─ SINGLE SOURCE OF TRUTH ─────────────────────────────────────────┐
│                         SITE_DATA                                 │
│  • Domain: https://movemuscleandjoint.com                         │
│  • Business: Move Muscle & Joint                                  │
│  • Phone: (913) 303-0989                                          │
│  • Address: 10701 El Monte St, Studio 2, Overland Park, KS 66211 │
│  • Coordinates: 38.9258, -94.6458                                 │
└──────────────────────────────────────────────────────────────────┘
                              ▼
┌─ SCHEMA UTILITY LAYER ──────────────────────────────────────────┐
│                        /lib/schemas.ts                           │
│                                                                   │
│  • localBusinessChiropractor()                                   │
│  • service(title, slug)                                          │
│  • faqPage(faqs)                                                 │
│  • breadcrumb(breadcrumbs)                                       │
│  • person(name, title, description)                             │
│  • medicalCondition(name, alternateName, description, ...)      │
│  • website()                                                     │
└──────────────────────────────────────────────────────────────────┘
                              ▼
┌─ COMPONENT LAYER ──────────────────────────────────────────────┐
│              /components/schema-json-ld.tsx                     │
│                                                                  │
│  Renders: <script type="application/ld+json">                  │
│  Accepts: Any schema object from /lib/schemas.ts              │
└──────────────────────────────────────────────────────────────────┘
                              ▼
┌─ PAGE IMPLEMENTATION ──────────────────────────────────────────┐
│                                                                 │
│  Homepage /                                                    │
│  ├─ <JsonLdSchema data={schemas.localBusinessChiropractor()}/> │
│  ├─ <JsonLdSchema data={schemas.website()}/>                  │
│  └─ ... home page content                                     │
│                                                                 │
│  FAQ /faq                                                      │
│  ├─ <JsonLdSchema data={schemas.faqPage(faqs)}/>              │
│  ├─ <JsonLdSchema data={schemas.breadcrumb([...])/>           │
│  └─ ... faq content                                           │
│                                                                 │
│  About /about                                                  │
│  ├─ <JsonLdSchema data={schemas.person(...)/>                 │
│  ├─ <JsonLdSchema data={schemas.breadcrumb([...])/>           │
│  └─ ... about content                                         │
│                                                                 │
│  Services /services/*, Conditions /conditions/*               │
│  ├─ <JsonLdSchema data={schemas.service(...)}/>              │
│  ├─ <JsonLdSchema data={schemas.medicalCondition(...)}/>     │
│  ├─ <JsonLdSchema data={schemas.faqPage(faqs)}/>             │
│  ├─ <JsonLdSchema data={schemas.breadcrumb([...])/>          │
│  └─ ... service/condition content                            │
│                                                                 │
└──────────────────────────────────────────────────────────────────┘
                              ▼
┌─ SEARCH ENGINE CONSUMPTION ────────────────────────────────────┐
│                                                                 │
│  Google Rich Results        → FAQ snippets, breadcrumbs       │
│  Google Knowledge Panel     → LocalBusiness + Person          │
│  Local Search Ranking       → MedicalCondition + Address      │
│  Voice Search               → Structured Q&A                  │
│  Knowledge Graph            → Person schema                   │
│                                                                 │
└──────────────────────────────────────────────────────────────────┘
```

---

## Schema Dependency Graph

```
                    ALL PAGES (Root Layout)
                            │
                            ▼
                     WebSite Schema
                    (site identity)
                            │
        ┌───────────────────┼───────────────────┐
        ▼                   ▼                   ▼
    Homepage          Interior Pages        All Pages
        │                  │                  │
        ▼                  ▼                  ▼
LocalBusiness+      BreadcrumbList      + Individual Schemas
Chiropractor                                 │
(business ID)                    ┌──────────┼──────────┐
                                 ▼          ▼          ▼
                            Services    Conditions    FAQ
                                │          │          │
                                ▼          ▼          ▼
                            Service    Medical      FAQ Page
                                    Condition


Additional by Page:
    /about         → Person (provider)
    /services/*    → Service (service description)
    /conditions/*  → MedicalCondition (condition info)
    /faq, /...     → FAQPage (rich Q&A snippets)
```

---

## Data Flow Example: Service Page

```
1. Page Loads: /services/chiropractic-care

2. Component Mount:
   └─ ServicePageTemplate renders
      └─ Calls schemas.service("Chiropractic Care", "/services/chiropractic-care")
      └─ Returns Service schema object

3. Schema Generation:
   Service {
     @id: "https://movemuscleandjoint.com/services/chiropractic-care#service"
     name: "Chiropractic Care"
     provider: {
       @type: "Chiropractor"
       @id: "https://movemuscleandjoint.com/#organization"  ← Links to LocalBusiness
     }
   }

4. Rendering:
   <JsonLdSchema data={serviceSchema} />
   └─ Renders: <script type="application/ld+json">{...}</script>

5. SEO Result:
   ✅ Google knows this is a service
   ✅ Service is linked to the Chiropractor business
   ✅ Service details appear in rich results
   ✅ Contributes to local search ranking
```

---

## Testing Workflow

```
DEVELOPMENT
    │
    ├─ Write code with <JsonLdSchema>
    │
    ├─ Test locally with:
    │  └─ Google Rich Results Test
    │  └─ Schema.org Validator
    │
    └─ Verify in DevTools: Elements > <script type="application/ld+json">

STAGING
    │
    ├─ Deploy to staging domain
    │
    ├─ Re-test with Google Tools
    │  (may need to wait 24h for crawl)
    │
    └─ Check Google Search Console for errors

PRODUCTION
    │
    ├─ Deploy to https://movemuscleandjoint.com
    │
    ├─ Run final tests:
    │  └─ Google Rich Results Test
    │  └─ Google Search Console → Enhancements
    │
    └─ Monitor for:
       • FAQ snippets appearing in SERPs
       • Knowledge Panel information
       • Breadcrumb navigation in results
```

---

## Quick Debug Checklist

```
Schema not showing?
□ Check browser DevTools for <script type="application/ld+json">
□ Copy JSON and validate at validator.schema.org
□ Verify @id URLs match https://movemuscleandjoint.com exactly
□ Check for JSON syntax errors (trailing commas, etc.)

Wrong data displaying?
□ Verify SITE object in /lib/site-data.ts has correct values
□ Check that schema generator pulls from SITE (not hardcoded)
□ Clear browser cache and DevTools cache

Missing schemas on page?
□ Ensure <JsonLdSchema> component is imported
□ Check that page calls schemas.yourSchema()
□ Verify component renders in JSX return statement
□ Check browser console for React errors
```

---

## File Dependencies

```
/lib/site-data.ts (SINGLE SOURCE OF TRUTH)
        ▲
        │ imported by
        ├─ /lib/schemas.ts (all 7 generators)
        │       ▲
        │       │ imported by
        │       ├─ /app/page.tsx
        │       ├─ /app/layout.tsx
        │       ├─ /app/faq/page.tsx
        │       ├─ /app/about/page.tsx
        │       ├─ /components/templates/condition-page-template.tsx
        │       └─ /components/templates/service-page-template.tsx
        │
        └─ All other imports
           (sitemap, contact route, footer, etc.)

KEY PRINCIPLE:
If you need to update business data, ONLY touch /lib/site-data.ts
Everything else will automatically use the new values.
```
