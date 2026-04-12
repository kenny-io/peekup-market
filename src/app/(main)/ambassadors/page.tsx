'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'

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

function MegaphoneIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    </svg>
  )
}

function GlobeIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  )
}

function WalletIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path d="M21 4H3a2 2 0 00-2 2v12a2 2 0 002 2h18a2 2 0 002-2V6a2 2 0 00-2-2z" />
      <path d="M1 10h22" />
    </svg>
  )
}

function StarIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

function RocketIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" />
      <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )
}

function SparkleIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path d="M12 3l1.912 5.813a2 2 0 001.275 1.275L21 12l-5.813 1.912a2 2 0 00-1.275 1.275L12 21l-1.912-5.813a2 2 0 00-1.275-1.275L3 12l5.813-1.912a2 2 0 001.275-1.275L12 3z" />
    </svg>
  )
}

/* ─── Data constants ─── */

const INSTITUTIONS = [
  'University of Nigeria, Enugu Campus (UNEC)',
  'Enugu State University of Science & Technology (ESUT)',
  'Institute of Management & Technology (IMT)',
  'Godfrey Okoye University',
  'Caritas University',
  'Coal City University',
  'Renaissance University',
  'OSISATECH',
  'Peaceland College',
  'Dental College',
  'Other',
]

const YEAR_OPTIONS = ['100 Level', '200 Level', '300 Level', '400 Level', '500 Level', 'Postgraduate']

const FOLLOWER_RANGES = ['Under 300', '300 – 1,000', '1,000 – 3,000', '3,000 – 10,000', '10,000+']

const POSTING_FREQUENCIES = [
  'Daily or almost daily',
  'A few times a week',
  'Once a week or less',
  'Rarely — but I can commit to posting more for this role',
]

const WHATSAPP_GROUP_RANGES = ['5 – 10 groups', '10 – 20 groups', '20 – 30 groups', '30+ groups']

const WHATSAPP_ADMIN_OPTIONS = [
  'Yes — I admin multiple groups',
  'Yes — I admin at least one group',
  'No, but I\'m active in groups and my messages get read',
]

const GROUP_TYPES = [
  'Faculty / department groups',
  'Hostel groups',
  'Student union groups',
  'Campus association groups',
  'Course / study groups',
  'Business / buy & sell groups',
]

const CAMPUS_ACTIVITIES = [
  'Student Union / Government',
  'Department / Faculty Leader',
  'Campus Content Creator',
  'Event Organizer',
  'Hostel Leader / House Captain',
  'Club / Society Leader or Active Member',
  'I run a campus business or side hustle',
  'None of the above — but I\'m well-known and connected',
]

const CAMPUS_REPUTATION_OPTIONS = [
  'Very well known — most people on campus know me',
  'Well known in my department / faculty',
  'Known and trusted within my circles and social groups',
  'Still building my presence but I\'m visible and active',
]

const LEAD_OPTIONS = [
  'Yes — I want to be considered for the Lead Ambassador role',
  'No — I\'d prefer the standard Campus Ambassador role',
  'Open to either — let Peekup decide based on the team',
]

const HOURS_OPTIONS = ['1–3 hours/week', '3–6 hours/week', '6–10 hours/week', '10+ hours/week']

const AVAILABILITY_OPTIONS = [
  'Yes — fully available for the entire 6 weeks',
  'Mostly available — a few busy weeks but I can manage',
  'Limited availability — significant commitments during this period',
]

const REFERRAL_SOURCES = [
  'WhatsApp group or status',
  'Instagram',
  'TikTok',
  'Twitter / X',
  'A friend told me',
  'Campus flyer / poster',
]

const STEP_NAMES = [
  'Personal Info',
  'Campus Info',
  'Social Media',
  'WhatsApp',
  'Campus Presence',
  'Motivation',
  'Voice Note',
  'Availability',
]

