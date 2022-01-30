import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Accordion.module.css'

export const Accordion = ({ summaryComponent, className, summaryClassName, children }) => {
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
