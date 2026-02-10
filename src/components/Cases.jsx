import { useState, useEffect, useRef } from 'react'
import { ExternalLink } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { useLanguage } from '../context/LanguageContext'

function Cases() {
  const { themes } = useTheme()
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState(null)
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

  const cases = t.cases?.items || [
    {
      title: "Medicare Intake Form",
      description: "Digital intake form for Medicare patients — streamlined onboarding process with multi-step form, validation, and PDF generation.",
      image: "/cases/_1280720_px__Nano_Banana_82133.jpg",
      tags: ["Next.js", "React", "Tailwind CSS", "Vercel"],
      link: "https://medicare-intake-form.vercel.app"
    }
  ]

  return (
    <section
      id="cases"
      ref={sectionRef}
      style={{
        backgroundColor: themes.bgAlt,
        padding: '100px 0',
        transition: 'background-color 0.3s'
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 48px' }}>
        {/* Section Header */}
        <div
          className={`cases-header ${isVisible ? 'animate-in' : ''}`}
          style={{
            textAlign: 'center',
            marginBottom: '60px'
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
            {t.cases?.label || 'MY WORK'}
          </p>
          <h2 style={{
            fontSize: '42px',
            fontWeight: '700',
            color: themes.text,
            marginBottom: '16px',
            lineHeight: '1.1'
          }}>
            {t.cases?.title || 'Featured Cases'}
          </h2>
          <p style={{
            fontSize: '16px',
            color: themes.textMuted,
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.7'
          }}>
            {t.cases?.description || 'A selection of projects and products I\'ve built or contributed to.'}
          </p>
        </div>

        {/* Cases Grid */}
        <div
          className="cases-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px'
          }}
        >
          {cases.map((caseItem, index) => (
            <a
              key={index}
              href={caseItem.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`case-card ${isVisible ? 'animate-in' : ''}`}
              style={{
                backgroundColor: themes.cardBg,
                border: `1px solid ${themes.border}`,
                overflow: 'hidden',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease',
                transform: hoveredCard === index ? 'translateY(-8px)' : 'translateY(0)',
                boxShadow: hoveredCard === index
                  ? '0 20px 40px rgba(0,0,0,0.15)'
                  : '0 4px 12px rgba(0,0,0,0.05)',
                animationDelay: `${index * 100}ms`
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image Container */}
              <div style={{
                position: 'relative',
                width: '100%',
                paddingTop: '56.25%', // 16:9 aspect ratio
                backgroundColor: themes.bgAlt,
                overflow: 'hidden'
              }}>
                <img
                  src={caseItem.image}
                  alt={caseItem.title}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease',
                    transform: hoveredCard === index ? 'scale(1.05)' : 'scale(1)'
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.innerHTML = `
                      <div style="
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background: linear-gradient(135deg, rgba(57, 194, 215, 0.2) 0%, rgba(163, 198, 68, 0.2) 100%);
                      ">
                        <span style="
                          font-size: 48px;
                          color: ${themes.textMuted};
                          opacity: 0.5;
                        ">
                          ${caseItem.title.charAt(0)}
                        </span>
                      </div>
                    `
                  }}
                />
                {/* Gradient overlay on hover */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.7) 100%)',
                  opacity: hoveredCard === index ? 1 : 0,
                  transition: 'opacity 0.3s ease'
                }} />
              </div>

              {/* Content */}
              <div style={{
                padding: '24px',
                flex: 1,
                display: 'flex',
                flexDirection: 'column'
              }}>
                {/* Title */}
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: themes.text,
                  marginBottom: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  {caseItem.title}
                  <ExternalLink
                    style={{
                      width: '16px',
                      height: '16px',
                      color: '#39c2d7',
                      opacity: hoveredCard === index ? 1 : 0,
                      transition: 'opacity 0.3s ease'
                    }}
                  />
                </h3>

                {/* Description */}
                <p style={{
                  fontSize: '14px',
                  color: themes.textMuted,
                  lineHeight: '1.6',
                  marginBottom: '16px',
                  flex: 1
                }}>
                  {caseItem.description}
                </p>

                {/* Tags */}
                <div style={{
                  display: 'flex',
                  gap: '8px',
                  flexWrap: 'wrap'
                }}>
                  {caseItem.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      style={{
                        padding: '4px 10px',
                        backgroundColor: themes.name === 'dark'
                          ? 'rgba(57, 194, 215, 0.15)'
                          : 'rgba(57, 194, 215, 0.1)',
                        color: '#39c2d7',
                        fontSize: '11px',
                        fontWeight: '500',
                        letterSpacing: '0.5px'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom accent line */}
              <div style={{
                height: '3px',
                background: hoveredCard === index
                  ? 'linear-gradient(90deg, #39c2d7 0%, #a3c644 100%)'
                  : themes.border,
                transition: 'background 0.3s ease'
              }} />
            </a>
          ))}
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

        .cases-header {
          opacity: 0;
          transform: translateY(30px);
        }

        .cases-header.animate-in {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .case-card {
          opacity: 0;
          transform: translateY(30px);
        }

        .case-card.animate-in {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        @media (max-width: 1000px) {
          .cases-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 600px) {
          .cases-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }

          section > div {
            padding: 0 24px !important;
          }

          .cases-header h2 {
            font-size: 32px !important;
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

export default Cases
