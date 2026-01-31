const skillCategories = [
  {
    title: 'Product Management',
    skills: ['Product Strategy', 'Roadmap Planning', 'A/B Testing', 'Data Analysis', 'Stakeholder Management'],
  },
  {
    title: 'AI & Technology',
    skills: ['LangChain & RAG', 'Vector Databases', 'MLOps & CI/CD', 'AWS & Kubernetes', 'PostgreSQL'],
  },
  {
    title: 'Tools & Analytics',
    skills: ['Mixpanel', 'Hotjar', 'Jira & Confluence', 'Figma', 'SAFe & Agile'],
  },
]

const otherSkills = [
  'AI/LLM Strategy', 'Blockchain', 'Legal Tech', 'Supply Chain',
  'WCAG 2.2', 'ADA & GDPR', 'EU AI Act', 'FlutterFlow',
  'Make & n8n', 'Go-to-Market', 'Enterprise Sales', 'Growth Hacking',
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

        {/* Other Skills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px' }}>
          {otherSkills.map((skill, index) => (
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
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
