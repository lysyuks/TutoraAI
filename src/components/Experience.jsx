import { Calendar, MapPin, ChevronRight } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { useLanguage } from '../context/LanguageContext'

const experiences = [
  {
    title: 'AI Product Manager',
    company: 'UserWay',
    location: 'Prague, Czechia',
    period: 'May 2023 - Present',
    highlight: '1.5M+ installs',
    description: [
      'Scaled AI accessibility platform from MVP to 1.5M+ widget installs worldwide',
      'Owned roadmap and OKRs for LangChain-powered RAG features with Qdrant vector databases',
      'Drove 10% MoM ARR growth, closed six-figure deals, and landed Google\'s largest 2024 accessibility contract',
    ],
    technologies: ['LangChain', 'LangGraph', 'VectorDB (Qdrant)', 'RAG', 'PostgreSQL', 'Redis'],
  },
  {
    title: 'Technical Product Manager',
    company: 'BlueYonder',
    location: 'Remote',
    period: 'May 2019 - Apr 2023',
    highlight: '1,000+ engineers',
    description: [
      'Product-managed company-wide Design System / Common Component Library adopted by 1,000+ engineers',
      'Owned CCL roadmap (v3 → v4) aligned with OKRs, business goals, and Material 3 guidelines',
      'Led cross-team initiatives—Playwright/WDIO test harness, GitHub Actions CI/CD—reducing release time 30%',
    ],
    technologies: ['React', 'TypeScript', 'MUI v5', 'Shadcn', 'Rollup', 'Webpack', 'Storybook'],
  },
  {
    title: 'Product Manager',
    company: 'EPAM / Evri (Hermes)',
    location: 'Remote',
    period: 'Apr 2018 - Apr 2019',
    highlight: '$670M revenue',
    description: [
      'Worked for Evri (formerly Hermes), Europe\'s #1 parcel-delivery network — 52 countries, 12M DAU',
      'Owned three cross-functional squads (30+ FTEs) delivering enterprise CMS digital-transformation',
      'Led end-to-end CMS migration that unlocked $670M new annual revenue',
    ],
    technologies: ['AWS', 'Prismic', 'SonarQube', 'Jenkins', 'Jira'],
  },
  {
    title: 'Product Manager',
    company: 'Sapien Wallet',
    location: 'Remote',
    period: '2017 - 2018',
    highlight: '100K users',
    description: [
      'Developed from scratch a crypto wallet with post-transaction human rating system',
      'Attracted 100K users in the first month of launch',
      'Integrated blockchain technologies including Solidity, IPFS, and Chainlink oracles',
    ],
    technologies: ['Solidity', 'IPFS', 'Chainlink', 'React Native'],
  },
  {
    title: 'Founder',
    company: 'UPPERSETUP',
    location: 'UAE',
    period: '2014 - 2017',
    highlight: 'Legal Tech',
    description: [
      'Created from scratch an all-in-one legal platform guiding entrepreneurs through UAE business registration',
      'Built end-to-end product from ideation to market launch',
    ],
    technologies: ['Salesforce', 'OpenCart', 'Commercetools'],
  },
  {
    title: 'Chief Executive Officer',
    company: 'Eatsmart',
    location: 'Kyiv, Ukraine',
    period: 'Dec 2012 - Feb 2016',
    highlight: 'Forbes Featured',
    description: [
      'Built restaurant reservation platform from scratch — 800+ restaurants, 50K+ downloads, featured by Forbes',
      'Led Seed, Series A & B fundraising; managed 5 engineers, 4 marketing, 2 sales across Scrum delivery',
      'Drove product-market fit, unit economics, and full-funnel growth (ASO, paid UA, influencer campaigns)',
    ],
    technologies: ['iOS', 'Android', 'Firebase', 'Mixpanel', 'Agile/Scrum'],
  },
]

