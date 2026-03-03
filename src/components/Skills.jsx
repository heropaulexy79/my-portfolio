import { SKILLS, SKILL_ICONS } from '../content';
import AnimSection from './AnimSection';
export default function Skills() {
  return (
    <section id="skills" style={{ padding:'120px 40px', background:'rgba(168,85,247,0.03)' }}>
      <div style={{ maxWidth:1000, margin:'0 auto' }}>
        <AnimSection>
          <div style={{ textAlign:'center', marginBottom:72 }}>
            <p style={{ fontSize:12, letterSpacing:3, color:'#a855f7', textTransform:'uppercase', fontWeight:600 }}>Expertise</p>
            <h2 style={{ fontSize:'clamp(32px,5vw,52px)', fontWeight:800, margin:0 }}>
              Skills and <span style={{ background:'linear-gradient(135deg,#6366f1,#a855f7)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>Technologies</span>
            </h2>
          </div>
        </AnimSection>
        {Object.entries(SKILLS).map(([cat, items], ci) => (
          <AnimSection key={cat} delay={ci*0.1}>
            <div style={{ marginBottom:48 }}>
              <h3 style={{ color:'rgba(255,255,255,0.35)', textTransform:'uppercase', letterSpacing:2, marginBottom:24 }}>{cat}</h3>
              <div style={{ display:'flex', flexWrap:'wrap', gap:14 }}>
                {items.map((s) => (
                  <div key={s} data-hover style={{ display:'flex', alignItems:'center', gap:10, background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:14, padding:'14px 20px', transition:'all 0.25s', cursor:'default' }} onMouseEnter={(e)=>{ e.currentTarget.style.background='rgba(168,85,247,0.1)'; e.currentTarget.style.transform='translateY(-3px)'; }} onMouseLeave={(e)=>{ e.currentTarget.style.background='rgba(255,255,255,0.03)'; e.currentTarget.style.transform='none'; }}>
                    <span style={{ fontSize:22 }}>{SKILL_ICONS[s]||'🔧'}</span>
                    <span style={{ fontSize:14, fontWeight:600, color:'rgba(255,255,255,0.8)' }}>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimSection>
        ))}
      </div>
    </section>
  );
}
