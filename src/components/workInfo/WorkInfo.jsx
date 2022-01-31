export const WorkInfo = ({ image, title, descr, stack, projectLink, githubLink }) => {
  return (
    <div>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <h2>{stack}</h2>
      <p>{descr}</p>
    </div>
  )
}
