import { CSSProperties } from 'react'

import clsx from 'clsx'

interface buttonProps {
  label?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  icon?: React.ReactNode
  className?: string
  style?: CSSProperties
  disabled?: boolean
  ref?: React.ForwardedRef<HTMLButtonElement>
}

export const Button = ({
  label,
  onClick,
  variant = 'primary',
  icon,
  className,
  style,
  disabled,
  ref,
  ...props
}: buttonProps) => {
  const variantCls = {
    primary: 'text-white bg-primary xs:hover:opacity-75',
    secondary:
      'text-black dark:text-white bg-zinc-100 dark:bg-white/10 xs:hover:opacity-75',
    ghost:
      'text-black dark:text-gray-200 hover:bg-zinc-100 dark:hover:bg-white/10 xs:hover:opacity-75',
    outline:
      'text-black dark:text-white bg-white dark:bg-neutral-800 border-2 border-zinc-400 disabled:hover:border-zinc-400 sm:hover:border-primary dark:sm:hover:border-white',
  }[variant]

  return (
    <button
      ref={ref}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        'h-12 px-5 flex items-center justify-center gap-2 text-base font-medium text-nowrap outline-none rounded-full transition-all duration-200 disabled:opacity-50',
        !disabled && 'group',
        variantCls,
        className
      )}
      style={style}
      {...props}
    >
      {label}
      {icon}
    </button>
  )
}
