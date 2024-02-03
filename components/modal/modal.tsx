import { useEffect, useRef } from 'react'
import clsx from 'clsx'

import { ModalPortal } from '@/components/modal/modal-portal'

import { useClickOutside } from '@/hooks/useClickOutside'

interface ModalProps {
  isOpen: boolean
  close: () => void
  children: React.ReactNode
  closeOnClickAway?: boolean
  className?: string
}

export const Modal = ({
  isOpen,
  close,
  children,
  closeOnClickAway = false,
  className,
}: ModalProps) => {
  const contentRef = useRef(null)

  useClickOutside({
    onClick: () => closeOnClickAway && close(),
    ref: contentRef,
  })

  useEffect(() => {
    if (!isOpen) return
  }, [isOpen])

  return isOpen ? (
    <ModalPortal selector="#modal">
      <div ref={contentRef} className={clsx('w-full h-full', className)}>
        {children}
      </div>
    </ModalPortal>
  ) : null
}
