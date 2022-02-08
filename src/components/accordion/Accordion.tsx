import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Accordion.module.css'
import { AccordionProps, ItemProps, SummaryProps } from './Accordion.props'

export const Accordion = ({ className, children }: AccordionProps): JSX.Element => (
  <details className={[styles.details, className].join(' ')}>{children}</details>
)

const Summary = ({ children, className }: SummaryProps): JSX.Element => (
  <summary className={[styles.button, className].join(' ')}>
    {children}
    <FontAwesomeIcon className={styles.chevron} icon={faChevronRight} />
  </summary>
)

const Item = ({ children, className }: ItemProps): JSX.Element => (
  <div className={[styles.dropdown, className].join(' ')}>{children}</div>
)

Accordion.Summary = Summary
Accordion.Item = Item
