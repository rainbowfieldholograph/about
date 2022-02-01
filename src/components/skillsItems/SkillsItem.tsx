import { FC } from 'react'
import { Accordion } from '../accordion/Accordion'
import styles from './SkillsItem.module.css'
import { SkillsItemProps } from './SkillsItem.props'

const SkillsItem: FC<SkillsItemProps> = ({
  title,
  iconComponent,
  description,
}: SkillsItemProps): JSX.Element => {
  return (
    <Accordion
      summaryComponent={
        <>
          <h3 className={styles.title}>{title}</h3>
          {iconComponent}
        </>
      }
      summaryClassName={styles.items}
    >
      <span className={styles.text}>{description}</span>
    </Accordion>
  )
}

export default SkillsItem
