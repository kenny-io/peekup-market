import Link from 'next/link'
import { type Metadata } from 'next'

import { Container } from '@/components/Container'
import { SupportLiveStatus } from '@/components/SupportLiveStatus'

export const metadata: Metadata = {
  title: 'Support - Talk to a real person at Peekup',
  description:
    'Get help with Peekup orders, payments, refunds, deliveries, and your account. WhatsApp, call, email or visit our Enugu desk — we reply within minutes during business hours.',
  openGraph: {
    title: 'Support - Talk to a real person at Peekup',
    description:
      'Order trouble, payment hiccups, vendor questions — talk to a real person on our team in Enugu.',
    url: 'https://usepeekup.com/support',
    images: [{ url: '/seo/peekupseo.png', width: 1200, height: 630 }],
  },
  twitter: {
    title: 'Support - Talk to a real person at Peekup',
    description:
      'Get help with Peekup orders, deliveries, payments and your account. We reply fast.',
    images: ['/seo/peekupseo.png'],
  },
  alternates: {
    canonical: 'https://usepeekup.com/support',
  },
}

const supportContact = {
  phoneDisplay: '+234 803 892 7241',
  phoneTel: '+2348038927241',
  whatsapp: 'https://wa.me/2348038927241',
  emailGeneral: 'hello@usepeekup.com',
  emailOps: 'operations@usepeekup.com',
  emailPrivacy: 'privacy@usepeekup.com',
  emailLegal: 'legal@usepeekup.com',
  address: '450 Ogui Road, Enugu',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=450+Ogui+Road+Enugu+Nigeria',
}

/* ─────────────────────────────────────────── Icons */

function WhatsAppIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function PhoneIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
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
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function MapPinIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function ArrowUpRightIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  )
}

function ChevronIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

function PackageIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <path d="M16.5 9.4 7.55 4.24" />
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <path d="M3.27 6.96 12 12.01l8.73-5.05" />
      <path d="M12 22.08V12" />
    </svg>
  )
}

function CardIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  )
}

function UserIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

function HelmetIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <path d="M3 14a9 9 0 0 1 18 0" />
      <path d="M3 14h18" />
      <path d="M3 14v3a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3" />
      <path d="M9 14V8" />
    </svg>
  )
}

function StoreIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
      <path d="M2 7h20" />
      <path d="M22 7v3a2 2 0 0 1-2 2 2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7" />
    </svg>
  )
}

function ShieldIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  )
}

function ClockIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function AlertIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  )
}

/* ─────────────────────────────────────────── Data */

const channels = [
  {
    key: 'whatsapp',
    eyebrow: 'Best for active orders',
    title: 'WhatsApp',
    description:
      'Fastest way to reach a human. Send a screenshot of your order or just say hi.',
    actionLabel: supportContact.phoneDisplay,
    href: supportContact.whatsapp,
    external: true,
    response: 'Replies in ~5 min',
    accent: 'emerald',
    icon: WhatsAppIcon,
  },
  {
    key: 'call',
    eyebrow: 'Best for urgent issues',
    title: 'Call us',
    description:
      'Speak with the support desk in Enugu. Mon–Fri 8am–9pm, Sat 9am–8pm WAT.',
    actionLabel: supportContact.phoneDisplay,
    href: `tel:${supportContact.phoneTel}`,
    external: false,
    response: 'Picked up live',
    accent: 'orange',
    icon: PhoneIcon,
  },
  {
    key: 'email',
    eyebrow: 'Best for everything else',
    title: 'Email',
    description:
      'Long context, attachments, anything that isn’t time-critical. We read every message.',
    actionLabel: supportContact.emailGeneral,
    href: `mailto:${supportContact.emailGeneral}`,
    external: false,
    response: 'Replies within 24 hrs',
    accent: 'navy',
    icon: MailIcon,
  },
  {
    key: 'visit',
    eyebrow: 'Best for in-person',
    title: 'Visit the desk',
    description:
      'Walk in, drop off a return, or pick up a forgotten item. We’re on Ogui Road.',
    actionLabel: supportContact.address,
    href: supportContact.mapsUrl,
    external: true,
    response: 'Open desk hours',
    accent: 'cream',
    icon: MapPinIcon,
  },
] as const

type ChannelAccent = (typeof channels)[number]['accent']

const accentStyles: Record<
  ChannelAccent,
  {
    iconWrap: string
    chip: string
    hoverBorder: string
    cornerLine: string
  }
