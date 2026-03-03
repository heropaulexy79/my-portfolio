import { useTypewriter } from '../hooks/useTypewriter';
import { TYPING_WORDS, STATS } from '../content';
import AnimSection from './AnimSection';

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

export default function Hero() {
  const typed = useTypewriter(TYPING_WORDS);

  return (
    <section id="home" style={{ minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', padding:'0 40px', position:'relative', overflow:'hidden' }}>

      {/* Background */}
      <div style={{ position:'absolute', inset:0, overflow:'hidden', pointerEvents:'none' }}>
        <div style={{ position:'absolute', top:'15%', left:'10%', width:500, height:500, background:'radial-gradient(circle,rgba(99,102,241,0.18) 0%,transparent 70%)', borderRadius:'50%', filter:'blur(40px)', animation:'float1 8s ease-in-out infinite' }} />
        <div style={{ position:'absolute', bottom:'10%', right:'5%', width:400, height:400, background:'radial-gradient(circle,rgba(168,85,247,0.15) 0%,transparent 70%)', borderRadius:'50%', filter:'blur(40px)', animation:'float2 10s ease-in-out infinite' }} />
        <div style={{ position:'absolute', inset:0, backgroundImage:'linear-gradient(rgba(168,85,247,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(168,85,247,0.04) 1px,transparent 1px)', backgroundSize:'60px 60px' }} />
      </div>

      <div style={{ maxWidth:800, textAlign:'center', position:'relative', zIndex:1 }}>
        <AnimSection delay={0}>
          <div style={{ display:'inline-flex', alignItems:'center', gap:8, background:'rgba(168,85,247,0.1)', border:'1px solid rgba(168,85,247,0.3)', borderRadius:100, padding:'6px 16px', marginBottom:28, fontSize:13, color:'#c084fc' }}>
            <span style={{ width:6, height:6, background:'#a855f7', borderRadius:'50%', display:'inline-block', animation:'pulse 2s infinite' }} />
            Available for new projects
          </div>
        </AnimSection>

        <AnimSection delay={0.1}>
          <h1 style={{ fontSize:'clamp(48px,8vw,88px)', fontWeight:800, lineHeight:1.05, margin:'0 0 12px', letterSpacing:-2 }}>
            <span style={{ color:'white' }}>Oke </span>
            <span style={{ background:'linear-gradient(135deg,#6366f1 0%,#a855f7 50%,#ec4899 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>Oluwaseun</span>
          </h1>
        </AnimSection>

        <AnimSection delay={0.2}>
          <div style={{ fontSize:'clamp(20px,3vw,28px)', fontWeight:500, marginBottom:24, height:40, display:'flex', alignItems:'center', justifyContent:'center', gap:4 }}>
            <span style={{ color:'#a855f7' }}>&lt;</span>
            <span style={{ color:'rgba(255,255,255,0.8)' }}>{typed}</span>
            <span style={{ color:'#a855f7', animation:'blink 1s infinite' }}>|</span>
            <span style={{ color:'#a855f7' }}>/&gt;</span>
          </div>
        </AnimSection>

        <AnimSection delay={0.3}>
          <p style={{ fontSize:17, color:'rgba(255,255,255,0.5)', maxWidth:560, margin:'0 auto 40px', lineHeight:1.75 }}>
            Solution-focused web developer specializing in PHP, Python, and WordPress.
            I craft dynamic, purpose-driven digital experiences that solve real-world problems.
          </p>
        </AnimSection>

        <AnimSection delay={0.4}>
          <div style={{ display:'flex', gap:14, justifyContent:'center', flexWrap:'wrap' }}>
            <button data-hover onClick={() => scrollTo('projects')}
              style={{ padding:'14px 32px', borderRadius:100, border:'none', cursor:'pointer', fontWeight:600, fontSize:15, background:'linear-gradient(135deg,#6366f1,#a855f7)', color:'white', boxShadow:'0 0 30px rgba(168,85,247,0.4)', transition:'all 0.3s', fontFamily:'inherit' }}
              onMouseEnter={(e) => { e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 0 50px rgba(168,85,247,0.6)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform='none'; e.currentTarget.style.boxShadow='0 0 30px rgba(168,85,247,0.4)'; }}>
              View Projects &rarr;
            </button>
            <button data-hover onClick={() => scrollTo('contact')}
              style={{ padding:'14px 32px', borderRadius:100, border:'1px solid rgba(168,85,247,0.4)', cursor:'pointer', fontWeight:600, fontSize:15, background:'rgba(168,85,247,0.08)', color:'rgba(255,255,255,0.85)', transition:'all 0.3s', fontFamily:'inherit' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor='#a855f7'; e.currentTarget.style.background='rgba(168,85,247,0.15)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor='rgba(168,85,247,0.4)'; e.currentTarget.style.background='rgba(168,85,247,0.08)'; }}>
              Get In Touch
            </button>
          </div>
        </AnimSection>

        <AnimSection delay={0.5}>
          <div style={{ display:'flex', gap:40, justifyContent:'center', marginTop:56, flexWrap:'wrap' }}>
            {STATS.map(({ number, label }) => (
              <div key={label} style={{ textAlign:'center' }}>
                <div style={{ fontSize:32, fontWeight:800, background:'linear-gradient(135deg,#a855f7,#6366f1)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>{number}</div>
                <div style={{ fontSize:12, color:'rgba(255,255,255,0.4)', marginTop:4 }}>{label}</div>
              </div>
            ))}
          </div>
        </AnimSection>
      </div>
    </section>
  );
}
