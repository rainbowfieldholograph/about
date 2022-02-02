import { FC, useState } from 'react'
import { Modal } from '../modal/Modal'
import { WorkModal } from '../workModal/WorkModal'
import styles from './WorkCard.module.css'
import { WorkCardProps } from './WorkCard.props'

export const WorkCard: FC<WorkCardProps> = ({
  image,
  imagePreview,
  title,
  description,
  stack,
  projectLink,
  githubLink,
}: WorkCardProps) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <button onClick={() => setIsOpen(true)} className={styles.card}>
        <img src={imagePreview ? imagePreview : image} alt={title} />
        <h2>{title}</h2>
        <h3>{stack}</h3>
      </button>
      <Modal className={styles.modal} open={isOpen} onClose={() => setIsOpen(false)}>
        <WorkModal
          image={image}
          title={title}
          description={description}
          stack={stack}
          projectLink={projectLink}
          githubLink={githubLink}
        />
      </Modal>
    </>
  )
}
