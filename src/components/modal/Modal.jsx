import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { createPortal } from 'react-dom'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import styles from './Modal.module.css'

export const Modal = ({ children, open, onClose }) => {
  if (!open) return <></>
  return createPortal(
    <>
      <div onClick={onClose} className={styles.overlay} />
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          <FontAwesomeIcon icon={faWindowClose} />
        </button>
        {children}
      </div>
    </>,
    document.getElementById('modal')
  )
}
