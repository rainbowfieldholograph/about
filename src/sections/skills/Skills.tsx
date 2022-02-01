import { FC } from 'react'
import { skillsData } from '../../appData/skillsData/skillsData'
import { SectionContainer } from '../../components/sectionContainer/SectionContainer'
import { SkillCategory } from '../../components/skillCategory/SkillCategory'
import styles from './Skills.module.css'

export const Skills: FC = (): JSX.Element => {
  return (
    <SectionContainer className={styles.wrapper}>
      <h1 className={styles.title}>My Skills:</h1>
      <ul className={styles.skillsList}>
        {skillsData.map((category, index) => (
          <li key={index}>
            <SkillCategory skills={category.skills} title={category.title} />
          </li>
        ))}
      </ul>
    </SectionContainer>
  )
}
