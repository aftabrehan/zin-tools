import { useEffect } from 'react'

interface UseClickOutsideProps {
  onClick: () => void
  ref: { current: HTMLDivElement } | { current: null }
}

export const useClickOutside = ({ onClick, ref }: UseClickOutsideProps) => {
  useEffect(() => {
    const handleClickOutside = (e: any) =>
      ref.current && !ref.current.contains(e.target) && onClick()

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [onClick, ref])
}
