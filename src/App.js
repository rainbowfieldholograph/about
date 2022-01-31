import './App.css'
import './globals.css'
import { Footer } from './sections/footer/Footer'
import { MyWorks } from './sections/myWorks/MyWorks'
import { Skills } from './sections/skills/Skills'
import { Welcome } from './sections/welcome/Welcome'

const App = () => (
  <div className="container">
    <Welcome />
    <main className="contentSection">
      <Skills />
      <MyWorks />
    </main>
    <Footer />
  </div>
)

export default App
