// src/app/page.tsx
import Image from "next/image";
import Link from "next/link";
import Quote from "./components/quote";
import PostageFrame from "./components/PostageFrame";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1.4fr,1fr] xl:grid-cols-[500px,1fr] gap-10 lg:gap-16 items-start">
      {/* Left column: Quote card */}
      <aside className="lg:col-start-1 lg:row-start-1 self-stretch flex">
        <Quote  />   {/* will fill the full height */}
      </aside>

      {/* Right column: Title, intro, photo frame */}
      <section className="lg:col-start-2 lg:row-start-1 self-stretch">
        <h1 className="font-serif text-5xl md:text-5xl text-grape-700 leading-tight mb-2">
          AYAH ALMUSADDY
        </h1>
        <p className="max-w-2xl text-lg text-gray-800">
          A little corner of the internet I’ve carved out for my writing pieces
          and a way to show off my technical projects and skills.
        </p>
        <Link href="/about" className="link-arrow mt-4 inline-block">
          Learn about me →
        </Link>

        <PostageFrame className="mt-10 bg-white">
          <div className="relative">
            <Image
              src="/me.png"
              alt="Ayah holding a cake at night"
              width={500}
              height={500}
              className="block h-auto w-full"
              priority
            />
          </div>
        </PostageFrame>
      </section>
    </div>
  );
}

