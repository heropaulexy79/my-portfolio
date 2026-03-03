import { useState, useEffect } from 'react';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/animations.css';
export default function App() {
  const [active, setActive] = useState('home');
  useEffect(() => {
    const handler = () => {
      for (const id of ['home','projects','skills','contact']) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 200 && rect.bottom > 200) { setActive(id); break; }
      }
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);
  return (
    <div style={{ background: '#05050f', color: 'white', minHeight: '100vh' }}>
      <Cursor />
      <Navbar active={active} />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
