import './App.css'
import './globals.css'
import Welcome from './components/welcome/Welcome'
import Skills from './components/skills/Skills'
import MyWorks from './components/myWorks/MyWorks'
import Footer from './components/footer/Footer'

const App = () => (
  <div className="container">
    <Welcome />
    <Skills />
    <MyWorks />
    <Footer />
  </div>
)

export default App
