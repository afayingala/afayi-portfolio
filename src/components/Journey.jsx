import { useRef, useEffect, useState } from 'react'
import { timeline } from '../data/timeline'

function SectionLabel({ children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
      <span style={{ fontFamily: '"DM Sans"', fontWeight: 400, fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted)', whiteSpace: 'nowrap' }}>{children}</span>
      <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
    </div>
  )
}

const categoryStyle = {
  work:        { background: '#1A2E1A', color: '#6B9E6B' },
  community:   { background: '#1E1A2E', color: '#9D89C9' },
  project:     { background: '#2E1E0A', color: '#C9965A' },
  achievement: { background: '#2E2A0A', color: '#C9B85A' },
}

const categoryLabel = {
  work: 'Work', community: 'Community', project: 'Project', achievement: 'Achievement',
}

function YearSection({ year, entries, activeYear }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '100px 1fr', gap: '3rem' }} className="hidden lg:grid">
      {/* Sticky year */}
      <div>
        <div style={{ position: 'sticky', top: '6rem' }}>
          <span style={{
            fontFamily: '"Cormorant Garamond", Georgia, serif', fontWeight: 300,
            fontSize: '3.5rem', lineHeight: 1,
            color: activeYear === year ? 'var(--accent)' : 'var(--border)',
            transition: 'color 0.4s',
          }}>
            {year}
          </span>
        </div>
      </div>
      {/* Entries */}
      <div style={{ borderLeft: '1px solid var(--border)', paddingLeft: '2rem', display: 'flex', flexDirection: 'column', gap: '0' }}>
        {entries.map((entry, i) => (
          <TimelineEntry key={`${entry.date}-${i}`} entry={entry} />
        ))}
      </div>
    </div>
  )
}

function TimelineEntry({ entry }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const cat = categoryStyle[entry.category] || categoryStyle.work

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'visible' : ''}`}
      style={{
        position: 'relative', paddingBottom: '2.5rem',
        borderStyle: entry.upcoming ? 'dashed' : undefined,
        opacity: entry.upcoming ? 0.6 : 1,
      }}
    >
      {/* Diamond marker */}
      <div style={{
        position: 'absolute', left: '-2.5rem', top: '4px',
        width: '9px', height: '9px',
        transform: 'rotate(45deg)',
        background: entry.current ? 'var(--accent)' : 'var(--bg)',
        border: `1px solid ${entry.current ? 'var(--accent)' : 'var(--border)'}`,
        boxSizing: 'border-box',
      }} />

      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap', marginBottom: '0.6rem' }}>
        <span style={{ fontFamily: '"DM Sans"', fontWeight: 300, fontSize: '11px', letterSpacing: '0.06em', color: 'var(--muted)' }}>
          {entry.date}
        </span>
        <span style={{ fontFamily: '"DM Sans"', fontWeight: 400, fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '2px 7px', ...cat }}>
          {categoryLabel[entry.category]}
        </span>
        {entry.current && (
          <span style={{ fontFamily: '"DM Sans"', fontWeight: 400, fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)' }}>
            Now
          </span>
        )}
      </div>

      <h3 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontWeight: 300, fontSize: '1.3rem', lineHeight: 1.2, color: 'var(--text)', marginBottom: '0.5rem' }}>
        {entry.title}
      </h3>

      <p style={{ fontFamily: '"DM Sans"', fontWeight: 300, fontSize: '13px', lineHeight: 1.8, color: 'var(--muted)', maxWidth: '560px' }}>
        {entry.description}
      </p>
    </div>
  )
}

export default function Journey() {
  const [activeYear, setActiveYear] = useState('2025')

  // Group by year
  const grouped = timeline.reduce((acc, entry) => {
    const year = entry.date.includes('2025') ? '2025' : '2026'
    if (!acc[year]) acc[year] = []
    acc[year].push(entry)
    return acc
  }, {})

  // Track active year via scroll
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActiveYear(e.target.dataset.year) }),
      { rootMargin: '-30% 0px -60% 0px' }
    )
    document.querySelectorAll('[data-year]').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="journey" style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', padding: '7rem 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2.5rem' }}>
        <SectionLabel>Timeline</SectionLabel>

        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontWeight: 300, fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', letterSpacing: '-0.01em', lineHeight: 1.1 }}>
            My <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Journey</em>
          </h2>
        </div>

        {/* Desktop: two-column with sticky year */}
        <div className="hidden lg:flex flex-col gap-16">
          {Object.entries(grouped).map(([year, entries]) => (
            <div key={year} data-year={year}>
              <YearSection year={year} entries={entries} activeYear={activeYear} />
            </div>
          ))}
        </div>

        {/* Mobile: single column */}
        <div className="lg:hidden" style={{ borderLeft: '1px solid var(--border)', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column' }}>
          {timeline.map((entry, i) => (
            <TimelineEntry key={`${entry.date}-${i}`} entry={entry} />
          ))}
        </div>
      </div>
    </section>
  )
}
