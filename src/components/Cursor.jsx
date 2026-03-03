import { useState, useEffect } from 'react';
export default function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [big, setBig] = useState(false);
  useEffect(() => {
    const m = (e) => setPos({ x: e.clientX, y: e.clientY });
    const ov = (e) => { if (e.target.closest('a,button,[data-hover]')) setBig(true); };
    const ou = () => setBig(false);
    window.addEventListener('mousemove', m);
    document.addEventListener('mouseover', ov);
    document.addEventListener('mouseout', ou);
    return () => { window.removeEventListener('mousemove', m); document.removeEventListener('mouseover', ov); document.removeEventListener('mouseout', ou); };
  }, []);
  return (<><div style={{ position:'fixed', left:pos.x-4, top:pos.y-4, width:8, height:8, background:'#a855f7', borderRadius:'50%', pointerEvents:'none', zIndex:9999, mixBlendMode:'difference' }} /><div style={{ position:'fixed', left:pos.x-(big?28:18), top:pos.y-(big?28:18), width:big?56:36, height:big?56:36, border:'1.5px solid rgba(168,85,247,0.5)', borderRadius:'50%', pointerEvents:'none', zIndex:9998, transition:'all 0.15s ease', mixBlendMode:'difference' }} /></>);
}
