'use client'

import { useState, useId } from 'react'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { TextField, SelectField } from '@/components/Fields'

/* ─── Icons ─── */

function CheckIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  )
}

function StoreIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}

function UsersIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87" />
      <path d="M16 3.13a4 4 0 010 7.75" />
    </svg>
  )
}

function TruckIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <rect x="1" y="3" width="15" height="13" />
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  )
}

function ChartIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  )
}

function PhoneIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  )
}

function MapPinIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function ArrowRightIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
    </svg>
  )
}

/* ─── Data ─── */

const VENDOR_CATEGORIES = [
  'Food and Restaurants',
  'Groceries and Supermarkets',
  'Pharmacy and Health',
  'Water and Drinks',
  'Ice Cream and Desserts',
  'Electronics and Accessories',
  'Appliances and Home',
  'Household Essentials',
  'Fashion and Clothing',
  'Other',
]

const DELIVERY_TIMES = [
  '15-30 mins',
  '30-45 mins',
  '45-60 mins',
  '1-2 hours',
  'Same day',
]

const ENUGU_LGAS = [
  'Enugu East',
  'Enugu North',
  'Enugu South',
  'Nkanu East',
  'Nkanu West',
  'Udi',
  'Ezeagu',
  'Igbo-Eze North',
  'Igbo-Eze South',
  'Nsukka',
  'Oji River',
  'Aninri',
  'Awgu',
  'Igbo-Etiti',
  'Isi-Uzo',
  'Udenu',
  'Uzo-Uwani',
]

const benefits = [
  {
    icon: UsersIcon,
    title: 'Reach More Customers',
    description:
      'Get discovered by thousands of shoppers in Enugu actively searching for products like yours.',
  },
  {
    icon: TruckIcon,
    title: 'Hassle-Free Delivery',
    description:
      'Our riders handle all deliveries so you can focus on what you do best — running your business.',
  },
  {
    icon: ChartIcon,
    title: 'Grow Your Revenue',
    description:
      'Vendors on Peekup see an average 40% increase in orders within their first month.',
  },
  {
    icon: PhoneIcon,
    title: 'Easy Dashboard',
    description:
      'Manage orders, update inventory, and track earnings from a simple vendor dashboard.',
  },
  {
    icon: MapPinIcon,
    title: 'Local Visibility',
    description:
      'Appear in location-based search results so nearby customers find you first.',
  },
  {
    icon: StoreIcon,
    title: 'Your Store, Online',
    description:
      'Get a beautiful storefront page with your branding, products, and operating hours.',
  },
]

const stats = [
  { value: '1,500+', label: 'Customers waiting' },
  { value: '8+', label: 'Categories' },
  { value: '30 min', label: 'Avg delivery' },
  { value: '0%', label: 'Commission at launch' },
]

const steps = [
  {
    num: '01',
    title: 'Apply below',
    description: 'Fill out the vendor application with your business details and location.',
  },
  {
    num: '02',
    title: 'Get verified',
    description: 'Our team reviews your application and helps set up your storefront.',
  },
  {
    num: '03',
    title: 'Start selling',
    description: 'List your products, accept orders, and our riders deliver to customers.',
  },
]

/* ─── Decorative background ─── */

function HeroGrid() {
  const id = useId()
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.04]"
    >
      <defs>
        <pattern id={id} width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M0 40L40 0M-10 10L10 -10M30 50L50 30" stroke="white" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  )
}

/* ─── Form helpers ─── */

const STORAGE_KEY = 'peekup_vendor_applications'

interface VendorFormData {
  name: string
  category: string
  whatsapp_number: string
  delivery_time: string
  image: string
  location: string
  area: string
  lga: string
  full_address: string
  landmarks: string
  directions: string
}

function saveToLocalStorage(data: VendorFormData) {
  const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
  const entry = {
    ...data,
    id: crypto.randomUUID(),
    rating: 0,
    is_open: true,
    is_featured: false,
    created_at: new Date().toISOString(),
    lat: null,
    lng: null,
  }
  existing.push(entry)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(existing))
  return entry
}

/* ─── Page ─── */

