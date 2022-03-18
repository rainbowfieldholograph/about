import { IconLink } from '../../components/iconLink/IconLink';
import { linksData } from '../../appData/linksData/linksData';
import styles from './Footer.module.css';

export const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <h1 className={styles.title}>Links:</h1>
      <ul className={styles.box}>
        {linksData.map((skill, index) => (
          <li key={index}>
            <IconLink
              title={skill.title}
              aria-label={skill.title}
              Icon={skill.icon}
              href={skill.linkTo}
            />
          </li>
        ))}
      </ul>
    </footer>
  );
};
