import { FC } from 'react';
import styles from './IconLink.module.css';
import { IconLinkProps } from './IconLink.props';

export const IconLink: FC<IconLinkProps> = ({ Icon, ...rest }): JSX.Element => {
  return (
    <a className={styles.link} rel="noreferrer" target="_blank" {...rest}>
      <Icon className={styles.icon} color="white" />
    </a>
  );
};
