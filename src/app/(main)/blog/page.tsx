import Link from 'next/link'
import { type Metadata } from 'next'

import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { allArticles, getCategoryColorClass, buildBlogIndexSchemas } from '@/lib/blog-articles'

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
    url: 'https://peekup.ng/blog',
    images: [{ url: '/seo/peekupseo.png', width: 1200, height: 630 }],
  },
  twitter: {
    title: 'Peekup Blog | Shopping Guides for Enugu Residents',
    description:
      'Expert shopping guides and delivery tips for Enugu residents.',
    images: ['/seo/peekupseo.png'],
  },
  alternates: {
    canonical: 'https://peekup.ng/blog',
  },
}

export default function BlogIndexPage() {
  const schemas = buildBlogIndexSchemas()

  return (
    <>
      {/* Structured data — CollectionPage + BreadcrumbList + Organization + WebSite */}
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="py-16 sm:py-24">
        <Container>
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-orange-600">
              Peekup Blog
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Shop Smarter in Enugu
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Guides, tips, and local insights to help Enugu residents and students
              get the most out of online shopping and local delivery.
            </p>
          </div>

          {/* Featured article (first one) */}
          {allArticles[0] && (
            <div className="mt-16">
              <Link
                href={`/blog/${allArticles[0].slug}`}
                className="group block overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex flex-col gap-6 p-8 sm:p-10 lg:flex-row lg:items-center lg:gap-12">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <span
                        className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${getCategoryColorClass(allArticles[0].categoryColor)}`}
                      >
                        {allArticles[0].category}
                      </span>
                      <span className="text-sm text-gray-500">
                        {allArticles[0].readMinutes} min read
                      </span>
                    </div>
                    <h2 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 group-hover:text-orange-600 sm:text-3xl">
                      {allArticles[0].headline}
                    </h2>
                    <p className="mt-3 text-base leading-7 text-gray-600">
                      {allArticles[0].description}
                    </p>
                    <p className="mt-6 text-sm font-semibold text-orange-600">
                      Read article →
                    </p>
                  </div>
                  <div className="hidden flex-none lg:block">
                    <div className="flex h-40 w-40 items-center justify-center rounded-2xl bg-orange-50 text-6xl">
                      🛒
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Article grid */}
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {allArticles.slice(1).map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getCategoryColorClass(article.categoryColor)}`}
                    >
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-500">{article.readMinutes} min</span>
                  </div>
                  <h2 className="mt-4 flex-1 text-lg font-semibold leading-snug tracking-tight text-gray-900 group-hover:text-orange-600">
                    {article.headline}
                  </h2>
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
                    {article.description}
                  </p>
                  <p className="mt-6 text-sm font-semibold text-orange-600">Read more →</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 rounded-3xl bg-orange-600 px-8 py-12 text-center text-white sm:px-16">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Ready to shop local in Enugu?
            </h2>
            <p className="mt-4 text-lg text-orange-100">
              Join thousands of Enugu residents ordering from 220+ local vendors with
              real-time delivery tracking.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button href="/waitlist" color="soft">
                Get Early Access
              </Button>
              <Button href="/business" variant="outline" color="transparent" className="border-white text-white hover:bg-white/10">
                List Your Business
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
