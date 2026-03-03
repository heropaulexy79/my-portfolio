import { useState } from 'react';
import AnimSection from './AnimSection';
const inp = { width:'100%', background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:12, padding:'14px 16px', color:'white', fontSize:15, fontFamily:'inherit', outline:'none', transition:'border-color 0.2s', boxSizing:'border-box' };
export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', message:'' });
  const [sent, setSent] = useState(false);
  const update = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));
  const submit = () => {
    if (form.name && form.email && form.message) {
      setSent(true); setForm({ name:'', email:'', message:'' });
      setTimeout(() => setSent(false), 4000);
    }
  };
  return (
    <section id="contact" style={{ padding:'120px 40px' }}>
      <div style={{ maxWidth:640, margin:'0 auto' }}>
        <AnimSection>
          <div style={{ textAlign:'center', marginBottom:64 }}>
            <p style={{ fontSize:12, letterSpacing:3, color:'#a855f7', textTransform:'uppercase', fontWeight:600 }}>Contact</p>
            <h2 style={{ fontSize:'clamp(32px,5vw,52px)', fontWeight:800, margin:'0 0 16px' }}>
              {"Let's "}<span style={{ background:'linear-gradient(135deg,#6366f1,#a855f7)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>Connect</span>
            </h2>
            <p style={{ color:'rgba(255,255,255,0.45)', fontSize:16, lineHeight:1.7, margin:0 }}>Have a project in mind? I would love to hear about it.</p>
          </div>
        </AnimSection>
        <AnimSection delay={0.1}>
          <div style={{ background:'rgba(255,255,255,0.02)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:24, padding:40 }}>
            {sent ? (
              <div style={{ textAlign:'center', padding:'40px 0' }}>
                <div style={{ fontSize:56, marginBottom:16 }}>✅</div>
                <h3 style={{ color:'#a855f7', margin:'0 0 8px', fontSize:22 }}>Message Sent!</h3>
                <p style={{ color:'rgba(255,255,255,0.5)', margin:0 }}>I will get back to you as soon as possible.</p>
              </div>
            ) : (
              <div style={{ display:'flex', flexDirection:'column', gap:18 }}>
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16 }}>
                  <div>
                    <label style={{ fontSize:12, fontWeight:600, color:'rgba(255,255,255,0.4)', display:'block', marginBottom:8 }}>NAME</label>
                    <input value={form.name} onChange={update('name')} placeholder="Your name" style={inp} onFocus={(e)=>e.target.style.borderColor='#a855f7'} onBlur={(e)=>e.target.style.borderColor='rgba(255,255,255,0.1)'} />
                  </div>
                  <div>
                    <label style={{ fontSize:12, fontWeight:600, color:'rgba(255,255,255,0.4)', display:'block', marginBottom:8 }}>EMAIL</label>
                    <input value={form.email} onChange={update('email')} placeholder="your@email.com" style={inp} onFocus={(e)=>e.target.style.borderColor='#a855f7'} onBlur={(e)=>e.target.style.borderColor='rgba(255,255,255,0.1)'} />
                  </div>
                </div>
                <div>
                  <label style={{ fontSize:12, fontWeight:600, color:'rgba(255,255,255,0.4)', display:'block', marginBottom:8 }}>MESSAGE</label>
                  <textarea value={form.message} onChange={update('message')} placeholder="Tell me about your project..." rows={5} style={{ ...inp, resize:'vertical' }} onFocus={(e)=>e.target.style.borderColor='#a855f7'} onBlur={(e)=>e.target.style.borderColor='rgba(255,255,255,0.1)'} />
                </div>
                <button data-hover onClick={submit} style={{ padding:15, borderRadius:12, border:'none', cursor:'pointer', fontWeight:700, fontSize:15, background:'linear-gradient(135deg,#6366f1,#a855f7)', color:'white', boxShadow:'0 0 30px rgba(168,85,247,0.3)', transition:'all 0.3s', fontFamily:'inherit' }} onMouseEnter={(e)=>{ e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 0 50px rgba(168,85,247,0.5)'; }} onMouseLeave={(e)=>{ e.currentTarget.style.transform='none'; e.currentTarget.style.boxShadow='0 0 30px rgba(168,85,247,0.3)'; }}>
                  Send Message
                </button>
              </div>
            )}
          </div>
        </AnimSection>
      </div>
    </section>
  );
}
