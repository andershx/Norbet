import Link from "next/link";
import { Gift, Users, Crown, BookOpen, LifeBuoy, Languages, PanelsTopLeft, Radio, ArrowRightLeft } from "lucide-react";

export function Sidebar(){
  return (
    <aside className="sidebar">
      <div className="px-4 py-4 text-lg font-bold">Norbet</div>
      <div className="px-3"><Link className="" href="/casino"><PanelsTopLeft size={18}/>Casino</Link></div>
      <div className="px-3"><Link href="/sports"><Radio size={18}/>Sports</Link></div>

      <div className="section">Engage</div>
      <div className="px-3"><Link href="/promotions"><Gift size={18}/>Promotions</Link></div>
      <div className="px-3"><Link href="/affiliates"><Users size={18}/>Affiliate</Link></div>
      <div className="px-3"><Link href="/vip"><Crown size={18}/>VIP Club</Link></div>
      <div className="px-3"><Link href="/blog"><BookOpen size={18}/>Blog</Link></div>

      <div className="section">Support</div>
      <div className="px-3"><Link href="/responsible-gaming"><LifeBuoy size={18}/>Responsible Gambling</Link></div>
      <div className="px-3"><Link href="/help"><LifeBuoy size={18}/>Live Support</Link></div>
      <div className="px-3"><Link href="/"><Languages size={18}/>Language: English</Link></div>
    </aside>
  );
}