export default function VendorsPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isSuccess, setIsSuccess] = useState(false)
  const [step, setStep] = useState(1)
  const totalSteps = 2

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const data: VendorFormData = {
      name: formData.get('name') as string,
      category: formData.get('category') as string,
      whatsapp_number: formData.get('whatsapp_number') as string,
      delivery_time: formData.get('delivery_time') as string,
      image: (formData.get('image') as string) || '',
      location: formData.get('location') as string,
      area: formData.get('area') as string,
      lga: formData.get('lga') as string,
      full_address: formData.get('full_address') as string,
      landmarks: formData.get('landmarks') as string,
      directions: formData.get('directions') as string,
    }

    try {
      saveToLocalStorage(data)
      setIsSuccess(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  /* ── Success state ── */
  if (isSuccess) {
    return (
      <section className="flex min-h-[80vh] items-center py-20">
        <Container>
          <div className="mx-auto max-w-md text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10 ring-1 ring-emerald-500/20">
              <CheckIcon className="h-9 w-9 text-emerald-500" />
            </div>
            <h1 className="mt-8 text-3xl font-semibold tracking-tight text-gray-900">
              Application received
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Thank you for signing up to become a Peekup vendor. Our team will review your
              application and reach out via WhatsApp within 3–5 business days.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Button href="/" color="primary">
                Back to Peekup
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  setIsSuccess(false)
                  setStep(1)
                }}
              >
                Submit another
              </Button>
            </div>
          </div>
        </Container>
      </section>
    )
  }

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden bg-gray-900 pt-32 pb-24 sm:pb-32">
        <HeroGrid />

        {/* Radial glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 left-1/2 h-[700px] w-[900px] -translate-x-1/2 -translate-y-1/4 rounded-full bg-orange-600/[0.07] blur-[120px]"
        />

        <Container className="relative">
          <div className="grid items-end gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Left — copy */}
            <div>
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
                <StoreIcon className="h-4 w-4 text-orange-400" />
                <span className="text-xs font-semibold uppercase tracking-widest text-orange-400">
                  Now accepting vendors
                </span>
              </div>

              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Sell on
                <br />
                <span className="text-orange-400">Peekup</span>
              </h1>

              <p className="mt-6 max-w-lg text-lg leading-relaxed text-gray-400">
                List your business on Enugu&apos;s fastest-growing marketplace. Reach
                thousands of customers, and let us handle every delivery.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="#apply" color="primary">
                  Apply to sell
                </Button>
                <Button href="#benefits" variant="outline" color="transparent" className="text-white border-white/20 hover:bg-white/5">
                  Why Peekup?
                </Button>
              </div>
            </div>

            {/* Right — stat cards */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {stats.map(({ value, label }, i) => (
                <div
                  key={label}
                  className={`rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5 backdrop-blur-sm ${i === 3 ? 'border-orange-500/20 bg-orange-500/[0.06]' : ''}`}
                >
                  <p className={`text-2xl font-bold tracking-tight sm:text-3xl ${i === 3 ? 'text-orange-400' : 'text-white'}`}>
                    {value}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ─── Benefits ─── */}
      <section id="benefits" className="scroll-mt-12 bg-gray-50 py-24 sm:py-32">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why sell on Peekup?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              We give local vendors the tools and reach to compete with anyone.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="group relative rounded-2xl border border-gray-200/80 bg-white p-6 transition-all hover:border-orange-200 hover:shadow-lg hover:shadow-orange-600/5"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 ring-1 ring-orange-100">
                  <b.icon className="h-5 w-5 text-orange-600" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-gray-900">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{b.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── How It Works ─── */}
      <section className="border-t border-gray-200/80 bg-white py-24 sm:py-32">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              How it works
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Three simple steps to start selling.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-4xl">
            <div className="grid grid-cols-1 gap-px md:grid-cols-3">
              {steps.map((s, i) => (
                <div key={s.num} className="relative px-8 py-8 text-center md:text-left">
                  {/* Connecting line — visible between items on desktop */}
                  {i < steps.length - 1 && (
                    <div
                      aria-hidden
                      className="absolute top-12 right-0 hidden h-px w-8 translate-x-full bg-gradient-to-r from-gray-300 to-transparent md:block"
                    />
                  )}

                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-gray-200 text-sm font-bold text-gray-900">
                    {s.num}
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-gray-900">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{s.description}</p>

                  {i === steps.length - 1 && (
                    <div className="mt-6">
                      <a
                        href="#apply"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-600 transition-colors hover:text-orange-700"
                      >
                        Apply now
                        <ArrowRightIcon className="h-4 w-4" />
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ─── Application Form ─── */}
      <section
        id="apply"
        className="scroll-mt-20 border-t border-gray-200/80 bg-gray-50 py-24 sm:py-32"
      >
        <Container>
          <div className="mx-auto max-w-2xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Vendor application
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Tell us about your business and where you operate.
              </p>
            </div>

            {/* Progress bar */}
            <div className="mt-10">
              <div className="flex items-center justify-between text-xs font-medium">
                <span className={step >= 1 ? 'text-orange-600' : 'text-gray-400'}>
                  Business details
                </span>
                <span className={step >= 2 ? 'text-orange-600' : 'text-gray-400'}>
                  Location & address
                </span>
              </div>
              <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-gray-200">
                <div
                  className="h-full rounded-full bg-orange-500 transition-all duration-500 ease-out"
                  style={{ width: `${(step / totalSteps) * 100}%` }}
                />
              </div>
            </div>

            <div className="mt-8 rounded-3xl bg-white p-8 shadow-xl shadow-gray-900/5 ring-1 ring-gray-200/60 sm:p-10">
              <form onSubmit={handleSubmit}>
                {/* Step 1: Business Details */}
                <div className={step === 1 ? 'block' : 'hidden'}>
                  <h3 className="mb-6 text-base font-semibold text-gray-900">
                    Business details
                  </h3>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <TextField
                      className="sm:col-span-2"
                      label="Business Name"
                      name="name"
                      type="text"
                      placeholder="e.g. Mama Nkechi Kitchen"
                      required
                    />
                    <SelectField
                      className="sm:col-span-2"
                      label="Business Category"
                      name="category"
                      required
                    >
                      <option value="">Select a category</option>
                      {VENDOR_CATEGORIES.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </SelectField>
                    <TextField
                      label="WhatsApp Number"
                      name="whatsapp_number"
                      type="tel"
                      placeholder="08012345678"
                    />
                    <SelectField
                      label="Estimated Delivery Time"
                      name="delivery_time"
                      required
                    >
                      <option value="">Select delivery time</option>
                      {DELIVERY_TIMES.map((time) => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </SelectField>
                    <TextField
                      className="sm:col-span-2"
                      label="Business Logo or Image URL"
                      name="image"
                      type="url"
                      placeholder="https://example.com/your-logo.png"
                      required
                    />
                  </div>
                  <div className="mt-8 flex justify-end">
                    <Button type="button" color="primary" onClick={() => setStep(2)}>
                      Next: Location
                    </Button>
                  </div>
                </div>

                {/* Step 2: Location & Address */}
                <div className={step === 2 ? 'block' : 'hidden'}>
                  <h3 className="mb-6 text-base font-semibold text-gray-900">
                    Location & address
                  </h3>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <TextField
                      label="Location / Area Name"
                      name="location"
                      type="text"
                      placeholder="e.g. Independence Layout"
                      required
                    />
                    <SelectField label="Local Government Area" name="lga">
                      <option value="">Select LGA</option>
                      {ENUGU_LGAS.map((lga) => (
                        <option key={lga} value={lga}>{lga}</option>
                      ))}
                    </SelectField>
                    <TextField
                      label="Area / Neighbourhood"
                      name="area"
                      type="text"
                      placeholder="e.g. GRA, Trans-Ekulu, Ogui"
                    />
                    <TextField
                      className="sm:col-span-2"
                      label="Full Address"
                      name="full_address"
                      type="text"
                      placeholder="123 Okpara Avenue, Independence Layout, Enugu"
                    />
                    <div className="sm:col-span-2">
                      <label className="mb-2 block text-sm font-semibold text-gray-900">
                        Nearby Landmarks
                      </label>
                      <textarea
                        name="landmarks"
                        rows={2}
                        className="block w-full appearance-none rounded-[16px] border border-gray-200 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:border-orange-500 focus:outline-hidden focus:ring-2 focus:ring-orange-500/30 sm:text-sm"
                        placeholder="e.g. Opposite ShopRite, beside First Bank"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="mb-2 block text-sm font-semibold text-gray-900">
                        Directions to Your Store
                      </label>
                      <textarea
                        name="directions"
                        rows={2}
                        className="block w-full appearance-none rounded-[16px] border border-gray-200 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:border-orange-500 focus:outline-hidden focus:ring-2 focus:ring-orange-500/30 sm:text-sm"
                        placeholder="e.g. From Ogui junction, take the second left after the filling station"
                      />
                    </div>
                  </div>

                  {error && (
                    <div className="mt-6 rounded-xl bg-red-50 p-3 text-sm text-red-600 ring-1 ring-red-100">
                      {error}
                    </div>
                  )}

                  <div className="mt-8 flex justify-between gap-4">
                    <Button type="button" variant="outline" onClick={() => setStep(1)}>
                      Back
                    </Button>
                    <Button type="submit" color="primary" disabled={isLoading}>
                      {isLoading ? 'Submitting…' : 'Submit application'}
                    </Button>
                  </div>
                </div>
              </form>
            </div>

            <p className="mt-6 text-center text-xs leading-relaxed text-gray-500">
              By submitting, you agree to our{' '}
              <Link href="/terms" className="text-orange-600 underline-offset-2 hover:underline">
                Terms
              </Link>{' '}
              and{' '}
              <Link href="/privacy" className="text-orange-600 underline-offset-2 hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </Container>
      </section>

      {/* ─── Contact CTA ─── */}
      <section className="bg-gray-900 py-20">
        <Container>
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center lg:flex-row lg:text-left">
            <div className="flex-1">
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Have questions?
              </h2>
              <p className="mt-2 text-gray-400">
                Our vendor partnerships team is ready to help you get started.
              </p>
            </div>
            <div className="flex shrink-0 flex-col items-center gap-1 lg:items-end">
              <a
                href="mailto:vendors@usepeekup.com"
                className="text-sm font-semibold text-orange-400 transition-colors hover:text-orange-300"
              >
                vendors@usepeekup.com
              </a>
              <a
                href="tel:08038927241"
                className="text-sm text-gray-500 transition-colors hover:text-gray-400"
              >
                08038927241
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
