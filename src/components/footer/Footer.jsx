import React from 'react'
import IconLink from '../myLink/MyLink'
import { faGithub, faTelegram } from '@fortawesome/free-brands-svg-icons'
import styles from './Footer.module.css'

const Links = () => {
  return (
    <footer className={styles.footer}>
      <h2>Links:</h2>
      <ul className={styles.box}>
        <li>
          <IconLink icon={faGithub} href="https://github.com/rainbowfieldholograph" />
        </li>
        <li>
          <IconLink href="https://t.me/duvetduvet" icon={faTelegram} />
        </li>
      </ul>
    </footer>
  )
}

export default Links
