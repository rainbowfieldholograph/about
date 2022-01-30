import { Accordion } from '../accordion/Accordion'
import styles from './SkillsItem.module.css'

const SkillsItem = ({ title, iconComponent, description }) => {
  return (
    <Accordion
      summaryComponent={
        <>
          <p className={styles.title}>{title}</p>
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
