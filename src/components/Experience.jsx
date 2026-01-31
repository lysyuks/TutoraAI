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
    ],
  },
  {
    title: 'Founder',
    company: 'UPPERSETUP',
    location: 'UAE',
    period: '2015 - 2018',
    description: [
      'Created legal tech platform for UAE business registration',
      'Built end-to-end product from concept to market',
    ],
  },
]

function Experience() {
  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container-width">
        <h2 className="text-3xl font-bold mb-2 text-center text-[#1a1a2e]">
          Experience
        </h2>
        <div className="w-12 h-1 bg-[#e94560] mx-auto mb-12 rounded-full"></div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-[#fafafa] rounded-xl p-6 hover:shadow-md transition-all duration-300 border border-gray-100"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[#1a1a2e] mb-1">
                    {exp.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4">
                    <div className="flex items-center gap-2 text-[#e94560]">
                      <Building2 className="w-4 h-4" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <span className="text-gray-400 text-sm">{exp.location}</span>
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#e94560] mt-2 flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
