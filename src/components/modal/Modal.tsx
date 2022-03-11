import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createPortal } from 'react-dom';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FC, KeyboardEvent, useEffect, useRef } from 'react';
import styles from './Modal.module.css';
import { ModalProps } from './Modal.props';

const portalRootElement = document.getElementById('modal');

export const Modal: FC<ModalProps> = ({ className, children, open, onClose }): JSX.Element => {
  const contentRef = useRef<HTMLDivElement | null>(null);

  const keyDownHandler = (event: KeyboardEvent) => {
    if (event.key !== 'Tab') return;

    const focusableModalElements = contentRef.current?.querySelectorAll(
      'a[href], button:not([disabled]), textarea, input, select'
    );

    if (!focusableModalElements) return;

    const firstElement = focusableModalElements[0] as HTMLElement;
    const lastElement = focusableModalElements[
      focusableModalElements.length - 1
    ] as HTMLElement;
    if (!event.shiftKey && document.activeElement === lastElement) {
      firstElement.focus();
      return event.preventDefault();
    }
    if (event.shiftKey && document.activeElement === firstElement) {
      lastElement.focus();
      event.preventDefault();
    }
  };

  const focusContentOnOpen = () => {
    const focusableEls = contentRef.current?.querySelectorAll(
      'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'
    );
    if (!focusableEls) return;
    const firstEl = Array.prototype.slice.call(focusableEls)[0];
    firstEl?.focus();
  };

  useEffect(() => {
    if (open) focusContentOnOpen();
  }, [open]);

  if (!open || !portalRootElement) return <></>;

  return createPortal(
    <>
      <div onClick={onClose} className={styles.overlay} />
      <div
        ref={contentRef}
        role="dialog"
        tabIndex={-1}
        className={[styles.modal, className].join(' ')}
        onKeyDown={keyDownHandler}
      >
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
