import { useState } from 'react'
import { Modal } from '../modal/Modal'
import styles from './WorkCard.module.css'

export const WorkCard = ({ image, title, descr, stack, projectLink, githubLink }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <button onClick={() => setIsOpen(true)} className={styles.card}>
        <img src={image} alt={`work: ${title}`} />
        <h2 className={styles.title}>{title}</h2>
        <h3 className={styles.descr}>{stack}</h3>
      </button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        open
      </Modal>
    </>
  )
}
