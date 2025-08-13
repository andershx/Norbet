'use client';
import { useEffect, useState } from 'react';
const COLORS = ['#1B8EF2','#22c55e','#ef4444','#eab308','#06b6d4','#a855f7','#f97316'];

export function AccentPicker(){
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState('#1B8EF2');
  useEffect(()=>{
    const saved = localStorage.getItem('norbet-accent');
    if(saved){ setColor(saved); apply(saved); }
  },[]);
  function apply(c:string){
    document.documentElement.style.setProperty('--accent', c);
  }
  function choose(c:string){
    setColor(c); localStorage.setItem('norbet-accent', c); apply(c);
    setOpen(false);
  }
  return (
    <div className="fixed bottom-4 right-4 z-[70]">
      <button onClick={()=>setOpen(o=>!o)} className="rounded-full w-12 h-12 shadow-soft"
        style={{background: 'var(--accent, #1B8EF2)'}} title="Accent color" />
      {open && (
        <div className="mt-2 p-2 rounded-2xl bg-black/70 backdrop-blur border border-white/10 flex gap-2">
          {COLORS.map(c=> (
            <button key={c} className="w-6 h-6 rounded-full border border-white/10" style={{background:c}} onClick={()=>choose(c)} />
          ))}
        </div>
      )}
    </div>
  );
}
