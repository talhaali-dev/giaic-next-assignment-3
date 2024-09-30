"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-4xl">Footer Page</h1>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <Link href={"/navbar"} className="p-4 bg-white border-2  border-gray-300 rounded-md">
          Navbar
        </Link>
        <Link href={"/contact"} className="p-4 bg-white border-2 border-gray-300 rounded-md">
          Contact
        </Link>
        <Link href={"/footer"} className="p-4 bg-white border-2 border-gray-300 rounded-md">
          footer
        </Link>
        <Link href={"/about"} className="p-4 bg-white border-2 border-gray-300 rounded-md">
          about
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <button
          onClick={() => router.push("/about")}
          className="p-4 bg-emerald-400 rounded-md border-none"
        >
          go to about Page
        </button>
        <button
          onClick={() => router.push("/footer")}
          className="p-4 bg-emerald-400 rounded-md border-none"
        >
          go to footer Page
        </button>
        <button
          onClick={() => router.push("/contact")}
          className="p-4 bg-emerald-400 rounded-md border-none"
        >
          go to contact Page
        </button>
        <button
          onClick={() => router.push("/navbar")}
          className="p-4 bg-emerald-400 rounded-md border-none"
        >
          go to navbar Page
        </button>
      </div>
    </div>
  );
}
