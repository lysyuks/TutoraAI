import { useTheme } from '../context/ThemeContext'
import { useLanguage } from '../context/LanguageContext'

function WhatIDo() {
  const { themes } = useTheme()
  const { t } = useLanguage()

  return (
    <section style={{
      backgroundColor: themes.bgAlt,
      padding: '100px 0',
      transition: 'background-color 0.3s'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 48px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center'
        }} className="whatido-grid">
          {/* Left - Content */}
          <div>
            <p style={{
              fontSize: '12px',
              color: '#a3c644',
              letterSpacing: '3px',
              marginBottom: '16px',
              fontWeight: '600',
              textTransform: 'uppercase'
            }}>
              {t.about.whatIDoLabel || 'EXPERTISE'}
            </p>
            <h2 style={{
              fontSize: '48px',
              fontWeight: '700',
              color: themes.text,
              marginBottom: '16px',
              lineHeight: '1.1'
            }}>
              {t.about.whatIDoTitle}
            </h2>
            <div style={{
              width: '60px',
              height: '4px',
              background: 'linear-gradient(90deg, #a3c644, #39c2d7)',
              marginBottom: '32px'
            }}></div>

            <p style={{
              fontSize: '17px',
              color: themes.textMuted,
              marginBottom: '24px',
              lineHeight: '1.8'
            }}>
              {t.about.bio4}
            </p>

            <p style={{
              fontSize: '16px',
              color: themes.textMuted,
              marginBottom: '24px',
              lineHeight: '1.8'
            }}>
              {t.about.bio5}
            </p>

            <p style={{
              fontSize: '16px',
              color: themes.textMuted,
              lineHeight: '1.8',
              fontStyle: 'italic',
              borderLeft: '3px solid #39c2d7',
              paddingLeft: '20px'
            }}>
              {t.about.bio6}
            </p>
          </div>

          {/* Right - Visual/Skills highlight */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px'
          }}>
            {[
              { title: 'AI & Machine Learning', desc: 'RAG, LangChain, AI prototyping', color: '#39c2d7' },
              { title: 'Blockchain & Fintech', desc: 'Crypto wallets, exchanges, DeFi', color: '#a3c644' },
              { title: 'SaaS Products', desc: 'End-to-end product development', color: '#39c2d7' },
              { title: 'Design & Prototyping', desc: 'Senior-level UI/UX, rapid prototyping', color: '#a3c644' },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  padding: '28px 32px',
                  backgroundColor: themes.cardBg,
                  border: `1px solid ${themes.border}`,
                  borderLeft: `4px solid ${item.color}`,
                  transition: 'all 0.3s'
                }}
                className="skill-card"
              >
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: themes.text,
                  marginBottom: '8px'
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: themes.textMuted
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .skill-card:hover {
          transform: translateX(8px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        @media (max-width: 900px) {
          .whatido-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  )
}

export default WhatIDo
