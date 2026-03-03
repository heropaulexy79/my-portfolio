import { useState, useEffect } from 'react';
import { NAV_LINKS } from '../content';
export default function Navbar({ active }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);
  const scrollTo = (id) => document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  return (
    <nav style={{ position:'fixed', top:0, left:0, right:0, zIndex:100, padding:scrolled?'12px 40px':'20px 40px', background:scrolled?'rgba(5,5,15,0.92)':'transparent', backdropFilter:scrolled?'blur(20px)':'none', borderBottom:scrolled?'1px solid rgba(168,85,247,0.15)':'none', transition:'all 0.4s ease', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
      <div style={{ fontWeight:800, fontSize:20, letterSpacing:-0.5, background:'linear-gradient(135deg,#a855f7,#6366f1)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>OO.</div>
      <div style={{ display:'flex', gap:8 }}>
        {NAV_LINKS.map((link) => (
          <button key={link} onClick={() => scrollTo(link)} data-hover style={{ background:'none', border:'none', cursor:'pointer', color:active===link.toLowerCase()?'#a855f7':'rgba(255,255,255,0.65)', fontSize:14, fontWeight:500, padding:'6px 14px', borderRadius:8, transition:'color 0.2s', fontFamily:'inherit' }} onMouseEnter={(e) => (e.currentTarget.style.color='#a855f7')} onMouseLeave={(e) => (e.currentTarget.style.color=active===link.toLowerCase()?'#a855f7':'rgba(255,255,255,0.65)')}>{link}</button>
        ))}
      </div>
    </nav>
  );
}
