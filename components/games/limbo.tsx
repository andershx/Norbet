"use client";
import { useState } from "react";
export function Limbo(){
  const [wager, setWager] = useState(1); const [target, setTarget] = useState(2.0); const [last, setLast] = useState<any>(null);
  async function play(){ const res = await fetch('/api/games/limbo', { method: 'POST', body: JSON.stringify({ wager, target })}); setLast(await res.json()); }
  return <div className="card space-y-3">
    <h2 className="text-xl font-semibold">Limbo</h2>
    <div className="grid sm:grid-cols-3 gap-3">
      <label className="space-y-1"><span className="text-xs text-white/60">Wager</span><input className="input w-full" type="number" value={wager} onChange={e=>setWager(parseFloat(e.target.value))}/></label>
      <label className="space-y-1"><span className="text-xs text-white/60">Target ×</span><input className="input w-full" type="number" step="0.1" value={target} onChange={e=>setTarget(parseFloat(e.target.value))}/></label>
      <button onClick={play} className="btn">Roll</button>
    </div>
    {last && <div className="text-sm text-white/80"><p>Hit: <b>{last.mult.toFixed(2)}×</b> — {last.win? 'WIN':'LOSS'} (payout {last.payout.toFixed(2)})</p></div>}
  </div>
}
