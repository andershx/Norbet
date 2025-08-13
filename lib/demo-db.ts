import fs from 'fs'; import path from 'path';
const TMP = process.env.TMPDIR || '/tmp';
const DB_PATH = path.join(TMP, 'norbet-demo-db.json');
export type DepositEvent = { id: string; provider: 'stripe'|'coinbase'; amountUsd: number; credits: number; status: 'pending'|'completed'|'failed'; userId: string; meta?: any; createdAt: number; };
type User = { id: string; balance: number; vipPoints: number; clientSeed: string };
type DB = { users: Record<string, User>; deposits: DepositEvent[]; webhooks: any[]; serverSeed: string; nonce: number; };
function init(){ if(!fs.existsSync(DB_PATH)){ const db: DB = { users: {}, deposits: [], webhooks: [], serverSeed: Math.random().toString(36).slice(2), nonce: 0 }; fs.writeFileSync(DB_PATH, JSON.stringify(db)); } }
export function readDB(): DB { init(); try { return JSON.parse(fs.readFileSync(DB_PATH,'utf-8')); } catch { return { users:{}, deposits:[], webhooks:[], serverSeed:'seed', nonce:0 }; } }
export function writeDB(db: DB){ try { fs.writeFileSync(DB_PATH, JSON.stringify(db)); } catch {} }
export function credit(userId: string, credits: number, meta?: any){ const db = readDB(); const u = db.users[userId] || { id:userId, balance:100, vipPoints:0, clientSeed:'client' }; u.balance += credits; db.users[userId]=u; db.webhooks.push({type:'credit', userId, credits, meta, ts:Date.now()}); writeDB(db); return u.balance; }
