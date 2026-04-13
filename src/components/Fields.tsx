import { useId } from 'react'
import clsx from 'clsx'

const formClasses =
  'block w-full appearance-none rounded-[16px] border border-gray-200 bg-white px-4 py-2.5 text-base text-gray-900 placeholder:text-gray-400 focus:border-orange-400 focus:outline-hidden focus:ring-2 focus:ring-orange-400/30 sm:text-sm transition-colors'

function Label({ id, children, required }: { id: string; children: React.ReactNode; required?: boolean }) {
  return (
    <label
      htmlFor={id}
      className="mb-2 block text-sm font-semibold text-gray-900"
    >
      {children}
      {required && <span className="ml-0.5 text-orange-500">*</span>}
    </label>
  )
}

export function TextField({
  label,
  type = 'text',
  className,
  ...props
}: Omit<React.ComponentPropsWithoutRef<'input'>, 'id'> & { label?: string }) {
  let id = useId()

  return (
    <div className={className}>
      {label && <Label id={id} required={props.required}>{label}</Label>}
      <input id={id} type={type} {...props} className={formClasses} />
    </div>
  )
}

export function SelectField({
  label,
  className,
  ...props
}: Omit<React.ComponentPropsWithoutRef<'select'>, 'id'> & { label?: string }) {
  let id = useId()

  return (
    <div className={className}>
      {label && <Label id={id} required={props.required}>{label}</Label>}
      <select id={id} {...props} className={clsx(formClasses, 'pr-10 truncate')} />
    </div>
  )
}
