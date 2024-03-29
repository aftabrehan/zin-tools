'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import clsx from 'clsx'

import { Button } from '@/components/button'

import MoonIcon from '@/public/moon.svg'
import SunIcon from '@/public/sun.svg'

interface ToggleThemeButtonProps {
  className?: string
}

export const ToggleThemeButton = ({ className }: ToggleThemeButtonProps) => {
  const [isMounted, setIsMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    resolvedTheme && (
      <Button
        variant="secondary"
        icon={resolvedTheme === 'dark' ? <SunIcon /> : <MoonIcon />}
        onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        className={clsx(
          'w-12 h-12 rounded-full !px-1 !bg-[#dedede] dark:!bg-[#2e2e2e]',
          className
        )}
      />
    )
  )
}
