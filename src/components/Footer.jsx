import { Github, Linkedin, Mail } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { useLanguage } from '../context/LanguageContext'

function Footer() {
  const { themes } = useTheme()
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer style={{
      backgroundColor: themes.footerBg,
      padding: '60px 0 40px',
      transition: 'background-color 0.3s'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 48px' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingBottom: '40px',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          marginBottom: '40px',
          flexWrap: 'wrap',
          gap: '24px'
        }}>
          {/* Logo */}
          <a href="#" style={{
            fontSize: '24px',
            fontWeight: '700',
            color: 'white',
            textDecoration: 'none',
            letterSpacing: '-0.5px'
          }}>
            <span style={{ color: '#39c2d7' }}>Serhii</span>{' '}
            <span style={{ color: 'white' }}>Lysiuk</span>
          </a>

          {/* Social Links */}
          <div style={{ display: 'flex', gap: '16px' }}>
            {[
              { icon: Github, href: 'https://github.com/lysyuks' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/serhii-lysiuk-322ab926/' },
              { icon: Mail, href: 'mailto:sm.lysyuk@gmail.com' },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                style={{
                  width: '44px',
                  height: '44px',
                  border: '1px solid rgba(255,255,255,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'rgba(255,255,255,0.6)',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#39c2d7'
                  e.currentTarget.style.color = '#39c2d7'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
                  e.currentTarget.style.color = 'rgba(255,255,255,0.6)'
                }}
              >
                <item.icon style={{ width: '18px', height: '18px' }} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)' }}>
            &copy; {currentYear} Serhii Lysiuk. {t.footer.rights}
          </p>
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)' }}>
            {t.footer.title}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
