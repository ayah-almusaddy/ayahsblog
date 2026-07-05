"use client";

import { useEffect, useMemo, useState } from "react";

type QuoteItem = { text: string; author: string };

const QUOTES: QuoteItem[] = [
  { text: "And I guess a man’s importance in the world can be measured by the quality and number of his glories. It is a lonely thing but it relates us to the world. It is the mother of all creativeness, and it sets each man separate from all other men.", author: "John Steinbeck" },
  { text: "And this I believe: that the free, exploring mind of the individual human is the most valuable thing in the world. And this I would fight for: the freedom of the mind to take any direction it wishes, undirected. And this I must fight against: any idea, religion, or government which limits or destroys the individual", author: "John Steinbeck" },
  { text: "It would be absurd if we did not understand both angels and devils, since we invented them.", author: "John Steinbeck" },
  { text: "He had an idea that even when beaten he could steal a little victory by laughing at defeat.", author: "John Steinbeck" },
  { text: "No story has power, nor will it last, unless we feel in ourselves that it is true and true of us. What a great burden of guilt men have", author: "John Steinbeck" },
  { text: "We have only one story. All novels, all poetry, are built on the never-ending contest in ourselves of good and evil. And it occurs to me that evil must constantly respawn, while good, while virtue, is immortal. Vice has always a new fresh young face, while virtue is venerable as nothing else in the world is.", author: "John Steinbeck" },
  { text: "Act out being alive, like a play. And after a while, a long while, it will be true.", author: "John Steinbeck" },
  { text: "'And I feel that I am a man. And I feel that a man is a very important thing – maybe more important than a star. That is not theology. I have no bent toward gods. But I have a new love for that glittering instrument, the human soul. It is a lovely and unique thing in the universe. It is always attacked and never destroyed – because 'Thou mayest'", author: "John Steinbeck" },
  { text: "Humans are caught – in their lives, in their thoughts, in their hungers and ambitions, in their avarice and cruelty, and in their kindness and generosity too – in a net of good and evil. I think this is the only story we have and that it occurs on all levels of feeling and intelligence. Virtue and vice were warp and woof of our first consciousness, and they will be the fabric of our last, and this despite any changes we may impose on field and river and mountain, on economy and manners. There is no other story. A man, after he has brushed off the dust and chips of his life, will have left only the hard, clean questions: Was it good or was it evil? Have I done well – or ill?", author: "John Steinbeck" },
  { text: "Perhaps the best conversationalist in the world is the man who helps others to talk.", author: "John Steinbeck" },
  { text: "And now that you don’t have to be perfect, you can be good.", author: "John Steinbeck" },
  { text: "It’s a beautiful thing, the destruction of words.", author: "George Orwell" },
  {text: "Rebellion meant a look in the eyes, an inflection of the voice; at the most, an occasional whispered word.", author: "George Orwell"},
  {text: "Freedom is the freedom to say that two plus two makes four. If that is granted, all else follows.", author: "George Orwell"},
  {text:"Perhaps it was only when people were near the starvation level that they had anything to sing about.", author: "George Orwell"},
  {text:"If one is to rule and to continue ruling, one must be able to dislocate the sense of reality.", author: "George Orwell"},
  {text:"Perhaps one did not want to be loved so much as to be understood.", author: "George Orwell"}

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
  const [today, setToday] = useState<Date>(() => new Date());

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    let intervalId: ReturnType<typeof setInterval> | null = null;

    function schedule() {
      timeoutId = setTimeout(() => {
        setToday(new Date());
        intervalId = setInterval(() => setToday(new Date()), 24 * 60 * 60 * 1000);
      }, msUntilNextMidnight());
    }

    schedule();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  const quote = useMemo(() => {
    const index = dayOfYear(today) % QUOTES.length;
    return QUOTES[index];
  }, [today]);

  return (
    <div className="space-y-3">
      <blockquote className="text-lg text-gray-800 leading-relaxed">
        “{quote.text}”
      </blockquote>
      <p className="text-base text-gray-500">
        — {quote.author}
      </p>
    </div>
  );
}