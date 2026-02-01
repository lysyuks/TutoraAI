import { MapPin, Briefcase, TrendingUp, Award } from 'lucide-react'

function About() {
  const stats = [
    { value: '1.5M+', label: 'Widget Installations', color: '#39c2d7' },
    { value: '14+', label: 'Years Experience', color: '#a3c644' },
    { value: '$670M', label: 'Revenue Generated', color: '#39c2d7' },
    { value: '1000+', label: 'Engineers Supported', color: '#a3c644' },
  ]

  const certifications = [
    'Certified SAFe 4 - EPAM Systems',
    'AI Product Manager Nanodegree - Udacity'
  ]

  return (
    <section id="about" style={{ backgroundColor: 'white', padding: '100px 0' }}>
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
              WHO I AM
            </p>
            <h2 style={{
              fontSize: '48px',
              fontWeight: '700',
              color: '#464547',
              marginBottom: '16px',
              lineHeight: '1.1'
            }}>
              About Me
            </h2>
            <div style={{
              width: '60px',
              height: '4px',
              background: 'linear-gradient(90deg, #39c2d7, #a3c644)',
              marginBottom: '32px'
            }}></div>

            <p style={{
              fontSize: '18px',
              color: '#666',
              marginBottom: '24px',
              lineHeight: '1.8'
            }}>
              Technical Product Manager with deep expertise in AI, blockchain,
              legal tech, and supply-chain domains. I deliver high-impact
              products for enterprises and startups, turning complex challenges
              into elegant solutions.
            </p>

            <p style={{
              fontSize: '16px',
              color: '#666',
              marginBottom: '40px',
              lineHeight: '1.8'
            }}>
              When people love what they do, great results follow. For me,
              shaping the future through tech is a true calling. Currently leading
              AI/LLM product strategy at UserWay, building accessibility solutions
              that reach millions worldwide.
            </p>

            {/* Info Items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
              {[
                { icon: MapPin, text: 'Prague, Czechia', label: 'Location' },
                { icon: Briefcase, text: 'AI Product Manager at UserWay', label: 'Current Role' },
                { icon: TrendingUp, text: '14+ years of experience', label: 'Experience' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    backgroundColor: '#f5f5f5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <item.icon style={{ width: '20px', height: '20px', color: '#39c2d7' }} />
                  </div>
                  <div>
                    <p style={{ fontSize: '12px', color: '#999', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '2px' }}>
                      {item.label}
                    </p>
                    <p style={{ fontSize: '16px', color: '#464547', fontWeight: '500' }}>
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div style={{
              padding: '24px',
              backgroundColor: '#f5f5f5',
              borderLeft: '4px solid #a3c644'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <Award style={{ width: '20px', height: '20px', color: '#a3c644' }} />
                <span style={{ fontSize: '14px', fontWeight: '600', color: '#464547', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Certifications
                </span>
              </div>
              {certifications.map((cert, i) => (
                <p key={i} style={{ fontSize: '14px', color: '#666', marginBottom: i < certifications.length - 1 ? '8px' : 0 }}>
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
                  backgroundColor: 'white',
                  border: '1px solid #e0e0e0',
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
                  color: '#666',
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
