import { IconLink } from '../iconLink/IconLink';
import styles from './WorkModal.module.css';
import { WorkModalProps } from './WorkModal.props';
import { ReactComponent as GitIcon } from '../../img/git-icon.svg';
import { ReactComponent as WatchIcon } from '../../img/eye-icon.svg';

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
        {gitLink && <IconLink Icon={GitIcon} href={gitLink} />}
        {projectLink && <IconLink Icon={WatchIcon} href={projectLink} />}
      </div>
    </div>
  );
};
