import { useTypewriter } from '../hooks/useTypewriter';
import { TYPING_WORDS, STATS } from '../content';
import AnimSection from './AnimSection';

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

export default function Hero() {
  const typed = useTypewriter(TYPING_WORDS);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-10 relative overflow-hidden">
      
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] left-[10%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(99,102,241,0.18)_0%,transparent_70%)] rounded-full blur-[40px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(168,85,247,0.15)_0%,transparent_70%)] rounded-full blur-[40px] animate-pulse" style={{ animationDuration: '10s' }} />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="max-w-3xl text-center relative z-10 w-full pt-20">
        <AnimSection delay={0}>
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-1.5 mb-8 text-[13px] text-purple-400 font-medium tracking-wide">
            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse" />
            Available for new projects
          </div>
        </AnimSection>

        <AnimSection delay={0.1}>
          <h1 className="text-[clamp(48px,8vw,88px)] font-extrabold leading-[1.05] mb-4 tracking-tighter">
            <span className="text-white">Oke </span>
            <span className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Oluwaseun</span>
          </h1>
        </AnimSection>

        <AnimSection delay={0.2}>
          <div className="text-[clamp(20px,3vw,28px)] font-medium mb-6 h-10 flex items-center justify-center gap-1.5 object-contain">
            <span className="text-purple-500 opacity-80">&lt;</span>
            <span className="text-white/90">{typed}</span>
            <span className="text-purple-500 animate-pulse ml-[2px]">|</span>
            <span className="text-purple-500 opacity-80">/&gt;</span>
          </div>
        </AnimSection>

        <AnimSection delay={0.3}>
          <p className="text-[17px] text-white/50 max-w-[560px] mx-auto mb-10 leading-[1.75]">
            Solution-focused web developer specializing in PHP, Python, and WordPress.
            I craft dynamic, purpose-driven digital experiences that solve real-world problems.
          </p>
        </AnimSection>

        <AnimSection delay={0.4}>
          <div className="flex gap-4 justify-center flex-wrap">
            <button 
              data-hover 
              onClick={() => scrollTo('projects')}
              className="px-8 py-3.5 rounded-full font-semibold text-[15px] bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:-translate-y-0.5 hover:shadow-[0_0_50px_rgba(168,85,247,0.6)] transition-all duration-300"
            >
              View Projects &rarr;
            </button>
            <button 
              data-hover 
              onClick={() => scrollTo('contact')}
              className="px-8 py-3.5 rounded-full font-semibold text-[15px] border border-purple-500/40 bg-purple-500/5 text-white/85 hover:border-purple-500 hover:bg-purple-500/15 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </AnimSection>

        <AnimSection delay={0.5}>
          <div className="flex gap-10 md:gap-16 justify-center mt-16 flex-wrap">
            {STATS.map(({ number, label }) => (
              <div key={label} className="text-center group">
                <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-br from-purple-500 to-indigo-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 origin-bottom">
                  {number}
                </div>
                <div className="text-xs text-white/40 mt-2 font-medium tracking-wide uppercase">{label}</div>
              </div>
            ))}
          </div>
        </AnimSection>
      </div>
    </section>
  );
}
