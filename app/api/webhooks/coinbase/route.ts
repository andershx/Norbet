import { NextRequest, NextResponse } from "next/server"; import Coinbase from "coinbase-commerce-node"; import { creditUser } from "@/lib/wallet"; import { readDB, writeDB } from "@/lib/demo-db";
const Webhook = (Coinbase as any).Webhook;
export async function POST(req: NextRequest){
  const secret = process.env.COINBASE_COMMERCE_SHARED_SECRET; const sig = req.headers.get('x-cc-webhook-signature');
  if(!secret || !sig) return NextResponse.json({ error: 'Coinbase webhook not configured' }, { status: 400 });
  const raw = await req.text();
  let event: any; try { event = Webhook.verifyEventBody(raw, sig, secret); } catch (e:any) { return NextResponse.json({ error: e.message }, { status: 400 }); }
  const db = readDB(); db.webhooks.push({ provider:'coinbase', type:event.type, id:event.id, created:Date.now() }); writeDB(db);
  if(event.type === 'charge:confirmed'){ const data = event.data; const uid = data.metadata?.userId; const credits = parseInt(String(data.metadata?.credits||0),10)||0; if(uid && credits>0){ creditUser(uid, credits, { provider:'coinbase', chargeId: data.id }); const dep = db.deposits.find(d=>d.id===data.id); if(dep){ dep.status='completed'; writeDB(db); } } }
  return NextResponse.json({ received: true });
}
