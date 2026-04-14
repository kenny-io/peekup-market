import { NextResponse } from 'next/server'

/**
 * POST /api/ping-search-engines
 *
 * Google and Bing both deprecated their /ping sitemap endpoints.
 * Google: removed 2023. Bing: replaced by IndexNow.
 *
 * Use POST /api/indexnow instead — it submits directly to Bing/IndexNow
 * and the submission is shared across all IndexNow partners.
 */
export async function POST() {
  return NextResponse.json({
    message:
      'Google and Bing sitemap ping endpoints are deprecated. Use POST /api/indexnow instead.',
    indexnow: '/api/indexnow',
  })
}
