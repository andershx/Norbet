import crypto from 'crypto';
export function hmacSHA256(key: string, msg: string){ return crypto.createHmac('sha256', key).update(msg).digest('hex'); }
export function roll(serverSeed: string, clientSeed: string, nonce: number){
  const hash = hmacSHA256(serverSeed, `${clientSeed}:${nonce}`);
  let i=0; while(true){ const seg = hash.substring(i*5,i*5+5); if(seg.length<5) return 0; const num = parseInt(seg,16); const res = num % 10000; const r = res/100; if(r<100) return r; i++; }
}
export function crashPoint(serverSeed: string, clientSeed: string, nonce: number){
  const hash = hmacSHA256(serverSeed, `${clientSeed}:${nonce}`);
  const h = parseInt(hash.slice(0,52), 16); const e = 2**52;
  return Math.max(1.0, Math.floor(((100*e)/(e-(h%e))))/100);
}
