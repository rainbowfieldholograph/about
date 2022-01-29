import React from 'react'
import styles from './SkillsItem.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const SkillsItem = ({ title, iconComponent }) => {
  console.log(iconComponent)
  return (
    <div className={styles.box}>
      <p className={styles.title}>{title}</p>
      {iconComponent}
      <FontAwesomeIcon icon={faCheck} />
    </div>
  )
}

export default SkillsItem
