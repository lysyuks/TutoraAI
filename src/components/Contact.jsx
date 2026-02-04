import { useState } from 'react'
import { Mail, MapPin, Linkedin, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { useLanguage } from '../context/LanguageContext'

function Contact() {
  const { themes } = useTheme()
  const { t } = useLanguage()
  const [formState, setFormState] = useState({ status: 'idle', message: '' })
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  // Formspree form ID - replace with your own from https://formspree.io
  const FORMSPREE_ID = 'xpwzgkqr'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormState({ status: 'loading', message: '' })

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setFormState({ status: 'success', message: t.contact.successMessage || 'Message sent successfully!' })
        setFormData({ name: '', email: '', message: '' })
      } else {
        throw new Error('Failed to send')
      }
    } catch {
      setFormState({ status: 'error', message: t.contact.errorMessage || 'Failed to send. Please try again.' })
    }
  }

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const contactItems = [
    { icon: Mail, label: t.contact.email, value: 'sm.lysyuk@gmail.com', href: 'mailto:sm.lysyuk@gmail.com' },
    { icon: Phone, label: t.contact.phone, value: '+380 67 537 8771', href: 'tel:+380675378771' },
    { icon: MapPin, label: t.contact.locationLabel, value: 'Prague, Czechia' },
    { icon: Linkedin, label: t.contact.linkedin, value: t.contact.connectWithMe, href: 'https://www.linkedin.com/in/serhii-lysiuk-322ab926/' },
  ]

  return (
    <section id="contact" style={{
      backgroundColor: themes.contactBg,
      padding: '100px 0',
      transition: 'background-color 0.3s'
    }}>
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
              {t.contact.label}
            </p>
            <h2 style={{
              fontSize: '48px',
              fontWeight: '700',
              color: 'white',
              marginBottom: '16px',
              lineHeight: '1.1'
            }}>
              {t.contact.title}
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
              {t.contact.description}
            </p>

            {/* Contact Items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {contactItems.map((item, i) => (
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
              {t.contact.sendMessage}
            </h3>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.5)',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  marginBottom: '8px'
                }}>
                  {t.contact.yourName}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
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
                  {t.contact.yourEmail}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
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
                  {t.contact.message}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
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

              {/* Status Message */}
              {formState.status === 'success' && (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '14px 16px',
                  backgroundColor: 'rgba(163, 198, 68, 0.15)',
                  border: '1px solid #a3c644',
                  color: '#a3c644'
                }}>
                  <CheckCircle style={{ width: '20px', height: '20px' }} />
                  <span>{formState.message}</span>
                </div>
              )}

              {formState.status === 'error' && (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '14px 16px',
                  backgroundColor: 'rgba(239, 68, 68, 0.15)',
                  border: '1px solid #ef4444',
                  color: '#ef4444'
                }}>
                  <AlertCircle style={{ width: '20px', height: '20px' }} />
                  <span>{formState.message}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={formState.status === 'loading'}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px',
                  padding: '16px 32px',
                  backgroundColor: formState.status === 'loading' ? '#7a9433' : '#a3c644',
                  color: 'white',
                  border: 'none',
                  fontWeight: '600',
                  fontSize: '14px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  cursor: formState.status === 'loading' ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s',
                  opacity: formState.status === 'loading' ? 0.7 : 1
                }}
                onMouseEnter={(e) => formState.status !== 'loading' && (e.target.style.backgroundColor = '#8fb33a')}
                onMouseLeave={(e) => formState.status !== 'loading' && (e.target.style.backgroundColor = '#a3c644')}
              >
                {formState.status === 'loading' ? (t.contact.sending || 'Sending...') : t.contact.send}
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
