"use client";
import { useRef, useState } from "react";
type State = 'idle'|'flying'|'crashed';
export function Crash(){
  const [wager, setWager] = useState(1); const [mult, setMult] = useState(2.0);
  const [state, setState] = useState<State>('idle'); const [point, setPoint] = useState<number|null>(null); const [progress, setProgress] = useState(1.0);
  const timer = useRef<any>(null);
  async function start(){
    const res = await fetch('/api/games/crash/start', { method: 'POST', body: JSON.stringify({ wager }) });
    const data = await res.json(); setPoint(data.point); setState('flying'); setProgress(1.0);
    timer.current = setInterval(()=>setProgress(p=>Math.min((p+0.05), data.point)), 80);
    setTimeout(()=>{ setState('crashed'); clearInterval(timer.current); }, Math.max(1500, (data.point*700)));
  }
  async function cashout(){ if(state!=='flying') return; await fetch('/api/games/crash/cashout', { method: 'POST', body: JSON.stringify({ at: progress, wager }) }); setState('idle'); }
  return <div className="card space-y-3">
    <h2 className="text-xl font-semibold">Crash</h2>
    <div className="grid sm:grid-cols-3 gap-3">
      <label className="space-y-1"><span className="text-xs text-white/60">Wager</span><input className="input w-full" type="number" value={wager} onChange={e=>setWager(parseFloat(e.target.value))}/></label>
      <label className="space-y-1"><span className="text-xs text-white/60">Auto Cashout</span><input className="input w-full" type="number" step="0.1" value={mult} onChange={e=>setMult(parseFloat(e.target.value))}/></label>
      <div className="flex gap-2"><button onClick={start} className="btn">Start</button><button onClick={cashout} className="btn btn-outline">Cash Out</button></div>
    </div>
    <div className="h-24 bg-black/20 rounded-xl flex items-center justify-center">
      {state==='flying' && <div className="text-3xl font-bold">{progress.toFixed(2)}×</div>}
      {state==='idle' && <div className="text-white/60">Click Start</div>}
      {state==='crashed' && <div className="text-red-400 font-bold">CRASHED at {point}×</div>}
    </div>
    {point && <p className="text-xs text-white/60">Round point: {point}× (provably fair)</p>}
  </div>
}
