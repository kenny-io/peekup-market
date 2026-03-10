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
    url: 'https://peekup.ng/about',
    images: [{ url: '/seo/peekupseo.png', width: 1200, height: 630 }],
  },
  twitter: {
    title: 'About Peekup - Local Delivery & Logistics in Enugu',
    description:
      'Learn about Peekup, the app connecting Enugu to its favourite local businesses with fast, reliable delivery.',
    images: ['/seo/peekupseo.png'],
  },
  alternates: {
    canonical: 'https://peekup.ng/about',
  },
}

function ArrowLeftIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  )
}

function MapPinIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function PhoneIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function ShoppingBagIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  )
}

function TruckIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
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
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
      <path d="M2 7h20" />
      <path d="M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7" />
    </svg>
  )
}

function UsersIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 21a8 8 0 0 0-16 0" />
      <circle cx="10" cy="8" r="5" />
      <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" />
    </svg>
  )
}

const activities = [
  {
    name: 'On-Demand Delivery',
    description:
      'We power fast, reliable delivery of food, groceries, pharmacy items, and everyday essentials from local businesses across Enugu directly to your door.',
    icon: TruckIcon,
  },
  {
    name: 'Local Marketplace',
    description:
      'Our platform aggregates 220+ vendors, including restaurants, supermarkets, pharmacies, and specialty shops, into one easy-to-browse marketplace that makes it effortless to discover and shop locally.',
    icon: StoreIcon,
  },
  {
    name: 'E-Commerce for Vendors',
    description:
      'We give Enugu businesses a digital storefront with inventory management, real-time order tracking, and access to thousands of customers. No technical setup required.',
    icon: ShoppingBagIcon,
  },
  {
    name: 'Rider Network & Logistics',
    description:
      'Our growing fleet of trained riders ensures fast pick-up and delivery, with live tracking so customers always know exactly where their order is.',
    icon: UsersIcon,
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-900 pt-32 pb-20">
        <Container>
          <Link
            href="/"
            className="mb-8 inline-flex items-center text-gray-400 transition-colors hover:text-white"
          >
            <ArrowLeftIcon className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Shop Enugu in One App.
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-gray-300">
              Peekup is a local delivery and commerce platform built for Enugu.
              We connect customers with their favourite neighbourhood businesses
              and deliver everyday essentials. Fast, reliable, and affordable.
            </p>
          </div>
        </Container>
      </section>

      {/* Mission */}
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Mission
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              We believe every business in Enugu, from the roadside pharmacy to
              the neighbourhood supermarket, deserves the same digital reach as
              the biggest brands. Peekup exists to make local commerce seamless
              by removing the friction between customers who need things and
              businesses that sell them.
            </p>
          </div>
        </Container>
      </section>

      {/* What We Do */}
      <section className="bg-gray-50 py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What We Do
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Everything we build is focused on moving goods from local
              businesses to customers quickly and reliably.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {activities.map((activity) => (
              <div
                key={activity.name}
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg shadow-gray-200/60 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                  <activity.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                  {activity.name}
                </h3>
                <p className="mt-3 leading-relaxed text-gray-600">
                  {activity.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact */}
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Get in Touch
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Have a question, partnership enquiry, or just want to say hello?
              Reach out through any of the channels below.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-8 sm:grid-cols-3">
            <a
              href="tel:07033950328"
              className="group flex flex-col items-center rounded-2xl border border-gray-200 bg-white p-8 text-center transition-all duration-200 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-600 transition-colors group-hover:bg-orange-100">
                <PhoneIcon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
                Phone
              </h3>
              <p className="mt-2 font-medium text-gray-900">08038927241</p>
            </a>

            <a
              href="mailto:operations@usepeekup.com"
              className="group flex flex-col items-center rounded-2xl border border-gray-200 bg-white p-8 text-center transition-all duration-200 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-600 transition-colors group-hover:bg-orange-100">
                <MailIcon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
                Email
              </h3>
              <p className="mt-2 font-medium text-gray-900">
                operations@usepeekup.com
              </p>
            </a>

            <div className="flex flex-col items-center rounded-2xl border border-gray-200 bg-white p-8 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                <MapPinIcon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
                Address
              </h3>
              <p className="mt-2 font-medium text-gray-900">
                450 Ogui Road, Enugu
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-orange-600 py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to shop local?
            </h2>
            <p className="mt-4 text-lg text-orange-100">
              Download Peekup and get your first delivery from one of 220+ Enugu
              businesses.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/waitlist" color="soft">
                Download the App
              </Button>
              <Button
                href="/vendors"
                variant="outline"
                className="border-orange-300/40 text-white hover:bg-orange-500/20"
              >
                Become a Vendor
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
