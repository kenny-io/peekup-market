import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logomark } from '@/components/Logo'
import { NewsletterForm } from '@/components/NewsletterForm'

const footerLinks = {
  Product: [
    { label: 'Features', href: '/#features' },
    { label: 'Services', href: '/#services' },
    { label: 'Download', href: '/waitlist' },
    { label: 'FAQs', href: '/#faqs' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Business', href: '/business' },
    { label: 'Vendors', href: '/vendors' },
    { label: 'Support', href: '/support' },
  ],
  Programs: [
    { label: 'Peekup Go', href: '/go' },
    { label: 'Ambassadors', href: '/ambassadors' },
  ],
  Legal: [
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Sitemap', href: '/sitemap.xml' },
  ],
}

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
        <div className="flex flex-col gap-y-12 pt-16 pb-6 lg:flex-row lg:justify-between lg:pb-8">
          <div className="max-w-sm">
            <div className="flex items-center text-gray-900">
              <Logomark className="flex-none" />
              <div className="ml-4">
                <p className="mt-1 text-sm text-gray-600">
                  Shop Enugu in one app.
                </p>
              </div>
            </div>
            <div className="group relative mt-8 -mx-4 flex items-center self-stretch rounded-2xl border border-gray-200 bg-white p-4 transition-colors hover:border-orange-200 sm:self-auto lg:mx-0 lg:self-auto lg:p-6">
              <div className="relative flex h-24 w-24 flex-none items-center justify-center">
                <QrCodeBorder className="absolute inset-0 h-full w-full stroke-gray-300 transition-colors group-hover:stroke-orange-600" />
                <Image
                  src="/images/peekupqr.png"
                  alt="Scan to download Peekup"
                  width={64}
                  height={64}
                  unoptimized
                />
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

          <nav className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:gap-12">
            {Object.entries(footerLinks).map(([group, links]) => (
              <div key={group}>
                <h3 className="text-sm font-semibold text-gray-900">
                  {group}
                </h3>
                <ul className="mt-4 space-y-3">
                  {links.map(({ label, href }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className="text-sm text-gray-600 transition-colors hover:text-orange-600"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="flex flex-col items-center border-t border-gray-200 pt-8 pb-12 md:flex-row-reverse md:justify-between md:pt-6">
          <NewsletterForm />
          <p className="mt-6 text-sm text-gray-500 md:mt-0">
            &copy; Copyright {new Date().getFullYear()} Peekup. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