function Experience() {
  const { themes } = useTheme()
  const { t } = useLanguage()

  return (
    <section id="experience" style={{
      backgroundColor: themes.bgAlt,
      padding: '100px 0',
      transition: 'background-color 0.3s'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 48px' }}>
        {/* Section Header */}
        <div style={{ marginBottom: '60px' }}>
          <p style={{
            fontSize: '12px',
            color: '#39c2d7',
            letterSpacing: '3px',
            marginBottom: '16px',
            fontWeight: '600',
            textTransform: 'uppercase'
          }}>
            {t.experience.label}
          </p>
          <h2 style={{
            fontSize: '48px',
            fontWeight: '700',
            color: themes.text,
            marginBottom: '16px',
            lineHeight: '1.1'
          }}>
            {t.experience.title}
          </h2>
          <div style={{
            width: '60px',
            height: '4px',
            background: 'linear-gradient(90deg, #39c2d7, #a3c644)'
          }}></div>
        </div>

        {/* Horizontal Scrolling Cards */}
        <div style={{
          display: 'flex',
          gap: '24px',
          overflowX: 'auto',
          paddingBottom: '24px',
          scrollSnapType: 'x mandatory'
        }} className="experience-scroll">
          {experiences.map((exp, index) => (
            <div
              key={index}
              style={{
                minWidth: '400px',
                maxWidth: '400px',
                backgroundColor: themes.cardBg,
                border: `1px solid ${themes.border}`,
                scrollSnapAlign: 'start',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s'
              }}
              className="experience-card"
            >
              {/* Card Header */}
              <div style={{
                padding: '24px',
                borderBottom: `1px solid ${themes.border}`,
                background: 'linear-gradient(135deg, #39c2d7 0%, #a3c644 100%)'
              }}>
                <span style={{
                  display: 'inline-block',
                  padding: '4px 12px',
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  color: 'white',
                  fontSize: '12px',
                  fontWeight: '600',
                  marginBottom: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  {exp.highlight}
                </span>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: 'white',
                  marginBottom: '4px'
                }}>
                  {exp.title}
                </h3>
                <p style={{
                  fontSize: '16px',
                  color: 'rgba(255,255,255,0.9)',
                  fontWeight: '500'
                }}>
                  {exp.company}
                </p>
              </div>

              {/* Card Meta */}
              <div style={{
                padding: '16px 24px',
                display: 'flex',
                gap: '24px',
                borderBottom: `1px solid ${themes.border}`,
                backgroundColor: themes.bgAlt
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: themes.textMuted, fontSize: '13px' }}>
                  <Calendar style={{ width: '14px', height: '14px', color: '#39c2d7' }} />
                  <span>{exp.period}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: themes.textMuted, fontSize: '13px' }}>
                  <MapPin style={{ width: '14px', height: '14px', color: '#39c2d7' }} />
                  <span>{exp.location}</span>
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '24px', flex: 1 }}>
                <ul style={{ margin: 0, paddingLeft: 0, listStyle: 'none' }}>
                  {exp.description.map((item, i) => (
                    <li key={i} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      color: themes.textMuted,
                      fontSize: '14px',
                      marginBottom: '12px',
                      lineHeight: '1.5'
                    }}>
                      <ChevronRight style={{
                        width: '16px',
                        height: '16px',
                        color: '#a3c644',
                        marginTop: '2px',
                        flexShrink: 0
                      }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer - Technologies */}
              <div style={{
                padding: '16px 24px',
                borderTop: `1px solid ${themes.border}`,
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px'
              }}>
                {exp.technologies.slice(0, 4).map((tech, i) => (
                  <span key={i} style={{
                    padding: '4px 10px',
                    backgroundColor: themes.bgAlt,
                    color: themes.textMuted,
                    fontSize: '11px',
                    fontWeight: '500',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    {tech}
                  </span>
                ))}
                {exp.technologies.length > 4 && (
                  <span style={{
                    padding: '4px 10px',
                    backgroundColor: '#39c2d7',
                    color: 'white',
                    fontSize: '11px',
                    fontWeight: '500'
                  }}>
                    +{exp.technologies.length - 4}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '8px',
          marginTop: '24px'
        }}>
          <span style={{ fontSize: '13px', color: themes.textLight, textTransform: 'uppercase', letterSpacing: '1px' }}>
            {t.experience.scrollToExplore}
          </span>
          <ChevronRight style={{ width: '16px', height: '16px', color: '#39c2d7' }} />
        </div>
      </div>

      <style>{`
        .experience-scroll::-webkit-scrollbar {
          height: 6px;
        }
        .experience-scroll::-webkit-scrollbar-track {
          background: ${themes.border};
        }
        .experience-scroll::-webkit-scrollbar-thumb {
          background: linear-gradient(90deg, #39c2d7, #a3c644);
          border-radius: 3px;
        }
        .experience-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        @media (max-width: 768px) {
          .experience-scroll {
            padding-left: 24px !important;
          }
          .experience-card {
            min-width: 320px !important;
            max-width: 320px !important;
          }
        }
      `}</style>
    </section>
  )
}

export default Experience
