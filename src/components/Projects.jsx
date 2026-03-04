import { useState } from 'react';
import { PROJECTS } from '../content';
import AnimSection from './AnimSection';

function PreviewModal({ project, onClose }) {
  const [loaded, setLoaded] = useState(false);
  const [blocked, setBlocked] = useState(false);

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(0,0,0,0.85)',
        backdropFilter: 'blur(12px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '20px',
        animation: 'fadeIn 0.2s ease',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%', maxWidth: 1100,
          height: '80vh',
          background: '#0e0e1a',
          borderRadius: 20,
          border: '1px solid rgba(168,85,247,0.3)',
          boxShadow: '0 40px 120px rgba(168,85,247,0.2)',
          display: 'flex', flexDirection: 'column',
          overflow: 'hidden',
          animation: 'slideUp 0.3s ease',
        }}
      >
        {/* Browser chrome bar */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 12,
          padding: '12px 20px',
          background: 'rgba(255,255,255,0.03)',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          flexShrink: 0,
        }}>
          {/* Traffic lights */}
          <div style={{ display: 'flex', gap: 6 }}>
            <button onClick={onClose} style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f57', border: 'none', cursor: 'pointer' }} title="Close" />
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#febc2e' }} />
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#28c840' }} />
          </div>

          {/* URL bar */}
          <div style={{
            flex: 1, background: 'rgba(255,255,255,0.06)',
            borderRadius: 8, padding: '5px 14px',
            fontSize: 12, color: 'rgba(255,255,255,0.5)',
            display: 'flex', alignItems: 'center', gap: 6,
            border: '1px solid rgba(255,255,255,0.08)',
          }}>
            <span style={{ color: '#a855f7' }}>🔒</span>
            {project.link}
          </div>

          {/* Open in new tab */}
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            style={{
              color: 'rgba(255,255,255,0.4)', fontSize: 18,
              textDecoration: 'none', lineHeight: 1,
              transition: 'color 0.2s',
            }}
            title="Open in new tab"
            onMouseEnter={(e) => (e.currentTarget.style.color = '#a855f7')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
          >
            ↗
          </a>
        </div>

        {/* iframe area */}
        <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
          {/* Loading spinner */}
          {!loaded && !blocked && (
            <div style={{
              position: 'absolute', inset: 0,
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              gap: 16, color: 'rgba(255,255,255,0.4)',
            }}>
              <div style={{
                width: 40, height: 40,
                border: '3px solid rgba(168,85,247,0.2)',
                borderTop: '3px solid #a855f7',
                borderRadius: '50%',
                animation: 'spin 0.8s linear infinite',
              }} />
              <span style={{ fontSize: 14 }}>Loading preview...</span>
            </div>
          )}

          {/* Blocked message */}
          {blocked && (
            <div style={{
              position: 'absolute', inset: 0,
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              gap: 20, padding: 40, textAlign: 'center',
            }}>
              <div style={{ fontSize: 56 }}>🚫</div>
              <div>
                <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Preview Blocked</h3>
                <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, lineHeight: 1.7, maxWidth: 400 }}>
                  This site has restricted embedding for security reasons.<br />
                  You can still visit it directly.
                </p>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                style={{
                  padding: '12px 28px', borderRadius: 100,
                  background: 'linear-gradient(135deg,#6366f1,#a855f7)',
                  color: 'white', textDecoration: 'none',
                  fontWeight: 600, fontSize: 14,
                  boxShadow: '0 0 30px rgba(168,85,247,0.4)',
                }}
              >
                Open Site →
              </a>
            </div>
          )}

          <iframe
            src={project.link}
            title={project.title}
            style={{
              width: '100%', height: '100%',
              border: 'none',
              opacity: loaded ? 1 : 0,
              transition: 'opacity 0.3s ease',
            }}
            onLoad={() => setLoaded(true)}
            onError={() => setBlocked(true)}
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          />
        </div>
      </div>
    </div>
  );
}

