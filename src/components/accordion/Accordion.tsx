import { FC } from 'react';
import styles from './Accordion.module.css';
import { AccordionProps, ItemProps, SummaryProps } from './Accordion.props';
import { ReactComponent as ChevronIcon } from '../../img/chevron-icon.svg';

export const Accordion = ({ className, children }: AccordionProps): JSX.Element => (
  <details className={[styles.details, className].join(' ')}>{children}</details>
);

const Summary: FC<SummaryProps> = ({ children, className }): JSX.Element => (
  <summary className={[styles.button, className].join(' ')}>
    {children}
    <ChevronIcon className={styles.chevron} />
  </summary>
);

const Item: FC<ItemProps> = ({ children, className }): JSX.Element => (
  <div className={[styles.dropdown, className].join(' ')}>{children}</div>
);

Accordion.Summary = Summary;
Accordion.Item = Item;
