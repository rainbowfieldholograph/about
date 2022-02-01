import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react'

export interface IconLinkProps
  extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  icon: IconDefinition
}
