import { useState } from 'react';
import { PROJECTS } from '../content';
import AnimSection from './AnimSection';
import { ExternalLink, Eye, X } from 'lucide-react';

function PreviewModal({ project, onClose }) {
  const [loaded, setLoaded] = useState(false);
  const [blocked, setBlocked] = useState(false);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[1000] bg-black/85 backdrop-blur-md flex items-center justify-center p-5 animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-5xl h-[80vh] bg-[#0e0e1a] rounded-2xl border border-purple-500/30 shadow-[0_40px_120px_rgba(168,85,247,0.2)] flex flex-col overflow-hidden animate-in slide-in-from-bottom-8 duration-300"
      >
        {/* Browser chrome bar */}
        <div className="flex items-center gap-3 px-5 py-3 bg-white/5 border-b border-white/5 shrink-0">
          {/* Traffic lights */}
          <div className="flex gap-1.5">
            <button onClick={onClose} className="w-3 h-3 rounded-full bg-[#ff5f57] hover:brightness-110 border-none cursor-pointer flex items-center justify-center group" title="Close">
              <X size={8} className="opacity-0 group-hover:opacity-100 text-black/50" />
            </button>
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>

          {/* URL bar */}
          <div className="flex-1 bg-white/5 rounded-md py-1.5 px-3.5 text-xs text-white/50 flex items-center gap-2 border border-white/10 font-mono overflow-hidden whitespace-nowrap">
            <span className="text-purple-400">🔒</span>
            <span className="truncate">{project.link}</span>
          </div>

          {/* Open in new tab */}
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="text-white/40 hover:text-purple-500 transition-colors duration-200"
            title="Open in new tab"
          >
            <ExternalLink size={18} />
          </a>
        </div>

        {/* iframe area */}
        <div className="flex-1 relative overflow-hidden bg-black/20">
          {/* Loading spinner */}
          {!loaded && !blocked && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-white/40">
              <div className="w-10 h-10 border-4 border-purple-500/20 border-t-purple-500 rounded-full animate-spin" />
              <span className="text-sm font-medium tracking-wide animate-pulse">Loading preview...</span>
            </div>
          )}

          {/* Blocked message */}
          {blocked && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 p-10 text-center bg-[#0e0e1a]">
              <div className="text-6xl mb-2">🚫</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Preview Blocked</h3>
                <p className="text-white/45 text-[15px] leading-relaxed max-w-[400px]">
                  This site has restricted embedding for security reasons.<br />
                  You can still visit it directly.
                </p>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="mt-2 px-7 py-3 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-white font-semibold text-sm shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_50px_rgba(168,85,247,0.6)] transition-all duration-300"
              >
                Open Site &rarr;
              </a>
            </div>
          )}

          <iframe
            src={project.link}
            title={project.title}
            className={`w-full h-full border-none transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setLoaded(true)}
            onError={() => setBlocked(true)}
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          />
        </div>
      </div>
    </div>
  );
}

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

export default function Projects() {
  const [preview, setPreview] = useState(null);

  return (
    <>
      <section id="projects" className="py-32 px-10 max-w-6xl mx-auto">
        <AnimSection>
          <SectionHeader label="Portfolio" title="Featured" highlight="Projects" />
        </AnimSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {PROJECTS.map((project, i) => (
            <AnimSection key={project.title} delay={i * 0.1}>
              <div
                data-hover
                className="group h-full flex flex-col bg-white/[0.03] border border-white/[0.07] rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:bg-purple-500/10 hover:border-purple-500/40 hover:shadow-[0_20px_60px_rgba(168,85,247,0.15)]"
              >
                <div className="text-5xl leading-none pt-2 mb-6 transform group-hover:scale-110 transition-transform duration-300 origin-left">{project.emoji}</div>
                <div className="mb-6 flex-1">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed m-0 group-hover:text-white/70 transition-colors duration-300">{project.desc}</p>
                </div>
                
                <div className="flex gap-2 flex-wrap mb-8">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[11px] font-semibold px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-3 mt-auto">
                  <button
                    data-hover
                    onClick={() => setPreview(project)}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white/60 text-sm font-semibold transition-all duration-300 hover:bg-purple-500/20 hover:border-purple-500/50 hover:text-purple-400 group/btn"
                  >
                    <Eye size={16} className="group-hover/btn:scale-110 transition-transform duration-300" /> Preview
                  </button>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    data-hover
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white text-sm font-semibold decoration-transparent transition-all duration-300 hover:opacity-90 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:scale-[1.02]"
                  >
                    Visit <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </AnimSection>
          ))}
        </div>
      </section>

      {/* Modal */}
      {preview && <PreviewModal project={preview} onClose={() => setPreview(null)} />}
    </>
  );
}