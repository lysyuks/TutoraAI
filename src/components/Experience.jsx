import { Building2, Calendar } from 'lucide-react'

const experiences = [
  {
    title: 'AI Product Manager',
    company: 'UserWay.org',
    location: 'Prague, Czechia',
    period: 'May 2023 - Present',
    description: [
      'Scaled product from MVP to 1.5M+ widget installations globally',
      'Drove 10% monthly ARR growth and closed six-figure enterprise deals',
      'Secured Google\'s largest 2024 accessibility contract',
      'Lead AI/LLM product strategy with LangChain, RAG, and vector databases',
    ],
  },
  {
    title: 'Product Manager',
    company: 'Blue Yonder',
    location: 'Remote',
    period: '2021 - 2023',
    description: [
      'Built internal UI component library adopted by 1,000+ engineers',
      'Led product strategy for enterprise supply-chain solutions',
    ],
  },
  {
    title: 'Product Manager',
    company: 'EPAM / Evri (Hermes)',
    location: 'Remote',
    period: '2019 - 2021',
    description: [
      'Led CMS migration generating $670M in annual revenue',
      'Implemented agile development processes and SAFe methodology',
    ],
  },
  {
    title: 'Product Manager',
    company: 'Sapien Wallet',
    location: 'Remote',
    period: '2018 - 2019',
    description: [
      'Developed crypto wallet with human-rating system',
      'Achieved 100K users in the first month of launch',
    ],
  },
  {
    title: 'Founder',
    company: 'UPPERSETUP',
    location: 'UAE',
    period: '2015 - 2018',
    description: [
      'Created legal tech platform for UAE business registration',
    ],
  },
]

function Experience() {
  return (
    <section id="experience" className="section-padding" style={{ backgroundColor: 'white' }}>
      <div className="container-width">
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '8px', textAlign: 'center', color: '#1a1a2e' }}>
          Experience
        </h2>
        <div style={{ width: '48px', height: '4px', backgroundColor: '#e94560', margin: '0 auto 48px', borderRadius: '2px' }}></div>

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
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e94560' }}>
                  <Building2 style={{ width: '16px', height: '16px' }} />
                  <span style={{ fontWeight: '500' }}>{exp.company}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#6b7280', fontSize: '14px' }}>
                  <Calendar style={{ width: '16px', height: '16px' }} />
                  <span>{exp.period}</span>
                </div>
                <span style={{ color: '#9ca3af', fontSize: '14px' }}>{exp.location}</span>
              </div>
              <ul style={{ margin: 0, paddingLeft: 0, listStyle: 'none' }}>
                {exp.description.map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', color: '#4b5563', fontSize: '14px', marginBottom: '8px' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#e94560', marginTop: '6px', flexShrink: 0 }}></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
