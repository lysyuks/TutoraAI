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
      'Cross-functional leadership for 2 engineering squads (15 engineers, 2 QAs, 2 designers)',
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
      'Collaborated with cross-functional teams to deliver high-impact features',
    ],
  },
  {
    title: 'Product Manager',
    company: 'EPAM / Evri (Hermes)',
    location: 'Remote',
    period: '2019 - 2021',
    description: [
      'Led CMS migration generating $670M in annual revenue',
      'Managed product delivery for European parcel-delivery leader',
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
      'Led blockchain product strategy and development',
    ],
  },
  {
    title: 'Founder',
    company: 'UPPERSETUP',
    location: 'UAE',
    period: '2015 - 2018',
    description: [
      'Created legal tech platform for UAE business registration and compliance',
      'Built end-to-end product from concept to market',
      'Managed product development and go-to-market strategy',
    ],
  },
]

function Experience() {
  return (
    <section id="experience" className="section-padding bg-slate-50">
      <div className="container-width">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Work <span className="text-gradient">Experience</span>
        </h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-blue-200" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow" />

                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'} pl-8 md:pl-0`}>
                  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {exp.title}
                    </h3>
                    <div className={`flex items-center gap-2 text-blue-600 mb-2 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                      <Building2 className="w-4 h-4" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    <div className={`flex items-center gap-2 text-gray-500 text-sm mb-4 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                      <span className="mx-2">|</span>
                      <span>{exp.location}</span>
                    </div>
                    <ul className={`space-y-2 text-gray-600 ${index % 2 === 0 ? '' : 'md:text-right'}`}>
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className={`text-blue-600 ${index % 2 === 0 ? '' : 'md:order-2'}`}>•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Empty Space for Timeline */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
