import { NextResponse } from 'next/server'
import { getAllSlugs } from '@/lib/blog-articles'

const SITE_URL = 'https://usepeekup.com'
const HOST = 'usepeekup.com'
const INDEXNOW_KEY = process.env.INDEXNOW_KEY ?? ''

const STATIC_PATHS = [
  '/',
  '/about',
  '/blog',
  '/business',
  '/vendors',
  '/waitlist',
  '/go',
  '/ambassadors',
  '/support',
  '/privacy',
  '/terms',
]

function getAllUrls(): string[] {
  const blogSlugs = getAllSlugs()
  const blogUrls = blogSlugs.map((s) => `${SITE_URL}/blog/${s}`)
  const staticUrls = STATIC_PATHS.map((p) => `${SITE_URL}${p}`)
  return [...staticUrls, ...blogUrls]
}

// Submitting to one endpoint shares across all IndexNow participants.
// We submit to Bing directly (fastest) and the global endpoint as fallback.
const ENDPOINTS = [
  'https://www.bing.com/indexnow',
  'https://api.indexnow.org/indexnow',
]

/**
 * POST /api/indexnow
 * Bulk-submit all site URLs via IndexNow protocol.
 * First submission may return 202 (key verification pending); subsequent return 200.
 */
export async function POST() {
  if (!INDEXNOW_KEY) {
    return NextResponse.json(
      { error: 'INDEXNOW_KEY not configured — add it to .env.local' },
      { status: 500 },
    )
  }

  const urls = getAllUrls()

  const payload = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
    urlList: urls,
  }

  const results: Record<string, { status: number; statusText: string }> = {}

  for (const endpoint of ENDPOINTS) {
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify(payload),
      })
      results[endpoint] = { status: res.status, statusText: res.statusText }

      // 200 or 202 means accepted — no need to try other endpoints
      if (res.status === 200 || res.status === 202) break
    } catch {
      results[endpoint] = { status: 0, statusText: 'fetch failed' }
    }
  }

  return NextResponse.json({
    submitted: urls.length,
    urls,
    keyFileUrl: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
    results,
  })
}

/**
 * GET /api/indexnow — preview what would be submitted (no side effects)
 */
export async function GET() {
  const urls = getAllUrls()
  return NextResponse.json({
    keyConfigured: !!INDEXNOW_KEY,
    keyFileUrl: INDEXNOW_KEY ? `${SITE_URL}/${INDEXNOW_KEY}.txt` : null,
    count: urls.length,
    urls,
  })
}
