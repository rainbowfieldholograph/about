import { ReactNode } from 'react'

export interface AccordionProps {
  summaryComponent: JSX.Element
  className?: string
  summaryClassName?: string
  children?: ReactNode
}
