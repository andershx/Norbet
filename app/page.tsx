import { HeroBanner } from "@/components/home/HeroBanner";
import { GameThumb } from "@/components/game/GameThumb";

export default function Home(){
  return (
    <div className="space-y-6">
      <HeroBanner />
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Trending Games</h2>
          <a href="/casino" className="text-sm underline">See all</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <GameThumb href="/casino" title="Dice" img="/art/dice.svg" />
          <GameThumb href="/casino#crash" title="Crash" img="/art/crash.svg" />
          <GameThumb href="/casino#plinko" title="Plinko" img="/art/plinko.svg" />
          <GameThumb href="/casino" title="Mines" img="/art/mines.svg" />
          <GameThumb href="/casino" title="Limbo" img="/art/limbo.svg" />
          <GameThumb href="/sports" title="Sports" img="/art/sports.svg" />
        </div>
      </section>
    </div>
  );
}
