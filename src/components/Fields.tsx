import { useId } from 'react'
import clsx from 'clsx'

const formClasses =
  'block w-full appearance-none rounded-[16px] border border-gray-200 bg-white px-[calc(--spacing(3)-1px)] py-[calc(--spacing(2)-1px)] text-gray-900 placeholder:text-gray-400 focus:border-indigo-500 focus:outline-hidden focus:ring-2 focus:ring-indigo-500/40 sm:text-sm'

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
      <select id={id} {...props} className={clsx(formClasses, 'pr-8')} />
    </div>
  )
}
