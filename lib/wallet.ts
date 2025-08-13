import { readDB, writeDB, credit, type DepositEvent } from './demo-db';
export function getOrCreateUser(uid: string){
  const db = readDB();
  const u = db.users[uid] || { id: uid, balance: 100, vipPoints: 0, clientSeed: 'client' };
  db.users[uid] = u; writeDB(db); return u;
}
export function recordDeposit(ev: DepositEvent){
  const db = readDB();
  db.deposits.push(ev); writeDB(db); return ev;
}
export function listDeposits(uid?: string){
  const db = readDB();
  return db.deposits.filter(d => !uid || d.userId==uid);
}
export function listWebhooks(){ return readDB().webhooks; }
export function creditUser(uid: string, credits: number, meta?: any){ return credit(uid, credits, meta); }
