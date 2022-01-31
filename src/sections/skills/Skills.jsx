import { skillsData } from '../../appData/skillsData'
import { SectionContainer } from '../../components/sectionContainer/SectionContainer'
import { SkillCategory } from '../../components/skillCategory/SkillCategory'
import styles from './Skills.module.css'

export const Skills = () => {
  return (
    <SectionContainer className={styles.wrapper}>
      <h1 className={styles.title}>My Skills:</h1>
      <ul className={styles.skillsList}>
        <SkillCategory
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
        <SkillCategory skillData={skillsData.other.skills} title={skillsData.other.title} />
      </ul>
    </SectionContainer>
  )
}
