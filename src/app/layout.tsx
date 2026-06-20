// === src/app/layout.tsx ===
import "./globals.css";
import { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";
import Navigation from "./components/nav";
import { Inter, Lora } from "next/font/google";
import Script from "next/script"; // <-- 1. Imported Script here

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });

export const metadata = {
  title: "ayahs blog",
};

export default function RootLayout({ children }: { children: ReactNode }) {
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

        {/* --- 2. Google Analytics Scripts Added Here --- */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PFLPDZY5SR"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-PFLPDZY5SR');
          `}
        </Script>

        {/* Rendering the Vercel Analytics you had imported */}
        <Analytics />
      </body>
    </html>
  );
}