'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'

/* ─── Types ─── */

interface Application {
  id: string
  first_name: string
  last_name: string
  phone: string
  email: string
  institution: string
  department: string
  year_of_study: string
  instagram_handle: string | null
  tiktok_handle: string | null
  twitter_handle: string | null
  total_followers: string
  posting_frequency: string
  whatsapp_groups_count: string
  is_whatsapp_admin: string
  active_group_types: string
  campus_activities: string
  campus_reputation: string
  why_ambassador: string
  convince_story: string
  lead_ambassador_interest: string
  hours_per_week: string
  voice_note_link: string | null
  availability: string
  important_dates: string | null
  referral_source: string
  status: string
  created_at: string
}

/* ─── Icons ─── */

function LockIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0110 0v4" />
    </svg>
  )
}

function SearchIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <circle cx="11" cy="11" r="8" />
      <path strokeLinecap="round" d="m21 21-4.35-4.35" />
    </svg>
  )
}

function XIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

function MicIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path d="M12 2a3 3 0 00-3 3v7a3 3 0 006 0V5a3 3 0 00-3-3z" />
      <path d="M19 10v2a7 7 0 01-14 0v-2" />
      <line x1="12" y1="19" x2="12" y2="22" />
    </svg>
  )
}

function LogOutIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" y1="12" x2="9" y2="12" />
    </svg>
  )
}

/* ─── Helpers ─── */

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-NG', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

function formatTime(dateStr: string) {
  return new Date(dateStr).toLocaleTimeString('en-NG', {
    hour: '2-digit',
    minute: '2-digit',
  })
}

function getInitials(firstName: string, lastName: string) {
  return `${firstName[0] ?? ''}${lastName[0] ?? ''}`.toUpperCase()
}

function getLeadBadge(interest: string) {
  if (interest.startsWith('Yes'))
    return { text: 'Lead', className: 'bg-orange-500/20 text-orange-300 ring-orange-500/30' }
  if (interest.startsWith('Open'))
    return { text: 'Open', className: 'bg-white/10 text-gray-300 ring-white/10' }
  return { text: 'Standard', className: 'bg-white/5 text-gray-500 ring-white/5' }
}

/* ─── Detail field ─── */

function Field({ label, value, isLink }: { label: string; value: string | null; isLink?: boolean }) {
  if (!value) return null
  return (
    <div className="py-2.5">
      <dt className="text-[11px] font-medium uppercase tracking-widest text-gray-500">{label}</dt>
      <dd className="mt-1 whitespace-pre-wrap text-sm leading-relaxed text-gray-200">
        {isLink ? (
          <a href={value} target="_blank" rel="noopener noreferrer" className="text-orange-400 underline decoration-orange-400/30 hover:decoration-orange-400">
            {value}
          </a>
        ) : (
          value
        )}
      </dd>
    </div>
  )
}

/* ─── Detail drawer ─── */

