import './App.css'
import './defaultStyles.css'
import Welcome from './components/welcome/Welcome'
import Skills from './components/skills/Skills'
import MyWorks from './components/myWorks/MyWorks'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div className="container">
      <Welcome />
      <Skills />
      <MyWorks />
      <Footer />
    </div>
  )
}

export default App
