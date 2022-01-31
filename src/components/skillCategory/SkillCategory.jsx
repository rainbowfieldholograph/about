import { Accordion } from '../accordion/Accordion'
import SkillsItem from '../skillsItems/SkillsItem'
import styles from './SkillCategory.module.css'

export const SkillCategory = ({ title, skillData }) => {
  return (
    <Accordion
      summaryComponent={<h2 className={styles.title}>{title}</h2>}
      summaryClassName={styles.accordionButton}
    >
      <ul className={styles.list}>
        {skillData.map((item, index) => (
          <li key={index}>
            <SkillsItem
              title={item.title}
              iconComponent={item.iconComponent}
              description={item.description}
            />
          </li>
        ))}
      </ul>
    </Accordion>
  )
}
