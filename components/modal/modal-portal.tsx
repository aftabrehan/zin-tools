import { useRef, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

interface modalPortal {
  children: React.ReactNode
  selector?: string
}

export const ModalPortal = ({ children, selector = 'modal' }: modalPortal) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    ref.current = document.querySelector(selector)
    setMounted(true)
  }, [selector])

  return mounted && ref.current ? createPortal(children, ref.current) : null
}
