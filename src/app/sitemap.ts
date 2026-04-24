import { type MetadataRoute } from 'next'
import { getAllArticleMeta } from '@/lib/blog-articles'

const siteUrl = 'https://usepeekup.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllArticleMeta()

  const latestBlogDate = articles.reduce((latest, a) => {
    const d = new Date(a.dateModified)
    return d > latest ? d : latest
  }, new Date('2025-01-01'))

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: '2026-04-14',
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: '2026-04-14',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/business`,
      lastModified: '2026-04-14',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/vendors`,
      lastModified: '2026-04-14',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/waitlist`,
      lastModified: '2026-04-14',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: latestBlogDate.toISOString(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/go`,
      lastModified: '2026-04-14',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/ambassadors`,
      lastModified: '2026-04-14',
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${siteUrl}/support`,
      lastModified: '2026-04-17',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/privacy`,
      lastModified: '2026-03-01',
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${siteUrl}/terms`,
      lastModified: '2026-03-01',
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  const blogRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${siteUrl}/blog/${article.slug}`,
    lastModified: new Date(article.dateModified).toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticRoutes, ...blogRoutes]
}
