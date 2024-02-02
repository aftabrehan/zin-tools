import Link from 'next/link'
import Image from 'next/image'

import { ToggleThemeButton } from '@/components/toggle-theme-button'

import {
  FOLLOW_US_LINKS,
  INTERNAL_LINKS,
  EXTERNAL_LINKS,
  OTHER_LINKS,
} from '@/constants/footer-links'

interface linksProps {
  title: string
  links: Array<{ href: string; label: string }>
}

const Links = ({ title, links }: linksProps) => (
  <div className="basis-[100%] md:basis-[calc(33%-8px)] lg:basis-[calc(25%-8px)] xl:basis-[calc(20%-8px)]">
    <h3 className="pb-6 text-base font-semibold text-black">{title}</h3>
    <ul className="flex flex-col gap-1">
      {links.map(({ href, label }, i) => (
        <li key={i}>
          <Link
            href={href}
            className="block py-2 leading-6 text-neutral-600 hover:text-black"
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

export const Footer = () => (
  <footer className="w-full bg-[#f1f3f4]">
    <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8">
      <div className="flex items-center gap-8 py-8">
        <h4 className="text-black text-base sm:text-lg font-semibold">
          Follow Us
        </h4>
        <div className="flex items-center gap-8">
          {FOLLOW_US_LINKS.map(({ href, alt, src }, i) => (
            <Link key={i} href={href}>
              <Image alt={alt} src={src} width={24} height={24} />
            </Link>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-start gap-2 gap-y-8 py-10 border-t border-neutral-200">
        <Links title="Internal Links" links={INTERNAL_LINKS} />
        <Links title="External Links" links={EXTERNAL_LINKS} />
        <Links title="Internal Links" links={INTERNAL_LINKS} />
        <Links title="External Links" links={EXTERNAL_LINKS} />
        <Links title="Internal Links" links={INTERNAL_LINKS} />
      </div>

      <div className="flex flex-wrap items-center gap-6 pt-6 pb-10 border-t md:pb-12 md:pt-8 md:gap-8 border-t-clr-border">
        <div className="flex items-center justify-between grow">
          <Link href="/">
            <Image alt="logo" src="/logo.svg" width={120} height={34} />
          </Link>

          <ToggleThemeButton className="md:hidden" />
        </div>

        <ul className="flex flex-wrap items-center gap-8 gap-y-2">
          {OTHER_LINKS.map(({ href, label }, i) => (
            <li key={i}>
              <Link
                href={href}
                className="text-sm text-neutral-600 hover:text-black hover:underline whitespace-nowrap"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <ToggleThemeButton className="hidden ml-auto md:flex" />
      </div>
    </div>
  </footer>
)
