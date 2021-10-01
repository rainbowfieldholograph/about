import React from 'react'
import styles from './Welcome.module.css'

const Welcome = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.inner}>
        <div>
          <h1 className={styles.text}>Привет</h1>
          <p className={styles.text}>Я являюсь программистом-веб разработчиком.</p>
          <p className={styles.text}>Данное приложение - это моё небольшое портфолио.</p>
          <p className={styles.text}>ps. im not designer.</p>
        </div>
      </div>
    </section>
  )
}

export default Welcome
