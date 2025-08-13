"use client";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Wallet as WalletIcon, ChevronDown, RefreshCcw } from "lucide-react";

type Bal = { balance: number; vipPoints: number };

export function Wallet(){
  const [bal, setBal] = useState<Bal|null>(null);
  const [fiat, setFiat] = useState<'CR'|'USD'>('CR');

  async function refresh(){
    const r = await fetch('/api/wallet/balance'); const b = await r.json(); setBal(b);
  }

  useEffect(()=>{ refresh(); },[]);

  const display = useMemo(()=>{
    if(!bal) return '—';
    if(fiat==='CR') return bal.balance.toFixed(2) + ' CR';
    const usd = bal.balance / 10; // 10 credits = 1 USD
    return '$' + usd.toFixed(2);
  }, [bal, fiat]);

  return (
    <div className="flex items-center gap-2">
      <span className="wallet-pill inline-flex items-center gap-2">
        <WalletIcon size={16} />
        <span>{display}</span>
        <button className="opacity-70 hover:opacity-100" onClick={refresh} title="Refresh"><RefreshCcw size={14}/></button>
      </span>
      <button onClick={()=>setFiat(fiat==='CR'?'USD':'CR')} className="btn btn-outline text-xs">
        <ChevronDown size={14} className="mr-1"/> {fiat}
      </button>
      <Link href="/wallet" className="btn btn-outline text-xs">Wallet</Link>
      <Link href="/deposit" className="btn text-xs">Deposit</Link>
    </div>
  );
}
