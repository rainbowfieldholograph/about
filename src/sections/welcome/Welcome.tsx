import styles from './Welcome.module.css';

export const Welcome = (): JSX.Element => {
  return (
    <section aria-label="Welcome" className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.container}>
          <p className={styles.text}>Приветствую</p>
          <p className={styles.text}>Я являюсь программистом - веб разработчиком.</p>
          <p className={styles.text}>
            Увлекаюсь frontend'ом, но так же, иногда изучаю + практикую backend. На данной
            странице, вы можете ознакомиться с описанием моих скиллов и некоторыми проектами.
          </p>
        </div>
      </div>
    </section>
  );
};
