import { useState } from 'react'
import { Modal } from '../modal/Modal'
import { WorkInfo } from '../workInfo/WorkInfo'
import styles from './WorkCard.module.css'

export const WorkCard = ({ image, title, descr, stack, projectLink, githubLink }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <button onClick={() => setIsOpen(true)} className={styles.card}>
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <h3>{stack}</h3>
      </button>
      <Modal className={styles.modal} open={isOpen} onClose={() => setIsOpen(false)}>
        <WorkInfo image={image} title={title} descr={descr} stack={stack} pro />
      </Modal>
    </>
  )
}
