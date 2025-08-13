"use client";
import { useState } from "react";
export default function Deposit(){
  const [amount, setAmount] = useState(10);
  async function startStripe(){
    const res = await fetch('/api/payments/stripe/create-checkout', { method:'POST', body: JSON.stringify({ amountUsd: amount }) });
    const data = await res.json(); if(data.url) location.href = data.url; else alert(data.message || 'Failed');
  }
  async function startCoinbase(){
    const res = await fetch('/api/crypto/create-charge', { method:'POST', body: JSON.stringify({ amountUsd: amount }) });
    const data = await res.json(); if(data.hosted_url) location.href = data.hosted_url; else alert(data.message || 'Failed');
  }
  return <div className="space-y-4">
    <h1 className="text-2xl font-bold">Deposit</h1>
    <div className="card space-y-3">
      <label className="space-y-1"><span className="text-xs text-white/60">Amount (USD)</span><input className="input" type="number" value={amount} onChange={e=>setAmount(parseFloat(e.target.value))}/></label>
      <div className="flex gap-2">
        <button onClick={startStripe} className="btn">Stripe Checkout (Test)</button>
        <button onClick={startCoinbase} className="btn btn-outline">Coinbase Charge (Sandbox)</button>
      </div>
      <p className="text-xs text-white/60">1 USD = 10 credits (configurable)</p>
    </div>
    <p className="text-xs text-white/60">Demo/testing only. Real-money requires licensing, KYC/AML, geoblocking, and compliance.</p>
  </div>
}
