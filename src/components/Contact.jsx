import { useReveal } from '../hooks/useReveal'

const socials = [
  { label: 'GitHub',   href: 'https://github.com/afayingala' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/afayi-ngala-434b88280/' },
  { label: 'DevPost',  href: 'https://devpost.com/afayingala67' },
]

export default function Contact() {
  const [ref, visible] = useReveal()

  return (
    <section id="contact" style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', padding: '7rem 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
          <span style={{ fontFamily: '"DM Sans"', fontWeight: 400, fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted)', whiteSpace: 'nowrap' }}>Contact</span>
          <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
        </div>

        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`} style={{ maxWidth: '640px' }}>

          {/* Status */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2rem' }}>
            <span className="pulse-dot" style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', display: 'inline-block', flexShrink: 0 }} />
            <span style={{ fontFamily: '"DM Sans"', fontWeight: 300, fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)' }}>
              Open to opportunities
            </span>
          </div>

          {/* Heading */}
          <h2 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontWeight: 300, fontSize: 'clamp(3rem, 7vw, 5rem)', lineHeight: 1.05, letterSpacing: '-0.01em', marginBottom: '2rem' }}>
            Let&rsquo;s{' '}
            <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>talk.</em>
          </h2>

          <p style={{ fontFamily: '"DM Sans"', fontWeight: 300, fontSize: '15px', lineHeight: 1.9, color: 'var(--muted)', marginBottom: '3rem', maxWidth: '480px' }}>
            Whether it is a role, a collaboration, a build, or just a conversation about tech in Cameroon —
            reach out. I read everything.
          </p>

          {/* Email */}
          <a
            href="mailto:afayingala67@gmail.com"
            style={{
              display: 'inline-block', fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontWeight: 300, fontSize: 'clamp(1.2rem, 3vw, 1.6rem)',
              letterSpacing: '0.02em', color: 'var(--text)',
              textDecoration: 'none', borderBottom: '1px solid var(--border)',
              paddingBottom: '4px', marginBottom: '3rem',
              transition: 'color 0.2s, border-color 0.2s',
            }}
            onMouseEnter={e => { e.target.style.color = 'var(--accent)'; e.target.style.borderColor = 'var(--accent)' }}
            onMouseLeave={e => { e.target.style.color = 'var(--text)'; e.target.style.borderColor = 'var(--border)' }}
          >
            afayingala67@gmail.com
          </a>

          {/* Socials */}
          <div style={{ display: 'flex', gap: '2rem' }}>
            {socials.map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="arrow-link"
                style={{ fontFamily: '"DM Sans"', fontWeight: 300, fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
              >
                {s.label} <span className="arrow" style={{ fontSize: '13px' }}>&#8594;</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
