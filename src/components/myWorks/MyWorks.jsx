import React from 'react'
import { worksData } from '../../appData/worksData/WorksData'
import Work from '../work/Work'
import styles from './MyWorks.module.css'

const MyWorks = () => (
  <section className={styles.wrapper}>
    <div className={styles.container}>
      <h1 className={styles.title}>My works example</h1>
      <ul className={styles.myWorks}>
        {worksData.map((item, index) => (
          <Work
            key={index}
            image={item.image}
            title={item.title}
            descr={item.descr}
            stack={item.stack}
            project={item.project}
            github={item.github}
          />
        ))}
      </ul>
    </div>
  </section>
)

export default MyWorks
