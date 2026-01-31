import { ExternalLink, Github, Folder } from 'lucide-react'

const projects = [
  {
    title: 'UserWay AI Accessibility Platform',
    description:
      'Scaled AI accessibility platform from MVP to 1.5M+ widget installations. Secured Google\'s largest 2024 accessibility contract and drove 10% monthly ARR growth.',
    technologies: ['LangChain', 'RAG', 'PostgreSQL', 'AWS', 'Kubernetes'],
    live: 'https://userway.org',
    featured: true,
  },
  {
    title: 'Evri (Hermes) CMS Migration',
    description:
      'Led complete CMS migration for European parcel-delivery leader, generating $670M in annual revenue. Managed cross-functional teams using SAFe methodology.',
    technologies: ['Enterprise CMS', 'Agile', 'SAFe', 'Product Strategy'],
    featured: true,
  },
  {
    title: 'Sapien Wallet',
    description:
      'Developed crypto wallet with innovative human-rating system. Achieved 100K users in the first month of launch through strategic product positioning.',
    technologies: ['Blockchain', 'Crypto', 'Mobile', 'KYC Compliance'],
    featured: true,
  },
  {
    title: 'Blue Yonder UI Component Library',
    description:
      'Built internal UI component library that was adopted by 1,000+ engineers across the organization.',
    technologies: ['React', 'Design Systems', 'Documentation'],
    featured: false,
  },
  {
    title: 'UPPERSETUP Legal Tech Platform',
    description:
      'Created legal tech platform for UAE business registration and compliance, enabling streamlined company formation.',
    technologies: ['Legal Tech', 'Compliance', 'B2B SaaS'],
    featured: false,
  },
  {
    title: 'AI Product Publications',
    description:
      'Active thought leader with publications on AI integration, no-code solutions, North Star Metrics, and product management best practices.',
    technologies: ['Medium', 'Thought Leadership', 'AI Strategy'],
    featured: false,
  },
]

function Projects() {
  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-width">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Featured <span className="text-gradient">Projects</span>
        </h2>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-4">
                <Folder className="w-10 h-10 text-blue-600" />
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-blue-600 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-blue-600 transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-white text-gray-600 text-xs rounded-full border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Other Noteworthy Projects
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          {otherProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-50 rounded-xl p-5 hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h4>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
              </div>
              <p className="text-gray-600 text-sm mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-1">
                {project.technologies.slice(0, 3).map((tech, i) => (
                  <span
                    key={i}
                    className="text-blue-600 text-xs"
                  >
                    {tech}
                    {i < Math.min(project.technologies.length, 3) - 1 && ' • '}
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
