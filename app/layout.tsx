import "./globals.css";
import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { Wallet } from "@/components/wallet";
import { getSessionReadOnly } from "@/lib/auth";
import { Sidebar } from "@/components/chrome/Sidebar";
import { Topbar } from "@/components/chrome/Topbar";

export const metadata = { title: "Norbet — Demo Casino", description: "Demo-only crypto casino template. Not real gambling." };

export default function RootLayout({ children }: { children: ReactNode }) {
  const session = getSessionReadOnly();
  return (
    <html lang="en">
      <head>
        {/* Visual font similar vibe to modern casino UIs (not Stake's font) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="app-bg">
        <Sidebar />
        <div className="md:pl-60">
          <div className="topbar border-b border-white/5">
            <div className="container-xl flex items-center gap-4 py-3">
              <Link href="/" className="flex items-center gap-2">
                <Image src="/norbet-logo.svg" alt="Norbet" width={120} height={30} />
              </Link>
              <nav className="hidden sm:flex gap-3 text-sm">
                <Link href="/casino" className="hover:underline">Casino</Link>
                <Link href="/sports" className="hover:underline">Sports</Link>
                <Link href="/promotions" className="hover:underline">Promotions</Link>
                <Link href="/vip" className="hover:underline">VIP</Link>
                <Link href="/affiliates" className="hover:underline">Affiliates</Link>
                <Link href="/blog" className="hover:underline">Blog</Link>
                <Link href="/help" className="hover:underline">Help</Link>
                <Link href="/admin" className="hover:underline">Admin</Link>
              </nav>
              <div className="ml-auto flex items-center gap-2">
                <span className="text-xs text-ink/60 hidden md:block">Hello, {session.name}</span>
                <Wallet />
              </div>
            </div>
          </div>
          <main className="container-xl py-6">{children}</main>
          <footer className="border-t border-white/5 mt-10">
            <div className="container-xl py-8 text-xs text-ink/70 space-y-2">
              <div className="flex flex-wrap gap-4">
                <Link href="/responsible-gaming" className="hover:underline">Responsible Gaming</Link>
                <Link href="/terms" className="hover:underline">Terms</Link>
                <Link href="/privacy" className="hover:underline">Privacy</Link>
                <Link href="/kyc-aml" className="hover:underline">KYC/AML</Link>
              </div>
              <p>Norbet is a demo-only project. No real-money gambling. Real deployments require licenses, KYC/AML, and compliance.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
