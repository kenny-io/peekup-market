import Image from 'next/image'
import Link from 'next/link'
import { type Metadata } from 'next'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export const metadata: Metadata = {
  title: 'Peekup Business - Corporate Logistics Platform for Enugu',
  description:
    'The operating system for corporate logistics in Enugu. Manage fleets, track digital waybills, corporate wallets, and automate payments for banks, law firms, pharmacies and retailers.',
  keywords: [
    'corporate logistics',
    'business delivery',
    'fleet management',
    'digital waybill',
    'proof of delivery',
    'Enugu business logistics',
    'corporate wallet',
  ],
  openGraph: {
    title: 'Peekup Business - Corporate Logistics Platform',
    description:
      'Stop using petty cash for deliveries. Manage fleets, track digital waybills, and automate payments with Peekup Business.',
    url: 'https://usepeekup.com/business',
    images: [{ url: '/seo/peekupseo.png', width: 1200, height: 630 }],
  },
  twitter: {
    title: 'Peekup Business - Corporate Logistics Platform',
    description: 'The operating system for corporate logistics. Manage fleets and automate payments.',
    images: ['/seo/peekupseo.png'],
  },
  alternates: {
    canonical: 'https://usepeekup.com/business',
  },
}

function CreditCardIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  )
}

function LayersIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
      <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
      <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
    </svg>
  )
}

function FileTextIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10 9H8" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
    </svg>
  )
}

function CheckCircleIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

function ArrowLeftIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  )
}

const features = [
  {
    name: 'Corporate Wallet',
    description: 'Preload any amount and allocate budget across departments. Eliminate petty cash requests and reimbursement forms forever.',
    icon: CreditCardIcon,
  },
  {
    name: 'Batch Requests',
    description: 'Upload a CSV and our system routes multiple riders instantly. Ideal for invites, statements, and bulk dispatches with predictable SLAs.',
    icon: LayersIcon,
  },
  {
    name: 'Digital Waybill (e-POD)',
    description: 'Capture signatures and photo evidence instantly. Download audit-ready PDFs for every trip to keep finance and compliance aligned.',
    icon: FileTextIcon,
  },
]

const benefits = [
  'Dedicated Account Manager',
  'Monthly Invoicing',
  'API Integration Available',
  'Priority Rider Allocation',
]

export default function BusinessPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-orange-600 pt-32 pb-20">
        <Container>
          <Link
            href="/"
            className="inline-flex items-center text-orange-100 mb-8 hover:text-white transition-colors"
          >
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 border border-orange-400 bg-orange-500/30 rounded-full px-4 py-1.5 mb-6">
              <CreditCardIcon className="w-4 h-4 text-white" />
              <span className="text-xs font-semibold tracking-wide uppercase text-white">
                Peekup Business
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              The Operating System for Corporate Logistics.
            </h1>
            <p className="text-xl text-orange-100 max-w-2xl leading-relaxed">
              Stop using petty cash for deliveries. We provide a dashboard for
              banks, law firms, and retailers to manage fleets, track digital
              waybills, and automate payments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button href="/waitlist" color="soft">
                Join Waitlist
              </Button>
              <Button
                href="/register"
                variant="outline"
                className="border-orange-300/40 text-white hover:bg-orange-500/20"
              >
                Book a Demo
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-20 sm:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg shadow-gray-200/60 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                  {feature.name}
                </h3>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* High-Volume Section */}
      <section className="py-20 sm:py-24 bg-gray-50">
        <Container>
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Built for High-Volume Operations
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Whether you are a bank transferring sensitive documents between
                branches or a pharmacy restocking inventory, Peekup Business
                ensures security, speed, and accountability.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-center text-gray-700 font-medium"
                  >
                    <CheckCircleIcon className="w-5 h-5 text-orange-600 mr-3 flex-none" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button href="/register" color="primary">
                  Talk to Sales
                </Button>
              </div>
            </div>
            <div className="flex-1 w-full">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                <Image
                  src="/images/peekup-business.png"
                  alt="Peekup Business Dashboard - Corporate logistics management platform"
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
      <section className="py-20 sm:py-24 bg-gray-900">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to streamline your logistics?
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Join the waitlist or schedule a demo to see how Peekup Business
              can transform your delivery operations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/waitlist" color="primary">
                Join the Waitlist
              </Button>
              <Button href="/register" color="soft">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
