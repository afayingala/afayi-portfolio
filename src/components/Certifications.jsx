import { useEffect, useRef, useState } from 'react'
import { certifications } from '../data/certifications'

function SectionLabel({ children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
      <span style={{ fontFamily: '"DM Sans"', fontWeight: 400, fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted)', whiteSpace: 'nowrap' }}>{children}</span>
      <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
    </div>
  )
}

function CertificationCard({ certification, index }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <article
      ref={ref}
      className={`project-card reveal ${visible ? 'visible' : ''}`}
      style={{
        transitionDelay: `${index * 60}ms`,
        position: 'relative', padding: '2rem', minHeight: '230px',
        display: 'flex', flexDirection: 'column', gap: '1rem',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
        <span style={{ fontFamily: '"DM Sans"', fontWeight: 300, fontSize: '11px', letterSpacing: '0.08em', color: 'var(--muted)' }}>
          {certification.issued}
        </span>
        <span style={{ fontFamily: '"DM Sans"', fontWeight: 300, fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent)', border: '1px solid var(--border)', padding: '2px 8px', whiteSpace: 'nowrap' }}>
          Verified
        </span>
      </div>

      <h3 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontWeight: 300, fontSize: '1.6rem', lineHeight: 1.15, color: 'var(--text)' }}>
        {certification.title}
      </h3>

      <p style={{ fontFamily: '"DM Sans"', fontWeight: 300, fontSize: '13px', lineHeight: 1.8, color: 'var(--muted)', flex: 1 }}>
        {certification.issuer}
      </p>

      <dl style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem 1rem', borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
        <div>
          <dt style={{ fontFamily: '"DM Sans"', fontWeight: 400, fontSize: '9px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.25rem' }}>Issued</dt>
          <dd style={{ fontFamily: '"DM Sans"', fontWeight: 300, fontSize: '11px', color: 'var(--text)' }}>{certification.issueDate}</dd>
        </div>
        <div>
          <dt style={{ fontFamily: '"DM Sans"', fontWeight: 400, fontSize: '9px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.25rem' }}>Expires</dt>
          <dd style={{ fontFamily: '"DM Sans"', fontWeight: 300, fontSize: '11px', color: 'var(--text)' }}>{certification.expiryDate}</dd>
        </div>
        <div style={{ gridColumn: '1 / -1' }}>
          <dt style={{ fontFamily: '"DM Sans"', fontWeight: 400, fontSize: '9px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.25rem' }}>Certificate ID</dt>
          <dd style={{ fontFamily: '"DM Sans"', fontWeight: 300, fontSize: '11px', color: 'var(--text)' }}>{certification.certificateId}</dd>
        </div>
      </dl>

      <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
        <p style={{ fontFamily: '"DM Sans"', fontWeight: 400, fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.5rem' }}>
          Credential verified by Accredible
        </p>
        {certification.blockchainSecured && (
          <p style={{ fontFamily: '"DM Sans"', fontWeight: 300, fontSize: '11px', lineHeight: 1.7, color: 'var(--muted)', marginBottom: '0.75rem' }}>
            Blockchain secured · Ethereum
          </p>
        )}
      </div>

      <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
        {certification.credentialUrl && (
          <a
            href={certification.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="arrow-link"
            style={{ fontFamily: '"DM Sans"', fontWeight: 300, fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}
          >
            View certificate <span className="arrow">&rarr;</span>
          </a>
        )}
        {certification.issuerWebsite && (
          <a
            href={certification.issuerWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="arrow-link"
            style={{ fontFamily: '"DM Sans"', fontWeight: 300, fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', textDecoration: 'none' }}
          >
            Issuer website <span className="arrow">&rarr;</span>
          </a>
        )}
      </div>
    </article>
  )
}

export default function Certifications() {
  return (
    <section id="certifications" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', padding: '7rem 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2.5rem' }}>
        <SectionLabel>Credentials</SectionLabel>

        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontWeight: 300, fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', letterSpacing: '-0.01em', lineHeight: 1.1 }}>
            My <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Certifications</em>
          </h2>
        </div>

        {certifications.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'var(--border)' }} className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {certifications.map((certification, index) => (
              <CertificationCard key={`${certification.title}-${certification.issued}`} certification={certification} index={index} />
            ))}
          </div>
        ) : (
          <div style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '2rem 0' }}>
            <p style={{ fontFamily: '"DM Sans"', fontWeight: 300, fontSize: '13px', lineHeight: 1.8, color: 'var(--muted)' }}>
              Verified credentials will be added here.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}