import { FC } from 'react'
import { IconLink } from '../iconLink/IconLink'
import styles from './WorkModal.module.css'
import { WorkInfoProps } from './WorkModal.props'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'

export const WorkModal: FC<WorkInfoProps> = ({
  image,
  title,
  description,
  stack,
  projectLink,
  githubLink,
}: WorkInfoProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <h3>{stack}</h3>
      <p>{description}</p>
      <div className={styles.linksContainer}>
        {githubLink && <IconLink icon={faGithub} href={githubLink} />}
        {projectLink && <IconLink icon={faEye} href={projectLink} />}
      </div>
    </div>
  )
}
