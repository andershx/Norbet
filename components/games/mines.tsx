"use client";
import { useEffect, useState } from "react";
type Cell = { revealed: boolean; mine: boolean; };
export function Mines(){
  const [wager, setWager] = useState(1); const [size] = useState(5);
  const [grid, setGrid] = useState<Cell[]>(Array.from({length:25},()=>({revealed:false, mine:false})));
  const [started, setStarted] = useState(false);
  useEffect(()=>{ reset(); },[]);
  function reset(){ setGrid(Array.from({length:25},()=>({revealed:false, mine: Math.random()<0.2 }))); setStarted(false); }
  function open(i:number){ if(!started) setStarted(true); setGrid(g=>{ const c=[...g]; c[i]={...c[i], revealed:true}; return c; }); }
  return <div className="card space-y-3">
    <h2 className="text-xl font-semibold">Mines (Demo)</h2>
    <div className="grid grid-cols-5 gap-2">{grid.map((c,i)=>(
      <button key={i} onClick={()=>open(i)} className={"h-12 rounded-xl border border-white/10 " + (c.revealed? (c.mine?'bg-red-600':'bg-emerald-600') : 'bg-black/20')}></button>
    ))}</div>
    <div className="flex gap-2"><button className="btn" onClick={reset}>New Round</button></div>
  </div>
}
