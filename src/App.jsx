import { useTheme } from './context/ThemeContext'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const { themes } = useTheme()

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: themes.bg,
      color: themes.text,
      transition: 'background-color 0.3s, color 0.3s'
    }}>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
