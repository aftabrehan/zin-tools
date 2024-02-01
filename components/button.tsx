import clsx from 'clsx'

interface buttonProps {
  label: string
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

export const Button = ({
  label,
  onClick,
  variant = 'primary',
}: buttonProps) => {
  const cls = {
    primary: 'bg-primary text-white',
    secondary: 'text-black hover:bg-zinc-100',
  }[variant]

  return (
    <button
      onClick={onClick}
      className={clsx(
        'h-12 px-5 flex items-center justify-center text-base font-medium text-nowrap rounded-full hover:opacity-75 transition-all duration-200',
        cls
      )}
    >
      {label}
    </button>
  )
}
