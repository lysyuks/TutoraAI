import { Mail, MapPin, Linkedin } from 'lucide-react'

function Contact() {
  return (
    <section id="contact" className="section-padding" style={{ backgroundColor: '#1a1a2e' }}>
      <div className="container-width">
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '8px', textAlign: 'center', color: 'white' }}>
          Get In Touch
        </h2>
        <div style={{ width: '48px', height: '4px', backgroundColor: '#e94560', margin: '0 auto 16px', borderRadius: '2px' }}></div>
        <p style={{ color: '#9ca3af', textAlign: 'center', marginBottom: '48px', maxWidth: '500px', margin: '0 auto 48px' }}>
          Open to new opportunities and collaborations. Feel free to reach out!
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '48px', maxWidth: '800px', margin: '0 auto' }}>
          {/* Contact Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <a
              href="mailto:contact@serhii.dev"
              style={{ display: 'flex', alignItems: 'center', gap: '16px', color: '#d1d5db', textDecoration: 'none' }}
            >
              <div style={{
                padding: '12px',
                backgroundColor: 'rgba(233, 69, 96, 0.1)',
                borderRadius: '8px'
              }}>
                <Mail style={{ width: '20px', height: '20px', color: '#e94560' }} />
              </div>
              <div>
                <div style={{ fontSize: '12px', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '1px' }}>Email</div>
                <div style={{ color: 'white' }}>contact@serhii.dev</div>
              </div>
            </a>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', color: '#d1d5db' }}>
              <div style={{
                padding: '12px',
                backgroundColor: 'rgba(233, 69, 96, 0.1)',
                borderRadius: '8px'
              }}>
                <MapPin style={{ width: '20px', height: '20px', color: '#e94560' }} />
              </div>
              <div>
                <div style={{ fontSize: '12px', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '1px' }}>Location</div>
                <div style={{ color: 'white' }}>Prague, Czechia</div>
              </div>
            </div>

            <a
              href="https://www.linkedin.com/in/serhii-lysiuk-322ab926/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: '16px', color: '#d1d5db', textDecoration: 'none' }}
            >
              <div style={{
                padding: '12px',
                backgroundColor: 'rgba(233, 69, 96, 0.1)',
                borderRadius: '8px'
              }}>
                <Linkedin style={{ width: '20px', height: '20px', color: '#e94560' }} />
              </div>
              <div>
                <div style={{ fontSize: '12px', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '1px' }}>LinkedIn</div>
                <div style={{ color: 'white' }}>Connect with me</div>
              </div>
            </a>
          </div>

          {/* Contact Form */}
          <div style={{
            backgroundColor: 'rgba(255,255,255,0.05)',
            borderRadius: '12px',
            padding: '24px',
            border: '1px solid rgba(255,255,255,0.1)'
          }}>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '8px',
                  color: 'white',
                  fontSize: '14px',
                  outline: 'none'
                }}
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '8px',
                  color: 'white',
                  fontSize: '14px',
                  outline: 'none'
                }}
              />
              <textarea
                name="message"
                rows={4}
                placeholder="Your message..."
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '8px',
                  color: 'white',
                  fontSize: '14px',
                  resize: 'none',
                  outline: 'none'
                }}
              />
              <button
                type="submit"
                style={{
                  padding: '12px 24px',
                  backgroundColor: '#e94560',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: '500',
                  fontSize: '14px',
                  cursor: 'pointer'
                }}
              >
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
