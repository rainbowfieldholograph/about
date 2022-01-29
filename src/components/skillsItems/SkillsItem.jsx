import React from 'react'
import styles from './SkillsItem.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const SkillsItem = ({ title, iconComponent }) => {
  console.log(iconComponent)
  return (
    <li className={styles.item}>
      <div className={styles.box}>
        <p>{title}</p>
        {iconComponent}
      </div>
      <FontAwesomeIcon icon={faCheck} />
    </li>
  )
}

export default SkillsItem
