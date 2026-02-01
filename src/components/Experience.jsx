import { Building2, Calendar, MapPin, ChevronRight } from 'lucide-react'

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
      'Led 2 cross-functional squads (FE, BE, DevOps, QA, UX) on Kubernetes and serverless deployments',
      'Ensured WCAG 2.2, ADA, GDPR compliance and EU AI Act readiness',
    ],
    technologies: ['LangChain', 'LangGraph', 'VectorDB (Qdrant)', 'RAG', 'PostgreSQL', 'Redis'],
  },
  {
    title: 'Technical Product Manager',
    company: 'BlueYonder',
    location: 'Remote',
    period: 'May 2019 - Apr 2023',
    duration: '3 yrs 11 mos',
    highlight: '1,000+ engineers',
    description: [
      'Product-managed company-wide Design System / Common Component Library (React + TypeScript) adopted by 1,000+ engineers',
      'Owned CCL roadmap (v3 → v4) aligned with OKRs, business goals, and Material 3 guidelines',
      'Scoped and prioritised ~150 React/MUI components, tokens, and tooling assets across 40+ supply-chain apps',
      'Led cross-team initiatives—Playwright/WDIO test harness, GitHub Actions CI/CD—reducing release time 30%',
      'Achieved 100% CCL adoption in six months through Storybook/Figma playbooks and stakeholder evangelism',
    ],
    technologies: ['React', 'TypeScript', 'MUI v5', 'Shadcn', 'Rollup', 'Webpack', 'Storybook'],
  },
  {
    title: 'Product Manager',
    company: 'EPAM / Evri (Hermes)',
    location: 'Remote',
    period: 'Apr 2018 - Apr 2019',
    duration: '1 yr',
    highlight: '$670M revenue',
    description: [
      'Worked for Evri (formerly Hermes), Europe\'s #1 parcel-delivery network — 52 countries, 12M DAU',
      'Owned three cross-functional squads (30+ FTEs) delivering enterprise CMS digital-transformation',
      'Led end-to-end CMS migration that unlocked $670M new annual revenue',
      'Implemented Mixpanel funnels and GA4 dashboards to track conversion, NPS, and parcel-tracking engagement',
      'Achieved 100% on-time delivery across 3 squads through Scrum ceremonies and release planning',
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
      'Created from scratch an all-in-one legal platform guiding entrepreneurs through UAE business registration, licensing, and compliance',
      'Built end-to-end product from ideation to market launch',
    ],
    technologies: ['Salesforce', 'OpenCart', 'Commercetools'],
  },
]

function Experience() {
  return (
    <section id="experience" style={{ backgroundColor: '#f5f5f5', padding: '100px 0' }}>
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
            CAREER PATH
          </p>
          <h2 style={{
            fontSize: '48px',
            fontWeight: '700',
            color: '#464547',
            marginBottom: '16px',
            lineHeight: '1.1'
          }}>
            Experience
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
                backgroundColor: 'white',
                border: '1px solid #e0e0e0',
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
                borderBottom: '1px solid #e0e0e0',
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
                borderBottom: '1px solid #e0e0e0',
                backgroundColor: '#fafafa'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#666', fontSize: '13px' }}>
                  <Calendar style={{ width: '14px', height: '14px', color: '#39c2d7' }} />
                  <span>{exp.period}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#666', fontSize: '13px' }}>
                  <MapPin style={{ width: '14px', height: '14px', color: '#39c2d7' }} />
                  <span>{exp.location}</span>
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '24px', flex: 1 }}>
                <ul style={{ margin: 0, paddingLeft: 0, listStyle: 'none' }}>
                  {exp.description.slice(0, 3).map((item, i) => (
                    <li key={i} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      color: '#666',
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
                borderTop: '1px solid #e0e0e0',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px'
              }}>
                {exp.technologies.slice(0, 4).map((tech, i) => (
                  <span key={i} style={{
                    padding: '4px 10px',
                    backgroundColor: '#f5f5f5',
                    color: '#666',
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
          <span style={{ fontSize: '13px', color: '#999', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Scroll to explore
          </span>
          <ChevronRight style={{ width: '16px', height: '16px', color: '#39c2d7' }} />
        </div>
      </div>

      <style>{`
        .experience-scroll::-webkit-scrollbar {
          height: 6px;
        }
        .experience-scroll::-webkit-scrollbar-track {
          background: #e0e0e0;
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
