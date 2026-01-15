import Link from 'next/link'
import clsx from 'clsx'

export function AppStoreLink({
  color = 'black',
}: {
  color?: 'black' | 'white'
}) {
  return (
    <Link
      href="/waitlist"
      aria-label="Download the Peekup app"
      className={clsx(
        'rounded-lg transition-colors',
        color === 'black'
          ? 'bg-gray-900 text-white hover:bg-gray-800'
          : 'bg-white text-gray-900 hover:bg-gray-100',
      )}
    >
      <div className="flex items-center gap-2 px-4 py-2">
        <span className="text-sm font-semibold leading-tight">Download Peekup</span>
        <span className="text-xs text-gray-600">Android & iOS access list</span>
      </div>
    </Link>
  )
}
