import { useState } from 'react';
import AnimSection from './AnimSection';

const FORMSPREE_URL = 'https://formspree.io/f/xpqyaakw'; // 👈 replace this

const inp = {
  width: '100%',
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: 12,
  padding: '14px 16px',
  color: 'white',
  fontSize: 15,
  fontFamily: 'inherit',
  outline: 'none',
  transition: 'border-color 0.2s',
  boxSizing: 'border-box',
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setStatus('sending');
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" style={{ padding: '120px 40px' }}>
      <div style={{ maxWidth: 640, margin: '0 auto' }}>
        <AnimSection>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div style={{ fontSize: 12, letterSpacing: 3, color: '#a855f7', textTransform: 'uppercase', marginBottom: 14, fontWeight: 600 }}>Contact</div>
            <h2 style={{ fontSize: 'clamp(32px,5vw,52px)', fontWeight: 800, margin: '0 0 16px', letterSpacing: -1 }}>
              {"Let's "}
              <span style={{ background: 'linear-gradient(135deg,#6366f1,#a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Connect</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 16, lineHeight: 1.7, margin: 0 }}>
              Have a project in mind? I would love to hear about it.
            </p>
            <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg,#6366f1,#a855f7)', margin: '20px auto 0', borderRadius: 2 }} />
          </div>
        </AnimSection>

        <AnimSection delay={0.1}>
          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 24, padding: 40 }}>

            {/* Success state */}
            {status === 'success' && (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ fontSize: 56, marginBottom: 16 }}>✅</div>
                <h3 style={{ color: '#a855f7', margin: '0 0 8px', fontSize: 22 }}>Message Sent!</h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', margin: '0 0 24px' }}>
                  Thanks for reaching out. I will get back to you soon.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  style={{ background: 'none', border: '1px solid rgba(168,85,247,0.4)', borderRadius: 100, padding: '10px 24px', color: '#a855f7', cursor: 'pointer', fontFamily: 'inherit', fontSize: 14, fontWeight: 600 }}
                >
                  Send another message
                </button>
              </div>
            )}

            {/* Error state */}
            {status === 'error' && (
              <div style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: 12, padding: '14px 18px', marginBottom: 20, color: '#fca5a5', fontSize: 14 }}>
                Something went wrong. Please try again or email me directly.
              </div>
            )}

            {/* Form */}
            {status !== 'success' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <label style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.4)', display: 'block', marginBottom: 8, letterSpacing: 0.5 }}>NAME</label>
                    <input
                      value={form.name}
                      onChange={update('name')}
                      placeholder="Your name"
                      style={inp}
                      onFocus={(e) => (e.target.style.borderColor = '#a855f7')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.4)', display: 'block', marginBottom: 8, letterSpacing: 0.5 }}>EMAIL</label>
                    <input
                      value={form.email}
                      onChange={update('email')}
                      placeholder="your@email.com"
                      type="email"
                      style={inp}
                      onFocus={(e) => (e.target.style.borderColor = '#a855f7')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.4)', display: 'block', marginBottom: 8, letterSpacing: 0.5 }}>MESSAGE</label>
                  <textarea
                    value={form.message}
                    onChange={update('message')}
                    placeholder="Tell me about your project..."
                    rows={5}
                    style={{ ...inp, resize: 'vertical' }}
                    onFocus={(e) => (e.target.style.borderColor = '#a855f7')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                  />
                </div>

                <button
                  data-hover
                  onClick={submit}
                  disabled={status === 'sending'}
                  style={{
                    padding: 15, borderRadius: 12, border: 'none', cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                    fontWeight: 700, fontSize: 15,
                    background: status === 'sending' ? 'rgba(168,85,247,0.4)' : 'linear-gradient(135deg,#6366f1,#a855f7)',
                    color: 'white',
                    boxShadow: '0 0 30px rgba(168,85,247,0.3)',
                    transition: 'all 0.3s',
                    fontFamily: 'inherit',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                  }}
                  onMouseEnter={(e) => { if (status !== 'sending') { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 0 50px rgba(168,85,247,0.5)'; } }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 0 30px rgba(168,85,247,0.3)'; }}
                >
                  {status === 'sending' ? (
                    <>
                      <div style={{ width: 16, height: 16, border: '2px solid rgba(255,255,255,0.3)', borderTop: '2px solid white', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
                      Sending...
                    </>
                  ) : (
                    'Send Message ✦'
                  )}
                </button>
              </div>
            )}
          </div>
        </AnimSection>
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>
    </section>
  );
}
