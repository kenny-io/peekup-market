'use client'

import Link from 'next/link'
import { useId } from 'react'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

function OrbitalBackground(props: React.ComponentPropsWithoutRef<'div'>) {
  const id = useId()

  return (
    <div {...props}>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-slow"
      >
        <circle cx="513" cy="513" r="512" stroke="#e2e8f0" strokeOpacity="0.5" />
        <circle cx="513" cy="513" r="380" stroke="#e2e8f0" strokeOpacity="0.35" />
        <circle cx="513" cy="513" r="248" stroke="#e2e8f0" strokeOpacity="0.2" />
        <path
          d="M513 1025C230.23 1025 1 795.77 1 513"
          stroke={`url(#${id}-g1)`}
          strokeLinecap="round"
          strokeWidth="2"
        />
        <defs>
          <linearGradient id={`${id}-g1`} x1="1" y1="513" x2="1" y2="1025" gradientUnits="userSpaceOnUse">
            <stop stopColor="#f97316" />
            <stop offset="1" stopColor="#f97316" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-reverse-slower"
      >
        <path
          d="M913 513c0 220.914-179.086 400-400 400"
          stroke={`url(#${id}-g2)`}
          strokeLinecap="round"
          strokeWidth="2"
        />
        <defs>
          <linearGradient id={`${id}-g2`} x1="913" y1="513" x2="913" y2="913" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ffb347" />
            <stop offset="1" stopColor="#ffb347" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

function ArrowLeftIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" {...props}>
      <path fillRule="evenodd" d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z" clipRule="evenodd" />
    </svg>
  )
}

function RoadmapStep({
  label,
  active,
  current,
}: {
  label: string
  active?: boolean
  current?: boolean
}) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={
          active
            ? 'flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-600 shadow-[0_0_0_4px_rgba(249,115,22,0.15)]'
            : current
              ? 'flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-dashed border-orange-400 bg-orange-50'
              : 'flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white'
        }
      >
        {active ? (
          <svg viewBox="0 0 12 12" fill="none" className="h-3 w-3">
            <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : current ? (
          <span className="block h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
        ) : (
          <span className="block h-1.5 w-1.5 rounded-full bg-gray-300" />
        )}
      </div>
      <span
        className={
          active
            ? 'text-sm font-semibold text-gray-900'
            : current
              ? 'text-sm font-semibold text-orange-700'
              : 'text-sm text-gray-400'
        }
      >
        {label}
      </span>
    </div>
  )
}

export type ComingSoonFeatureProps = {
  productName: string
  headline: string
  body: string
  features?: string[]
  roadmapLabel: string
}

export function ComingSoonFeature({
  productName,
  headline,
  body,
  features,
  roadmapLabel,
}: ComingSoonFeatureProps) {
  return (
    <section className="relative min-h-[85vh] overflow-hidden bg-gradient-to-b from-gray-50 via-orange-50/30 to-gray-50">
      {/* Orbital background — reuses Hero's motif */}
      <OrbitalBackground className="pointer-events-none absolute top-1/2 left-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 opacity-40 sm:h-[1100px] sm:w-[1100px]" />

      {/* Oversized typographic watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-[15%] select-none text-center text-[clamp(5rem,18vw,14rem)] font-bold leading-none tracking-tighter text-gray-900/[0.03]"
      >
        {productName}
      </div>

      <Container className="relative z-10 flex flex-col items-center pb-24 pt-28 sm:pt-36">
        {/* Back link */}
        <Link
          href="/"
          className="group mb-16 inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-gray-900"
        >
          <ArrowLeftIcon className="transition-transform group-hover:-translate-x-0.5" />
          Home
        </Link>

        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-orange-200/80 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />
          </span>
          <span className="text-xs font-semibold uppercase tracking-widest text-orange-800">
            Coming soon
          </span>
        </div>

        {/* Product name */}
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
          {productName}
        </p>

        {/* Headline */}
        <h1 className="max-w-xl text-center text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
          {headline}
        </h1>

        {/* Body */}
        <p className="mt-5 max-w-md text-center text-base leading-relaxed text-gray-600 sm:text-lg">
          {body}
        </p>

        {/* Feature previews */}
        {features && features.length > 0 && (
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {features.map((f) => (
              <span
                key={f}
                className="rounded-full border border-gray-200/80 bg-white/60 px-3.5 py-1.5 text-xs font-medium text-gray-500 backdrop-blur-sm"
              >
                {f}
              </span>
            ))}
          </div>
        )}

        {/* Roadmap widget */}
        <div className="mt-12 w-full max-w-xs rounded-2xl border border-gray-200/80 bg-white/70 p-5 shadow-sm backdrop-blur-sm">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-gray-400">
            Launch roadmap
          </p>
          <div className="space-y-3">
            <RoadmapStep label="Marketplace" active />
            <div className="ml-3.5 h-4 w-px bg-gradient-to-b from-orange-300 to-orange-200" />
            <RoadmapStep label={roadmapLabel} current />
            <div className="ml-3.5 h-4 w-px bg-gradient-to-b from-gray-200 to-transparent" />
            <RoadmapStep label="More coming" />
          </div>
        </div>

        {/* CTAs */}
        <div className="mt-12 flex flex-col items-stretch gap-3 sm:flex-row sm:gap-4">
          <Button href="/waitlist" color="primary">
            Join the waitlist
          </Button>
          <Button href="/#services" variant="outline" color="neutral">
            Explore the marketplace
          </Button>
        </div>
      </Container>
    </section>
  )
}
