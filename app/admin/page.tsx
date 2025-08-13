import { listWebhooks } from "@/lib/wallet";
import { readDB } from "@/lib/demo-db";
export const dynamic = 'force-dynamic';
export default function Admin(){
  const webhooks = listWebhooks();
  const db = readDB();
  const users = Object.values(db.users);
  return <div className="space-y-6">
    <h1 className="text-2xl font-bold">Admin (Demo)</h1>
    <div className="card">
      <h2 className="font-semibold mb-2">Users</h2>
      <table className="table"><thead><tr><th>ID</th><th>Balance</th><th>VIP</th></tr></thead><tbody>
        {users.map(u=>(<tr key={u.id}><td className="truncate max-w-[180px]">{u.id}</td><td>{u.balance.toFixed(2)}</td><td>{u.vipPoints}</td></tr>))}
      </tbody></table>
    </div>
    <div className="card">
      <h2 className="font-semibold mb-2">Webhook Events</h2>
      <pre className="text-xs whitespace-pre-wrap">{JSON.stringify(webhooks.slice(-100), null, 2)}</pre>
    </div>
  </div>
}
