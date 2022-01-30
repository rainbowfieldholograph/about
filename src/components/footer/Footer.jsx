import React from 'react'
import IconLink from '../myLink/MyLink'
import styles from './Footer.module.css'
import { linksData } from '../../appData/linksData'

const Links = () => {
  return (
    <footer className={styles.footer}>
      <h2>Links:</h2>
      <ul className={styles.box}>
        {linksData.map((skill, index) => (
          <li key={index}>
            <IconLink aria-label={skill.title} icon={skill.icon} href={skill.linkTo} />
          </li>
        ))}
      </ul>
    </footer>
  )
}

export default Links
