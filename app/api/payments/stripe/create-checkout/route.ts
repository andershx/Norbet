import { NextRequest, NextResponse } from "next/server"; import Stripe from "stripe"; import { getSession } from "@/lib/auth"; import { recordDeposit } from "@/lib/wallet";
export async function POST(req: NextRequest){
  const { amountUsd = 10 } = await req.json(); const key = process.env.STRIPE_SECRET_KEY;
  if(!key) return NextResponse.json({ message: 'Stripe test key missing' }, { status: 400 });
  const stripe = new Stripe(key, { apiVersion: '2024-06-20' } as any);
  const s = getSession(); const credits = Math.round(amountUsd*10);
  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [{ price_data: { currency: 'usd', product_data: { name: 'Norbet Credits' }, unit_amount: Math.round(amountUsd*100) }, quantity: 1 }],
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL || ''}/wallet` || 'http://localhost:3000/wallet',
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || ''}/deposit` || 'http://localhost:3000/deposit',
    metadata: { userId: s.uid, credits: String(credits) }
  });
  recordDeposit({ id: session.id, provider:'stripe', amountUsd, credits, status:'pending', userId:s.uid, createdAt: Date.now() });
  return NextResponse.json({ url: session.url });
}
