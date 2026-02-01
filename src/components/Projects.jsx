import { ExternalLink, ArrowRight } from 'lucide-react'

const projects = [
  {
    title: 'UserWay AI Accessibility Platform',
    description: 'Scaled AI accessibility platform from MVP to 1.5M+ widget installations worldwide. Secured Google\'s largest 2024 accessibility contract.',
    impact: '1.5M+ installs',
    technologies: ['LangChain', 'RAG', 'PostgreSQL', 'AWS'],
    live: 'https://userway.org',
    featured: true,
  },
  {
    title: 'Evri (Hermes) CMS Migration',
    description: 'Led complete CMS migration for Europe\'s #1 parcel-delivery network, unlocking $670M in new annual revenue.',
    impact: '$670M revenue',
    technologies: ['Enterprise CMS', 'SAFe', 'Product Strategy'],
    featured: true,
  },
  {
    title: 'Blue Yonder Design System',
    description: 'Product-managed company-wide Design System / Common Component Library adopted by 1,000+ engineers.',
    impact: '1000+ engineers',
    technologies: ['React', 'TypeScript', 'Storybook'],
    featured: true,
  },
  {
    title: 'Sapien Wallet',
    description: 'Developed crypto wallet with post-transaction human rating system. Achieved 100K users in the first month.',
    impact: '100K users',
    technologies: ['Blockchain', 'Solidity', 'React Native'],
  },
  {
    title: 'UPPERSETUP Legal Tech',
    description: 'Created all-in-one legal platform guiding entrepreneurs through UAE business registration and compliance.',
    impact: 'Legal Tech',
    technologies: ['Salesforce', 'OpenCart'],
  },
  {
    title: 'AI Product Publications',
    description: 'Thought leadership on AI integration, no-code solutions, and product management best practices.',
    impact: 'Thought Leadership',
    technologies: ['Medium', 'AI Strategy'],
  },
]

function Projects() {
  return (
    <section id="projects" style={{ backgroundColor: '#f5f5f5', padding: '100px 0' }}>
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
            PORTFOLIO
          </p>
          <h2 style={{
            fontSize: '48px',
            fontWeight: '700',
            color: '#464547',
            marginBottom: '16px',
            lineHeight: '1.1'
          }}>
            Featured Projects
          </h2>
          <div style={{
            width: '60px',
            height: '4px',
            background: 'linear-gradient(90deg, #39c2d7, #a3c644)'
          }}></div>
        </div>

        {/* Featured Projects - Large Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '32px',
          marginBottom: '48px'
        }} className="projects-featured">
          {projects.filter(p => p.featured).map((project, index) => (
            <div
              key={index}
              style={{
                backgroundColor: 'white',
                border: '1px solid #e0e0e0',
                overflow: 'hidden',
                transition: 'all 0.3s'
              }}
              className="project-card"
            >
              {/* Card Header */}
              <div style={{
                padding: '32px',
                background: index === 0
                  ? 'linear-gradient(135deg, #39c2d7 0%, #a3c644 100%)'
                  : index === 1
                  ? 'linear-gradient(135deg, #a3c644 0%, #39c2d7 100%)'
                  : 'linear-gradient(135deg, #464547 0%, #666 100%)',
                color: 'white'
              }}>
                <span style={{
                  display: 'inline-block',
                  padding: '4px 12px',
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  fontSize: '12px',
                  fontWeight: '600',
                  marginBottom: '16px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  {project.impact}
                </span>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  marginBottom: '0',
                  lineHeight: '1.3'
                }}>
                  {project.title}
                </h3>
              </div>

              {/* Card Body */}
              <div style={{ padding: '24px' }}>
                <p style={{
                  fontSize: '14px',
                  color: '#666',
                  lineHeight: '1.7',
                  marginBottom: '24px'
                }}>
                  {project.description}
                </p>

                {/* Technologies */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                  marginBottom: '24px'
                }}>
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      style={{
                        padding: '4px 12px',
                        backgroundColor: '#f5f5f5',
                        color: '#666',
                        fontSize: '12px',
                        fontWeight: '500'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link */}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: '#39c2d7',
                      fontSize: '14px',
                      fontWeight: '600',
                      textDecoration: 'none',
                      textTransform: 'uppercase',
                      letterSpacing: '1px'
                    }}
                  >
                    View Project
                    <ExternalLink style={{ width: '14px', height: '14px' }} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects - Smaller Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px'
        }} className="projects-other">
          {projects.filter(p => !p.featured).map((project, index) => (
            <div
              key={index}
              style={{
                backgroundColor: 'white',
                border: '1px solid #e0e0e0',
                padding: '24px',
                transition: 'all 0.3s'
              }}
              className="project-card-small"
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '16px'
              }}>
                <span style={{
                  padding: '4px 12px',
                  backgroundColor: '#f5f5f5',
                  color: '#39c2d7',
                  fontSize: '11px',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  {project.impact}
                </span>
                <ArrowRight style={{ width: '16px', height: '16px', color: '#ccc' }} />
              </div>
              <h4 style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#464547',
                marginBottom: '8px'
              }}>
                {project.title}
              </h4>
              <p style={{
                fontSize: '13px',
                color: '#666',
                lineHeight: '1.6'
              }}>
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .project-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }
        .project-card-small:hover {
          border-color: #39c2d7;
        }
        .project-card-small:hover svg {
          color: #39c2d7 !important;
        }
        @media (max-width: 900px) {
          .projects-featured,
          .projects-other {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}

export default Projects
