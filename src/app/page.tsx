import Image from "next/image";
import Link from "next/link";
import Quote from "./components/quote";
import MyselfFrame from "./components/myself_frame";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1.4fr,1fr] xl:grid-cols-[500px,1fr] gap-10 lg:gap-16 items-start">
      <aside className="lg:col-start-1 lg:row-start-1 self-stretch flex">
        <Quote />
      </aside>

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

        <MyselfFrame
          className="mt-10"
          stroke="#731082"
          viewBox="0 0 920 510" 
          padding={70}
        >
          {/* inner dotted outline (manual, not SVG) */}
          <div
            className="absolute inset-0 pointer-events-none border-2 border-dotted rounded-lg"
            style={{ inset: 20, borderColor: "#731082" }}
          />

          {/* your photo/content */}
          <div className="relative h-[min(60vw,300px)] ">
            <Image
              src="/me.png"
              alt="Ayah holding a cake at night"
              fill
              className="object-cover rounded-md"
              priority
            />
          </div>
        </MyselfFrame>
      </section>
    </div>
  );
}
