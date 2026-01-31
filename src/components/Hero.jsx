import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      backgroundColor: '#1a1a2e',
      padding: '80px 24px 40px'
    }}>
      <div style={{ textAlign: 'center', maxWidth: '600px' }}>
        {/* Profile Image */}
        <div style={{
          width: '140px',
          height: '140px',
          margin: '0 auto 32px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #e94560, #ff6b6b)',
          padding: '4px'
        }}>
          <div style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            backgroundColor: '#1a1a2e',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <span style={{ fontSize: '36px', fontWeight: 'bold', color: 'white' }}>SL</span>
          </div>
        </div>

        {/* Name and Title */}
        <h1 style={{ fontSize: '42px', fontWeight: 'bold', marginBottom: '12px', color: 'white' }}>
          Serhii Lysiuk
        </h1>
        <p style={{ fontSize: '20px', color: '#e94560', fontWeight: '500', marginBottom: '24px' }}>
          AI Product Manager
        </p>

        {/* Tagline */}
        <p style={{ fontSize: '16px', color: '#9ca3af', marginBottom: '40px', lineHeight: '1.6' }}>
          14+ years delivering high-impact products in AI, blockchain, legal tech,
          and supply-chain solutions for enterprises and startups.
        </p>

        {/* Social Links */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '40px' }}>
          {[
            { icon: Github, href: 'https://github.com/lysyuks' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/serhii-lysiuk-322ab926/' },
            { icon: Mail, href: 'mailto:contact@example.com' }
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              style={{
                padding: '12px',
                borderRadius: '8px',
                backgroundColor: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#9ca3af',
                display: 'flex',
                transition: 'all 0.3s'
              }}
            >
              <item.icon style={{ width: '20px', height: '20px' }} />
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
          <a
            href="#contact"
            style={{
              padding: '14px 28px',
              backgroundColor: '#e94560',
              color: 'white',
              borderRadius: '8px',
              fontWeight: '500',
              textDecoration: 'none',
              transition: 'background 0.3s'
            }}
          >
            Get In Touch
          </a>
          <a
            href="#experience"
            style={{
              padding: '14px 28px',
              border: '1px solid rgba(255,255,255,0.2)',
              color: 'white',
              borderRadius: '8px',
              fontWeight: '500',
              textDecoration: 'none'
            }}
          >
            View Experience
          </a>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#about"
          style={{
            position: 'absolute',
            bottom: '32px',
            left: '50%',
            transform: 'translateX(-50%)',
            animation: 'bounce 2s infinite'
          }}
        >
          <ArrowDown style={{ width: '20px', height: '20px', color: '#6b7280' }} />
        </a>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-10px); }
        }
        @media (min-width: 640px) {
          section > div > div:last-of-type { flex-direction: row !important; }
        }
      `}</style>
    </section>
  )
}

export default Hero
