"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

type Bal = { balance: number; vipPoints: number };
type Dep = { id: string; provider: string; amountUsd: number; credits: number; status: string; createdAt: number };

export function Wallet(){
  const [bal, setBal] = useState<Bal|null>(null);
  useEffect(()=>{ fetch('/api/wallet/balance').then(r=>r.json()).then(setBal) },[]);
  return (
    <div className="flex items-center gap-2">
      <span className="badge">{bal? bal.balance.toFixed(2): '—'} CR</span>
      <Link href="/wallet" className="btn btn-outline text-xs">Wallet</Link>
      <Link href="/deposit" className="btn text-xs">Deposit</Link>
    </div>
  );
}

export function WalletPage(){
  const [bal, setBal] = useState<Bal|null>(null);
  const [deps, setDeps] = useState<Dep[]>([]);
  useEffect(()=>{
    fetch('/api/wallet/balance').then(r=>r.json()).then(setBal);
    fetch('/api/deposits/list').then(r=>r.json()).then(setDeps);
  },[]);
  async function faucet(){ await fetch('/api/wallet/faucet', { method: 'POST' }); const b = await (await fetch('/api/wallet/balance')).json(); setBal(b) }
  return <div className="space-y-4">
    <h1 className="text-2xl font-bold">Wallet</h1>
    <div className="card space-y-2">
      <p>Balance: <b>{bal? bal.balance.toFixed(2): '—'}</b> credits</p>
      <div className="flex gap-2">
        <Link href="/deposit" className="btn">Deposit</Link>
        <Link href="/withdraw" className="btn btn-outline">Withdraw</Link>
        <button onClick={faucet} className="btn btn-outline">Daily Faucet (+10)</button>
      </div>
    </div>
    <div className="card">
      <h3 className="font-semibold mb-2">Deposit History</h3>
      <table className="table">
        <thead><tr><th>ID</th><th>Provider</th><th>USD</th><th>Credits</th><th>Status</th><th>Date</th></tr></thead>
        <tbody>{deps.map(d=>(<tr key={d.id}><td className="truncate max-w-[120px]">{d.id}</td><td>{d.provider}</td><td>${d.amountUsd.toFixed(2)}</td><td>{d.credits}</td><td>{d.status}</td><td>{new Date(d.createdAt).toLocaleString()}</td></tr>))}</tbody>
      </table>
    </div>
  </div>
}
