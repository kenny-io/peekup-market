import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logomark } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'
import { NewsletterForm } from '@/components/NewsletterForm'

function QrCodeBorder(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 96 96" fill="none" aria-hidden="true" {...props}>
      <path
        d="M1 17V9a8 8 0 0 1 8-8h8M95 17V9a8 8 0 0 0-8-8h-8M1 79v8a8 8 0 0 0 8 8h8M95 79v8a8 8 0 0 1-8 8h-8"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <Container>
        <div className="flex flex-col items-start justify-between gap-y-12 pt-16 pb-6 lg:flex-row lg:items-center lg:py-16">
          <div>
            <div className="flex items-center text-gray-900">
              <Logomark className="flex-none"  />
              <div className="ml-4">
                <p className="mt-1 text-sm text-gray-600">Shop Enugu in one app.</p>
              </div>
            </div>
            <nav className="mt-11 flex gap-8">
              <NavLinks />
            </nav>
          </div>
          <div className="group relative -mx-4 flex items-center self-stretch rounded-2xl border border-gray-200 bg-white p-4 transition-colors hover:border-orange-200 sm:self-auto lg:mx-0 lg:self-auto lg:p-6">
            <div className="relative flex h-24 w-24 flex-none items-center justify-center">
              <QrCodeBorder className="absolute inset-0 h-full w-full stroke-gray-300 transition-colors group-hover:stroke-orange-600" />
              <Image src="/images/peekupqr.png" alt="Scan to download Peekup" width={64} height={64} unoptimized />
            </div>
            <div className="ml-8 lg:w-64">
              <p className="text-base font-semibold text-gray-900">
                <Link href="/waitlist">
                  <span className="absolute inset-0 sm:rounded-2xl" />
                  Download the app
                </Link>
              </p>
              <p className="mt-1 text-sm text-gray-700">
                Scan to download Peekup or join the iOS access list.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center border-t border-gray-200 pt-8 pb-12 md:flex-row-reverse md:justify-between md:pt-6">
          <NewsletterForm />
          <div className="mt-6 flex flex-col items-center gap-4 md:mt-0 md:flex-row md:gap-6">
            <p className="text-sm text-gray-500">
              &copy; Copyright {new Date().getFullYear()}. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm">
              <Link href="/terms" className="text-gray-500 hover:text-orange-600">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-gray-500 hover:text-orange-600">
                Privacy Policy
              </Link>
              <Link href="/sitemap.xml" className="text-gray-500 hover:text-orange-600">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
