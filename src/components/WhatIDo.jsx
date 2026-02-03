import { Cpu, Coins, Rocket, Users, Palette, ChevronRight } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { useLanguage } from '../context/LanguageContext'

function WhatIDo() {
  const { themes } = useTheme()
  const { t } = useLanguage()

  const skills = [
    {
      icon: Cpu,
      title: 'AI & Machine Learning',
      desc: 'RAG, LangChain, AI prototyping',
      color: '#39c2d7'
    },
    {
      icon: Coins,
      title: 'Blockchain & Fintech',
      desc: 'Crypto wallets, exchanges, DeFi',
      color: '#a3c644'
    },
    {
      icon: Rocket,
      title: 'SaaS & Product Strategy',
      desc: 'End-to-end product development',
      color: '#39c2d7'
    },
    {
      icon: Users,
      title: 'Marketing & Community',
      desc: 'Traffic, growth, community building',
      color: '#a3c644'
    },
    {
      icon: Palette,
      title: 'Design & Vibecoding',
      desc: 'Senior UI/UX, rapid prototyping',
      color: '#39c2d7'
    },
  ]

  return (
    <section style={{
      backgroundColor: themes.bgAlt,
      padding: '80px 0',
      transition: 'background-color 0.3s'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 48px' }}>
        {/* Header */}
        <div style={{ marginBottom: '40px' }}>
          <p style={{
            fontSize: '12px',
            color: '#a3c644',
            letterSpacing: '3px',
            marginBottom: '12px',
            fontWeight: '600',
            textTransform: 'uppercase'
          }}>
            JOURNEY & EXPERTISE
          </p>
          <h2 style={{
            fontSize: '42px',
            fontWeight: '700',
            color: themes.text,
            marginBottom: '12px',
            lineHeight: '1.1'
          }}>
            {t.about.whatIDoTitle}
          </h2>
          <div style={{
            width: '60px',
            height: '4px',
            background: 'linear-gradient(90deg, #a3c644, #39c2d7)'
          }}></div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr',
          gap: '60px',
          alignItems: 'start'
        }} className="whatido-grid">
          {/* Left - Story (60%) */}
          <div>
            <p style={{
              fontSize: '16px',
              color: themes.textMuted,
              marginBottom: '20px',
              lineHeight: '1.8'
            }}>
              {t.about.bio4}
            </p>

            <p style={{
              fontSize: '15px',
              color: themes.textMuted,
              marginBottom: '24px',
              lineHeight: '1.8'
            }}>
              {t.about.bio5}
            </p>

            {/* Proudest Achievement Callout */}
            <div style={{
              padding: '20px 24px',
              background: `linear-gradient(135deg, ${themes.cardBg} 0%, ${themes.bgAlt} 100%)`,
              borderLeft: '4px solid #a3c644',
              marginBottom: '28px'
            }}>
              <p style={{
                fontSize: '15px',
                color: themes.text,
                lineHeight: '1.7',
                fontStyle: 'italic'
              }}>
                "{t.about.bio6}"
              </p>
            </div>

            {/* CTA Button */}
            <a
              href="#contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 28px',
                backgroundColor: '#a3c644',
                color: 'white',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                transition: 'all 0.3s'
              }}
              className="cta-btn"
              onMouseEnter={(e) => e.target.style.backgroundColor = '#8fb33a'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#a3c644'}
            >
              Let's Build Something
              <ChevronRight style={{ width: '18px', height: '18px' }} />
            </a>
          </div>

          {/* Right - Skills Grid (40%) */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            {skills.map((skill, i) => (
              <div
                key={i}
                className="skill-card"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '16px 20px',
                  backgroundColor: themes.cardBg,
                  border: `1px solid ${themes.border}`,
                  transition: 'all 0.3s',
                  cursor: 'default'
                }}
              >
                <div style={{
                  width: '44px',
                  height: '44px',
                  backgroundColor: themes.bgAlt,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <skill.icon style={{
                    width: '22px',
                    height: '22px',
                    color: skill.color
                  }} />
                </div>
                <div>
                  <h4 style={{
                    fontSize: '15px',
                    fontWeight: '600',
                    color: themes.text,
                    marginBottom: '2px'
                  }}>
                    {skill.title}
                  </h4>
                  <p style={{
                    fontSize: '13px',
                    color: themes.textMuted
                  }}>
                    {skill.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .skill-card {
          transform: translateX(0);
        }
        .skill-card:hover {
          transform: translateX(8px);
          border-color: #39c2d7;
          box-shadow: 0 4px 20px rgba(57, 194, 215, 0.15);
        }
        .cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(163, 198, 68, 0.3);
        }
        @media (max-width: 900px) {
          .whatido-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  )
}

export default WhatIDo
