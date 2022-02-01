import { FC } from 'react'
import styles from './WorkModal.module.css'
import { WorkInfoProps } from './WorkModal.props'

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
    </div>
  )
}
