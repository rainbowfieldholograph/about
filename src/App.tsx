import { Footer } from './sections/footer/Footer';
import { MyWorks } from './sections/myWorks/MyWorks';
import { Skills } from './sections/skills/Skills';
import { Welcome } from './sections/welcome/Welcome';
import './App.css';
import './globals.css';
import { GithubHeadLink } from './components/githubHeadLink/GithubHeadLink';

const App = (): JSX.Element => (
  <div className="container">
    <GithubHeadLink />
    <Welcome />
    <main className="contentSection">
      <Skills />
      <MyWorks />
    </main>
    <Footer />
  </div>
);

export default App;
