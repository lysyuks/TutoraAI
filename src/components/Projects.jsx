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
    <section id="projects" className="section-padding bg-white">
      <div className="container-width">
        <h2 className="text-3xl font-bold mb-2 text-center text-[#1a1a2e]">
          Projects
        </h2>
        <div className="w-12 h-1 bg-[#e94560] mx-auto mb-12 rounded-full"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-[#fafafa] rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center justify-between mb-4">
                <Folder className="w-8 h-8 text-[#e94560]" />
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#e94560] transition-colors"
                    aria-label="Live Demo"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
              <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2 group-hover:text-[#e94560] transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-white text-gray-500 text-xs rounded border border-gray-200"
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
