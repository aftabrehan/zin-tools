import Link from 'next/link'
import Image from 'next/image'

interface CardProps {
  link: string
  imageUrl: string
  title: string
  description: string
}

export const Card = ({ link, imageUrl, title, description }: CardProps) => (
  <Link
    href={link}
    scroll={false}
    className="w-full sm:max-w-[300px] h-[156px] xs:h-[168px] sm:h-[200px] flex flex-col justify-start items-start gap-3 sm:gap-4 p-4 sm:p-6 rounded-xl dark:hover:bg-zinc-600/5 border border-gray-200 dark:border-opacity-15 dark:hover:border-opacity-30 hover:shadow-card outline-none transition-all duration-300"
  >
    <Image
      alt={title}
      src={imageUrl}
      width={64}
      height={64}
      className="w-10 xs:w-12 sm:w-16 h-10 xs:h-12 sm:h-16"
    />

    <div className="flex flex-col justify-start items-start gap-2 sm:gap-3">
      <h2 className="text-black dark:text-white text-md xs:text-lg sm:text-xl font-bold">
        {title}
      </h2>
      <p className="text-zinc-700 dark:text-neutral-400 text-opacity-60 text-sm line-clamp-2">
        {description}
      </p>
    </div>
  </Link>
)
