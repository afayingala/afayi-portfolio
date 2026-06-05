import { useReveal } from '../hooks/useReveal'
import { communities, milestones } from '../data/communities'

function SectionLabel({ children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
      <span style={{ fontFamily: '"DM Sans"', fontWeight: 400, fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted)', whiteSpace: 'nowrap' }}>{children}</span>
      <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
    </div>
  )
}

function CommunityCard({ org, i }) {
  const [ref, visible] = useReveal()
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${i * 80}ms`, border: '1px solid var(--border)', background: 'var(--surface)' }}
    >
      {/* Header row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '1rem', padding: '1.5rem', borderBottom: '1px solid var(--border)', alignItems: 'start' }}>
        <div>
          <p style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontWeight: 300, fontSize: '1.2rem', color: 'var(--text)', marginBottom: '2px' }}>
            {org.org}
          </p>
          <p style={{ fontFamily: '"DM Sans"', fontWeight: 300, fontSize: '12px', color: 'var(--muted)' }}>
            {org.subtitle}
          </p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <p style={{ fontFamily: '"DM Sans"', fontWeight: 400, fontSize: '11px', letterSpacing: '0.08em', color: 'var(--accent)', marginBottom: '2px' }}>
            {org.role}
          </p>
          <p style={{ fontFamily: '"DM Sans"', fontWeight: 300, fontSize: '11px', color: 'var(--muted)' }}>
            {org.period}
          </p>
        </div>
      </div>

      {/* Bullet points */}
      <div style={{ padding: '1.25rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
        {org.points.map((pt, j) => (
          <p key={j} style={{ fontFamily: '"DM Sans"', fontWeight: 300, fontSize: '13px', lineHeight: 1.7, color: 'var(--muted)', display: 'flex', gap: '0.75rem' }}>
            <span style={{ color: 'var(--border)', flexShrink: 0 }}>&mdash;</span>
            {pt}
          </p>
        ))}
      </div>
    </div>
  )
}

export default function Community() {
  const [statsRef, statsVisible] = useReveal()
  const active = communities.filter(c => !c.placeholder)

  return (
    <section id="community" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', padding: '7rem 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2.5rem' }}>
        <SectionLabel>Impact</SectionLabel>

        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontWeight: 300, fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', letterSpacing: '-0.01em', lineHeight: 1.1 }}>
            Community &amp; <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Impact</em>
          </h2>
        </div>

        {/* Stats bar */}
        <div
          ref={statsRef}
          className={`reveal ${statsVisible ? 'visible' : ''}`}
          style={{ display: 'grid', gridTemplateColumns: `repeat(${milestones.length}, 1fr)`, background: 'var(--border)', gap: '1px', marginBottom: '3rem' }}
        >
          {milestones.map((m, i) => (
            <div key={m.label} style={{ background: 'var(--surface)', padding: '2rem 1.5rem', transitionDelay: `${i * 60}ms` }}>
              <p style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontWeight: 300, fontSize: '2.5rem', color: 'var(--accent)', lineHeight: 1, marginBottom: '0.5rem' }}>
                {m.value}
              </p>
              <p style={{ fontFamily: '"DM Sans"', fontWeight: 300, fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)' }}>
                {m.label}
              </p>
            </div>
          ))}
        </div>

        {/* Cards grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))', gap: '1px', background: 'var(--border)' }}>
          {active.map((org, i) => (
            <CommunityCard key={org.org} org={org} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
