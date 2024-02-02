import Link from 'next/link'
import Image from 'next/image'

interface cardProps {
  link: string
  imageUrl: string
  title: string
  description: string
}

export const Card = ({ link, imageUrl, title, description }: cardProps) => (
  <Link
    href={link}
    className="w-full sm:max-w-[300px] h-[156px] xs:h-[168px] sm:h-[200px] flex flex-col justify-start items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-white rounded-xl border border-gray-200 hover:shadow-card transition-all duration-200"
  >
    <Image
      alt={title}
      src={imageUrl}
      width={64}
      height={64}
      className="w-10 xs:w-12 sm:w-16 h-10 xs:h-12 sm:h-16"
    />

    <div className="flex flex-col justify-start items-start gap-2 sm:gap-3">
      <h2 className="text-black text-md xs:text-lg sm:text-xl font-bold">
        {title}
      </h2>
      <p className="text-zinc-700 text-opacity-60 text-sm font-medium line-clamp-2">
        {description}
      </p>
    </div>
  </Link>
)
