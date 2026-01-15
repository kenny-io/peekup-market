import Link from 'next/link'
import clsx from 'clsx'

const baseStyles = {
  solid:
    'inline-flex h-[50px] items-center justify-center rounded-[16px] px-4 text-sm font-semibold tracking-tight transition-colors shadow-sm',
  outline:
    'inline-flex h-[50px] items-center justify-center rounded-[16px] border px-4 text-sm font-semibold tracking-tight transition-colors',
}

const variantStyles = {
  solid: {
    primary:
      'bg-orange-600 text-white shadow-[0_12px_30px_-12px_rgba(249,115,22,0.55)] hover:bg-orange-700 active:bg-orange-700/90',
    navy:
      'bg-gray-900 text-white shadow-[0_12px_30px_-12px_rgba(15,23,42,0.45)] hover:bg-gray-800 active:bg-gray-900/90',
    soft:
      'bg-gray-50 text-gray-900 border border-gray-200 hover:bg-gray-100 active:bg-gray-100/90 shadow-none',
  },
  outline: {
    neutral:
      'border-gray-200 text-gray-900 hover:bg-gray-50 active:bg-gray-100 active:text-gray-900',
  },
}

type ButtonProps = (
  | {
      variant?: 'solid'
      color?: keyof typeof variantStyles.solid
    }
  | {
      variant: 'outline'
      color?: keyof typeof variantStyles.outline
    }
) &
  (
    | Omit<React.ComponentPropsWithoutRef<typeof Link>, 'color'>
    | (Omit<React.ComponentPropsWithoutRef<'button'>, 'color'> & {
        href?: undefined
      })
  )

export function Button({ className, ...props }: ButtonProps) {
  const variant = props.variant ?? 'solid'
  const color = props.color ?? (variant === 'outline' ? 'neutral' : 'primary')

  const variantClassName =
    variant === 'outline'
      ? variantStyles.outline[color as keyof typeof variantStyles.outline]
      : variantStyles.solid[color as keyof typeof variantStyles.solid]

  const combinedClassName = clsx(baseStyles[variant], variantClassName, className)

  return typeof props.href === 'undefined' ? (
    <button className={combinedClassName} {...props} />
  ) : (
    <Link className={combinedClassName} {...props} />
  )
}
