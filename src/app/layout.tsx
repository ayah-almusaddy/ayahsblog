// app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react"
import Navigation from "./components/nav";

export const metadata = {
  title: "ayah's blog",
  description: "a writing blog",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main className="max-w-3xl mx-auto px-6 py-24">
          {children}
        </main>
      </body>
    </html>
  );
}

