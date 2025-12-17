import React from "react";
import Link from "next/link";
import { WRITINGS } from "@/lib/writing";

// helper: display date nicely
function formatDate(iso: string) {
  // "2025-12-05" -> "Dec 5, 2025"
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function WritingPage() {
  // newest first (based on date)
  const items = [...WRITINGS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <section className="space-y-5 flex justify-center">
      <div className="max-w-prose w-full space-y-5">
        <h1 className="text-3xl font-semibold text-gray-800">writing pieces</h1>

        <p className="text-gray-700">these are various pieces of writing i've done.</p>

        <hr className="border-gray-300" />

        {/* Writing list */}
        <div className="space-y-2">
          {items.map((w) => (
            <Link
              key={w.id}
              href={w.href}
              className="group flex items-baseline justify-between gap-6"
            >
              <span className="text-base text-gray-800 underline underline-offset-2 group-hover:text-gray-500">
                {w.title}
              </span>

              <span className="shrink-0 text-sm text-gray-500 tabular-nums">
                {formatDate(w.date)}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
