import { type Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Peekup Go - Instant P2P Delivery in Enugu',
  description:
    'Send packages from New Haven to Emene instantly. Simple distance-based pricing, live map tracking, and insured deliveries up to ₦50,000. Book a rider in 3 taps.',
  keywords: [
    'P2P delivery',
    'package delivery Enugu',
    'instant delivery',
    'same day courier',
    'bike delivery',
    'send package Nigeria',
    'live tracking delivery',
  ],
  openGraph: {
    title: 'Peekup Go - Instant P2P Delivery in Enugu',
    description:
      'Send packages across Enugu with real-time tracking, transparent pricing, and insured deliveries.',
    url: 'https://peekup.ng/go',
    images: [{ url: '/seo/peekupseo.png', width: 1200, height: 630 }],
  },
  twitter: {
    title: 'Peekup Go - Instant P2P Delivery',
    description: 'Send packages across Enugu with live tracking and simple pricing.',
    images: ['/seo/peekupseo.png'],
  },
  alternates: {
    canonical: 'https://peekup.ng/go',
  },
}

function ArrowLeftIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
    </svg>
  )
}

function SmartphoneIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  )
}

function MapPinIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function ActivityIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  )
}

function ShieldIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}

function KeyIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <circle cx="7.5" cy="15.5" r="5.5" />
      <path d="m21 2-9.6 9.6M15.5 7.5l3 3L22 7l-3-3" />
    </svg>
  )
}

function ShoppingBagIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  )
}

function PackageIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  )
}

function CheckIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
        fill="currentColor"
      />
      <circle
        cx="12"
        cy="12"
        r="8.25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function GoLogomark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className}>
      <rect width="40" height="40" rx="8" fill="#059669" />
      <path
        d="M20 10L12 14v8l8 4 8-4v-8l-8-4z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 14l8 4 8-4M20 22v6" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

interface FeatureCardProps {
  icon: React.ComponentType<React.ComponentPropsWithoutRef<'svg'>>
  title: string
  description: string
}

function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100">
        <Icon className="h-8 w-8 text-emerald-700" />
      </div>
      <h3 className="mt-6 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-base leading-relaxed text-gray-700">{description}</p>
    </div>
  )
}

interface PackageSizeOption {
  name: string
  tagline: string
  description: string
  icon: React.ComponentType<React.ComponentPropsWithoutRef<'svg'>>
  items: string[]
  featured?: boolean
}

const packageSizes: PackageSizeOption[] = [
  {
    name: 'Small',
    tagline: 'Envelope size',
    description: 'Perfect for items that fit in your pocket or a standard envelope.',
    icon: KeyIcon,
    items: ['Keys & Wallets', 'Documents & Letters', 'Phone Chargers', 'Small Electronics'],
  },
  {
    name: 'Medium',
    tagline: 'Backpack size',
    description: 'Items that fit in a backpack or small box. Our most popular option.',
    icon: ShoppingBagIcon,
    items: ['Laptops & Tablets', 'Shoeboxes', 'Small Gifts', 'Books & Magazines'],
    featured: true,
  },
  {
    name: 'Large',
    tagline: 'Bike-friendly',
    description: 'Larger items that can be secured on a bike seat or footrest.',
    icon: PackageIcon,
    items: ['Multiple Shopping Bags', 'Small Cartons', 'Gym Bags', 'Bulk Documents'],
  },
]

