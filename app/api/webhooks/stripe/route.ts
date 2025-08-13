import { NextRequest, NextResponse } from "next/server"; import Stripe from "stripe"; import { creditUser } from "@/lib/wallet"; import { readDB, writeDB } from "@/lib/demo-db";
export async function POST(req: NextRequest){
  const sig = req.headers.get('stripe-signature'); const whsec = process.env.STRIPE_WEBHOOK_SECRET; const key = process.env.STRIPE_SECRET_KEY;
  if(!sig || !whsec || !key) return NextResponse.json({ error: 'Stripe webhook not configured' }, { status: 400 });
  const stripe = new Stripe(key, { apiVersion: '2024-06-20' } as any);
  const raw = await req.text();
  let event: Stripe.Event;
  try { event = stripe.webhooks.constructEvent(raw, sig, whsec); } catch (err:any) { return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 }); }
  const db = readDB(); db.webhooks.push({ provider:'stripe', type:event.type, id:event.id, created:Date.now() }); writeDB(db);
  if(event.type==='checkout.session.completed'){
    const session = event.data.object as any;
    const uid = session.metadata?.userId; const credits = parseInt(session.metadata?.credits||'0',10)||0;
    if(uid && credits>0){ creditUser(uid, credits, { provider:'stripe', sessionId: session.id }); const dep = db.deposits.find(d=>d.id===session.id); if(dep){ dep.status='completed'; writeDB(db); } }
  }
  return NextResponse.json({ received: true });
}
