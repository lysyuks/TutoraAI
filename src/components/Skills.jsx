const skillCategories = [
  {
    title: 'Product Management',
    skills: [
      { name: 'Product Strategy', level: 95 },
      { name: 'Roadmap Planning', level: 92 },
      { name: 'A/B Testing', level: 90 },
      { name: 'Data Analysis', level: 88 },
      { name: 'Stakeholder Management', level: 95 },
    ],
  },
  {
    title: 'AI & Technology',
    skills: [
      { name: 'LangChain & RAG', level: 90 },
      { name: 'Vector Databases', level: 85 },
      { name: 'MLOps & CI/CD', level: 85 },
      { name: 'AWS & Kubernetes', level: 82 },
      { name: 'PostgreSQL & Redis', level: 88 },
    ],
  },
  {
    title: 'Tools & Analytics',
    skills: [
      { name: 'Mixpanel', level: 92 },
      { name: 'Hotjar', level: 88 },
      { name: 'Jira & Confluence', level: 95 },
      { name: 'Figma', level: 80 },
      { name: 'SAFe & Agile', level: 90 },
    ],
  },
]

function Skills() {
  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container-width">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Technical <span className="text-gradient">Skills</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-slate-50 p-6 rounded-2xl"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
            Other Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'AI/LLM Strategy',
              'Blockchain',
              'Legal Tech',
              'Supply Chain',
              'WCAG 2.2 Compliance',
              'ADA & GDPR',
              'EU AI Act',
              'FlutterFlow',
              'Make & n8n',
              'Go-to-Market',
              'Enterprise Sales',
              'Growth Hacking',
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
