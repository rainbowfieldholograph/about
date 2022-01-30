import styles from './Work.module.css'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import MyLink from '../myLink/MyLink'

const Work = ({ image, title, descr, stack, project, github }) => {
  return (
    <li className={styles.work}>
      <h2>{title}</h2>
      <div className={styles.imgWrapper}>
        <img className={styles.image} src={image} alt="work example" />
      </div>

      <div className={styles.links}>
        {project && <MyLink href={project} icon={faEye} />}
        {github && <MyLink href={github} icon={faGithub} />}
      </div>
      <p>{descr}</p>
      <p>Стек технологий: {stack}</p>
    </li>
  )
}

export default Work