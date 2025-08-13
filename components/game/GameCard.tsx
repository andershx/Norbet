import Link from "next/link";

export function GameCard({ title, href, tag }: { title: string; href: string; tag?: string }){
  return (
    <Link href={href} className="game-card hover:scale-[1.01] transition">
      <div className="thumb">
        <div className="shine" />
      </div>
      <div className="body">
        <div className="title">{title}</div>
        {tag ? <span className="tag">{tag}</span> : null}
      </div>
    </Link>
  );
}
