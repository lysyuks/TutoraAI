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
    <section id="skills" className="section-padding bg-[#fafafa]">
      <div className="container-width">
        <h2 className="text-3xl font-bold mb-2 text-center text-[#1a1a2e]">
          Skills
        </h2>
        <div className="w-12 h-1 bg-[#e94560] mx-auto mb-12 rounded-full"></div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-[#1a1a2e] mb-4 pb-3 border-b border-gray-100">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#e94560]"></span>
                    <span className="text-gray-600 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="flex flex-wrap justify-center gap-2">
          {otherSkills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-white border border-gray-200 text-gray-600 rounded-lg text-sm hover:border-[#e94560] hover:text-[#e94560] transition-colors cursor-default"
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
