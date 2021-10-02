import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './MyLink.module.css'

const MyLink = ({ href, icon }) => {
  return (
    <a rel="noreferrer" href={href} target="_blank">
      <FontAwesomeIcon className={styles.icon} color="white" icon={icon} />
    </a>
  )
}

export default MyLink
