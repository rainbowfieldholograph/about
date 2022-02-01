import { FC } from 'react'
import styles from './SectionContainer.module.css'
import { SectionContainerProps } from './SectionContainer.props'

export const SectionContainer: FC<SectionContainerProps> = ({
  className,
  children,
  ...rest
}: SectionContainerProps) => {
  return (
    <section className={[styles.container, className].join(' ')} {...rest}>
      {children}
    </section>
  )
}
