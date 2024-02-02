import Link from 'next/link'
import clsx from 'clsx'

interface navDropdownProps {
  title: string
  link: string
  options: Array<{ label: string; link: string }>
  position?: 'left' | 'right' | 'center'
}

export const NavDropdown = ({
  title,
  link,
  options,
  position = 'center',
}: navDropdownProps) => {
  const positionCls = {
    left: '-left-2',
    right: '-right-2',
    center: '',
  }[position]

  return (
    <li className="group relative flex items-center justify-center">
      <Link
        href={link}
        className="relative text-black dark:text-gray-200 text-base sm:text-sm font-medium whitespace-nowrap px-2 md:px-3 py-3.5 after:absolute after:bottom-0 after:left-0 after:content-none::after after:w-full after:h-[2px] after:bg-primary dark:after:bg-white after:hidden group-hover:after:block"
      >
        {title}
      </Link>

      <div
        className={clsx(
          'hidden sm:group-hover:flex absolute top-12 flex-col min-w-[220px] gap-2 p-4 bg-white dark:bg-midnight-slate rounded-b-md shadow-md dark:shadow-none border border-zinc-100 dark:border-zinc-400/20',
          positionCls
        )}
      >
        {options.map(({ label, link: opLink }, i) => (
          <Link
            key={i}
            href={opLink}
            className="w-full px-2.5 py-2 text-sm text-black dark:text-gray-100 hover:bg-zinc-100 dark:hover:bg-zinc-400/10 rounded-md transition-colors duration-300"
          >
            {label}
          </Link>
        ))}
      </div>
    </li>
  )
}
