import { ExternalLink, Folder } from 'lucide-react'

const projects = [
  {
    title: 'UserWay AI Accessibility Platform',
    description: 'Scaled AI accessibility platform from MVP to 1.5M+ widget installations. Secured Google\'s largest 2024 accessibility contract.',
    technologies: ['LangChain', 'RAG', 'PostgreSQL', 'AWS'],
    live: 'https://userway.org',
  },
  {
    title: 'Evri (Hermes) CMS Migration',
    description: 'Led complete CMS migration for European parcel-delivery leader, generating $670M in annual revenue.',
    technologies: ['Enterprise CMS', 'SAFe', 'Product Strategy'],
  },
  {
    title: 'Sapien Wallet',
    description: 'Developed crypto wallet with human-rating system. Achieved 100K users in the first month of launch.',
    technologies: ['Blockchain', 'Crypto', 'Mobile'],
  },
  {
    title: 'Blue Yonder UI Library',
    description: 'Built internal UI component library adopted by 1,000+ engineers across the organization.',
    technologies: ['React', 'Design Systems'],
  },
  {
    title: 'UPPERSETUP Legal Tech',
    description: 'Created legal tech platform for UAE business registration and compliance.',
    technologies: ['Legal Tech', 'B2B SaaS'],
  },
  {
    title: 'AI Product Publications',
    description: 'Thought leadership on AI integration, no-code solutions, and product management.',
    technologies: ['Medium', 'AI Strategy'],
  },
]

function Projects() {
  return (
    <section id="projects" className="section-padding" style={{ backgroundColor: 'white' }}>
      <div className="container-width">
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '8px', textAlign: 'center', color: '#1a1a2e' }}>
          Projects
        </h2>
        <div style={{ width: '48px', height: '4px', background: 'linear-gradient(135deg, #a855f7, #6366f1)', margin: '0 auto 48px', borderRadius: '2px' }}></div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {projects.map((project, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#fafafa',
                borderRadius: '12px',
                padding: '24px',
                border: '1px solid #e5e7eb',
                transition: 'box-shadow 0.3s'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <Folder style={{ width: '32px', height: '32px', color: '#8b5cf6' }} />
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#9ca3af', transition: 'color 0.2s' }}
                  >
                    <ExternalLink style={{ width: '20px', height: '20px' }} />
                  </a>
                )}
              </div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1a1a2e', marginBottom: '8px' }}>
                {project.title}
              </h3>
              <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '16px', lineHeight: '1.6' }}>
                {project.description}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    style={{
                      padding: '4px 8px',
                      backgroundColor: 'white',
                      color: '#6b7280',
                      fontSize: '12px',
                      borderRadius: '4px',
                      border: '1px solid #e5e7eb'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
