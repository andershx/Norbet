import { NextResponse } from "next/server"; import { getSession } from "@/lib/auth"; import { readDB } from "@/lib/demo-db";
export async function GET(){ const s = getSession(); const db = readDB(); const list = db.deposits.filter(d=>d.userId===s.uid).sort((a,b)=>b.createdAt-a.createdAt).slice(0,200); return NextResponse.json(list); }
