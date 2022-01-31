import styles from './WorkCard.module.css'

export const WorkCard = ({ image, title, descr, stack, projectLink, githubLink }) => {
  return (
    <button className={styles.card}>
      <img src={image} alt={`work: ${title}`} />
      <h2 className={styles.title}>{title}</h2>
    </button>
  )
}
