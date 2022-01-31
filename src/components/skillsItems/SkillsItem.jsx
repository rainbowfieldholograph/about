import { Accordion } from '../accordion/Accordion'
import styles from './SkillsItem.module.css'

const SkillsItem = ({ title, iconComponent, description }) => {
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
