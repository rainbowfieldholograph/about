import { Accordion } from '../accordion/Accordion'
import SkillsItem from '../skillsItems/SkillsItem'
import styles from './SkillCategory.module.css'

export const SkillCategory = ({ title, skillData }) => {
  return (
    <Accordion summaryComponent={<p>{title}</p>} summaryClassName={styles.accordionButton}>
      <ul className={styles.list}>
        {skillData.map((item, index) => (
          <li key={index}>
            <SkillsItem
              title={item.title}
              iconComponent={item.iconComponent}
              fontawesome={item.fontawesome}
              description={item.description}
              size={item.size}
            />
          </li>
        ))}
      </ul>
    </Accordion>
  )
}
