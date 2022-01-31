import React from 'react'
import { worksData } from '../../appData/worksData'
import { SectionContainer } from '../../components/sectionContainer/SectionContainer'
import { WorkCard } from '../../components/workCard/WorkCard'
import styles from './MyWorks.module.css'

export const MyWorks = () => (
  <SectionContainer className={styles.wrapper}>
    <h1 className={styles.title}>My works example</h1>
    <ul className={styles.itemsList}>
      {worksData.map((work, index) => (
        <li key={index}>
          <WorkCard {...work} />
        </li>
      ))}
    </ul>
    {/* <ul className={styles.myWorks}>
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
      </ul> */}
  </SectionContainer>
)
