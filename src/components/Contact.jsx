import { useState } from 'react';
import AnimSection from './AnimSection';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const FORMSPREE_URL = 'https://formspree.io/f/xpqyaakw';

function SectionHeader({ label, title, highlight, subtitle }) {
  return (
    <div className="text-center mb-16">
      <div className="text-xs tracking-[0.2em] text-purple-500 uppercase mb-3 font-semibold">{label}</div>
      <h2 className="text-[clamp(32px,5vw,52px)] font-extrabold m-0 mb-4 tracking-tight">
        {title}{' '}
        <span className="bg-gradient-to-br from-indigo-500 to-purple-500 bg-clip-text text-transparent">{highlight}</span>
      </h2>
      <p className="text-white/45 text-base leading-relaxed max-w-md mx-auto m-0">
        {subtitle}
      </p>
      <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-6 rounded-full" />
    </div>
  );
}

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
        body: JSON.stringify(form),
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

  const inputClass = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-[15px] outline-none transition-all duration-300 focus:border-purple-500 focus:bg-white/10 placeholder:text-white/20";
  const labelClass = "text-[11px] font-bold text-white/40 block mb-2 tracking-wider";

  return (
    <section id="contact" className="py-32 px-10 relative">
      <div className="max-w-2xl mx-auto relative z-10">
        <AnimSection>
          <SectionHeader 
            label="Contact" 
            title="Let's" 
            highlight="Connect" 
            subtitle="Have a project in mind? I would love to hear about it."
          />
        </AnimSection>

        <AnimSection delay={0.1}>
          <div className="bg-white/[0.02] border border-white/[0.07] rounded-3xl p-8 md:p-10 backdrop-blur-sm relative overflow-hidden">
            
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] pointer-events-none" />

            {/* Success state */}
            {status === 'success' && (
              <div className="text-center py-12 animate-in fade-in zoom-in duration-500">
                <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-white/50 mb-8">
                  Thanks for reaching out. I will get back to you soon.
                </p>
                <button
                  data-hover
                  onClick={() => setStatus('idle')}
                  className="px-6 py-2.5 rounded-full border border-purple-500/40 text-purple-400 font-semibold text-sm hover:bg-purple-500/10 transition-colors duration-300"
                >
                  Send another message
                </button>
              </div>
            )}

            {/* Form */}
            {status !== 'success' && (
              <div className="flex flex-col gap-6 animate-in fade-in duration-300">
                
                {/* Error state */}
                {status === 'error' && (
                  <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 flex items-center gap-3 text-red-400 text-sm animate-in shake duration-300">
                    <AlertCircle size={20} />
                    Something went wrong. Please try again or email me directly.
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={labelClass}>NAME</label>
                    <input
                      value={form.name}
                      onChange={update('name')}
                      placeholder="John Doe"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>EMAIL</label>
                    <input
                      value={form.email}
                      onChange={update('email')}
                      placeholder="john@example.com"
                      type="email"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>MESSAGE</label>
                  <textarea
                    value={form.message}
                    onChange={update('message')}
                    placeholder="Tell me about your project..."
                    rows={5}
                    className={`${inputClass} resize-y min-h-[120px]`}
                  />
                </div>

                <button
                  data-hover
                  onClick={submit}
                  disabled={status === 'sending'}
                  className={`w-full py-4 rounded-xl font-bold text-[15px] flex items-center justify-center gap-2 transition-all duration-300 ${
                    status === 'sending'
                      ? 'bg-purple-500/40 cursor-not-allowed text-white/70'
                      : 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(168,85,247,0.4)]'
                  }`}
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send size={18} />
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </AnimSection>
      </div>
    </section>
  );
}
