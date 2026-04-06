import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = 'none';
    
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    const hover = (e) => {
      // Elements that should trigger cursor enlargement
      if (e.target.closest('a, button, input, textarea, [data-hover]')) {
        setIsHovered(true);
      }
    };
    const unhover = () => setIsHovered(false);

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseover', hover);
    document.addEventListener('mouseout', unhover);

    return () => {
      document.body.style.cursor = 'auto'; // Reset on unmount
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', hover);
      document.removeEventListener('mouseout', unhover);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-purple-500 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: pos.x - 4,
          y: pos.y - 4,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-purple-500/50 rounded-full pointer-events-none z-[9998] mix-blend-difference"
        animate={{
          x: pos.x - 16,
          y: pos.y - 16,
          scale: isHovered ? 1.5 : 1,
          backgroundColor: isHovered ? 'rgba(168, 85, 247, 0.1)' : 'transparent'
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.5 }}
      />
    </>
  );
}
