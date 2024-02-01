'use client'

import { useState } from 'react'
import Image from 'next/image'

import { Modal } from '@/components//modal/modal'
import { NavDropdown } from '@/components/nav-dropdown'

import { MOBILE_NAV_ITEMS } from '@/constants/nav-items'

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        className="w-12 h-12 flex items-center justify-center rounded-md"
        onClick={() => setIsOpen(!isOpen)}
        style={{ background: isOpen ? '#000' : '#f4f4f5' }}
      >
        <Image
          alt=""
          src={isOpen ? '/cross.svg' : '/hamburger.svg'}
          width={24}
          height={24}
        />
      </button>

      <Modal isOpen={isOpen} close={() => setIsOpen(false)}>
        <div className="w-full h-[calc(100vh-144px)] mt-36 flex sm:hidden bg-white pointer-events-auto border-t border-zinc-100 border animation-slide-from-right overflow-auto">
          <nav className="relative w-full">
            <ul className="w-full flex flex-col items-end justify-center gap-2 p-4 pb-24">
              {MOBILE_NAV_ITEMS.map((navItem, i) => (
                <NavDropdown key={i} {...navItem} />
              ))}
            </ul>
            <div className="fixed -bottom-2 left-0 w-full h-32 bg-gradient-to-b from-white/75 to-white pointer-events-none blur-[6px]" />
          </nav>
        </div>
      </Modal>
    </>
  )
}
