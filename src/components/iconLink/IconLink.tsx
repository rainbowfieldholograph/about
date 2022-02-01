import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC } from 'react'
import styles from './IconLink.module.css'
import { IconLinkProps } from './IconLink.props'

export const IconLink: FC<IconLinkProps> = ({ icon, ...rest }: IconLinkProps): JSX.Element => {
  return (
    <a rel="noreferrer" target="_blank" {...rest}>
      <FontAwesomeIcon className={styles.icon} color="white" icon={icon} />
    </a>
  )
}
