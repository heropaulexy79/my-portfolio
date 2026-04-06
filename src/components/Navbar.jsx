import { useState, useEffect } from 'react';
import { NAV_LINKS } from '../content';

export default function Navbar({ active }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ease-in-out flex justify-between items-center ${
      scrolled 
        ? 'py-3 px-8 md:px-12 bg-[#05050f]/90 backdrop-blur-xl border-b border-purple-500/15' 
        : 'py-5 px-8 md:px-12 bg-transparent'
    }`}>
      <div className="font-extrabold text-2xl tracking-tighter bg-gradient-to-br from-indigo-500 to-purple-500 bg-clip-text text-transparent">
        OO.
      </div>
      <div className="hidden md:flex gap-2">
        {NAV_LINKS.map((link) => {
          const isActive = active === link.toLowerCase();
          return (
            <button 
              key={link} 
              onClick={() => scrollTo(link)} 
              data-hover 
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                isActive 
                  ? 'text-purple-500 bg-purple-500/10' 
                  : 'text-white/65 hover:text-purple-400 hover:bg-white/5'
              }`}
            >
              {link}
            </button>
          );
        })}
      </div>
      {/* Mobile menu toggle could go here in future */}
    </nav>
  );
}
