import "./globals.css";
import "./overrides.css";
import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { getSessionReadOnly } from "@/lib/auth";
import { FXProvider } from "@/components/chrome/FXProvider";
import { AccentPicker } from "@/components/ui/AccentPicker";
import { WalletPill } from "@/components/wallet/WalletPill";

export const metadata = {
  title: "Norbet — Demo Casino",
  description: "Demo-only crypto casino template. Not real gambling.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const session = getSessionReadOnly();
  return (
    <html lang="en">
      <body>
        <FXProvider />
        <header className="border-b border-white/5 sticky top-0 z-40 backdrop-blur bg-surface/70">
          <div className="container-xl flex items-center gap-4 py-3">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/norbet-logo.svg" alt="Norbet" width={120} height={30} />
            </Link>
            <nav className="flex gap-3 text-sm">
              <Link href="/casino" className="hover:underline">Casino</Link>
              <Link href="/live" className="hover:underline">Live</Link>
              <Link href="/sports" className="hover:underline">Sports</Link>
              <Link href="/promotions" className="hover:underline">Promotions</Link>
              <Link href="/vip" className="hover:underline">VIP</Link>
              <Link href="/affiliates" className="hover:underline">Affiliates</Link>
              <Link href="/blog" className="hover:underline">Blog</Link>
              <Link href="/help" className="hover:underline">Help</Link>
              <Link href="/admin" className="hover:underline">Admin</Link>
            </nav>
            <div className="ml-auto flex items-center gap-3">
              <span className="text-xs text-white/60 hidden sm:block">Hello, {session.name}</span>
              <WalletPill />
            </div>
          </div>
        </header>
        <main className="container-xl py-6">{children}</main>
        <footer className="border-t border-white/5 mt-10">
          <div className="container-xl py-8 text-xs text-white/60 space-y-2">
            <div className="flex flex-wrap gap-4">
              <Link href="/responsible-gaming" className="hover:underline">Responsible Gaming</Link>
              <Link href="/terms" className="hover:underline">Terms</Link>
              <Link href="/privacy" className="hover:underline">Privacy</Link>
              <Link href="/kyc-aml" className="hover:underline">KYC/AML</Link>
            </div>
            <p>Norbet is a demo-only project. No real-money gambling. Real deployments require licenses, KYC/AML, and compliance.</p>
          </div>
        </footer>
        <AccentPicker />
      </body>
    </html>
  );
}
