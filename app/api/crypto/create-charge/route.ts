import { NextRequest, NextResponse } from "next/server"; import Coinbase from "coinbase-commerce-node"; import { getSession } from "@/lib/auth"; import { recordDeposit } from "@/lib/wallet";
const { Client, resources } = Coinbase; const { Charge } = resources as any;
export async function POST(req: NextRequest){
  const { amountUsd = 10 } = await req.json(); const key = process.env.COINBASE_COMMERCE_API_KEY;
  if(!key) return NextResponse.json({ message: 'Coinbase Commerce API key missing' }, { status: 400 });
  Client.init(key);
  const s = getSession(); const credits = Math.round(amountUsd*10);
  const charge = await Charge.create({ name: 'Norbet Credits', pricing_type: 'fixed_price', local_price: { amount: String(amountUsd), currency: 'USD' }, metadata: { userId: s.uid, credits } });
  recordDeposit({ id: charge.id, provider:'coinbase', amountUsd, credits, status:'pending', userId:s.uid, createdAt: Date.now() });
  return NextResponse.json({ hosted_url: charge.hosted_url });
}
