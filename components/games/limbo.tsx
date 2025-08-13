'use client';
import { useState } from "react";
import { celebrate } from "@/lib/fx";

export function Limbo(){
  const [wager, setWager] = useState(1); const [target, setTarget] = useState(2.0); const [last, setLast] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  async function play(){
    setLoading(true);
    try{
      const res = await fetch('/api/games/limbo', { method: 'POST', body: JSON.stringify({ wager, target })});
      const data = await res.json(); setLast(data);
      if (data.win && data.payout > 0) celebrate(data.payout);
    } finally {
      setLoading(false);
    }
  }
  return <div className="card space-y-3">
    <h2 className="text-xl font-semibold">Limbo</h2>
    <div className="grid sm:grid-cols-3 gap-3">
      <label className="space-y-1"><span className="text-xs text-white/60">Wager</span><input className="input w-full" type="number" value={wager} onChange={e=>setWager(parseFloat(e.target.value)||0}/></label>
      <label className="space-y-1"><span className="text-xs text-white/60">Target ×</span><input className="input w-full" type="number" step="0.1" value={target} onChange={e=>setTarget(parseFloat(e.target.value)||0}/></label>
      <button onClick={play} className="btn">{loading? 'Rolling...' : 'Roll'}</button>
    </div>
    {last && <div className="text-sm text-white/80"><p>Hit: <b>{last.mult.toFixed(2)}×</b> — {last.win? 'WIN':'LOSS'} (payout {last.payout.toFixed(2)})</p></div>}
  </div>
}
