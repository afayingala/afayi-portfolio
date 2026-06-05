import { useState, useEffect } from 'react'

const roles = ['Software Engineer', 'Mobile Developer', 'AI Enthusiast', 'Community Builder', 'Content Creator']

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setRoleIdx(i => (i + 1) % roles.length), 3000)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="hero" style={{ minHeight: '100vh', background: 'var(--bg)', display: 'flex', alignItems: 'center', paddingTop: '5rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '7rem 2.5rem', width: '100%' }}>
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

            <p className="hero-fade" style={{ animationDelay: '0ms', fontFamily: '"DM Sans"', fontWeight: 300, fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted)' }}>
              BEng Software Engineering &nbsp;&middot;&nbsp; University of Buea
            </p>

            <div className="hero-fade" style={{ animationDelay: '80ms' }}>
              <h1 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontWeight: 300, fontSize: 'clamp(3.5rem, 8vw, 6rem)', lineHeight: 1.05, letterSpacing: '-0.01em' }}>
                Afayi<br />
                <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Ngala</em>
              </h1>
            </div>

            <div className="hero-fade" style={{ animationDelay: '160ms', height: '1.4rem', overflow: 'hidden' }}>
              <p
                key={roleIdx}
                style={{
                  fontFamily: '"DM Sans"', fontWeight: 300, fontSize: '13px',
                  letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted)',
                  animation: 'fadeUp 0.4s ease forwards',
                }}
              >
                {roles[roleIdx]}
              </p>
            </div>

            <p className="hero-fade" style={{ animationDelay: '240ms', fontFamily: '"DM Sans"', fontWeight: 300, fontSize: '15px', lineHeight: 1.8, color: 'var(--muted)', maxWidth: '400px' }}>
              Final-year student building systems that matter and communities that last.
              Based in Buea, Cameroon — the Silicon Mountain.
            </p>

            {/* Role pills */}
            <div className="hero-fade" style={{ animationDelay: '300ms', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {['Full-Stack', 'Mobile', 'AI/ML', 'Community'].map(tag => (
                <span key={tag} style={{ fontFamily: '"DM Sans"', fontWeight: 300, fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', border: '1px solid var(--border)', padding: '4px 10px' }}>
                  {tag}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="hero-fade" style={{ animationDelay: '380ms', display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                style={{ background: 'var(--accent)', color: 'var(--bg)', fontFamily: '"DM Sans"', fontWeight: 400, fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', padding: '12px 24px', border: 'none', cursor: 'pointer', transition: 'background 0.2s' }}
                onMouseEnter={e => e.target.style.background = 'var(--accent2)'}
                onMouseLeave={e => e.target.style.background = 'var(--accent)'}
              >
                View Work
              </button>
              <a
                href="/resume.pdf"
                download
                style={{ fontFamily: '"DM Sans"', fontWeight: 300, fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', padding: '11px 24px', border: '1px solid var(--border)', color: 'var(--muted)', textDecoration: 'none', transition: 'color 0.2s, border-color 0.2s', display: 'inline-block' }}
                onMouseEnter={e => { e.target.style.color = 'var(--text)'; e.target.style.borderColor = 'var(--muted)' }}
                onMouseLeave={e => { e.target.style.color = 'var(--muted)'; e.target.style.borderColor = 'var(--border)' }}
              >
                Download CV
              </a>
            </div>

            {/* Currently building */}
            <p className="hero-fade" style={{ animationDelay: '460ms', fontFamily: '"DM Sans"', fontWeight: 300, fontSize: '11px', letterSpacing: '0.06em', color: 'var(--muted)' }}>
              {/* TODO: Afayi — update as your project evolves */}
              Currently building &mdash; Object Tracking Platform (Final Year)
            </p>
          </div>

          {/* Right: photo */}
          <div className="flex justify-center lg:justify-end hero-fade" style={{ animationDelay: '200ms' }}>
            <div className="photo-float" style={{ position: 'relative', display: 'inline-block' }}>
              {/* Offset gold border decoration */}
              <div style={{
                position: 'absolute', inset: 0,
                transform: 'translate(14px, 14px)',
                border: '1px solid var(--accent)',
                pointerEvents: 'none',
              }} />
              {/* Photo frame */}
              <div style={{ position: 'relative', width: '340px', height: '420px', overflow: 'hidden', background: 'var(--surface)' }}>
                <img
                  src="/afa.jpg"
                  alt="Afayi Ngala"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
              {/* Status chip */}
              <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="pulse-dot" style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', display: 'inline-block', flexShrink: 0 }} />
                <span style={{ fontFamily: '"DM Sans"', fontWeight: 300, fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)' }}>
                  Available for opportunities
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
