import Image from 'next/image';
import Link from 'next/link';

export function GameThumb({ href, title, img }: { href: string; title: string; img: string }){
  return (
    <Link href={href} className="group block rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition shadow-soft">
      <div className="relative h-36">
        <Image src={img} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition" />
      </div>
      <div className="p-3 flex items-center justify-between">
        <div className="font-semibold">{title}</div>
        <div className="text-xs rounded-full px-2 py-1" style={{background:'var(--accent,#1B8EF2)'}}>Play</div>
      </div>
    </Link>
  );
}
