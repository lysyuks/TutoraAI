import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import profileImg from '/profile.png'

function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #581c87 100%)',
      padding: '80px 24px 40px'
    }}>
      <div style={{ textAlign: 'center', maxWidth: '700px' }}>
        {/* Profile Image */}
        <div style={{
          width: '160px',
          height: '160px',
          margin: '0 auto 32px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #a855f7, #6366f1)',
          padding: '4px',
          boxShadow: '0 20px 40px rgba(139, 92, 246, 0.3)'
        }}>
          <img
            src={profileImg}
            alt="Serhii Lysiuk"
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              objectFit: 'cover'
            }}
            onError={(e) => {
              e.target.style.display = 'none'
              e.target.parentElement.innerHTML = '<span style="font-size: 48px; font-weight: bold; color: white; display: flex; align-items: center; justify-content: center; height: 100%;">SL</span>'
            }}
          />
        </div>

        {/* Tagline */}
        <p style={{
          fontSize: '12px',
          color: '#a78bfa',
          letterSpacing: '3px',
          marginBottom: '16px',
          fontWeight: '500'
        }}>
          ENGINEERING EXCELLENCE FOR TOMORROW'S WORLD
        </p>

        {/* Name and Title */}
        <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '12px', color: 'white' }}>
          Serhii Lysiuk
        </h1>
        <p style={{ fontSize: '22px', color: '#c4b5fd', fontWeight: '500', marginBottom: '24px' }}>
          AI Product Manager
        </p>

        {/* Description */}
        <p style={{ fontSize: '16px', color: '#a5b4fc', marginBottom: '40px', lineHeight: '1.7', opacity: 0.9 }}>
          14+ years delivering high-impact products in AI, blockchain, legal tech,
          and supply-chain solutions for enterprises and startups.
        </p>

        {/* Social Links */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '40px' }}>
          {[
            { icon: Github, href: 'https://github.com/lysyuks' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/serhii-lysiuk-322ab926/' },
            { icon: Mail, href: 'mailto:contact@serhii.dev' }
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              style={{
                padding: '12px',
                borderRadius: '12px',
                backgroundColor: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.15)',
                color: '#c4b5fd',
                display: 'flex',
                transition: 'all 0.3s',
                backdropFilter: 'blur(10px)'
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
              padding: '14px 32px',
              background: 'linear-gradient(135deg, #a855f7, #6366f1)',
              color: 'white',
              borderRadius: '12px',
              fontWeight: '600',
              textDecoration: 'none',
              boxShadow: '0 10px 30px rgba(139, 92, 246, 0.4)',
              transition: 'transform 0.3s'
            }}
          >
            Get In Touch
          </a>
          <a
            href="#experience"
            style={{
              padding: '14px 32px',
              border: '1px solid rgba(255,255,255,0.25)',
              color: 'white',
              borderRadius: '12px',
              fontWeight: '500',
              textDecoration: 'none',
              backdropFilter: 'blur(10px)'
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
          <ArrowDown style={{ width: '20px', height: '20px', color: 'rgba(255,255,255,0.5)' }} />
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
