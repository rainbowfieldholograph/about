import styles from './WorkInfo.module.css'

export const WorkInfo = ({ image, title, descr, stack, projectLink, githubLink }) => {
  return (
    <div className={styles.wrapper}>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <h3>{stack}</h3>
      <p>{descr}</p>
    </div>
  )
}
