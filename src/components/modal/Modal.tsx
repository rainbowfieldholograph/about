import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createPortal } from 'react-dom';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FC } from 'react';
import styles from './Modal.module.css';
import { ModalProps } from './Modal.props';

export const Modal: FC<ModalProps> = ({ className, children, open, onClose }): JSX.Element => {
  const portalRootElement = document.getElementById('modal');

  if (!open || !portalRootElement) return <></>;

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
    portalRootElement
  );
};
