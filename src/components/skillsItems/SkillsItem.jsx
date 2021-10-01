import React from 'react'
import styles from './SkillsItem.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const SkillsItem = ({ title, icon, fontawesome = true, size = 30 }) => {
  return (
    <li className={styles.item}>
      <div className={styles.box}>
        <p>{title}</p>
        {fontawesome ? (
          <FontAwesomeIcon icon={icon} />
        ) : (
          <img className={styles.img} src={icon} alt="skill" width={size} height={size} />
        )}
      </div>
      <FontAwesomeIcon icon={faCheck} />
    </li>
  )
}

export default SkillsItem
