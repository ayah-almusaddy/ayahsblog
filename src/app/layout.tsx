// === src/app/layout.tsx ===
import "./globals.css";
import { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";
import Navigation from "./components/nav";
import { Inter, Lora } from "next/font/google";


const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });


export const metadata = {
title: "ayahs blog",
};


// app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${lora.variable} bg-[var(--bg)] min-h-screen`}
      >
        <header className="sticky top-0 z-40 bg-[var(--bg)]/80 backdrop-blur border-b border-black/5">
          <Navigation />
        </header>
        <main className="mx-auto max-w-6xl py-10">{children}</main>
      </body>
    </html>
  );
}

