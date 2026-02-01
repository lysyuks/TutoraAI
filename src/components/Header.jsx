import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'white',
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
          fontSize: '24px',
          fontWeight: '700',
          color: '#464547',
          textDecoration: 'none',
          letterSpacing: '-0.5px'
        }}>
          <span style={{ color: '#39c2d7' }}>S</span>ERHII
          <span style={{ color: '#a3c644' }}>.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="desktop-nav" style={{ display: 'none', gap: '40px', alignItems: 'center' }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                color: '#464547',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: '500',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                transition: 'color 0.3s'
              }}
              onMouseEnter={(e) => e.target.style.color = '#39c2d7'}
              onMouseLeave={(e) => e.target.style.color = '#464547'}
            >
              {link.name}
            </a>
          ))}
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
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          style={{ padding: '8px', background: 'none', border: 'none', cursor: 'pointer' }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X style={{ width: '24px', height: '24px', color: '#464547' }} />
          ) : (
            <Menu style={{ width: '24px', height: '24px', color: '#464547' }} />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div style={{ backgroundColor: 'white', borderTop: '1px solid #e0e0e0', padding: '24px 48px' }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                display: 'block',
                padding: '12px 0',
                color: '#464547',
                textDecoration: 'none',
                fontWeight: '500',
                fontSize: '14px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                borderBottom: '1px solid #f0f0f0'
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
            Hire Me
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </header>
  )
}

export default Header
