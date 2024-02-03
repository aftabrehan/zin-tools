import clsx from 'clsx'

import { NavDropdown } from '@/components/nav-dropdown'

import { ALL_NAV_ITEMS, LESS_NAV_ITEMS } from '@/constants/nav-items'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => (
  <nav className={clsx('w-full max-w-6xl', className)}>
    <ul className="w-full hidden lg:flex items-center justify-between gap-1">
      {ALL_NAV_ITEMS.map((navItem, i) => (
        <NavDropdown
          key={i}
          position={
            i === 0
              ? 'left'
              : i === ALL_NAV_ITEMS.length - 1
              ? 'right'
              : 'center'
          }
          {...navItem}
        />
      ))}
    </ul>

    <ul className="w-full flex lg:hidden items-center justify-between gap-1">
      {LESS_NAV_ITEMS.map((navItem, i) => (
        <NavDropdown
          key={i}
          position={
            i === 0
              ? 'left'
              : i === LESS_NAV_ITEMS.length - 1
              ? 'right'
              : 'center'
          }
          {...navItem}
        />
      ))}
    </ul>
  </nav>
)
