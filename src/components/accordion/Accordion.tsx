import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC } from 'react'
import styles from './Accordion.module.css'
import { AccordionProps } from './Accordion.props'

export const Accordion: FC<AccordionProps> = ({
  summaryComponent,
  className,
  summaryClassName,
  children,
}: AccordionProps): JSX.Element => {
  return (
    <details className={[styles.details].join(' ')}>
      <summary className={[styles.button, summaryClassName].join(' ')}>
        {summaryComponent}
        <FontAwesomeIcon className={styles.chevron} icon={faChevronRight} />
      </summary>
      <div className={[styles.dropdown, className].join(' ')}>{children}</div>
    </details>
  )
}
