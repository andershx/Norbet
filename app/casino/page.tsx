"use client";
import { Dice } from "@/components/games/dice";
import { Crash } from "@/components/games/crash";
import { Mines } from "@/components/games/mines";
import { Limbo } from "@/components/games/limbo";
import Plinko from "@/components/games/plinko";

export default function Casino(){
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Casino</h1>
      <Dice/>
      <div id="crash"/>
      <Crash/>
      <Mines/>
      <Limbo/>
      <Plinko/>
    </div>
  );
}
