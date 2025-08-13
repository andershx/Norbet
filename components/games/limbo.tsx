"use client";
import { useState } from "react";
import { celebrate } from "@/lib/fx";

type LimboResult = { mult: number; win: boolean; payout: number };

export function Limbo() {
  const [wager, setWager] = useState<number>(1);
  const [target, setTarget] = useState<number>(2.0);
  const [last, setLast] = useState<LimboResult | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  async function play() {
    try {
      setLoading(true);
      const res = await fetch('/api/games/limbo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ wager, target }),
      });
      const data: LimboResult = await res.json();
      setLast(data);
      if (data.win && data.payout > 0) celebrate(data.payout);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="card space-y-3">
      <h2 className="text-xl font-semibold">Limbo</h2>
      <div className="grid sm:grid-cols-3 gap-3">
        <label className="space-y-1">
          <span className="text-xs text-white/60">Wager</span>
          <input
            className="input w-full"
            type="number"
            value={Number.isFinite(wager) ? wager : 0}
            onChange={(e) => setWager(parseFloat(e.target.value || '0') || 0)}
          />
        </label>
        <label className="space-y-1">
          <span className="text-xs text-white/60">Target ×</span>
          <input
            className="input w-full"
            type="number"
            step={0.1}
            value={Number.isFinite(target) ? target : 0}
            onChange={(e) => setTarget(parseFloat(e.target.value || '0') || 0)}
          />
        </label>
        <button onClick={play} className="btn" disabled={loading}>
          {loading ? 'Rolling...' : 'Roll'}
        </button>
      </div>
      {last && (
        <div className="text-sm text-white/80">
          <p>
            Hit: <b>{last.mult.toFixed(2)}×</b> — {last.win ? 'WIN' : 'LOSS'} (payout {last.payout.toFixed(2)})
          </p>
        </div>
      )}
    </div>
  );
}
