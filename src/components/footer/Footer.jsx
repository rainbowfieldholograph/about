import React from 'react'
import MyLink from '../myLink/MyLink'
import { faGithub, faTelegram } from '@fortawesome/free-brands-svg-icons'

import styles from './Footer.module.css'

const Links = () => {
  return (
    <footer className={styles.footer}>
      <h2>Links:</h2>
      <ul className={styles.box}>
        <li>
          <MyLink href="https://github.com/rainbowfieldholograph" icon={faGithub} />
        </li>
        <li>
          <MyLink href="https://t.me/inversedoubts" icon={faTelegram} />
        </li>
      </ul>
    </footer>
  )
}

export default Links
