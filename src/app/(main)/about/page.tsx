import Link from 'next/link'
import { type Metadata } from 'next'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export const metadata: Metadata = {
  title: 'About Peekup - Local Delivery & Logistics in Enugu',
  description:
    'Peekup connects customers with 220+ local businesses in Enugu for fast delivery of food, groceries, pharmacy items, and more. Learn about our mission, story, and how to reach us.',
  openGraph: {
    title: 'About Peekup - Local Delivery & Logistics in Enugu',
    description:
      'Learn about Peekup, the app connecting Enugu to its favourite local businesses with fast, reliable delivery.',
    url: 'https://usepeekup.com/about',
    images: [{ url: '/seo/peekupseo.png', width: 1200, height: 630 }],
  },
  twitter: {
    title: 'About Peekup - Local Delivery & Logistics in Enugu',
    description:
      'Learn about Peekup, the app connecting Enugu to its favourite local businesses with fast, reliable delivery.',
    images: ['/seo/peekupseo.png'],
  },
  alternates: {
    canonical: 'https://usepeekup.com/about',
  },
}

/* ─── Icons ─── */

function ArrowLeftIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  )
}

function MapPinIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function PhoneIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function TruckIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18H9" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </svg>
  )
}

function StoreIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
      <path d="M2 7h20" />
      <path d="M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7" />
    </svg>
  )
}

function ShoppingBagIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  )
}

function UsersIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 21a8 8 0 0 0-16 0" />
      <circle cx="10" cy="8" r="5" />
      <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" />
    </svg>
  )
}

/* ─── Data ─── */

const activities = [
  {
    name: 'On-Demand Delivery',
    description:
      'Fast, reliable delivery of food, groceries, pharmacy items, and everyday essentials from local businesses across Enugu directly to your door.',
    icon: TruckIcon,
    accent: 'from-orange-500 to-orange-600',
  },
  {
    name: 'Local Marketplace',
    description:
      '220+ vendors — restaurants, supermarkets, pharmacies, and specialty shops — in one easy-to-browse marketplace.',
    icon: StoreIcon,
    accent: 'from-gray-800 to-gray-900',
  },
  {
    name: 'E-Commerce for Vendors',
    description:
      'Digital storefronts with inventory management, real-time order tracking, and access to thousands of customers. No technical setup required.',
    icon: ShoppingBagIcon,
    accent: 'from-orange-600 to-orange-700',
  },
  {
    name: 'Rider Network',
    description:
      'A growing fleet of trained riders with live tracking, so customers always know exactly where their order is.',
    icon: UsersIcon,
    accent: 'from-gray-700 to-gray-800',
  },
]

const contactChannels = [
  {
    icon: PhoneIcon,
    label: 'Phone',
    value: '08038927241',
    href: 'tel:08038927241',
  },
  {
    icon: MailIcon,
    label: 'Email',
    value: 'operations@usepeekup.com',
    href: 'mailto:operations@usepeekup.com',
  },
  {
    icon: MapPinIcon,
    label: 'Address',
    value: '450 Ogui Road, Enugu',
    href: undefined,
  },
]

/* ─── Page ─── */

export default function AboutPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden bg-gray-900 pt-32 pb-24 sm:pb-32">
        {/* Subtle diagonal texture */}
        <svg aria-hidden className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.03]">
          <defs>
            <pattern id="about-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40L40 0M-10 10L10 -10M30 50L50 30" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#about-grid)" />
        </svg>

        {/* Radial glow */}
        <div aria-hidden className="pointer-events-none absolute top-0 left-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/4 rounded-full bg-orange-600/[0.06] blur-[120px]" />

        <Container className="relative">
          <Link
            href="/"
            className="group mb-12 inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-white"
          >
            <ArrowLeftIcon className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            Home
          </Link>

          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Shop Enugu
              <br />
              <span className="text-orange-400">in one app.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-gray-400">
              Peekup is a local delivery and commerce platform built for
              Enugu. We connect customers with their favourite neighbourhood
              businesses and deliver everyday essentials — fast, reliable, and
              affordable.
            </p>
          </div>
        </Container>
      </section>

      {/* ─── Mission — editorial pull-quote ─── */}
      <section className="py-24 sm:py-32">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">
              Our mission
            </p>
            <blockquote className="mt-6 border-l-2 border-orange-400 pl-8">
              <p className="text-2xl font-medium leading-relaxed tracking-tight text-gray-900 sm:text-3xl">
                Every business in Enugu — from the roadside pharmacy to the
                neighbourhood supermarket — deserves the same digital reach as
                the biggest brands.
              </p>
            </blockquote>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-gray-600">
              Peekup exists to make local commerce seamless by removing the
              friction between customers who need things and businesses that
              sell them. We handle technology, logistics, and rider
              operations so that vendors can focus on what they do best.
            </p>
          </div>
        </Container>
      </section>

      {/* ─── What We Do ─── */}
      <section className="border-t border-gray-200 bg-gray-50 py-24 sm:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-5">
            {/* Left — sticky heading */}
            <div className="lg:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">
                What we do
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Moving goods from local businesses to customers.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Everything we build is focused on speed, reliability, and giving
                Enugu vendors access to a wider audience.
              </p>
            </div>

            {/* Right — cards */}
            <div className="space-y-4 lg:col-span-3">
              {activities.map((activity) => (
                <div
                  key={activity.name}
                  className="group relative overflow-hidden rounded-2xl border border-gray-200/80 bg-white p-8 transition-all hover:border-orange-200 hover:shadow-lg hover:shadow-orange-600/5"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                  <div className="flex items-start gap-5">
                    <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${activity.accent} text-white`}>
                      <activity.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {activity.name}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-gray-600">
                        {activity.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ─── Contact ─── */}
      <section className="py-24 sm:py-32">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">
              Get in touch
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Questions? We&apos;d love to hear from you.
            </h2>
          </div>

          <div className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
            {contactChannels.map((channel) => {
              const Wrapper = channel.href ? 'a' : 'div'
              const wrapperProps = channel.href
                ? { href: channel.href }
                : {}

              return (
                <Wrapper
                  key={channel.label}
                  {...wrapperProps}
                  className="group flex flex-col items-center rounded-2xl border border-gray-200/80 bg-white p-8 text-center transition-all hover:border-orange-200 hover:shadow-lg hover:shadow-orange-600/5"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-600 ring-1 ring-orange-100 transition-colors group-hover:bg-orange-100">
                    <channel.icon className="h-5 w-5" />
                  </div>
                  <p className="mt-4 text-[11px] font-semibold uppercase tracking-widest text-gray-400">
                    {channel.label}
                  </p>
                  <p className="mt-2 text-sm font-medium text-gray-900">
                    {channel.value}
                  </p>
                </Wrapper>
              )
            })}
          </div>
        </Container>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative overflow-hidden bg-gray-900 py-24 sm:py-28">
        <div aria-hidden className="pointer-events-none absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-orange-600/[0.07] blur-[120px]" />
        <div aria-hidden className="pointer-events-none absolute -bottom-40 -left-20 h-[500px] w-[500px] rounded-full bg-orange-500/[0.04] blur-[100px]" />

        <Container className="relative">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to shop local?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-400">
              Download Peekup and get your first delivery from one of 220+
              Enugu businesses.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Button href="/waitlist" color="primary">
                Download the app
              </Button>
              <Button
                href="/vendors"
                variant="outline"
                color="transparent"
                className="border-white/20 text-white hover:bg-white/5"
              >
                Become a vendor
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
