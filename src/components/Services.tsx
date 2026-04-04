import clsx from 'clsx'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logomark } from '@/components/Logo'

interface ServiceOption {
  name: string
  featured: boolean
  tagline: string
  description: string
  button: { label: string; href: string }
  features: Array<string>
  logoVariant?: 'dark' | 'light'
  comingSoon?: boolean
  learnMoreHref?: string
}

const services: Array<ServiceOption> = [
  {
    name: 'Marketplace',
    featured: true,
    tagline: 'Shop & deliver',
    description:
      'Browse Enugu vendors, add items to your cart, and let Peekup riders buy and deliver to your door. Pay upfront at checkout.',
    button: {
      label: 'Download Peekup',
      href: '/waitlist',
    },
    features: [
      'One cart per vendor',
      'Rider-powered shopping & delivery',
      'Real-time order tracking',
      'Proof of delivery on request',
    ],
    logoVariant: 'light',
  },
  {
    name: 'Business',
    featured: false,
    comingSoon: true,
    tagline: 'For teams',
    description:
      'Centralized delivery ops for offices, teams, and companies that need recurring routes and spending controls.',
    button: {
      label: 'Get launch updates',
      href: '/waitlist',
    },
    features: [
      'Corporate wallet & spending rules',
      'Recurring pickup routes',
      'Dedicated launch support',
      'Invoice + receipts for finance',
    ],
    logoVariant: 'dark',
    learnMoreHref: '/business',
  },
  {
    name: 'Peekup Go',
    featured: false,
    comingSoon: true,
    tagline: 'P2P delivery',
    description:
      'Send packages across Enugu instantly. Simple distance-based pricing with live map tracking and insured deliveries.',
    button: {
      label: 'Get launch updates',
      href: '/waitlist',
    },
    features: [
      'Live map tracking',
      'Transparent per-km pricing',
      'Insured up to ₦50,000',
      'Book a rider in 3 taps',
    ],
    logoVariant: 'dark',
    learnMoreHref: '/go',
  },
]

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

function ServiceCard({
  name,
  tagline,
  description,
  button,
  features,
  logoVariant = 'dark',
  featured = false,
  comingSoon = false,
  learnMoreHref,
}: ServiceOption) {
  return (
    <section
      className={clsx(
        'relative flex flex-col overflow-hidden rounded-3xl p-6 shadow-lg shadow-gray-900/5',
        featured ? 'order-first bg-gray-900 lg:order-0' : 'bg-white',
        comingSoon && 'ring-1 ring-gray-200/80 shadow-none',
      )}
    >
      {/* Frosted overlay for coming-soon cards */}
      {comingSoon && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10 rounded-3xl bg-gradient-to-b from-white/40 via-transparent to-white/60"
        />
      )}

      <h3
        className={clsx(
          'flex items-center text-sm font-semibold',
          featured ? 'text-white' : 'text-gray-900',
        )}
      >
        <Logomark
          variant={logoVariant}
          className={clsx('h-6 w-6 flex-none', comingSoon && 'opacity-50')}
        />
        <span className="ml-4 flex flex-wrap items-center gap-2.5">
          {name}
          {comingSoon && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-200 bg-orange-50 px-2 py-0.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-orange-500" />
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-orange-700">
                Soon
              </span>
            </span>
          )}
        </span>
      </h3>
      <p
        className={clsx(
          'mt-5 text-3xl font-semibold tracking-tight',
          featured ? 'text-white' : 'text-gray-900',
          comingSoon && 'text-gray-400',
        )}
      >
        {tagline}
      </p>
      <p
        className={clsx(
          'mt-3 text-sm',
          featured ? 'text-gray-300' : 'text-gray-700',
          comingSoon && 'text-gray-500',
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
              ? 'divide-gray-800 text-gray-300'
              : comingSoon
                ? 'divide-gray-100 text-gray-400'
                : 'divide-gray-200 text-gray-700',
          )}
        >
          {features.map((feature) => (
            <li key={feature} className="flex py-2">
              <CheckIcon
                className={clsx(
                  'h-6 w-6 flex-none',
                  featured ? 'text-white' : comingSoon ? 'text-gray-300' : 'text-orange-600',
                )}
              />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <Button
        href={button.href}
        color={featured ? 'primary' : comingSoon ? 'soft' : 'navy'}
        className={clsx('relative z-20 mt-6', comingSoon && 'opacity-80')}
        aria-label={`${button.label} for ${name}`}
      >
        {button.label}
      </Button>
      {comingSoon && learnMoreHref && (
        <Link
          href={learnMoreHref}
          className="relative z-20 mt-3 block text-center text-xs font-medium text-orange-600 transition-colors hover:text-orange-700"
        >
          Learn more about {name} &rarr;
        </Link>
      )}
    </section>
  )
}

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="border-t border-gray-200 bg-gray-100 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="services-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            What we offer
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Peekup is free to use. Order from any vendor, pay upfront at checkout.
            Team logistics and P2P delivery are coming soon after launch.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-10 sm:mt-20 lg:max-w-none lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.name} {...service} />
          ))}
        </div>
      </Container>
    </section>
  )
}
