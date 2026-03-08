'use client'

import { useState } from 'react'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { TextField, SelectField } from '@/components/Fields'
import { CirclesBackground } from '@/components/CirclesBackground'

function CheckIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  )
}

function StoreIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}

function UsersIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87" />
      <path d="M16 3.13a4 4 0 010 7.75" />
    </svg>
  )
}

function TruckIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <rect x="1" y="3" width="15" height="13" />
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  )
}

function ChartIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  )
}

function PhoneIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  )
}

function MapPinIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

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

const STEP_NAMES = ['Business Details', 'Location & Address']

export default function VendorsPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isSuccess, setIsSuccess] = useState(false)
  const [step, setStep] = useState(1)

  function handleStepChange(newStep: number) {
    setStep(newStep)
  }

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

  if (isSuccess) {
    return (
      <section className="relative overflow-hidden py-20 sm:py-32">
        <CirclesBackground
          width="1090"
          height="1090"
          className="absolute -top-7 left-1/2 -z-10 h-[788px] -translate-x-1/2 mask-[linear-gradient(to_bottom,white_20%,transparent_75%)] stroke-gray-300/30 sm:-top-9 sm:h-auto"
        />
        <Container>
          <div className="mx-auto max-w-md text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <CheckIcon className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="mt-8 text-3xl font-medium tracking-tight text-gray-900">
              Application Received!
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Thank you for signing up to become a Peekup vendor.
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Our team will review your application and reach out via WhatsApp or
              email within 3-5 business days to get you set up on the platform.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/" color="primary">
                Back to Peekup
              </Button>
              <Button href="/vendors" variant="outline" onClick={() => {
                setIsSuccess(false)
                setStep(1)
              }}>
                Submit Another
              </Button>
            </div>
          </div>
        </Container>
      </section>
    )
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gray-900 px-4 pt-32 pb-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-orange-600/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-orange-500/5 blur-3xl" />
        </div>
        <Container className="relative">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-6 inline-flex items-center space-x-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5">
              <StoreIcon className="h-4 w-4 text-orange-400" />
              <span className="font-mono text-xs font-semibold uppercase tracking-wide text-orange-400">
                Now Accepting Vendors
              </span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Sell on Peekup
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-xl font-medium leading-relaxed text-gray-300">
              List your business on Enugu&apos;s fastest-growing marketplace.
              Reach thousands of customers, and let us handle delivery.
            </p>
            <div className="mt-8">
              <Button href="#apply" color="primary" className="text-base">
                Apply to Sell
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats Band */}
      <section className="border-b border-gray-200 bg-white py-10">
        <Container>
          <div className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
            {[
              ['550+', 'Customers Waiting'],
              ['8+', 'Categories'],
              ['30 min', 'Avg Delivery'],
              ['0%', 'Commission (Launch)'],
            ].map(([stat, label]) => (
              <div key={label}>
                <p className="text-3xl font-bold tracking-tight text-gray-900">
                  {stat}
                </p>
                <p className="mt-1 text-sm text-gray-600">{label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 px-4 py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Sell on Peekup?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-700">
              We give local vendors the tools and reach to compete with anyone.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100">
                  <benefit.icon className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* How It Works */}
      <section className="border-t border-gray-100 bg-white px-4 py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Three simple steps to start selling.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-10 md:grid-cols-3">
            {[
              {
                step: '01',
                title: 'Apply Below',
                description:
                  'Fill out the vendor application with your business details and location.',
              },
              {
                step: '02',
                title: 'Get Verified',
                description:
                  'Our team reviews your application and helps set up your storefront.',
              },
              {
                step: '03',
                title: 'Start Selling',
                description:
                  'List your products, accept orders, and our riders deliver to customers.',
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-900 text-lg font-bold text-white">
                  {item.step}
                </div>
                <h3 className="mt-6 text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Application Form */}
      <section
        id="apply"
        className="scroll-mt-20 border-t border-gray-100 bg-gray-50 px-4 py-20"
      >
        <Container>
          <div className="mx-auto max-w-2xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Vendor Application
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Tell us about your business and where you operate.
              </p>
            </div>

            {/* Progress Steps */}
            <div className="mt-8 flex items-center justify-center gap-4">
              {[1, 2].map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setStep(s)}
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                    step === s
                      ? 'bg-orange-600 text-white'
                      : step > s
                        ? 'bg-green-100 text-green-600'
                        : 'bg-gray-100 text-gray-400'
                  }`}
                >
                  {step > s ? <CheckIcon className="h-5 w-5" /> : s}
                </button>
              ))}
            </div>
            <div className="mt-2 text-center text-sm text-gray-500">
              {STEP_NAMES[step - 1]}
            </div>

            <div className="mt-8 rounded-3xl bg-white p-8 shadow-xl shadow-gray-900/10 sm:p-12">
              <form onSubmit={handleSubmit}>
                {/* Step 1: Business Details */}
                <div className={step === 1 ? 'block' : 'hidden'}>
                  <h3 className="mb-6 text-lg font-semibold text-gray-900">
                    Business Details
                  </h3>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
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
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
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
                        <option key={time} value={time}>
                          {time}
                        </option>
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
                    <Button
                      type="button"
                      color="primary"
                      onClick={() => handleStepChange(2)}
                    >
                      Next: Location Details
                    </Button>
                  </div>
                </div>

                {/* Step 2: Location & Address */}
                <div className={step === 2 ? 'block' : 'hidden'}>
                  <h3 className="mb-6 text-lg font-semibold text-gray-900">
                    Location & Address
                  </h3>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
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
                        <option key={lga} value={lga}>
                          {lga}
                        </option>
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
                        className="block w-full appearance-none rounded-[16px] border border-gray-200 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:border-indigo-500 focus:outline-hidden focus:ring-2 focus:ring-indigo-500/40 sm:text-sm"
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
                        className="block w-full appearance-none rounded-[16px] border border-gray-200 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:border-indigo-500 focus:outline-hidden focus:ring-2 focus:ring-indigo-500/40 sm:text-sm"
                        placeholder="e.g. From Ogui junction, take the second left after the filling station"
                      />
                    </div>
                  </div>

                  {error && (
                    <div className="mt-6 rounded-md bg-red-50 p-3 text-sm text-red-600">
                      {error}
                    </div>
                  )}

                  <div className="mt-8 flex justify-between">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setStep(1)}
                    >
                      Previous
                    </Button>
                    <Button type="submit" color="primary" disabled={isLoading}>
                      {isLoading ? 'Submitting...' : 'Submit Application'}
                    </Button>
                  </div>
                </div>
              </form>
            </div>

            <p className="mt-6 text-center text-xs text-gray-500">
              By submitting this application, you agree to our{' '}
              <Link
                href="/terms"
                className="text-orange-600 underline hover:text-orange-700"
              >
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link
                href="/privacy"
                className="text-orange-600 underline hover:text-orange-700"
              >
                Privacy Policy
              </Link>
              . Your information will be used solely for setting up your vendor
              account.
            </p>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 px-4 py-16 text-white">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Have Questions?
            </h2>
            <p className="mt-4 text-gray-300">
              Reach out to our vendor partnerships team for more information.
            </p>
            <p className="mt-2 text-orange-400">
              vendors@usepeekup.com | 08038927241
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}
