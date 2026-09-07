import { useState, useEffect } from 'react'

const links = [
  { label: 'About',     href: '#about' },
  { label: 'Projects',  href: '#projects' },
  { label: 'Journey',   href: '#journey' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Community', href: '#community' },
  { label: 'Gallery',   href: '#gallery' },
  { label: 'Contact',   href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false)
  const [active, setActive]         = useState('hero')
  const [menuOpen, setMenuOpen]     = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = ['hero', 'about', 'projects', 'journey', 'certifications', 'community', 'gallery', 'contact']
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) }),
      { rootMargin: '-40% 0px -55% 0px' }
    )
    ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el) })
    return () => obs.disconnect()
  }, [])

  const go = (href) => {
    document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        transition: 'background 0.4s, border-color 0.4s, backdrop-filter 0.4s',
        background: scrolled ? 'rgba(13,13,13,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2.5rem' }}
           className="flex items-center justify-between h-16">

        <button
          onClick={() => go('#hero')}
          style={{
            fontFamily: '"Cormorant Garamond", Georgia, serif',
            fontStyle: 'italic', fontWeight: 300, fontSize: '1.25rem',
            color: 'var(--text)', letterSpacing: '0.02em',
          }}
        >
          Afayi.
        </button>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <li key={l.href}>
              <button
                onClick={() => go(l.href)}
                className={`nav-link ${active === l.href.replace('#', '') ? 'active' : ''}`}
                style={{ color: active === l.href.replace('#','') ? 'var(--text)' : undefined }}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          style={{ color: 'var(--muted)', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase' }}
          onClick={() => setMenuOpen(o => !o)}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div style={{ borderTop: '1px solid var(--border)', background: 'var(--surface)' }}>
          <ul style={{ padding: '1.5rem 2.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {links.map(l => (
              <li key={l.href}>
                <button onClick={() => go(l.href)} className="nav-link" style={{ fontSize: '13px' }}>
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