const benefits = [
  {
    icon: WalletIcon,
    title: 'Monthly Data Stipend',
    description: '₦10,000–₦20,000 monthly stipend. Lead Ambassadors earn the highest tier.',
    accent: 'from-orange-500 to-orange-600',
  },
  {
    icon: StarIcon,
    title: 'Be a Founding Member',
    description: 'Your name goes on Peekup\'s founding team. First in line for paid roles post-launch.',
    accent: 'from-gray-800 to-gray-900',
  },
  {
    icon: GlobeIcon,
    title: 'Real Experience',
    description: 'Run campus campaigns, coordinate teams, and build a portfolio of startup experience.',
    accent: 'from-orange-600 to-orange-700',
  },
  {
    icon: MegaphoneIcon,
    title: 'Campus Influence',
    description: 'Become the face of Peekup on your campus. Build your personal brand while building ours.',
    accent: 'from-gray-700 to-gray-800',
  },
  {
    icon: RocketIcon,
    title: 'Career Boost',
    description: 'Reference letter, LinkedIn endorsements, and direct mentorship from the founding team.',
    accent: 'from-orange-500 to-orange-600',
  },
  {
    icon: SparkleIcon,
    title: 'Merch & Exclusive Access',
    description: 'Branded merchandise, early product access, and VIP status at Peekup launch events.',
    accent: 'from-gray-800 to-gray-900',
  },
]

const stats = [
  { value: '30', label: 'Total Spots', mono: true },
  { value: '₦10k–₦20k', label: 'Monthly Stipend', mono: false },
  { value: '10', label: 'Campuses', mono: true },
  { value: '3', label: 'Per Campus', mono: true },
]

/* ─── Reusable form sub-components ─── */

const textareaClasses =
  'block w-full appearance-none rounded-[16px] border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-orange-400 focus:outline-hidden focus:ring-2 focus:ring-orange-400/30 sm:text-sm transition-colors'

function CheckboxGroup({
  label,
  description,
  name,
  options,
  selectedValues,
  onChange,
}: {
  label: string
  description?: string
  name: string
  options: string[]
  selectedValues: string[]
  onChange: (values: string[]) => void
}) {
  function toggleValue(value: string) {
    if (selectedValues.includes(value)) onChange(selectedValues.filter((v) => v !== value))
    else onChange([...selectedValues, value])
  }

  return (
    <fieldset>
      <legend className="mb-2 block text-sm font-semibold text-gray-900">
        {label} <span className="text-orange-500">*</span>
      </legend>
      {description && <p className="mb-3 text-xs text-gray-500">{description}</p>}
      <div className="space-y-2">
        {options.map((option) => (
          <label
            key={option}
            className="group flex cursor-pointer items-start gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3.5 transition-all hover:border-orange-200 hover:shadow-sm has-[:checked]:border-orange-400 has-[:checked]:bg-orange-50 has-[:checked]:shadow-[0_0_0_1px_theme(colors.orange.400)]"
          >
            <input
              type="checkbox"
              name={name}
              value={option}
              checked={selectedValues.includes(option)}
              onChange={() => toggleValue(option)}
              className="mt-0.5 h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-500"
            />
            <span className="text-sm text-gray-700 group-has-[:checked]:font-medium group-has-[:checked]:text-gray-900">{option}</span>
          </label>
        ))}
      </div>
    </fieldset>
  )
}

function RadioGroup({
  label,
  description,
  name,
  options,
  required,
}: {
  label: string
  description?: string
  name: string
  options: string[]
  required?: boolean
}) {
  return (
    <fieldset>
      <legend className="mb-2 block text-sm font-semibold text-gray-900">
        {label} {required && <span className="text-orange-500">*</span>}
      </legend>
      {description && <p className="mb-3 text-xs text-gray-500">{description}</p>}
      <div className="space-y-2">
        {options.map((option) => (
          <label
            key={option}
            className="group flex cursor-pointer items-start gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3.5 transition-all hover:border-orange-200 hover:shadow-sm has-[:checked]:border-orange-400 has-[:checked]:bg-orange-50 has-[:checked]:shadow-[0_0_0_1px_theme(colors.orange.400)]"
          >
            <input
              type="radio"
              name={name}
              value={option}
              required={required}
              className="mt-0.5 h-4 w-4 border-gray-300 text-orange-600 focus:ring-orange-500"
            />
            <span className="text-sm text-gray-700 group-has-[:checked]:font-medium group-has-[:checked]:text-gray-900">{option}</span>
          </label>
        ))}
      </div>
    </fieldset>
  )
}

/* ─── Step transition wrapper ─── keeps DOM mounted so form values persist */

