'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export function WalletPill(){
  const [bal, setBal] = useState<number|null>(null);
  const [usd, setUsd] = useState(false);
  const [flash, setFlash] = useState(false);
  async function refresh(){
    const b = await (await fetch('/api/wallet/balance')).json();
    const prev = bal;
    setBal(b.balance);
    if(prev !== null && b.balance !== prev){
      setFlash(true); setTimeout(()=>setFlash(false), 600);
    }
  }
  useEffect(()=>{ refresh(); },[]);
  const display = bal===null? '—' : (usd ? `$${(bal/10).toFixed(2)}` : `${bal.toFixed(2)} CR`);
  return (
    <div className={"flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1.5 shadow-soft " + (flash?'ring-2 ring-[var(--accent,#1B8EF2)]':'')}>
      <div className="w-2 h-2 rounded-full" style={{background:'var(--accent,#1B8EF2)'}}/>
      <button onClick={()=>setUsd(u=>!u)} className="text-sm font-semibold">{display}</button>
      <button onClick={refresh} className="text-xs opacity-70 hover:opacity-100 underline">refresh</button>
      <Link href="/wallet" className="ml-2 text-xs px-2 py-1 rounded-full border border-white/10 hover:border-white/25">Wallet</Link>
      <Link href="/deposit" className="text-xs px-2 py-1 rounded-full" style={{background:'var(--accent,#1B8EF2)'}}>Deposit</Link>
    </div>
  );
}
