import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  return (
    <div>
      <Header/>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer/>
    </div>
  )
}

export default App