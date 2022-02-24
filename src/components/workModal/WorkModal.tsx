import { IconLink } from '../iconLink/IconLink'
import styles from './WorkModal.module.css'
import { WorkModalProps } from './WorkModal.props'
import { faGitAlt } from '@fortawesome/free-brands-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'

export const WorkModal = ({
  image,
  title,
  description,
  stack,
  projectLink,
  gitLink,
}: WorkModalProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.image} src={image} alt={title} />
      <h2>{title}</h2>
      <h3>{stack}</h3>
      <p>{description}</p>
      <div className={styles.linksContainer}>
        {gitLink && <IconLink icon={faGitAlt} href={gitLink} />}
        {projectLink && <IconLink icon={faEye} href={projectLink} />}
      </div>
    </div>
  )
}
