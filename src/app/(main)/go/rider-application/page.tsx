'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { TextField, SelectField } from '@/components/Fields'
import { CirclesBackground } from '@/components/CirclesBackground'
import {
  trackFormStart,
  trackFormStepComplete,
  trackFormSubmit,
  trackFormError,
  trackRiderApplicationSubmit,
} from '@/lib/analytics'

function ArrowLeftIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
    </svg>
  )
}

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

function ShieldIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}

function BikeIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <circle cx="5.5" cy="17.5" r="3.5" />
      <circle cx="18.5" cy="17.5" r="3.5" />
      <path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" fill="currentColor" />
      <path d="M12 17.5V14l-3-3 4-3 2 3h3" />
    </svg>
  )
}

function WalletIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path d="M21 4H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />
      <path d="M1 10h22" />
    </svg>
  )
}

function HeartIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )
}

function WrenchIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  )
}

function HeadsetIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    </svg>
  )
}

const benefits = [
  {
    icon: ShieldIcon,
    title: 'Full Protective Gear',
    description: 'Complete safety equipment including helmet, reflective jacket, and protective gloves.',
  },
  {
    icon: BikeIcon,
    title: 'Well-Equipped Bike',
    description: 'Modern delivery bike with built-in navigation technology and secure package storage.',
  },
  {
    icon: WalletIcon,
    title: 'Competitive Earnings',
    description: 'Base monthly salary plus attractive commissions for every successful delivery.',
  },
  {
    icon: HeartIcon,
    title: 'Health Insurance',
    description: 'Comprehensive health coverage for accidental injuries and emergencies.',
  },
  {
    icon: WrenchIcon,
    title: 'Mechanical Support',
    description: 'Standby mechanical support team for quick repairs and maintenance.',
  },
  {
    icon: HeadsetIcon,
    title: 'Operations Support',
    description: 'Real-time operations support team to assist you throughout your shifts.',
  },
]

const requirements = [
  'OND, NCE, or BSc academic qualification',
  'Fluent in English and Igbo languages',
  'Previous employment history or riding experience',
  'At least 2 guarantors resident in Enugu',
  'Valid driver\'s license',
  'National Identification Number (NIN)',
]

interface FormData {
  full_name: string
  phone: string
  email: string
  residential_address: string
  nin: string
  academic_qualification: string
  english_fluency: string
  igbo_fluency: string
  previous_employment_history: string
  riding_experience: string
  guarantor1_name: string
  guarantor1_address: string
  guarantor1_occupation: string
  guarantor1_email: string
  guarantor1_phone: string
  guarantor2_name: string
  guarantor2_address: string
  guarantor2_occupation: string
  guarantor2_email: string
  guarantor2_phone: string
}

const STEP_NAMES = ['Personal Information', 'Qualifications & Experience', 'Guarantor Information']

