import React from 'react'
import styles from './Skills.module.css'
import {
  faHtml5,
  faNode,
  faCss3Alt,
  faJsSquare,
  faReact,
  faAws,
} from '@fortawesome/free-brands-svg-icons'
import SkillsItem from '../skillsItems/SkillsItem'
import mongoImg from '../../img/mongo.png'
import graphqlImg from '../../img/graphql.png'

const skillsData = [
  { title: 'HTML', icon: faHtml5 },
  { title: 'CSS', icon: faCss3Alt },
  { title: 'JavaScript', icon: faJsSquare },
  { title: 'React', icon: faReact },
  { title: 'NodeJS', icon: faNode },
  { title: 'MongoDB', icon: mongoImg, fontawesome: false },
  { title: 'GraphQL', icon: graphqlImg, fontawesome: false, size: 40 },
  { title: 'S3 Buckets', icon: faAws },
]

const Skills = () => {
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.title}>My Skills:</h1>
      <ul className={styles.list}>
        {skillsData.map((item, index) => {
          return (
            <SkillsItem
              key={index}
              title={item.title}
              icon={item.icon}
              fontawesome={item.fontawesome}
              size={item.size}
            />
          )
        })}
      </ul>
      <div className={styles.descr}>
        В данном списке указаны технологии, которые я изучал (продолжаю изучать), и с которыми у
        меня есть определенный опыт работы.
      </div>
    </section>
  )
}

export default Skills
