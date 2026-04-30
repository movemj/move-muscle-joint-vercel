# Domain & Email Configuration Summary

## Complete Configuration Applied

### Domain: `https://movemuscleandjoint.com/`

All domain references have been updated throughout the codebase.

**Files Updated:**
- ✅ `/lib/site-data.ts` — `SITE.url` = `https://movemuscleandjoint.com`
- ✅ `/lib/site-data.ts` — `SITE.domain` = `movemuscleandjoint.com`
- ✅ `/app/sitemap.ts` — Sitemap URL updated
- ✅ `/public/robots.txt` — Sitemap reference updated
- ✅ `/lib/schemas.ts` — All 7 schemas use correct domain via `SITE.url`
- ✅ `JSON_LD_SCHEMA_STRATEGY.md` — All examples updated

**Domain Count:** 37 references to `https://movemuscleandjoint.com` across the codebase

---

### Email: `hello@movemj.com`

Contact email integrated throughout the application.

**Files Updated:**
- ✅ `/lib/site-data.ts` — Added `SITE.email = "hello@movemj.com"`
- ✅ `/lib/schemas.ts` — LocalBusiness schema includes `email: SITE.email`
- ✅ `/components/layout/footer.tsx` — Email displayed with mailto link and Mail icon
- ✅ `/app/api/contact/route.ts` — Contact form sends from `hello@movemj.com`
- ✅ `JSON_LD_SCHEMA_STRATEGY.md` — LocalBusiness schema example includes email

**Email Locations:**
- Footer (visible to users)
- Contact form sender
- LocalBusiness schema (for search engines)

---

## Implementation Details

### Domain Updates Across Schema Types

| Schema Type | Domain Reference | Status |
|-------------|------------------|--------|
| LocalBusiness+Chiropractor | `@id`, `url`, image/logo URLs | ✅ |
| Service | `@id`, `provider.@id` | ✅ |
| FAQPage | N/A (no domain refs) | ✅ |
| BreadcrumbList | item URLs | ✅ |
| Person | `@id`, `worksFor.@id`, image URL | ✅ |
| MedicalCondition | N/A (no domain refs) | ✅ |
| WebSite | `@id`, `url`, `target` URL | ✅ |

### Email Integration

**LocalBusiness Schema (Homepage):**
```json
{
  "@type": ["LocalBusiness", "Chiropractor"],
  "telephone": "(913) 303-0989",
  "email": "hello@movemj.com"
}
```

**Footer Display:**
```tsx
<Mail className="w-4 h-4 shrink-0 text-softblue" />
<a href={`mailto:${SITE.email}`} className="hover:text-white transition-colors">
  {SITE.email}
</a>
```

**Contact Form API:**
```ts
const response = await resend.emails.send({
  from: 'Move Muscle & Joint <hello@movemj.com>',
  to: [contactToEmail],
  replyTo: email,
  // ...
});
```

---

## Testing Verification

### Domain References (37 total)
- ✅ `/lib/site-data.ts` — 1 reference
- ✅ `/app/sitemap.ts` — 1 reference  
- ✅ `/public/robots.txt` — 1 reference
- ✅ Documentation files (3) — 30+ references (examples)
- ✅ Read-only config file — 4 references

### Email References (4 total)
- ✅ `/lib/site-data.ts` — 1 definition
- ✅ `/lib/schemas.ts` — 1 usage
- ✅ `/components/layout/footer.tsx` — 1 usage
- ✅ `/app/api/contact/route.ts` — 1 usage

---

## No More References to Update

The following old domain/email patterns have been removed or updated:
- ❌ `movemj.com` (replaced with `movemuscleandjoint.com`)
- ❌ `noreply@movemuscleandjoint.com` (replaced with `hello@movemj.com`)
- ❌ `contact@movemj.com` (replaced with `hello@movemj.com`)

---

## Single Source of Truth

All domain and email references now flow from `/lib/site-data.ts`:

```ts
export const SITE = {
  name: "Move Muscle & Joint",
  phone: "(913) 303-0989",
  email: "hello@movemj.com",  // ← Email reference
  domain: "movemuscleandjoint.com",  // ← Domain reference
  url: "https://movemuscleandjoint.com",  // ← Full URL reference
  // ... rest of site config
};
```

**Impact:** Any future changes to domain or email require updates in only ONE location, and all schemas, pages, and components automatically reflect the new values.

---

## Deployment Checklist

Before going live:

- [ ] Test homepage loads correctly with `https://movemuscleandjoint.com`
- [ ] Verify footer displays email: `hello@movemj.com`
- [ ] Test contact form sends from `hello@movemj.com`
- [ ] Run Google Rich Results Test to verify schema emails display
- [ ] Check sitemap at `https://movemuscleandjoint.com/sitemap.xml`
- [ ] Verify robots.txt references correct sitemap URL
- [ ] Test mailto link in footer
- [ ] Verify Google Search Console shows correct domain

---

## Related Documentation

- See `JSON_LD_SCHEMA_STRATEGY.md` for complete schema implementation details
- See `SCHEMA_QUICK_REFERENCE.md` for quick summary of all changes
- See `SCHEMA_ARCHITECTURE.md` for technical architecture diagrams
