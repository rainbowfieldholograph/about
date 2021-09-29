import React from 'react'
import styles from './Welcome.module.css'

const Welcome = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.inner}>
        <div>
          <h1 className={styles.hello}>Привет</h1>
          <p>Я являюсь программистом-веб разработчиком.</p>
          <p>Данное приложение - это моё небольшое портфолио.</p>
          <p>ps. im not designer.</p>
        </div>
      </div>
    </section>
  )
}

export default Welcome
