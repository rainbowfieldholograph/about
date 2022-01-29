import React from 'react'
import styles from './SkillsItem.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const SkillsItem = ({ title, iconComponent, description }) => {
  console.log(iconComponent)
  return (
    <details className={styles.details}>
      <summary className={styles.box}>
        <FontAwesomeIcon className={styles.chevron} icon={faChevronRight} />
        <p className={styles.title}>{title}</p>
        {iconComponent}
        <FontAwesomeIcon icon={faCheck} />
      </summary>
      <div className={styles.inner}>{description}</div>
    </details>
  )
}

export default SkillsItem
