const skillCategories = [
  {
    title: 'Technical Skills',
    color: '#39c2d7',
    skills: ['AI / LLM Integration', 'Blockchain / Web3', 'Cloud Infrastructure', 'CI/CD Pipelines', 'API & Event-Driven Design', 'Microservices Architecture'],
  },
  {
    title: 'Product Management',
    color: '#a3c644',
    skills: ['Product Strategy & Vision', 'Customer Discovery (JTBD)', 'Stakeholder Alignment', 'Data-Driven Roadmapping & OKRs', 'Go-to-Market & Growth Ops', 'RICE / WSJF Prioritization'],
  },
  {
    title: 'Leadership & Soft Skills',
    color: '#39c2d7',
    skills: ['Servant Leadership', 'Problem-Solving', 'Clear Communication', 'Cross-Functional Collaboration', 'Change Management', 'Coaching & Mentorship'],
  },
]

const technologies = [
  'AWS', 'Azure', 'Google Cloud', 'Terraform', 'Docker',
  'PostgreSQL', 'Redis', 'Snowflake', 'Qdrant', 'Pinecone',
  'LangChain', 'RAG', 'LlamaIndex', 'MLflow', 'Weights & Biases',
  'React', 'Next.js', 'React Native', 'Flutter', 'Node.js', 'Python',
  'Solidity', 'IPFS', 'Chainlink', 'Smart Contracts',
]

const tools = [
  'Jira', 'Monday.com', 'Asana', 'Confluence', 'Notion',
  'Figma', 'Sketch', 'MiroBoard', 'Adobe XD',
  'Mixpanel', 'Tableau', 'Hotjar', 'Google Analytics',
  'GitHub', 'GitLab', 'BitBucket',
]

function Skills() {
  return (
    <section id="skills" style={{ backgroundColor: 'white', padding: '100px 0' }}>
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
            WHAT I DO
          </p>
          <h2 style={{
            fontSize: '48px',
            fontWeight: '700',
            color: '#464547',
            marginBottom: '16px',
            lineHeight: '1.1'
          }}>
            Skills & Expertise
          </h2>
          <div style={{
            width: '60px',
            height: '4px',
            background: 'linear-gradient(90deg, #39c2d7, #a3c644)'
          }}></div>
        </div>

        {/* Skill Categories */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '32px',
          marginBottom: '80px'
        }} className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              style={{
                backgroundColor: '#f5f5f5',
                padding: '32px',
                position: 'relative'
              }}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '4px',
                backgroundColor: category.color
              }}></div>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#464547',
                marginBottom: '24px',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                {category.title}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '8px 0',
                    borderBottom: skillIndex < category.skills.length - 1 ? '1px solid #e0e0e0' : 'none'
                  }}>
                    <div style={{
                      width: '8px',
                      height: '8px',
                      backgroundColor: category.color,
                      flexShrink: 0
                    }}></div>
                    <span style={{ color: '#666', fontSize: '14px' }}>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technologies Section */}
        <div style={{ marginBottom: '60px' }}>
          <h3 style={{
            fontSize: '24px',
            fontWeight: '600',
            color: '#464547',
            marginBottom: '32px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px'
          }}>
            <span style={{
              display: 'inline-block',
              width: '40px',
              height: '4px',
              background: 'linear-gradient(90deg, #39c2d7, #a3c644)'
            }}></span>
            Technologies
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            {technologies.map((tech, index) => (
              <span
                key={index}
                style={{
                  padding: '10px 20px',
                  backgroundColor: 'white',
                  border: '1px solid #e0e0e0',
                  color: '#464547',
                  fontSize: '14px',
                  fontWeight: '500',
                  transition: 'all 0.3s',
                  cursor: 'default'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#39c2d7'
                  e.target.style.color = 'white'
                  e.target.style.borderColor = '#39c2d7'
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'white'
                  e.target.style.color = '#464547'
                  e.target.style.borderColor = '#e0e0e0'
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Tools Section */}
        <div>
          <h3 style={{
            fontSize: '24px',
            fontWeight: '600',
            color: '#464547',
            marginBottom: '32px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px'
          }}>
            <span style={{
              display: 'inline-block',
              width: '40px',
              height: '4px',
              background: 'linear-gradient(90deg, #a3c644, #39c2d7)'
            }}></span>
            Tools
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            {tools.map((tool, index) => (
              <span
                key={index}
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#f5f5f5',
                  color: '#666',
                  fontSize: '14px',
                  fontWeight: '500',
                  transition: 'all 0.3s',
                  cursor: 'default'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#a3c644'
                  e.target.style.color = 'white'
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#f5f5f5'
                  e.target.style.color = '#666'
                }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}

export default Skills
