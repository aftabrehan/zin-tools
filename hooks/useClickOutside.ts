import { useEffect } from 'react'

interface funcProps {
  onClick: () => void
  ref: { current: HTMLDivElement } | { current: null }
}

export const useClickOutside = ({ onClick, ref }: funcProps) => {
  useEffect(() => {
    const handleClickOutside = (e: any) =>
      ref.current && !ref.current.contains(e.target) && onClick()

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [onClick, ref])
}
