import { useState, useEffect } from 'react';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const handler = () => {
      const sections = ['home', 'experience', 'projects', 'skills', 'contact'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 300 && rect.bottom > 300) { 
          setActive(id); 
          break; 
        }
      }
    };
    window.addEventListener('scroll', handler, { passive: true });
    handler(); // Initialize immediately
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <div className="bg-[#05050f] text-white min-h-screen font-sans overflow-x-hidden selection:bg-purple-500/30">
      <Cursor />
      <Navbar active={active} />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
