import Link from 'next/link'
import Image from 'next/image'

import { Searchbar } from '@/components/search-bar'
import { Button } from '@/components/button'
import { Navbar } from '@/components/navbar'
import { MobileNav } from '@/components/mobile-nav'

export const Header = () => (
  <header className="w-full h-36 fixed top-0 shadow-header px-4 sm:px-6 pt-4 sm:pt-6 bg-white z-10">
    <div className="w-full max-w-[1400px] mx-auto flex flex-col items-center justify-center gap-4 sm:gap-4 md:gap-6">
      <div className="w-full flex items-center justify-between gap-2">
        <Link href="/" className="overflow-hidden">
          <Image
            src="/logo.svg"
            alt="ZinTools Logo"
            width={138}
            height={38}
            className="w-[120px] sm:w-[130px] md:w-[138px] h-auto"
          />
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
