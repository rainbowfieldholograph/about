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
        {skillsData.map((category) => (
          <SkillCategory skills={category.skills} title={category.title} />
        ))}
        {/* <SkillCategory
          skillData={skillsData.general.skills}
          title={skillsData.general.title}
        />
        <SkillCategory
          skillData={skillsData.frontend.skills}
          title={skillsData.frontend.title}
        />
        <SkillCategory
          skillData={skillsData.backend.skills}
          title={skillsData.backend.title}
        />
        <SkillCategory skillData={skillsData.other.skills} title={skillsData.other.title} /> */}
      </ul>
    </SectionContainer>
  )
}
