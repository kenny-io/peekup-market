import type React from 'react'
import clsx from 'clsx'
import Image from 'next/image'

interface LogoProps
  extends Omit<React.ComponentPropsWithoutRef<typeof Image>, 'src' | 'alt'> {
  variant?: 'dark' | 'light'
  size?: 'default' | 'compact'
}

const LOGO_SRC = {
  dark: '/logo-transparentbg-light.png',
  light: '/logo-transparent-dark.png',
} as const

const LOGO_DIMENSIONS = {
  default: { width: 106, height: 35 },
  compact: { width: 72, height: 24 },
} as const

export function Logomark({ className, variant = 'dark', ...props }: LogoProps) {
  const { width, height } = LOGO_DIMENSIONS.default

  return (
    <Image
      src={LOGO_SRC[variant]}
      alt="Peekup logo"
      className={clsx('h-auto', className)}
      width={width}
      height={height}
      style={{ width, height: 'auto' }}
      priority
      {...props}
    />
  )
}

export function Logo({ className, variant = 'dark', ...props }: LogoProps) {
  const size = props.size ?? 'default'
  const { width, height } = LOGO_DIMENSIONS[size]

  return (
    <Image
      src={LOGO_SRC[variant]}
      alt="Peekup"
      className={clsx('h-auto', className)}
      width={width}
      height={height}
      style={{ width, height: 'auto' }}
      priority
      {...props}
    />
  )
}
