import { Accordion } from '../accordion/Accordion'
import SkillsItem from '../skillsItems/SkillsItem'
import styles from './SkillCategory.module.css'
import { SkillCategoryProps } from './SkillCategory.props'

export const SkillCategory = ({ title, skills }: SkillCategoryProps) => {
  return (
    <Accordion>
      <Accordion.Summary className={styles.accordionButton}>
        <h2 className={styles.title}>{title}</h2>
      </Accordion.Summary>
      <Accordion.Item>
        <ul className={styles.list}>
          {skills.map((item, index) => (
            <li key={index}>
              <SkillsItem
                title={item.title}
                iconComponent={item.iconComponent}
                description={item.description}
              />
            </li>
          ))}
        </ul>
      </Accordion.Item>
    </Accordion>
  )
}
