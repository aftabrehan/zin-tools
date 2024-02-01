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
    left: 'left-0',
    right: 'right-0',
    center: '',
  }[position]

  return (
    <li className="group relative flex items-center justify-center">
      <Link
        href={link}
        className="relative text-base sm:text-sm font-medium whitespace-nowrap px-3 py-3.5 after:absolute after:bottom-0 after:left-0 after:content-none::after after:w-full after:h-[2px] after:bg-primary after:hidden group-hover:after:block"
      >
        {title}
      </Link>

      <div
        className={clsx(
          'hidden sm:group-hover:flex absolute top-12 flex-col min-w-[220px] gap-2 p-4 bg-white rounded-b-md shadow-md border border-zinc-1',
          positionCls
        )}
      >
        {options.map(({ label, link: opLink }, i) => (
          <Link
            key={i}
            href={opLink}
            className="w-full p-2 hover:bg-zinc-100 rounded-md transition-colors duration-200 text-sm"
          >
            {label}
          </Link>
        ))}
      </div>
    </li>
  )
}