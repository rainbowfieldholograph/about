import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './IconLink.module.css'

export const IconLink = ({ icon, ...rest }) => {
  return (
    <a rel="noreferrer" target="_blank" {...rest}>
      <FontAwesomeIcon className={styles.icon} color="white" icon={icon} />
    </a>
  )
}
