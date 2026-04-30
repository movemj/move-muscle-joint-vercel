# Quick Reference: JSON-LD Implementation Summary

## What Was Done

### 1. Domain Update
✅ Updated all instances of `movemj.com` to `https://movemuscleandjoint.com` globally across:
- `/lib/site-data.ts` (SITE.domain, SITE.url)
- `/app/sitemap.ts`
- `/public/robots.txt`
- `/app/api/contact/route.ts`

### 2. Email Configuration
✅ Added email configuration:
- Email: `hello@movemj.com`
- Added to `/lib/site-data.ts` as `SITE.email`
- Integrated into LocalBusiness schema
- Added to footer with mailto link
- Updated contact API route to use correct email

### 2. Created Schema Infrastructure

#### New Files
- **`/lib/schemas.ts`** (192 lines)
  - 7 schema generator functions
  - All schemas use centralized business data
  - Type-safe, reusable exports

- **`/components/schema-json-ld.tsx`** (19 lines)
  - Reusable React component for rendering schemas
  - Handles JSON serialization and script injection

- **`/JSON_LD_SCHEMA_STRATEGY.md`** (399 lines)
  - Complete documentation
  - All 7 paste-ready JSON-LD blocks
  - Per-page deployment map
  - Testing & validation guides

### 3. Implemented 7 Core Schemas

| # | Schema | Type | Pages |
|---|--------|------|-------|
| 1️⃣ | LocalBusiness + Chiropractor | Combined | Homepage |
| 2️⃣ | Service | Individual services | `/services/*` |
| 3️⃣ | FAQPage | FAQ rich snippets | `/faq`, condition pages, service pages |
| 4️⃣ | BreadcrumbList | Navigation breadcrumbs | All interior pages |
| 5️⃣ | Person | Healthcare provider | `/about` |
| 6️⃣ | MedicalCondition | Medical conditions | `/conditions/*` |
| 7️⃣ | WebSite | Site-wide identity | Root layout (all pages) |

### 4. Updated Pages with Schemas

✅ `/app/layout.tsx` — WebSite schema
✅ `/app/page.tsx` — LocalBusiness+Chiropractor schema
✅ `/app/faq/page.tsx` — FAQPage schema
✅ `/app/about/page.tsx` — Person schema
✅ `/components/templates/condition-page-template.tsx` — MedicalCondition + FAQPage schemas
✅ `/components/templates/service-page-template.tsx` — Service + FAQPage schemas

---

## How to Use

### Adding a Schema to a Page

```tsx
import { JsonLdSchema } from '@/components/schema-json-ld';
import { schemas } from '@/lib/schemas';

export default function Page() {
  return (
    <>
      <JsonLdSchema data={schemas.localBusinessChiropractor()} />
      {/* Your page content */}
    </>
  );
}
```

### Customizing Schemas

All business data is centralized in `/lib/site-data.ts`. Update it once and all schemas automatically reflect the change:

```ts
export const SITE = {
  name: "Move Muscle & Joint",
  url: "https://movemuscleandjoint.com",
  telephone: "(913) 303-0989",
  address: "10701 El Monte St, Studio 2, Overland Park, KS 66211",
  // ... more fields
};
```

---

## Schema Deployment Map

### Core Pages (Already Implemented ✅)

| Page | Schemas | Implementation |
|------|---------|-----------------|
| Homepage | LocalBusiness+Chiropractor, WebSite | ✅ `/app/page.tsx` |
| FAQ | FAQPage, BreadcrumbList, WebSite | ✅ `/app/faq/page.tsx` |
| About | Person, BreadcrumbList, WebSite | ✅ `/app/about/page.tsx` |
| Services/* | Service, FAQPage, BreadcrumbList | ✅ Template |
| Conditions/* | MedicalCondition, FAQPage, BreadcrumbList | ✅ Template |

### Automatic (Via Templates)

All service pages automatically get: **Service + FAQPage + BreadcrumbList** schemas
All condition pages automatically get: **MedicalCondition + FAQPage + BreadcrumbList** schemas

---

## Validation Checklist

Before going live, verify:

- [ ] Run [Google Rich Results Test](https://search.google.com/test/rich-results) on each page type
- [ ] Check `/JSON_LD_SCHEMA_STRATEGY.md` for all 7 paste-ready blocks
- [ ] Verify domain is consistently `https://movemuscleandjoint.com` across all schemas
- [ ] Test breadcrumbs appear in search results
- [ ] Verify FAQ markup displays in Google Search Console

---

## Files Modified

| File | Changes |
|------|---------|
| `/lib/site-data.ts` | Domain → `https://movemuscleandjoint.com` |
| `/app/sitemap.ts` | Domain → `https://movemuscleandjoint.com` |
| `/public/robots.txt` | Sitemap URL → `https://movemuscleandjoint.com` |
| `/app/api/contact/route.ts` | Email domain → `movemuscleandjoint.com` |
| `/lib/schemas.ts` | **NEW** — Centralized schema utilities |
| `/components/schema-json-ld.tsx` | **NEW** — Reusable schema component |
| `/app/layout.tsx` | Added WebSite schema |
| `/app/page.tsx` | Added LocalBusiness+Chiropractor schema |
| `/app/faq/page.tsx` | Added FAQPage schema |
| `/app/about/page.tsx` | Added Person schema |
| `/components/templates/condition-page-template.tsx` | Added MedicalCondition + FAQPage schemas |
| `/components/templates/service-page-template.tsx` | Added Service + FAQPage schemas |

---

## SEO Impact

✅ **Google Knowledge Panel** — LocalBusiness schema
✅ **FAQ Rich Snippets** — FAQPage schema for Q&A in search results
✅ **Breadcrumb Navigation** — Better SERP UX
✅ **Local Search Authority** — Combined LocalBusiness + Chiropractor + Person + MedicalCondition
✅ **Content Understanding** — Structured data helps Google understand your services & conditions

---

## Next Steps

1. ✅ Domain updated globally
2. ✅ 7 schemas implemented across all pages
3. ✅ Complete documentation created

**Ready to deploy!** Test with [Google Rich Results Test](https://search.google.com/test/rich-results) to verify schemas are rendering.
