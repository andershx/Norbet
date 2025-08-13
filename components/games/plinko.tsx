"use client";
import { useState } from "react";

type Risk = 'low' | 'medium' | 'high';
type Result = {
  path: number[];              // 0 = left, 1 = right per row
  rights: number;              // bins index (number of rights)
  multiplier: number;
  payout: number;
  serverSeedHash: string;
  clientSeed: string;
  nonce: number;
};

export default function Plinko(){
  const [wager, setWager] = useState<number>(1);
  const [rows, setRows] = useState<number>(12);
  const [risk, setRisk] = useState<Risk>('medium');
  const [last, setLast] = useState<Result | null>(null);
  const [loading, setLoading] = useState(false);

  async function play(){
    setLoading(true);
    try {
      const res = await fetch('/api/games/plinko', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ wager, rows, risk }),
      });
      const data = await res.json();
      setLast(data);
    } catch (e) {
      console.error(e);
      alert('Failed to play Plinko.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="card space-y-3">
      <h2 className="text-xl font-semibold">Plinko</h2>
      <div className="grid sm:grid-cols-4 gap-3">
        <label className="space-y-1">
          <span className="text-xs text-white/60">Wager</span>
          <input
            className="input w-full"
            type="number"
            min={0}
            step={0.1}
            value={Number.isFinite(wager) ? wager : 0}
            onChange={(e) => setWager(parseFloat(e.target.value || '0') || 0)}
          />
        </label>

        <label className="space-y-1">
          <span className="text-xs text-white/60">Rows (8–16)</span>
          <input
            className="input w-full"
            type="number"
            min={8}
            max={16}
            step={2}
            value={rows}
            onChange={(e) => {
              const v = parseInt(e.target.value || '12', 10);
              const clamped = Math.min(16, Math.max(8, v - (v % 2))); // even
              setRows(clamped);
            }}
          />
        </label>

        <label className="space-y-1">
          <span className="text-xs text-white/60">Risk</span>
          <select
            className="input w-full"
            value={risk}
            onChange={(e) => setRisk(e.target.value as Risk)}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>

        <div className="flex items-end">
          <button onClick={play} className="btn w-full" disabled={loading}>
            {loading ? 'Rolling...' : 'Play'}
          </button>
        </div>
      </div>

      {last && (
        <div className="text-sm text-white/80 space-y-1">
          <div>Path: {last.path.map((p, i) => (p ? 'R' : 'L')).join(' • ')}</div>
          <div>Bin (rights): {last.rights} / {rows}</div>
          <div>Multiplier: <b>{last.multiplier.toFixed(2)}×</b></div>
          <div>Payout: <b>{last.payout.toFixed(2)}</b> credits</div>
          <div className="text-xs text-white/60">
            Commit: {last.serverSeedHash} • Client: {last.clientSeed} • Nonce: {last.nonce}
          </div>
        </div>
      )}
    </div>
  );
}
