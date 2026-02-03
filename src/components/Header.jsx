import { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon, Globe } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { useLanguage } from '../context/LanguageContext'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, themes, toggleTheme } = useTheme()
  const { language, t, toggleLanguage } = useLanguage()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: t.nav.about, href: '#about' },
    { name: t.nav.experience, href: '#experience' },
    { name: t.nav.skills, href: '#skills' },
    { name: t.nav.contact, href: '#contact' },
  ]

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      backgroundColor: isScrolled ? themes.headerBg : themes.bg,
      boxShadow: isScrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none',
      transition: 'all 0.3s ease'
    }}>
      <nav style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 48px',
        height: '80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Logo */}
        <a href="#" style={{
          fontSize: '20px',
          fontWeight: '700',
          color: themes.text,
          textDecoration: 'none',
          letterSpacing: '-0.5px',
          display: 'flex',
          alignItems: 'center',
          lineHeight: '1',
          marginTop: '0px',
          gap: '3px'
        }}>
          <span style={{ color: '#39c2d7' }}>Serhii</span>
          <span style={{ color: themes.text }}>Lysiuk</span>
        </a>

        {/* Desktop Navigation */}
        <div className="desktop-nav" style={{ display: 'none', gap: '32px', alignItems: 'center' }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                color: themes.textMuted,
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: '500',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                transition: 'color 0.3s'
              }}
              onMouseEnter={(e) => e.target.style.color = '#39c2d7'}
              onMouseLeave={(e) => e.target.style.color = themes.textMuted}
            >
              {link.name}
            </a>
          ))}

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 12px',
              backgroundColor: 'transparent',
              border: `1px solid ${themes.border}`,
              color: themes.textMuted,
              fontSize: '12px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#39c2d7'
              e.currentTarget.style.color = '#39c2d7'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = themes.border
              e.currentTarget.style.color = themes.textMuted
            }}
          >
            <Globe style={{ width: '14px', height: '14px' }} />
            {language.toUpperCase()}
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            style={{
              padding: '10px',
              backgroundColor: 'transparent',
              border: `1px solid ${themes.border}`,
              color: themes.textMuted,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#39c2d7'
              e.currentTarget.style.color = '#39c2d7'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = themes.border
              e.currentTarget.style.color = themes.textMuted
            }}
          >
            {theme === 'light' ? (
              <Moon style={{ width: '18px', height: '18px' }} />
            ) : (
              <Sun style={{ width: '18px', height: '18px' }} />
            )}
          </button>

          <a
            href="#contact"
            style={{
              padding: '12px 24px',
              backgroundColor: '#a3c644',
              color: 'white',
              textDecoration: 'none',
              fontSize: '13px',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#8fb33a'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#a3c644'}
          >
            {t.nav.hireMe}
          </a>
        </div>

        {/* Mobile Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }} className="mobile-controls">
          {/* Language Toggle Mobile */}
          <button
            onClick={toggleLanguage}
            style={{
              padding: '8px',
              backgroundColor: 'transparent',
              border: 'none',
              color: themes.textMuted,
              cursor: 'pointer',
              display: 'flex'
            }}
          >
            <Globe style={{ width: '20px', height: '20px' }} />
          </button>

          {/* Theme Toggle Mobile */}
          <button
            onClick={toggleTheme}
            style={{
              padding: '8px',
              backgroundColor: 'transparent',
              border: 'none',
              color: themes.textMuted,
              cursor: 'pointer',
              display: 'flex'
            }}
          >
            {theme === 'light' ? (
              <Moon style={{ width: '20px', height: '20px' }} />
            ) : (
              <Sun style={{ width: '20px', height: '20px' }} />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            style={{ padding: '8px', background: 'none', border: 'none', cursor: 'pointer' }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X style={{ width: '24px', height: '24px', color: themes.text }} />
            ) : (
              <Menu style={{ width: '24px', height: '24px', color: themes.text }} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div style={{
          backgroundColor: themes.bg,
          borderTop: `1px solid ${themes.border}`,
          padding: '24px 48px'
        }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                display: 'block',
                padding: '12px 0',
                color: themes.text,
                textDecoration: 'none',
                fontWeight: '500',
                fontSize: '14px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                borderBottom: `1px solid ${themes.border}`
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            style={{
              display: 'inline-block',
              marginTop: '16px',
              padding: '12px 24px',
              backgroundColor: '#a3c644',
              color: 'white',
              textDecoration: 'none',
              fontSize: '13px',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t.nav.hireMe}
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
          .mobile-controls { display: none !important; }
        }
      `}</style>
    </header>
  )
}

export default Header
