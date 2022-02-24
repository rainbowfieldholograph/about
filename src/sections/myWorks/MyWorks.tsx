import { worksData } from '../../appData/worksData/worksData'
import { SectionContainer } from '../../components/sectionContainer/SectionContainer'
import { WorkCard } from '../../components/workCard/WorkCard'
import styles from './MyWorks.module.css'

export const MyWorks = (): JSX.Element => (
  <SectionContainer className={styles.wrapper}>
    <h1 className={styles.title}>My works example</h1>
    <ul className={styles.itemsList}>
      {worksData.map((work, index) => (
        <li key={index}>
          <WorkCard {...work} />
        </li>
      ))}
    </ul>
  </SectionContainer>
)
