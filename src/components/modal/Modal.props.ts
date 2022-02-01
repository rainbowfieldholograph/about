import { ReactNode } from 'react'

export interface ModalProps {
  children?: ReactNode
  className?: string
  open: boolean
  onClose: () => any
}
