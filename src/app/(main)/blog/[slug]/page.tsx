import Link from 'next/link'
import { notFound } from 'next/navigation'
import { type Metadata } from 'next'

import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import {
  allArticles,
  getArticleBySlug,
  getAllSlugs,
  getCategoryColorClass,
  buildArticleSchemas,
  type ArticleSection,
  type CardItem,
} from '@/lib/blog-articles'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) return {}

  return {
    title: article.title,
    description: article.description,
    keywords: article.keywords,
    openGraph: {
      title: article.title,
      description: article.description,
      url: `https://peekup.ng/blog/${article.slug}`,
      type: 'article',
      publishedTime: article.datePublished,
      modifiedTime: article.dateModified,
      authors: ['Peekup'],
      tags: article.keywords,
      images: [{ url: '/seo/peekupseo.png', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description,
      images: ['/seo/peekupseo.png'],
    },
    alternates: {
      canonical: `https://peekup.ng/blog/${article.slug}`,
    },
  }
}

function SectionRenderer({ section }: { section: ArticleSection }) {
  switch (section.type) {
    case 'intro':
      return (
        <p
          className="article-intro mt-6 text-lg leading-8 text-gray-700"
          dangerouslySetInnerHTML={{ __html: section.content ?? '' }}
        />
      )

    case 'h2':
      return (
        <h2 className="mt-12 text-2xl font-bold tracking-tight text-gray-900">
          {section.content}
        </h2>
      )

    case 'h3':
      return (
        <h3 className="mt-8 text-xl font-semibold tracking-tight text-gray-900">
          {section.content}
        </h3>
      )

    case 'paragraph':
      return (
        <p
          className="mt-4 text-base leading-7 text-gray-700"
          dangerouslySetInnerHTML={{ __html: section.content ?? '' }}
        />
      )

    case 'ul':
      return (
        <ul className="mt-4 space-y-2">
          {(section.items ?? []).map((item, i) => (
            <li key={i} className="flex gap-3 text-base text-gray-700">
              <span className="mt-1 flex-none text-orange-500">•</span>
              <span dangerouslySetInnerHTML={{ __html: item }} />
            </li>
          ))}
        </ul>
      )

    case 'ol':
      return (
        <ol className="mt-4 space-y-3">
          {(section.items ?? []).map((item, i) => (
            <li key={i} className="flex gap-4 text-base text-gray-700">
              <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-orange-100 text-sm font-semibold text-orange-700">
                {i + 1}
              </span>
              <span
                className="mt-0.5"
                dangerouslySetInnerHTML={{ __html: item }}
              />
            </li>
          ))}
        </ol>
      )

    case 'card-grid':
      return (
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {(section.cards ?? []).map((card: CardItem, i) => (
            <div
              key={i}
              className="rounded-2xl border border-gray-100 bg-gray-50 p-5"
            >
              <div className="text-2xl">{card.icon}</div>
              <h3 className="mt-3 text-base font-semibold text-gray-900">
                {card.title}
              </h3>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      )

    case 'table':
      return (
        <div className="mt-6 overflow-x-auto rounded-2xl border border-gray-200">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                {(section.headers ?? []).map((h, i) => (
                  <th
                    key={i}
                    className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-600"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              {(section.rows ?? []).map((row, ri) => (
                <tr key={ri} className={ri % 2 === 0 ? '' : 'bg-gray-50/50'}>
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className={`px-4 py-3 text-gray-700 ${ci === 0 ? 'font-medium' : ''}`}
                      dangerouslySetInnerHTML={{ __html: cell }}
                    />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )

    case 'callout':
      return (
        <div className="mt-6 rounded-2xl border-l-4 border-orange-400 bg-orange-50 p-5">
          <p
            className="text-base text-gray-800"
            dangerouslySetInnerHTML={{ __html: section.content ?? '' }}
          />
        </div>
      )

    case 'cta':
      return (
        <div className="mt-12 rounded-3xl bg-orange-600 px-8 py-10 text-center">
          <p className="text-lg font-semibold text-white">
            {section.content}
          </p>
          <div className="mt-6">
            <Button href={section.ctaHref ?? '/waitlist'} color="soft">
              {section.ctaLabel ?? 'Get Started'}
            </Button>
          </div>
        </div>
      )

    default:
      return null
  }
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) notFound()

  const related = allArticles.filter((a) => article.relatedSlugs.includes(a.slug))
  const schemas = buildArticleSchemas(article)

  return (
    <>
      {/* Structured data — Article + FAQPage + BreadcrumbList + Organization + WebSite */}
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="py-12 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-gray-500" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-orange-600">
                Home
              </Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-orange-600">
                Blog
              </Link>
              <span>/</span>
              <span className="text-gray-700">{article.category}</span>
            </nav>

            {/* Article header */}
            <header className="mt-8">
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${getCategoryColorClass(article.categoryColor)}`}
                >
                  {article.category}
                </span>
                <span className="text-sm text-gray-500">{article.readMinutes} min read</span>
                <span className="text-sm text-gray-400">•</span>
                <time className="text-sm text-gray-500" dateTime={article.dateModified}>
                  Updated{' '}
                  {new Date(article.dateModified).toLocaleDateString('en-NG', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {article.headline}
              </h1>
              <p className="mt-4 text-lg leading-8 text-gray-600">{article.description}</p>
            </header>

            {/* Divider */}
            <div className="mt-8 border-t border-gray-200" />

            {/* Article body */}
            <article className="mt-8">
              {article.sections.map((section, i) => (
                <SectionRenderer key={i} section={section} />
              ))}
            </article>

            {/* FAQ section */}
            {article.faqs.length > 0 && (
              <section className="mt-16" aria-labelledby="faq-heading">
                <h2
                  id="faq-heading"
                  className="text-2xl font-bold tracking-tight text-gray-900"
                >
                  Frequently Asked Questions
                </h2>
                <div className="mt-6 space-y-6">
                  {article.faqs.map((faq, i) => (
                    <div
                      key={i}
                      className="rounded-2xl border border-gray-100 bg-gray-50 p-6"
                    >
                      <h3 className="text-base font-semibold text-gray-900">{faq.q}</h3>
                      <p className="faq-answer mt-2 text-sm leading-6 text-gray-700">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Related articles */}
            {related.length > 0 && (
              <section className="mt-16">
                <h2 className="text-xl font-bold tracking-tight text-gray-900">
                  Related Articles
                </h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {related.map((rel) => (
                    <Link
                      key={rel.slug}
                      href={`/blog/${rel.slug}`}
                      className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
                    >
                      <span
                        className={`inline-flex w-fit items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getCategoryColorClass(rel.categoryColor)}`}
                      >
                        {rel.category}
                      </span>
                      <h3 className="mt-3 text-sm font-semibold leading-snug text-gray-900 group-hover:text-orange-600">
                        {rel.headline}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-xs leading-5 text-gray-500">
                        {rel.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Back to blog */}
            <div className="mt-12 border-t border-gray-200 pt-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-700"
              >
                ← Back to all articles
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
