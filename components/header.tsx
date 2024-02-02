import Link from 'next/link'

import { Searchbar } from '@/components/search-bar'
import { Button } from '@/components/button'
import { Navbar } from '@/components/navbar'
import { MobileNav } from '@/components/mobile-nav'

import Logo from '@/public/logo.svg'

export const Header = () => (
  <header className="w-full h-[136px] md:h-36 fixed top-0 shadow-header dark:shadow-header-dark px-4 lg:px-6 pt-4 sm:pt-6 bg-white dark:bg-midnight-slate z-10">
    <div className="w-full max-w-[1400px] mx-auto flex flex-col items-center justify-center gap-4 sm:gap-4 md:gap-6">
      <div className="w-full flex items-center justify-between gap-2">
        <Link href="/">
          <Logo className="w-[120px] sm:w-[130px] md:w-[138px] h-[38px] fill-black dark:fill-white" />
        </Link>

        <Searchbar className="hidden sm:flex" />

        <div className="flex items-center justify-center gap-2">
          <Button label="Login" variant="ghost" />
          <Button label="Sign up" />
        </div>
      </div>

      <Navbar className="hidden sm:block" />

      <div className="w-full flex sm:hidden gap-x-2">
        <Searchbar />
        <MobileNav />
      </div>
    </div>
  </header>
)
