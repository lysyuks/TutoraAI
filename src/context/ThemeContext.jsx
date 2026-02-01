import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export const themes = {
  light: {
    name: 'light',
    bg: '#ffffff',
    bgAlt: '#f5f5f5',
    text: '#464547',
    textMuted: '#666666',
    textLight: '#999999',
    border: '#e0e0e0',
    accent: '#39c2d7',
    accentGreen: '#a3c644',
    cardBg: '#ffffff',
    headerBg: 'rgba(255, 255, 255, 0.98)',
    footerBg: '#2d2d2f',
    contactBg: '#464547',
  },
  dark: {
    name: 'dark',
    bg: '#1a1a1a',
    bgAlt: '#242424',
    text: '#ffffff',
    textMuted: '#b0b0b0',
    textLight: '#808080',
    border: '#333333',
    accent: '#39c2d7',
    accentGreen: '#a3c644',
    cardBg: '#242424',
    headerBg: 'rgba(26, 26, 26, 0.98)',
    footerBg: '#141414',
    contactBg: '#242424',
  }
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved && themes[saved]) {
      setTheme(saved)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, themes: themes[theme], toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
