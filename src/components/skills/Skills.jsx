import styles from './Skills.module.css'
import SkillsItem from '../skillsItems/SkillsItem'
import { skillsData } from '../../appData/SkillsData/SkillsData'

const Skills = () => {
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.title}>My Skills:</h1>
      <ul className={styles.list}>
        {skillsData.map((item, index) => (
          <SkillsItem
            key={index}
            title={item.title}
            iconComponent={item.iconComponent}
            fontawesome={item.fontawesome}
            size={item.size}
          />
        ))}
      </ul>
      <div className={styles.descr}>
        В данном списке указаны технологии, которые я изучал (продолжаю изучать), и с которыми
        у меня есть определенный опыт работы.
      </div>
    </section>
  )
}

export default Skills
