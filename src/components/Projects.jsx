import { useState } from 'react';
import { PROJECTS } from '../content';
import AnimSection from './AnimSection';

function SectionHeader({ label, title, highlight }) {
  return (
    <div style={{ textAlign:'center', marginBottom:72 }}>
      <div style={{ fontSize:12, letterSpacing:3, color:'#a855f7', textTransform:'uppercase', marginBottom:14, fontWeight:600 }}>{label}</div>
      <h2 style={{ fontSize:'clamp(32px,5vw,52px)', fontWeight:800, margin:0, letterSpacing:-1 }}>
        {title} <span style={{ background:'linear-gradient(135deg,#6366f1,#a855f7)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>{highlight}</span>
      </h2>
      <div style={{ width:60, height:3, background:'linear-gradient(90deg,#6366f1,#a855f7)', margin:'20px auto 0', borderRadius:2 }} />
    </div>
  );
}

export default function Projects() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" style={{ padding:'120px 40px', maxWidth:1100, margin:'0 auto' }}>
      <AnimSection>
        <SectionHeader label="Portfolio" title="Featured" highlight="Projects" />
      </AnimSection>

      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:28 }}>
        {PROJECTS.map((project, i) => (
          <AnimSection key={project.title} delay={i * 0.12}>
            <div
              data-hover
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: hovered===i ? 'rgba(168,85,247,0.08)' : 'rgba(255,255,255,0.03)',
                border: `1px solid ${hovered===i ? 'rgba(168,85,247,0.4)' : 'rgba(255,255,255,0.07)'}`,
                borderRadius:20, padding:32,
                transition:'all 0.3s ease',
                transform: hovered===i ? 'translateY(-6px)' : 'none',
                boxShadow: hovered===i ? '0 20px 60px rgba(168,85,247,0.15)' : 'none',
                display:'flex', flexDirection:'column', gap:18, height:'100%',
              }}
            >
              <div style={{ fontSize:48, lineHeight:1, paddingTop:12 }}>{project.emoji}</div>
              <div>
                <h3 style={{ margin:'0 0 10px', fontSize:20, fontWeight:700 }}>{project.title}</h3>
                <p style={{ margin:0, fontSize:14, color:'rgba(255,255,255,0.5)', lineHeight:1.7 }}>{project.desc}</p>
              </div>
              <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>
                {project.tags.map((tag) => (
                  <span key={tag} style={{ fontSize:11, fontWeight:600, padding:'4px 10px', borderRadius:100, background:'rgba(168,85,247,0.12)', color:'#c084fc', border:'1px solid rgba(168,85,247,0.2)' }}>{tag}</span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noreferrer" data-hover
                style={{ display:'inline-flex', alignItems:'center', gap:6, color: hovered===i ? '#a855f7' : 'rgba(255,255,255,0.4)', textDecoration:'none', fontSize:13, fontWeight:600, transition:'color 0.2s', marginTop:'auto' }}>
                View Live Site →
              </a>
            </div>
          </AnimSection>
        ))}
      </div>
    </section>
  );
}
