import { SKILLS, SKILL_ICONS } from '../content';
import AnimSection from './AnimSection';

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

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-10 bg-purple-500/5 relative">
      <div className="max-w-5xl mx-auto">
        <AnimSection>
          <SectionHeader label="Expertise" title="Skills and" highlight="Technologies" />
        </AnimSection>

        <div className="flex flex-col gap-16">
          {Object.entries(SKILLS).map(([category, items], i) => (
            <AnimSection key={category} delay={i * 0.15}>
              <div>
                <h3 className="text-white/30 uppercase tracking-[0.2em] text-sm font-semibold mb-6 flex items-center gap-4">
                  {category}
                  <div className="h-[1px] flex-1 bg-white/5" />
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {items.map((skill) => (
                    <div 
                      key={skill} 
                      data-hover
                      className="group flex items-center gap-4 bg-white/[0.02] border border-white/[0.05] rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-purple-500/10 hover:border-purple-500/30 hover:shadow-[0_10px_30px_rgba(168,85,247,0.15)]"
                    >
                      <div className="text-3xl filter drop-shadow-[0_0_8px_rgba(255,255,255,0.2)] group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_rgba(168,85,247,0.5)] transition-all duration-300">
                        {SKILL_ICONS[skill] || '🔧'}
                      </div>
                      <span className="text-sm font-semibold text-white/70 group-hover:text-purple-300 transition-colors duration-300">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimSection>
          ))}
        </div>
      </div>
    </section>
  );
}
