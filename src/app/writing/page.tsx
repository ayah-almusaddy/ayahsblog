import React from "react";
import Link from "next/link";


export default function WritingPage() {
  return (
    <section className="space-y-5 flex justify-center">
      <div className="max-w-prose w-full space-y-5">
        <h1 className="text-3xl font-semibold text-gray-800">writing pieces</h1>

        <p className="text-gray-700">
          these are various pieces of writing i've done. currently, there's 
          not much here, but i plan on writing about everything — journal 
          entries, creative writing, book reviews, research papers, and 
          whatever else i want to experiment with. i'm not an expert writer 
          (far from it, actually), but I am tenacious and stubborn and will
          learn the skill of the pen. Or more accurately - the keyboard.
        </p>

        <hr className="border-gray-300" />

        {/* Writing list */}
        <div className="space-y-3">

          <Link href="/writing/reinvention" className="block text-base text-gray-800 underline underline-offset-2 hover:text-gray-500">
            What constitues reinvention?
          </Link>
          
          <Link href="/writing/hello" className="block text-base text-gray-800 underline underline-offset-2 hover:text-gray-500">
            Hello
          </Link>

          <Link href="/writing/mbti" className="block text-base text-gray-800 underline underline-offset-2 hover:text-gray-500">
            Taking every MBTI test so you don't have to
          </Link>

        </div>
      </div>
    </section>
  );
}
