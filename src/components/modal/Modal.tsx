// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createPortal } from 'react-dom';
// import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FC, useEffect } from 'react';
import styles from './Modal.module.css';
import { ModalProps } from './Modal.props';
import FocusTrap from 'focus-trap-react';

const portalRootElement = document.getElementById('modal');

export const Modal: FC<ModalProps> = ({ className, children, open, onClose }): JSX.Element => {
  const onClickEsc = (event: KeyboardEvent) => {
    if (event.key === 'Esc' || event.key === 'Escape') onClose();
  };

  useEffect(() => {
    document.body.classList.add(styles.lock);
  }, []);

  useEffect(() => {
    document.body.classList.toggle(styles.lock);
    if (open) {
      window.addEventListener('keydown', onClickEsc);
      return () => window.removeEventListener('keydown', onClickEsc);
    }
  }, [open]);

  if (!open || !portalRootElement) return <></>;

  return createPortal(
    <FocusTrap>
      <div onClick={onClose} className={styles.overlay}>
        <div
          role="dialog"
          tabIndex={-1}
          className={[styles.modal, className].join(' ')}
          onClick={(event) => event.stopPropagation()}
        >
          <div className={styles.closeButtonWrapper}>
            <button className={styles.closeButton} onClick={onClose}>
              {/* <FontAwesomeIcon icon={faTimesCircle} /> */}
            </button>
          </div>
          {children}
        </div>
      </div>
    </FocusTrap>,
    portalRootElement
  );
};
