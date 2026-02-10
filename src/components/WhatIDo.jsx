import { useState, useEffect, useRef } from 'react'
import { Cpu, Coins, Rocket, Users, Palette, ChevronRight } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { useLanguage } from '../context/LanguageContext'

function WhatIDo() {
  const { themes } = useTheme()
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: themes.bg,
        padding: '100px 0',
        transition: 'background-color 0.3s'
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 48px' }}>
        {/* Bento Grid Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridTemplateRows: 'auto auto auto',
          gap: '20px'
        }} className="bento-grid">

          {/* Header Card - Spans 2 columns */}
          <div
            className={`bento-card ${isVisible ? 'animate-in' : ''}`}
            style={{
              gridColumn: 'span 2',
              padding: '40px',
              backgroundColor: themes.cardBg,
              border: `1px solid ${themes.border}`,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              animationDelay: '0ms'
            }}
          >
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

          {/* AI & ML - Large Card */}
          <div
            className={`skill-bento bento-card ai-card ${isVisible ? 'animate-in' : ''}`}
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
              overflow: 'hidden',
              animationDelay: '100ms'
            }}
          >
            <div>
              <div className="icon-box icon-pulse" style={{
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
              {['LangChain', 'RAG', 'Qdrant', 'OpenAI', 'CrewAI', 'AutoGPT', 'Claude Code'].map((tag, i) => (
                <span key={i} style={{
                  padding: '6px 12px',
                  backgroundColor: 'rgba(57, 194, 215, 0.2)',
                  color: '#39c2d7',
                  fontSize: '12px',
                  fontWeight: '500',
                  transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  cursor: 'default'
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Bio Text Card */}
          <div
            className={`bento-card ${isVisible ? 'animate-in' : ''}`}
            style={{
              gridColumn: 'span 2',
              padding: '32px',
              backgroundColor: themes.bgAlt,
              border: `1px solid ${themes.border}`,
              animationDelay: '200ms'
            }}
          >
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
            className={`skill-bento bento-card ${isVisible ? 'animate-in' : ''}`}
            style={{
              padding: '28px',
              background: `linear-gradient(135deg, rgba(163, 198, 68, 0.15) 0%, rgba(163, 198, 68, 0.05) 100%)`,
              border: `1px solid rgba(163, 198, 68, 0.3)`,
              transition: 'all 0.3s',
              animationDelay: '300ms'
            }}
          >
            <div className="icon-box" style={{
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
            className={`skill-bento bento-card ${isVisible ? 'animate-in' : ''}`}
            style={{
              padding: '28px',
              background: `linear-gradient(135deg, rgba(57, 194, 215, 0.15) 0%, rgba(57, 194, 215, 0.05) 100%)`,
              border: `1px solid rgba(57, 194, 215, 0.3)`,
              transition: 'all 0.3s',
              animationDelay: '400ms'
            }}
          >
            <div className="icon-box" style={{
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
            className={`skill-bento bento-card ${isVisible ? 'animate-in' : ''}`}
            style={{
              padding: '28px',
              background: `linear-gradient(135deg, rgba(163, 198, 68, 0.15) 0%, rgba(163, 198, 68, 0.05) 100%)`,
              border: `1px solid rgba(163, 198, 68, 0.3)`,
              transition: 'all 0.3s',
              animationDelay: '500ms'
            }}
          >
            <div className="icon-box" style={{
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
            className={`skill-bento bento-card ${isVisible ? 'animate-in' : ''}`}
            style={{
              padding: '28px',
              background: `linear-gradient(135deg, rgba(57, 194, 215, 0.15) 0%, rgba(57, 194, 215, 0.05) 100%)`,
              border: `1px solid rgba(57, 194, 215, 0.3)`,
              transition: 'all 0.3s',
              animationDelay: '600ms'
            }}
          >
            <div className="icon-box" style={{
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
          <div
            className={`bento-card cta-card ${isVisible ? 'animate-in' : ''}`}
            style={{
              gridColumn: 'span 2',
              padding: '32px 40px',
              background: 'linear-gradient(135deg, #a3c644 0%, #8fb33a 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '20px',
              animationDelay: '700ms'
            }}
          >
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
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes iconPulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(57, 194, 215, 0.4);
          }
          50% {
            box-shadow: 0 0 20px 5px rgba(57, 194, 215, 0.2);
          }
        }

        @keyframes iconFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        @keyframes borderGlow {
          0%, 100% {
            box-shadow: 0 0 5px rgba(57, 194, 215, 0.3), inset 0 0 5px rgba(57, 194, 215, 0.1);
          }
          50% {
            box-shadow: 0 0 20px rgba(57, 194, 215, 0.5), inset 0 0 10px rgba(57, 194, 215, 0.2);
          }
        }

        @keyframes borderGlowGreen {
          0%, 100% {
            box-shadow: 0 0 5px rgba(163, 198, 68, 0.3), inset 0 0 5px rgba(163, 198, 68, 0.1);
          }
          50% {
            box-shadow: 0 0 20px rgba(163, 198, 68, 0.5), inset 0 0 10px rgba(163, 198, 68, 0.2);
          }
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        @keyframes tagPop {
          from {
            opacity: 0;
            transform: scale(0.8) translateY(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .bento-card {
          opacity: 0;
          transform: translateY(30px);
        }

        .bento-card.animate-in {
          animation: fadeInScale 0.6s ease-out forwards;
        }

        .icon-box {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .skill-bento .icon-box {
          animation: iconFloat 3s ease-in-out infinite;
        }

        .skill-bento:hover .icon-box {
          transform: scale(1.15) rotate(10deg);
          animation: none;
        }

        .icon-pulse {
          animation: iconPulse 3s ease-in-out infinite, iconFloat 3s ease-in-out infinite;
        }

        .ai-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(57, 194, 215, 0.1),
            transparent
          );
          background-size: 200% 100%;
          animation: shimmer 3s ease-in-out infinite;
          pointer-events: none;
        }

        .ai-card.animate-in {
          animation: fadeInScale 0.6s ease-out forwards;
        }

        .ai-card {
          box-shadow: 0 0 15px rgba(57, 194, 215, 0.3);
          transition: box-shadow 0.3s ease;
        }

        .ai-card:hover {
          box-shadow: 0 0 25px rgba(57, 194, 215, 0.5), 0 25px 50px rgba(0,0,0,0.2);
        }

        .ai-card span {
          opacity: 0;
          animation: tagPop 0.4s ease-out forwards;
        }

        .ai-card.animate-in span:nth-child(1) { animation-delay: 0.5s; }
        .ai-card.animate-in span:nth-child(2) { animation-delay: 0.6s; }
        .ai-card.animate-in span:nth-child(3) { animation-delay: 0.7s; }
        .ai-card.animate-in span:nth-child(4) { animation-delay: 0.8s; }
        .ai-card.animate-in span:nth-child(5) { animation-delay: 0.9s; }
        .ai-card.animate-in span:nth-child(6) { animation-delay: 1.0s; }
        .ai-card.animate-in span:nth-child(7) { animation-delay: 1.1s; }

        .ai-card span:hover {
          transform: scale(1.1) translateY(-2px);
          box-shadow: 0 4px 12px rgba(57, 194, 215, 0.3);
        }

        .cta-card {
          background-size: 200% 200%;
          background-image: linear-gradient(135deg, #a3c644 0%, #8fb33a 50%, #a3c644 100%);
        }

        .cta-card.animate-in {
          animation: fadeInScale 0.6s ease-out forwards;
        }

        .cta-card.gradient-active {
          animation: gradientShift 4s ease infinite;
        }

        .skill-bento {
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .skill-bento::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          transition: left 0.5s ease;
        }

        .skill-bento:hover::after {
          left: 100%;
        }

        .skill-bento:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 25px 50px rgba(0,0,0,0.2);
        }

        .skill-bento:nth-child(4):hover,
        .skill-bento:nth-child(6):hover {
          box-shadow: 0 0 20px rgba(163, 198, 68, 0.5), 0 25px 50px rgba(0,0,0,0.2);
        }

        .skill-bento:nth-child(5):hover,
        .skill-bento:nth-child(7):hover {
          box-shadow: 0 0 20px rgba(57, 194, 215, 0.5), 0 25px 50px rgba(0,0,0,0.2);
        }

        .cta-btn {
          position: relative;
          overflow: hidden;
        }

        .cta-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.5s ease;
        }

        .cta-btn:hover::before {
          left: 100%;
        }

        .cta-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
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
          .bento-grid > div:nth-child(3) {
            grid-column: span 2 !important;
          }
          .bento-grid > div:nth-child(8) {
            grid-column: span 2 !important;
          }
        }
        @media (max-width: 600px) {
          .bento-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .bento-grid > div {
            grid-column: span 1 !important;
            grid-row: span 1 !important;
            padding: 24px !important;
            min-height: auto !important;
          }
          .bento-grid h2 {
            font-size: 28px !important;
          }
          .bento-grid h3 {
            font-size: 22px !important;
          }
          .bento-grid > div:last-child {
            flex-direction: column !important;
            text-align: center !important;
            gap: 16px !important;
          }
          .bento-grid > div:last-child a {
            width: 100% !important;
            justify-content: center !important;
          }
        }
        @media (max-width: 480px) {
          section > div {
            padding: 0 16px !important;
          }
          section {
            padding: 60px 0 !important;
          }
        }
      `}</style>
    </section>
  )
}

export default WhatIDo