> = {
  emerald: {
    iconWrap: 'bg-emerald-500 text-white',
    chip: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
    hoverBorder: 'hover:border-emerald-300',
    cornerLine: 'bg-emerald-500',
  },
  orange: {
    iconWrap: 'bg-orange-500 text-white',
    chip: 'bg-orange-50 text-orange-700 ring-orange-200',
    hoverBorder: 'hover:border-orange-300',
    cornerLine: 'bg-orange-500',
  },
  navy: {
    iconWrap: 'bg-gray-900 text-white',
    chip: 'bg-gray-100 text-gray-700 ring-gray-200',
    hoverBorder: 'hover:border-gray-400',
    cornerLine: 'bg-gray-900',
  },
  cream: {
    iconWrap: 'bg-orange-50 text-orange-700 ring-1 ring-orange-200',
    chip: 'bg-gray-100 text-gray-700 ring-gray-200',
    hoverBorder: 'hover:border-orange-200',
    cornerLine: 'bg-orange-300',
  },
}

const topics = [
  {
    icon: PackageIcon,
    title: 'Orders & delivery',
    description: 'Tracking, late riders, missing or wrong items, returns.',
    href: '#faqs',
  },
  {
    icon: CardIcon,
    title: 'Payments & refunds',
    description: 'Failed charges, double charges, refund timelines, receipts.',
    href: '#faqs',
  },
  {
    icon: UserIcon,
    title: 'Account & login',
    description: 'Sign-in trouble, phone changes, deleting your account.',
    href: '/delete-account',
  },
  {
    icon: HelmetIcon,
    title: 'Riders & dispatch',
    description: 'Apply to ride, payouts, delivery zones, kit replacements.',
    href: '/go',
  },
  {
    icon: StoreIcon,
    title: 'Vendors & business',
    description: 'List your store, B2B logistics, corporate wallets.',
    href: '/vendors',
  },
  {
    icon: ShieldIcon,
    title: 'Privacy & data',
    description: 'Data requests, account deletion, security and consent.',
    href: '/privacy',
  },
] as const

const faqs = [
  {
    q: 'My order is taking too long. What do I do?',
    a: "Open the order in the app to see your rider's live location. If it's been more than 15 minutes past the estimated time, message us on WhatsApp with your order ID and we'll chase the rider directly. If it's a vendor delay, we'll let you know in real-time.",
  },
  {
    q: 'I was charged but the order didn’t go through.',
    a: 'This usually means the bank confirmed the debit before our payment processor confirmed the order. Pending charges typically reverse within 24 hours. If it has been longer, send us your transaction reference and the email/phone tied to your account and we will trace it with the bank.',
  },
  {
    q: 'How do I get a refund?',
    a: 'For missing items, wrong orders, or vendor cancellations, refunds are issued automatically to your Peekup wallet within minutes. If you would prefer a refund back to your original payment method, message us within 7 days of the order.',
  },
  {
    q: 'I need to change my delivery address after ordering.',
    a: "If the rider hasn't picked up your items yet, you can update the address from the order details screen. After pickup, message us on WhatsApp and we'll redirect the rider if the new address is in range.",
  },
  {
    q: 'My item is damaged or wrong.',
    a: 'Tap Report on the order, attach a photo, and submit. We refund or replace within the hour during business hours. For perishables (food, ice cream), we typically resolve same-day.',
  },
  {
    q: 'How do I report a safety concern with a rider?',
    a: 'Email operations@usepeekup.com or call +234 803 892 7241 immediately. We investigate every safety report and follow up within 24 hours. Your name is never shared with the rider.',
  },
  {
    q: 'How do I delete my Peekup account?',
    a: (
      <>
        Visit our{' '}
        <Link
          href="/delete-account"
          className="text-orange-600 underline underline-offset-2 hover:text-orange-700"
        >
          account deletion page
        </Link>{' '}
        for the full process. We delete all personal data within 30 days, except
        records we&rsquo;re legally required to keep.
      </>
    ),
  },
  {
    q: 'I represent a business. How do I list with Peekup?',
    a: (
      <>
        Head to our{' '}
        <Link
          href="/vendors"
          className="text-orange-600 underline underline-offset-2 hover:text-orange-700"
        >
          vendors page
        </Link>{' '}
        to apply, or email{' '}
        <a
          href={`mailto:${supportContact.emailGeneral}`}
          className="text-orange-600 underline underline-offset-2 hover:text-orange-700"
        >
          {supportContact.emailGeneral}
        </a>{' '}
        with your store name and category. Onboarding takes 3-5 days.
      </>
    ),
  },
] as const

