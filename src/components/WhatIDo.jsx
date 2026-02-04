import { Cpu, Coins, Rocket, Users, Palette, ChevronRight, TrendingUp } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { useLanguage } from '../context/LanguageContext'

function WhatIDo() {
  const { themes } = useTheme()
  const { t } = useLanguage()

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
              Building AI-powered SaaS products with deep expertise in personalization, segmentation, and growth strategies.
            </p>
          </div>

          {/* Growth & Marketing - LARGEST Card */}
          <div
            className="skill-bento"
            style={{
              gridColumn: 'span 2',
              gridRow: 'span 2',
              padding: '40px',
              background: `linear-gradient(135deg, rgba(163, 198, 68, 0.15) 0%, rgba(163, 198, 68, 0.05) 100%)`,
              border: `1px solid rgba(163, 198, 68, 0.3)`,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '320px',
              transition: 'all 0.3s',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div>
              <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: 'rgba(163, 198, 68, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px'
              }}>
                <TrendingUp style={{ width: '32px', height: '32px', color: '#a3c644' }} />
              </div>
              <h3 style={{
                fontSize: '28px',
                fontWeight: '700',
                color: themes.text,
                marginBottom: '16px'
              }}>
                Growth & Marketing
              </h3>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '10px'
              }}>
                {[
                  'Funnel optimization & conversion strategies',
                  'A/B testing & experimentation frameworks',
                  'Traffic acquisition & user retention',
                  'Community building around technology',
                  'Data-driven growth tactics'
                ].map((item, i) => (
                  <li key={i} style={{
                    fontSize: '14px',
                    color: themes.textMuted,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}>
                    <span style={{ color: '#a3c644', fontSize: '8px' }}>●</span>
                    {item}
                  </li>
                ))}
              </ul>
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
              I specialize in building SaaS products from 0 to 1 — from initial concept to market leadership. My expertise spans AI integration, blockchain innovation, and product design, but my superpower is growth marketing: funnel optimization, A/B testing, conversion rate optimization, and building engaged communities around technology. I design at a senior level and can vibecode any SaaS prototype in an evening — turning ideas into tangible products fast.
            </p>
          </div>

          {/* AI & ML Card */}
          <div
            className="skill-bento"
            style={{
              gridColumn: 'span 2',
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
              <Cpu style={{ width: '24px', height: '24px', color: '#39c2d7' }} />
            </div>
            <h4 style={{
              fontSize: '18px',
              fontWeight: '600',
              color: themes.text,
              marginBottom: '12px'
            }}>
              AI & Machine Learning
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: '16px' }}>
              {[
                'RAG systems, LangChain/LangGraph frameworks',
                'Vector databases (Qdrant)',
                'AI-powered prototyping and experimentation'
              ].map((item, i) => (
                <li key={i} style={{ fontSize: '13px', color: themes.textMuted, marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#39c2d7', fontSize: '6px' }}>●</span>
                  {item}
                </li>
              ))}
            </ul>
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              {['LangChain', 'RAG', 'Qdrant', 'OpenAI'].map((tag, i) => (
                <span key={i} style={{
                  padding: '4px 10px',
                  backgroundColor: 'rgba(57, 194, 215, 0.2)',
                  color: '#39c2d7',
                  fontSize: '11px',
                  fontWeight: '500'
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* SaaS & Product Card */}
          <div
            className="skill-bento"
            style={{
              gridColumn: 'span 2',
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
              marginBottom: '12px'
            }}>
              SaaS & Product Strategy
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                'Personalization & segmentation at scale',
                '0-to-1 product development',
                'User behavior analytics & insights',
                'Product-led growth strategies',
                'End-to-end product ownership'
              ].map((item, i) => (
                <li key={i} style={{ fontSize: '13px', color: themes.textMuted, marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#39c2d7', fontSize: '6px' }}>●</span>
                  {item}
                </li>
              ))}
            </ul>
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
              marginBottom: '12px'
            }}>
              Blockchain & Fintech
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                'Crypto wallets, DeFi, exchanges',
                'Blockchain architecture & tokenomics',
                'Fintech product innovation'
              ].map((item, i) => (
                <li key={i} style={{ fontSize: '13px', color: themes.textMuted, marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#a3c644', fontSize: '6px' }}>●</span>
                  {item}
                </li>
              ))}
            </ul>
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
              marginBottom: '12px'
            }}>
              Design & Vibecoding
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                'Senior UI/UX design',
                'Rapid prototyping',
                'Frontend development',
                'Figma to production in hours'
              ].map((item, i) => (
                <li key={i} style={{ fontSize: '13px', color: themes.textMuted, marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#39c2d7', fontSize: '6px' }}>●</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Card */}
          <div style={{
            gridColumn: 'span 4',
            padding: '32px 40px',
            background: 'linear-gradient(135deg, #a3c644 0%, #8fb33a 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px'
          }} className="cta-card">
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
          .cta-card {
            grid-column: span 2 !important;
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
          .cta-card {
            flex-direction: column !important;
            text-align: center !important;
          }
        }
      `}</style>
    </section>
  )
}

export default WhatIDo
