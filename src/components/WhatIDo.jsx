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
      desc: 'RAG, LangChain, Vector DBs, AI prototyping',
      color: '#39c2d7',
      size: 'large'
    },
    {
      icon: Coins,
      title: 'Blockchain & Fintech',
      desc: 'Crypto wallets, exchanges, DeFi protocols',
      color: '#a3c644',
      size: 'medium'
    },
    {
      icon: Rocket,
      title: 'SaaS & Product',
      desc: 'End-to-end product development',
      color: '#39c2d7',
      size: 'medium'
    },
    {
      icon: Users,
      title: 'Growth & Marketing',
      desc: 'Traffic, community building',
      color: '#a3c644',
      size: 'small'
    },
    {
      icon: Palette,
      title: 'Design & Vibecoding',
      desc: 'Senior UI/UX, rapid prototyping',
      color: '#39c2d7',
      size: 'small'
    },
  ]

  return (
    <section style={{
      backgroundColor: themes.bg,
      padding: '100px 0',
      transition: 'background-color 0.3s'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 48px' }}>
        {/* Bento Grid Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridTemplateRows: 'auto auto auto',
          gap: '20px'
        }} className="bento-grid">

          {/* Header Card - Spans 2 columns */}
          <div style={{
            gridColumn: 'span 2',
            padding: '40px',
            backgroundColor: themes.cardBg,
            border: `1px solid ${themes.border}`,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            <p style={{
              fontSize: '12px',
              color: '#a3c644',
              letterSpacing: '3px',
              marginBottom: '16px',
              fontWeight: '600',
              textTransform: 'uppercase'
            }}>
              EXPERTISE & SKILLS
            </p>
            <h2 style={{
              fontSize: '38px',
              fontWeight: '700',
              color: themes.text,
              marginBottom: '16px',
              lineHeight: '1.1'
            }}>
              {t.about.whatIDoTitle}
            </h2>
            <p style={{
              fontSize: '15px',
              color: themes.textMuted,
              lineHeight: '1.7'
            }}>
              Building products at the intersection of AI, blockchain, and design.
            </p>
          </div>

          {/* AI & ML - Large Card */}
          <div
            className="skill-bento"
            style={{
              gridColumn: 'span 2',
              gridRow: 'span 2',
              padding: '40px',
              background: `linear-gradient(135deg, rgba(57, 194, 215, 0.15) 0%, rgba(57, 194, 215, 0.05) 100%)`,
              border: `1px solid rgba(57, 194, 215, 0.3)`,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '280px',
              transition: 'all 0.3s',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div>
              <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: 'rgba(57, 194, 215, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px'
              }}>
                <Cpu style={{ width: '32px', height: '32px', color: '#39c2d7' }} />
              </div>
              <h3 style={{
                fontSize: '28px',
                fontWeight: '700',
                color: themes.text,
                marginBottom: '12px'
              }}>
                AI & Machine Learning
              </h3>
              <p style={{
                fontSize: '15px',
                color: themes.textMuted,
                lineHeight: '1.6'
              }}>
                RAG systems, LangChain/LangGraph frameworks, Vector databases (Qdrant), AI-powered prototyping and experimentation
              </p>
            </div>
            <div style={{
              display: 'flex',
              gap: '8px',
              flexWrap: 'wrap',
              marginTop: '20px'
            }}>
              {['LangChain', 'RAG', 'Qdrant', 'OpenAI'].map((tag, i) => (
                <span key={i} style={{
                  padding: '6px 12px',
                  backgroundColor: 'rgba(57, 194, 215, 0.2)',
                  color: '#39c2d7',
                  fontSize: '12px',
                  fontWeight: '500'
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Bio Text Card */}
          <div style={{
            gridColumn: 'span 2',
            padding: '32px',
            backgroundColor: themes.bgAlt,
            border: `1px solid ${themes.border}`
          }}>
            <p style={{
              fontSize: '14px',
              color: themes.textMuted,
              lineHeight: '1.8'
            }}>
              {t.about.bio4}
            </p>
          </div>

          {/* Blockchain Card */}
          <div
            className="skill-bento"
            style={{
              padding: '28px',
              background: `linear-gradient(135deg, rgba(163, 198, 68, 0.15) 0%, rgba(163, 198, 68, 0.05) 100%)`,
              border: `1px solid rgba(163, 198, 68, 0.3)`,
              transition: 'all 0.3s'
            }}
          >
            <div style={{
              width: '48px',
              height: '48px',
              backgroundColor: 'rgba(163, 198, 68, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '16px'
            }}>
              <Coins style={{ width: '24px', height: '24px', color: '#a3c644' }} />
            </div>
            <h4 style={{
              fontSize: '18px',
              fontWeight: '600',
              color: themes.text,
              marginBottom: '8px'
            }}>
              Blockchain & Fintech
            </h4>
            <p style={{ fontSize: '13px', color: themes.textMuted }}>
              Crypto wallets, DeFi, exchanges
            </p>
          </div>

          {/* SaaS Card */}
          <div
            className="skill-bento"
            style={{
              padding: '28px',
              background: `linear-gradient(135deg, rgba(57, 194, 215, 0.15) 0%, rgba(57, 194, 215, 0.05) 100%)`,
              border: `1px solid rgba(57, 194, 215, 0.3)`,
              transition: 'all 0.3s'
            }}
          >
            <div style={{
              width: '48px',
              height: '48px',
              backgroundColor: 'rgba(57, 194, 215, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '16px'
            }}>
              <Rocket style={{ width: '24px', height: '24px', color: '#39c2d7' }} />
            </div>
            <h4 style={{
              fontSize: '18px',
              fontWeight: '600',
              color: themes.text,
              marginBottom: '8px'
            }}>
              SaaS & Product
            </h4>
            <p style={{ fontSize: '13px', color: themes.textMuted }}>
              End-to-end product strategy
            </p>
          </div>

          {/* Marketing Card */}
          <div
            className="skill-bento"
            style={{
              padding: '28px',
              background: `linear-gradient(135deg, rgba(163, 198, 68, 0.15) 0%, rgba(163, 198, 68, 0.05) 100%)`,
              border: `1px solid rgba(163, 198, 68, 0.3)`,
              transition: 'all 0.3s'
            }}
          >
            <div style={{
              width: '48px',
              height: '48px',
              backgroundColor: 'rgba(163, 198, 68, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '16px'
            }}>
              <Users style={{ width: '24px', height: '24px', color: '#a3c644' }} />
            </div>
            <h4 style={{
              fontSize: '18px',
              fontWeight: '600',
              color: themes.text,
              marginBottom: '8px'
            }}>
              Growth & Marketing
            </h4>
            <p style={{ fontSize: '13px', color: themes.textMuted }}>
              Traffic, community building
            </p>
          </div>

          {/* Design Card */}
          <div
            className="skill-bento"
            style={{
              padding: '28px',
              background: `linear-gradient(135deg, rgba(57, 194, 215, 0.15) 0%, rgba(57, 194, 215, 0.05) 100%)`,
              border: `1px solid rgba(57, 194, 215, 0.3)`,
              transition: 'all 0.3s'
            }}
          >
            <div style={{
              width: '48px',
              height: '48px',
              backgroundColor: 'rgba(57, 194, 215, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '16px'
            }}>
              <Palette style={{ width: '24px', height: '24px', color: '#39c2d7' }} />
            </div>
            <h4 style={{
              fontSize: '18px',
              fontWeight: '600',
              color: themes.text,
              marginBottom: '8px'
            }}>
              Design & Vibecoding
            </h4>
            <p style={{ fontSize: '13px', color: themes.textMuted }}>
              Senior UI/UX, rapid prototyping
            </p>
          </div>

          {/* CTA Card */}
          <div style={{
            gridColumn: 'span 2',
            padding: '32px 40px',
            background: 'linear-gradient(135deg, #a3c644 0%, #8fb33a 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px'
          }}>
            <div>
              <h4 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: 'white',
                marginBottom: '4px'
              }}>
                {t.about.bio6}
              </h4>
            </div>
            <a
              href="#contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 28px',
                backgroundColor: 'rgba(255,255,255,0.2)',
                color: 'white',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                transition: 'all 0.3s',
                whiteSpace: 'nowrap'
              }}
              className="cta-btn"
              onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.3)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.2)'}
            >
              Let's Talk
              <ChevronRight style={{ width: '18px', height: '18px' }} />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .skill-bento:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }
        .cta-btn:hover {
          transform: scale(1.02);
        }
        @media (max-width: 1000px) {
          .bento-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .bento-grid > div:nth-child(1) {
            grid-column: span 2 !important;
          }
          .bento-grid > div:nth-child(2) {
            grid-column: span 2 !important;
            grid-row: span 1 !important;
            min-height: auto !important;
          }
        }
        @media (max-width: 600px) {
          .bento-grid {
            grid-template-columns: 1fr !important;
          }
          .bento-grid > div {
            grid-column: span 1 !important;
            grid-row: span 1 !important;
          }
        }
      `}</style>
    </section>
  )
}

export default WhatIDo
