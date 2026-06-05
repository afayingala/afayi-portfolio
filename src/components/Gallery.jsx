import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

// Add files to /public and add entries here
const photos = [
  { src: '/port.jpg', caption: 'Building things that matter', tag: 'Work' },
  // TODO: Afayi — add event photos below
  // { src: '/oceanhack.jpg', caption: 'Ocean Hack — Organizer & Host', tag: 'Events' },
  // { src: '/gdg-bwa.jpg', caption: 'GDG Build with AI', tag: 'GDG' },
]

// Fill to multiple of 4 for the grid
const GRID_SIZE = 8
const slots = [...photos, ...Array(Math.max(0, GRID_SIZE - photos.length)).fill(null)]

function Lightbox({ photo, onClose }) {
  return (
    <div
      onClick={onClose}
      style={{ position: 'fixed', inset: 0, zIndex: 50, background: 'rgba(0,0,0,0.92)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}
    >
      <div onClick={e => e.stopPropagation()} style={{ position: 'relative', maxWidth: '900px', width: '100%' }}>
        <img src={photo.src} alt={photo.caption} style={{ width: '100%', maxHeight: '80vh', objectFit: 'contain', display: 'block' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
          <p style={{ fontFamily: '"DM Sans"', fontWeight: 300, fontSize: '12px', letterSpacing: '0.06em', color: 'var(--muted)' }}>{photo.caption}</p>
          <button onClick={onClose} style={{ fontFamily: '"DM Sans"', fontWeight: 300, fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', background: 'none', border: 'none', cursor: 'pointer' }}>
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)
  const [ref, visible] = useReveal()

  return (
    <section id="gallery" style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', padding: '7rem 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
          <span style={{ fontFamily: '"DM Sans"', fontWeight: 400, fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted)', whiteSpace: 'nowrap' }}>Moments</span>
          <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
        </div>

        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontWeight: 300, fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', letterSpacing: '-0.01em', lineHeight: 1.1 }}>
            Gallery
          </h2>
        </div>

        <div
          ref={ref}
          className={`reveal ${visible ? 'visible' : ''}`}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: 'var(--border)' }}
        >
          {slots.map((photo, i) => (
            <div
              key={i}
              onClick={() => photo && setLightbox(photo)}
              style={{
                aspectRatio: '1 / 1', background: 'var(--surface)',
                overflow: 'hidden', position: 'relative',
                cursor: photo ? 'pointer' : 'default',
              }}
            >
              {photo ? (
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="gallery-img"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              ) : (
                <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontFamily: '"DM Sans"', fontWeight: 300, fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--border)' }}>
                    Add Photo
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {lightbox && <Lightbox photo={lightbox} onClose={() => setLightbox(null)} />}
    </section>
  )
}
