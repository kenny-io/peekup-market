import Link from 'next/link'
import { type Metadata } from 'next'

import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import {
  allArticles,
  getCategoryColorClass,
  getCategoryAccentClass,
  buildBlogIndexSchemas,
} from '@/lib/blog-articles'

export const metadata: Metadata = {
  title: 'Peekup Blog | Shopping Guides for Enugu Residents',
  description:
    'Expert shopping guides, vendor tips, and local delivery insights for Enugu State. Learn how to shop smarter with Peekup — the local marketplace for Enugu.',
  keywords: [
    'Enugu shopping guide',
    'online shopping Enugu',
    'local delivery Enugu',
    'Peekup blog',
    'grocery delivery Enugu',
    'buy online Enugu',
  ],
  openGraph: {
    title: 'Peekup Blog | Shopping Guides for Enugu Residents',
    description:
      'Expert shopping guides and delivery tips for Enugu residents. Buy groceries, electronics, fashion and more online with Peekup.',
    url: 'https://usepeekup.com/blog',
    images: [{ url: '/seo/peekupseo.png', width: 1200, height: 630 }],
  },
  twitter: {
    title: 'Peekup Blog | Shopping Guides for Enugu Residents',
    description: 'Expert shopping guides and delivery tips for Enugu residents.',
    images: ['/seo/peekupseo.png'],
  },
  alternates: {
    canonical: 'https://usepeekup.com/blog',
  },
}

const serif = { fontFamily: "var(--font-playfair, 'Georgia', serif)" }
const sans = { fontFamily: "var(--font-dm-sans, ui-sans-serif, system-ui)" }

export default function BlogIndexPage() {
  const schemas = buildBlogIndexSchemas()

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div style={sans}>
        {/* ── Hero ──────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-[#f5f2eb] pb-16 pt-14 sm:pb-20 sm:pt-20">
          {/* Decorative background ring */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-orange-100/60 blur-3xl"
          />
          <Container>
            <div className="max-w-3xl">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-orange-500" />
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-600">
                  Marketplace Guides
                </p>
              </div>
              <h1
                style={serif}
                className="text-5xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-6xl lg:text-[4.5rem]"
              >
                Shop smarter,{' '}
                <em className="italic text-orange-600">live better</em>{' '}
                in Enugu
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
                Insider guides, vendor picks, and delivery tips crafted for Enugu
                residents and students ordering from 220+ local vendors.
              </p>
            </div>
          </Container>
        </section>

        {/* ── Featured Article ──────────────────────────────────────── */}
        {allArticles[0] && (
          <section className="border-b border-gray-100 bg-white">
            <Container>
              <Link
                href={`/blog/${allArticles[0].slug}`}
                className="group block py-12 sm:py-16"
              >
                <div className="grid items-center gap-10 lg:grid-cols-[1fr_200px]">
                  <div>
                    {/* Meta row */}
                    <div className="mb-5 flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-orange-600 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-white">
                        Featured
                      </span>
                      <span
                        className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${getCategoryColorClass(allArticles[0].categoryColor)}`}
                      >
                        {allArticles[0].category}
                      </span>
                      <span className="text-sm text-gray-400">
                        {allArticles[0].readMinutes} min read
                      </span>
                    </div>

                    <h2
                      style={serif}
                      className="text-3xl font-bold leading-tight tracking-tight text-gray-900 transition-colors group-hover:text-orange-600 sm:text-4xl lg:text-5xl"
                    >
                      {allArticles[0].headline}
                    </h2>
                    <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-600">
                      {allArticles[0].description}
                    </p>

                    <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-orange-600">
                      Read the full guide
                      <span className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </div>

                  {/* Icon block */}
                  <div className="hidden items-center justify-center lg:flex">
                    <div className="flex h-44 w-44 items-center justify-center rounded-3xl bg-orange-50 text-7xl shadow-inner">
                      🛒
                    </div>
                  </div>
                </div>
              </Link>
            </Container>
          </section>
        )}

        {/* ── Article Grid ─────────────────────────────────────────── */}
        <section className="bg-[#f5f2eb] py-16 sm:py-20">
          <Container>
            {/* Section heading */}
            <div className="mb-10 flex items-center gap-5">
              <h2 style={serif} className="text-2xl font-semibold text-gray-900">
                All Guides
              </h2>
              <span className="h-px flex-1 bg-gray-200" />
              <span className="text-sm text-gray-400">
                {allArticles.slice(1).length} articles
              </span>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {allArticles.slice(1).map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  {/* Category accent bar */}
                  <div className={`h-1 ${getCategoryAccentClass(article.categoryColor)}`} />

                  <div className="flex flex-1 flex-col p-6">
                    {/* Meta */}
                    <div className="mb-4 flex items-center gap-2">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getCategoryColorClass(article.categoryColor)}`}
                      >
                        {article.category}
                      </span>
                      <span className="text-xs text-gray-400">{article.readMinutes} min</span>
                    </div>

                    {/* Title */}
                    <h2
                      style={serif}
                      className="flex-1 text-lg font-semibold leading-snug text-gray-900 transition-colors group-hover:text-orange-600"
                    >
                      {article.headline}
                    </h2>

                    {/* Excerpt */}
                    <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-500">
                      {article.description}
                    </p>

                    {/* CTA link */}
                    <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-orange-600">
                      Read guide
                      <span className="transition-transform group-hover:translate-x-0.5">
                        →
                      </span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>

        {/* ── Marketplace CTA ──────────────────────────────────────── */}
        <section className="border-t border-gray-100 bg-white py-16 sm:py-20">
          <Container>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 to-orange-600 px-8 py-14 text-center sm:px-16">
              {/* Decorative circles */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-orange-700/20"
              />

              <div className="relative">
                <h2
                  style={serif}
                  className="text-3xl font-bold text-white sm:text-4xl"
                >
                  Enugu&apos;s marketplace,{' '}
                  <em className="italic">in your pocket</em>
                </h2>
                <p className="mx-auto mt-4 max-w-lg text-lg text-orange-100">
                  Browse groceries, electronics, fashion, pharmacy and more — from
                  220+ local Enugu vendors with same-day delivery.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button href="/waitlist" color="soft">
                    Get Early Access
                  </Button>
                  <Button
                    href="/vendors"
                    variant="outline"
                    color="transparent"
                    className="border-white text-white hover:bg-white/10"
                  >
                    Explore the Marketplace
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </>
  )
}
