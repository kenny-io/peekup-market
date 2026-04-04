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

const serif = { fontFamily: "var(--font-playfair, 'Georgia', serif)" }
const sans = { fontFamily: "var(--font-dm-sans, ui-sans-serif, system-ui)" }

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
      url: `https://usepeekup.com/blog/${article.slug}`,
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
      canonical: `https://usepeekup.com/blog/${article.slug}`,
    },
  }
}

function SectionRenderer({ section }: { section: ArticleSection }) {
  switch (section.type) {
    case 'intro':
      return (
        <p
          className="article-intro mt-6 text-xl leading-9 text-gray-700"
          style={{ ...sans, fontWeight: 400 }}
          dangerouslySetInnerHTML={{ __html: section.content ?? '' }}
        />
      )

    case 'h2':
      return (
        <h2
          style={serif}
          className="mt-14 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl"
        >
          {section.content}
        </h2>
      )

    case 'h3':
      return (
        <h3
          style={serif}
          className="mt-8 text-xl font-semibold tracking-tight text-gray-900"
        >
          {section.content}
        </h3>
      )

    case 'paragraph':
      return (
        <p
          className="mt-5 text-base leading-8 text-gray-700"
          dangerouslySetInnerHTML={{ __html: section.content ?? '' }}
        />
      )

    case 'ul':
      return (
        <ul className="mt-5 space-y-3">
          {(section.items ?? []).map((item, i) => (
            <li key={i} className="flex gap-3 text-base leading-7 text-gray-700">
              <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-orange-500" />
              <span dangerouslySetInnerHTML={{ __html: item }} />
            </li>
          ))}
        </ul>
      )

    case 'ol':
      return (
        <ol className="mt-5 space-y-4">
          {(section.items ?? []).map((item, i) => (
            <li key={i} className="flex gap-4 text-base leading-7 text-gray-700">
              <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
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
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {(section.cards ?? []).map((card: CardItem, i) => (
            <div
              key={i}
              className="rounded-2xl border border-orange-100 bg-orange-50/50 p-6 transition-shadow hover:shadow-sm"
            >
              <div className="text-3xl">{card.icon}</div>
              <h3 style={serif} className="mt-3 text-base font-semibold text-gray-900">
                {card.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
      )

    case 'table':
      return (
        <div className="mt-6 overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-gray-900">
                {(section.headers ?? []).map((h, i) => (
                  <th
                    key={i}
                    className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-gray-300"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              {(section.rows ?? []).map((row, ri) => (
                <tr
                  key={ri}
                  className={`transition-colors hover:bg-orange-50/40 ${ri % 2 === 0 ? '' : 'bg-gray-50/50'}`}
                >
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className={`px-5 py-3.5 text-gray-700 ${ci === 0 ? 'font-semibold text-gray-900' : ''}`}
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
        <div className="mt-8 flex gap-4 rounded-2xl border border-orange-200 bg-orange-50 p-6">
          <div className="mt-0.5 flex-none text-xl">💡</div>
          <p
            className="text-base leading-7 text-gray-800"
            dangerouslySetInnerHTML={{ __html: section.content ?? '' }}
          />
        </div>
      )

    case 'cta':
      return (
        <div className="mt-14 overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 to-orange-600 px-8 py-10 text-center">
          <p style={serif} className="text-xl font-bold text-white sm:text-2xl">
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
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div style={sans}>
        {/* ── Article Header ─────────────────────────────────────────── */}
        <div className="border-b border-gray-100 bg-[#f5f2eb] pb-14 pt-10">
          <Container>
            <div className="mx-auto max-w-3xl">
              {/* Breadcrumb */}
              <nav
                className="mb-8 flex items-center gap-2 text-sm text-gray-500"
                aria-label="Breadcrumb"
              >
                <Link href="/" className="transition-colors hover:text-orange-600">
                  Home
                </Link>
                <span className="text-gray-300">/</span>
                <Link href="/blog" className="transition-colors hover:text-orange-600">
                  Blog
                </Link>
                <span className="text-gray-300">/</span>
                <span className="text-gray-700">{article.category}</span>
              </nav>

              {/* Category + meta */}
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <span
                  className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${getCategoryColorClass(article.categoryColor)}`}
                >
                  {article.category}
                </span>
                <span className="text-sm text-gray-400">{article.readMinutes} min read</span>
                <span className="text-gray-300">·</span>
                <time className="text-sm text-gray-500" dateTime={article.dateModified}>
                  Updated{' '}
                  {new Date(article.dateModified).toLocaleDateString('en-NG', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>

              {/* Title */}
              <h1
                style={serif}
                className="text-4xl font-bold leading-[1.15] tracking-tight text-gray-900 sm:text-5xl"
              >
                {article.headline}
              </h1>

              {/* Deck */}
              <p className="mt-5 text-xl leading-8 text-gray-600">{article.description}</p>
            </div>
          </Container>
        </div>

        {/* ── Article Body ─────────────────────────────────────────── */}
        <div className="bg-white py-12 sm:py-16">
          <Container>
            <article className="mx-auto max-w-3xl">
              {article.sections.map((section, i) => (
                <SectionRenderer key={i} section={section} />
              ))}
            </article>
          </Container>
        </div>

        {/* ── FAQ ──────────────────────────────────────────────────── */}
        {article.faqs.length > 0 && (
          <div className="border-t border-gray-100 bg-[#f5f2eb] py-14 sm:py-20">
            <Container>
              <div className="mx-auto max-w-3xl">
                <div className="mb-8 flex items-center gap-5">
                  <h2
                    style={serif}
                    id="faq-heading"
                    className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl"
                  >
                    Frequently Asked Questions
                  </h2>
                  <span className="h-px flex-1 bg-gray-200" />
                </div>

                <div className="space-y-4">
                  {article.faqs.map((faq, i) => (
                    <div
                      key={i}
                      className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
                    >
                      <h3
                        style={serif}
                        className="text-base font-semibold text-gray-900"
                      >
                        {faq.q}
                      </h3>
                      <p className="faq-answer mt-3 text-sm leading-7 text-gray-600">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Container>
          </div>
        )}

        {/* ── Related Articles ─────────────────────────────────────── */}
        {related.length > 0 && (
          <div className="border-t border-gray-100 bg-white py-14 sm:py-20">
            <Container>
              <div className="mx-auto max-w-3xl">
                <div className="mb-8 flex items-center gap-5">
                  <h2
                    style={serif}
                    className="text-xl font-bold tracking-tight text-gray-900"
                  >
                    Keep Reading
                  </h2>
                  <span className="h-px flex-1 bg-gray-200" />
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {related.map((rel) => (
                    <Link
                      key={rel.slug}
                      href={`/blog/${rel.slug}`}
                      className="group flex flex-col rounded-2xl border border-gray-100 bg-[#f5f2eb] p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                    >
                      <span
                        className={`mb-3 inline-flex w-fit items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getCategoryColorClass(rel.categoryColor)}`}
                      >
                        {rel.category}
                      </span>
                      <h3
                        style={serif}
                        className="flex-1 text-sm font-semibold leading-snug text-gray-900 transition-colors group-hover:text-orange-600"
                      >
                        {rel.headline}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-xs leading-5 text-gray-500">
                        {rel.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </Container>
          </div>
        )}

        {/* ── Bottom Nav ───────────────────────────────────────────── */}
        <div className="border-t border-gray-100 bg-[#f5f2eb] py-10">
          <Container>
            <div className="mx-auto flex max-w-3xl items-center justify-between">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 transition-colors hover:text-orange-700"
              >
                ← All guides
              </Link>
              <Link
                href="/vendors"
                className="inline-flex items-center gap-2 rounded-full bg-orange-600 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-orange-700"
              >
                Explore the marketplace →
              </Link>
            </div>
          </Container>
        </div>
      </div>
    </>
  )
}
