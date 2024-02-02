'use client'

import { useRouter } from 'next/navigation'

import { Button } from '@/components/button'

import NotFoundImage from '@/public/404.svg'

const NotFoundPage = () => {
  const router = useRouter()

  return (
    <div className="w-full flex flex-col items-center justify-center gap-6 p-10 bg-white dark:bg-midnight-slate rounded-3xl">
      <NotFoundImage className="w-full max-w-[342px] h-auto" />
      <p className="text-black dark:text-white text-lg font-medium">
        Page Not Found!
      </p>
      <Button
        label="Go to Home"
        variant="primary"
        onClick={() => router.push('/')}
      />
    </div>
  )
}

export default NotFoundPage
