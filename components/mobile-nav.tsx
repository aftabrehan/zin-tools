'use client'

import { useState } from 'react'
import clsx from 'clsx'

import { Button } from '@/components/button'
import { Modal } from '@/components//modal/modal'
import { NavDropdown } from '@/components/nav-dropdown'

import CrossIcon from '@/public/cross.svg'
import HamBurgerIcon from '@/public/hamburger.svg'

import { MOBILE_NAV_ITEMS } from '@/constants/nav-items'

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button
        icon={isOpen ? <CrossIcon /> : <HamBurgerIcon />}
        onClick={() => setIsOpen(!isOpen)}
        className={clsx(
          'w-12 h-12 rounded-md !px-1',
          isOpen ? '!bg-black dark:!bg-white/20' : '!bg-[#f4f4f5]'
        )}
      />

      <Modal isOpen={isOpen} close={() => setIsOpen(false)}>
        <div className="w-full h-[calc(100vh-144px)] mt-36 flex sm:hidden bg-white dark:bg-midnight-slate pointer-events-auto border-t border-t-zinc-100 dark:border-t-zinc-700 overflow-y-auto">
          <nav className="relative w-full">
            <ul className="w-full flex flex-col items-end justify-center gap-2 p-4 pb-24">
              {MOBILE_NAV_ITEMS.map((navItem, i) => (
                <NavDropdown key={i} {...navItem} />
              ))}
            </ul>
            <div className="fixed -bottom-2 left-0 w-full h-32 bg-gradient-to-b from-white/75 dark:from-midnight-slate/75 to-white dark:to-midnight-slate pointer-events-none blur-[6px]" />
          </nav>
        </div>
      </Modal>
    </>
  )
}