export default function RiderApplicationPage() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [step, setStep] = useState(1)
  const [hasTrackedStart, setHasTrackedStart] = useState(false)

  // Track form start on first interaction
  useEffect(() => {
    if (!hasTrackedStart) {
      trackFormStart('rider_application')
      setHasTrackedStart(true)
    }
  }, [hasTrackedStart])

  // Handle step change with tracking
  function handleStepChange(newStep: number) {
    if (newStep > step) {
      // Moving forward - track completion of current step
      trackFormStepComplete('rider_application', step, STEP_NAMES[step - 1])
    }
    setStep(newStep)
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const data: FormData = {
      full_name: formData.get('full_name') as string,
      phone: formData.get('phone') as string,
      email: formData.get('email') as string,
      residential_address: formData.get('residential_address') as string,
      nin: formData.get('nin') as string,
      academic_qualification: formData.get('academic_qualification') as string,
      english_fluency: formData.get('english_fluency') as string,
      igbo_fluency: formData.get('igbo_fluency') as string,
      previous_employment_history: formData.get('previous_employment_history') as string,
      riding_experience: formData.get('riding_experience') as string,
      guarantor1_name: formData.get('guarantor1_name') as string,
      guarantor1_address: formData.get('guarantor1_address') as string,
      guarantor1_occupation: formData.get('guarantor1_occupation') as string,
      guarantor1_email: formData.get('guarantor1_email') as string,
      guarantor1_phone: formData.get('guarantor1_phone') as string,
      guarantor2_name: formData.get('guarantor2_name') as string,
      guarantor2_address: formData.get('guarantor2_address') as string,
      guarantor2_occupation: formData.get('guarantor2_occupation') as string,
      guarantor2_email: formData.get('guarantor2_email') as string,
      guarantor2_phone: formData.get('guarantor2_phone') as string,
    }

    try {
      const response = await fetch('/api/rider-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const result = await response.json()
        throw new Error(result.error || 'Failed to submit application')
      }

      // Track successful submission
      trackFormStepComplete('rider_application', 3, STEP_NAMES[2])
      trackFormSubmit('rider_application', true)
      trackRiderApplicationSubmit()
      setSuccess(true)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Something went wrong'
      trackFormError('rider_application', errorMessage)
      trackFormSubmit('rider_application', false)
      setError(errorMessage)
    } finally {
      setLoading(false)
    }
  }

  if (success) {
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
              Application Submitted!
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Thank you for your interest in becoming a Peekup Rider.
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Our team will review your application and contact you within 3-5 business days. 
              Please ensure your phone is reachable.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/go" color="primary">
                Back to Peekup Go
              </Button>
              <Button href="/" variant="outline">
                Back to Home
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
      <section className="bg-gray-900 px-4 pb-16 pt-32 text-white">
        <Container>
          <Link
            href="/go"
            className="mb-8 inline-flex items-center font-medium text-gray-400 transition-colors hover:text-white"
          >
            <ArrowLeftIcon className="mr-2 h-4 w-4" />
            Back to Peekup Go
          </Link>
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center space-x-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5">
              <BikeIcon className="h-4 w-4 text-orange-400" />
              <span className="font-mono text-xs font-semibold uppercase tracking-wide text-orange-400">
                Now Hiring Riders
              </span>
            </div>
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Become a Peekup Rider
            </h1>
            <p className="max-w-2xl text-xl font-medium leading-relaxed text-gray-300">
              Join our team of delivery riders and earn competitive income while serving the Enugu community. 
              We provide everything you need to succeed.
            </p>
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="bg-white px-4 py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What We Offer
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-700">
              We invest in our riders because your success is our success.
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
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Requirements Section */}
      <section className="border-t border-gray-100 bg-gray-50 px-4 py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Requirements
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-700">
              We&apos;re looking for dedicated individuals who meet these criteria.
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-xl">
            <ul className="space-y-4">
              {requirements.map((requirement, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-orange-100">
                    <CheckIcon className="h-4 w-4 text-orange-600" />
                  </div>
                  <span className="text-gray-700">{requirement}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Application Form Section */}
      <section className="relative overflow-hidden bg-white px-4 py-20">
        <Container>
          <div className="mx-auto max-w-2xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Apply Now
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Fill out the form below to start your application.
              </p>
            </div>

            {/* Progress Steps */}
            <div className="mt-8 flex items-center justify-center gap-4">
              {[1, 2, 3].map((s) => (
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
              {step === 1 && 'Personal Information'}
              {step === 2 && 'Qualifications & Experience'}
              {step === 3 && 'Guarantor Information'}
            </div>

            <div className="mt-8 rounded-3xl bg-white p-8 shadow-xl shadow-gray-900/10 sm:p-12">
              <form onSubmit={handleSubmit}>
                {/* Step 1: Personal Information */}
                <div className={step === 1 ? 'block' : 'hidden'}>
                  <h3 className="mb-6 text-lg font-semibold text-gray-900">Personal Information</h3>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <TextField
                      className="sm:col-span-2"
                      label="Full Name"
                      name="full_name"
                      type="text"
                      placeholder="John Doe"
                      required
                    />
                    <TextField
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      placeholder="08012345678"
                      required
                    />
                    <TextField
                      label="Email Address"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                    />
                    <TextField
                      className="sm:col-span-2"
                      label="Residential Address"
                      name="residential_address"
                      type="text"
                      placeholder="123 Main Street, Independence Layout, Enugu"
                      required
                    />
                    <TextField
                      className="sm:col-span-2"
                      label="National Identification Number (NIN)"
                      name="nin"
                      type="text"
                      placeholder="12345678901"
                      required
                    />
                  </div>
                  <div className="mt-8 flex justify-end">
                    <Button
                      type="button"
                      color="primary"
                      onClick={() => handleStepChange(2)}
                    >
                      Next: Qualifications
                    </Button>
                  </div>
                </div>

                {/* Step 2: Qualifications & Experience */}
                <div className={step === 2 ? 'block' : 'hidden'}>
                  <h3 className="mb-6 text-lg font-semibold text-gray-900">Qualifications & Experience</h3>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <SelectField
                      className="sm:col-span-2"
                      label="Highest Academic Qualification"
                      name="academic_qualification"
                      required
                    >
                      <option value="">Select qualification</option>
                      <option value="SSCE">SSCE / WAEC</option>
                      <option value="OND">OND</option>
                      <option value="NCE">NCE</option>
                      <option value="HND">HND</option>
                      <option value="BSc">BSc / BA / B.Ed</option>
                      <option value="MSc">MSc / MA / M.Ed</option>
                      <option value="Other">Other</option>
                    </SelectField>
                    <SelectField
                      label="English Language Proficiency"
                      name="english_fluency"
                      required
                    >
                      <option value="">Select level</option>
                      <option value="Basic">Basic</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Fluent">Fluent</option>
                      <option value="Native">Native Speaker</option>
                    </SelectField>
                    <SelectField
                      label="Igbo Language Proficiency"
                      name="igbo_fluency"
                      required
                    >
                      <option value="">Select level</option>
                      <option value="Basic">Basic</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Fluent">Fluent</option>
                      <option value="Native">Native Speaker</option>
                    </SelectField>
                    <div className="sm:col-span-2">
                      <label className="mb-2 block text-sm font-semibold text-gray-900">
                        Previous Employment History
                      </label>
                      <textarea
                        name="previous_employment_history"
                        rows={3}
                        className="block w-full appearance-none rounded-[16px] border border-gray-200 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:border-indigo-500 focus:outline-hidden focus:ring-2 focus:ring-indigo-500/40 sm:text-sm"
                        placeholder="List your previous jobs, companies, and duration (e.g., Rider at XYZ Logistics - 2 years)"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="mb-2 block text-sm font-semibold text-gray-900">
                        Riding Experience
                      </label>
                      <textarea
                        name="riding_experience"
                        rows={3}
                        className="block w-full appearance-none rounded-[16px] border border-gray-200 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:border-indigo-500 focus:outline-hidden focus:ring-2 focus:ring-indigo-500/40 sm:text-sm"
                        placeholder="Describe your motorcycle/bike riding experience and any certifications"
                      />
                    </div>
                  </div>
                  <div className="mt-8 flex justify-between">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setStep(1)}
                    >
                      Previous
                    </Button>
                    <Button
                      type="button"
                      color="primary"
                      onClick={() => handleStepChange(3)}
                    >
                      Next: Guarantors
                    </Button>
                  </div>
                </div>

                {/* Step 3: Guarantor Information */}
                <div className={step === 3 ? 'block' : 'hidden'}>
                  <h3 className="mb-6 text-lg font-semibold text-gray-900">Guarantor Information</h3>
                  <p className="mb-6 text-sm text-gray-600">
                    Please provide details of two guarantors who are residents of Enugu.
                  </p>

                  {/* Guarantor 1 */}
                  <div className="mb-8 rounded-xl bg-gray-50 p-6">
                    <h4 className="mb-4 font-semibold text-gray-900">Guarantor 1</h4>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <TextField
                        label="Full Name"
                        name="guarantor1_name"
                        type="text"
                        placeholder="Guarantor's full name"
                        required
                      />
                      <TextField
                        label="Occupation"
                        name="guarantor1_occupation"
                        type="text"
                        placeholder="e.g., Civil Servant, Trader"
                        required
                      />
                      <TextField
                        className="sm:col-span-2"
                        label="Address (must be in Enugu)"
                        name="guarantor1_address"
                        type="text"
                        placeholder="Full address in Enugu"
                        required
                      />
                      <TextField
                        label="Email"
                        name="guarantor1_email"
                        type="email"
                        placeholder="guarantor@example.com"
                        required
                      />
                      <TextField
                        label="Phone Number"
                        name="guarantor1_phone"
                        type="tel"
                        placeholder="08012345678"
                        required
                      />
                    </div>
                  </div>

                  {/* Guarantor 2 */}
                  <div className="mb-8 rounded-xl bg-gray-50 p-6">
                    <h4 className="mb-4 font-semibold text-gray-900">Guarantor 2</h4>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <TextField
                        label="Full Name"
                        name="guarantor2_name"
                        type="text"
                        placeholder="Guarantor's full name"
                        required
                      />
                      <TextField
                        label="Occupation"
                        name="guarantor2_occupation"
                        type="text"
                        placeholder="e.g., Civil Servant, Trader"
                        required
                      />
                      <TextField
                        className="sm:col-span-2"
                        label="Address (must be in Enugu)"
                        name="guarantor2_address"
                        type="text"
                        placeholder="Full address in Enugu"
                        required
                      />
                      <TextField
                        label="Email"
                        name="guarantor2_email"
                        type="email"
                        placeholder="guarantor@example.com"
                        required
                      />
                      <TextField
                        label="Phone Number"
                        name="guarantor2_phone"
                        type="tel"
                        placeholder="08012345678"
                        required
                      />
                    </div>
                  </div>

                  {error && (
                    <div className="mb-6 rounded-md bg-red-50 p-3 text-sm text-red-600">
                      {error}
                    </div>
                  )}

                  <div className="flex justify-between">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setStep(2)}
                    >
                      Previous
                    </Button>
                    <Button
                      type="submit"
                      color="primary"
                      disabled={loading}
                    >
                      {loading ? 'Submitting...' : 'Submit Application'}
                    </Button>
                  </div>
                </div>
              </form>
            </div>

            <p className="mt-6 text-center text-xs text-gray-500">
              By submitting this application, you agree to our Terms of Service and Privacy Policy.
              Your information will be used solely for the purpose of processing your rider application.
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
              Contact our recruitment team for more information about becoming a Peekup Rider.
            </p>
            <p className="mt-2 text-orange-400">
              riders@peekup.ng | 0800-PEEKUP-GO
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}