function DetailDrawer({ application, onClose }: { application: Application; onClose: () => void }) {
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onClose])

  const sections = [
    {
      title: 'Personal',
      fields: [
        { label: 'Phone', value: application.phone },
        { label: 'Email', value: application.email },
        { label: 'Institution', value: application.institution },
        { label: 'Department', value: application.department },
        { label: 'Year', value: application.year_of_study },
      ],
    },
    {
      title: 'Social Media',
      fields: [
        { label: 'Instagram', value: application.instagram_handle },
        { label: 'TikTok', value: application.tiktok_handle },
        { label: 'Twitter / X', value: application.twitter_handle },
        { label: 'Total Followers', value: application.total_followers },
        { label: 'Posting Frequency', value: application.posting_frequency },
      ],
    },
    {
      title: 'WhatsApp Network',
      fields: [
        { label: 'Groups Active In', value: application.whatsapp_groups_count },
        { label: 'Admin Status', value: application.is_whatsapp_admin },
        { label: 'Group Types', value: application.active_group_types },
      ],
    },
    {
      title: 'Campus Presence',
      fields: [
        { label: 'Activities / Roles', value: application.campus_activities },
        { label: 'Reputation', value: application.campus_reputation },
      ],
    },
    {
      title: 'Motivation',
      fields: [
        { label: 'Why Ambassador', value: application.why_ambassador },
        { label: 'Convince Story', value: application.convince_story },
        { label: 'Lead Interest', value: application.lead_ambassador_interest },
        { label: 'Hours / Week', value: application.hours_per_week },
      ],
    },
    {
      title: 'Voice Note',
      fields: [
        { label: 'Link', value: application.voice_note_link, isLink: true },
      ],
    },
    {
      title: 'Availability',
      fields: [
        { label: 'Available', value: application.availability },
        { label: 'Important Dates', value: application.important_dates },
        { label: 'Referral Source', value: application.referral_source },
        { label: 'Applied', value: `${formatDate(application.created_at)} at ${formatTime(application.created_at)}` },
      ],
    },
  ]

  const badge = getLeadBadge(application.lead_ambassador_interest)

  return (
    <>
      <motion.div
        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <motion.aside
        className="fixed inset-y-0 right-0 z-50 flex w-full max-w-lg flex-col overflow-hidden bg-gray-900 shadow-2xl"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
      >
        {/* Drawer header */}
        <div className="flex shrink-0 items-start justify-between border-b border-white/[0.06] px-6 py-5">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500/15 text-sm font-bold text-orange-400">
              {getInitials(application.first_name, application.last_name)}
            </div>
            <div>
              <h2 className="text-lg font-semibold text-white">{application.first_name} {application.last_name}</h2>
              <p className="mt-0.5 text-sm text-gray-400">{application.institution}</p>
            </div>
          </div>
          <button onClick={onClose} className="rounded-lg p-2 text-gray-500 transition-colors hover:bg-white/5 hover:text-gray-300">
            <XIcon className="h-5 w-5" />
          </button>
        </div>

        {/* Quick tags */}
        <div className="flex shrink-0 gap-2 border-b border-white/[0.06] px-6 py-3">
          <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${badge.className}`}>
            {badge.text}
          </span>
          {application.voice_note_link && (
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-xs font-medium text-emerald-400 ring-1 ring-inset ring-emerald-500/25">
              <MicIcon className="h-3 w-3" /> Voice Note
            </span>
          )}
          <span className="inline-flex items-center rounded-full bg-white/5 px-2.5 py-0.5 text-xs text-gray-400 ring-1 ring-inset ring-white/10">
            {application.year_of_study}
          </span>
        </div>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {sections.map((section) => {
            const hasValues = section.fields.some((f) => f.value)
            if (!hasValues) return null
            return (
              <div key={section.title} className="mb-5 border-b border-white/[0.04] pb-3 last:mb-0 last:border-0 last:pb-0">
                <h3 className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-orange-500/80">
                  {section.title}
                </h3>
                <dl>
                  {section.fields.map((f) => (
                    <Field key={f.label} label={f.label} value={f.value} isLink={'isLink' in f && f.isLink} />
                  ))}
                </dl>
              </div>
            )
          })}
        </div>
      </motion.aside>
    </>
  )
}

/* ─── Stat card ─── */

function StatCard({ value, label }: { value: number | string; label: string }) {
  return (
    <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-3">
      <p className="text-2xl font-bold tabular-nums text-white">{value}</p>
      <p className="mt-0.5 text-[11px] font-medium uppercase tracking-widest text-gray-500">{label}</p>
    </div>
  )
}

/* ─── Mobile card ─── */

function ApplicationCard({ app, onClick }: { app: Application; onClick: () => void }) {
  const badge = getLeadBadge(app.lead_ambassador_interest)
  return (
    <motion.button
      onClick={onClick}
      className="w-full rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-left transition-colors hover:border-orange-500/20 hover:bg-white/[0.04]"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-500/10 text-xs font-bold text-orange-400">
          {getInitials(app.first_name, app.last_name)}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <p className="truncate font-medium text-white">{app.first_name} {app.last_name}</p>
            <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium ring-1 ring-inset ${badge.className}`}>
              {badge.text}
            </span>
          </div>
          <p className="mt-0.5 truncate text-sm text-gray-400">{app.institution}</p>
          <div className="mt-2 flex items-center gap-3 text-xs text-gray-500">
            <span>{app.department}</span>
            <span>·</span>
            <span>{app.year_of_study}</span>
            {app.voice_note_link && (
              <>
                <span>·</span>
                <span className="flex items-center gap-1 text-emerald-500">
                  <MicIcon className="h-3 w-3" /> VN
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </motion.button>
  )
}