function SectionHeader({ label, title, highlight }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: 72 }}>
      <div style={{ fontSize: 12, letterSpacing: 3, color: '#a855f7', textTransform: 'uppercase', marginBottom: 14, fontWeight: 600 }}>{label}</div>
      <h2 style={{ fontSize: 'clamp(32px,5vw,52px)', fontWeight: 800, margin: 0, letterSpacing: -1 }}>
        {title}{' '}
        <span style={{ background: 'linear-gradient(135deg,#6366f1,#a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{highlight}</span>
      </h2>
      <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg,#6366f1,#a855f7)', margin: '20px auto 0', borderRadius: 2 }} />
    </div>
  );
}

export default function Projects() {
  const [hovered, setHovered] = useState(null);
  const [preview, setPreview] = useState(null);

  return (
    <>
      <section id="projects" style={{ padding: '120px 40px', maxWidth: 1100, margin: '0 auto' }}>
        <AnimSection>
          <SectionHeader label="Portfolio" title="Featured" highlight="Projects" />
        </AnimSection>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 28 }}>
          {PROJECTS.map((project, i) => (
            <AnimSection key={project.title} delay={i * 0.12}>
              <div
                data-hover
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  background: hovered === i ? 'rgba(168,85,247,0.08)' : 'rgba(255,255,255,0.03)',
                  border: `1px solid ${hovered === i ? 'rgba(168,85,247,0.4)' : 'rgba(255,255,255,0.07)'}`,
                  borderRadius: 20, padding: 32,
                  transition: 'all 0.3s ease',
                  transform: hovered === i ? 'translateY(-6px)' : 'none',
                  boxShadow: hovered === i ? '0 20px 60px rgba(168,85,247,0.15)' : 'none',
                  display: 'flex', flexDirection: 'column', gap: 18,
                }}
              >
                <div style={{ fontSize: 48, lineHeight: 1, paddingTop: 12 }}>{project.emoji}</div>
                <div>
                  <h3 style={{ margin: '0 0 10px', fontSize: 20, fontWeight: 700 }}>{project.title}</h3>
                  <p style={{ margin: 0, fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>{project.desc}</p>
                </div>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {project.tags.map((tag) => (
                    <span key={tag} style={{ fontSize: 11, fontWeight: 600, padding: '4px 10px', borderRadius: 100, background: 'rgba(168,85,247,0.12)', color: '#c084fc', border: '1px solid rgba(168,85,247,0.2)' }}>{tag}</span>
                  ))}
                </div>

                {/* Action buttons */}
                <div style={{ display: 'flex', gap: 10, marginTop: 'auto' }}>
                  <button
                    data-hover
                    onClick={() => setPreview(project)}
                    style={{
                      flex: 1, padding: '10px 0', borderRadius: 10,
                      background: hovered === i ? 'rgba(168,85,247,0.15)' : 'rgba(255,255,255,0.04)',
                      border: `1px solid ${hovered === i ? 'rgba(168,85,247,0.4)' : 'rgba(255,255,255,0.1)'}`,
                      color: hovered === i ? '#c084fc' : 'rgba(255,255,255,0.5)',
                      fontSize: 13, fontWeight: 600, cursor: 'pointer',
                      transition: 'all 0.2s', fontFamily: 'inherit',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(168,85,247,0.2)'; e.currentTarget.style.color = '#c084fc'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = hovered === i ? 'rgba(168,85,247,0.15)' : 'rgba(255,255,255,0.04)'; e.currentTarget.style.color = hovered === i ? '#c084fc' : 'rgba(255,255,255,0.5)'; }}
                  >
                    👁 Preview
                  </button>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    data-hover
                    style={{
                      flex: 1, padding: '10px 0', borderRadius: 10,
                      background: 'linear-gradient(135deg,#6366f1,#a855f7)',
                      color: 'white', fontSize: 13, fontWeight: 600,
                      textDecoration: 'none', textAlign: 'center',
                      transition: 'opacity 0.2s',
                      boxShadow: hovered === i ? '0 0 20px rgba(168,85,247,0.4)' : 'none',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                  >
                    ↗ Visit Site
                  </a>
                </div>
              </div>
            </AnimSection>
          ))}
        </div>
      </section>

      {/* Modal */}
      {preview && <PreviewModal project={preview} onClose={() => setPreview(null)} />}

      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUp { from { transform: translateY(30px); opacity: 0 } to { transform: translateY(0); opacity: 1 } }
        @keyframes spin { to { transform: rotate(360deg) } }
      `}</style>
    </>
  );
}