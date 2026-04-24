'use client'

import { useEffect, useState } from 'react'

type Status =
  | { open: true; closesAt: string }
  | { open: false; opensIn: string; opensAt: string }
  | null

const HOURS = {
  weekday: { open: 8, close: 21 },
  saturday: { open: 9, close: 20 },
} as const

function computeStatus(): Status {
  const fmt = new Intl.DateTimeFormat('en-NG', {
    timeZone: 'Africa/Lagos',
    hour: 'numeric',
    minute: 'numeric',
    weekday: 'short',
    hour12: false,
  })
  const parts = fmt.formatToParts(new Date())
  const lookup = (t: string) => parts.find((p) => p.type === t)?.value ?? ''

  const weekday = lookup('weekday')
  const hour = parseInt(lookup('hour'), 10)
  const minute = parseInt(lookup('minute'), 10)
  const isSunday = weekday === 'Sun'
  const isSaturday = weekday === 'Sat'

  const todays = isSunday
    ? null
    : isSaturday
      ? HOURS.saturday
      : HOURS.weekday

  if (todays && hour >= todays.open && hour < todays.close) {
    const closeHour = todays.close > 12 ? todays.close - 12 : todays.close
    const suffix = todays.close >= 12 ? 'pm' : 'am'
    return { open: true, closesAt: `${closeHour}${suffix}` }
  }

  let opensAtHour: number
  if (isSunday) {
    opensAtHour = HOURS.weekday.open
  } else if (todays && hour < todays.open) {
    opensAtHour = todays.open
  } else {
    const tomorrowIsSaturday = weekday === 'Fri'
    const tomorrowIsSunday = weekday === 'Sat'
    opensAtHour = tomorrowIsSunday
      ? HOURS.weekday.open
      : tomorrowIsSaturday
        ? HOURS.saturday.open
        : HOURS.weekday.open
  }

  const minutesUntil =
    todays && hour < todays.open
      ? (todays.open - hour) * 60 - minute
      : (24 - hour + opensAtHour) * 60 - minute

  const hrs = Math.floor(minutesUntil / 60)
  const mins = minutesUntil % 60
  const opensIn =
    hrs >= 12 ? 'tomorrow' : hrs > 0 ? `in ${hrs}h ${mins}m` : `in ${mins}m`

  const aHour = opensAtHour > 12 ? opensAtHour - 12 : opensAtHour
  const aSuffix = opensAtHour >= 12 ? 'pm' : 'am'

  return { open: false, opensIn, opensAt: `${aHour}${aSuffix}` }
}

export function SupportLiveStatus() {
  const [status, setStatus] = useState<Status>(null)

  useEffect(() => {
    setStatus(computeStatus())
    const id = setInterval(() => setStatus(computeStatus()), 60_000)
    return () => clearInterval(id)
  }, [])

  if (!status) {
    return (
      <div
        aria-hidden
        className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/40"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
        Checking availability…
      </div>
    )
  }

  if (status.open) {
    return (
      <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-200">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
        </span>
        We&rsquo;re online · replying now · until {status.closesAt}
      </div>
    )
  }

  return (
    <div className="inline-flex items-center gap-2.5 rounded-full border border-amber-400/30 bg-amber-500/10 px-3.5 py-1.5 text-xs font-semibold text-amber-200">
      <span className="h-2 w-2 rounded-full bg-amber-400" />
      Desk closed · back {status.opensIn} ({status.opensAt})
    </div>
  )
}
