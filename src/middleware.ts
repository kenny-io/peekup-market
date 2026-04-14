import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const SITEMAP_URL = 'https://usepeekup.com/sitemap.xml'
const INDEXNOW_KEY = process.env.INDEXNOW_KEY ?? ''

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/socket.io')) {
    return new NextResponse(null, { status: 200 })
  }

  if (
    INDEXNOW_KEY &&
    request.nextUrl.pathname === `/${INDEXNOW_KEY}.txt`
  ) {
    return new NextResponse(INDEXNOW_KEY, {
      headers: { 'Content-Type': 'text/plain' },
    })
  }

  const response = NextResponse.next()

  response.headers.set('Link', `<${SITEMAP_URL}>; rel="sitemap"`)
  response.headers.set(
    'X-Robots-Tag',
    'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  )

  return response
}

export const config = {
  matcher: [
    '/socket.io/:path*',
    '/((?!api|_next/static|_next/image|favicon).*)',
  ],
}
