# Peekup SEO Strategy

## Overview

Peekup's SEO strategy targets two audiences simultaneously: **traditional search crawlers** (Google, Bing) and **AI agents** (ChatGPT, Perplexity, Claude, Gemini). The goal is to own search intent for online shopping and local delivery in Enugu State — a high-value, low-competition geographic niche.

All content is statically pre-rendered at build time (Next.js SSG/static). Every page delivers complete HTML, metadata, and JSON-LD to the first byte — no JavaScript execution required for crawlers or agents to parse content.

---

## 1. Programmatic SEO Blog

### Location
- Article data: `src/lib/blog-articles.ts`
- Blog index: `src/app/(main)/blog/page.tsx`
- Article template: `src/app/(main)/blog/[slug]/page.tsx`
- Blog layout (fonts): `src/app/(main)/blog/layout.tsx`

### Strategy
9 long-form articles targeting high-value, low-competition search queries from Enugu residents and the 75,000+ student population (ESUT, IMT, UNN). Each article is built from structured data in `blog-articles.ts` — a single source of truth that feeds both the UI and the JSON-LD schemas.

### Target Keywords

| Article | Target Keyword | URL |
|---|---|---|
| Buy Groceries Online | buy groceries online Enugu | `/blog/buy-groceries-online-enugu` |
| Buy Electronics Online | buy electronics Enugu online | `/blog/buy-electronics-online-enugu` |
| Buy Fashion Online | buy clothes online Enugu | `/blog/buy-fashion-online-enugu` |
| Buy Beauty Products | buy beauty products Enugu | `/blog/buy-beauty-products-enugu` |
| Pharmacy Delivery | pharmacy delivery Enugu | `/blog/pharmacy-delivery-enugu` |
| Food Delivery | food delivery Enugu | `/blog/food-delivery-enugu` |
| Vendor Guide | sell online Enugu | `/blog/sell-online-enugu` |
| Student Shopping | online shopping for students Enugu | `/blog/online-shopping-students-enugu` |
| Same-Day Delivery | same day delivery Enugu | `/blog/same-day-delivery-enugu` |

### Content Structure (per article)
Each article in `blog-articles.ts` contains:
- `title` — `<title>` tag and OG title
- `headline` — H1 and `Article.headline` in JSON-LD
- `description` — meta description and `Article.description`
- `keywords[]` — meta keywords array
- `sections[]` — typed content blocks (`intro`, `h2`, `h3`, `paragraph`, `ul`, `ol`, `card-grid`, `table`, `callout`, `cta`)
- `faqs[]` — question/answer pairs for `FAQPage` schema
- `relatedSlugs[]` — internal linking between articles
- `datePublished` / `dateModified` — ISO 8601 dates for freshness signals

---

## 2. JSON-LD Structured Data

### Per Article Page — 3 Schema Graphs

**`Article` schema** (`src/lib/blog-articles.ts` → `buildArticleSchemas`)
- Type: `Article` within a `@graph` alongside `Organization` and `WebSite`
- Fields: `headline`, `description`, `keywords`, `datePublished`, `dateModified`, `author`, `publisher`, `about`, `mentions`, `audience`, `image`
- `about[]` — scoped to Enugu entity + category topic
- `mentions[]` — explicitly signals Peekup as an Organization entity
- `audience` — geographically scoped to Enugu State, Nigeria
- `speakable` — `SpeakableSpecification` targeting `.article-intro`, `.faq-answer`, `h1`, `h2` so AI voice agents know which content to read aloud

**`FAQPage` schema**
- Each FAQ marked up as `Question` / `Answer`
- `acceptedAnswer.author` — attributed to the Peekup Organization entity
- Eligible for Google FAQ rich results; directly cited by AI agents (ChatGPT, Perplexity, Gemini) when answering shopping queries

**`BreadcrumbList` schema**
- Home → Blog → Category
- Provides navigation context and sitelinks eligibility

### Blog Index Page — 1 Schema Graph

`CollectionPage` + `Organization` + `WebSite` with a `SearchAction` pointing to `/vendors?q={search_term_string}`, enabling Google Sitelinks Searchbox.

### Shared Organization Entity

Defined once in `blog-articles.ts` as `peekupOrganization` and reused across all schemas:
- `name`, `url`, `logo` (ImageObject with dimensions)
- `description` — "Enugu-first digital marketplace"
- `areaServed` — State → Country hierarchy (Enugu State, Nigeria)
- `contactPoint` — hello@usepeekup.com

---

## 3. Metadata (per page)

Handled via Next.js `generateMetadata` (server-side) and the root `layout.tsx` defaults.

