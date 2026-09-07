import { useReveal } from '../hooks/useReveal'

const skills = [
  { label: 'Frontend',       items: ['React.js', 'Vue.js', 'TypeScript', 'HTML / CSS', 'Tailwind'] },
  { label: 'Mobile',         items: ['Flutter', 'React Native', 'Expo'] },
  { label: 'Backend & Data', items: ['Node.js', 'Firebase', 'PostgreSQL', 'Parse Server', 'MongoDB'] },
  { label: 'AI & Tools',     items: ['Python', 'Image Processing', 'Git', 'UML Design'] },
]

const facts = [
  { label: 'Location',    value: 'Buea, Cameroon — Silicon Mountain' },
  { label: 'Degree',      value: 'BEng Software Engineering (Final Year)' },
  { label: 'Community',   value: 'GDG on Campus · Ocean Hack · She Code Africa' },
  { label: 'Currently',   value: 'Object Tracking Platform — Final Year Project' },
  { label: 'Interests',   value: 'Anime · Human rights · Music · Film · Game dev' },
]

function SectionLabel({ children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
      <span style={{ fontFamily: '"DM Sans"', fontWeight: 400, fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted)', whiteSpace: 'nowrap' }}>
        {children}
      </span>
      <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
    </div>
  )
}

export default function About() {
  const [ref, visible] = useReveal()

  return (
    <section id="about" style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', padding: '7rem 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2.5rem' }}>
        <SectionLabel>About</SectionLabel>

        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`} style={{ marginBottom: '1.5rem' }}>
          <h2 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontWeight: 300, fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', letterSpacing: '-0.01em', lineHeight: 1.1 }}>
            Who I <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Am</em>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">

          {/* Left: bio + facts */}
          <LeftColumn />

          {/* Right: skills */}
          <RightColumn />
        </div>
      </div>
    </section>
  )
}

function LeftColumn() {
  const [ref, visible] = useReveal()
  return (
    <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <p style={{ fontFamily: '"DM Sans"', fontWeight: 300, fontSize: '15px', lineHeight: 1.9, color: 'var(--muted)' }}>
        I am a software engineering graduate who believes technology should do more than work  it should matter.
        I build full-stack systems, mobile applications, and AI-powered tools, and I love doing it in community with others.
      </p>
      <p style={{ fontFamily: '"DM Sans"', fontWeight: 300, fontSize: '15px', lineHeight: 1.9, color: 'var(--muted)' }}>
        When I am not writing code, I organize tech events, mentor through Google Developers Group,
        create content, and disappear into rabbit holes — 3D modeling, game development, manga chapters,
        films, and long conversations about the world.
      </p>

      {/* Facts table */}
      <div style={{ marginTop: '1rem', borderTop: '1px solid var(--border)' }}>
        {facts.map((f, i) => (
          <div key={f.label} style={{
            display: 'grid', gridTemplateColumns: '120px 1fr', gap: '1rem',
            padding: '0.875rem 0',
            borderBottom: '1px solid var(--border)',
          }}>
            <span style={{ fontFamily: '"DM Sans"', fontWeight: 400, fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', paddingTop: '1px' }}>
              {f.label}
            </span>
            <span style={{ fontFamily: '"DM Sans"', fontWeight: 300, fontSize: '13px', color: 'var(--text)', lineHeight: 1.6 }}>
              {f.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function RightColumn() {
  const [ref, visible] = useReveal()
  return (
    <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {skills.map((group) => (
        <div key={group.label}>
          <p style={{ fontFamily: '"DM Sans"', fontWeight: 400, fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.75rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--border)' }}>
            {group.label}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {group.items.map(item => (
              <span key={item} style={{ fontFamily: '"DM Sans"', fontWeight: 300, fontSize: '12px', color: 'var(--muted)', background: 'var(--surface2)', padding: '4px 10px', letterSpacing: '0.02em' }}>
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
