import React, { createContext } from 'react'

import Header from './components/Header/Header'
import Introduction from './components/Introduction/Introduction'
import Projects from './components/Projects/Projects'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import useLocalStorage from './hooks/useLocalStorage'

export const ThemeContext = createContext()

const App = () => {
  const [darkTheme, setDarkTheme] = useLocalStorage('theme', false)

  const toggleTheme = () => {
    setDarkTheme(!darkTheme)
  }

  return (
    <ThemeContext.Provider value={{darkTheme, toggleTheme}}>
      <Header />
      <Introduction />
      <Projects />
      <About />
      <Contact />      
      <Footer />
    </ThemeContext.Provider>
  )
}

export default App