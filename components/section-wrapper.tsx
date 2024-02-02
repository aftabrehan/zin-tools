import { Button } from '@/components/button'

import AngleRightIcon from '@/public/angle-right.svg'

interface sectionWraperProps {
  title: string
  showAllButton?: boolean
  children: React.ReactNode
  childrenClass?: string
}

export const SectionWrapper = ({
  title,
  showAllButton,
  children,
  childrenClass,
}: sectionWraperProps) => (
  <section className="w-full flex flex-col px-0 xs:px-2 sm:px-4 md:px-6 py-0 sm:py-2 md:py-4 bg-white dark:bg-midnight-slate rounded-3xl">
    <div className="flex items-center justify-between px-4 py-4 sm:py-6 gap-2">
      <h1
        className={'text-black dark:text-white text-xl sm:text-3xl font-bold'}
      >
        {title}
      </h1>
      {showAllButton && (
        <Button
          label="All"
          variant="secondary"
          icon={<AngleRightIcon className="fill-black dark:fill-white" />}
          className="hidden sm:flex h-9"
        />
      )}
    </div>
    <div className={childrenClass}>{children}</div>
  </section>
)