function StepPanel({ isActive, children }: { isActive: boolean; children: React.ReactNode }) {
  return (
    <div className={isActive ? '' : 'hidden'} aria-hidden={!isActive}>
      {children}
    </div>
  )
}

function InlineError({ message, errorStep, currentStep }: { message: string | null; errorStep: number | null; currentStep: number }) {
  if (!message || errorStep !== currentStep) return null
  return (
    <div className="mt-6 rounded-xl bg-red-50 p-4 text-sm text-red-600">
      {message}
    </div>
  )
}

/* ─── Progress stepper ─── */

function ProgressStepper({ currentStep, onStepClick }: { currentStep: number; onStepClick: (s: number) => void }) {
  return (
    <div className="mx-auto max-w-xl">
      <div className="relative flex items-center justify-between px-2 sm:px-0">
        {/* Connecting line */}
        <div className="absolute top-3.5 right-5 left-5 h-[2px] bg-gray-200 sm:top-4 sm:right-4 sm:left-4" />
        <motion.div
          className="absolute top-3.5 left-5 h-[2px] bg-orange-500 sm:top-4 sm:left-4"
          initial={false}
          animate={{ width: `${((currentStep - 1) / 7) * 100}%` }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        />

        {Array.from({ length: 8 }, (_, i) => i + 1).map((s) => {
          const isCompleted = currentStep > s
          const isCurrent = currentStep === s

          return (
            <button
              key={s}
              type="button"
              onClick={() => onStepClick(s)}
              className="group relative z-10 flex flex-col items-center"
            >
              <motion.div
                className={`flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-bold transition-colors sm:h-8 sm:w-8 sm:text-xs ${
                  isCurrent
                    ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/30'
                    : isCompleted
                      ? 'bg-orange-500 text-white'
                      : 'border-2 border-gray-200 bg-white text-gray-400'
                }`}
                animate={isCurrent ? { scale: [1, 1.12, 1] } : {}}
                transition={{ duration: 0.3 }}
              >
                {isCompleted ? <CheckIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5" /> : s}
              </motion.div>
              <span className={`mt-1.5 hidden text-[10px] font-medium lg:block ${isCurrent ? 'text-orange-600' : 'text-gray-400'}`}>
                {STEP_NAMES[s - 1]}
              </span>
            </button>
          )
        })}
      </div>
      <p className="mt-4 text-center text-sm font-medium text-gray-600 lg:hidden">
        Step {currentStep}/8 — {STEP_NAMES[currentStep - 1]}
      </p>
    </div>
  )
}

/* ─── Page ─── */

const REQUIRED_FIELDS_BY_STEP: Record<number, { name: string; label: string; type?: 'radio' | 'checkbox' | 'select' }[]> = {
  1: [
    { name: 'first_name', label: 'First Name' },
    { name: 'last_name', label: 'Last Name' },
    { name: 'phone', label: 'Phone Number' },
    { name: 'email', label: 'Email Address' },
  ],
  2: [
    { name: 'institution', label: 'University / Institution', type: 'select' },
    { name: 'department', label: 'Department / Course' },
    { name: 'year_of_study', label: 'Year of Study', type: 'select' },
  ],
  3: [
    { name: 'total_followers', label: 'Total Followers', type: 'select' },
    { name: 'posting_frequency', label: 'Posting Frequency', type: 'radio' },
  ],
  4: [
    { name: 'whatsapp_groups_count', label: 'WhatsApp groups count', type: 'radio' },
    { name: 'is_whatsapp_admin', label: 'WhatsApp admin status', type: 'radio' },
  ],
  5: [
    { name: 'campus_reputation', label: 'Campus reputation', type: 'radio' },
  ],
  6: [
    { name: 'why_ambassador', label: 'Why you want to be an ambassador' },
    { name: 'convince_story', label: 'Convince story' },
    { name: 'lead_ambassador_interest', label: 'Lead ambassador interest', type: 'radio' },
    { name: 'hours_per_week', label: 'Hours per week', type: 'radio' },
  ],
  7: [],
  8: [
    { name: 'availability', label: 'Availability', type: 'radio' },
    { name: 'referral_source', label: 'How you heard about this', type: 'select' },
  ],
}

export default function AmbassadorsPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [errorStep, setErrorStep] = useState<number | null>(null)
  const [isSuccess, setIsSuccess] = useState(false)
  const [step, setStep] = useState(1)
  const formRef = useRef<HTMLFormElement>(null)

  const [activeGroupTypes, setActiveGroupTypes] = useState<string[]>([])
  const [campusActivities, setCampusActivities] = useState<string[]>([])

  function clearError() {
    setError(null)
    setErrorStep(null)
  }

  function setStepError(stepNum: number, message: string) {
    setError(message)
    setErrorStep(stepNum)
  }

  function validateStep(stepNum: number): string[] {
    const form = formRef.current
    if (!form) return []

    const missing: string[] = []
    const fields = REQUIRED_FIELDS_BY_STEP[stepNum] || []

    for (const field of fields) {
      if (field.type === 'radio') {
        const checked = form.querySelector<HTMLInputElement>(`input[name="${field.name}"]:checked`)
        if (!checked) missing.push(field.label)
      } else if (field.type === 'select') {
        const select = form.querySelector<HTMLSelectElement>(`select[name="${field.name}"]`)
        if (!select || !select.value) missing.push(field.label)
      } else {
        const input = form.querySelector<HTMLInputElement | HTMLTextAreaElement>(`[name="${field.name}"]`)
        if (!input || !input.value.trim()) missing.push(field.label)
      }
    }

    if (stepNum === 4 && activeGroupTypes.length === 0) missing.push('Active group types')
    if (stepNum === 5 && campusActivities.length === 0) missing.push('Campus activities')

    return missing
  }

  function handleNext() {
    clearError()
    const missing = validateStep(step)
    if (missing.length > 0) {
      setStepError(step, `Please complete the required fields: ${missing.join(', ')}`)
      return
    }
    setStep((s) => Math.min(s + 1, 8))
  }

  function handlePrev() {
    clearError()
    setStep((s) => Math.max(s - 1, 1))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)
    clearError()

    for (let s = 1; s <= 8; s++) {
      const missing = validateStep(s)
      if (missing.length > 0) {
        setStep(s)
        setStepError(s, `Please complete the required fields: ${missing.join(', ')}`)
        setIsLoading(false)
        return
      }
    }

    const fd = new FormData(e.currentTarget)
    const data = {
      first_name: fd.get('first_name') as string,
      last_name: fd.get('last_name') as string,
      phone: fd.get('phone') as string,
      email: fd.get('email') as string,
      institution: fd.get('institution') as string,
      department: fd.get('department') as string,
      year_of_study: fd.get('year_of_study') as string,
      instagram_handle: fd.get('instagram_handle') as string,
      tiktok_handle: fd.get('tiktok_handle') as string,
      twitter_handle: fd.get('twitter_handle') as string,
      total_followers: fd.get('total_followers') as string,
      posting_frequency: fd.get('posting_frequency') as string,
      whatsapp_groups_count: fd.get('whatsapp_groups_count') as string,
      is_whatsapp_admin: fd.get('is_whatsapp_admin') as string,
      active_group_types: activeGroupTypes.join(', '),
      campus_activities: campusActivities.join(', '),
      campus_reputation: fd.get('campus_reputation') as string,
      why_ambassador: fd.get('why_ambassador') as string,
      convince_story: fd.get('convince_story') as string,
      lead_ambassador_interest: fd.get('lead_ambassador_interest') as string,
      hours_per_week: fd.get('hours_per_week') as string,
      voice_note_link: fd.get('voice_note_link') as string,
      availability: fd.get('availability') as string,
      important_dates: fd.get('important_dates') as string,
      referral_source: fd.get('referral_source') as string,
    }

    try {
      const response = await fetch('/api/ambassador-application', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const result = await response.json()
        throw new Error(result.error || 'Failed to submit application')
      }

      setIsSuccess(true)
    } catch (err) {
      setStepError(step, err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setIsLoading(false)
    }
  }

  /* ─── Success state ─── */

  if (isSuccess) {
    return (
      <section className="relative min-h-screen overflow-hidden bg-gray-900">
        <svg aria-hidden className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.03]">
          <defs>
            <pattern id="success-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40L40 0M-10 10L10 -10M30 50L50 30" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#success-grid)" />
        </svg>
        <div aria-hidden className="pointer-events-none absolute top-1/3 left-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-600/10 blur-[120px]" />

        <Container className="relative flex min-h-screen items-center justify-center py-20">
          <motion.div
            className="mx-auto max-w-md text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <motion.div
              className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-green-500/20 ring-1 ring-green-500/30"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            >
              <CheckIcon className="h-12 w-12 text-green-400" />
            </motion.div>
            <motion.h1
              className="mt-8 text-3xl font-bold tracking-tight text-white sm:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              You&apos;re in the running.
            </motion.h1>
            <motion.p
              className="mt-4 text-lg text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Thank you for applying to become a Peekup Founding Ambassador.
            </motion.p>
            <motion.p
              className="mt-3 text-sm text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              If shortlisted, you&apos;ll receive a call or WhatsApp message within
              5–7 days. Only 30 spots available — 3 per campus.
            </motion.p>
            <motion.div
              className="mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <Button href="/" color="primary">
                Back to Peekup
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    )
  }

  /* ─── Main page ─── */

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden bg-gray-900 pt-32 pb-24 sm:pb-32">
        <svg aria-hidden className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.03]">
          <defs>
            <pattern id="amb-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40L40 0M-10 10L10 -10M30 50L50 30" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#amb-grid)" />
        </svg>
        <div aria-hidden className="pointer-events-none absolute top-0 left-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/4 rounded-full bg-orange-600/[0.07] blur-[120px]" />
        <div aria-hidden className="pointer-events-none absolute -bottom-40 -right-20 h-[400px] w-[400px] rounded-full bg-orange-500/[0.04] blur-[100px]" />

        <Container className="relative">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <motion.div
              className="mb-8 inline-flex items-center space-x-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-1.5"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-orange-400">
                Now Recruiting · Limited Spots
              </span>
            </motion.div>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl">
              Join{' '}
              <span className="bg-gradient-to-r from-orange-400 via-orange-300 to-orange-500 bg-clip-text text-transparent">
                PEEKUP
              </span>
              <br />
              <span className="text-gray-400">— The Team</span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-gray-400 sm:mt-8 sm:text-lg">
              We&apos;re looking for influential students across Enugu campuses to
              help launch Nigeria&apos;s first hyperlocal delivery platform. This
              isn&apos;t a volunteer role — you&apos;ll be compensated, recognised,
              and given real responsibility.
            </p>

            {/* Stats grid */}
            <div className="mx-auto mt-12 grid max-w-lg grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((item, i) => (
                <motion.div
                  key={item.label}
                  className="rounded-2xl border border-white/[0.06] bg-white/[0.03] px-4 py-5 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                >
                  <p className={`text-xl font-bold text-white sm:text-2xl ${item.mono ? 'font-mono' : ''}`}>
                    {item.value}
                  </p>
                  <p className="mt-1 text-[10px] font-medium uppercase tracking-widest text-gray-500 sm:text-[11px]">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Button href="#apply" color="primary" className="text-base">
                Apply Now
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* ─── Why Join ─── */}
      <section className="border-t border-gray-200/80 bg-white py-16 sm:py-24 lg:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">
              Why join
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Not a volunteer gig.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Real compensation. Real responsibility. Real impact.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((item, i) => (
              <motion.div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-gray-200/80 bg-white p-7 transition-all hover:border-orange-200 hover:shadow-lg hover:shadow-orange-600/5"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${item.accent} text-white`}>
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-base font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── Application Form ─── */}
      <section id="apply" className="scroll-mt-20 border-t border-gray-100 bg-gray-50 py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-2xl">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">
                Application
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Founding Ambassador Application
              </h2>
              <p className="mt-4 text-base text-gray-600">
                Reviewed on a rolling basis. Only 3 spots per campus.
              </p>
            </div>

            {/* Progress */}
            <div className="mt-10">
              <ProgressStepper currentStep={step} onStepClick={setStep} />
            </div>

            {/* Form card */}
            <div className="relative mt-10 overflow-hidden rounded-3xl bg-white shadow-xl shadow-gray-900/10">
              <div className="absolute inset-x-0 top-0 h-1 bg-gray-100">
                <motion.div
                  className="h-full bg-gradient-to-r from-orange-500 to-orange-400"
                  initial={false}
                  animate={{ width: `${(step / 8) * 100}%` }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                />
              </div>

              <div className="p-5 sm:p-8 lg:p-12">
                <form ref={formRef} onSubmit={handleSubmit}>

                  {/* Step 1: Personal Information */}
                  <StepPanel isActive={step === 1}>
                    <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
                    <p className="mb-6 mt-1 text-sm text-gray-500">Basic details so we know who you are.</p>
                    <div className="space-y-5">
                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <TextField label="First Name" name="first_name" type="text" placeholder="First name" required />
                        <TextField label="Last Name" name="last_name" type="text" placeholder="Last name" required />
                      </div>
                      <TextField label="Phone Number" name="phone" type="tel" placeholder="08012345678" required />
                      <TextField label="Email Address" name="email" type="email" placeholder="you@example.com" required />
                    </div>
                    <InlineError message={error} errorStep={errorStep} currentStep={1} />
                    <div className="mt-6 flex justify-end">
                      <Button type="button" color="primary" onClick={handleNext}>Next</Button>
                    </div>
                  </StepPanel>

                  {/* Step 2: Campus Information */}
                  <StepPanel isActive={step === 2}>
                    <h3 className="text-lg font-semibold text-gray-900">Campus Information</h3>
                    <p className="mb-6 mt-1 text-sm text-gray-500">Tell us where you are and what you study.</p>
                    <div className="space-y-5">
                      <SelectField label="University / Institution" name="institution" required>
                        <option value="">Select your institution</option>
                        {INSTITUTIONS.map((inst) => <option key={inst} value={inst}>{inst}</option>)}
                      </SelectField>
                      <TextField label="Department / Course" name="department" type="text" placeholder="e.g. Computer Science" required />
                      <SelectField label="Year of Study" name="year_of_study" required>
                        <option value="">Select year</option>
                        {YEAR_OPTIONS.map((year) => <option key={year} value={year}>{year}</option>)}
                      </SelectField>
                    </div>
                    <InlineError message={error} errorStep={errorStep} currentStep={2} />
                    <div className="mt-6 flex justify-between gap-3">
                      <Button type="button" variant="outline" onClick={handlePrev}>Previous</Button>
                      <Button type="button" color="primary" onClick={handleNext}>Next</Button>
                    </div>
                  </StepPanel>

                  {/* Step 3: Social Media Reach */}
                  <StepPanel isActive={step === 3}>
                    <h3 className="text-lg font-semibold text-gray-900">Your Social Media Reach</h3>
                    <p className="mb-6 mt-1 text-sm text-gray-500">
                      We&apos;re not looking for the biggest accounts — we want real, engaged audiences.
                    </p>
                    <div className="space-y-5">
                      <TextField label="Instagram Handle" name="instagram_handle" type="text" placeholder="@yourhandle (leave blank if none)" />
                      <TextField label="TikTok Handle" name="tiktok_handle" type="text" placeholder="@yourhandle (leave blank if none)" />
                      <TextField label="Twitter / X Handle" name="twitter_handle" type="text" placeholder="@yourhandle" />
                      <SelectField label="Approximate Total Followers (all platforms)" name="total_followers" required>
                        <option value="">Select range</option>
                        {FOLLOWER_RANGES.map((r) => <option key={r} value={r}>{r}</option>)}
                      </SelectField>
                      <RadioGroup label="How often do you post content online?" name="posting_frequency" options={POSTING_FREQUENCIES} required />
                    </div>
                    <InlineError message={error} errorStep={errorStep} currentStep={3} />
                    <div className="mt-6 flex justify-between gap-3">
                      <Button type="button" variant="outline" onClick={handlePrev}>Previous</Button>
                      <Button type="button" color="primary" onClick={handleNext}>Next</Button>
                    </div>
                  </StepPanel>

                  {/* Step 4: WhatsApp Network */}
                  <StepPanel isActive={step === 4}>
                    <h3 className="text-lg font-semibold text-gray-900">Your WhatsApp Network</h3>
                    <p className="mb-6 mt-1 text-sm text-gray-500">
                      WhatsApp is Enugu&apos;s most powerful distribution channel — this matters a lot.
                    </p>
                    <div className="space-y-5">
                      <RadioGroup
                        label="How many WhatsApp groups are you active in?"
                        description="Include faculty, hostel, department, and personal groups."
                        name="whatsapp_groups_count"
                        options={WHATSAPP_GROUP_RANGES}
                        required
                      />
                      <RadioGroup
                        label="Are you an admin in any WhatsApp groups?"
                        name="is_whatsapp_admin"
                        options={WHATSAPP_ADMIN_OPTIONS}
                        required
                      />
                      <CheckboxGroup
                        label="Which types of groups are you most active in?"
                        description="Select all that apply."
                        name="active_group_types"
                        options={GROUP_TYPES}
                        selectedValues={activeGroupTypes}
                        onChange={setActiveGroupTypes}
                      />
                    </div>
                    <InlineError message={error} errorStep={errorStep} currentStep={4} />
                    <div className="mt-6 flex justify-between gap-3">
                      <Button type="button" variant="outline" onClick={handlePrev}>Previous</Button>
                      <Button type="button" color="primary" onClick={handleNext}>Next</Button>
                    </div>
                  </StepPanel>

                  {/* Step 5: Campus Presence & Influence */}
                  <StepPanel isActive={step === 5}>
                    <h3 className="text-lg font-semibold text-gray-900">Campus Presence & Influence</h3>
                    <p className="mb-6 mt-1 text-sm text-gray-500">
                      We&apos;re looking for people who already have reach on campus — not just online.
                    </p>
                    <div className="space-y-5">
                      <CheckboxGroup
                        label="What campus activities or roles are you involved in?"
                        description="Select all that apply — be honest, this isn't a competition."
                        name="campus_activities"
                        options={CAMPUS_ACTIVITIES}
                        selectedValues={campusActivities}
                        onChange={setCampusActivities}
                      />
                      <RadioGroup
                        label="How would you describe your reputation on campus?"
                        name="campus_reputation"
                        options={CAMPUS_REPUTATION_OPTIONS}
                        required
                      />
                    </div>
                    <InlineError message={error} errorStep={errorStep} currentStep={5} />
                    <div className="mt-6 flex justify-between gap-3">
                      <Button type="button" variant="outline" onClick={handlePrev}>Previous</Button>
                      <Button type="button" color="primary" onClick={handleNext}>Next</Button>
                    </div>
                  </StepPanel>

                  {/* Step 6: Motivation & Brand Fit */}
                  <StepPanel isActive={step === 6}>
                    <h3 className="text-lg font-semibold text-gray-900">Motivation & Brand Fit</h3>
                    <p className="mb-6 mt-1 text-sm text-gray-500">
                      We need to understand why you want this and how you think.
                    </p>
                    <div className="space-y-5">
                      <div>
                        <label className="mb-2 block text-sm font-semibold text-gray-900">
                          Why do you want to be a Peekup Campus Ambassador? <span className="text-orange-500">*</span>
                        </label>
                        <p className="mb-2 text-xs text-gray-500">
                          Be specific. We can tell the difference between someone who wants to build something and someone who just wants the stipend.
                        </p>
                        <textarea name="why_ambassador" rows={4} required className={textareaClasses} placeholder="Tell us why you're excited about Peekup and this role..." />
                      </div>
                      <div>
                        <label className="mb-2 block text-sm font-semibold text-gray-900">
                          Describe a time you convinced a group of people to try something new <span className="text-orange-500">*</span>
                        </label>
                        <p className="mb-2 text-xs text-gray-500">
                          This is the most important question. It doesn&apos;t have to be big — it just needs to be real.
                        </p>
                        <textarea name="convince_story" rows={4} required className={textareaClasses} placeholder="Share a specific story..." />
                      </div>
                      <RadioGroup
                        label="Are you interested in the Lead Ambassador role?"
                        description="Lead Ambassadors earn ₦15k–₦20k/month, coordinate other ambassadors, and are first in line for future paid roles."
                        name="lead_ambassador_interest"
                        options={LEAD_OPTIONS}
                        required
                      />
                      <RadioGroup
                        label="How many hours per week can you realistically commit?"
                        description="Be honest. We'd rather know upfront."
                        name="hours_per_week"
                        options={HOURS_OPTIONS}
                        required
                      />
                    </div>
                    <InlineError message={error} errorStep={errorStep} currentStep={6} />
                    <div className="mt-6 flex justify-between gap-3">
                      <Button type="button" variant="outline" onClick={handlePrev}>Previous</Button>
                      <Button type="button" color="primary" onClick={handleNext}>Next</Button>
                    </div>
                  </StepPanel>

                  {/* Step 7: Voice Note */}
                  <StepPanel isActive={step === 7}>
                    <h3 className="text-lg font-semibold text-gray-900">The Voice Note</h3>
                    <div className="mt-3 mb-6 overflow-hidden rounded-2xl border border-orange-200/60 bg-gradient-to-r from-orange-50 to-orange-50/50 p-5">
                      <div className="flex items-start gap-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-500/10">
                          <MegaphoneIcon className="h-4 w-4 text-orange-600" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-orange-900">Optional but prioritised</p>
                          <p className="mt-0.5 text-sm text-orange-700/80">
                            Applications with voice notes are reviewed first.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-5">
                      <div>
                        <label className="mb-2 block text-sm font-semibold text-gray-900">Voice Note Link</label>
                        <p className="mb-2 text-xs text-gray-500">
                          Record a 60-second voice note answering: &ldquo;Why does Peekup belong in Enugu, and why are you the right person to represent it on your campus?&rdquo; Upload to Google Drive, Dropbox, or any file-sharing link.
                        </p>
                        <TextField name="voice_note_link" type="url" placeholder="https://drive.google.com/file/..." />
                      </div>
                      <p className="text-xs text-gray-400">
                        Can&apos;t do a voice note? No problem — skip it.
                      </p>
                    </div>
                    <InlineError message={error} errorStep={errorStep} currentStep={7} />
                    <div className="mt-6 flex justify-between gap-3">
                      <Button type="button" variant="outline" onClick={handlePrev}>Previous</Button>
                      <Button type="button" color="primary" onClick={handleNext}>Next</Button>
                    </div>
                  </StepPanel>

                  {/* Step 8: Availability & Agreement */}
                  <StepPanel isActive={step === 8}>
                    <h3 className="text-lg font-semibold text-gray-900">Availability & Agreement</h3>
                    <p className="mb-6 mt-1 text-sm text-gray-500">Final checks before you submit.</p>
                    <div className="space-y-5">
                      <RadioGroup
                        label="Are you available for the full 6-week program?"
                        description="We understand exams and coursework exist — but consistent availability is essential."
                        name="availability"
                        options={AVAILABILITY_OPTIONS}
                        required
                      />
                      <div>
                        <label className="mb-2 block text-sm font-semibold text-gray-900">
                          Any important dates or commitments we should know about?
                        </label>
                        <textarea
                          name="important_dates"
                          rows={3}
                          className={textareaClasses}
                          placeholder="Exams, travel, NYSC, family events — anything that might affect your availability"
                        />
                      </div>
                      <SelectField label="How did you hear about this?" name="referral_source" required>
                        <option value="">Select an option</option>
                        {REFERRAL_SOURCES.map((source) => <option key={source} value={source}>{source}</option>)}
                      </SelectField>

                      <label className="group flex cursor-pointer items-start gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3.5 transition-all has-[:checked]:border-orange-400 has-[:checked]:bg-orange-50 has-[:checked]:shadow-[0_0_0_1px_theme(colors.orange.400)]">
                        <input
                          type="checkbox"
                          name="accuracy_confirmed"
                          required
                          className="mt-0.5 h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                        />
                        <span className="text-sm text-gray-700 group-has-[:checked]:font-medium group-has-[:checked]:text-gray-900">
                          I confirm that everything I&apos;ve shared in this application is accurate.
                          I understand that misrepresentation disqualifies my application.
                        </span>
                      </label>
                    </div>
                    <InlineError message={error} errorStep={errorStep} currentStep={8} />
                    <div className="mt-6 flex justify-between gap-3">
                      <Button type="button" variant="outline" onClick={handlePrev}>Previous</Button>
                      <Button type="submit" color="primary" disabled={isLoading}>
                        {isLoading ? 'Submitting...' : 'Submit Application'}
                      </Button>
                    </div>
                  </StepPanel>
                </form>
              </div>
            </div>

            <p className="mt-8 text-center text-xs text-gray-500">
              By submitting, you agree to be contacted by the Peekup team via
              WhatsApp or phone. We do not share your information with third
              parties.{' '}
              <Link href="/privacy" className="text-orange-600 underline hover:text-orange-700">
                Privacy Policy
              </Link>
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}
