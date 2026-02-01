import { Mail, MapPin, Linkedin, Phone, Send } from 'lucide-react'

function Contact() {
  return (
    <section id="contact" style={{ backgroundColor: '#464547', padding: '100px 0' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 48px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'start'
        }} className="contact-grid">
          {/* Left - Contact Info */}
          <div>
            <p style={{
              fontSize: '12px',
              color: '#39c2d7',
              letterSpacing: '3px',
              marginBottom: '16px',
              fontWeight: '600',
              textTransform: 'uppercase'
            }}>
              GET IN TOUCH
            </p>
            <h2 style={{
              fontSize: '48px',
              fontWeight: '700',
              color: 'white',
              marginBottom: '16px',
              lineHeight: '1.1'
            }}>
              Let's Work Together
            </h2>
            <div style={{
              width: '60px',
              height: '4px',
              background: 'linear-gradient(90deg, #39c2d7, #a3c644)',
              marginBottom: '32px'
            }}></div>

            <p style={{
              fontSize: '18px',
              color: 'rgba(255,255,255,0.7)',
              marginBottom: '48px',
              lineHeight: '1.8'
            }}>
              Open to new opportunities and collaborations. Whether you have a project in mind
              or just want to connect, feel free to reach out.
            </p>

            {/* Contact Items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {[
                { icon: Mail, label: 'Email', value: 'sm.lysyuk@gmail.com', href: 'mailto:sm.lysyuk@gmail.com' },
                { icon: Phone, label: 'Phone', value: '+380 67 537 8771', href: 'tel:+380675378771' },
                { icon: MapPin, label: 'Location', value: 'Prague, Czechia' },
                { icon: Linkedin, label: 'LinkedIn', value: 'Connect with me', href: 'https://www.linkedin.com/in/serhii-lysiuk-322ab926/' },
              ].map((item, i) => (
                <div key={i}>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '20px',
                        textDecoration: 'none',
                        transition: 'all 0.3s'
                      }}
                      className="contact-item"
                    >
                      <div style={{
                        width: '56px',
                        height: '56px',
                        backgroundColor: 'rgba(57, 194, 215, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.3s'
                      }}>
                        <item.icon style={{ width: '24px', height: '24px', color: '#39c2d7' }} />
                      </div>
                      <div>
                        <p style={{
                          fontSize: '12px',
                          color: 'rgba(255,255,255,0.5)',
                          textTransform: 'uppercase',
                          letterSpacing: '1px',
                          marginBottom: '4px'
                        }}>
                          {item.label}
                        </p>
                        <p style={{ fontSize: '16px', color: 'white', fontWeight: '500' }}>
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                      <div style={{
                        width: '56px',
                        height: '56px',
                        backgroundColor: 'rgba(57, 194, 215, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <item.icon style={{ width: '24px', height: '24px', color: '#39c2d7' }} />
                      </div>
                      <div>
                        <p style={{
                          fontSize: '12px',
                          color: 'rgba(255,255,255,0.5)',
                          textTransform: 'uppercase',
                          letterSpacing: '1px',
                          marginBottom: '4px'
                        }}>
                          {item.label}
                        </p>
                        <p style={{ fontSize: '16px', color: 'white', fontWeight: '500' }}>
                          {item.value}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right - Contact Form */}
          <div style={{
            backgroundColor: 'rgba(255,255,255,0.05)',
            padding: '48px',
            border: '1px solid rgba(255,255,255,0.1)'
          }}>
            <h3 style={{
              fontSize: '24px',
              fontWeight: '600',
              color: 'white',
              marginBottom: '32px'
            }}>
              Send a Message
            </h3>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.5)',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  marginBottom: '8px'
                }}>
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  style={{
                    width: '100%',
                    padding: '16px',
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: 'white',
                    fontSize: '16px',
                    outline: 'none',
                    transition: 'border-color 0.3s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#39c2d7'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
              </div>
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.5)',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  marginBottom: '8px'
                }}>
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  style={{
                    width: '100%',
                    padding: '16px',
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: 'white',
                    fontSize: '16px',
                    outline: 'none',
                    transition: 'border-color 0.3s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#39c2d7'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
              </div>
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.5)',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  marginBottom: '8px'
                }}>
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  style={{
                    width: '100%',
                    padding: '16px',
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: 'white',
                    fontSize: '16px',
                    resize: 'none',
                    outline: 'none',
                    transition: 'border-color 0.3s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#39c2d7'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
              </div>
              <button
                type="submit"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px',
                  padding: '16px 32px',
                  backgroundColor: '#a3c644',
                  color: 'white',
                  border: 'none',
                  fontWeight: '600',
                  fontSize: '14px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#8fb33a'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#a3c644'}
              >
                Send Message
                <Send style={{ width: '16px', height: '16px' }} />
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .contact-item:hover div:first-child {
          background-color: #39c2d7 !important;
        }
        .contact-item:hover svg {
          color: white !important;
        }
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  )
}

export default Contact
