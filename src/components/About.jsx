import { useTheme } from '../context/ThemeContext'
import { useLanguage } from '../context/LanguageContext'

function About() {
  const { themes } = useTheme()
  const { t } = useLanguage()

  const stats = [
    { value: '1.5M+', label: t.about.stats.installs, color: '#39c2d7' },
    { value: '14+', label: t.about.stats.years, color: '#a3c644' },
    { value: '$670M', label: t.about.stats.revenue, color: '#39c2d7' },
    { value: '1000+', label: t.about.stats.engineers, color: '#a3c644' },
  ]

  return (
    <section id="about" style={{
      backgroundColor: themes.bg,
      padding: '80px 0',
      transition: 'background-color 0.3s'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 48px' }}>
        {/* Header */}
        <div style={{ marginBottom: '40px' }}>
          <p style={{
            fontSize: '12px',
            color: '#39c2d7',
            letterSpacing: '3px',
            marginBottom: '12px',
            fontWeight: '600',
            textTransform: 'uppercase'
          }}>
            {t.about.label}
          </p>
          <h2 style={{
            fontSize: '42px',
            fontWeight: '700',
            color: themes.text,
            marginBottom: '12px',
            lineHeight: '1.1'
          }}>
            {t.about.title}
          </h2>
          <div style={{
            width: '60px',
            height: '4px',
            background: 'linear-gradient(90deg, #39c2d7, #a3c644)'
          }}></div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '60px',
          alignItems: 'start'
        }} className="about-grid">
          {/* Left - Content */}
          <div>
            <p style={{
              fontSize: '17px',
              color: themes.textMuted,
              marginBottom: '20px',
              lineHeight: '1.75'
            }}>
              {t.about.bio1}
            </p>

            <p style={{
              fontSize: '15px',
              color: themes.textMuted,
              marginBottom: '20px',
              lineHeight: '1.75'
            }}>
              {t.about.bio2}
            </p>

            <p style={{
              fontSize: '15px',
              color: themes.textMuted,
              lineHeight: '1.75',
              padding: '16px 20px',
              borderLeft: '3px solid #a3c644',
              backgroundColor: themes.bgAlt
            }}>
              {t.about.bio3}
            </p>
          </div>

          {/* Right - Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px'
          }}>
            {stats.map((stat, i) => (
              <div
                key={i}
                style={{
                  padding: '28px 24px',
                  backgroundColor: themes.cardBg,
                  border: `1px solid ${themes.border}`,
                  textAlign: 'center',
                  transition: 'all 0.3s',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                className="stat-card"
              >
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  backgroundColor: stat.color
                }}></div>
                <div style={{
                  fontSize: '36px',
                  fontWeight: '700',
                  color: stat.color,
                  marginBottom: '6px',
                  lineHeight: '1'
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontSize: '11px',
                  color: themes.textMuted,
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .stat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.15);
        }
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  )
}

export default About
