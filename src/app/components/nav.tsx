import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="w-full py-6 px-6">
      <div className="max-w-3xl mx-auto">
        <ul className="flex justify-end space-x-8 text-xl text-gray-700 tracking-wide">
          <li>
            <Link href="/" className="hover:text-black lowercase">home</Link>
          </li>
          <li>
            <Link href="/writing" className="hover:text-black lowercase">writing</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-black lowercase">about</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