function PackageSizeCard({
  name,
  tagline,
  description,
  icon: Icon,
  items,
  featured = false,
}: PackageSizeOption) {
  return (
    <section
      className={clsx(
        'flex flex-col overflow-hidden rounded-3xl p-6 shadow-lg shadow-gray-900/5',
        featured ? 'order-first bg-emerald-700 lg:order-none' : 'bg-white',
      )}
    >
      <h3
        className={clsx(
          'flex items-center text-sm font-semibold',
          featured ? 'text-white' : 'text-gray-900',
        )}
      >
        <GoLogomark className="h-6 w-6 flex-none" />
        <span className="ml-4">{name}</span>
      </h3>
      <p
        className={clsx(
          'mt-5 text-3xl font-semibold tracking-tight',
          featured ? 'text-white' : 'text-gray-900',
        )}
      >
        {tagline}
      </p>
      <p
        className={clsx(
          'mt-3 text-sm leading-relaxed',
          featured ? 'text-emerald-100' : 'text-gray-700',
        )}
      >
        {description}
      </p>
      <div className="order-last mt-6">
        <ul
          role="list"
          className={clsx(
            '-my-2 divide-y text-sm',
            featured
              ? 'divide-emerald-600 text-emerald-100'
              : 'divide-gray-200 text-gray-700',
          )}
        >
          {items.map((item) => (
            <li key={item} className="flex py-2">
              <CheckIcon
                className={clsx(
                  'h-6 w-6 flex-none',
                  featured ? 'text-white' : 'text-emerald-600',
                )}
              />
              <span className="ml-4">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <Button
        href="/waitlist"
        color={featured ? 'soft' : 'navy'}
        className="mt-6"
        aria-label={`Send ${name} package`}
      >
        Send {name} Package
      </Button>
    </section>
  )
}

export default function GoPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-emerald-700 px-4 pb-20 pt-32 text-white">
        <Container>
          <Link
            href="/"
            className="mb-8 inline-flex items-center font-medium text-emerald-200 transition-colors hover:text-white"
          >
            <ArrowLeftIcon className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center space-x-2 rounded-full border border-emerald-500 bg-emerald-600/50 px-4 py-1.5">
              <SmartphoneIcon className="h-4 w-4" />
              <span className="font-mono text-xs font-semibold uppercase tracking-wide">Peekup Go</span>
            </div>
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Instant P2P Delivery for Everyone.
            </h1>
            <p className="max-w-2xl text-xl font-medium leading-relaxed text-emerald-100">
              Send a package from New Haven to Emene instantly. Simple pricing based on distance,
              with a live map to track your rider every second of the way.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="/waitlist" className="hover:bg-emerald-600/20 text-emerald-700 bg-emerald-50">
                Get Started
              </Button>
              <Button
                href="#sizes"
                variant="outline"
                color="transparent"
                className="border-emerald-400 text-white hover:bg-emerald-600/20"
              >
                See Package Sizes
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="bg-white px-4 py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why choose Peekup Go?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-700">
              Fast, transparent, and secure delivery across Enugu.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3">
            <FeatureCard
              icon={MapPinIcon}
              title="Live Map Tracking"
              description="Watch your rider move in real-time on our map. Share the tracking link with the recipient so they know exactly when to step out."
            />
            <FeatureCard
              icon={ActivityIcon}
              title="Simple Pricing"
              description="Transparent pricing model: Base Fare + Per Kilometer charge. No hidden fees, no surge pricing surprises."
            />
            <FeatureCard
              icon={ShieldIcon}
              title="Insured Deliveries"
              description="Sending something valuable? Every Peekup Go trip is insured against loss or damage up to ₦50,000."
            />
          </div>
        </Container>
      </section>

      {/* Package Sizes Section */}
      <section
        id="sizes"
        className="scroll-mt-20 border-t border-gray-200 bg-gray-100 px-4 py-20 sm:py-28"
      >
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What can you send?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-700">
              If it fits on a bike, we can move it. Choose the right size for your item.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-10 sm:mt-20 lg:max-w-none lg:grid-cols-3">
            {packageSizes.map((size) => (
              <PackageSizeCard key={size.name} {...size} />
            ))}
          </div>
        </Container>
      </section>

      {/* Download Section */}
      <section className="bg-white px-4 py-20 sm:py-28">
        <Container>
          <div className="flex flex-col items-center gap-16 md:flex-row">
            <div className="flex-1">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Download the App
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                Get Peekup Go on iOS and Android. Book a rider in 3 taps, pay via card or transfer,
                and get moving.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button href="/waitlist" color="navy">
                  App Store
                </Button>
                <Button href="/waitlist" color="navy">
                  Google Play
                </Button>
              </div>
            </div>
            <div className="flex-1">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-gray-200 shadow-2xl">
                <Image
                  src="/images/peekup-go.png"
                  alt="Peekup Go - Instant P2P delivery app with live tracking"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-emerald-700 px-4 py-20 text-white sm:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to send something?
            </h2>
            <p className="mt-4 text-lg font-medium leading-relaxed text-emerald-100">
              Join thousands of Enugu residents using Peekup Go for fast, reliable P2P deliveries.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                href="/waitlist"
                className="bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
              >
                Join the Waitlist
              </Button>
              <Button
                href="/"
                variant="outline"
                color="transparent"
                className="border-emerald-400 text-white hover:bg-emerald-600/20"
              >
                Back to Home
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
