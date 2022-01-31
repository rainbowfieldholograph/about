import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { createPortal } from 'react-dom'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import styles from './Modal.module.css'

export const Modal = ({ className, children, open, onClose }) => {
  if (!open) return <></>
  return createPortal(
    <>
      <div onClick={onClose} className={styles.overlay} />
      <div className={[styles.modal, className].join(' ')}>
        <div className={styles.closeButtonWrapper}>
          <button className={styles.closeButton} onClick={onClose}>
            <FontAwesomeIcon icon={faTimesCircle} />
          </button>
        </div>

        {children}
      </div>
    </>,
    document.getElementById('modal')
  )
}
