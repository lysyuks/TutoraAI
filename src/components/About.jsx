import { MapPin, Calendar, Briefcase } from 'lucide-react'

function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-width">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-gradient">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Bio */}
          <div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Hello! I'm Serhii, an AI Product Manager with 14+ years of experience
              specializing in AI, blockchain, legal tech, and supply-chain solutions.
              I'm passionate about delivering high-impact products for enterprises
              and startups alike.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Currently at UserWay.org, I lead AI/LLM product strategy, working with
              technologies like LangChain, RAG features, and vector databases. I've scaled
              products from MVP to millions of users and closed six-figure enterprise deals,
              including Google's largest 2024 accessibility contract.
            </p>

            {/* Quick Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-600">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span>Prague, Czechia</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Briefcase className="w-5 h-5 text-blue-600" />
                <span>AI Product Manager at UserWay.org</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Calendar className="w-5 h-5 text-blue-600" />
                <span>14+ years of experience</span>
              </div>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">1.5M+</div>
              <div className="text-gray-600">Widget Installations</div>
            </div>
            <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">14+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">8K+</div>
              <div className="text-gray-600">LinkedIn Followers</div>
            </div>
            <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">10%</div>
              <div className="text-gray-600">Monthly ARR Growth</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
