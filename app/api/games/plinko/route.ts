import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { readDB, writeDB } from "@/lib/demo-db";
import { hmacSHA256 } from "@/lib/provablyFair";

type Risk = 'low'|'medium'|'high';

// Simple payout tables for 8..16 rows. Edges are higher risk multipliers.
// These are demo-only and not balanced to any house edge.
const tables: Record<number, Record<Risk, number[]>> = {
  8: {
    low:    [0.5,0.7,0.9,1.1,1.1,0.9,0.7,0.5,],
    medium: [0.3,0.5,0.9,1.5,1.5,0.9,0.5,0.3,],
    high:   [0.2,0.4,1.2,3.0,3.0,1.2,0.4,0.2,],
  },
  10: {
    low:    [0.4,0.6,0.8,1.0,1.2,1.2,1.0,0.8,0.6,0.4],
    medium: [0.25,0.4,0.7,1.1,2.0,2.0,1.1,0.7,0.4,0.25],
    high:   [0.2,0.3,0.6,1.5,3.5,3.5,1.5,0.6,0.3,0.2],
  },
  12: {
    low:    [0.3,0.5,0.7,0.9,1.1,1.3,1.3,1.1,0.9,0.7,0.5,0.3],
    medium: [0.2,0.35,0.6,0.9,1.4,2.0,2.0,1.4,0.9,0.6,0.35,0.2],
    high:   [0.15,0.25,0.5,0.9,2.0,4.0,4.0,2.0,0.9,0.5,0.25,0.15],
  },
  14: {
    low:    [0.25,0.4,0.6,0.8,1.0,1.2,1.4,1.4,1.2,1.0,0.8,0.6,0.4,0.25],
    medium: [0.18,0.3,0.5,0.75,1.2,1.8,2.5,2.5,1.8,1.2,0.75,0.5,0.3,0.18],
    high:   [0.12,0.2,0.4,0.8,1.6,3.0,5.0,5.0,3.0,1.6,0.8,0.4,0.2,0.12],
  },
  16: {
    low:    [0.2,0.35,0.5,0.7,0.9,1.1,1.3,1.5,1.5,1.3,1.1,0.9,0.7,0.5,0.35,0.2],
    medium: [0.12,0.22,0.4,0.6,0.9,1.3,1.8,2.6,2.6,1.8,1.3,0.9,0.6,0.4,0.22,0.12],
    high:   [0.08,0.15,0.3,0.5,0.9,1.6,2.8,5.5,5.5,2.8,1.6,0.9,0.5,0.3,0.15,0.08],
  }
};

export async function POST(req: NextRequest){
  const { wager = 1, rows = 12, risk = 'medium' } = await req.json();
  const s = getSession();
  const r = Math.max(8, Math.min(16, rows - (rows % 2))); // even rows 8..16
  const table = tables[r as 8|10|12|14|16][risk as Risk];

  const db = readDB();
  const u = db.users[s.uid] || { id: s.uid, balance: 100, vipPoints: 0, clientSeed: 'client' };
  db.users[s.uid] = u;
  db.nonce = (db.nonce || 0) + 1;

  // Generate path bits using HMAC of serverSeed with clientSeed:nonce
  const hash = hmacSHA256(db.serverSeed, `${u.clientSeed || 'client'}:${db.nonce}`);
  const pathBits: number[] = [];
  let rights = 0;
  for(let i=0;i<r;i++){
    const hexPair = hash.substr((i*2)%hash.length, 2);
    const byte = parseInt(hexPair, 16);
    const right = (byte % 2) === 1 ? 1 : 0;
    pathBits.push(right);
    rights += right;
  }
  const slot = rights; // number of rights out of rows
  const mult = table[slot];

  // Adjust balance
  u.balance += (mult * wager - wager);
  writeDB(db);

  return NextResponse.json({ slot, rows: r, mult, path: pathBits });
}
