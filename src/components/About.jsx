import { MapPin, Briefcase, TrendingUp } from 'lucide-react'

function About() {
  const stats = [
    { value: '1.5M+', label: 'Widget Installations' },
    { value: '14+', label: 'Years Experience' },
    { value: '8K+', label: 'LinkedIn Followers' },
    { value: '10%', label: 'Monthly ARR Growth', highlight: true },
  ]

  const info = [
    { icon: MapPin, text: 'Prague, Czechia' },
    { icon: Briefcase, text: 'AI Product Manager at UserWay.org' },
    { icon: TrendingUp, text: '14+ years of experience' },
  ]

  return (
    <section id="about" className="section-padding" style={{ backgroundColor: '#fafafa' }}>
      <div className="container-width">
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '8px', textAlign: 'center', color: '#1a1a2e' }}>
          About Me
        </h2>
        <div style={{ width: '48px', height: '4px', background: 'linear-gradient(135deg, #a855f7, #6366f1)', margin: '0 auto 48px', borderRadius: '2px' }}></div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', alignItems: 'start' }}>
          {/* Bio */}
          <div>
            <p style={{ color: '#4b5563', marginBottom: '20px', lineHeight: '1.7' }}>
              Technical Product Manager with deep expertise in AI, blockchain,
              legal tech, and supply-chain domains, delivering high-impact
              products for enterprises and startups over 14 years.
            </p>
            <p style={{ color: '#4b5563', marginBottom: '32px', lineHeight: '1.7' }}>
              When people love what they do, great results follow. For me,
              shaping the future through tech is a true calling. Currently leading
              AI/LLM product strategy at UserWay using LangChain, RAG, and vector databases.
            </p>

            {/* Quick Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {info.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#4b5563' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(139, 92, 246, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <item.icon style={{ width: '20px', height: '20px', color: '#8b5cf6' }} />
                  </div>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
            {stats.map((stat, i) => (
              <div
                key={i}
                style={{
                  padding: '24px',
                  backgroundColor: stat.highlight ? '#7c3aed' : 'white',
                  borderRadius: '12px',
                  border: stat.highlight ? 'none' : '1px solid #e5e7eb',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
                }}
              >
                <div style={{
                  fontSize: '28px',
                  fontWeight: 'bold',
                  color: stat.highlight ? 'white' : '#1a1a2e',
                  marginBottom: '4px'
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontSize: '14px',
                  color: stat.highlight ? 'rgba(255,255,255,0.8)' : '#6b7280'
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
