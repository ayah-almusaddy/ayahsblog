"use client";

import { useEffect, useMemo, useState } from "react";
import QuoteFrame from "./quote_frame";
import { inriaSerif, inriaSans } from "../fonts";

type QuoteItem = { text: string; author: string };

const QUOTES: QuoteItem[] = [
  { text: "To care so much. Grief does that.", author: "Sally Rooney",},
  { text: "Yes, the world makes room for goodness and decency, he thinks: and the task of life is to show goodness to others, not to complain about their failings.", author: "Sally Rooney" },
  { text: "And what if life is just a collection of essentially unrelated experiences? Why does one thing have to follow meaningfully from another?", author: "Sally Rooney" },
  { text: "The ability to read awoke inside of me some long dormant craving to be mentally alive.", author: "Malcolm X" },
  { text: "Forgive me, for all the things I did but mostly for the ones that I did not.", author: "Donna Tartt" },
  { text: "“We think we have many desires, but in fact we have only one. What is it?” “To live,” said Camilla. “To live forever,”", author: "Donna Tartt" },
  { text: "A society has no chance of success if its women are uneducated.", author: "Khaled Hosseini" },
  { text: "Sometimes, immersed in his books, there would come to him the awareness of all that he did not know, of all that he had not read; and the serenity for which he labored was shattered as he realized the little time he had in life to read so much, to learn what he had to know.", author: "John Williams" },
  { text: "If my life is going to mean anything, I have to live it myself.", author: "Rick Riordan" },
  { text: "You must learn some of my philosophy. Think only of the past as its remembrance gives you pleasure.", author: "Jane Austen" },
];

// Day-of-year helper (local time)
function dayOfYear(d: Date) {
  const start = new Date(d.getFullYear(), 0, 0);
  const diff = d.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}

// Milliseconds until next local midnight
function msUntilNextMidnight(now = new Date()) {
  const next = new Date(now);
  next.setHours(24, 0, 0, 0); // start of next day
  return next.getTime() - now.getTime();
}

export default function Quote() {
  // Force a re-render at midnight by bumping this date
  const [today, setToday] = useState<Date>(() => new Date());

  useEffect(() => {
    // Update at the upcoming midnight, then every 24h
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    let intervalId: ReturnType<typeof setInterval> | null = null;

    function schedule() {
      timeoutId = setTimeout(() => {
        setToday(new Date());
        // After the first tick, update every 24 hours
        intervalId = setInterval(() => setToday(new Date()), 24 * 60 * 60 * 1000);
      }, msUntilNextMidnight());
    }

    schedule();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  // Deterministic daily pick (changes with the date, not page refresh)
  const quote = useMemo(() => {
    const index = dayOfYear(today) % QUOTES.length;
    return QUOTES[index];
  }, [today]);

  return (
    <QuoteFrame className="" stroke="#852E92" viewBox="0 0 514 818" padding={55}>
      <div className="flex h-full flex-col justify-between">
        <p
          className={`${inriaSerif.className} text-4xl text-center mb-5`}
          style={{ color: "#731082" }}
        >
          Quote of the Day
        </p>

        <blockquote className={`${inriaSans.className} text-lg text-black text-center`}>
          “{quote.text}”
        </blockquote>

        <p
          className={`${inriaSans.className} mt-4 text-sm text-black italic font-light text-right`}
        >
          — {quote.author}
        </p>
      </div>
    </QuoteFrame>
  );
}
