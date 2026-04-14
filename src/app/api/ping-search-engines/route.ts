import { NextResponse } from 'next/server'

const SITEMAP_URL = 'https://usepeekup.com/sitemap.xml'

const PING_ENDPOINTS = [
  `https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`,
  `https://www.bing.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`,
]

/**
 * POST /api/ping-search-engines
 * Pings Google and Bing to re-read the sitemap. Call after every deploy.
 */
export async function POST() {
  const results: Record<string, number> = {}

  for (const url of PING_ENDPOINTS) {
    try {
      const res = await fetch(url)
      results[url] = res.status
    } catch {
      results[url] = 0
    }
  }

  return NextResponse.json({ pinged: SITEMAP_URL, results })
}
