export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', padding: '2rem 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
        <p style={{ fontFamily: '"DM Sans"', fontWeight: 300, fontSize: '11px', letterSpacing: '0.08em', color: 'var(--muted)' }}>
          &copy; 2026 Afayi Ngala
        </p>
        <p style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontStyle: 'italic', fontWeight: 300, fontSize: '12px', color: 'var(--muted)', letterSpacing: '0.04em' }}>
          Software engineer with taste.
        </p>
        <a
          href="mailto:afayingala67@gmail.com"
          style={{ fontFamily: '"DM Sans"', fontWeight: 300, fontSize: '11px', letterSpacing: '0.08em', color: 'var(--muted)', textDecoration: 'none', transition: 'color 0.2s' }}
          onMouseEnter={e => e.target.style.color = 'var(--accent)'}
          onMouseLeave={e => e.target.style.color = 'var(--muted)'}
        >
          afayingala67@gmail.com
        </a>
      </div>
    </footer>
  )
}
