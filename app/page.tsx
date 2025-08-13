import Link from "next/link";
import { GameCard } from "@/components/game/GameCard";

export default function Home(){
  return (
    <div className="space-y-6">
      <section className="hero">
        <h1 className="text-3xl font-extrabold mb-2">Welcome to Norbet</h1>
        <p className="text-ink/70 max-w-2xl">A vibrant, demo crypto casino UI with modern gradients and glass surfaces. Deploy-ready on Vercel. No real-money features enabled.</p>
        <div className="flex gap-3 mt-6">
          <Link href="/casino" className="btn">Enter Casino</Link>
          <Link href="/deposit" className="btn btn-outline">Deposit (Test)</Link>
        </div>
      </section>

      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold">Trending Games</h2>
          <Link className="text-sm text-ink/70 hover:underline" href="/casino">See all</Link>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <GameCard title="Dice" href="/casino#dice" tag="Classic"/>
          <GameCard title="Crash" href="/casino#crash" tag="Hot"/>
          <GameCard title="Mines" href="/casino#mines" tag="Chill"/>
          <GameCard title="Limbo" href="/casino#limbo" tag="Low house edge"/>
        </div>
      </section>
    </div>
  );
}
