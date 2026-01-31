import { Mail, MapPin, Send, Linkedin } from 'lucide-react'

function Contact() {
  return (
    <section id="contact" className="section-padding bg-[#1a1a2e] text-white">
      <div className="container-width">
        <h2 className="text-3xl font-bold mb-2 text-center text-white">
          Get In Touch
        </h2>
        <div className="w-12 h-1 bg-[#e94560] mx-auto mb-4 rounded-full"></div>
        <p className="text-gray-400 text-center mb-12 max-w-xl mx-auto">
          Open to new opportunities and collaborations. Feel free to reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Info */}
          <div>
            <div className="space-y-6">
              <a
                href="mailto:contact@serhii.dev"
                className="flex items-center gap-4 text-gray-300 hover:text-[#e94560] transition-colors group"
              >
                <div className="p-3 bg-[#e94560]/10 rounded-lg group-hover:bg-[#e94560]/20 transition-colors">
                  <Mail className="w-5 h-5 text-[#e94560]" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Email</div>
                  <div className="text-white">contact@serhii.dev</div>
                </div>
              </a>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="p-3 bg-[#e94560]/10 rounded-lg">
                  <MapPin className="w-5 h-5 text-[#e94560]" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Location</div>
                  <div className="text-white">Prague, Czechia</div>
                </div>
              </div>
              <a
                href="https://www.linkedin.com/in/serhii-lysiuk-322ab926/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-300 hover:text-[#e94560] transition-colors group"
              >
                <div className="p-3 bg-[#e94560]/10 rounded-lg group-hover:bg-[#e94560]/20 transition-colors">
                  <Linkedin className="w-5 h-5 text-[#e94560]" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">LinkedIn</div>
                  <div className="text-white">Connect with me</div>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#e94560] text-white placeholder-gray-500 text-sm"
                  placeholder="Your name"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#e94560] text-white placeholder-gray-500 text-sm"
                  placeholder="Your email"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#e94560] text-white placeholder-gray-500 resize-none text-sm"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#e94560] text-white rounded-lg font-medium hover:bg-[#d63d56] transition-colors text-sm"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