const specialDesks = [
  {
    label: 'Operations & deliveries',
    email: supportContact.emailOps,
  },
  {
    label: 'Privacy & data requests',
    email: supportContact.emailPrivacy,
  },
  {
    label: 'Legal & compliance',
    email: supportContact.emailLegal,
  },
] as const

/* ─────────────────────────────────────────── Page */

export default function SupportPage() {
  return (
    <>
      {/* ───────────── HERO ───────────── */}
      <section className="relative overflow-hidden bg-gray-900 text-white">
        {/* Diagonal stripe pattern (different from ambassadors' grid for distinction) */}
        <svg
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.04]"
        >
          <defs>
            <pattern
              id="support-diagonal"
              width="28"
              height="28"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(35)"
            >
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="28"
                stroke="white"
                strokeWidth="0.6"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#support-diagonal)" />
        </svg>

        {/* Ambient orange orb */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 right-[-10%] h-[520px] w-[620px] rounded-full bg-orange-600/20 blur-[140px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 left-[-10%] h-[400px] w-[500px] rounded-full bg-orange-700/10 blur-[120px]"
        />

        {/* Gigantic background wordmark — editorial flourish */}
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 -bottom-12 hidden select-none items-end pr-6 lg:flex"
        >
          <span className="text-[14rem] leading-none font-extrabold tracking-tighter text-white/[0.03]">
            HELP
          </span>
        </div>

        <Container className="relative pt-20 pb-24 sm:pt-28 sm:pb-32 lg:pt-36 lg:pb-40">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
            {/* Headline column */}
            <div className="lg:col-span-7">
              <div className="mb-8 flex items-center gap-3 text-xs font-medium tracking-[0.25em] text-white/50 uppercase">
                <span className="h-px w-8 bg-white/30" />
                <span>Peekup · Support</span>
              </div>

              <h1 className="text-4xl leading-[1.05] font-extrabold tracking-tight text-white sm:text-5xl lg:text-[5rem]">
                We&rsquo;re right here{' '}
                <span className="bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text font-extrabold text-transparent italic">
                  when you need us
                </span>
                .
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-relaxed text-gray-300 sm:text-xl">
                Order trouble. Payment hiccups. A vendor question. A driver
                that&rsquo;s late. Talk to a real person on our team in Enugu —
                most messages get a reply in under five minutes.
              </p>

              <div className="mt-10">
                <SupportLiveStatus />
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={supportContact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-2xl bg-[#25D366] px-7 py-4 text-base font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:bg-[#1ebe57]"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Chat on WhatsApp
                  <ArrowUpRightIcon className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href={`tel:${supportContact.phoneTel}`}
                  className="group inline-flex items-center justify-center gap-2.5 rounded-2xl border border-white/20 px-7 py-4 text-base font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
                >
                  <PhoneIcon className="h-5 w-5" />
                  Call {supportContact.phoneDisplay}
                </a>
              </div>
            </div>

            {/* Stat / signature column */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur">
                {/* Card top accent */}
                <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-orange-500 via-orange-400 to-transparent" />

                <p className="text-xs font-semibold tracking-[0.2em] text-orange-300 uppercase">
                  At a glance
                </p>

                <dl className="mt-6 space-y-6">
                  <div>
                    <dt className="text-xs font-medium tracking-wider text-white/50 uppercase">
                      Median first response
                    </dt>
                    <dd className="mt-1 flex items-baseline gap-2 text-4xl font-extrabold text-white">
                      4<span className="text-lg font-medium text-white/60">min</span>
                      <span className="ml-2 text-sm font-medium text-emerald-300">
                        ↓ on WhatsApp
                      </span>
                    </dd>
                  </div>

                  <div className="h-px w-full bg-white/10" />

                  <div>
                    <dt className="text-xs font-medium tracking-wider text-white/50 uppercase">
                      Issues resolved same day
                    </dt>
                    <dd className="mt-1 text-4xl font-extrabold text-white">
                      92<span className="text-lg font-medium text-white/60">%</span>
                    </dd>
                  </div>

                  <div className="h-px w-full bg-white/10" />

                  <div>
                    <dt className="text-xs font-medium tracking-wider text-white/50 uppercase">
                      Desk hours (WAT)
                    </dt>
                    <dd className="mt-2 space-y-1.5 text-sm text-white/80">
                      <div className="flex justify-between">
                        <span>Mon — Fri</span>
                        <span className="font-semibold tabular-nums">
                          8am — 9pm
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span className="font-semibold tabular-nums">
                          9am — 8pm
                        </span>
                      </div>
                      <div className="flex justify-between text-white/40">
                        <span>Sunday</span>
                        <span className="font-semibold">Email only</span>
                      </div>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ───────────── CHANNELS ───────────── */}
      <section className="relative bg-gray-50 py-20 sm:py-28">
        <Container>
          <div className="flex items-end justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 text-xs font-mono font-semibold tracking-[0.2em] text-orange-600 uppercase tabular-nums">
                <span>01 / 04</span>
                <span className="h-px w-10 bg-orange-300" />
                <span>Reach us</span>
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Pick the channel that fits the moment.
              </h2>
              <p className="mt-4 max-w-xl text-base text-gray-600 sm:text-lg">
                Four ways to reach us — same team, same desk, same Enugu phone
                number. Use whichever feels right.
              </p>
            </div>
          </div>

          <ul className="mt-14 grid gap-5 sm:grid-cols-2">
            {channels.map((c) => {
              const accent = accentStyles[c.accent]
              const Icon = c.icon
              const aProps = c.external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {}

              return (
                <li key={c.key}>
                  <a
                    href={c.href}
                    {...aProps}
                    className={`group relative block h-full overflow-hidden rounded-3xl border border-gray-200 bg-white p-7 transition-all duration-300 ${accent.hoverBorder} hover:-translate-y-0.5 hover:shadow-xl hover:shadow-gray-900/5`}
                  >
                    <span
                      aria-hidden
                      className={`absolute inset-x-7 top-0 h-[3px] origin-left scale-x-0 rounded-b ${accent.cornerLine} transition-transform duration-500 group-hover:scale-x-100`}
                    />
                    <div className="flex items-start justify-between gap-6">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl ${accent.iconWrap}`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset ${accent.chip}`}
                      >
                        <ClockIcon className="h-3 w-3" />
                        {c.response}
                      </span>
                    </div>

                    <p className="mt-7 text-[10px] font-bold tracking-[0.18em] text-gray-400 uppercase">
                      {c.eyebrow}
                    </p>
                    <h3 className="mt-1 text-2xl font-bold text-gray-900">
                      {c.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                      {c.description}
                    </p>

                    <div className="mt-6 flex items-center justify-between gap-3 border-t border-gray-100 pt-5">
                      <span className="truncate text-sm font-semibold text-gray-900">
                        {c.actionLabel}
                      </span>
                      <ArrowUpRightIcon className="h-5 w-5 flex-none text-gray-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gray-900" />
                    </div>
                  </a>
                </li>
              )
            })}
          </ul>
        </Container>
      </section>

      {/* ───────────── TOPICS ───────────── */}
      <section className="border-t border-gray-200 bg-white py-20 sm:py-28">
        <Container>
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-xs font-mono font-semibold tracking-[0.2em] text-orange-600 uppercase tabular-nums">
              <span>02 / 04</span>
              <span className="h-px w-10 bg-orange-300" />
              <span>Get help with</span>
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Browse by topic.
            </h2>
            <p className="mt-4 text-base text-gray-600 sm:text-lg">
              Quick paths to the most common things people ask about.
            </p>
          </div>

          <ul className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-gray-200 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((t) => {
              const Icon = t.icon
              const isExternal = t.href.startsWith('http')
              const isAnchor = t.href.startsWith('#')

              const className =
                'group flex h-full items-start gap-5 bg-white p-7 transition-colors hover:bg-orange-50/40'

              const inner = (
                <>
                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-gray-100 text-gray-700 transition-colors group-hover:bg-orange-100 group-hover:text-orange-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="flex items-center gap-2 text-base font-semibold text-gray-900">
                      {t.title}
                      <ChevronIcon className="h-4 w-4 -rotate-90 text-gray-400 transition-transform group-hover:translate-x-0.5 group-hover:text-orange-600" />
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-gray-600">
                      {t.description}
                    </p>
                  </div>
                </>
              )

              return (
                <li key={t.title}>
                  {isAnchor ? (
                    <a href={t.href} className={className}>
                      {inner}
                    </a>
                  ) : isExternal ? (
                    <a
                      href={t.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={className}
                    >
                      {inner}
                    </a>
                  ) : (
                    <Link href={t.href} className={className}>
                      {inner}
                    </Link>
                  )}
                </li>
              )
            })}
          </ul>
        </Container>
      </section>

      {/* ───────────── FAQS ───────────── */}
      <section
        id="faqs"
        className="scroll-mt-20 border-t border-gray-200 bg-gray-50 py-20 sm:py-28"
      >
        <Container>
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-24">
                <div className="flex items-center gap-3 text-xs font-mono font-semibold tracking-[0.2em] text-orange-600 uppercase tabular-nums">
                  <span>03 / 04</span>
                  <span className="h-px w-10 bg-orange-300" />
                  <span>Quick answers</span>
                </div>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                  The questions we hear most.
                </h2>
                <p className="mt-5 text-base text-gray-600">
                  Tap any question to expand. If your situation isn&rsquo;t
                  here, message us — every conversation makes this list better.
                </p>
                <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm text-gray-700 ring-1 ring-gray-200">
                  <ClockIcon className="h-4 w-4 text-orange-500" />
                  Avg first reply: 4 min on WhatsApp
                </div>
              </div>
            </div>

            <ul className="lg:col-span-8">
              {faqs.map((f, i) => (
                <li
                  key={i}
                  className="border-b border-gray-200 first:border-t"
                >
                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 transition-colors hover:text-orange-700">
                      <span className="flex items-baseline gap-4">
                        <span className="font-mono text-sm font-medium tabular-nums text-orange-500">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="text-base font-semibold text-gray-900 sm:text-lg">
                          {f.q}
                        </span>
                      </span>
                      <span
                        aria-hidden
                        className="mt-1 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-white text-gray-600 ring-1 ring-gray-200 transition-all group-open:rotate-180 group-open:bg-orange-500 group-open:text-white group-open:ring-orange-500"
                      >
                        <ChevronIcon className="h-4 w-4" />
                      </span>
                    </summary>
                    <div className="pb-6 pl-10 text-base leading-relaxed text-gray-600">
                      {f.a}
                    </div>
                  </details>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* ───────────── SPECIALIST DESKS ───────────── */}
      <section className="border-t border-gray-200 bg-white py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 text-xs font-mono font-semibold tracking-[0.2em] text-orange-600 uppercase tabular-nums">
                <span>04 / 04</span>
                <span className="h-px w-10 bg-orange-300" />
                <span>Specialist desks</span>
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                For specific kinds of asks.
              </h2>
              <p className="mt-5 text-base text-gray-600">
                Our general inbox handles 95% of what comes in. For everything
                else, these go straight to the right team.
              </p>
            </div>

            <ul className="lg:col-span-7">
              {specialDesks.map((d, i) => (
                <li
                  key={d.email}
                  className={`flex flex-col gap-2 py-6 sm:flex-row sm:items-center sm:justify-between ${
                    i !== specialDesks.length - 1
                      ? 'border-b border-gray-200'
                      : ''
                  }`}
                >
                  <span className="text-base font-semibold text-gray-900">
                    {d.label}
                  </span>
                  <a
                    href={`mailto:${d.email}`}
                    className="inline-flex items-center gap-2 text-base font-medium text-gray-700 transition-colors hover:text-orange-600"
                  >
                    {d.email}
                    <ArrowUpRightIcon className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* ───────────── CLOSING ASSURANCE BAND ───────────── */}
      <section className="relative overflow-hidden bg-gray-900 text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
        >
          <svg className="h-full w-full">
            <defs>
              <pattern
                id="support-grid-bottom"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M0 40L40 0M-10 10L10 -10M30 50L50 30"
                  stroke="white"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#support-grid-bottom)" />
          </svg>
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-1/2 h-[450px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-600/15 blur-[140px]"
        />

        <Container className="relative py-24 sm:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-1.5 text-xs font-semibold tracking-[0.15em] text-orange-200 uppercase">
              <AlertIcon className="h-3.5 w-3.5" />
              Safety promise
            </div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Nothing falls through{' '}
              <span className="bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text font-extrabold text-transparent italic">
                the cracks
              </span>
              .
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg">
              Every unresolved issue gets escalated to a human at Peekup within
              4 business hours, 12 hours otherwise. For safety concerns
              involving a rider or vendor, we respond inside 1 hour, 24/7.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={supportContact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-[#25D366] px-7 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-[#1ebe57]"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Open a WhatsApp chat
              </a>
              <a
                href={`mailto:${supportContact.emailGeneral}`}
                className="inline-flex items-center justify-center gap-2.5 rounded-2xl border border-white/20 px-7 py-4 text-base font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
              >
                <MailIcon className="h-5 w-5" />
                Email {supportContact.emailGeneral}
              </a>
            </div>

            <p className="mt-12 inline-flex items-center gap-2 text-sm text-white/60">
              <MapPinIcon className="h-4 w-4 text-orange-400" />
              <span>
                Desk address: <strong className="text-white/80">{supportContact.address}</strong>
              </span>
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}