/* ─── Page ─── */

export default function AdminAmbassadorsPage() {
  const [password, setPassword] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [applications, setApplications] = useState<Application[]>([])
  const [search, setSearch] = useState('')
  const [filterInstitution, setFilterInstitution] = useState('')
  const [selectedApp, setSelectedApp] = useState<Application | null>(null)

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/admin/ambassador-applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })

      if (!response.ok) {
        const result = await response.json()
        throw new Error(result.error || 'Authentication failed')
      }

      const result = await response.json()
      setApplications(result.data || [])
      setIsAuthenticated(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setIsLoading(false)
    }
  }

  const institutions = [...new Set(applications.map((a) => a.institution))].sort()

  const filtered = applications.filter((app) => {
    const q = search.toLowerCase()
    const fullName = `${app.first_name} ${app.last_name}`
    const matchesSearch =
      !search ||
      fullName.toLowerCase().includes(q) ||
      app.first_name.toLowerCase().includes(q) ||
      app.last_name.toLowerCase().includes(q) ||
      app.email.toLowerCase().includes(q) ||
      app.institution.toLowerCase().includes(q) ||
      app.department.toLowerCase().includes(q)
    const matchesInstitution = !filterInstitution || app.institution === filterInstitution
    return matchesSearch && matchesInstitution
  })

  const leadCount = applications.filter((a) => a.lead_ambassador_interest.startsWith('Yes')).length
  const voiceNoteCount = applications.filter((a) => a.voice_note_link).length

  /* ─── Login gate ─── */

  if (!isAuthenticated) {
    return (
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gray-950 px-4">
        <svg aria-hidden className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.03]">
          <defs>
            <pattern id="admin-grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M0 32L32 0M-8 8L8 -8M24 40L40 24" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#admin-grid)" />
        </svg>
        <div aria-hidden className="pointer-events-none absolute top-1/2 left-1/2 h-[400px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-600/[0.05] blur-[100px]" />

        <motion.div
          className="relative w-full max-w-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="rounded-2xl border border-white/[0.06] bg-gray-900/80 p-8 shadow-2xl backdrop-blur-sm">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 ring-1 ring-orange-500/20">
              <LockIcon className="h-7 w-7 text-orange-400" />
            </div>
            <h1 className="mt-6 text-center text-xl font-semibold text-white">Admin Access</h1>
            <p className="mt-2 text-center text-sm text-gray-500">
              Enter the password to review ambassador applications.
            </p>

            <form onSubmit={handleLogin} className="mt-6">
              <div>
                <label htmlFor="admin-pw" className="mb-2 block text-sm font-medium text-gray-400">
                  Password
                </label>
                <input
                  id="admin-pw"
                  type="password"
                  placeholder="Enter admin password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="block w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-gray-600 focus:border-orange-500/50 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                />
              </div>
              {error && (
                <div className="mt-3 rounded-lg bg-red-500/10 p-3 text-sm text-red-400 ring-1 ring-inset ring-red-500/20">{error}</div>
              )}
              <Button type="submit" color="primary" className="mt-6 w-full" disabled={isLoading}>
                {isLoading ? 'Authenticating...' : 'View Applications'}
              </Button>
            </form>
          </div>
        </motion.div>
      </section>
    )
  }

  /* ─── Dashboard ─── */

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <header className="border-b border-white/[0.06] bg-gray-900/50 pt-24 pb-6 backdrop-blur-sm">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-orange-500">Admin Console</p>
              <h1 className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Ambassador Applications
              </h1>
            </div>
            <button
              onClick={() => {
                setIsAuthenticated(false)
                setPassword('')
                setApplications([])
              }}
              className="flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-gray-300"
            >
              <LogOutIcon className="h-4 w-4" />
              Log out
            </button>
          </div>

          {/* Stats */}
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <StatCard value={applications.length} label="Total" />
            <StatCard value={leadCount} label="Lead Candidates" />
            <StatCard value={voiceNoteCount} label="Voice Notes" />
            <StatCard value={institutions.length} label="Institutions" />
          </div>
        </Container>
      </header>

      {/* Filters */}
      <section className="border-b border-white/[0.04] py-4">
        <Container>
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <SearchIcon className="pointer-events-none absolute top-2.5 left-3.5 h-4 w-4 text-gray-600" />
              <input
                type="text"
                placeholder="Search name, email, school, department..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="block w-full rounded-xl border border-white/[0.06] bg-white/[0.03] py-2.5 pr-4 pl-10 text-sm text-white placeholder:text-gray-600 focus:border-orange-500/40 focus:outline-none focus:ring-2 focus:ring-orange-500/15"
              />
            </div>
            <select
              value={filterInstitution}
              onChange={(e) => setFilterInstitution(e.target.value)}
              className="block w-full appearance-none rounded-xl border border-white/[0.06] bg-white/[0.03] py-2.5 pr-10 pl-4 text-sm text-gray-300 focus:border-orange-500/40 focus:outline-none focus:ring-2 focus:ring-orange-500/15 sm:w-64"
            >
              <option value="">All Institutions</option>
              {institutions.map((inst) => (
                <option key={inst} value={inst}>{inst}</option>
              ))}
            </select>
          </div>
          {(search || filterInstitution) && (
            <p className="mt-2 text-xs text-gray-600">
              {filtered.length} of {applications.length} applications
            </p>
          )}
        </Container>
      </section>

      {/* Content */}
      <section className="py-4 pb-20">
        <Container>
          {filtered.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-sm text-gray-600">
                {applications.length === 0 ? 'No applications yet.' : 'No applications match your filters.'}
              </p>
            </div>
          ) : (
            <>
              {/* Mobile: card list */}
              <div className="flex flex-col gap-3 lg:hidden">
                {filtered.map((app) => (
                  <ApplicationCard key={app.id} app={app} onClick={() => setSelectedApp(app)} />
                ))}
              </div>

              {/* Desktop: table */}
              <div className="hidden overflow-hidden rounded-xl border border-white/[0.06] lg:block">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-white/[0.06] bg-white/[0.02]">
                      <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-gray-500">Applicant</th>
                      <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-gray-500">Institution</th>
                      <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-gray-500">Year</th>
                      <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-gray-500">Followers</th>
                      <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-gray-500">Type</th>
                      <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-gray-500">Applied</th>
                      <th className="w-10" />
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.04]">
                    {filtered.map((app) => {
                      const badge = getLeadBadge(app.lead_ambassador_interest)
                      return (
                        <tr
                          key={app.id}
                          onClick={() => setSelectedApp(app)}
                          className="cursor-pointer transition-colors hover:bg-white/[0.03]"
                        >
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-3">
                              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-500/10 text-xs font-bold text-orange-400">
                                {getInitials(app.first_name, app.last_name)}
                              </div>
                              <div className="min-w-0">
                                <p className="truncate font-medium text-white">{app.first_name} {app.last_name}</p>
                                <p className="truncate text-xs text-gray-500">{app.email}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-3">
                            <p className="max-w-[180px] truncate text-gray-300">{app.institution}</p>
                            <p className="text-xs text-gray-600">{app.department}</p>
                          </td>
                          <td className="px-4 py-3 text-gray-400">{app.year_of_study}</td>
                          <td className="px-4 py-3 text-gray-400">{app.total_followers}</td>
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-2">
                              <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ring-1 ring-inset ${badge.className}`}>
                                {badge.text}
                              </span>
                              {app.voice_note_link && (
                                <MicIcon className="h-3.5 w-3.5 text-emerald-500" />
                              )}
                            </div>
                          </td>
                          <td className="px-4 py-3 text-xs text-gray-500">{formatDate(app.created_at)}</td>
                          <td className="px-4 py-3 text-right">
                            <span className="text-xs font-medium text-orange-500">→</span>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </Container>
      </section>

      {/* Detail drawer */}
      <AnimatePresence>
        {selectedApp && (
          <DetailDrawer application={selectedApp} onClose={() => setSelectedApp(null)} />
        )}
      </AnimatePresence>
    </div>
  )
}