Every page exports:
- `title` — unique, keyword-rich
- `description` — 150–160 chars, includes primary keyword
- `keywords[]`
- `openGraph` — title, description, url, type, image (1200×630), `publishedTime`, `modifiedTime`
- `twitter` — `summary_large_image` card
- `alternates.canonical` — prevents duplicate content

Global defaults are set in `src/app/layout.tsx`. Page-level metadata overrides them.

---

## 4. Sitemap

**Location:** `src/app/sitemap.ts` → served at `/sitemap.xml`

Includes all static routes with `changeFrequency` and `priority` weights:

| URL | Priority | Change Frequency |
|---|---|---|
| `/` | 1.0 | weekly |
| `/waitlist` | 0.9 | monthly |
| `/business` | 0.9 | monthly |
| `/blog` | 0.9 | weekly |
| `/about` | 0.8 | monthly |
| `/vendors` | 0.8 | weekly |
| `/blog/[slug]` × 9 | 0.8 | monthly |

Blog slugs are pulled dynamically from `getAllSlugs()` — adding a new article to `blog-articles.ts` automatically includes it in the sitemap.

The sitemap URL is referenced in `robots.txt` and linked from the site footer.

---

## 5. Robots

**Location:** `src/app/robots.ts` → served at `/robots.txt`

Standard crawlers get full access to `/` with private routes blocked (`/api/`, `/login`, `/register`, `/delete-account`).

AI agent crawlers are explicitly whitelisted with named `userAgent` rules:

| Agent | User-Agent |
|---|---|
| ChatGPT / SearchGPT | `GPTBot` |
| ChatGPT browsing | `ChatGPT-User` |
| Claude (Anthropic) | `ClaudeBot` |
| Claude.ai browsing | `claude-web` |
| Perplexity | `PerplexityBot` |
| Gemini / Bard | `Google-Extended` |
| Meta AI | `meta-externalagent` |
| Apple Intelligence / Siri | `Applebot-Extended` |
| Cohere | `cohere-ai` |
| You.com | `YouBot` |

Explicit allowlisting ensures Peekup content surfaces in AI-generated answers, not just blue-link search results.

---

## 6. llms.txt (AI Agent Discoverability)

**Location:** `src/app/llms.txt/route.ts` → served at `/llms.txt`

An implementation of the [llmstxt.org](https://llmstxt.org) emerging standard. A plain-text file that tells LLMs what Peekup is, what it delivers, who it serves, and where to find more information — in a format optimised for AI context windows rather than HTML parsing.

Contents:
- Product description and key facts (founders, coverage, vendor count, delivery speed, payment methods)
- Full delivery area coverage (named Enugu neighbourhoods)
- University student coverage (ESUT, IMT, UNN)
- Step-by-step instructions for customers and vendors
- Dynamic list of all blog articles with descriptions (pulled from `allArticles`)
- Competitive context vs Jumia, Konga, and WhatsApp vendors
- Links to sitemap, privacy policy, terms, vendor registration

Served with `Cache-Control: public, max-age=86400` (24-hour cache, 1-hour stale-while-revalidate).

---

## 7. Rendering Architecture

All blog pages are **server-side only** — no `'use client'` directive anywhere in the blog directory.

| Route | Render Strategy | How |
|---|---|---|
| `/blog` | Static (`○`) | Pre-rendered at build time |
| `/blog/[slug]` | SSG (`●`) | `generateStaticParams` pre-renders all 9 slugs at build |

JSON-LD `<script>` blocks are inlined into the HTML at build time — crawlers and AI agents receive fully structured data with zero JavaScript execution.

`generateMetadata` runs server-side, injecting all `<head>` tags (title, meta, OG, canonical) before the response is sent.

---

## 8. Internal Linking

Each article defines `relatedSlugs[]` — rendered as a "Keep Reading" section at the bottom of every article page. This creates a topical cluster around Enugu shopping that passes link equity between related pages and signals content depth to crawlers.

The blog index → article link structure ensures every article is reachable within 2 clicks from the homepage.

---

## Adding New Articles

1. Add a new `BlogArticle` object to the `allArticles` array in `src/lib/blog-articles.ts`
2. Set a unique `slug` — the URL will be `/blog/{slug}`
3. The article is automatically included in:
   - The sitemap (`/sitemap.xml`)
   - The blog index page grid
   - The `llms.txt` article list
   - `generateStaticParams` (pre-rendered at next build)
4. No other files need to be changed

---

## Monitoring

- Google Search Console: verify coverage via `/sitemap.xml` submission
- Search Console HTML verification file: `public/` (static file)
- Google Analytics: configured in `src/components/GoogleAnalytics.tsx` and `src/components/GoogleAnalyticsScripts.tsx`
