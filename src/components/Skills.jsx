const skillCategories = [
  {
    title: 'Technical Skills',
    skills: ['AI / LLM Integration', 'Blockchain / Web3', 'Cloud Infrastructure', 'CI/CD Pipelines', 'API & Event-Driven Design', 'Microservices Architecture'],
  },
  {
    title: 'Product Management',
    skills: ['Product Strategy & Vision', 'Customer Discovery (JTBD)', 'Stakeholder Alignment', 'Data-Driven Roadmapping & OKRs', 'Go-to-Market & Growth Ops', 'RICE / WSJF Prioritization'],
  },
  {
    title: 'Leadership & Soft Skills',
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
    <section id="skills" className="section-padding" style={{ backgroundColor: '#fafafa' }}>
      <div className="container-width">
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '8px', textAlign: 'center', color: '#1a1a2e' }}>
          Skills
        </h2>
        <div style={{ width: '48px', height: '4px', background: 'linear-gradient(135deg, #a855f7, #6366f1)', margin: '0 auto 48px', borderRadius: '2px' }}></div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '48px' }}>
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              style={{
                backgroundColor: 'white',
                padding: '24px',
                borderRadius: '12px',
                border: '1px solid #e5e7eb'
              }}
            >
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1a1a2e', marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid #e5e7eb' }}>
                {category.title}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#8b5cf6' }}></span>
                    <span style={{ color: '#4b5563', fontSize: '14px' }}>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1a1a2e', marginBottom: '16px', textAlign: 'center' }}>
          Technologies
        </h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px', marginBottom: '32px' }}>
          {technologies.map((tech, index) => (
            <span
              key={index}
              style={{
                padding: '8px 16px',
                backgroundColor: 'rgba(139, 92, 246, 0.1)',
                border: '1px solid rgba(139, 92, 246, 0.2)',
                color: '#8b5cf6',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '500'
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Tools */}
        <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1a1a2e', marginBottom: '16px', textAlign: 'center' }}>
          Tools
        </h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px' }}>
          {tools.map((tool, index) => (
            <span
              key={index}
              style={{
                padding: '8px 16px',
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                color: '#4b5563',
                borderRadius: '8px',
                fontSize: '14px'
              }}
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
