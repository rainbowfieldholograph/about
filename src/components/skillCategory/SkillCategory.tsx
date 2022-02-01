import { FC } from 'react'
import { Accordion } from '../accordion/Accordion'
import SkillsItem from '../skillsItems/SkillsItem'
import styles from './SkillCategory.module.css'
import { SkillCategoryProps } from './SkillCategory.props'

export const SkillCategory: FC<SkillCategoryProps> = ({
  title,
  skills,
}: SkillCategoryProps) => {
  return (
    <Accordion
      summaryComponent={<h2 className={styles.title}>{title}</h2>}
      summaryClassName={styles.accordionButton}
    >
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
    </Accordion>
  )
}
