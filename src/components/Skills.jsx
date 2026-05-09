import { motion } from 'framer-motion';
import { SKILLS, SKILL_ICONS } from '../content';
import AnimSection from './AnimSection';
import { Code2, Database, Layout, Terminal, Wrench } from 'lucide-react';

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

function SkillCard({ title, items, icon: Icon, className = "", delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`relative group overflow-hidden bg-white/[0.03] border border-white/[0.08] rounded-3xl p-8 transition-all duration-500 hover:border-purple-500/40 hover:bg-purple-500/[0.05] ${className}`}
    >
      {/* Background glow */}
      <div className="absolute -right-10 -top-10 w-40 h-40 bg-purple-500/10 rounded-full blur-[50px] group-hover:bg-purple-500/20 transition-all duration-500" />
      
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform duration-300">
            <Icon size={24} />
          </div>
          <h3 className="text-xl font-bold tracking-tight text-white/90">{title}</h3>
        </div>

        <div className="flex flex-wrap gap-3 mt-auto">
          {items.map((skill) => (
            <div
              key={skill}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] border border-white/[0.06] hover:border-purple-500/30 hover:bg-purple-500/10 transition-all duration-300 group/skill"
            >
              <span className="text-xl filter grayscale group-hover/skill:grayscale-0 transition-all duration-300">
                {SKILL_ICONS[skill] || '🔧'}
              </span>
              <span className="text-sm font-medium text-white/60 group-hover/skill:text-white transition-colors duration-300">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-10 relative overflow-hidden bg-[#05050f]">
      {/* Ambient backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <AnimSection>
          <SectionHeader label="Expertise" title="Technical" highlight="Mastery" />
        </AnimSection>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(300px,auto)]">
          {/* Frontend - Large */}
          <SkillCard
            title="Frontend Development"
            items={SKILLS.Frontend}
            icon={Layout}
            className="md:col-span-8 md:row-span-2"
            delay={0.1}
          />

          {/* Backend - Medium */}
          <SkillCard
            title="Backend Power"
            items={SKILLS.Backend}
            icon={Database}
            className="md:col-span-4"
            delay={0.2}
          />

          {/* CMS - Medium */}
          <SkillCard
            title="CMS & E-commerce"
            items={SKILLS.CMS}
            icon={Code2}
            className="md:col-span-4"
            delay={0.3}
          />

          {/* Tools - Wide */}
          <SkillCard
            title="Tools & Environment"
            items={SKILLS.Tools}
            icon={Wrench}
            className="md:col-span-12"
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
}
