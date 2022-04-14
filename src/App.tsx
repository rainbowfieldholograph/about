import { Footer } from './sections/footer/Footer';
import { MyWorks } from './sections/myWorks/MyWorks';
import { Skills } from './sections/skills/Skills';
import { Welcome } from './sections/welcome/Welcome';
// import './App.css';
import styles from './App.module.css';
import './globals.css';
import { GithubHeadLink } from './components/githubHeadLink/GithubHeadLink';

const App = (): JSX.Element => (
  <div className={styles.container}>
    <GithubHeadLink />
    <main className={styles.main}>
      <Welcome />
      <div className={styles.contentSection}>
        <Skills />
        <MyWorks />
      </div>
    </main>
    <Footer />
  </div>
);

export default App;
