import Link from "next/link";
import Quote from "./components/quote";
import { WRITINGS } from "@/lib/writing";

export default function Home() {
  const recent = [...WRITINGS]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <section className="flex justify-center px-6 md:px-8">
      <div className="max-w-prose w-full space-y-12">
        
        {/* TOP SECTION: Quote of the Day */}
        <div className="space-y-5">
          <h2 className="text-3xl font-semibold text-gray-800">quote of the day</h2>
          <Quote />
        </div>

        {/* DIVIDER - Now featuring your custom purple! */}
        <hr className="border-t-[1.5px] border-[#731082] opacity-60" />

        {/* BOTTOM SECTION: Recent Writings */}
        <div className="space-y-5">
          <h2 className="text-3xl font-semibold text-gray-800">recent writings</h2>
          
          <div className="flex flex-col space-y-3">
            {recent.map((w) => (
              <Link
                key={w.id}
                href={w.href}
                className="group w-fit"
              >
                <span className="text-base text-gray-800 underline underline-offset-2 group-hover:text-[#731082] transition-colors duration-200">
                  {w.title}
                </span>
              </Link>
            ))}
          </div>

          <div className="pt-2">
            <Link
              href="/writing"
              className="text-sm text-gray-500 hover:text-[#731082] transition-colors duration-200"
            >
              view all writings →
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}