export function HeroBanner(){
  return (
    <section className="relative overflow-hidden rounded-2xl p-8 md:p-12 border border-white/10 bg-gradient-to-br from-[var(--accent,#1B8EF2)]/30 via-transparent to-black/20">
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[var(--accent,#1B8EF2)]/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-cyan-400/10 blur-3xl" />
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Welcome to Norbet</h1>
      <p className="text-white/70 max-w-2xl mt-2">Fast, sleek, and provably fair. Try Dice, Crash, Plinko, Mines, and Limbo in Demo Mode—then enable test payments when you’re ready.</p>
      <div className="mt-6 flex gap-3">
        <a href="/casino" className="btn">Play Now</a>
        <a href="/deposit" className="btn btn-outline">Deposit (Test)</a>
      </div>
    </section>
  );
}
