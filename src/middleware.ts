import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Silently handle socket.io polling requests to stop log noise
  if (request.nextUrl.pathname.startsWith('/socket.io')) {
    return new NextResponse(null, { status: 200 })
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/socket.io/:path*'],
}
