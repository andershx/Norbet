'use client';
import { useEffect, useRef } from 'react';

/** Draw simple confetti bursts on wins. No external deps. */
export function FXProvider(){
  const canvasRef = useRef<HTMLCanvasElement|null>(null);
  const rafRef = useRef<number|undefined>(undefined);
  const particlesRef = useRef<Array<{x:number,y:number,vx:number,vy:number,life:number,color:string}>>([]);

  useEffect(()=>{
    const onWin = (e: any)=>{
      const amount = e?.detail?.amount ?? 1;
      burst(amount);
    };
    window.addEventListener('norbet:win', onWin);
    const c = canvasRef.current;
    const resize = ()=>{
      if(!c) return;
      c.width = window.innerWidth; c.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();
    startLoop();
    return ()=>{
      window.removeEventListener('norbet:win', onWin);
      window.removeEventListener('resize', resize);
      stopLoop();
    }
  },[]);

  function startLoop(){
    const c = canvasRef.current;
    if(!c) return;
    const ctx = c.getContext('2d')!;
    const loop = ()=>{
      ctx.clearRect(0,0,c.width,c.height);
      particlesRef.current = particlesRef.current.filter(p=>p.life>0);
      for(const p of particlesRef.current){
        p.life -= 0.016;
        p.vy += 0.15; // gravity
        p.x += p.vx; p.y += p.vy;
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, 4, 8);
      }
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
  }
  function stopLoop(){
    if(rafRef.current) cancelAnimationFrame(rafRef.current);
  }
  function burst(amount:number){
    const c = canvasRef.current; if(!c) return;
    const n = Math.min(200, Math.max(30, Math.floor(amount*4)));
    const cx = c.width/2, cy = c.height/3;
    const colors = ['#7BD9FF','#1B8EF2','#00E5A8','#FFD166','#F25F5C','#B28DFF'];
    for(let i=0;i<n;i++){
      const a = Math.random()*Math.PI*2;
      const s = Math.random()*6 + 2;
      particlesRef.current.push({
        x: cx, y: cy,
        vx: Math.cos(a)*s, vy: Math.sin(a)*s - 4,
        life: 1 + Math.random(),
        color: colors[i % colors.length],
      });
    }
  }

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-[60]" aria-hidden="true" />;
}
