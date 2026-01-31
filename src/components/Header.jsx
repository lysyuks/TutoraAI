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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s',
        backgroundColor: isScrolled ? 'rgba(26, 26, 46, 0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        padding: isScrolled ? '12px 0' : '20px 0',
      }}
    >
      <nav className="container-width" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="#" style={{ fontSize: '20px', fontWeight: 'bold', color: 'white', textDecoration: 'none' }}>
          SL<span style={{ color: '#e94560' }}>.</span>
        </a>

        {/* Desktop Navigation */}
        <ul style={{ display: 'none', gap: '32px', listStyle: 'none', margin: 0, padding: 0 }} className="desktop-nav">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '14px', fontWeight: '500', transition: 'color 0.2s' }}
                onMouseOver={(e) => e.target.style.color = '#e94560'}
                onMouseOut={(e) => e.target.style.color = '#9ca3af'}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          style={{ padding: '8px', background: 'none', border: 'none', cursor: 'pointer' }}
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X style={{ width: '24px', height: '24px', color: 'white' }} />
          ) : (
            <Menu style={{ width: '24px', height: '24px', color: 'white' }} />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div style={{ backgroundColor: '#1a1a2e', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <ul className="container-width" style={{ padding: '16px 24px', listStyle: 'none', margin: 0 }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  style={{ display: 'block', padding: '8px 0', color: '#9ca3af', textDecoration: 'none', fontWeight: '500' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
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
