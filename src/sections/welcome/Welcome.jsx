import styles from './Welcome.module.css'

export const Welcome = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.inner}>
        <div>
          <p className={styles.text}>Привет</p>
          <p className={styles.text}>Я являюсь программистом-веб разработчиком.</p>
          <p className={styles.text}>Данное приложение - моё небольшое портфолио.</p>
        </div>
      </div>
    </section>
  )
}
