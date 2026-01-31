import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-[#1a1a2e]">
      <div className="container-width text-center pt-20">
        {/* Profile Image */}
        <div className="mb-8">
          <div className="w-36 h-36 mx-auto rounded-full bg-gradient-to-br from-[#e94560] to-[#ff6b6b] p-1">
            <div className="w-full h-full rounded-full bg-[#1a1a2e] flex items-center justify-center">
              <span className="text-4xl font-bold text-white">SL</span>
            </div>
          </div>
        </div>

        {/* Name and Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-3 text-white tracking-tight">
          Serhii Lysiuk
        </h1>
        <p className="text-xl md:text-2xl text-[#e94560] font-medium mb-6">
          AI Product Manager
        </p>

        {/* Tagline */}
        <p className="text-base text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed">
          14+ years delivering high-impact products in AI, blockchain, legal tech,
          and supply-chain solutions for enterprises and startups.
        </p>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <a
            href="https://github.com/lysyuks"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-[#e94560] hover:border-[#e94560] text-gray-400 hover:text-white transition-all duration-300"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/serhii-lysiuk-322ab926/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-[#e94560] hover:border-[#e94560] text-gray-400 hover:text-white transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:contact@example.com"
            className="p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-[#e94560] hover:border-[#e94560] text-gray-400 hover:text-white transition-all duration-300"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="px-7 py-3 bg-[#e94560] text-white rounded-lg font-medium hover:bg-[#d63d56] transition-colors"
          >
            Get In Touch
          </a>
          <a
            href="#experience"
            className="px-7 py-3 border border-white/20 text-white rounded-lg font-medium hover:bg-white/5 transition-colors"
          >
            View Experience
          </a>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
          aria-label="Scroll down"
        >
          <ArrowDown className="w-5 h-5 text-gray-500" />
        </a>
      </div>
    </section>
  )
}

export default Hero
