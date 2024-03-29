import Image from 'next/image'
import clsx from 'clsx'

interface SearchbarProps {
  className?: string
}

export const Searchbar = ({ className }: SearchbarProps) => (
  <div
    className={clsx(
      'flex-1 sm:max-w-[280px] md:max-w-[400px] lg:max-w-[500px] flex items-center justify-between gap-x-4 md:gap-x-6 px-4 sm:px-6 py-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-3xl',
      className
    )}
  >
    <input
      type="search"
      placeholder="Search for Movies, TV Shows, Themes & Cast"
      className="w-full flex flex-1 outline-none bg-transparent text-black dark:text-white text-base"
    />
    <div className="flex items-center justify-end gap-x-1 xs:gap-x-2 md:gap-x-3 lg:gap-x-5 xl:gap-x-6">
      <div className="w-[1px] h-9 bg-gray-400/50 cursor-default" />
      <div className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-200/10 rounded-full cursor-pointer">
        <Image
          alt=""
          src="/search.svg"
          width={16}
          height={16}
          className="select-none"
        />
      </div>
    </div>
  </div>
)
