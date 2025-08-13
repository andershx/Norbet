import Link from "next/link";
export default function Home(){
  return (
    <div className="space-y-6">
      <section className="card p-8 text-center">
        <h1 className="text-3xl font-bold mb-2">Welcome to Norbet (Demo)</h1>
        <p className="text-white/70 max-w-2xl mx-auto">Deploy-ready demo casino. Runs in Demo Mode; Stripe test and Coinbase sandbox available via env keys.</p>
        <div className="flex gap-3 justify-center mt-6">
          <Link href="/casino" className="btn">Play Dice</Link>
          <Link href="/casino#crash" className="btn btn-outline">Try Crash</Link>
          <Link href="/deposit" className="btn">Deposit (Test)</Link>
        </div>
      </section>
      <section className="grid md:grid-cols-3 gap-4">
        <div className="card"><h3 className="font-semibold mb-1">Provably Fair</h3><p className="text-sm text-white/70">Server & client seeds with HMAC-SHA256.</p></div>
        <div className="card"><h3 className="font-semibold mb-1">Crypto & Cards (Test)</h3><p className="text-sm text-white/70">Stripe test cards and Coinbase sandbox.</p></div>
        <div className="card"><h3 className="font-semibold mb-1">Responsible Gaming</h3><p className="text-sm text-white/70">Age/cooldowns/limits — demo toggles.</p></div>
      </section>
    </div>
  );
}
