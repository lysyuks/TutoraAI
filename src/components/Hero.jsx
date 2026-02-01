import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { useLanguage } from '../context/LanguageContext'

function Hero() {
  const { themes } = useTheme()
  const { t } = useLanguage()

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      backgroundColor: themes.bg,
      paddingTop: '80px',
      transition: 'background-color 0.3s'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '80px 48px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '80px',
        alignItems: 'center',
        width: '100%'
      }} className="hero-grid">
        {/* Left Content */}
        <div>
          {/* Tagline */}
          <p style={{
            fontSize: '12px',
            color: '#39c2d7',
            letterSpacing: '3px',
            marginBottom: '24px',
            fontWeight: '600',
            textTransform: 'uppercase'
          }}>
            {t.hero.tagline}
          </p>

          {/* Name */}
          <h1 style={{
            fontSize: '64px',
            fontWeight: '700',
            marginBottom: '16px',
            color: themes.text,
            lineHeight: '1.1',
            letterSpacing: '-1px'
          }}>
            Serhii<br />
            <span style={{ color: '#39c2d7' }}>Lysiuk</span>
          </h1>

          {/* Title */}
          <p style={{
            fontSize: '24px',
            color: themes.textMuted,
            fontWeight: '400',
            marginBottom: '32px'
          }}>
            {t.hero.title}
          </p>

          {/* Accent Line */}
          <div style={{
            width: '60px',
            height: '4px',
            background: 'linear-gradient(90deg, #39c2d7, #a3c644)',
            marginBottom: '32px'
          }}></div>

          {/* Description */}
          <p style={{
            fontSize: '18px',
            color: themes.textMuted,
            marginBottom: '40px',
            lineHeight: '1.8',
            maxWidth: '500px'
          }}>
            {t.hero.description}
          </p>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', gap: '16px', marginBottom: '48px' }} className="hero-buttons">
            <a
              href="#contact"
              style={{
                padding: '16px 32px',
                backgroundColor: '#a3c644',
                color: 'white',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#8fb33a'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#a3c644'}
            >
              {t.hero.getInTouch}
            </a>
            <a
              href="#experience"
              style={{
                padding: '16px 32px',
                backgroundColor: 'transparent',
                color: themes.text,
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                border: `2px solid ${themes.text}`,
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = themes.text
                e.target.style.color = themes.bg
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent'
                e.target.style.color = themes.text
              }}
            >
              {t.hero.viewExperience}
            </a>
          </div>

          {/* Social Links */}
          <div style={{ display: 'flex', gap: '16px' }}>
            {[
              { icon: Github, href: 'https://github.com/lysyuks', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/serhii-lysiuk-322ab926/', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:sm.lysyuk@gmail.com', label: 'Email' }
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                style={{
                  padding: '12px',
                  border: `1px solid ${themes.border}`,
                  color: themes.text,
                  display: 'flex',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#39c2d7'
                  e.currentTarget.style.color = '#39c2d7'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = themes.border
                  e.currentTarget.style.color = themes.text
                }}
                title={item.label}
              >
                <item.icon style={{ width: '20px', height: '20px' }} />
              </a>
            ))}
          </div>
        </div>

        {/* Right Content - Profile Image */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div style={{
            width: '400px',
            height: '400px',
            position: 'relative'
          }}>
            {/* Background Shape */}
            <div style={{
              position: 'absolute',
              top: '20px',
              left: '20px',
              width: '100%',
              height: '100%',
              background: 'linear-gradient(135deg, #39c2d7 0%, #a3c644 100%)',
              zIndex: 0
            }}></div>
            {/* Image Container */}
            <div style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              backgroundColor: themes.bgAlt,
              overflow: 'hidden',
              zIndex: 1
            }}>
              <img
                src="/profile.png"
                alt="Serhii Lysiuk"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.parentElement.innerHTML = `
                    <div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #39c2d7, #a3c644);">
                      <span style="font-size: 120px; font-weight: 700; color: white;">SL</span>
                    </div>
                  `
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          animation: 'bounce 2s infinite',
          color: '#39c2d7'
        }}
      >
        <ArrowDown style={{ width: '24px', height: '24px' }} />
      </a>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-10px); }
        }
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
            gap: 40px !important;
          }
          .hero-grid h1 {
            font-size: 48px !important;
          }
          .hero-grid > div:first-child {
            order: 2;
          }
          .hero-grid > div:last-child {
            order: 1;
          }
          .hero-grid > div:last-child > div {
            width: 280px !important;
            height: 280px !important;
          }
          .hero-buttons {
            justify-content: center !important;
          }
          .hero-grid > div:first-child > div:last-child {
            justify-content: center !important;
          }
          .hero-grid p {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-grid > div:first-child > div:nth-child(5) {
            margin-left: auto;
            margin-right: auto;
          }
        }
      `}</style>
    </section>
  )
}

export default Hero
