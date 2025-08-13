"use client";
import { useState } from "react";

type Result = { slot: number; rows: number; mult: number; path: number[] };

const riskLabels = ["low","medium","high"] as const;
export function Plinko(){
  const [wager, setWager] = useState(1);
  const [rows, setRows] = useState(12);
  const [risk, setRisk] = useState<typeof riskLabels[number]>("medium");
  const [last, setLast] = useState<Result|null>(null);

  async function play(){
    const res = await fetch('/api/games/plinko', { method: 'POST', body: JSON.stringify({ wager, rows, risk }) });
    const data = await res.json();
    setLast(data);
  }

  return <div className="card space-y-3">
    <h2 className="text-xl font-semibold">Plinko</h2>
    <div className="grid sm:grid-cols-4 gap-3">
      <label className="space-y-1"><span className="text-xs text-white/60">Wager</span><input className="input w-full" type="number" value={wager} onChange={e=>setWager(parseFloat(e.target.value)||0}/></label>
      <label className="space-y-1"><span className="text-xs text-white/60">Rows</span><input className="input w-full" type="number" min={8} max={16} step={2} value={rows} onChange={e=>setRows(Math.min(16, Math.max(8, parseInt(e.target.value||'12'))))}/></label>
      <label className="space-y-1"><span className="text-xs text-white/60">Risk</span>
        <select className="input w-full" value={risk} onChange={e=>setRisk(e.target.value as any)}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </label>
      <button onClick={play} className="btn">Drop Ball</button>
    </div>
    {last && <div className="text-sm text-white/80 space-y-1">
      <p>Rows: {last.rows} • Slot: <b>{last.slot}</b> • Multiplier: <b>{last.mult.toFixed(2)}×</b></p>
      <div className="flex gap-1 flex-wrap">{last.path.map((b,i)=>(<span key={i} className="badge">{b?'↘':'↙'}</span>))}</div>
    </div>}
  </div>
}
