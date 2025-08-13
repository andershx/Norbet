import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { readDB, writeDB } from "@/lib/demo-db";
import { hmacSHA256 } from "@/lib/provablyFair";

type Risk = 'low' | 'medium' | 'high';

function mulTable(rows: number, risk: Risk): number[] {
  // Symmetric multipliers from center to edges. This is a demo-friendly curve,
  // not a production payout schedule.
  const center = rows / 2;
  const edgeBoost = risk === 'high' ? 24 : risk === 'medium' ? 14 : 8; // edge magnitude
  const power = risk === 'high' ? 1.2 : risk === 'medium' ? 1.5 : 1.8;   // curve steepness

  const arr: number[] = [];
  for (let r = 0; r <= rows; r++) {
    const dist = Math.abs(r - center) / center;            // 0 (center) .. 1 (edge)
    const mult = 1 + edgeBoost * Math.pow(dist, power);    // 1× in middle, higher at edges
    arr.push(parseFloat(mult.toFixed(2)));
  }
  // Slightly reduce center to add house edge feel
  arr[Math.floor(center)] = parseFloat((arr[Math.floor(center)] * 0.9).toFixed(2));
  return arr;
}

function randBits(serverSeed: string, clientSeed: string, nonce: number, rows: number): number[] {
  const bits: number[] = [];
  // Generate enough hex and slice; if we run out, bump a counter
  let idx = 0;
  let counter = 0;
  while (bits.length < rows) {
    const h = hmacSHA256(serverSeed, `${clientSeed}:${nonce}:${counter}`);
    for (let i = 0; i < h.length && bits.length < rows; i += 2) {
      const byte = parseInt(h.slice(i, i + 2), 16);
      bits.push(byte & 1); // lowest bit as left/right
    }
    counter++;
    idx += 1;
  }
  return bits;
}

export async function POST(req: NextRequest){
  const { wager = 1, rows = 12, risk = 'medium' } = await req.json();
  const r = Math.max(8, Math.min(16, rows - (rows % 2))); // clamp to even 8..16
  const s = getSession();
  const db = readDB();
  const u = db.users[s.uid] || { id: s.uid, balance: 100, vipPoints: 0, clientSeed: 'client' };
  db.users[s.uid] = u;
  db.nonce = (db.nonce || 0) + 1;

  const path = randBits(db.serverSeed, u.clientSeed || 'client', db.nonce, r);
  const rights = path.reduce((a, b) => a + (b ? 1 : 0), 0);
  const table = mulTable(r, risk);
  const multiplier = table[rights] || 1;
  const payout = parseFloat((wager * multiplier).toFixed(2));

  // Apply result to balance (stake is consumed, payout is added)
  u.balance += (payout - wager);
  writeDB(db);

  const commit = hmacSHA256('commit', db.serverSeed);
  return NextResponse.json({
    path,
    rights,
    multiplier,
    payout,
    serverSeedHash: commit,
    clientSeed: u.clientSeed || 'client',
    nonce: db.nonce,
  });
}
