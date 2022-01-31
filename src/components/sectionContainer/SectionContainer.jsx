import styles from './SectionContainer.module.css'

export const SectionContainer = ({ className, children, ...rest }) => {
  return (
    <section className={[styles.container, className].join(' ')} {...rest}>
      {children}
    </section>
  )
}
