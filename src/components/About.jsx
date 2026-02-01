import { MapPin, Briefcase, TrendingUp, Award } from 'lucide-react'
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

  const certifications = [
    'Certified SAFe 4 - EPAM Systems',
    'AI Product Manager Nanodegree - Udacity'
  ]

  return (
    <section id="about" style={{
      backgroundColor: themes.bg,
      padding: '100px 0',
      transition: 'background-color 0.3s'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 48px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center'
        }} className="about-grid">
          {/* Left - Content */}
          <div>
            <p style={{
              fontSize: '12px',
              color: '#39c2d7',
              letterSpacing: '3px',
              marginBottom: '16px',
              fontWeight: '600',
              textTransform: 'uppercase'
            }}>
              {t.about.label}
            </p>
            <h2 style={{
              fontSize: '48px',
              fontWeight: '700',
              color: themes.text,
              marginBottom: '16px',
              lineHeight: '1.1'
            }}>
              {t.about.title}
            </h2>
            <div style={{
              width: '60px',
              height: '4px',
              background: 'linear-gradient(90deg, #39c2d7, #a3c644)',
              marginBottom: '32px'
            }}></div>

            <p style={{
              fontSize: '18px',
              color: themes.textMuted,
              marginBottom: '24px',
              lineHeight: '1.8'
            }}>
              {t.about.bio1}
            </p>

            <p style={{
              fontSize: '16px',
              color: themes.textMuted,
              marginBottom: '24px',
              lineHeight: '1.8'
            }}>
              {t.about.bio2}
            </p>

            <p style={{
              fontSize: '16px',
              color: themes.textMuted,
              marginBottom: '40px',
              lineHeight: '1.8'
            }}>
              {t.about.bio3}
            </p>

            {/* Info Items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
              {[
                { icon: MapPin, text: 'Prague, Czechia', label: t.about.location },
                { icon: Briefcase, text: 'AI Product Manager at UserWay', label: t.about.currentRole },
                { icon: TrendingUp, text: '14+ years', label: t.about.experienceLabel },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    backgroundColor: themes.bgAlt,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <item.icon style={{ width: '20px', height: '20px', color: '#39c2d7' }} />
                  </div>
                  <div>
                    <p style={{
                      fontSize: '12px',
                      color: themes.textLight,
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      marginBottom: '2px'
                    }}>
                      {item.label}
                    </p>
                    <p style={{ fontSize: '16px', color: themes.text, fontWeight: '500' }}>
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div style={{
              padding: '24px',
              backgroundColor: themes.bgAlt,
              borderLeft: '4px solid #a3c644'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <Award style={{ width: '20px', height: '20px', color: '#a3c644' }} />
                <span style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: themes.text,
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  {t.about.certifications}
                </span>
              </div>
              {certifications.map((cert, i) => (
                <p key={i} style={{
                  fontSize: '14px',
                  color: themes.textMuted,
                  marginBottom: i < certifications.length - 1 ? '8px' : 0
                }}>
                  {cert}
                </p>
              ))}
            </div>
          </div>

          {/* Right - Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '24px'
          }}>
            {stats.map((stat, i) => (
              <div
                key={i}
                style={{
                  padding: '40px 32px',
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
                  height: '4px',
                  backgroundColor: stat.color
                }}></div>
                <div style={{
                  fontSize: '48px',
                  fontWeight: '700',
                  color: stat.color,
                  marginBottom: '8px',
                  lineHeight: '1'
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontSize: '14px',
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
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  )
}

export default About
