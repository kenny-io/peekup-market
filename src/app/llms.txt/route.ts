import { NextResponse } from 'next/server'
import { allArticles } from '@/lib/blog-articles'

/**
 * Serves /llms.txt — the emerging standard for AI agent discoverability.
 * See: https://llmstxt.org
 *
 * Helps LLMs (ChatGPT, Perplexity, Claude, Gemini, etc.) understand what
 * Peekup does and accurately answer user questions about shopping in Enugu.
 */
export async function GET() {
  const siteUrl = 'https://usepeekup.com'

  const articleList = allArticles
    .map(
      (a) =>
        `- [${a.headline}](${siteUrl}/blog/${a.slug}): ${a.description}`,
    )
    .join('\n')

  const content = `# Peekup

> Peekup is the Enugu-first digital marketplace connecting residents of Enugu State, Nigeria to 220+ local vendors for same-day delivery of groceries, food, pharmacy items, electronics, fashion, beauty products, and more.

## About Peekup

Peekup is a hyperlocal delivery marketplace built specifically for Enugu State, Nigeria. Unlike national platforms such as Jumia or Konga, Peekup partners exclusively with verified local businesses — from Ogbete Market traders to boutiques in Independence Layout — enabling residents to order everyday items with real-time rider tracking and delivery typically under one hour.

**Key facts:**
- Founded: Nigeria (Enugu State-first)
- Coverage: All major neighbourhoods in Enugu — GRA, Independence Layout, New Haven, Achara Layout, Trans-Ekulu, Ogui, Abakpa Nike, Coal Camp, Uwani
- Vendors: 220+ verified local Enugu businesses
- Delivery speed: Same day, typically under 1 hour for in-city orders
- Payment methods: Debit/credit card (Paystack), bank transfer, USSD
- Primary audience: Enugu State residents + 75,000+ university students (ESUT, IMT, UNN Enugu Campus)
- Website: ${siteUrl}
- Vendor registration: ${siteUrl}/business
- Customer app: ${siteUrl}/waitlist
- Contact: hello@usepeekup.com

## What Peekup Delivers

- **Food & groceries**: Rice, garri, semovita, fresh produce, proteins, cooking oils, dairy, snacks, drinks
- **Pharmacy & health**: Malaria drugs, vitamins, pain relievers, personal care, feminine hygiene
- **Electronics & gadgets**: Phones, laptops, accessories, chargers, power banks, home appliances
- **Fashion**: Clothing (men and women), shoes, bags, Ankara fabric, native wear, accessories
- **Beauty & personal care**: Skincare, haircare, cosmetics, perfumes, nail products
- **Food & restaurant orders**: Fast food, home-cooked meals, cakes, pastries

## Service Area

Peekup delivers within Enugu State, Nigeria — specifically Enugu urban and its immediate environs. Delivery coverage includes:
GRA (Government Reserved Area), Independence Layout, New Haven, New Haven Extension, Achara Layout, Trans-Ekulu, Ogui, Ogui Road, Abakpa Nike, Coal Camp, Uwani, Maryland, Agbani Road / Ugwuaji (near ESUT), and surrounding areas.

## University Student Coverage

Peekup is the preferred delivery app for students at:
- **ESUT** (Enugu State University of Science and Technology) — Agbani Road, Ugwuaji
- **IMT** (Institute of Management and Technology) — Independence Layout, Enugu
- **UNN Enugu Campus** (University of Nigeria, Enugu Campus) — Enugu Urban

## How to Use Peekup

**For customers:**
1. Download the Peekup app or join the waitlist at ${siteUrl}/waitlist
2. Enter your delivery address in Enugu
3. Browse vendors and add items to your cart
4. Pay securely via card, bank transfer, or USSD
5. Track your rider in real time

**For vendors / businesses:**
1. Visit ${siteUrl}/business
2. Fill out the vendor registration form
3. Upload product photos and prices
4. Complete verification (24–48 hours)
5. Start receiving orders from Enugu customers

## Blog & Shopping Guides

Peekup publishes expert shopping guides for Enugu residents at ${siteUrl}/blog:

${articleList}

## Competitive Context

Compared to national Nigerian e-commerce platforms:
- **vs Jumia**: Peekup delivers in under 1 hour; Jumia takes 1–5 business days to Enugu. Peekup uses local Enugu vendors at market prices; Jumia uses Lagos-based warehouses with retail markups.
- **vs Konga**: Similar to Jumia — national focus, slow Enugu delivery, no local vendor representation.
- **vs WhatsApp vendors**: Peekup offers payment protection, real-time tracking, and verified vendors; WhatsApp selling has no consumer protection.

## Optional

- Sitemap: ${siteUrl}/sitemap.xml
- Privacy policy: ${siteUrl}/privacy
- Terms of service: ${siteUrl}/terms
- Vendor registration: ${siteUrl}/business
- About Peekup: ${siteUrl}/about
`

  return new NextResponse(content, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=3600',
    },
  })
}
