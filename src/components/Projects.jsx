import { useState, useRef, useEffect } from 'react'
import { projects } from '../data/projects'

const cats = ['All', 'AI/Vision', 'Mobile', 'Web']

function SectionLabel({ children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
      <span style={{ fontFamily: '"DM Sans"', fontWeight: 400, fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted)', whiteSpace: 'nowrap' }}>{children}</span>
      <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
    </div>
  )
}

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.05 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`project-card reveal ${visible ? 'visible' : ''} ${project.featured ? 'md:col-span-2' : ''}`}
      style={{
        transitionDelay: `${index * 40}ms`,
        position: 'relative', padding: '2rem',
        border: 'none', overflow: 'hidden',
        display: 'flex', flexDirection: 'column', gap: '1.25rem',
        minHeight: '280px',
      }}
    >
      {/* Top row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <span style={{ fontFamily: '"DM Sans"', fontWeight: 300, fontSize: '11px', letterSpacing: '0.08em', color: 'var(--muted)' }}>
          {project.year}
        </span>
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          {project.status && (
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontFamily: '"DM Sans"', fontWeight: 300, fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)' }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--accent)', display: 'inline-block', animation: 'pulse 2s ease-in-out infinite' }} />
              {project.status}
            </span>
          )}
          <span style={{ fontFamily: '"DM Sans"', fontWeight: 300, fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', border: '1px solid var(--border)', padding: '2px 8px' }}>
            {project.category}
          </span>
        </div>
      </div>

      {/* Title */}
      <h3 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontWeight: 300, fontSize: '1.6rem', lineHeight: 1.15, letterSpacing: '-0.01em', color: 'var(--text)' }}>
        {project.title}
      </h3>

      {/* Description */}
      <p style={{ fontFamily: '"DM Sans"', fontWeight: 300, fontSize: '13px', lineHeight: 1.8, color: 'var(--muted)', flex: 1 }}>
        {project.description}
      </p>

      {/* Tech stack: dot-separated uppercase */}
      <p style={{ fontFamily: '"DM Sans"', fontWeight: 400, fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)' }}>
        {project.tech.join(' · ')}
      </p>

      {/* Bottom row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: '0.5rem', borderTop: '1px solid var(--border)' }}>
        {project.github ? (
          <a
            href={project.github} target="_blank" rel="noopener noreferrer"
            className="arrow-link"
            style={{ fontFamily: '"DM Sans"', fontWeight: 300, fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
          >
            GitHub <span className="arrow">&rarr;</span>
          </a>
        ) : <span />}
      </div>

      {/* Ghost number */}
      <span style={{
        position: 'absolute', bottom: '1rem', right: '1.25rem',
        fontFamily: '"Cormorant Garamond", Georgia, serif', fontWeight: 300,
        fontSize: '5rem', lineHeight: 1, color: 'var(--border)',
        userSelect: 'none', pointerEvents: 'none',
      }}>
        {String(index + 1).padStart(2, '0')}
      </span>
    </div>
  )
}

export default function Projects() {
  const [cat, setCat] = useState('All')
  const filtered = cat === 'All' ? projects : projects.filter(p => p.category === cat)

  return (
    <section id="projects" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', padding: '7rem 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2.5rem' }}>
        <SectionLabel>Work</SectionLabel>

        <div style={{ marginBottom: '1.5rem' }}>
          <h2 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontWeight: 300, fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', letterSpacing: '-0.01em', lineHeight: 1.1 }}>
            Selected <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Projects</em>
          </h2>
        </div>

        {/* Filter */}
        <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '3rem' }}>
          {cats.map(c => (
            <button
              key={c}
              onClick={() => setCat(c)}
              style={{
                fontFamily: '"DM Sans"', fontWeight: 300, fontSize: '11px',
                letterSpacing: '0.12em', textTransform: 'uppercase',
                padding: '6px 14px',
                background: cat === c ? 'var(--accent)' : 'transparent',
                color: cat === c ? 'var(--bg)' : 'var(--muted)',
                border: '1px solid',
                borderColor: cat === c ? 'var(--accent)' : 'var(--border)',
                cursor: 'pointer', transition: 'all 0.15s',
              }}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid — 1px gap on border background = seamless tile effect */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'var(--border)' }}
             className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 [grid-auto-flow:dense]">
          {filtered.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
