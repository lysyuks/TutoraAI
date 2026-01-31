import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container-width text-center pt-20">
        {/* Profile Image */}
        <div className="mb-8">
          <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-blue-600 to-blue-400 p-1">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
              <span className="text-5xl font-bold text-gradient">SL</span>
            </div>
          </div>
        </div>

        {/* Name and Title */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900">
          Serhii Lysiuk
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-6">
          AI Product Manager
        </p>

        {/* Tagline */}
        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
          Product manager with 14+ years of experience delivering high-impact products
          in AI, blockchain, legal tech, and supply-chain solutions for enterprises and startups.
        </p>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 hover:bg-blue-100 hover:text-blue-600 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/serhii-lysiuk-322ab926/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 hover:bg-blue-100 hover:text-blue-600 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:your@email.com"
            className="p-3 rounded-full bg-gray-100 hover:bg-blue-100 hover:text-blue-600 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/25"
          >
            Get In Touch
          </a>
          <a
            href="#projects"
            className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-medium hover:border-blue-600 hover:text-blue-600 transition-colors"
          >
            View My Work
          </a>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
          aria-label="Scroll down"
        >
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </a>
      </div>
    </section>
  )
}

export default Hero
