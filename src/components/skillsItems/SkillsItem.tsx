import { Accordion } from '../accordion/Accordion'
import styles from './SkillsItem.module.css'
import { SkillsItemProps } from './SkillsItem.props'

const SkillsItem = ({ title, iconComponent, description }: SkillsItemProps): JSX.Element => {
  return (
    <Accordion>
      <Accordion.Summary className={styles.items}>
        <h3 className={styles.title}>{title}</h3>
        {iconComponent}
      </Accordion.Summary>
      <Accordion.Item>
        <span className={styles.text}>{description}</span>
      </Accordion.Item>
    </Accordion>
  )
}

export default SkillsItem
