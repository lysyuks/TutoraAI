import { Building2, Calendar } from 'lucide-react'

const experiences = [
  {
    title: 'AI Product Manager',
    company: 'UserWay',
    location: 'Prague, Czechia',
    period: 'May 2023 - Present',
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
    description: [
      'Created from scratch an all-in-one legal platform guiding entrepreneurs through UAE business registration, licensing, and compliance',
      'Built end-to-end product from ideation to market launch',
    ],
    technologies: ['Salesforce', 'OpenCart', 'Commercetools'],
  },
]

function Experience() {
  return (
    <section id="experience" className="section-padding" style={{ backgroundColor: 'white' }}>
      <div className="container-width">
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '8px', textAlign: 'center', color: '#1a1a2e' }}>
          Experience
        </h2>
        <div style={{ width: '48px', height: '4px', background: 'linear-gradient(135deg, #a855f7, #6366f1)', margin: '0 auto 48px', borderRadius: '2px' }}></div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {experiences.map((exp, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#fafafa',
                borderRadius: '12px',
                padding: '24px',
                border: '1px solid #e5e7eb'
              }}
            >
              <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1a1a2e', marginBottom: '4px' }}>
                {exp.title}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#8b5cf6' }}>
                  <Building2 style={{ width: '16px', height: '16px' }} />
                  <span style={{ fontWeight: '500' }}>{exp.company}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#6b7280', fontSize: '14px' }}>
                  <Calendar style={{ width: '16px', height: '16px' }} />
                  <span>{exp.period}</span>
                </div>
                <span style={{ color: '#9ca3af', fontSize: '14px' }}>{exp.location}</span>
              </div>
              <ul style={{ margin: 0, paddingLeft: 0, listStyle: 'none', marginBottom: exp.technologies ? '16px' : 0 }}>
                {exp.description.map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', color: '#4b5563', fontSize: '14px', marginBottom: '8px' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#8b5cf6', marginTop: '6px', flexShrink: 0 }}></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {exp.technologies && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {exp.technologies.map((tech, i) => (
                    <span key={i} style={{
                      padding: '4px 12px',
                      backgroundColor: 'rgba(139, 92, 246, 0.1)',
                      color: '#8b5cf6',
                      borderRadius: '6px',
                      fontSize: '12px',
                      fontWeight: '500'
                    }}>{tech}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
