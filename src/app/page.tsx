import Image from "next/image";
import Link from "next/link";
import Quote from "./components/quote";
import MyselfFrame from "./components/myself_frame";
import Flower from "./components/flower";
import SmallFlower from "./components/flower2";
import ScrollFrame from "./components/scroll";
import Todo from "./components/todo"; // make sure this exists
import { inriaSerif, inriaSans, kaiseiTokumin } from "./fonts";
import { WRITINGS } from "@/lib/writing"; // import writings from writing page

function formatDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function Home() {
  const recent = [...WRITINGS]
    .sort((a, b) => b.id - a.id) // or sort by date if you prefer
    .slice(0, 3);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1.4fr,1fr] xl:grid-cols-[500px,1fr] gap-10 lg:gap-16 items-start">
      {/* LEFT: quote */}
      <aside className="lg:col-start-1 lg:row-start-1 self-stretch flex">
        <Quote />
      </aside>

      {/* RIGHT: intro + photo frame */}
      <section className="lg:col-start-2 lg:row-start-1 self-stretch">
        <h1
          className={`${inriaSerif.className} text-6xl mb-3 font-bold`}
          style={{ color: "#731082" }}
        >
          AYAH ALMUSADDY
        </h1>

        <p
          className={`${inriaSans.className} max-w-2xl text-lg`}
          style={{ color: "#731082" }}
        >
          A little corner of the internet I’ve carved out for my writing pieces
          and anything else that interests me.
        </p>

        <Link
          href="/about"
          className={`${inriaSans.className} link-arrow mt-4 inline-block font-bold text-lg italic`}
          style={{ color: "#731082" }}
        >
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

          <Flower aria-hidden="true" className="absolute -left-42 -bottom-30" />
          <SmallFlower aria-hidden="true" className="absolute -right-27 -top-27" />

          {/* your photo/content */}
          <div className="relative h-[min(60vw,300px)]">
            <Image
              src="/me2.png"
              alt="me reading a book"
              fill
              className="object-cover rounded-md"
              priority
            />
          </div>
        </MyselfFrame>
      </section>

      {/* BOTTOM ROW: scroll + todo */}
      <section className="lg:col-span-2 w-full">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-16 items-start">
          <div className="md:col-span-3">
            <ScrollFrame>
              <div className={` ${kaiseiTokumin.className} space-y-3 tracking-[0.10em] text-[20px] text-gray-900 text-center`} >
                <ul className="space-y-3">
                  {recent.map((w) => ( <li key={w.id} className="" >
                      <Link href={w.href} className="hover:opacity-60 transition-opacity">
                        -- {w.title} --
                      </Link> </li> ))}
                </ul>
              </div>
            </ScrollFrame>
          </div>
          <div className="md:col-span-2">
            <Todo
              className="w-full scale-[1.05] origin-top"
              stroke="#731082"
              padding={70}
            >
              <div className="translate-y-7">
                <ul
                  className={`${inriaSans.className} list-disc pl-2 space-y-3 text-gray-800`}
                >
                  <li>redesign the writing page (maybe add some drawings)</li>
                  <li>unfortunately write an About Me</li>
                  <li>figure out why analytics isnt working rn</li>
                  <li>figure out the sizing on other technologies</li>
                </ul>
              </div>
            </Todo>

          </div>
        </div>
      </section>

    </div>
  );
}
