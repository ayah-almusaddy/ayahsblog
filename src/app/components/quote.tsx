"use client";

import { useEffect, useMemo, useState } from "react";
import QuoteFrame from "./quote_frame";
import { inriaSerif, inriaSans } from "../fonts";

type QuoteItem = { text: string; author: string };

const QUOTES: QuoteItem[] = [
  { text: "Art doesn’t require training, dear child, art just needs friends.”", author: "Fredrik Backman",},
  { text: "Disappointment is a powerful thing. Used correctly, it is stronger than fear, more terrible than physical pain, if you see it in the eyes of the one you love, you’ll do almost anything to make it stop", author: "Fredrik Backman" },
  { text: "It’s a funny thing. The person we fall in love with, we hardly ever call by their name. Because it’s somehow just so obvious that it’s you that I’m talking to, that it’s you I’m always thinking of. Who else?", author: "Fredrik Backman" },
  { text: "The world is full of miracles, but none greater than how far a young person can be carried by someone else’s belief in them.", author: "Fredrik Backman" },
  { text: "It’s so easy to be a critic, any coward can do that. But art doesn’t need critics, art has enough enemies already. Art needs friends.", author: "Fredrik Backman" },
  { text: "Act out being alive, like a play. And after a while, a long while, it will be true.", author: "John Steinbeck" },
  { text: "A man who can't bear to share his habits is a man who needs to quit them.", author: "Stephen King" },
  { text: "‘I wanted you to see what real courage is, instead of getting the idea that courage is a man with a gun in his hand. It's when you know you're licked before you begin but you begin anyway and you see it through no matter what. You rarely win, but sometimes you do. Mrs. Dubose won, all ninety-eight pounds of her. According to her views, she died beholden to nothing and nobody. She was the bravest person I ever knew.’", author: "Harper Lee" },
  { text: "Humans need fantasy to be human. To be the place where the falling angel meets the rising ape.", author: "Terry Pratchett" },
  { text: "He who controls the past controls the future. He who controls the present controls the past.", author: "George Orwell" },
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
