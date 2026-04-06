import { EXPERIENCE } from '../content';
import AnimSection from './AnimSection';
import { Briefcase } from 'lucide-react';

function SectionHeader({ label, title, highlight }) {
  return (
    <div className="text-center mb-16">
      <div className="text-xs tracking-[0.2em] text-purple-500 uppercase mb-3 font-semibold">{label}</div>
      <h2 className="text-[clamp(32px,5vw,52px)] font-extrabold m-0 tracking-tight">
        {title}{' '}
        <span className="bg-gradient-to-br from-indigo-500 to-purple-500 bg-clip-text text-transparent">{highlight}</span>
      </h2>
      <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-5 rounded-full" />
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-10 max-w-4xl mx-auto relative">
      <AnimSection>
        <SectionHeader label="Career" title="My" highlight="Experience" />
      </AnimSection>

      <div className="relative border-l border-purple-500/20 ml-4 md:ml-0">
        {EXPERIENCE.map((item, index) => (
          <AnimSection key={item.id} delay={index * 0.2}>
            <div className="mb-12 relative pl-8 md:pl-12 group">
              {/* Timeline dot */}
              <div className="absolute left-[-21px] top-1 w-10 h-10 bg-[#05050f] rounded-full flex items-center justify-center border border-purple-500/30 group-hover:border-purple-500 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all duration-300">
                <Briefcase size={16} className="text-purple-400" />
              </div>

              {/* Content Card */}
              <div className="glass-card rounded-2xl p-6 md:p-8 hover:-translate-y-1 transition-transform duration-300 group-hover:border-purple-500/40">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 md:gap-8 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{item.role}</h3>
                    <div className="text-purple-400 font-medium text-sm">{item.company}</div>
                  </div>
                  <div className="inline-block px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold whitespace-nowrap h-fit">
                    {item.period}
                  </div>
                </div>
                
                <p className="text-white/60 leading-relaxed text-sm md:text-base mb-6">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.skills.map(skill => (
                    <span 
                      key={skill} 
                      className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimSection>
        ))}
      </div>
    </section>
  );
}
