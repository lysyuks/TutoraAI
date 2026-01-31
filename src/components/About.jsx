import { MapPin, Briefcase, TrendingUp } from 'lucide-react'

function About() {
  return (
    <section id="about" className="section-padding bg-[#fafafa]">
      <div className="container-width">
        <h2 className="text-3xl font-bold mb-2 text-center text-[#1a1a2e]">
          About Me
        </h2>
        <div className="w-12 h-1 bg-[#e94560] mx-auto mb-12 rounded-full"></div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Bio */}
          <div>
            <p className="text-gray-600 mb-5 leading-relaxed">
              I'm Serhii, an AI Product Manager with 14+ years of experience
              delivering high-impact products in AI, blockchain, legal tech, and
              supply-chain solutions for enterprises and startups.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Currently at UserWay.org, I lead AI/LLM product strategy using
              LangChain, RAG, and vector databases. I've scaled products from MVP
              to 1.5M+ users and secured Google's largest 2024 accessibility contract.
            </p>

            {/* Quick Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-600">
                <div className="w-10 h-10 rounded-lg bg-[#e94560]/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#e94560]" />
                </div>
                <span>Prague, Czechia</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <div className="w-10 h-10 rounded-lg bg-[#e94560]/10 flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-[#e94560]" />
                </div>
                <span>AI Product Manager at UserWay.org</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <div className="w-10 h-10 rounded-lg bg-[#e94560]/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-[#e94560]" />
                </div>
                <span>14+ years of experience</span>
              </div>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl font-bold text-[#1a1a2e] mb-1">1.5M+</div>
              <div className="text-gray-500 text-sm">Widget Installations</div>
            </div>
            <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl font-bold text-[#1a1a2e] mb-1">14+</div>
              <div className="text-gray-500 text-sm">Years Experience</div>
            </div>
            <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl font-bold text-[#1a1a2e] mb-1">8K+</div>
              <div className="text-gray-500 text-sm">LinkedIn Followers</div>
            </div>
            <div className="p-6 bg-[#e94560] rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-white mb-1">10%</div>
              <div className="text-white/80 text-sm">Monthly ARR Growth</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
